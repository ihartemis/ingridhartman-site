---
title: "Nanny profile photos, bigger faces on Today, and a billing fix"
date: 2026-09-18
effort: 2
medium: app
project: ournanny
kind: release
pr: 67
covers: [67]
build: 91
link: https://github.com/Artemis-Nova-Product/ournanny/pull/67
tools: [claude-code, expo, convex, playwright]
---

- Nannies can now add or change their profile photo after sign-up, from their own profile's About sheet. Pod admins can set a nanny's photo from the same sheet, the way they already can for kids and family members. Until now the photo could only be set during onboarding, and in single-nanny pods a nanny's own photo wasn't even shown on her profile.
- The faces on Today are bigger. Kid avatars in the day capsules go from 34 to 44 points, the nanny's photo on the timeline rail matches at 44, and the small face in the "who's here" chip goes from 16 to 24. The layout itself is unchanged.
- Billing: the estimated amount at the top of the screen no longer has its top sliced off while a session is still running. The "≈" prefix in front of the number was forcing the whole line into a small text box on iOS.
- On a day with no sessions, Today's card now offers "Add a session" directly. The "+" button in the header only appears on days that already have a session.
- Session chat is limited to one pilot pod for now while its future is decided. Other pods don't see the chat dock, can't open a thread, and get no chat notifications.
