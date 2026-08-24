# mavenshift.co Revision Brief — Ray Edwards Feedback (2026-08-18)

Build-ready prompt, structured for a Claude Code session working in the `Website_design` repo. Source: 08-18 SCORE follow-up session with Ray Edwards (`references/plaud-notes-index.md` Category 5), transcript segment ~44:47–55:59.

---

## Objective

Bring mavenshift.co in line with the first-impression and conversion feedback Ray Edwards (Wesley's SCORE mentor) gave during a live screen-share review on 2026-08-18, while staying fully inside the existing Change Maven brand system (`branding/Change_Maven_Brand_Guide.md`). The core problem Ray identified: the site reads as flat, text-heavy, and low-trust on first impression — it needs more visual "pop" and stronger trust signals without becoming off-brand or gimmicky.

## Context

Ray Edwards is a 12-year SCORE St. Louis mentor (adjunct professor, former 7-year CEO of AAIM, Army veteran) who has been coaching Wesley on Change Maven's launch since 2026-08-05. On 2026-08-18 Wesley shared his screen and pulled up mavenshift.co live during the call; Ray reacted to it in real time and also had Wesley pull up a couple of competitor sites for comparison. The site itself was built by Wesley using AI tooling already — Ray's feedback is aimed at the next iteration, not a from-scratch rebuild.

## Requirements

### 1. Fix the "TLDR" / visual-density problem
Ray's sharpest criticism landed on a *competitor's* site he had Wesley pull up as a cautionary example — "a sea of gray," "brown on white on black," walls of text with no visual relief: *"People have an attention span that doesn't grab them in five seconds; they're not going to bother with it... a picture tells a thousand words, well, in case they're using all their thousand words plus."* Ray's direct reaction to mavenshift.co itself was gentler but the same lesson applies: *"it needs more color and more pop... it's nice to get the information across, but I think with a little more polishing... you could grab eyeballs, which is really what you want to do."*
- Audit every page for text blocks that could be shortened or replaced with a visual.
- Lead sections with an image, stat, or short headline before dense paragraph copy.
- Prioritize scannability — a first-time visitor should get the gist in under five seconds per section.

### 2. Add color and visual "pop"
Wesley's own description of the current state: *"it's basically black white and gold."* Ray wants more visual energy — but see Constraints below on how to do this without going off-brand.

### 3. Imagery
Ray's suggestion: *"you can get that with like stock photos, or you know anything you're allowed to use... show, you know, people huddling together over a desk or something like that... just be careful that you can use them and you're legally allowed to use them."* He also suggested a stronger option: *"you could even take a picture of yourself with a client, you know, provided it is of sufficient quality. And that would really give your website pizzazz."*
- **Resolution (see Constraints):** prefer real photography of Wesley with clients over generic stock — this satisfies Ray's ask while staying inside the brand guide's explicit ban on stock illustrations/clip art. Use stock only as a last resort, and only licensed, non-generic imagery if so.

### 4. Testimonials — currently a hard gap
Ray was explicit this is missing and matters most: *"The other thing that I don't see on here, which I think you're going to along with color and pop and pizzazz, are testimonials. I don't see any testimonials. And that's a gold standard."* He gave an example of the kind of language to capture: *"I had Change Maven into my organization and they revolutionized the way we do business. They prepared us to change in a way that really gave us a clear pathway to the future."*
- Build a testimonials section/component.
- **Hard constraint from Ray:** testimonials must be real, attributed quotes from actual clients — *"sometimes people will manufacture [testimonials] and be very careful with that... they never said that, or that doesn't exist."* Never fabricate or paraphrase a quote as if it were verbatim.
- Wesley has at least one active client relationship (Hoyleton) that could plausibly be a source once the engagement reaches a natural checkpoint — flag to Wesley, don't auto-generate placeholder testimonial text as if real.

### 5. Video
Ray noted a competitor site had a video that got skipped past quickly, but observed video is still valuable when done well: *"if it's an attractive video and it tells a message, you know, people get to know you... maybe do some tutorials or some presentations about what does change mean and why should I prepare for change... it's not a sales thing as much as it is an educational thing, but you know, I'm sure you can do that."*
- Add a short (60-90 second) intro/explainer video near the top of the homepage.
- Tone: educational/soft-sell, not a pitch — "why change happens and how to prepare for it," not "hire me."

### 6. Resources / articles section — keep it, but instrument it
Ray reviewed the existing Resources tab favorably: *"I think they're great. From what I can see, I think they're great articles"* — and specifically called out that using Porter's Five Forces signals credibility to "serious players." His guidance on whether to keep investing time in it: *"you should have a way of tracking who's looking at this and how long are they looking... the real key is, are you getting eyeballs that look at it and actually read these articles."*
- Keep publishing to the Resources section — don't cut it.
- Add lightweight page-view/read-time analytics scoped to the Resources pages so Wesley can see whether it's earning the time he spends on it.

### 7. Competitive benchmarking
Two concrete reference points came up live on the call:
- **Positive example — Ops Insights** (a St. Louis competitor, more of a tech implementer): Wesley's own read, which Ray didn't contradict, was that "they all have a pop, they all have something interesting to them." Worth a look for visual-treatment ideas (not copy or positioning — Ops Insights is a different service category).
- **Negative example — an unnamed competitor site** ("Noble" or possibly "HYFS," per the transcript, unclear which): used as the TLDR/wall-of-text cautionary tale above. Do not emulate.

### 8. Prompting guidance Ray gave directly (carry into build process)
When Wesley mentioned he uses Claude for design work, Ray's advice on getting better output: *"the key to AI is the prompts... I would prompt AI to say, give me something that's exciting, that is professional, that attracts and retains eyeballs."* Generic requests produced generic (in Ray's view, flat) results the first time around — be specific about the emotional/professional register wanted, not just "make it look nice."

## Constraints

Pulled from `branding/Change_Maven_Brand_Guide.md` — nothing in this brief should override it.

- **Palette:** Navy `#0D1B2A` (primary/dominant), Gold `#C9982A` (accent — headings, CTAs, highlights, never body text on white), Cream `#F7F4EF` (secondary background), Slate `#4A5568` (body copy on light backgrounds), Gold Light `#E8B84B` (hover states only). "More pop" should come from smarter use of Gold/Gold Light contrast and imagery — not new off-brand colors.
- **Typography:** Libre Baskerville (display/headings) + Inter (body/UI) only. No additional typefaces.
- **No clip art, stock illustrations, or generic icons inconsistent with the brand aesthetic** (guide §09) — this is a direct tension with Ray's "add stock photos" suggestion; resolved above by preferring real photography of Wesley with clients.
- **No drop shadows/outlines/effects on the logo; maintain clear space and minimum sizing per guide §03.**
- **Voice/tone (guide §06):** conversational but credible, direct, "we"-language, confident without arrogance. Avoid "synergy," "leverage," "scalable solutions," "robust," "cutting-edge," "best-in-class," "paradigm shift." Website tone specifically: "warm, direct, approachable — speak to the COO worried about a rollout failing."

## Expected Output

A revised mavenshift.co that:
- Passes a five-second scan test on every major section (visual-first, not text-first)
- Uses the existing brand palette with more deliberate contrast/energy, not new colors
- Includes real photography (not generic stock) wherever imagery is added
- Has a testimonials section wired to accept real, attributed client quotes only
- Has a short educational intro video near the top of the homepage
- Keeps the Resources/articles section, instrumented with basic analytics
- Still reads, verbatim, as Change Maven's voice per the brand guide

## Instructions for auto (Claude Code, in the `Website_design` repo)

1. Audit each existing page for text density — flag paragraphs/sections that could be cut, shortened, or converted to a visual (image, stat callout, short list).
2. Propose specific cuts/replacements per page rather than a blanket rewrite; keep Wesley's actual wording where it's working (Resources articles were called out as good — don't touch those).
3. Add placeholder slots for real photography (Wesley + client shots) in place of any stock imagery currently used or proposed — do not generate or source generic stock/clip-art images.
4. Build a testimonials component (name, role/org, quote, optional photo) with no seeded/fake content — leave empty with a clear "add testimonial" affordance until Wesley supplies real quotes.
5. Add a homepage video embed slot (60-90s) positioned above the fold or near the top, with placeholder/empty state until Wesley supplies the video.
6. Add basic page-view/engagement tracking scoped to the Resources section (e.g. simple analytics event on article view + time-on-page), surfaced somewhere Wesley can check it without a full analytics platform if one isn't already in place.
7. Re-check every visual change against `branding/Change_Maven_Brand_Guide.md` (palette, type, no-clip-art rule, voice) before finalizing — this brief should never be used to justify an off-brand decision.
8. When using AI image/design generation as part of this work, prompt specifically for "exciting, professional, attracts and retains eyeballs" outcomes per Ray's guidance above, not generic "make it nice" prompts.
