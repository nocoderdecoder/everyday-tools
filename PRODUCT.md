# Service Business OS — product brief

Service Business OS is the working title for one long-running product project. Its first customer is a solo residential cleaning provider who handles inquiries, quotes, jobs, and follow-ups without a dedicated office team. The longer-term opportunity is a focused operating system for small home service businesses. The name and market fit are hypotheses to validate, not promises.

## The job to be done

When a potential customer asks about a service, the owner needs to respond, make a clear quote, book the work, and remember to follow up. Information often lives in messages, notes, and a calendar, making it easy to lose a lead or forget a repeat visit. The product should make the next action visible in under a minute, particularly on a phone between jobs.

The first complete workflow is:

1. Capture an inquiry and contact details.
2. Track the lead's stage and the next follow-up date.
3. Prepare a simple quote and record whether the customer accepted it.
4. Schedule and complete the job.
5. Invite the customer to book recurring work and track the next visit.

The product should start with one reliable flow instead of a broad set of disconnected features.

## First release boundary

The first prototype lives in [`app/`](app/) alongside the original Everyday Tools collection at the repository root. It uses sample data and browser-local storage until account security and data recovery have been designed and tested. It is a prototype for evaluation, not a hosted service for real customer records. Do not put sensitive customer data into it yet.

First-release capabilities: a mobile-friendly lead list, a short inquiry form, clear lead stages, an obvious follow-up queue, and a path toward quotes and jobs. Keep forms short, status language plain, and core actions keyboard accessible. Later releases can add accounts, team permissions, shared data, billing, and integrations only after the underlying workflow proves useful.

## What success would look like

These are validation targets, not current results:

- A solo operator can add a new inquiry and see its next action in less than one minute.
- An owner can find every open quote and overdue follow-up without searching across messages.
- A pilot user can complete the inquiry-to-booked-job flow without a walkthrough.
- The product works at phone, tablet, and desktop widths and remains usable by keyboard.
- Before expanding scope, at least five potential users should review the workflow and identify a problem they would use it to solve. Reaching out to them needs the owner's approval.

## Important assumptions to test

- Residential cleaning operators lose meaningful time or revenue when inquiry and follow-up details are scattered.
- A focused lead-to-repeat-work flow is more useful to this audience than a broad all-in-one dashboard.
- Owners will trust a dedicated tool with customer records once backup, privacy, and access controls are in place.
- A phone-first interface is enough for daily work, while desktop handles planning and review.

Validate these through approved user conversations and observed use, not through more features alone. Track the assumptions and decisions in this file as evidence arrives.

## Operating boundaries

- Continue this one product in the existing Git repository and daily chat. Update [`ROADMAP.md`](ROADMAP.md) and [`PROGRESS.md`](PROGRESS.md) as work ships.
- Keep the original Everyday Tools site available at the repository root while the new product grows in [`app/`](app/).
- Work in small, reviewable slices. Verify each meaningful change, including headless visual checks for UI changes when available. Do not open visible browser windows during unattended work.
- Do not buy, enable, or consume a paid plan, API, credit, hosting service, trial, or billing integration without explicit approval in chat.
- Do not publish the product, contact prospective customers, or import real customer data without explicit approval in chat.
- Build accessibility, privacy, and data recovery into the product before inviting real users.

## Six-month direction

| Period | Main outcome | Evidence to seek |
| --- | --- | --- |
| Month 1 | Usable lead intake and follow-up prototype | A new inquiry can be captured and acted on quickly. |
| Month 2 | Quote and job lifecycle | A lead can become a booked and completed job. |
| Month 3 | Repeat-work reminders, exports, and owner dashboard | An owner can find due follow-ups and upcoming work. |
| Month 4 | Account, workspace, and data model design | Customer data has tested access and recovery paths. |
| Month 5 | Onboarding and small private pilot, subject to approval | Pilot users can complete the main workflow. |
| Month 6 | Reliability, pricing research, and launch readiness review | Product, security, and operating costs are understood. |

This order can change when user evidence or engineering constraints justify it. Paid infrastructure and public launch are decision gates, not automatic milestones.

## Immediate delivery slices

1. Record this product brief, target user, assumptions, and roadmap.
2. Create a mobile-friendly app shell with clearly labeled demo data.
3. Add and edit inquiries with customer name, service need, and contact method.
4. Track lead stages and a next-action date; show overdue items clearly.
5. Build and compare simple quote drafts with acceptance status.
6. Convert accepted quotes into scheduled jobs and record completion.
7. Add repeat-visit reminders and useful export/backup options.
8. Add an owner dashboard, onboarding, accessibility checks, and regression coverage.

After each slice, choose the next highest-value dependency rather than adding an unrelated feature to fill a day.
