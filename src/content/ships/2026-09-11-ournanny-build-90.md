---
title: "Build 90: a dev app and working QA lanes"
date: 2026-09-11
effort: 2
medium: app
project: ournanny
kind: release
pr: 37
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/37
tools: [claude-code, expo, eas]
---

- New TestFlight build (90), in the external group the same day it was submitted. Nothing changes on screen for testers; it carries the plumbing below and every fix since build 89.
- A second app, "OurNanny Dev", can now be built for internal testers. It runs against the development backend, so new features can be tried on a real phone without touching the beta.
- The web QA lanes work again. A dependency update in build 89 had broken them, which meant a week of changes were verified by types and tests only, and one required field shipped without its input. Every sign-up change is now walked through as a fresh user before it merges.
