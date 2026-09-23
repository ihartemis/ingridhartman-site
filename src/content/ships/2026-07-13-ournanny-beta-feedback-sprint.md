---
title: "Sign-up and scheduling fixes"
date: 2026-07-13
effort: 2
medium: app
project: ournanny
kind: release
build: 82
tools: [claude-code, expo, convex]
---

- **Invited family setup** — An invited parent sees the family the admin already set up for them, house and kids included. Adding a kid who is already there converges onto the same kid.
- **Code and phone entry** — The one-time code screen is six boxes that verify on the last digit, with paste and autofill kept. Phone numbers take a full ten digits, with the error under the field.
- **Type a time** — Times can be typed directly, in the session wizard and the kid-hours sheet, instead of stepping through 15-minute increments.
- **Derived names** — Names come from the lead parent everywhere: "Maya's family", "Maya's house", "Your house". The capacity widget reads "2 spots open" with per-hour fractions.
- **Hosting** — Changing a session's location moves the hosting family with it, a host's kid keeps the whole session window when times are edited, and admins can edit any family's hosting.
