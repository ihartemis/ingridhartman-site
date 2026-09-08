---
title: "Fixed saving a time change on a repeating session"
date: 2026-07-27
effort: 1
medium: app
project: ournanny
kind: release
pr: 10
build: 84
link: https://github.com/Artemis-Nova-Product/ournanny/pull/10
tools: [claude-code, expo]
---

- Fixed a bug where saving a time or location change on a repeating session silently did nothing. The "this session only / this and future sessions" question now appears inside the editing sheet.
- The same in-sheet step is shared by every editing sheet, and the old standalone question modal is deleted.
