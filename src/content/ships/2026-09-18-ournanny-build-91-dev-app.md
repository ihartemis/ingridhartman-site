---
title: "Build 91: the dev app is on TestFlight"
date: 2026-09-18
effort: 2
medium: app
project: ournanny
kind: release
pr: 65
build: 91
link: https://github.com/Artemis-Nova-Product/ournanny/pull/65
tools: [claude-code, expo, eas, sentry]
---

- New TestFlight build (91). Nothing new on screen; it carries every fix since build 90 and the plumbing below. Testers on build 90 keep receiving updates until they take the TestFlight update.
- The photo and camera permission prompts now say what the app actually does with them: share photos with your pod and set profile pictures. The old wording only mentioned profile photos, and App Store review reads these.
- Internal: "OurNanny Dev" is now a real TestFlight app on the development backend, installed side by side with the beta. Every merge already reaches it automatically, and a branch can be pushed to it before merging, so sign-up and any new screen can be walked through on a real phone with throwaway test numbers before anyone outside sees it.
- Internal: editing the build configuration no longer breaks updates. Two config files that had twice cut every installed phone off from new updates are now excluded from the check that decides which update a build accepts.
