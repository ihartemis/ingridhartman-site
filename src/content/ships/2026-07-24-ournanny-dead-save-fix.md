---
title: "Fixed a Save button that did nothing"
date: 2026-07-24
effort: 1
medium: app
project: ournanny
kind: release
build: 82
tools: [claude-code, expo, convex]
---

- Fixed: on a repeating session, saving a kid's hours did nothing. No error, no close. The "this session only / this and future" question was supposed to appear and never did.
- The question is now a second step inside the same sheet. Save shows the two options; Back returns to the hours with the draft intact.
