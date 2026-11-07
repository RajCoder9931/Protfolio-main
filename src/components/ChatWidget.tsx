import React, { useEffect, useRef, useState } from 'react';
import { PROFILE, waLink } from '../lib/site';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

type PanelView = 'chat' | 'booking';

interface BookingResult {
  ok: boolean;
  status?: 'booked' | 'pending';
  meetLink?: string;
  message?: string;
  emailSent?: boolean;
  outsideWindow?: boolean;
  conflict?: boolean;
  alternatives?: string[];
}

const formatSlot = (iso: string) =>
  new Date(iso).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

const toLocalInputValue = (iso: string) => {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const GREETING: ChatMessage = {
  role: 'assistant',
  content: `Hi! I'm Solo AI, ${PROFILE.shortName}'s assistant. Ask me anything about his services - websites, Meta & Google Ads, social media, WhatsApp chatbots. For a meeting, email or WhatsApp him directly for now - instant booking here is being connected.`,
};

const QUICK_REPLIES = ['What services do you offer?', 'Show me his projects', 'Book a meeting'];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<PanelView>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [booking, setBooking] = useState({ name: '', email: '', reason: '', datetime: '', website: '' });
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);
  const [bookingBusy, setBookingBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#chat') setOpen(true);
    if (window.location.hash === '#booking') { setOpen(true); setView('booking'); }
    const handler = (e: Event) => {
      setOpen(true);
      const detail = (e as CustomEvent).detail;
      if (detail?.booking) setView('booking');
    };
    window.addEventListener('open-portfolio-chat', handler);
    return () => window.removeEventListener('open-portfolio-chat', handler);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, view, bookingResult, sending]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    if (/book|meeting|meet|call|appointment|schedule|baat|discuss/i.test(trimmed) && trimmed.split(' ').length <= 6) {
      setMessages((m) => [
        ...m,
        { role: 'user', content: trimmed },
        { role: 'assistant', content: 'Meeting booking is being connected. For now, please contact Ravi by email or WhatsApp with your preferred time and topic.' },
      ]);
      setView('booking');
      setInput('');
      return;
    }

    const nextMessages = [...messages, { role: 'user' as const, content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setSending(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-12) }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: 'assistant', content: data.reply || 'Sorry, I could not answer that. Try the Contact section instead.' }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: `I'm having trouble right now. You can reach ${PROFILE.shortName} directly at ${PROFILE.email}.` },
      ]);
    } finally {
      setSending(false);
    }
  };

  const submitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingBusy) return;
    setBookingBusy(true);
    setBookingResult(null);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: booking.name,
          email: booking.email,
          reason: booking.reason,
          preferredTime: booking.datetime,
          website: booking.website, // honeypot - humans never fill this
        }),
      });
      const data: BookingResult = await res.json();
      setBookingResult(data);
      if (data.ok) {
        setMessages((m) => [
          ...m,
          {
            role: 'assistant',
            content:
              data.status === 'booked'
                ? `Done - your meeting is booked. Join here when it starts: ${data.meetLink}`
                : `Request sent to ${PROFILE.shortName}. He will confirm your preferred time himself and reply to ${booking.email}. If it's urgent, use the WhatsApp button below.`,
          },
        ]);
      }
    } catch {
      setBookingResult({ ok: false, message: 'Something went wrong. Please try again or use WhatsApp.' });
    } finally {
      setBookingBusy(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-paper shadow-pop transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
          aria-label="Chat with Ravi's assistant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.84L3 20l1.34-3.35A7.7 7.7 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {open && (
        <div className="fixed inset-x-3 bottom-3 top-3 z-50 flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-pop backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:top-auto sm:h-[min(36rem,calc(100dvh-3rem))] sm:w-[24rem]">
          <div className="flex items-center justify-between border-b border-white/20 bg-gradient-to-r from-accent-dark to-accent px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-paper text-accent">
                {/* Interim Solo AI avatar - user is sending a custom cute icon to replace this */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-accent-dark bg-green-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-paper">Solo AI</p>
                <p className="text-[11px] text-paper/70">{PROFILE.shortName}'s assistant · Enquiries & meetings</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 text-paper/70 hover:text-paper" aria-label="Close chat">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex border-b border-line bg-paper text-sm font-semibold">
            <button
              className={`flex-1 py-2.5 ${view === 'chat' ? 'border-b-2 border-accent text-accent' : 'text-ink-muted'}`}
              onClick={() => setView('chat')}
            >
              Chat
            </button>
            <button
              className={`flex-1 py-2.5 ${view === 'booking' ? 'border-b-2 border-accent text-accent' : 'text-ink-muted'}`}
              onClick={() => setView('booking')}
            >
              Book a meeting
            </button>
          </div>

          {view === 'chat' && (
            <>
              <div className="flex-1 space-y-3 overflow-y-auto bg-paper/60 px-3.5 py-4">
                {messages.map((m, i) => (
                  <div key={i} className={`chat-msg flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'rounded-br-md bg-accent text-paper'
                          : 'rounded-bl-md border border-line bg-white text-ink'
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {sending && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className="typing-dot h-1.5 w-1.5 rounded-full bg-ink-muted" style={{ animationDelay: `${i * 0.18}s` }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              <div className="border-t border-line bg-white px-3 pb-3 pt-2">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => (q === 'Book a meeting' ? setView('booking') : sendMessage(q))}
                      className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink-soft hover:border-accent hover:text-accent"
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <form
                  className="flex items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                  }}
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about services, projects..."
                    className="min-w-0 flex-1 rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
                    maxLength={500}
                  />
                  <button type="submit" disabled={sending || !input.trim()} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-paper transition-colors hover:bg-accent-dark disabled:opacity-40" aria-label="Send">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </form>
              </div>
            </>
          )}

          {view === 'booking' && (
            <div className="flex-1 overflow-y-auto bg-paper/60 px-4 pb-8 pt-5" style={{ scrollPaddingBottom: '2rem' }}>
              {bookingResult?.ok ? (
                <div className="chat-msg space-y-4">
                  <div className="rounded-2xl border border-accent/30 bg-accent-soft p-4">
                    <p className="font-semibold text-accent">
                      {bookingResult.status === 'booked' ? 'Meeting booked' : 'Request sent'}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {bookingResult.status === 'booked'
                        ? 'Your slot is confirmed on Ravi\'s calendar with a Google Meet link.'
                        : `${PROFILE.shortName} has been notified and will personally confirm your preferred time at ${booking.email}. Nothing is booked until he confirms.`}
                    </p>
                    {bookingResult.meetLink && (
                      <a href={bookingResult.meetLink} target="_blank" rel="noreferrer" className="mt-3 block break-all rounded-lg bg-white px-3 py-2 text-sm font-semibold text-accent ring-1 ring-line">
                        {bookingResult.meetLink}
                      </a>
                    )}
                  </div>
                  <a
                    href={waLink(`Hi Ravi, I just sent a meeting request on your portfolio (${booking.name}). It's urgent - please reply.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-line bg-white p-4 text-center transition-colors hover:border-accent"
                  >
                    <p className="text-sm font-semibold text-ink">Urgent? Message on WhatsApp</p>
                    <p className="mt-0.5 text-xs text-ink-muted">Opens a direct chat with {PROFILE.shortName}</p>
                  </a>
                  <button className="w-full text-center text-xs font-medium text-ink-muted hover:text-accent" onClick={() => { setBookingResult(null); setView('chat'); }}>
                    Back to chat
                  </button>
                </div>
              ) : (
                <form onSubmit={submitBooking} className="space-y-3.5">
                  <p className="text-sm leading-relaxed text-ink-muted">
                    Meeting booking is being connected. For now, email or WhatsApp Ravi directly with your preferred time and topic. This preview does not confirm a meeting.
                  </p>
                  <input type="text" name="website" value={booking.website} onChange={(e) => setBooking({ ...booking, website: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">Your name</label>
                    <input required maxLength={80} value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">Your email</label>
                    <input required type="email" maxLength={120} value={booking.email} onChange={(e) => setBooking({ ...booking, email: e.target.value })} className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">What do you want to discuss?</label>
                    <textarea required maxLength={600} rows={3} value={booking.reason} onChange={(e) => setBooking({ ...booking, reason: e.target.value })} className="w-full resize-none rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="E.g. a website for my shop, Meta Ads for my clinic, a WhatsApp chatbot..." />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">Preferred date & time (IST)</label>
                    <input required type="datetime-local" value={booking.datetime} onChange={(e) => setBooking({ ...booking, datetime: e.target.value })} className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none" />
                  </div>
                  {bookingResult && !bookingResult.ok && (
                    <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                      <p>{bookingResult.message}</p>
                      {bookingResult.alternatives && bookingResult.alternatives.length > 0 && (
                        <div className="mt-2 flex flex-col gap-1.5">
                          {bookingResult.alternatives.map((iso) => (
                            <button
                              key={iso}
                              type="button"
                              onClick={() => { setBooking({ ...booking, datetime: toLocalInputValue(iso) }); setBookingResult(null); }}
                              className="rounded-lg border border-red-200 bg-white px-3 py-1.5 text-left text-xs font-semibold text-ink hover:border-accent hover:text-accent"
                            >
                              {formatSlot(iso)} IST
                            </button>
                          ))}
                          <p className="text-[11px] text-red-500">Tap a slot, then press Request meeting again.</p>
                        </div>
                      )}
                    </div>
                  )}
                  <button type="submit" disabled={bookingBusy} className="btn-primary w-full disabled:opacity-50">
                    {bookingBusy ? 'Sending...' : 'Request meeting'}
                  </button>
                  <p className="text-center text-[11px] leading-relaxed text-ink-muted">
                    By requesting, you agree Ravi may reply to this email about your enquiry.
                  </p>
                  <p className="text-center text-xs leading-relaxed text-ink-muted">
                    Urgent?{' '}
                    <a href={waLink('Hi Ravi, urgent enquiry from your portfolio.')} target="_blank" rel="noreferrer" className="font-semibold text-accent">
                      Message on WhatsApp instead
                    </a>
                  </p>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;
