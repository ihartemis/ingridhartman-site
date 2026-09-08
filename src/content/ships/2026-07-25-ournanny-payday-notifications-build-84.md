---
title: "Payday notifications, a payment moment, build 84"
date: 2026-07-25
effort: 2
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, expo, convex, eas]
---

- The app's first push notifications. Parents get a payday ping about 15 minutes after the day's last session ends (5 pm on days with no session, never outside 9 to 9), the nanny gets "all N families reminded", and overdue families get a daily reminder until they pay.
- When the last family pays, the nanny gets "everyone's paid up", with the on-time streak included only when it fires on payday itself, so a lock screen is never wrong.
- Families that are paid up hear nothing and quiet weeks send nothing. A tap opens Billing, so the bill can be reviewed before Venmo.
- Recording a payment ends in a receipt: what the week cost, what the share saved, and the streak, with confetti that is actually visible. The confetti had been firing inside a sheet, unseen, for two weeks.
- Adjustments can be deleted, matching payments.
- New TestFlight build (84), required for push. Devices on build 82 stop receiving updates until they install it.
