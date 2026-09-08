---
title: "One bottom-sheet system"
date: 2026-07-26
effort: 1
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, expo]
---

- Every bottom sheet in the app runs on one primitive that sizes to its content, keyboard forms included. The kid sheet no longer opens onto a giant empty void, and Save always sees what was typed.
- Drag-to-dismiss was fixed: sheets exit by their real height instead of snapping back to open for a frame.
- The third-party sheet library has no remaining imports; the dependency itself leaves with the next native build.
