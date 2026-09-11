---
title: "Hotfix: the sign-up form was missing its email field"
date: 2026-09-11
effort: 1
medium: app
project: ournanny
kind: release
pr: 35
build: 89
link: https://github.com/Artemis-Nova-Product/ournanny/pull/35
tools: [claude-code, expo, posthog]
---

- The "Tell us about you" step now shows the email field it was asking for. Since Monday night the step required an email but never rendered the box, so Continue stayed greyed out and every new sign-up stopped there. Two people who signed up Tuesday hit it.
- Anyone who was stuck gets the fix on their next open. Nothing else changed.
