# VibeEdge UX Audit & Recommendations

Given your three goals — (1) showcase apps, (2) share mission/how-you-work, (3) let people try apps — here's what's working, what's not, and what I'd change.

## What's working
- Clean visual identity; logo/nav colors now match.
- Three clear content pillars already exist (About, Products, Contact).
- Individual game pages have solid depth (features, screenshots, App Store CTA).

## Key UX issues

**1. Navigation is single-page, but the site is multi-page.**
The top nav uses `#about`, `#products`, `#contact` hash anchors that only work on the home page. From any game page, clicking "About" or "Products" does nothing (or 404s). This is the biggest navigation break.

**2. Apps aren't discoverable from game pages.**
Once a user lands on K-POP Word Warrior, there's no way to jump to Pand-a-nalogies or ReadFlex without going back home. No "Other apps" section, no products dropdown.

**3. Goal #3 ("give access to apps") is under-served.**
The only CTA is "Download on the App Store" — buried at the bottom of each game page. There's no App Store badge in the hero, no web-playable option surfaced, no clear "Try it" affordance on the home product cards.

**4. Home hero CTA is weak.**
"Learn More" → scrolls to About. For a portfolio-of-apps site, the primary CTA should push users to the apps themselves ("See our apps" / "Try our apps").

**5. Product cards on home page don't feel clickable.**
They link to game pages, but there's no "View app →" affordance, no "Available on iOS" badge, no visual cue distinguishing them from static content.

**6. No breadcrumbs or back-to-home on game pages** beyond clicking the logo. Users can get lost.

**7. Mission/"How we work" is buried.**
"Vibe coding" and the founder story are compelling differentiators but live in a small paragraph inside a 3-column grid. Deserves more room.

**8. Contact form on Netlify's `data-netlify="true"` won't work on Lovable's build** — Netlify Forms requires the form to be present in the deployed static HTML at build time; the SSR/CSR flow may not register it. Worth verifying, and adding a mailto fallback or Formspree.

**9. Minor:**
- No footer nav (only copyright).
- No favicon/OG image confirmed per route.
- Mobile menu closes on link click but doesn't animate.
- Screenshot grid on game pages could benefit from lightbox.

## Recommended changes (prioritized)

### Phase 1 — Fix navigation (high impact, low effort)
- Convert nav to real routes: `/`, `/about`, `/apps`, `/contact`. Move nav + footer into `__root.tsx` so it's consistent everywhere.
- Make nav links use TanStack `<Link>` so they work from any page.
- Add a footer with site nav + contact email.

### Phase 2 — Strengthen apps showcase (directly serves goals 1 & 3)
- Create a dedicated `/apps` index page listing all apps in a richer card grid (icon, tagline, platform badges, "View details" + "Get on App Store" buttons).
- On home, keep a "Featured apps" preview (3 cards) with clearer CTAs and an "View all apps →" link.
- On each game page, add an "Explore our other apps" section at the bottom linking sibling apps.
- Add App Store badge (official artwork) to game-page heroes, not just a text button.

### Phase 3 — Elevate mission (goal 2)
- Give About its own route with more room: founder story, "vibe coding" explainer, US-based/affordable positioning, maybe a photo or diagram of the build process.
- Keep a condensed 3-card "About" teaser on home linking to `/about`.

### Phase 4 — Home page polish
- Rewrite hero CTA: primary "See our apps" → `/apps`, secondary "Our story" → `/about`.
- Add subtle section transitions and consistent section padding.
- Add trust signals near hero if available (tests covered: SAT/ACT/SSAT/ISEE as pills).

### Phase 5 — Contact & misc
- Replace Netlify Forms with a mailto link or Formspree endpoint (or confirm Netlify Forms detection works with the SSR build).
- Add favicon + per-route OG images.
- Add lightbox for screenshots.

## Technical notes
- Move `<nav>` and `<footer>` from `index.tsx` and `SiteChrome.tsx` into `src/routes/__root.tsx` so they're defined once.
- New routes: `src/routes/about.tsx`, `src/routes/apps.tsx`, `src/routes/contact.tsx`, each with its own `head()` meta.
- Home `index.tsx` becomes a landing/summary page that teases each section and links out.
- Use `<Link to="/apps">` etc. everywhere; remove hash anchors.

## What I'd do first
If you want a quick, high-impact pass: **Phase 1 + Phase 2**. That fixes the broken nav, makes the site feel like a proper multi-page product portfolio, and puts your apps front-and-center.

Want me to proceed with Phase 1 + 2, do all phases, or pick specific items?
