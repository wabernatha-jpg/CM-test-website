# TODO

## Small-business gated subpage (QR / pamphlet campaign)

**Source:** Plaud note, 2026-07-09 ("Go-to-Market Pivot: QR-Gated Subpage and Pamphlet Distribution for Doctor's Offices").

**Ask:** A subpage for the small-business rebrand — less corporate jargon, aimed at doctor's offices and similar small-business prospects — that a QR code on printed pamphlets will link to.

**Approach agreed on:** No real auth/passcode gate. Since this site is static (no backend), "locked" just means:
- New page at an unguessable path, e.g. `/small-business/index.html` (pick a slug that isn't a dictionary word tied to the business).
- Add `<meta name="robots" content="noindex, nofollow">` so it doesn't show up in search.
- Don't link to it from site nav or any other page — the QR code is the only way in.
- Content: rebrand messaging for small businesses (cut corporate jargon), reuse `Change_Maven_Brand_Guide.md` for visual consistency with the rest of the site.

**Not doing:** a real server-side/passcode gate — not worth the engineering for non-sensitive marketing content. Revisit only if this ever needs to keep out more than casual browsing.

**Still open:** exact page copy, the URL slug itself, and who generates/prints the QR code (not decided yet).

**Update (2026-08-06):** `resources/index.html` now carries an intentional header link to Clarity (dual-branding the Resources page with both Change Maven and Clarity). The "don't link from any other page" rule above is superseded for that one page — the QR/pamphlet is no longer the *only* way in, though it remains the primary discovery channel for the target audience. `noindex, nofollow` on `clarity/index.html` is unchanged, so the page still won't show up in search.
