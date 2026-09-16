---
title: "Closing the doors before strangers' kids are inside"
date: 2026-09-16
effort: 2
medium: app
project: ournanny
kind: release
pr: 56
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/56
tools: [claude-code, convex, clerk, sentry]
---

- A fresh security pass over every server function before the App Store submission. Ten public functions that answered without checking who was asking are now deleted or locked to pod and family members. One of them handed out family phone numbers and live co-parent invite codes to anyone with a family id — the worst of the set, now gone.
- Invitation lookups return only what the join screen needs, not the whole invitation including its code.
- The testing tools (impersonation, test-account pools) are no longer registered on the production backend at all, instead of being present and switched off.
- Feedback and waitlist submissions are rate-limited; error reports scrub email addresses as well as phone numbers.
- Nothing changes on screen. Sign-up, joining by code, and co-parent invites were walked through as fresh users before this merged.
