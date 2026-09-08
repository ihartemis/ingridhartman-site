---
title: "Thirteen fixes from the first outside feedback"
date: 2026-07-13
effort: 2
medium: app
project: ournanny
kind: release
build: 82
tools: [claude-code, expo, convex]
---

- An invited parent now sees the family the admin already set up for them, house and kids included, instead of an empty builder that led to a duplicate kid. Adding a kid with the same name as an existing one converges instead of duplicating.
- The one-time code screen is six boxes that verify on the last digit, with paste and autofill kept. Phone numbers must be a full ten digits, with the error shown under the field; a partial number could previously be saved. A style bug that struck a line through the "Add a kid" field and stretched the code box turned out to be one shared style, fixed once.
- Tap a time to type it, in the session wizard and the kid-hours sheet, instead of stepping through 15-minute increments.
- Names are derived everywhere: "Maya's family", "Maya's house", "Your house". The capacity widget reads "2 spots open" with per-hour fractions.
- Changing a session's location moves the hosting family with it; before, the address changed but the label did not.
- A host family's kid keeps the whole session window when times are edited, hosting "Not right now" is remembered, admins can edit any family's hosting, and a sweep fixed clipped and mis-sized sheets across the app.
