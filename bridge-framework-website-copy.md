# Bridge Framework — Website Narrative Draft

Draft copy for mavenshift.co, replacing the Dual-Pyramid Model framing with the Bridge Framework sketched in `branding/bridge-framework.excalidraw` (EA repo, 2026-08-21). Written to drop into the existing page structure — section names, IDs, and CTA patterns below match what's already live in `index.html` and `services/organizational-alignment.html` so this is closer to copy-paste than a redesign.

**This is copy only.** Renaming service page files/slugs, updating nav dropdowns, and rewiring internal links is a separate implementation pass once you've okayed the words below.

**Status:** Technical Automation is confirmed back in as its own offering (seven total now, not six). "Methodological Standards" is still folded into other pages rather than kept standalone — see **Mapping Notes** at the end if you want that reconsidered too.

---

## 1. Homepage

### Hero
Keep as-is — it already works and doesn't fight the new framing:

> **H1:** Change Management and Implementation
> **Subhead:** Because how you change matters as much as what you change.

No changes needed to the "Start a Conversation" / "See how we work" CTAs or the hero photo.

### Intro paragraph
Keep as-is — also still true under the new framework:

> Change isn't rare anymore — it's constant. The organizations that get ahead aren't the ones with the best plan on paper; they're the ones who can keep moving once the plan meets reality. Change Maven combines hands-on change management with practical coaching and tools to help your team build that muscle — not just for this rollout, but for the next one, too.

### "The Bridge Method" video panel
Already live and already named correctly — no copy change needed here, it's the same metaphor this whole draft is built around:

> **THE BRIDGE METHOD**
> How we create the conditions for change that holds.

### Replace "The Dual-Pyramid Model" section (`#services`)

This is the main rewrite. Same section shell (eyebrow → H2 → subtitle → spine line → offering grid → pull quote), new content:

> **Eyebrow:** How We Can Help
> **H2:** The Bridge Method
> **Subtitle:** Every engagement starts the same way: find out where you are, decide where you're going, and build what it takes to get there — then build what it takes to make the next change easier too.

**Spine line** (replaces "CEO / Vision → Departments → Management → Frontline Workers"):

> Current State → Why → How → Future State

**Offering grid** — recommend three columns instead of the old two, matching the framework's actual shape (one "Why" offering, three "How" offerings, three foundation offerings — seven total). If three columns don't fit the existing layout well, group Why+How as column one (4 items) and Build the Capability as column two (3 items) — either works; the seven items themselves matter more than the column split.

**Column 1 — Define the Destination & Build the Capacity**
- **Strategic & Management Consulting** — Board and executive-level work that defines vision, direction, and succession. This is where we help you answer *why* the change is worth making before a single process gets touched.
- **Operational Change Implementation** — Months to a year or more, retainer or bid-scoped. Change management strategy, stakeholder and market analysis, standardization, and org alignment — the work of actually building the capacity to change.
- **Workshops, Kaizen & Tabletop Exercises** — Decision-forcing, facilitated sessions built to end with something in hand: a process map, an action plan, a decision made instead of deferred again.
- **Technical Automation** — AI automation, process mapping, project management, and IV&V for system implementations. Building the capacity to change often means fixing the system underneath the process, not just the people around it.

**Column 2 — Build the Capability**
- **Training** — Standardized (Six Sigma, project management, change management, systems) or built custom for your team, with workbooks and action-plan guides so it doesn't evaporate after the session ends.
- **Six Sigma Certification** — Delivered through our GoLean Six Sigma partnership: DMAIC facilitation over 8–16 weeks, working real client ROI projects, not textbook exercises.
- **Executive & Leadership Coaching** — CEC-based active inquiry, 1:1 or small group, biweekly over 6-month contracts. A performance-improvement-plan variant is available where that's the fit.

**Closing pull-quote** — keep the existing one, it still lands:

> "We match your organization's needs to globally recognized standards, driving real people and culture adoption at every level."

### About stub (inside `#about`)
See full About copy below (§2). Use the first two paragraphs of that draft here, same as today's stub does with the old About copy, and keep the credential badges (PMP, CCMP, Six Sigma Black Belt) and the closing tagline italic line as-is:

> *From where you are, to where you need to be.*

### Approach / "Where We Help" section — update the Predixxa callout

The current line ties Predixxa to "Alignment work," which is retiring. Replace with:

> **Diagnostic Partner**
> Every engagement starts with a Current State Assessment — stakeholder interviews, and Predixxa's diagnostic where a deeper data layer is warranted. It's how we find out where you actually are before we talk about where you're going.
> *See how we work together →* (links to `partners/predixxa.html`, unchanged)

This also updates the seven link labels in this section to the new page titles (see §3 below for exact titles) and regroups them under "Define the Destination / Build the Capacity" and "Build the Capability" instead of "Strategy Pyramid / Execution Pyramid."

---

## 2. About (full page/section copy)

**Update:** Wesley supplied a rewrite for this section. Two of the paragraphs he sent (the "credentials" paragraph and the one right after it) repeated nearly the same credential list almost verbatim — likely a leftover from drafting rather than an intentional repeat. Merged below into one paragraph, keeping every distinct detail from both (the "twenty years... Asia, Europe, and the Middle East" line, and the "partners in the change... or just targets of it" line). Flag it if the repetition was actually intentional and you want it kept as two beats.

> I started as an engineer in the United States Army. Teamwork, grit, strategy, and execution — that's what got instilled early: the ability to get the job done, right.
>
> The credentials: an executive master's in international business from Saint Louis University, an MBA, executive coach certification, PMP, Certified Change Management Professional, and Six Sigma Black Belt — backed by twenty years executing sustainable change for governments, corporations, and nonprofits, across Asia, Europe, and the Middle East. But the real education came from watching good initiatives succeed or fail based on whether people felt like partners in the change, or just targets of it.
>
> Now I bring all of it to Change Maven: helping organizations, from nonprofits to government agencies and all the mid-market companies in between.
>
> I lead change with clarity and people at the center.

**Pull-quote** (repeated as a standalone visual callout for scannability, same line as in the body — this is a deliberate copywriting choice, not a duplication oversight, and matches Ray Edwards' "add visual relief" feedback):

> "Good initiatives succeed or fail based on whether people feel like partners in the change — or just targets of it."

**Note on dropped stats:** the profile-sheet version of this bio ("$10M+ in consulting engagements," "$3–5M in cost savings") isn't in Wesley's rewrite, and I kept it out — those numbers read as prior-employer track record rather than Change Maven LLC's own, and mixing the two risks a credibility problem if a prospect asks "which of those were your own clients?" If you want stats on the site, flag which ones are safely attributable to Change Maven itself versus your pre-Change-Maven career, and I'll add a "track record" strip back in.

---

## 3. Seven Services Pages (retitled)

Recommended new titles, slugs, and per-page copy. Each follows the existing page template: tier hero (eyebrow + H1 + subhead) → body intro + two icon-cards → "Where This Fits" cross-nav → CTA.

### 3.1 Strategic & Management Consulting
**Slug:** `services/strategic-management-consulting.html`
**Eyebrow:** Why · Define the Destination
**H1:** Strategic & Management Consulting
**Subhead:** Board and executive-level work that defines vision, direction, and succession — the future state itself.

**Body intro:** Before anything gets built or trained on, someone has to decide where the organization is actually headed. That's board-and-executive-level work, and it's where we start every engagement that's bigger than a single workshop.

**Icon-card 1 — Vision & Direction:** Working sessions with leadership to define what "better" actually looks like for your organization, in specific enough terms that the rest of the engagement has something to aim at.

**Icon-card 2 — Succession & Continuity:** Planning for who carries the change forward once we're not in the room — so the future state doesn't depend on any one person staying in their seat.

**Where This Fits:** Part of the Bridge Method's *Why* — the destination the rest of the work builds toward.

**CTA line:** Let's talk about where your organization is actually headed.

---

### 3.2 Operational Change Implementation
**Slug:** `services/operational-change-implementation.html`
**Eyebrow:** How · Build the Capacity
**H1:** Operational Change Implementation
**Subhead:** Months to a year or more. Retainer or bid-scoped. The work of actually building the capacity to change.

**Body intro:** Once the destination is set, someone has to do the unglamorous work of getting the organization ready to move: strategy, analysis, standardization, alignment. This is that work — embedded, not just advised from the outside.

**Icon-card 1 — Change Management Strategy:** A working plan for how the change actually rolls out — sequencing, communication, and the stakeholder map that tells you who needs to hear what, and when.

**Icon-card 2 — Stakeholder & Market Analysis, Standardization, Org Alignment:** The diagnostic and structural work that gets every department pulling toward the same plan, instead of quietly running its own version of it.

**Where This Fits:** Part of the Bridge Method's *How* — building the capacity before you build the capability.

**CTA line:** Let's talk about what it'll actually take to get your organization moving.

---

### 3.3 Workshops, Kaizen & Tabletop Exercises
**Slug:** `services/workshops-kaizen-tabletop.html`
**Eyebrow:** How · Build the Capacity
**H1:** Workshops, Kaizen & Tabletop Exercises
**Subhead:** Decision-forcing, facilitated events. The output is never just a discussion — it's a process map or an action plan you walk out with.

**Body intro:** Some problems don't need a months-long engagement — they need a room, the right people in it, and a facilitator who won't let the conversation end without a decision. That's what these sessions are for.

**Icon-card 1 — Kaizen Events:** Focused, short-cycle improvement sessions aimed at one process or one problem, built to surface root cause and commit to a fix in the same room.

**Icon-card 2 — Tabletop Exercises:** Scenario-driven sessions that pressure-test a plan before it's live — so the gaps show up in a conference room, not during the actual rollout.

**Where This Fits:** Part of the Bridge Method's *How* — the fastest way to build capacity when the problem is well-defined.

**CTA line:** Let's talk about the problem you need a room to solve.

---

### 3.4 Technical Automation
**Slug:** `services/technical-automation.html`
**Eyebrow:** How · Build the Capacity
**H1:** Technical Automation
**Subhead:** AI automation, process mapping, project management, and independent verification & validation (IV&V) for system implementations.

**Body intro:** Change doesn't happen only in meetings. Sometimes the fastest way to build capacity is to fix the system underneath the process — so we bring the technical execution alongside the change management, instead of leaving the tools to get bolted on after the fact.

**Icon-card 1 — AI Automation & Process Mapping:** Mapping how work actually flows today, then automating the parts that don't need a human in the loop — freeing your team to focus on the decisions that do.

**Icon-card 2 — Project Management & IV&V:** Hands-on project management plus independent verification & validation for system implementations, so what gets built actually matches what was needed.

**Where This Fits:** Part of the Bridge Method's *How* — building the capacity to change, including the systems that hold the new way of working.

**CTA line:** Let's talk about the system that's standing in your way.

---

### 3.5 Training
**Slug:** `services/training.html`
**Eyebrow:** Build the Capability
**H1:** Training
**Subhead:** Standardized or custom-built. Workbooks and action-plan guides included, so it doesn't evaporate after the session ends.

**Body intro:** Change sticks when the people doing the work have the skills to do it differently, not just the instruction to. We deliver standardized training — Six Sigma, project management, change management, systems — or build something custom for your team's specific gap.

**Icon-card 1 — Standardized Curriculum:** Six Sigma, PM, change management, and systems training built on established, certified methodology — not reinvented from scratch for every client.

**Icon-card 2 — Custom Workshops:** Built around your organization's actual tools and terminology, with a workbook and action-plan guide so participants leave with something to reference, not just a memory of the session.

**Where This Fits:** Part of the Bridge Method's foundation — what holds the change in place after we leave.

**CTA line:** Let's talk about the skill gap that's slowing your team down.

---

### 3.6 Six Sigma Certification
**Slug:** `services/six-sigma-certification.html`
**Eyebrow:** Build the Capability
**H1:** Six Sigma Certification
**Subhead:** Delivered through our GoLean Six Sigma partnership. DMAIC facilitation over 8–16 weeks, working real client ROI projects.

**Body intro:** Certification means more when it's earned on a real problem, not a simulated one. Through our partnership with GoLean Six Sigma, we facilitate DMAIC projects against your organization's actual work — so the certification and the ROI land at the same time.

**Icon-card 1 — DMAIC Facilitation:** Structured, 8-to-16-week facilitation through Define, Measure, Analyze, Improve, Control — with a real project as the vehicle for the belt.

**Icon-card 2 — Real Client ROI Projects:** Every certification is tied to a project with a measurable outcome for your organization, not a case study borrowed from someone else's business.

**Where This Fits:** Part of the Bridge Method's foundation, delivered through our GoLean Six Sigma partnership.

**CTA line:** Let's talk about which of your teams is ready to certify.

---

### 3.7 Executive & Leadership Coaching
**Slug:** `services/executive-leadership-coaching.html`
**Eyebrow:** Build the Capability
**H1:** Executive & Leadership Coaching
**Subhead:** CEC-based active inquiry. 1:1 or small group, biweekly, over 6-month contracts. A performance-improvement-plan variant is available.

**Body intro:** Leaders drive adoption more than any plan on paper does — how they show up sets the tone for whether their team treats change as a threat or a chance to get better. We coach using active inquiry from the Center for Executive Coaching's model, not a generic playbook.

**Icon-card 1 — 1:1 & Small-Group Coaching:** Biweekly sessions over a 6-month engagement, built around the specific leadership moments your organization's change is putting pressure on.

**Icon-card 2 — Performance-Improvement-Plan Variant:** A more structured version of the same coaching model, built for situations where a leader's development is tied to a formal PIP.

**Where This Fits:** Part of the Bridge Method's foundation — the leadership capability everything else depends on.

**CTA line:** Let's talk about the leaders who need to be ready before the change lands.

---

## 4. Current State Assessment (entry point, not one of the seven services pages)

Recommend this lives on the homepage as the low-friction lead offer (per Ray Edwards' "initial readiness assessment" suggestion) and on the existing `partners/predixxa.html` page, rather than as a standalone services page competing with the seven above.

**Suggested homepage callout / lead magnet copy:**

> **Not sure where to start? Find out where you actually are.**
> Every engagement begins with a Current State Assessment — stakeholder interviews, and Predixxa's diagnostic tool where a deeper data layer is warranted. No commitment, no jargon: just a clear read on your organization's readiness for the change you're already facing.
> *Start with an assessment →*

This also gives the "Start a Conversation" CTA somewhere lower-friction to point newer/colder leads, versus jumping straight to a sales conversation.

---

## Mapping Notes (please confirm before implementation)

The old six pages don't map 1:1 onto the new seven — some split, one carries straight across, and one still doesn't have a clean new home:

| Old page | What happens to its content |
|---|---|
| `executive-interventions.html` (executive coaching, strategic plan updates) | Splits: strategic-plan content → **Strategic & Management Consulting**; executive coaching content → **Executive & Leadership Coaching** |
| `organizational-alignment.html` (org-wide initiatives + dept. workshops) | Splits: org-wide initiatives → **Operational Change Implementation**; dept. workshops/seminars → **Workshops, Kaizen & Tabletop Exercises** |
| `targeted-education.html` (leadership dev, Six Sigma, change mgmt concepts, CPI) | Splits: general training → **Training**; Six Sigma Green/Black Belt → **Six Sigma Certification** |
| `change-management-integration.html` (stakeholder analyses, system audits, pay-scale audits) | Folded into **Operational Change Implementation** (stakeholder/market analysis is explicitly part of that offering's description) |
| `technical-automation.html` (AI automation, process mapping, PM, IV&V) | **Confirmed as its own page**, retitled but at the same slug — carries straight across as offering 3.4, no content lost. |
| `methodological-standards.html` (built on PMP/CCMP/Six Sigma methodology) | **Confirmed: not a standalone offering.** Wesley uses these methodologies to execute *all* of the services, not as a service on its own — so instead of one page, it becomes a small "Built On" methodology strip added to the shared page template (see below), appearing on all seven services pages plus About, rather than being tucked into just two of them. |

---

## 5. "Built On" methodology strip — add to all seven services pages

Since methodological standards apply across every offering rather than being one of them, add a small, consistent strip to the shared services-page template — right above the "Where This Fits" cross-nav on every page (§3.1–3.7), so it reads as the discipline underneath *all* the work rather than a claim attached to just one service:

> **Built on certified methodology.** Every engagement runs on PMP, Certified Change Management Professional, and Six Sigma standards — the same discipline behind all seven of these offerings, not just this one.

Keep it short (one line, small type, sits quietly under the body content) — this is a trust marker, not a section that needs its own hero or explanation. It can reuse the same three credential badges already on the About page (PMP · CCMP · Six Sigma Black Belt) as small inline icons/badges instead of prose, if that reads cleaner against the icon-card layout already on these pages.
