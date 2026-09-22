---
title: "Nanny rates are entered as the hourly total, and each family's share is worked out for you"
date: 2026-09-22
effort: 2
medium: app
project: ournanny
kind: release
pr: 80
covers: [80]
build: 91
link: https://github.com/Artemis-Nova-Product/ournanny/pull/80
tools: [claude-code, expo, convex, vitest, maestro]
---

- Rates are now typed the way people actually quote them: the nanny's total for an hour at each number of kids. Each family's share appears beside it as you type, so nobody has to do the division — a $35/hr rate for two kids shows $17.50 per kid.
- Fixed: opening a nanny's Rates sheet and pressing Save without changing anything could alter her pay. The sheet asked for a per-child figure while the app stored the hourly total, so it divided on the way in and multiplied on the way out, rounding in between. A $35/hr rate for two kids saved back as $36. Rates in the beta were checked and none had drifted.
- Rates that don't divide evenly are marked as approximate — $35 an hour across three kids reads "≈ $11.67 /kid" — because the real split is 11.67, 11.67 and 11.66, and the app charges the exact cents.
- A rate you don't touch is now left exactly as it was, so editing one row can never quietly change another.
- The rate shown on a nanny's profile, in the Rates sheet, on a charge and in a session's cost breakdown are now produced by one piece of code, so the same rate reads the same way everywhere.
