---
title: "Guides shown only to pods that have them"
date: 2026-09-07
effort: 1
medium: app
project: ournanny
kind: release
pr: 28
build: 89
link: https://github.com/Artemis-Nova-Product/ournanny/pull/28
tools: [claude-code, expo, convex]
---

- The Guides row on the Pod tab and the "Coming up" card on Today now appear only in pods that have guides. The only guides so far belong to the founder's own pod, so a new pod no longer opens an empty section.
- The gate is enforced on the server for both guide queries, not only hidden in the app.
- A pod without guides sees the Pod tab exactly as it was before Guides shipped.
