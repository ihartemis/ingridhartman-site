---
title: "Feedback sheet polish from the first device pass"
date: 2026-09-07
effort: 1
medium: app
project: ournanny
kind: release
pr: 31
build: 89
link: https://github.com/Artemis-Nova-Product/ournanny/pull/31
tools: [claude-code, expo, convex]
---

- The feedback sheet was broken on a real phone: no side margins and a Send button collapsed to a thin bar. It was rebuilt on the app's standard form sheet, which brings padding, a pinned Cancel and Send footer, keyboard handling, and in-sheet error messages.
- Copy moved from the founder's voice to the team's: "Give feedback", bugs or ideas, "text us instead", and "We read every one" after sending. A line that tied the email ask to the founder personally was removed.
- The feedback chip on Today uses dark text on marigold so it reads in dark mode, and the yellow tints on the Pod tab rows were dropped because they went muddy in dark.
- The build, update, and screen context still attach to every report; it is no longer displayed in the sheet.
