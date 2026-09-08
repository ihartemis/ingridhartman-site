---
title: "Security hardening before wider invites"
date: 2026-07-21
effort: 1
medium: app
project: ournanny
kind: release
build: 82
tools: [claude-code, convex]
---

- Gates found in a full security audit were closed before inviting people beyond the trusted pod: photo uploads and file links require a signed-in member, a query that listed every user is no longer public, and invite-code lookups no longer reveal the invitee's email.
- Invite codes come from a cryptographic random source, and guessing them is rate-limited to ten attempts per user per hour.
- Test and reset tools are compiled out of production entirely, and the developer menu can no longer be opened on the public web build or through a crafted link.
