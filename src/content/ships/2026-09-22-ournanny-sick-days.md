---
title: "Sick days: mark a nanny or a family out sick, let any parent step in as caretaker, and pay sick days from a contract"
date: 2026-09-22
effort: 3
medium: app
project: ournanny
kind: release
pr: 79
covers: [79]
build: 91
link: https://github.com/Artemis-Nova-Product/ournanny/pull/79
tools: [claude-code, expo, convex, vitest, maestro]
---

- Time away now asks one question first: Away or Sick. Sick is built for the 6 am text: today is preselected, symptoms are chips (stomach bug, fever, cough, runny nose, flu, COVID) that the whole pod sees, and any parent can mark the nanny out, not just an admin. A family can be marked out sick the same way, so the other families hear "fever", not "trip".
- When the nanny is out, her sessions don't vanish; they stand with no caretaker and Today says so: "Maria is out sick · 9:00 – 5:00 needs a nanny · Assign". The session's Nanny card is the place to act, and the assign sheet now lists parents as well as nannies. A parent who takes the session is simply the caretaker for it; nothing is billed for that session.
- Assigning a parent works on any session, not only sick days, for pods where parents cover shifts as a matter of course.
- A nanny's profile has a Contract section. Paid sick days, days per year, a flat amount per day (suggested from her recent days), and whether one family pays or the pod splits it. Setting up a new nanny ends with an optional "Do you have a contract with her?" step. The count of days used this year is worked out from the record, never kept by hand, so changing the terms later reprices the days already taken.
- A paid sick day shows up in Billing like any other row: her name and photo, "Sick day" underneath, the flat amount; it also appears in the week sheet and in her own earnings. A sick day only counts when she actually had a session that day. Logging a sick day after the fact takes her off that day's session and reverses its charge, so a day is never both worked and sick.
- Pushes: the host of each affected session gets "needs a nanny"; everyone else gets the symptoms; at 5 pm she's asked "Still out tomorrow?" with two buttons, and if nobody hears anything by morning the host gets a nudge. Finished sick days and trips stay listed under "Earlier" in Time away, still editable.
