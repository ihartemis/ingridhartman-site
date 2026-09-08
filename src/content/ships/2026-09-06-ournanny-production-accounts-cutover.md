---
title: "The beta moves onto production accounts"
date: 2026-09-06
effort: 3
medium: app
project: ournanny
kind: release
pr: 22
build: 84
link: https://github.com/Artemis-Nova-Product/ournanny/pull/22
tools: [claude-code, expo, convex, clerk, eas]
---

- The app moved from its development accounts system to the production one. Every tester was asked to log in again once, with the same phone number, and found their pod, schedule, and billing where they left them.
- The development system had a 100-user cap and a shared, rate-limited SMS pool. The first thing a stranger does is request a code, so this had to change before any outside promotion.
- All 24 existing accounts were migrated by phone number with none stranded. A trap found on the way: the account-sync webhook would have created 24 duplicate accounts during the import, so it was paused for the window and now refuses phone collisions permanently.
- Also found the same day: external testers had been frozen on July's build 82 for six weeks, because build 84 had never been released to the external TestFlight group, and the cutover locked them out entirely. Build 84 was submitted that afternoon, approved within minutes, and those testers received everything from July onward at once.
