# Roadmap

This repository is now building one product over many months: Service Business OS. See [PRODUCT.md](PRODUCT.md) for the target customer, assumptions, success measures, and six-month direction. The original Everyday Tools collection is preserved at the root; its shipped history appears below.

## Current milestone: accessible, trustworthy prototype

The first customer is a solo residential cleaning provider. The next delivery slices are ordered so each one builds on a working product:

1. [x] Write the product brief and replace the unrelated mini-tool backlog with one product roadmap.
2. [x] Build a mobile-friendly app shell with unmistakable demo data.
3. [x] Add and edit inquiries, including customer, service need, and contact method.
4. [x] Track lead stage and next-action date; make overdue follow-ups visible.
5. [x] Draft quotes and track accepted or declined decisions.
6. [x] Convert an accepted quote into a scheduled job and record completion.
7. [x] Add repeat-visit reminders and useful export/backup options. Restore now checks a selected file and previews its contents before confirmation.
8. [ ] Complete owner overview and usability. The overview, guide, inline field errors, navigation, visible editor and request-card focus, clear quote-decision labels, and filtered empty states are available. Headless checks cover the main inquiry-to-repeat path, form errors, focus visibility, and backup restore safety. A manual screen-reader review remains.

### Next coherent work

1. Review the inquiry, quote, job, repeat, and backup paths with a screen reader and keyboard; fix issues found.
2. Write a plain-language data lifecycle and recovery design for real customer records, including what happens after device loss.
3. Specify a minimum account and workspace permission model before adding shared or hosted storage.
4. Add targeted regression checks for data recovery and destructive actions where the design reveals risk.
5. Tighten first-visit instructions and empty states after the accessibility review.
6. Prepare a short, owner-approved research plan that tests the four product assumptions with cleaning providers.
7. Hold a pilot-readiness decision on privacy, access, recovery, hosting cost, and outreach before any real-user trial.

The 2026-11-27 [hypothesis review](PRODUCT.md#2026-11-27-hypothesis-review) found no customer validation yet. Reassess by 2026-12-27 or when new evidence arrives.

The project can advance or reorder these items as evidence and dependencies change. Each daily run should implement one coherent improvement, verify it, update [PROGRESS.md](PROGRESS.md), and push reviewable Git commits. Browser-based QA must run headlessly so it does not open a Chrome window on the owner's laptop.

## Longer-term sequence

- Completed in the prototype: quote-to-job workflow, repeat reminders, JSON backup, and owner overview.
- Next: accessibility review and access, privacy, and recovery design.
- Then, with owner approval: customer research and a small private pilot after those safeguards are tested.
- Later: evaluate pilot evidence, reliability, pricing, operating costs, and launch readiness.

Paid services, public deployment, customer outreach, and billing are explicit decision gates. None should start automatically.

## Original Everyday Tools history

The sections below record earlier mini-tool work. They are not the current daily backlog.

## Previous mini-tool idea (paused)

- Add more saved/export history where it helps

## Shipped (so far)

- Reading time calculator
- Sleep Planner
- Date Span
- Event countdown
- Unit converter
- Percentage helper
- Price after discount
- Coupon stack
- Commute cost estimator
- Charge time estimator
- Electricity cost estimator
- Electricity Cost example and clear actions
- Return deadline
- Return Deadline example and clear actions
- Price Per Use calculator
- Luggage weight check
- Warranty reminder
- Air filter reminder
- Tire pressure check
- Subscription cost
- Data plan check
- Emergency fund runway
- Trip cost split
- Budget splitter
- Paycheck planner
- Hourly pay check
- Bill reminder
- Savings goal planner
- Unit price compare
- Fee calculator
- Borrowing cost estimator
- Fuel cost estimator
- Recipe scaler
- Meal cost per serving
- Safe-to-spend planner
- Recipe Scaler example and clear actions
- Coffee ratio
- Caffeine cutoff
- Leftover planner
- Freezer label
- Pantry shelf life planner
- Water planner
- Medication refill planner
- Time zone buddy
- Leave time planner
- Countdown timer
- Work break planner
- Parking meter planner
- Laundry planner
- Trash day planner
- Umbrella check
- Paint calculator
- Pet food planner
- Plant watering planner
- Packing checklist
- Packing checklist copy/download actions
- Grocery list
- Grocery list copy/download actions
- Packing and grocery unchecked-item copy actions
- Random picker
- Random picker example and clear actions
- Password ideas clear action and disabled empty states
- Next Step example and clear actions
- Text Cleaner clear action and disabled empty states
- Unit Converter example and clear actions
- Percentage Helper example and clear actions
- Meeting Notes Cleaner disabled empty states
- Reading time example and clear actions
- Quick notes scratchpad
- Quick notes copy/download actions
- Daily Focus copy/download actions
- Habit Tracker copy action
- Password ideas generator
- Next step prompt
- Habit tracker (weekly checkoff)
- Meeting notes cleaner
- Theme toggle (system/light/dark)
- Tool search filter
- Quick search chips
- All tools quick search reset
- Productivity quick search chip
- Payday quick search chip
- Errands quick search chip
- Shopping quick search chip
- Deals quick search chip
- Food quick search chip
- Car quick search chip
- Subscriptions quick search chip
- Digital quick search chip
- Loans quick search chip
- Kitchen quick search chip
- Maintenance quick search chip
- Health quick search chip
- Medication quick search chip
- Weather quick search chip
- Home quick search chip
- Pets quick search chip
- Plants quick search chip
- Countdown timer end-time estimate
- Tighter stacked mobile result rows
- Tighter wrapped result text
- Minimum 44px action-button touch targets
- Programmatic labels for tool cards
- Saved favorite tools filter
- Screen-reader announcements for changing search results
- Visible keyboard focus for jump-menu destinations
- Dark-theme tool icon contrast polish
- Fuel Cost clear action and disabled empty states
- Bill Reminder example and clear actions
- Coupon Stack clear action and disabled empty states
- Charge Time clear action and disabled empty states
- Backup & restore (download a JSON file, restore later)

## Previous collection polish ideas (paused)

- Add screenshots to the README
- Improve keyboard navigation further (including more tool-level shortcuts)
- Add related search words to more tools as the collection grows
- Add more tool-level copy/export actions where it helps
- Add saved history for tools where it helps
- Add quick examples under more tools that benefit from sample inputs
- Keep empty and disabled states clear as the tool collection grows

## Historical GitHub-friendly habits

- Keep commits small and easy to read.
- Add at least one visible improvement each day.
- Update the roadmap as the project changes.
