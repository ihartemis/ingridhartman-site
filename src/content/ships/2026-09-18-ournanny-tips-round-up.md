---
title: "Tips: round up a payment, and every ledger row opens a sheet"
date: 2026-09-18
effort: 3
medium: app
project: ournanny
kind: release
pr: 69
covers: [69, 71]
build: 91
link: https://github.com/Artemis-Nova-Product/ournanny/pull/69
tools: [claude-code, expo, convex]
---

- You can now tip your nanny. When you pay, the sheet offers to round up to the nearest $10 or $20, and anything over what you owe is recorded as a tip by default. A tip never counts toward your balance, so it doesn't turn into a credit that eats next week. If you really meant to prepay, "make it a credit instead" keeps the old behavior.
- Paying is one flow now. The card's "Pay in Venmo" button and the separate "Record a payment" row are replaced by a single "Pay" sheet for one nanny at a time: set the amount, pick how you paid, and if it's Venmo the app opens Venmo with that exact total. On return, the confirmation is Yes or Not yet; there's no separate "different amount" step because the amount was decided before Venmo opened. Pods with more than one nanny get a "Pay Sol" and a "Pay Leila" row instead of a picker inside the sheet.
- Every row in the billing ledger now opens a detail sheet instead of expanding in place or jumping to a delete prompt. A payment's sheet shows what went toward the balance, the tip, the note, and who recorded it, with delete at the bottom. A session's sheet shows the hours and rate breakdown and links to the session if the hours are wrong.
- The paid-up receipt no longer repeats the amount. It just says which week is covered.
- Nannies see tips on their side: tapping a ✓ paid row on payday opens that payment with the tip line, and the "Everyone's paid up" push adds one line for the week's total tips.
