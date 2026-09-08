---
title: "ournanny.app points to the TestFlight beta"
date: 2026-09-06
effort: 2
medium: web
project: ournanny
kind: release
link: https://ournanny.app
tools: [claude-code, vite, vercel, posthog]
---

- Every call to action on ournanny.app now opens the public TestFlight link, so anyone with an iPhone can install the beta without an invite. The waitlist form is demoted to a "Not on iPhone?" line.
- A de-clutter pass removed the pulsing status tag, two rows of credibility icons, six feature chips, and three "Coming soon" pills that repeated what the headlines already said.
- The privacy policy now discloses crash reports, usage analytics, and masked session recordings, and names Sentry and PostHog as the providers.
- The site reports page views, campaign parameters, and taps on the beta and waitlist buttons to the same analytics project as the app, so a visit can be followed from an ad to an install.
