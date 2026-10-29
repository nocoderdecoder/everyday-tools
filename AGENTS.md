# Project guidance

This repository is growing one business: a mobile-first workspace for small home service businesses. The first customer hypothesis is solo residential cleaning providers. The core workflow is inquiry → quote → booked job → follow-up → repeat work. Use `PRODUCT.md` and `ROADMAP.md` to choose the next coherent product slice. Do not add unrelated mini-tools.

The existing Everyday Tools collection remains available at the repository root while the new product prototype grows under `app/`. Preserve its data formats and behavior unless a planned migration requires a change.

For every implementation slice, check Git status and recent commits, make scoped changes, verify them, record the outcome in `PROGRESS.md`, and push reviewable commits to the verified `origin/main` when access permits. If a push fails, leave the commits locally and report the exact blocker. Revisit assumptions and priorities at least monthly; do not manufacture a feature solely to satisfy a daily commit count.

Never open a visible browser or app window during automated work. Use isolated headless browser checks for UI work; do not use `--headed`, the macOS `open` command, `osascript`, or a visible browser tab. A headless Playwright CLI session is allowed. If headless visual QA cannot run, complete the available non-GUI checks and label visual QA unverified.

Use demo data only. Do not purchase, activate, or consume paid services, trials, credits, hosting, billing, or integrations without explicit approval in chat. Do not contact prospective customers or publish the product without explicit approval.
