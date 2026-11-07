// Vercel serverless function: POST /api/enquiry
// Automatic meeting booking for Ravi's portfolio visitors.
//
// Flow (per owner's decision: fully automatic, client proposes the time):
//  1. Validate + spam-guard the request.
//  2. Check the preferred time falls inside Ravi's bookable windows (IST),
//     derived from his daily routine (never during office 09:30-19:00,
//     project blocks, reel time or family time).
//  3. If Google Calendar env is configured: free/busy check, then create a
//     REAL calendar event + Google Meet link -> status "booked".
//     On conflict -> return alternative free slots, nothing booked.
//  4. If Calendar is not configured -> status "pending": Ravi is emailed and
//     confirms himself. No Meet link is promised until a real event exists.
//  5. Ravi always gets an email with the details (booked or pending).
//
// Env:
//   RESEND_API_KEY, NOTIFY_EMAIL            -> notification email (required for email)
//   NOTIFY_FROM                             -> verified sender identity (never Ravi's Gmail as app sender)
//   GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN,
//   GOOGLE_CALENDAR_ID (default 'primary')  -> real booking + Meet links
//   BOOKING_DURATION_MIN (default 30)
//   BOOKABLE_WINDOWS (REQUIRED for auto-booking; unset = request/pending mode only)
//     Format: comma-separated "Day HH:MM-HH:MM" in Asia/Kolkata, e.g.
//     'Sat 10:00-12:00,Sun 15:00-18:00'. Auto-booking stays OFF until the owner
//     sets the hours he actually wants the bot to book.

export const config = { runtime: 'nodejs' };

const TZ = 'Asia/Kolkata';
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 5 requests / hour / IP
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  if (list.length >= 5) return true;
  list.push(now);
  hits.set(ip, list);
  return false;
}

const sanitize = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[<>]/g, '').trim().slice(0, max) : '';

interface Window { day: number; startMin: number; endMin: number }

function bookableWindows(): Window[] {
  const raw = (process.env.BOOKABLE_WINDOWS || '').trim();
  if (!raw) return [];
  const out: Window[] = [];
  for (const part of raw.split(',')) {
    const m = part.trim().match(/^(\w{3})\s+(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})$/);
    if (!m) continue;
    const day = DAYS.indexOf(m[1]);
    if (day < 0) continue;
    out.push({
      day,
      startMin: parseInt(m[2]) * 60 + parseInt(m[3]),
      endMin: parseInt(m[4]) * 60 + parseInt(m[5]),
    });
  }
  return out;
}

function durationMin(): number {
  return Math.min(Math.max(parseInt(process.env.BOOKING_DURATION_MIN || '30', 10) || 30, 15), 120);
}

// IST wall-clock fields for a Date
function istParts(d: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TZ, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false,
  }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value || '';
  return { day: DAYS.indexOf(get('weekday')), minutes: parseInt(get('hour')) % 24 * 60 + parseInt(get('minute')) };
}

function insideWindow(d: Date): boolean {
  const { day, minutes } = istParts(d);
  return bookableWindows().some((w) => w.day === day && minutes >= w.startMin && minutes + durationMin() <= w.endMin);
}

// Next candidate slots (start times) at/after `from`, scanning bookable windows.
function candidateSlots(from: Date, count: number): Date[] {
  const dur = durationMin();
  const out: Date[] = [];
  const cursor = new Date(from.getTime());
  // scan forward up to 21 days
  for (let i = 0; i < 21 * 24 * 4 && out.length < count * 4; i++) {
    cursor.setTime(cursor.getTime() + 15 * 60000);
    if (insideWindow(cursor)) out.push(new Date(cursor.getTime()));
    if (out.length && istParts(cursor).minutes + dur >= 24 * 60) break;
  }
  // thin out: keep slots at least `dur` apart
  const spaced: Date[] = [];
  for (const s of out) {
    if (!spaced.length || s.getTime() - spaced[spaced.length - 1].getTime() >= dur * 60000) spaced.push(s);
    if (spaced.length >= count) break;
  }
  return spaced;
}

async function getGoogleAccessToken(): Promise<string> {
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      grant_type: 'refresh_token',
    }),
  });
  if (!r.ok) throw new Error(`token ${r.status}`);
  return (await r.json()).access_token;
}

async function busyRanges(token: string, calendarId: string, timeMin: Date, timeMax: Date) {
  const r = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/freeBusy`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ timeMin: timeMin.toISOString(), timeMax: timeMax.toISOString(), items: [{ id: calendarId }] }),
    }
  );
  if (!r.ok) throw new Error(`freeBusy ${r.status}`);
  const data = await r.json();
  return (data?.calendars?.[calendarId]?.busy || []) as { start: string; end: string }[];
}

function clashes(start: Date, dur: number, busy: { start: string; end: string }[]): boolean {
  const s = start.getTime();
  const e = s + dur * 60000;
  return busy.some((b) => s < new Date(b.end).getTime() && e > new Date(b.start).getTime());
}

async function createEventWithMeet(token: string, calendarId: string, start: Date, name: string, email: string, reason: string) {
  const dur = durationMin();
  const end = new Date(start.getTime() + dur * 60000);
  const r = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?conferenceDataVersion=1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        summary: `Portfolio meeting: ${name}`,
        description: `Booked automatically via portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nTopic:\n${reason}`,
        start: { dateTime: start.toISOString(), timeZone: TZ },
        end: { dateTime: end.toISOString(), timeZone: TZ },
        conferenceData: { createRequest: { requestId: `portfolio-${Date.now()}`, conferenceSolutionKey: { type: 'hangoutsMeet' } } },
      }),
    }
  );
  if (!r.ok) throw new Error(`event ${r.status}`);
  const data = await r.json();
  return data?.conferenceData?.entryPoints?.find((p: any) => p.entryPointType === 'video')?.uri || data?.hangoutLink || null;
}

async function sendNotificationEmail(subject: string, html: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return false;
  const from = process.env.NOTIFY_FROM || 'Portfolio Bot <onboarding@resend.dev>';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], subject, html }),
  });
  return r.ok;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, message: 'Too many requests. Please use the WhatsApp option instead.' });
  }

  if (req.body?.website) return res.status(200).json({ ok: true, status: 'pending' }); // honeypot

  const name = sanitize(req.body?.name, 80);
  const email = sanitize(req.body?.email, 120);
  const reason = sanitize(req.body?.reason, 600);
  const preferredTime = sanitize(req.body?.preferredTime, 40);

  if (!name || !reason) return res.status(400).json({ ok: false, message: 'Please fill your name and what you want to discuss.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ ok: false, message: 'Please enter a valid email address.' });

  // datetime-local gives a naive string like "2026-11-09T10:30"; the form is
  // labeled IST, so interpret naive values as IST regardless of server timezone.
  const naive = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(preferredTime);
  const start = new Date(naive ? `${preferredTime}:00+05:30` : preferredTime);
  if (isNaN(start.getTime()) || start.getTime() < Date.now() + 30 * 60000) {
    return res.status(400).json({ ok: false, message: 'Please pick a time at least 30 minutes from now.' });
  }

  const calendarConfigured = !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN);
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
  const dur = durationMin();

  // Window check only when the owner configured bookable hours. Without them
  // nothing auto-books: every request becomes "pending" and Ravi confirms.
  const windowsConfigured = bookableWindows().length > 0;
  if (windowsConfigured && !insideWindow(start)) {
    const alts = candidateSlots(start, 3);
    return res.status(200).json({
      ok: false,
      outsideWindow: true,
      message: 'That time is outside Ravi\'s available hours. Pick one of these instead:',
      alternatives: alts.map((d) => d.toISOString()),
    });
  }

  let status: 'booked' | 'pending' = 'pending';
  let meetLink: string | null = null;

  if (calendarConfigured && windowsConfigured) {
    try {
      const token = await getGoogleAccessToken();
      const busy = await busyRanges(token, calendarId, new Date(start.getTime() - 24 * 3600e3), new Date(start.getTime() + 14 * 24 * 3600e3));
      if (clashes(start, dur, busy)) {
        const alts = candidateSlots(start, 6).filter((s) => !clashes(s, dur, busy)).slice(0, 3);
        return res.status(200).json({
          ok: false,
          conflict: true,
          message: 'That slot is already taken. These are free:',
          alternatives: alts.map((d) => d.toISOString()),
        });
      }
      meetLink = await createEventWithMeet(token, calendarId, start, name, email, reason);
      status = meetLink ? 'booked' : 'pending';
    } catch {
      status = 'pending'; // fall through; Ravi confirms manually
    }
  }

  const whenIST = start.toLocaleString('en-IN', { timeZone: TZ, dateStyle: 'full', timeStyle: 'short' });
  const emailHtml = `
    <h2>${status === 'booked' ? 'Meeting booked (automatic)' : 'New meeting request (needs your confirmation)'}</h2>
    <p><b>Name:</b> ${name}<br/>
    <b>Email:</b> ${email}<br/>
    <b>Time (IST):</b> ${whenIST} (${dur} min)<br/>
    <b>Status:</b> ${status === 'booked' ? 'On your calendar with a Meet link' : 'PENDING - not booked; please confirm with the visitor'}</p>
    ${meetLink ? `<p><b>Google Meet:</b> <a href="${meetLink}">${meetLink}</a></p>` : ''}
    <p><b>Topic:</b><br/>${reason.replace(/\n/g, '<br/>')}</p>
  `;
  const emailSent = await sendNotificationEmail(
    `[Portfolio] ${status === 'booked' ? 'Booked' : 'Request'}: ${name} - ${whenIST}`,
    emailHtml
  );

  return res.status(200).json({ ok: true, status, meetLink, emailSent });
}
