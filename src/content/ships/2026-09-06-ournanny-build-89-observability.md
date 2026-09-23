---
title: "Crash reporting and privacy"
date: 2026-09-06
effort: 2
medium: app
project: ournanny
kind: release
build: 89
tools: [claude-code, expo, convex, eas, sentry, posthog]
---

- **Automatic crash reports** — The app reports crashes on its own, so nobody has to describe what broke. No personal information goes with a report: phone numbers are scrubbed and the user is an opaque id.
- **Usage, not content** — The app records which screens open and which actions happen. No message content, no names, no amounts.
- **Recordings are masked** — Every image, every text field, and the whole signed-in app render as grey boxes; only login and onboarding are visible.
- **Privacy policy** — ournanny.app says all of this in plain words and names the providers.
- **New build** — Install build 89 from TestFlight.
