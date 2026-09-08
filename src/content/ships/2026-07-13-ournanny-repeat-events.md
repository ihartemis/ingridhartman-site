---
title: "Weekly repeating sessions"
date: 2026-07-13
effort: 2
medium: app
project: ournanny
kind: release
build: 82
tools: [claude-code, expo, convex]
---

- A session can repeat weekly. Pick the days and optionally an end date; each weekday becomes its own series, so Wednesday can have a different kid list from Monday without being an exception.
- The add-session wizard is three steps instead of five or six: date and time with a week strip and repeat control, then where, then kids. The review step is gone; landing on the schedule with the new sessions pulsing is the review.
- Editing a repeating session asks "this session only" or "this and future sessions". Past sessions feed billing and cannot be changed by a series edit.
- A one-time session can be converted to weekly from its details, and the week strip keeps today marked, with a "Today" chip when paged away.
- Time away is enforced: an away family's house cannot host and an away kid cannot be added.
