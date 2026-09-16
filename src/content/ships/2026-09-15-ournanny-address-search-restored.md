---
title: "Address search works again, with no Google key in the app"
date: 2026-09-15
effort: 3
medium: app
project: ournanny
kind: release
pr: 50
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/50
tools: [claude-code, convex, posthog, sentry]
---

- Typing an address while setting up your place shows suggestions again. It had been returning nothing since September 6th, which left new families stuck on that step unless they spotted the "Enter address manually" link underneath.
- The map preview under a chosen address now appears. It never worked before — the Maps Static API had not been switched on for the project.
- Address lookups no longer carry a Google key inside the app. The app asks OurNanny's own server, which holds the key, checks you are signed in, and passes only the address text to Google. A key that ships inside an app can be extracted from it; this one cannot.
- Each account gets a per-hour allowance on those lookups, so a stolen sign-in can't run up a bill.
