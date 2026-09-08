---
title: "Build 81, invited onboarding, Schedule as home"
date: 2026-07-03
effort: 2
medium: app
project: ournanny
kind: release
build: 81
tools: [claude-code, expo, convex, clerk, eas]
---

- New TestFlight build (81). The app opens on the Schedule; the old Home tab is gone and the date picker moved onto the Schedule.
- Every invited person gets a flow built for their situation: a five-screen welcome for an invited nanny, a claim screen for an invited parent, and a confirm-the-family screen for a co-parent. A partner invite starts from a phone number.
- Sign-in is phone only; the email path was removed.
- Billing treats a week as over at midnight on Friday in the pod's time zone, and past sessions show as over rather than upcoming.
- A version line on the profile screen shows the build number and whether the app is running its built-in code or an over-the-air update. This is how a tester confirms an update actually arrived.
