---
title: "Event times and time zones"
date: 2026-01-18
effort: 2
medium: app
project: ournanny
kind: release
build: 77
tools: [expo, eas, convex, clerk, cursor]
---

- **Consistent times** — An event reads the same everywhere it appears — on the event itself, on Today, and in the nanny's view — anchored to the host home's time zone.
- **Time validation** — An event that would cross midnight is rejected up front, and each child's attendance is stored as an exact point in time rather than a clock reading.
- **Hosting capacity** — Onboarding asks how many children a home can take.
