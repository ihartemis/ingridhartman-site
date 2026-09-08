---
title: "Set up the nanny before she logs in"
date: 2026-06-18
effort: 2
medium: app
project: ournanny
kind: release
build: 79
tools: [claude-code, expo, convex, clerk]
---

- An admin can set up the nanny by phone number: name, rates, how many kids at once, and an optional bio. She can be assigned to sessions right away, and her first sign-in with that number claims the profile.
- Rates are entered per kid with a live total, and the phone field strips a pasted +1.
- An assigned nanny is a working nanny. The RSVP and "awaiting confirmation" flow was removed entirely; it gated nothing real and added a step to every session.
- Admins can edit or remove a pending nanny from the Pod tab, and a nanny can be assigned or swapped with a tap on the session's nanny tile.
