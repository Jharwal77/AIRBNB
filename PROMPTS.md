# Sequence of prompts used for AI-assisted development

The whole assignment was built pair-style with an AI coding agent (Arena.ai Agent Mode). Below is the chronological prompt log; each prompt maps to a commit-sized slice of work.

## Phase 0 - Understanding the brief
1. "This is my assignment now make both separate frontend and backend, use skills that in my resume only, write code without comments and give me all things after complete task." (with resume PDF attached)
2. "Here is the assignment PDF and my Playpower-specific resume. Read both, list the deliverables, and plan the stack strictly from my resume skills (React, Vite, Tailwind, Context API, Axios, Node, Express, REST /api/v1, MVC with thin controllers over services, MongoDB/Mongoose, helmet/CORS/rate limiting, .env secrets)."

## Phase 1 - Reference intelligence (visual source of truth)
3. "Extract every screenshot embedded in the assignment PDF so we can use them as the pixel reference for the three views."
4. "The live reference is behind a Vercel security checkpoint for data-center browsers. Inspect it with a headless browser anyway; if blocked, fall back to the PDF screenshots and treat them as the single source of truth."
5. "Measure the reference: container widths, header height, hero grid geometry, gutters, radii, typography scale, colour samples (backgrounds, borders, reserve gradient), photo-tour thumbnail grid, lightbox photo box and arrow positions. Give me a token sheet."
6. "Identify the listing content: title, subtitle, rating, review count, host, co-hosts, highlights, description, amenity list, calendar range, review chips, review texts, location copy, policies, nearby stays - transcribe exactly, including emoji."
7. "Derive the complete 43-photo order with per-photo categories (Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos) and the 5 hero photo order, and download the photo/avatar assets locally so the clone uses identical assets."
8. "Extract the icon glyph paths (amenity icons, highlight icons, rating-category icons, policy icons, chevrons, share/heart/grid/close) so icons match stroke-for-stroke, and grab the self-hosted Airbnb Cereal VF woff2 for typography parity."

## Phase 2 - Backend (separate service)
9. "Scaffold backend/ as Node + Express + MongoDB/Mongoose in MVC with thin controllers over a service layer, plus my reusable ApiError/ApiResponse/asyncHandler utilities, helmet, CORS from env, rate limiting on /api/v1, morgan, and a /api/v1/health route. No comments in any file."
10. "Model the listing as one rich Mongoose document (photos with category+caption, sleep cards, highlights, amenity groups, stay/pricing/booking box, rating breakdown, review chips, 19 reviews, location, host, co-hosts, policies, similar stays) plus a Reservation model with validation. Seed from a single JSON dataset; auto-seed when the DB is empty."
11. "Expose REST endpoints: GET /api/v1/listings/:id, /:id/photos, /:id/reviews, /:id/similar, POST /api/v1/listings/:id/reservations. Add an in-memory MongoDB dev mode (mongodb-memory-server) so the API runs zero-setup, and a seed script for real Mongo/Atlas."

## Phase 3 - Frontend (separate app)
12. "Scaffold frontend/ as React 18 + Vite + Tailwind CSS with Axios API layer, Context API (ListingContext, GalleryContext), vite dev proxy for /api and /images, and a bundled fallback dataset so the UI still renders if the API is down. No comments."
13. "Build the listing page desktop-only at 1440: header with search pill, title row with Share/Save, 5-photo hero grid with Show all photos, overview column (guest-favourite laurel box, host row, highlights, translated-description note), sticky booking panel (promo + reserve card + report link), sleep cards, amenities grid + 50-amenities modal, two-month calendar with selectable range, reviews block with rating bars/chips/6 reviews + all-reviews modal, stylised map section, host + co-hosts section, things-to-know, nearby carousel with 1/2 pagination, and the scroll-revealed sticky nav bar."
14. "Build the Photo Tour overlay: fixed full-screen dialog, 8-up category thumbnail rail that smooth-scrolls to sections, per-category sections with left title/caption and right full-then-paired photo grid; open from Show all photos and any hero image; focus trap + body scroll lock + focus restore."
15. "Build the Lightbox overlay: header with grid icon, category title, 'N of 43' counter and close; centred photo; circular prev/next buttons with disabled ends; ArrowLeft/ArrowRight/Escape keys; fade+scale photo transition; stacks above the tour and returns to it on close."
16. "Add motion and a11y: overlay fade 250ms, sheet rise 300ms, sticky-bar translate reveal after 560px, hover surface transitions, focus-visible rings, skip link, aria labels on every icon button, reduced-motion-safe transforms."

## Phase 4 - Verification loop (subagents)
17. "Run the ui-fidelity-auditor subagent: screenshot my three views at 1440x860, stack them under the reference screenshots, and list every delta."
18. "Fix the reported deltas: title offset, guest-favourite box wrap, Show-all-photos button metrics, tour photo-row chunking (full, pair, full...), tour photo aspect 453:300, lightbox photo box = viewport - 176px, calendar/reviews divider duplication, rating bars reconstruction."
19. "Run the api-tester subagent against the running API and assert envelopes, 43 photos / 9 groups / 19 reviews / 50 amenities / 8 similar stays, reservation validation (422/201), 404 envelopes and static image 200s."
20. "Run the code-reviewer subagent: verify zero comments, MVC discipline, focus-trap/scroll-lock usage and token-only styling; fix findings."

## Phase 5 - Deliverables
21. "Draw the production-scale architecture diagram (clients, edge/CDN, stateless API tier with HPA, Redis cache-aside, Mongo Atlas + Elasticsearch + S3 + warehouse, event tier with idempotent webhook gateway, cross-cutting CI/CD, observability, security, IaC) as SVG and export PNG + PDF."
22. "Write README with setup for both apps, env vars, scripts, endpoint table and deployment notes; write .claude subagent + skill configs; write this prompt log; zip everything excluding node_modules."
