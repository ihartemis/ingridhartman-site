---
title: "Address search on the phone, a photo you can close, and locked doors"
date: 2026-09-16
effort: 3
medium: app
project: ournanny
kind: release
pr: 57
covers: [54, 56, 55, 59, 60, 61, 62]
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/57
tools: [claude-code, clerk, convex, expo, playwright, sentry]
---

- Typing an address on your phone shows suggestions again. Yesterday's fix restored it on the web only; on iOS the list stayed empty from the September 15th update until this one, so anyone adding a house in that window got nothing. The app was also quietly asking the sign-in service for a fresh token hundreds of times a minute while the field was open. Both stop.
- Opening a photo in a session chat now shows a clear close button and a share button on dark pills, below the status bar. Before, the close button was drawn over the clock and battery in plain white — invisible on a bright photo — and one beta tester had to force-quit to get out. Tapping the photo itself also closes it.
- A fresh security pass over every server function before the App Store submission. Ten functions that answered without checking who was asking are deleted or locked to pod and family members; one had handed out family phone numbers and live co-parent invite codes to anyone with a family id. Invitation lookups return only what the join screen needs. The testing tools are no longer registered on the production backend at all. Feedback and waitlist submissions are rate-limited; error reports scrub email addresses too.
- Tapping an address suggestion now actually picks it: the map preview and the full address appear. Since the September 15th update the pick had failed silently on every platform — the app sent the place id under one name and the server only accepted the other. Editing an address also opens an empty search now instead of the old address squeezed into one line.
- Internal: a browser test now signs in as a test account and opens every screen — Today, Schedule, Billing, Pod, Account, What's new, a session, its chat — and fails if any of them throws. Three QA data seeds were fixed along the way. Nothing here changes on screen; sign-up, joining by code, and co-parent invites were walked through as fresh users before it merged.
