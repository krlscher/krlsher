# dr.Scherbakov — landing page

Production site for an implant dentist's personal brand. Bilingual (UA/EN), one landing page + 4 case detail pages, deployed as a fully static export from Next.js.

Reference design lives in `design/` — an in-browser React prototype + the production spec (`dr-scherbakov-spec.docx`). Don't edit that folder; the source of truth for the live site is `src/`.

## Stack

- Next.js 15 (App Router, TypeScript, statically rendered)
- `next/font/google` for self-hosted Inter + Cormorant Garamond
- No CMS — content is typed records in `src/content/`
- Plausible analytics (cookieless), wired up via `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `/api/contact` posts to Resend (email) + Telegram bot

## Local dev

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, all routes statically generated
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## Routes

| Path                        | Notes                          |
| --------------------------- | ------------------------------ |
| `/`                         | UA landing                     |
| `/en`                       | EN landing                     |
| `/privacy`, `/en/privacy`   | Privacy policy                 |
| `/api/contact`              | POST: `{name, phone, message, lang}` |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/icon` | Auto |

## Environment variables

Copy `.env.example` to `.env.local` for local dev, set the same values in Vercel for production. All are optional — without them the form returns success with no side-effect.

| Var                            | Purpose                                       |
| ------------------------------ | --------------------------------------------- |
| `RESEND_API_KEY`               | Outgoing email for contact form               |
| `CONTACT_EMAIL`                | Inbox that receives form submissions          |
| `CONTACT_FROM_EMAIL`           | Verified sender on Resend                     |
| `TELEGRAM_BOT_TOKEN`           | Bot used to ping the doctor on new requests   |
| `TELEGRAM_CHAT_ID`             | Target chat for the bot                       |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | If set, injects the Plausible script in prod  |

## Asset drop locations

The site references real photographs at the paths below. Drop replacement files in place — no code changes needed. Specs in `dr-scherbakov-spec.docx` § 6.

| Path                                  | Aspect | Notes                                |
| ------------------------------------- | ------ | ------------------------------------ |
| `public/images/hero/portrait.jpg`     | 4:5    | Hero portrait, 1200×1500 minimum     |
| `public/images/approach/cbct.jpg`     | 4:5    | CBCT render on `#0E0E0C`             |
| `public/images/practical/studio.jpg`  | 5:4    | Studio still life                    |
| `public/images/cases/<slug>/hero.jpg` | 4:3    | One per case, 2400×1800              |

Slugs: `full-arch`, `anterior-implant`, `full-rehab`, `veneers`. The "View full case" link on each card opens the doctor's Instagram (set in `src/lib/contact.ts`); there are no per-case detail pages.

## Updating contact handles

Edit `src/lib/contact.ts` once before launch — that file feeds every WhatsApp / Telegram / Instagram link site-wide.

## Updating cases & FAQ

`src/content/cases.ts` and `src/content/faq.ts`. Each entry is bilingual; both languages required.

## Deploy

```bash
vercel
```

Set env vars in the Vercel project settings, point the production domain at the deployment, and verify Plausible receives events from the live URL.
