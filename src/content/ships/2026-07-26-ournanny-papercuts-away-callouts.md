---
title: "Papercuts sweep and clearer away callouts"
date: 2026-07-26
effort: 1
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, expo, convex]
---

- Fixed a kid's name saving as its first letter. The Save button in the kid sheet froze on the first typed character; the same bug had been fixed in the nanny sheet months earlier and never swept to its sibling.
- Time-away callouts at the top of the week say what they mean: "out starting Fri", "back Mon", "out Mon – Fri · back Sat", one line per traveler, merged when trips run back to back. The away form's end date is labelled "Last day".
- The Schedule lands with today as the first row and scrolls up naturally into earlier days. "Show earlier weeks" is gone.
- The keyboard no longer covers the notes field on the away and house forms, the lead parent gets a birthday field, and the admin billing header is a compact chip in the title row.
