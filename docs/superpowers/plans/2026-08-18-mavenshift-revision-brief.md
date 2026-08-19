# Mavenshift Revision Brief Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Note on verification:** This is a static-HTML/Tailwind site with no test runner. "Verify" steps below mean: run `node serve.mjs` (skip if already running), screenshot with `node screenshot.mjs http://localhost:3000/<path> <label>`, and visually compare against the brand guide and the descriptions in this plan — per `CLAUDE.md`'s screenshot workflow. Do at least 2 comparison rounds per page touched.

**Goal:** Bring `mavenshift.co` in line with Ray Edwards' 2026-08-18 SCORE feedback — more visual "pop," real-photography slots, a testimonials component, a homepage video callout, and Resources engagement tracking — without going off-brand.

**Architecture:** No framework, no build step. Each page is a self-contained HTML file with inline Tailwind config and a shared `<script>` block at the bottom. Changes are applied per-file with `Edit`; there is no shared component system, so repeated patterns (e.g. the services-page card grid) are applied identically across each file that needs them.

**Tech Stack:** Tailwind CSS (CDN), vanilla JS (IIFE per page), Vercel Analytics (`window.va` + `/_vercel/insights/script.js`, already installed site-wide).

**Spec:** `mavenshift-website-revision-brief.md` (repo root) — the plan argues from this spec; executors should read both.

## Global Constraints

- Palette: Navy `#0D1B2A`, Gold `#C9982A`, Cream `#F7F4EF`, Slate `#4A5568`, Gold Light `#E8B84B` only. No new colors — "pop" comes from contrast/imagery, not new hues.
- Typography: Libre Baskerville (display) + Inter (body) only.
- No clip art, stock illustrations, or generic icons — reuse the existing `#bridge-icon` SVG symbol already defined per page, or real photography placeholders. Never source actual stock/clip-art images.
- No fabricated testimonial content — empty "add testimonial" affordance only, ever.
- Voice: conversational but credible, "we"-language, no "synergy/leverage/scalable solutions/robust/cutting-edge/best-in-class/paradigm shift."
- Every new interactive element needs hover, focus-visible, and active states, consistent with existing patterns (`hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50`).
- Do not touch `resources/articles/*.html` content/copy (Ray called these out as good) — only the analytics snippet at the bottom of each (Task 5).
- Do not touch `clarity/index.html` — out of scope for this brief.

---

## Current-state audit (baseline findings this plan acts on)

- **`index.html`** (901 lines): Intro and About sections are pure centered text blocks with zero imagery. The Dual-Pyramid card grid is already visual/scannable (no change needed). No testimonials anywhere. A 90s overview video already exists (`videos/ChangeMavenWebsite.mp4`), wired into a lightbox in the "Bridge Method" panel — but it sits mid-page (3rd section), not "near the top," and nothing in the hero points to it.
- **All 6 `services/*.html` pages** share one template: navy hero (heading + 1 paragraph) → body section with an intro paragraph followed by 2–4 stacked `<div class="border-t"><h2>...</h2><p>...</p></div>` blocks with **no visual relief at all** — this is the exact "wall of text" pattern Ray flagged. The "Where This Fits" pyramid-nav grid further down is already card-based and fine.
- **`resources/index.html`**: already a well-formed card grid (Leadership Toolbox + filtered Field Notes grid) — Ray called this out favorably. No density fix needed; only needs the analytics instrumentation (Task 5).
- **Analytics**: `window.va` stub + `/_vercel/insights/script.js` are already on every page (sitewide pageviews since 2026-08-07), but there are **no custom events** anywhere in the codebase — no per-article view/read-time tracking exists yet.
- **Imagery**: `resources/assets/images/` holds custom diagram/illustration PNGs used inside articles (origin diagrams, chalkboard, etc.) — these are fine, not stock, out of scope here.

---

## Task 1: Services pages — replace stacked text blocks with an icon-card grid

**Files (identical transform, 6 files):**
- Modify: `services/executive-interventions.html:199-208`
- Modify: `services/organizational-alignment.html:199-208`
- Modify: `services/targeted-education.html:199-216`
- Modify: `services/technical-automation.html:199-216`
- Modify: `services/change-management-integration.html:199-212`
- Modify: `services/methodological-standards.html:199-212`

**Transform (same on all 6):** Replace the `<div class="mt-12 space-y-10">...</div>` block of stacked `border-t` dividers with a `grid sm:grid-cols-2 gap-6` of cards, each with a small gold-badge icon (reusing the page's existing `#bridge-icon` symbol — already defined in every services page's inline `<svg>` block, so no new SVG authoring). Copy each existing `<h2>`/`<p>` pair verbatim into its new card — do not reword.

- [ ] **Step 1: Transform `services/executive-interventions.html`**

Replace:
```html
      <div class="mt-12 space-y-10">
        <div class="border-t border-navy/10 pt-8">
          <h2 class="font-display font-bold text-navy text-xl sm:text-2xl mb-3">Executive Coaching</h2>
          <p class="text-slate leading-relaxed">One-on-one and small-cohort coaching for senior leaders navigating a transformation, a first turnaround, or the fatigue of leading change for the third time in two years.</p>
        </div>
        <div class="border-t border-navy/10 pt-8">
          <h2 class="font-display font-bold text-navy text-xl sm:text-2xl mb-3">Strategic Plan Updates</h2>
          <p class="text-slate leading-relaxed">A structured reset of the strategic plan when the organization's reality has moved faster than the plan on paper — so leadership is steering toward where the company actually is, not where it was eighteen months ago.</p>
        </div>
      </div>
```
With:
```html
      <div class="mt-12 grid sm:grid-cols-2 gap-6">
        <div class="rounded-sm border border-navy/10 bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300 p-6">
          <div class="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center mb-4">
            <svg width="22" height="11" viewBox="0 0 140 70" class="text-gold" aria-hidden="true"><use href="#bridge-icon"></use></svg>
          </div>
          <h2 class="font-display font-bold text-navy text-lg sm:text-xl mb-2.5">Executive Coaching</h2>
          <p class="text-slate text-[0.92rem] leading-relaxed">One-on-one and small-cohort coaching for senior leaders navigating a transformation, a first turnaround, or the fatigue of leading change for the third time in two years.</p>
        </div>
        <div class="rounded-sm border border-navy/10 bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300 p-6">
          <div class="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center mb-4">
            <svg width="22" height="11" viewBox="0 0 140 70" class="text-gold" aria-hidden="true"><use href="#bridge-icon"></use></svg>
          </div>
          <h2 class="font-display font-bold text-navy text-lg sm:text-xl mb-2.5">Strategic Plan Updates</h2>
          <p class="text-slate text-[0.92rem] leading-relaxed">A structured reset of the strategic plan when the organization's reality has moved faster than the plan on paper — so leadership is steering toward where the company actually is, not where it was eighteen months ago.</p>
        </div>
      </div>
```

- [ ] **Step 2: Repeat identically for the other 5 services pages**

Same wrapper transform (`space-y-10` stack → `grid sm:grid-cols-2 gap-6` of icon-badge cards), applied to each page's own existing subsection count (2 for organizational-alignment; 4 for targeted-education and technical-automation; 3 for change-management-integration and methodological-standards). Use each file's own current `<h2>`/`<p>` text verbatim — do not write new copy. On a 4-card page, `sm:grid-cols-2` naturally wraps to a 2x2 grid; on a 2 or 3-card page it wraps to 1 or 2 rows — no extra markup needed.

- [ ] **Step 3: Verify**

Start `node serve.mjs` if not running. Screenshot each of the 6 `/services/*.html` pages (`node screenshot.mjs http://localhost:3000/services/executive-interventions.html services-1`, etc.) at both desktop and a mobile viewport if the screenshot tool supports it. Confirm: cards render in a 2-column grid on desktop, stack to 1 column on mobile, gold badge icon is visible and on-brand, no layout overflow, hover state (`shadow-card-hover`) works.

- [ ] **Step 4: Commit**

```bash
git add services/executive-interventions.html services/organizational-alignment.html services/targeted-education.html services/technical-automation.html services/change-management-integration.html services/methodological-standards.html
git commit -m "Break up services-page text walls with an icon-card grid"
```

---

## Task 2: Homepage — real-photography placeholder slots (About + Intro)

**Files:**
- Modify: `index.html:437-444` (Intro section)
- Modify: `index.html:546-560` (About Change Maven section)

**Approach:** Ray's ask was for real photography of Wesley with clients, not stock. Since no such photo exists yet, add clearly-labeled placeholder slots (dashed border, explicit "pending" copy) rather than any stock/generic image — per the brief's explicit resolution of the stock-vs-brand-guide tension. Wesley replaces the placeholder `<div>` with a real `<img>` later.

- [ ] **Step 1: Add a placeholder photo slot to the About section, converting it from centered-text to image+text**

Replace (`index.html:546-560`):
```html
  <!-- About Change Maven -->
  <section id="about" class="bg-cream border-t border-navy/10">
    <div class="max-w-[860px] mx-auto px-5 sm:px-8 py-20 lg:py-24">
      <h2 class="font-display font-bold text-navy text-3xl sm:text-4xl text-center mb-8">About Change Maven</h2>
      <p class="font-display text-navy text-lg sm:text-xl leading-[1.7] text-center reveal">Change Maven exists to guide organizations through change — aligning people, process, and technology so transformation sticks. We're built to be the most trusted change management partner for mid-market companies, government agencies, and nonprofits across the Midwest and beyond.</p>
      <div class="mt-6 space-y-5 text-slate leading-relaxed text-center max-w-[680px] mx-auto reveal">
        <p>We're approachable, meeting clients where they are and speaking plainly. We're collaborative — coaching and guiding rather than imposing, so the client's team owns the outcome. We're grounded, rooted in Alton, Illinois, with a Midwestern work ethic. And we're transformative, helping organizations become meaningfully better, not just different.</p>
        <p class="italic">From where you are, to where you need to be.</p>
      </div>
      <div class="mt-8 flex flex-wrap justify-center gap-2 reveal">
        <span class="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 text-gold text-[0.72rem] font-semibold tracking-wide uppercase px-3 py-1">PMP</span>
        <span class="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 text-gold text-[0.72rem] font-semibold tracking-wide uppercase px-3 py-1">CCMP</span>
        <span class="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 text-gold text-[0.72rem] font-semibold tracking-wide uppercase px-3 py-1">Six Sigma Black Belt</span>
      </div>
    </div>
  </section>
```
With:
```html
  <!-- About Change Maven -->
  <section id="about" class="bg-cream border-t border-navy/10">
    <div class="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 lg:py-24">
      <h2 class="font-display font-bold text-navy text-3xl sm:text-4xl text-center mb-12">About Change Maven</h2>
      <div class="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
        <!-- PLACEHOLDER: replace with a real photo of Wesley with a client (per Ray Edwards' feedback, 2026-08-18) — never a stock photo. Remove this comment and the dashed box once the real image is in place. -->
        <div class="reveal aspect-[4/5] rounded-sm border-2 border-dashed border-gold/50 bg-gold/5 flex flex-col items-center justify-center text-center p-6 shadow-card">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="text-gold/70 mb-3" aria-hidden="true"><path d="M4 8a2 2 0 0 1 2-2h1.5l1-1.5h7l1 1.5H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.2" stroke="currentColor" stroke-width="1.6"/></svg>
          <p class="text-gold text-[0.8rem] font-semibold tracking-wide uppercase">Photo pending</p>
          <p class="mt-1 text-slate text-[0.82rem] max-w-[220px]">Real photo of Wesley with a client — add before launch, no stock imagery.</p>
        </div>
        <div class="reveal">
          <p class="font-display text-navy text-lg sm:text-xl leading-[1.7]">Change Maven exists to guide organizations through change — aligning people, process, and technology so transformation sticks. We're built to be the most trusted change management partner for mid-market companies, government agencies, and nonprofits across the Midwest and beyond.</p>
          <div class="mt-6 space-y-5 text-slate leading-relaxed">
            <p>We're approachable, meeting clients where they are and speaking plainly. We're collaborative — coaching and guiding rather than imposing, so the client's team owns the outcome. We're grounded, rooted in Alton, Illinois, with a Midwestern work ethic. And we're transformative, helping organizations become meaningfully better, not just different.</p>
            <p class="italic">From where you are, to where you need to be.</p>
          </div>
          <div class="mt-8 flex flex-wrap gap-2">
            <span class="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 text-gold text-[0.72rem] font-semibold tracking-wide uppercase px-3 py-1">PMP</span>
            <span class="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 text-gold text-[0.72rem] font-semibold tracking-wide uppercase px-3 py-1">CCMP</span>
            <span class="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 text-gold text-[0.72rem] font-semibold tracking-wide uppercase px-3 py-1">Six Sigma Black Belt</span>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Verify**

Screenshot `http://localhost:3000/index.html` at the `#about` section, desktop and mobile. Confirm: photo placeholder sits left of text on desktop, stacks above text on mobile (grid collapses since no explicit column reorder is needed — placeholder naturally appears first in DOM order, which reads correctly stacked), dashed border and "Photo pending" label are legible, `reveal` animation still fires on scroll into view (unchanged class).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Add real-photography placeholder to About section, restructure as image+text"
```

---

## Task 3: Homepage — testimonials section (empty, real-quotes-only)

**Files:**
- Modify: `index.html` — insert new section between the "How We Can Help" section (ends `index.html:543`) and the "About Change Maven" section

**Component contract:** name/role/org, quote, optional photo, per-card "Add a testimonial" affordance. No seeded or fabricated quotes — ever, per Ray's explicit hard constraint. Include an HTML comment flagging Hoyleton as a candidate source without inventing a quote for them.

- [ ] **Step 1: Insert the testimonials section**

Insert immediately after the closing `</section>` of the "How We Can Help" section (`index.html:543`, right before `<!-- About Change Maven -->`):

```html
  <!-- Testimonials — real, attributed client quotes only. Never seed fake content here (Ray Edwards, 2026-08-18: "sometimes people will manufacture [testimonials]... be very careful"). Wesley has an active engagement with Hoyleton that could plausibly be a source once it reaches a natural checkpoint — do not draft a quote on their behalf. -->
  <section id="testimonials" class="bg-cream border-t border-navy/10">
    <div class="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 lg:py-24">
      <p class="text-gold text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-center mb-4">What Clients Say</p>
      <h2 class="font-display font-bold text-navy text-3xl sm:text-4xl text-center mb-12">Real Results, In Their Words</h2>
      <div class="grid sm:grid-cols-3 gap-6">
        <div class="rounded-sm border-2 border-dashed border-navy/15 bg-white/60 p-7 flex flex-col items-center justify-center text-center min-h-[220px]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-navy/25 mb-3" aria-hidden="true"><path d="M7 8h4v4l-2 5H6l2-5H6V8Zm8 0h4v4l-2 5h-3l2-5h-1V8Z" fill="currentColor"/></svg>
          <p class="text-navy/50 text-[0.85rem] font-semibold">Add a testimonial</p>
          <p class="mt-1 text-slate/70 text-[0.78rem] max-w-[200px]">Real, attributed client quote — name, role, and org.</p>
        </div>
        <div class="rounded-sm border-2 border-dashed border-navy/15 bg-white/60 p-7 flex flex-col items-center justify-center text-center min-h-[220px]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-navy/25 mb-3" aria-hidden="true"><path d="M7 8h4v4l-2 5H6l2-5H6V8Zm8 0h4v4l-2 5h-3l2-5h-1V8Z" fill="currentColor"/></svg>
          <p class="text-navy/50 text-[0.85rem] font-semibold">Add a testimonial</p>
          <p class="mt-1 text-slate/70 text-[0.78rem] max-w-[200px]">Real, attributed client quote — name, role, and org.</p>
        </div>
        <div class="rounded-sm border-2 border-dashed border-navy/15 bg-white/60 p-7 flex flex-col items-center justify-center text-center min-h-[220px]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-navy/25 mb-3" aria-hidden="true"><path d="M7 8h4v4l-2 5H6l2-5H6V8Zm8 0h4v4l-2 5h-3l2-5h-1V8Z" fill="currentColor"/></svg>
          <p class="text-navy/50 text-[0.85rem] font-semibold">Add a testimonial</p>
          <p class="mt-1 text-slate/70 text-[0.78rem] max-w-[200px]">Real, attributed client quote — name, role, and org.</p>
        </div>
      </div>
    </div>
  </section>

```

Note the populated-card markup for when Wesley supplies a real quote (for reference — do not fill this in now):
```html
<div class="rounded-sm border border-navy/10 bg-white shadow-card p-7">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-gold/70 mb-4" aria-hidden="true"><path d="M7 8h4v4l-2 5H6l2-5H6V8Zm8 0h4v4l-2 5h-3l2-5h-1V8Z" fill="currentColor"/></svg>
  <p class="text-navy leading-relaxed italic">"[Verbatim client quote]"</p>
  <div class="mt-5 pt-4 border-t border-navy/10">
    <p class="font-display font-bold text-navy text-sm">[Name]</p>
    <p class="text-slate text-[0.8rem]">[Role, Organization]</p>
  </div>
</div>
```

- [ ] **Step 2: Verify**

Screenshot `http://localhost:3000/index.html` at the new `#testimonials` section, desktop and mobile. Confirm: 3 dashed-border empty-state cards render in a row on desktop, stack on mobile, section sits cleanly between "How We Can Help" and "About," no fabricated quote text anywhere.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Add empty-state testimonials section, real quotes only"
```

---

## Task 4: Homepage — surface the existing video near the top

**Files:**
- Modify: `index.html:419-435` (Hero section)
- Modify: `index.html:752-798` (`initBridgeVideo` script)

**Approach:** A 90-second overview video (`videos/ChangeMavenWebsite.mp4`) already exists and is already wired into a lightbox — it just isn't reachable from the hero, so a first-time visitor may never scroll to it. Rather than building new video infrastructure for content that doesn't exist yet, add a hero-level entry point into the existing lightbox. **Flag to Wesley:** confirm the existing video's tone matches Ray's "educational, not a pitch" guidance (why change happens / how to prepare) before shipping — this plan only wires up discoverability, it does not re-review the video's content.

- [ ] **Step 1: Add a "Watch" link to the hero CTA row**

Replace (`index.html:426-429`):
```html
        <div class="mt-9 flex flex-wrap gap-4">
          <a href="#contact" class="bg-gold text-navy font-semibold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light hover:-translate-y-0.5 focus-visible:bg-gold-light transition-[background-color,transform] duration-200 shadow-gold-sm">Start a Conversation</a>
          <a href="#approach" class="border border-cream/30 text-cream font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold-light hover:text-gold-light focus-visible:border-gold-light focus-visible:text-gold-light transition-colors duration-200">See how we work</a>
        </div>
```
With:
```html
        <div class="mt-9 flex flex-wrap gap-4">
          <a href="#contact" class="bg-gold text-navy font-semibold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light hover:-translate-y-0.5 focus-visible:bg-gold-light transition-[background-color,transform] duration-200 shadow-gold-sm">Start a Conversation</a>
          <a href="#approach" class="border border-cream/30 text-cream font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold-light hover:text-gold-light focus-visible:border-gold-light focus-visible:text-gold-light transition-colors duration-200">See how we work</a>
        </div>
        <button type="button" id="heroWatchBtn" class="mt-6 flex items-center gap-2.5 text-cream/80 text-sm font-medium hover:text-gold-light focus-visible:text-gold-light transition-colors duration-200">
          <span class="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5L19 12L8 19V5Z"/></svg>
          </span>
          Watch: why change sticks (90 sec)
        </button>
```

- [ ] **Step 2: Wire the hero button into the existing modal-open logic**

In the `initBridgeVideo` function (`index.html:752`), after the existing `var modalBackdrop = ...` line, add:
```javascript
    var heroWatchBtn = document.getElementById("heroWatchBtn");
```
Add `heroWatchBtn` to the existing guard clause (`if (!panel || !video || ...`) so it reads `if (!panel || !video || !playBtn || !headline || !modal || !modalStage || !modalClose || !modalBackdrop || !heroWatchBtn) return;`.

After the existing `playBtn.addEventListener("click", openModal);` line, add:
```javascript
    heroWatchBtn.addEventListener("click", openModal);
```

- [ ] **Step 3: Verify**

Screenshot the hero at `http://localhost:3000/index.html`, confirm the new "Watch" button renders below the two CTAs with correct spacing and hover state. Manually click it (via the dev server in a browser, not just the screenshot) and confirm it opens the same video lightbox as the mid-page play button.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "Add hero-level entry point into the existing Bridge Method video"
```

---

## Task 5: Resources — per-article view + read-time analytics

**Files (17 total, identical snippet):**
- Modify: `resources/index.html`
- Modify: `resources/articles/5-whys-root-cause-analysis-for-small-business-owners.html`
- Modify: `resources/articles/5-whys-root-cause-discipline-for-operators.html`
- Modify: `resources/articles/how-to-learn-anything-feynman.html`
- Modify: `resources/articles/regaining-control-drifting-project.html`
- Modify: `resources/articles/small-business-owner-distributions.html`
- Modify: `resources/articles/smart-goals-practice-before-you-need-it.html`
- Modify: `resources/articles/swot-networking-frameworks.html`
- Modify: `resources/articles/the-anchor-points.html`
- Modify: `resources/articles/swot-analysis-masterclass.html`
- Modify: `resources/articles/pestle-analysis-masterclass.html`
- Modify: `resources/articles/porters-five-forces-masterclass.html`
- Modify: `resources/articles/5c-analysis-masterclass.html`
- Modify: `resources/articles/consulting-ai-build-vs-partner.html`
- Modify: `resources/articles/yes-and-operational-playbook.html`
- Modify: `resources/articles/slow-is-smooth-fundamentals-first.html`
- Modify: `resources/articles/generational-cohorts-workplace-diagnostic.html`

**Approach:** Vercel Analytics is already installed site-wide (`window.va` stub + `/_vercel/insights/script.js`) but fires no custom events. Add a `article_view` event on load and an `article_read_time` event (seconds, bucketed) on page hide, scoped only to Resources pages, using each page's own filename as the slug. This surfaces in the existing Vercel Analytics dashboard's Events tab — no new dashboard or backend needed, satisfying Ray's "track who's looking and how long" ask without adding a full analytics platform.

- [ ] **Step 1: Add the tracking snippet to every article page**

Every article page ends with this exact block (confirmed identical across all 16 article files, e.g. `resources/articles/the-anchor-points.html`):
```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
</body>
</html>
```
Replace it with (adding the tracking block between the `va` stub and the insights script):
```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script>
(function () {
  "use strict";
  var slug = location.pathname.split("/").pop().replace(".html", "");
  var startTime = Date.now();
  var sent = false;

  window.va("event", { name: "article_view", data: { slug: slug } });

  function sendReadTime() {
    if (sent) return;
    sent = true;
    var seconds = Math.round((Date.now() - startTime) / 1000);
    window.va("event", { name: "article_read_time", data: { slug: slug, seconds: seconds } });
  }

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") sendReadTime();
  });
  window.addEventListener("pagehide", sendReadTime);
})();
</script>
<script defer src="/_vercel/insights/script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Add the same snippet to `resources/index.html`**

`resources/index.html` ends with the identical `window.va` stub + insights script pattern (confirmed at the file's tail). Apply the same replacement as Step 1, but fire `resources_index_view` instead of `article_view` (no `article_read_time` needed on the index — it's a listing page, not an article) — i.e. just:
```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script>
  window.va("event", { name: "resources_index_view" });
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

- [ ] **Step 3: Verify**

Start `node serve.mjs`, open `http://localhost:3000/resources/articles/the-anchor-points.html` in a browser, open devtools console, and confirm no JS errors fire (Vercel's `va` stub queues events harmlessly when the real script isn't loaded/authenticated locally — this is expected in local dev; the events only actually transmit once deployed to Vercel). Spot-check 2–3 more article files and `resources/index.html` for the same.

- [ ] **Step 4: Commit**

```bash
git add resources/index.html resources/articles/*.html
git commit -m "Add per-article view and read-time tracking via Vercel Analytics custom events"
```

---

## Self-review notes

- **Spec coverage:** Requirement 1 (text density) → Task 1 (services pages) + audit notes (resources/index.html already fine, articles explicitly untouched). Requirement 2 (color/pop) → Task 1's gold-badge cards + Task 2/3's imagery, using only existing palette. Requirement 3 (imagery) → Task 2. Requirement 4 (testimonials) → Task 3. Requirement 5 (video) → Task 4. Requirement 6 (Resources analytics) → Task 5. Requirement 7 (competitive benchmarking) is a one-time visual-reference check, not a code change — see note below. Requirement 8 (prompting guidance) is process guidance for this plan's own execution, not a deliverable.
- **Competitive benchmarking (req. 7):** No code task — Ops Insights was flagged as worth a *look* for visual-treatment ideas, not something to copy structurally. Nothing in Tasks 1–5 needed a direct reference beyond what's already specified from the brief and brand guide.
- **Brand-guide re-check (instruction 7 in the brief):** Every task above stays within the 5-color palette, uses only the two approved typefaces (no new font declarations), reuses the existing `#bridge-icon` SVG rather than introducing clip art, and avoids the banned vocabulary list in all new copy ("Photo pending," "Add a testimonial," "Watch: why change sticks" — none use banned words).
