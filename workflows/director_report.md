# Director Report

Produces `STATUS.md` at the repo root — a standing status report that EA's `director-sync` skill reads on a schedule to keep Wesley's project plans current. This repo doesn't follow the WAT `workflows/` pattern otherwise (its `CLAUDE.md` is a frontend-design rules doc, not a WAT SOP index) — this is the one workflow file that exists here, purely to plug into `director-sync`.

## Objective

Give Wesley (via EA) an honest, current read on: what's actively being worked on on the Change Maven marketing site, what's shipped since the last report, what's stuck or at risk, and what's next — without him having to open this repo himself.

## Step 1 — Check whether there's anything new to report

Read `STATUS.md`'s `Last updated` line if it exists. Run `git log --since="{that timestamp}" --oneline` (or `git log -20 --oneline` if `STATUS.md` doesn't exist yet).

If there's no git activity since the last report, don't regenerate the whole file — just bump `Last updated` and note "No activity since last report" under Current focus.

## Step 2 — Gather state

This repo has no content-catalog or deliverable-folder concept — it's a static site codebase. Gather state from:
- `git log` since the last report: which pages changed (`index.html`, `services/*.html`, `clarity/*`) and roughly what changed (new section, copy edit, redesign pass).
- Brand asset changes: any new/updated files in `brand_assets/` (images) or `docs/planning/Change_Maven_Brand_Guide.md` since the last report.
- If a `temporary screenshots/` folder has recent screenshots newer than the last report's timestamp, that indicates an active design/review loop (per `CLAUDE.md`'s Screenshot Workflow) even if it hasn't landed as a commit yet — worth a mention under Current focus even if it's not yet "progress."
- Whether the site currently matches the reference/brand guide it's supposed to match, if that's assessable from recent commit messages or an obvious mismatch — flag as a red flag if a stalled redesign pass has left the live site inconsistent with `brand_assets/`.

## Step 3 — Write `STATUS.md`

Fixed template (EA's `director-sync` skill parses this structure, so keep the section headers exact):

```markdown
# Status Report — Website_design

Last updated: {RFC3339 timestamp}

## Current focus
{1-3 sentences: what's actively being worked on right now}

## Progress since last report
- {bullet per meaningful commit/page change, not a raw git log dump}

## Red flags / blockers
- {anything stalled, backlogged, or at risk — explicitly say "none" if genuinely nothing, don't omit the section}

## Next up
- {what's queued next}
```

Use the actual max commit timestamp seen in Step 2 for `Last updated`, not "now."

## Step 4 — Note EA cross-references

This repo is Change Maven's marketing site codebase. It feeds `projects/clarity/README.md` (the Clarity small-business subpage build, when active) and indirectly supports `projects/business-development/README.md` since the live site is Change Maven's public-facing credibility asset. Don't edit those files directly from here — `director-sync` in EA handles cross-referencing and proposes any changes to Wesley. Just make sure `STATUS.md`'s content is specific enough (which page, what changed) for that skill to map it correctly.

## Out of scope

- Don't edit anything outside `STATUS.md` — this workflow reports state, it doesn't change it.
- Don't touch EA's files directly (`../EA/projects/*`, `../EA/context/*`) — that's `director-sync`'s job, run centrally so Wesley reviews changes in one place instead of scattered across repos.
