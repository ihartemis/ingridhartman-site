---
title: "Address search actually works on the phone now"
date: 2026-09-16
effort: 2
medium: app
project: ournanny
kind: release
pr: 57
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/57
tools: [claude-code, clerk, expo]
---

- Typing an address on your phone shows suggestions again. Yesterday's fix restored it on the web only; on iOS the list stayed empty from the September 15th update until this one, so anyone adding a house in that window got nothing.
- The app was also quietly asking the sign-in service for a fresh token hundreds of times a minute while an address field was on screen. That stops.
- Found by walking the new-session flow on the iOS Simulator rather than the browser, which is now the rule for anything that touches sign-in, keyboards, or pickers.
