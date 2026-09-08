---
title: "Pod overview, settings, and over-the-air updates"
date: 2026-01-15
effort: 2
medium: app
project: ournanny
kind: release
tools: [expo, eas, convex, clerk, cursor]
---

- The Pod tab became a real overview: a card for each family with its children, and a card for the nanny, replacing the earlier placeholder.
- A Settings screen arrived with a light, dark, or system theme choice.
- Adding an event now accounts for a pod that has no nanny assigned yet, instead of assuming one exists.
- JavaScript updates now reach TestFlight installs without a new build. A push to the main branch deploys the backend and publishes an update to the preview channel; the app picks it up on next launch. From this point most fixes arrived this way, and several native builds a day stopped being necessary.
