---
title: "Sheet errors and tracking"
date: 2026-09-07
effort: 1
medium: app
project: ournanny
kind: release
build: 89
tools: [claude-code, expo, convex, sentry, posthog]
---

- **Errors in sheets** — Bottom sheets and the away modal now show their own error messages, in front of the sheet where you can read them.
- **Record payment** — The record-payment button waits until the app knows your role before it appears.
- **Recording privacy** — Masking in session recordings now covers sheet bodies, the away modal, and the billing family switcher.
- **Signup analytics** — Creating a pod registers the onboarding-completed and pod-created events, and each install keeps one identity, so a new account reads as a new account.
