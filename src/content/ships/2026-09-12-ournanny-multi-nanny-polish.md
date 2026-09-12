---
title: "Multi-nanny polish from the first real day"
date: 2026-09-12
effort: 2
medium: app
project: ournanny
kind: release
pr: 42
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/42
tools: [claude-code, expo, convex]
---

- Photos now show everywhere they were missing: a nanny or kid who uploaded a photo after signing up by phone was showing as an initial on the Pod tab, schedule tiles and Today. One shared lookup now checks the uploaded photo first.
- Today merges a day's sessions at the same house into one timeline whatever the gap between them, so the hours between a morning and an afternoon nanny no longer repeat. The nanny's photo rides the rail even when the pod has one nanny, and a lone kid gets a wider capsule and a bigger avatar.
- Today's chips use names ("Leila & Griffin today") and, before anything has started, describe the whole day ("Leila then Soledad · Griffin"). Today also has a "+" to add a session on the day you're looking at.
- Creating a session preselects your own kids and your own house, and days that already have a session show a "+ Add" for a second one.
- Fixed the rate fields on "Set up your nanny" showing "$NaN" after deleting and retyping a number.
- The billing activity list shows the nanny's first name and the time range only; hours, kids and rate appear when you expand a row. The "+ Add another nanny" row lost its subtitle.
