---
title: "First TestFlight build of the app"
date: 2026-01-14
effort: 2
medium: app
project: ournanny
kind: release
tools: [expo, eas, convex, clerk, cursor]
---

- The iOS app reached TestFlight for the first time, four weeks after the repo's first commit. Sign-up used an email address and password with an emailed verification step, and invite links opened straight into the app.
- Onboarding split by role. A parent could start a new pod or join one with an invite code, add children, describe the home used for hosting and how many kids it fits, and invite a partner and a nanny. A nanny answered eligibility, photo, bio, age-range, care-preference, rate, and pay-frequency questions. Parents without a pod could ask to be matched from a waitlist.
- The schedule was the working core: create an event at a host home, set which children attend and for which hours, see the capacity effect of a change before confirming it, cancel an event, and invite a nanny to a specific event. A Today tab listed the day's events.
- Hosting locations got their own flow from the profile screen: add a home with address autocomplete, then mark it complete. The profile only asks for an address when no home is on file yet.
- Five tabs shipped, but two were placeholders: Billing said "Coming soon" and Feed was empty. Scheduling was real; the cost-splitting the landing page promised did not exist yet.
