---
title: "Address search and privacy"
date: 2026-09-16
effort: 3
medium: app
project: ournanny
kind: release
build: 90
tools: [claude-code, clerk, convex, expo, playwright, sentry]
---

- **Address search on iPhone** — Typing an address on your phone brings up suggestions, and tapping one fills in the full address with a map preview. Editing an address opens a fresh search.
- **Closing a photo** — A photo opened in a session chat has a clear close button and a share button on dark pills, below the status bar. Tapping the photo itself closes it too.
- **Privacy and security** — Your pod's information is available only to its members, invitation lookups return only what the join screen needs, and error reports have email addresses scrubbed out of them.
- Internal: a browser test signs in and opens every screen in the app, and fails if any of them throws.
