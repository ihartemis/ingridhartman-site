---
title: "TestFlight build 80 after a crash on launch"
date: 2026-06-28
effort: 2
medium: app
project: ournanny
kind: release
build: 80
tools: [claude-code, expo, convex, eas]
---

- New TestFlight build (80). A change that made the Schedule the app's first screen crashed on launch when it went out as an over-the-air update; the update was rolled back and a clean build was cut from main instead.
- A nanny set up by an admin is recognized when she signs up with the same number and lands on a claim screen instead of cold onboarding.
- The build removes a session-recording library that had never been switched on.
- The Schedule-as-first-screen change stayed parked until it could be run on a device before shipping. It arrived in build 81.
