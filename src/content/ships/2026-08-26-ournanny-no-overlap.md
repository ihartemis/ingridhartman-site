---
title: "Sessions cannot overlap anymore"
date: 2026-08-26
effort: 1
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, expo, convex]
---

- The schedule now enforces what was always true in real life: one pod, one nanny, one timeline. A session cannot be created or moved on top of another, even at a different house. Back-to-back is fine.
- Repeating series and the nightly schedule generation skip a colliding date instead of failing.
- The "+ Add" buttons show only for people who can actually create sessions. The check had been dropped because the screens did not know who created the pod.
- Behind the scenes, the backend deploy and the app update no longer race each other; the update now waits for the backend. That ordering is what lets later features ship in one step.
