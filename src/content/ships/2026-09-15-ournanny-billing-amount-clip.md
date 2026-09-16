---
title: "The Billing total is no longer cut off at the top"
date: 2026-09-15
effort: 1
medium: app
project: ournanny
kind: release
pr: 52
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/52
tools: [claude-code, expo]
---

- The large dollar amount at the top of Billing had the tops of its digits sliced off. It now has room to render fully.
- The line beneath it read, for example, "4 of 11 sessions · Sol Villasenor until 5:00 PM" and ran off the right edge on longer names. It now shows the first name only, and wraps rather than overflowing.
