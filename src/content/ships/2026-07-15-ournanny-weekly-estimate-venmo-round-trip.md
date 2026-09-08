---
title: "Weekly estimate, payday-aware weeks, Venmo round trip"
date: 2026-07-15
effort: 2
medium: app
project: ournanny
kind: release
build: 82
tools: [claude-code, expo, convex]
---

- Billing shows where the week is heading: "Est. total by Friday ≈ $X" on both the parent and nanny homes, with a sheet that prices each remaining session.
- The billing week ends on the nanny's actual payday, not a hardcoded Friday. Every due date and label follows it.
- Pay in Venmo opens a prefilled payment with a personal memo ("Taking care of Milo · Jul 9–15"). On return the app asks whether it went through, and a banner catches a hand-off that never got confirmed.
- The nanny can record a payment herself, choosing which family it came from.
- Sessions that have ended are billed when Billing is opened, so a parent is never stuck unable to pay because a background job has not run yet.
- Fixed a crash opening session details the morning after the update.
