---
title: "Schedule opens on today; add-event time steppers"
date: 2026-06-19
effort: 1
medium: app
project: ournanny
kind: release
pr: 3
build: 79
link: https://github.com/Artemis-Nova-Product/ournanny/pull/3
tools: [claude-code, expo, convex]
---

- The Schedule opens on the current week every time. Earlier weeks sit behind a "Show earlier weeks" control, and a "Today" chip brings the list back after scrolling.
- Empty days render as dashed placeholder cards with a "+ Add" button on today and upcoming days, so adding care no longer means hunting for the right entry point.
- "You" became "Your house" on the viewer's own sessions, and kid avatars are bigger so faces are legible.
- The add-session flow lost its scrolling wheel picker. Start and end times are inline 15-minute steppers defaulting to 9 to 5, which also removed a bug where the time fields stopped responding after the first pick.
- The close button no longer overlaps the step indicator on notched phones, and the login screen's Terms and Privacy links are tappable.
