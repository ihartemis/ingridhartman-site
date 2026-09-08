---
title: "Fixed a crash on app open"
date: 2026-06-19
effort: 1
medium: app
project: ournanny
kind: release
pr: 6
build: 79
link: https://github.com/Artemis-Nova-Product/ournanny/pull/6
tools: [claude-code, expo, convex]
---

- Fixed a crash that hit every tester the moment the app opened, introduced by the new invited-nanny recognition in onboarding. The fix went out over the air the same afternoon.
- The onboarding flow code now tolerates its steps changing while data loads, which removes the whole class of bug rather than the one instance.
