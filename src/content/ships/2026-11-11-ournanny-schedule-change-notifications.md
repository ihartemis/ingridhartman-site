---
title: "Schedule change notifications"
date: 2026-11-11
effort: 3
medium: app
project: ournanny
kind: release
tools: [claude-code, expo, convex, vitest, maestro]
---

- **Schedule changes** — When someone else adds or cancels a session, changes its times, or adds or removes a kid, everyone it affects gets a push: the host, the nanny, and that kid's parents. Whoever made the change doesn't.
- **One push per burst** — A run of edits arrives as one notification, like "Marcus changed 3 sessions." Changes to today or tomorrow arrive within a minute. Later ones wait 15 minutes for the edits to settle and hold overnight until morning.
- **Time away** — A family's trip or the nanny's days off sends one push to the people whose sessions it touches.
- **See what changed** — Tap the notification and Schedule opens with each changed session outlined.
- **Your call** — Turn them off in Settings → Notifications → Schedule changes.
