---
title: "Log sessions that already happened"
date: 2026-06-17
effort: 1
medium: app
project: ournanny
kind: release
build: 79
tools: [claude-code, expo, convex]
---

- Sessions can be added up to 30 days in the past. Before this the app only accepted future times, so a parent could not log the week's sessions after the fact, and billing had nothing to bill.
- The day-view date pickers open to past dates too, so a backfilled session can be found once it is logged.
