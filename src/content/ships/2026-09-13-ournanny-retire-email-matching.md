---
title: "Invites match on your phone number, not a made-up email"
date: 2026-09-13
effort: 2
medium: app
project: ournanny
kind: release
pr: 49
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/49
tools: [claude-code, convex]
---

- Every invite, claim and removal now matches on the phone number the invite was sent to, or the invite itself, never on an email. Since sign-up moved to phone, accounts carried a synthetic email behind the scenes, and matching on it was how an invited nanny could finish setup outside her pod.
- Inviting someone who already has an OurNanny account (a nanny joining a second share, a parent from another family) adds the invite to their existing account instead of touching it.
- Removing a co-parent or a nanny removes only their own pending invite, not everyone's.
- The synthetic email never shows anywhere now: the Pod tab, the account row, feedback, and the waitlist all show your real contact email or ask for one.
- Only the contact-email step can change your email; an older version of the app can't overwrite it.
