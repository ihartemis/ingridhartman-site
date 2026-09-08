---
title: "Pod-matching fake door and beta security fixes"
date: 2026-06-07
effort: 2
medium: app
project: ournanny
kind: release
build: 79
tools: [claude-code, expo, convex]
---

- The "match me to a pod" screens in onboarding now record what parents and nannies tell them. The screens existed before, but every answer was thrown away on the last tap; a fake door that records nothing teaches nothing.
- The matching questions were combined onto one screen and now include a trust question: whether a family would match with people they do not already know. Both parents and nannies can answer.
- A standalone "Find a pod" screen is reachable from the Pod tab, so a returning user without a pod is no longer at a dead end.
- Security fixes ahead of the beta: two ways to read or write another family's data through crafted requests were closed, and a signing secret that had been committed to the repo was removed.
- Housekeeping for the beta: the unfinished Billing and Feed tabs are hidden, a missing Edit Event button is back, and a dead sign-in route was fixed.
