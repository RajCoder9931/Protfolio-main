# Ravi Raj Tiwari - Portfolio

Personal portfolio of Ravi Raj Tiwari: Full Stack Developer & Digital Marketer (Delhi, India).
Live: https://ravirajtiwari.vercel.app

Stack: Vite + React 18 + TypeScript + Tailwind CSS 3.4. Serverless API routes in `/api`
run on Vercel (Node.js). No paid services required.

## Features

- Modern single-page portfolio: About, Skills (Development / Meta & Google Ads & Social
  Media / AI Automation & Chatbots), Experience, Projects (RankRaja, BillDrop, ...),
  Achievements, Education, Contact.
- Custom AI chat assistant (replaces the old Noupe third-party widget):
  - `/api/chat` answers questions about Ravi's professional work from a curated public
    knowledge base. Uses Gemini (free tier) when `GEMINI_API_KEY` is set; otherwise a
    local keyword matcher answers the same questions.
  - "Book a meeting" tab: visitor proposes a time; the backend checks bookable hours
    (from Ravi's routine, `BOOKABLE_WINDOWS`) and - when Google Calendar is connected -
    free/busy, then creates a REAL calendar event with a Google Meet link
    (status `booked`). On conflict it returns alternative free slots. Without Calendar
    env vars it sends Ravi an email and reports `pending` - it never fakes a booking.
- Spam guards: honeypot field, per-IP rate limits, input validation and length caps.
  Secrets live only in server-side env vars.

## Local development

```bash
npm install
npm run dev        # site only; /api needs Vercel (vercel dev) or production
npm run build
npm run preview
```

## Environment variables (Vercel project settings)

| Name | Required | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | optional | Gemini free-tier key for AI chat answers. Without it the built-in local answers are used. |
| `RESEND_API_KEY` | for email | Resend (free tier) key used to email enquiry notifications. |
| `NOTIFY_EMAIL` | for email | Where enquiry notifications go (Ravi's inbox). |
| `NOTIFY_FROM` | optional | Verified sender identity on the email provider. Never use Ravi's own Gmail as an app sender. |
| `GOOGLE_CLIENT_ID` | for auto-booking | Google OAuth client with Calendar scope. |
| `GOOGLE_CLIENT_SECRET` | for auto-booking | OAuth client secret. |
| `GOOGLE_REFRESH_TOKEN` | for auto-booking | Offline refresh token for Ravi's Google account (Calendar access). |
| `GOOGLE_CALENDAR_ID` | optional | Default `primary`. |
| `BOOKING_DURATION_MIN` | optional | Meeting length, default `30`. |
| `BOOKABLE_WINDOWS` | required for auto-booking | `Day HH:MM-HH:MM` comma list in IST, e.g. `Sat 10:00-12:00,Sun 15:00-18:00`. Unset = request mode only: nothing auto-books and Ravi confirms every meeting himself. |

### Connecting Google Calendar (one-time)

1. Create an OAuth client (Web) in Google Cloud Console with the Calendar scope
   `https://www.googleapis.com/auth/calendar.events`.
2. Get a refresh token for Ravi's account with `access_type=offline`.
3. Set the four `GOOGLE_*` env vars in Vercel.

Until these are set, the site honestly works in "request" mode: visitors get no Meet
link and Ravi confirms by email himself.

## Branches

- `main` - production (Vercel auto-deploys).
- `backup/pre-redesign-2026-11-07` - full snapshot of the previous site.
- `redesign-2026` - this redesign (merged via PR after preview approval).
