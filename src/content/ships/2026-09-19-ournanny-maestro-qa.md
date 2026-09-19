---
title: "Real-user test flows on the simulator replace the old test tooling"
date: 2026-09-19
effort: 2
medium: app
project: ournanny
kind: release
pr: 73
covers: [73]
build: 91
link: https://github.com/Artemis-Nova-Product/ournanny/pull/73
tools: [claude-code, maestro, expo, convex, clerk]
---

- Internal: six scripted flows now drive the real iOS app on the simulator the way a person would, before anything ships: a stranger signing up, an invited nanny claiming her spot, a parent's day across every tab, adding a session, recording a payment, and a nanny's day. All six run in about eight minutes from one command.
- Internal: four persona accounts on the development backend (an admin parent, a second family, a nanny, an invited nanny) are rebuilt by one command, so every flow starts from the same known pod, with sessions on the calendar and money owed on Billing.
- Internal: the dormant native test suite from January and the browser-only smoke test are removed. The browser could not see the class of bug that reached the beta twice this week (text sliced on iOS), so it no longer counts as proof for anything on the phone.
- Nothing changed for people using the app.
