---
title: "Event times fixed across timezones"
date: 2026-01-18
effort: 2
medium: app
project: ournanny
kind: release
build: 77
tools: [expo, eas, convex, clerk, cursor]
---

- Fixed events showing different times in different places. The time chosen when creating an event now stays as picked until save, then converts once using the host home's timezone, so a 9 AM event reads 9 AM on the event, on Today, and in the nanny's view.
- Time validation now rejects events that would cross midnight, and a child's attendance is stored as timestamps instead of clock strings so the same fix applies to per-child hours.
- The hosting-capacity question (how many children a home can take) returned to onboarding after being dropped in an earlier build.
- Under the hood, events are stored by start time rather than a separate date field, which is what made the fix possible.
