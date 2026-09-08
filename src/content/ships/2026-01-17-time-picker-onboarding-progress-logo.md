---
title: "Time picker rebuilt, onboarding progress, new logo"
date: 2026-01-17
effort: 2
medium: app
project: ournanny
kind: release
build: 73
tools: [expo, eas, convex, clerk, logrocket, cursor]
---

- Choosing a time when creating an event uses a new calendar-style time picker, with separate native and web versions. The bottom sheets around it were restyled after they rendered badly in the previous build.
- Onboarding now shows progress by section instead of a numbered step count.
- The sign-in screen and splash screen show the OurNanny logo, replacing the framework's placeholder React logo that had shipped in every build so far.
- Household tags were removed from the home profile form, and the forgot-password screen was reworded.
- Session recording (LogRocket) was added to the native app so problems a tester hit could be replayed rather than described.
