---
title: "Event details redesign, cost card, timezone fix"
date: 2026-06-19
effort: 2
medium: app
project: ournanny
kind: release
pr: 1
build: 79
link: https://github.com/Artemis-Nova-Product/ournanny/pull/1
tools: [claude-code, expo, convex]
---

- Every part of a session's details edits in place: tap the time, the location, the nanny, or a kid's hours and a bottom sheet opens for just that thing. The all-in-one Edit Event wizard is gone.
- Time editing uses inline 15-minute steppers instead of a nested picker. Moving a session slides the kids' hours along with it; shortening one clamps them to the new window.
- A cost card on each session shows what each family pays, what they save compared with a private nanny, and what the nanny earns extra for taking the share. The copy knows its tense: "You'll save" before, "You saved" after.
- Fixed a bug that marked families overdue on Friday morning. The Friday 5 pm cutoff was computed in UTC; it now uses the device's time zone. Cancelled sessions also disappear from the schedule, and the cancel confirmation no longer shows "Invalid Date".
- An admin can add a whole family to the pod ahead of time (parents, kids, hosting) so it is ready when they sign up, and can schedule any family's kids.
- Behind the scenes, the main branch caught up with everything the beta had been running, and merges to main now deploy to testers' phones automatically.
