---
title: "The test lanes work again (internal)"
date: 2026-09-15
effort: 2
medium: app
project: ournanny
kind: release
pr: 51
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/51
tools: [claude-code, clerk, expo]
---

- Internal tooling only — nothing changes for anyone using the app.
- The shortcut that signs a tester straight into a test account had been broken since sign-in moved to phone numbers. It now uses the phone flow, like everyone else.
- The browser-based test environment runs again, so address entry can be checked before a change reaches a phone.
