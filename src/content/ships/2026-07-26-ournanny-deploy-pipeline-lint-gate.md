---
title: "Deploy pipeline and lint gate"
date: 2026-07-26
effort: 1
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, convex, expo]
---

- Internal: the backend deploy now runs against production on every merge, and linting is clean and gates every app update. Nothing changed for people using the app.
