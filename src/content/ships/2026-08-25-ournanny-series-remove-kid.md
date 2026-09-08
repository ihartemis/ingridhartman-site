---
title: "Remove a kid from all future repeating sessions"
date: 2026-08-25
effort: 2
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, expo, convex]
---

- Removing a kid from a repeating session now asks the same question as every other edit: this session only, or this and all future sessions. Choosing the latter takes them off the whole series from that date forward, instead of one week at a time.
- Parents can pull their own kid from a repeating schedule themselves, including on sessions another family hosts. Only removals: adding a kid to a series still goes through the host.
- Series edits are validated per kid. Adding needs add rights, removing needs remove rights, and untouched kids are not re-checked.
