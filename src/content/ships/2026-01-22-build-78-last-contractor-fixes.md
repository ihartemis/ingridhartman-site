---
title: "Build 78 with onboarding fixes and toasts"
date: 2026-01-22
effort: 2
medium: app
project: ournanny
kind: release
build: 78
tools: [expo, eas, convex, clerk, cursor]
---

- Onboarding confirms what just happened with a toast message when a pod is created or joined and when children are added, instead of moving on silently.
- A nanny who creates a pod during onboarding is now sent to the age-confirmation step, not the parents' add-children step she was landing on.
- Creating a pod no longer fails outright when the accounts service errors mid-request; the app recovers and finishes the setup.
- Build 78 was the last native build for four months. The fixes after it arrived over the air on the same build.
