---
title: "Build 89: crash reporting and usage analytics"
date: 2026-09-06
effort: 2
medium: app
project: ournanny
kind: release
pr: 23
build: 89
link: https://github.com/Artemis-Nova-Product/ournanny/pull/23
tools: [claude-code, expo, convex, eas, sentry, posthog]
---

- New TestFlight build (89). This one reports crashes automatically, so a tester does not have to describe what broke. No personal information goes with a report: phone numbers are scrubbed and the user is an opaque id.
- The app now records how it is used, which screens open and which actions happen, with no message content, names, or amounts. Session recordings are on but fully masked: every image, every text field, and the whole signed-in app render as grey boxes, and only login and onboarding are visible. A nanny's session contains other families' kids, so masking was the condition for turning recordings on.
- The privacy policy on ournanny.app says this in plain words and names both providers.
- The account-sync guard from the production cutover ships natively in this build, and the webhook no longer logs full account payloads on errors.
- Phones on build 84 stop receiving updates from here; everyone installs 89 from TestFlight.
