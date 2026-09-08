---
title: "A new account no longer depends on a webhook"
date: 2026-09-07
effort: 1
medium: app
project: ournanny
kind: release
pr: 24
build: 89
link: https://github.com/Artemis-Nova-Product/ournanny/pull/24
tools: [claude-code, expo, convex, clerk, posthog]
---

- The first stranger to sign up from the Reddit ad hit a blank screen. The account was created, but the message that creates the app's own record of it never arrived because the webhook address had been set with the wrong host. The address was corrected, the missed event replayed, and the account recovered.
- The app now creates its own record if that message misses, so a first sign-in never depends on a webhook arriving. If it still cannot, the user sees an error screen with a retry instead of a blank page.
- Sign-up, onboarding completed, and pod joined now register as analytics events, so a break like this shows in the funnel within the hour instead of days later.
