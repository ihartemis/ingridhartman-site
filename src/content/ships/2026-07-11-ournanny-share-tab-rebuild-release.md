---
title: "Share tab rebuilt"
date: 2026-07-11
effort: 2
medium: app
project: ournanny
kind: release
build: 81
tools: [claude-code, expo, convex]
---

- **One hub** — The Share tab is a single flat hub: the nanny's card, a card per family led by its kids, and app settings at the bottom. The cards themselves are the tap targets.
- **One family screen** — Every card opens the same family screen, aware of who is looking. Admins can edit anything, parents edit their own family, and everyone else gets a clean read-only view. Nobody edits an active person's sign-in phone number for them.
- **Invite chips** — Each invited person shows a compact chip with their live invite code, tap to copy, and a "Text invite" button, so an invite is easy to resend.
- **Rates in one sheet** — Rates ask how many kids at once first, then show a rate field per count. The admin and the nanny own them together.
