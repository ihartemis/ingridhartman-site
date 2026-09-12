---
title: "A pod can have more than one nanny"
date: 2026-09-12
effort: 3
medium: app
project: ournanny
kind: release
pr: 41
build: 90
link: https://github.com/Artemis-Nova-Product/ournanny/pull/41
tools: [claude-code, expo, convex]
---

- A pod can now have two or more nannies. Under the Pod tab's nanny section there's a "+ Add another nanny" row; each nanny gets her own profile, rates, and payday, and can be scheduled before she ever logs in.
- When a pod has more than one nanny, creating a session asks which nanny is working it (with live availability), and every session tile shows her photo ahead of the kids. Two nannies can run sessions at the same time; the same nanny still can't, and neither can a kid.
- Billing shows one card for the week across all nannies, with a row per nanny to pay each one separately. The activity list names the nanny on every line instead of "Childcare". The nanny's own billing view lists her sessions one by one, matching what parents see.
- Nannies see each other's names, photos and bios, and can see that a colleague's session exists, but never her rates, payday, Venmo, or the details of her sessions.
- Today merges back-to-back sessions at the same house into one day view, with the nanny rail changing color at the handoff and each nanny's photo on her stretch. Kids' photos now show on Today.
- Three fixes for every pod, including single-nanny ones: the payday reminder on Today was never appearing (a lowercase/uppercase weekday mismatch since July); the payday card no longer offers Venmo while a session is still running; and the weekly estimate uses each session's actual nanny rate.
