---
title: "Billing engine and TestFlight build 79"
date: 2026-06-13
effort: 2
medium: app
project: ournanny
kind: release
build: 79
tools: [claude-code, expo, convex, eas]
---

- The Billing tab is real. The app computes what each family owes from the sessions that actually happened: time is sliced whenever a kid arrives or leaves, the nanny's rate for that many kids is split evenly per kid, and the family shares always add up to exactly what the nanny earns.
- Parents see a balance card (paid up, balance due, overdue, or credit) and can expand any charge to see the math behind it, slice by slice.
- Payments are recorded in the app with a hand-off to Venmo. A wrong payment can be deleted; the ledger corrects itself with a compensating entry instead of rewriting history, so past weeks never change under anyone.
- The nanny has her own Billing home: what she will receive this week, what is outstanding, and which families are paid up or overdue.
- Pod admins can switch between families to view any balance and add a charge or credit adjustment.
- New TestFlight build (79), the first built under Artemis Nova's own accounts and bundle id. From here on, billing changes ship over the air, so testers get updates without reinstalling. Same-day fixes from the first phone QA: content no longer hides behind the tab bar, the ledger sorts newest first, the Save buttons on the payment and adjustment screens are reachable, and every tab has pull-to-refresh.
