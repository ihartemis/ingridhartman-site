---
title: "Test runner fixes"
date: 2026-09-22
effort: 1
medium: app
project: ournanny
kind: release
build: 91
tools: [claude-code, maestro]
---

- Internal: the scripted iPhone test flows now report a crashed flow as a failure, run every flow even after one fails, and all pass again. Nothing changed for people using the app.
