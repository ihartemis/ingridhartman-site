---
title: "Shortening a session no longer dead-ends on another kid"
date: 2026-08-25
effort: 2
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, expo, convex]
---

- A session can now be shortened or moved even when another family's kid is booked for time that no longer fits. The app names who would be affected and asks before removing their time, instead of refusing with an error that named nobody.
- The other kid's parent gets a push notification when an edit trims or removes their kid's time, linked to the session so they can rebook. It is the first push in the app that is not about payday.
- The same confirmation appears whichever way the session is shortened: from the session time tile, from a kid's hours, or from the Today tab. It took three updates in one day to cover all three.
- Also fixed: over-the-air updates had silently stopped publishing since late July because a build tool outgrew the pipeline's Node version. Updates reach phones again.
