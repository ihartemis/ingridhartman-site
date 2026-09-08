---
title: "Fixes from the first outside users"
date: 2026-09-07
effort: 1
medium: app
project: ournanny
kind: release
pr: 25
build: 89
link: https://github.com/Artemis-Nova-Product/ournanny/pull/25
tools: [claude-code, expo, convex, sentry, posthog]
---

- Errors inside a bottom sheet were invisible: the message rendered underneath the native sheet. Sheets and the away modal now show their own errors.
- Creating a pod now registers the onboarding-completed and pod-created events. They had only been wired for people joining by invite; a Brooklyn family's full setup showed the gap.
- The record-payment button waits until the app knows the user's role instead of briefly rendering for the wrong person.
- Masking in session recordings now covers sheet bodies, the away modal, and the billing family switcher, which rendered outside the masked tree.
- Install-to-signup tracking was broken: the anonymous id was reset several times per install, so every new user looked like a fresh visitor. Fixed. App-hang reports now need five seconds, after the first one turned out to be the iOS keyboard autofill.
