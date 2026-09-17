---
title: "ournanny.app: the TestFlight ask moves to after the tap"
date: 2026-09-17
effort: 1
medium: web
project: ournanny
kind: release
link: https://ournanny.app
tools: [claude-code, posthog, vercel]
---

- Every button on ournanny.app now says "Get the app" instead of "Get the iPhone beta." The word beta is gone from the page.
- Tapping a button no longer sends you straight to TestFlight. A small sheet explains first: you'll need to install TestFlight to get access to the OurNanny app. One Continue button takes you there, and the waitlist link is right below for anyone not on an iPhone.
- The closing section's paragraph announcing the beta is removed.
- If a phone has scripts off, the buttons still work as plain links to TestFlight.
