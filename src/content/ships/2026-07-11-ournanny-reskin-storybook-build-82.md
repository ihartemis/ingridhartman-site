---
title: "A real visual identity and TestFlight build 82"
date: 2026-07-11
effort: 2
medium: app
project: ournanny
kind: release
build: 82
tools: [claude-code, expo, convex, eas]
---

- The app has its own look: the website's warm cream, ink, and sand palette, the brand typefaces, and a deeper teal. Before this the app had rendered the iOS system font since day one, because its declared font was never actually loaded.
- Everything tappable responds: a small spring on press, a light haptic tick, an animated tab pill, real screen transitions, and a confetti burst when a payment is recorded.
- Each tab has its own accent in the tab bar (Schedule teal, Billing amber, Pod coral). The Share tab is called Pod again.
- Empty screens explain what goes there instead of showing nothing.
- New TestFlight build (82), needed because the fonts and haptics are native pieces. Devices still on build 81 keep the old look until they update.
