---
title: "Dark mode, designed on purpose"
date: 2026-08-26
effort: 2
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, expo]
---

- The app now has a designed dark mode. On a phone set to dark it uses a warm espresso-and-cream palette with the same storybook feel as the daytime look, instead of an unfinished slate palette that had been switching on by accident.
- Login and onboarding are readable in dark mode again. Before this, ivory backgrounds were carrying cream text, and the typing field was invisible.
- Buttons in dark mode use dark text on bright teal, because white text failed contrast on the lifted teal.
- The change is client-only and reached every phone as an over-the-air update.
