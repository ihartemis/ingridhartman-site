---
title: "Analytics can tell a new user from a reinstall"
date: 2026-09-08
effort: 1
medium: app
project: ournanny
kind: release
pr: 33
build: 89
link: https://github.com/Artemis-Nova-Product/ournanny/pull/33
tools: [claude-code, posthog]
---

- Each account now carries its sign-up date in analytics, set once from when the account was created. Installs and app opens fire for existing users too, so until now a reinstall by a pod member looked the same as a stranger arriving from an ad.
- A new "OurNanny beta funnel" dashboard shows installs, new accounts, and completed onboardings per day, plus a table of every new account with time and city. Nothing user-facing changed in the app.
