---
title: "Address search"
date: 2026-09-15
effort: 3
medium: app
project: ournanny
kind: release
build: 90
tools: [claude-code, convex, posthog, sentry]
---

- **Address suggestions** — Typing an address while setting up your place brings up suggestions as you go.
- **Map preview** — A chosen address shows a map preview of it underneath.
- **Keys stay on the server** — Address lookups go through OurNanny's own server, which checks that you're signed in and passes only the address text on to the maps provider. Nothing sensitive ships inside the app.
- **Lookup limits** — Each account has a per-hour allowance on those lookups, so a stolen sign-in can't run up a bill.
