---
title: "Fixed the random logouts"
date: 2026-08-26
effort: 1
medium: app
project: ournanny
kind: release
build: 84
tools: [claude-code, expo, convex, clerk]
---

- Testers were being logged out about once a week. Sessions had been set to expire after seven days, the default nobody had changed. The lifetime is now much longer.
- A network blip could also bounce a signed-in user to the login screen, where signing in again only said "already logged in" until the app was force-quit. The app now shows login only when the user is truly signed out, shows a brief reconnect spinner otherwise, and "already logged in" walks straight in.
- Both fixes reached every phone as an over-the-air update. Nobody needed to reinstall, and no tester data changed.
