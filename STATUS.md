# Status Report — Website_design

Last updated: 2026-08-12T12:38:30-05:00

## Current focus

The Resources hub has been the main thread for the past two weeks: publishing framework/leadership articles and, most recently, adding topic filtering to the Resources index (`resources/index.html`, commit `0eebaf5`, 2026-08-12). There's also an active, not-yet-landed piece: a new article, "Slow Is Smooth" (`resources/articles/slow-is-smooth-fundamentals-first.html`) plus three supporting images, is drafted and screenshotted (`temporary screenshots/screenshot-21-resources-with-slow-is-smooth.png`, `screenshot-22-slow-is-smooth-article.png`, both 2026-08-11) but sits untracked in the working tree — it was never committed.

## Progress since last report

_(First-ever report — covering full history from initial commit.)_

- Initial site launch and hero graphic polish (2026-06-30).
- Landing page trimmed for launch; six services subpages added under `services/*.html` (2026-07-07).
- Bridge Method intro video added, then swapped and opened in a lightbox on `index.html` (2026-07-08).
- Contact Us and Subscribe forms wired to send email via Resend (`api/contact.js`, `api/subscribe.js`) (2026-07-08).
- Gated small-business/Clarity landing page added at `clarity/index.html` (financial clarity offer, QR/pamphlet campaign) (2026-07-15).
- Resources page launched with 8 published articles, cross-linked from both Change Maven (`index.html`) and Clarity (`clarity/index.html`) (2026-08-03).
- Resources page dual-branded with a link to Clarity (2026-08-06).
- Vercel Analytics added across all pages — landing, services, Clarity, and every Resources article (2026-08-07).
- Leadership Toolbox section added with four framework masterclass articles: SWOT, PESTLE, Porter's Five Forces, 5C (2026-08-10).
- Two more Resources articles added: "Yes, And" and an AI build-vs-partner piece (2026-08-10).
- Resources articles grouped by topic with a filter bar on `resources/index.html` (2026-08-12) — most recent commit.

## Red flags / blockers

- **Broken link risk on the live Resources page.** The committed `resources/index.html` (as of `0eebaf5`) already links to `articles/slow-is-smooth-fundamentals-first.html`, but that article file and its three images are still untracked and uncommitted. If `0eebaf5` is what's deployed, that card on the live Resources page currently 404s.
- **Stale TODO.** `TODO.md`'s small-business gated subpage item still lists "still open: exact page copy, the URL slug itself, and who generates/prints the QR code" as unresolved, but the page itself (`clarity/index.html`) has been live since 2026-07-15 and has since been iterated on (dual-branding, nav links). Worth reconciling or closing out so it doesn't read as outstanding work that's actually done.
- No brand/design mismatch flagged — no changes to `Change_Maven_Brand_Guide.md` or `Change_Maven_Logo.png` since the initial commit, and no commit messages suggest a stalled redesign pass.

## Next up

- Commit the "Slow Is Smooth" article and its images so the already-live filtered Resources link resolves instead of 404ing.
- Reconcile `TODO.md`'s small-business gated subpage notes with what's actually shipped, or close the item out.
