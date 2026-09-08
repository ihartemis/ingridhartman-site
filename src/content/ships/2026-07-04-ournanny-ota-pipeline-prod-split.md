---
title: "Working updates and a separate production backend"
date: 2026-07-04
effort: 2
medium: app
project: ournanny
kind: release
build: 81
tools: [claude-code, expo, convex, clerk, eas]
---

- Over-the-air updates published by the automated pipeline had been broken since mid-June. Each one crashed before drawing a frame and the app quietly fell back to its built-in code, so it looked as if updates never arrived. One missing flag in the pipeline was the cause; updates now verifiably reach build 81.
- The beta runs on its own production backend, separate from the one used for development and testing. Test data and QA tools can no longer touch real families' data.
- The beta database was reset and the founder's household re-onboarded through the real invite flows, as a dress rehearsal for inviting other families.
- Fixed a partner invite that dropped the invitee into the cold "start from scratch" onboarding instead of the claim screen for the family they were invited to.
