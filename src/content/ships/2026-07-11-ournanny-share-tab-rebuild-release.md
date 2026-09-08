---
title: "The Pod tab rebuilt as the Share tab"
date: 2026-07-11
effort: 2
medium: app
project: ournanny
kind: release
build: 81
tools: [claude-code, expo, convex]
---

- The Pod tab became the Share tab: one flat hub with the nanny's card, a card per family led by its kids, and app settings at the bottom. Cards are the tap targets; the old "Manage ___ >" rows are gone.
- One family screen behind every card, aware of who is looking: admins can edit anything, parents edit their own family, and everyone else gets a clean read-only view. The one thing nobody edits for someone else is an active person's sign-in phone number.
- Every invited person shows a compact chip with their live invite code, tap to copy, and a "Text invite" button. A lost invite text is no longer fatal.
- Rates live in one sheet that asks how many kids at once first, then shows a rate field per count. Rates are owned by the admin and the nanny together.
- Thirteen screens were deleted and three created; the app is about 1,500 lines smaller.
