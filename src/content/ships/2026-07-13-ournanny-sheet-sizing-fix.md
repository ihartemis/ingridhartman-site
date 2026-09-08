---
title: "Fixed clipped and oversized bottom sheets"
date: 2026-07-13
effort: 1
medium: app
project: ournanny
kind: release
build: 82
tools: [claude-code, expo]
---

- Content sheets, like the cost breakdown and assign-nanny sheets, size to their content on every phone instead of clipping tall content on one device and leaving dead space on another.
- The clipped dollar amount at the top of the cost sheet was a text line-height bug, not the sheet. Any large text without an explicit line height now gets one automatically, app-wide.
