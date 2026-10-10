# The Last Bencher Labs Digital — website starter

A five-page, enterprise-facing website built with Next.js App Router, TypeScript, a shared UI package and a Turborepo-style monorepo. The visual direction keeps the warm-white and electric-blue editorial style from the mockup, with a more restrained enterprise tone, custom CSS illustrations, responsive layouts, and subtle motion.

## Pages

- `/` — Overview, positioning, capability snapshot and project CTA
- `/services` — Recruitment & talent, software/product engineering, project/programme management, contracts/commercial operations, and market/competitive research
- `/industries` — Sector-facing messaging for industrials, tech/SaaS, financial and professional services, healthcare/life sciences, infrastructure/logistics and growing/enterprise teams
- `/about` — Positioning, principles and working model
- `/contact` — Project brief form with server-side validation and a configurable email delivery endpoint

## Stack

- Next.js App Router + React + TypeScript
- Monorepo: `apps/web` and shared package `packages/ui`
- Turborepo task orchestration
- Lenis smooth scrolling with reduced-motion styles
- Lucide icons and custom CSS design tokens
- Vitest unit tests and Playwright E2E smoke tests
- Resend API integration for the contact form (configured via environment variables)

## Run locally

Recommended: Node.js 20.9+ and npm 10+ (Node.js 22 is fine).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Commands

```bash
npm run typecheck    # Type-check app and shared UI package
npm run lint         # ESLint: Next.js, React and TypeScript rules
npm run test         # Run unit tests
npm run build        # Production build
npm run test:e2e     # Playwright browser tests (install Chromium first)
npx playwright install chromium
```

The E2E script uses Playwright's `webServer` configuration to start the development server automatically when needed.

## Contact form configuration

Copy `.env.example` to `apps/web/.env.local` or configure these variables in your hosting environment:

```env
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=team@yourdomain.com
CONTACT_FROM_EMAIL=website@your-verified-domain.com
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

`CONTACT_FROM_EMAIL` must be a sender/domain verified with Resend. Until the email service is configured, the API intentionally returns a clear `503` response instead of pretending that a message was delivered. The form includes server-side field validation and a honeypot, but should be paired with provider-side rate limiting or CAPTCHA before a high-traffic public launch.

## Architecture

```text
lastbencher-labs-digital/
├── apps/
│   └── web/
│       ├── app/                    # Five pages + contact API route
│       ├── components/             # Site shell, forms, motion, capability cards
│       ├── lib/                    # Service content + validation
│       ├── tests/                  # Vitest unit tests
│       └── e2e/                    # Playwright smoke tests
├── packages/
│   └── ui/                         # Shared Brand, Button, SectionHeading
├── turbo.json
└── package.json
```

## Editing the site

- Shared typography, color tokens, cards, page layout, responsive breakpoints and motion styles live in `apps/web/app/globals.css`.
- Shared primitives live in `packages/ui/src`.
- Update the single source of truth for capability names, descriptions and outcomes in `apps/web/lib/capabilities.ts`.
- Page-specific content is kept in each route's `page.tsx`.
- Header and footer links are configured in `apps/web/components/SiteHeader.tsx` and `SiteFooter.tsx`.

## Before public launch

1. Set the correct site URL in `NEXT_PUBLIC_SITE_URL`, then add final favicon, social preview and real business contact details.
2. Configure Resend and verify that the contact form delivers to the right inbox.
3. Add privacy policy, terms, cookie disclosure if analytics/cookies are introduced, and any industry-specific contractual/security statements your organisation can substantiate.
4. Add rate limiting / anti-bot controls for the contact API.
5. Run unit tests, production build and Playwright checks in CI; review the pages with actual sales, legal and delivery stakeholders before publishing.


