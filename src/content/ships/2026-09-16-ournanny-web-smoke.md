---
title: "A robot walks every screen before a change merges (internal)"
date: 2026-09-16
effort: 2
medium: app
project: ournanny
kind: release
pr: 55
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/55
tools: [claude-code, playwright, convex]
---

- Internal tooling only — nothing changes for anyone using the app.
- A browser test now signs in as a test account and opens every screen — Today, Schedule, Billing, Pod, Account, What's new, a session, and its chat — and fails if any screen throws. About 17 seconds a run.
- Three of the QA data seeds were fixed along the way, including one that dropped testers into an empty pod after seeding a schedule.
