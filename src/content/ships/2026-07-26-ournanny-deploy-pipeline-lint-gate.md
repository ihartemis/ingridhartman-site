---
title: "Production deploy pipeline and lint gate"
date: 2026-07-26
effort: 1
medium: app
project: ournanny
kind: release
pr: 8
build: 84
link: https://github.com/Artemis-Nova-Product/ournanny/pull/8
tools: [claude-code, convex, expo]
---

- The backend deploy workflow uses the documented production command, names its target from the CLI's own output instead of stale hardcoded addresses, and runs against the real production deployment on every merge.
- The backend client library moved up several versions and reaches devices with the next update.
- Linting had been broken across the whole repo and absent from CI. It is fixed at zero errors and now gates every over-the-air publish.
