---
title: Launched my personal website
date: 2026-02-20
effort: 3
medium: web
project: ingridhartman
tools:
  - claude-code
  - astro
thumbnail:
before:
after:
link: https://ingridhartman.com
---
A weird thought in the middle of the night...why aren't websites more fun? An image popped in my head - an old man by the campfire in the middle of the night. "Welcome weary traveler...I hear you're looking for Ingrid." Months later with Claude's help, my weird personal website became a reality in a 2 hr ShipSLC build session!

## Problem I'm solving

I always wanted a place to start to share my thoughts, ideas, projects. It also felt awkward as a PM that I basically zero web presence. For a person who spends their entire working life in the digital realm, it feels akin to being homeless or not having a front door to greet people at. At the same time, I didn't want a typical portfolio page, I wanted something a bit more unique that captured my personality. Having played a lot of classic RPG games, an RPG style pixel art scene seemed like a great playful fit.

## Where I started

With Claude's help and some research, I decided to build on top of Astro, since I wanted a basic content/blog website. I decided to descope a fully AI-driven dialog to start, because I wanted to complete the build in 2 hrs and I actually thought the basic NPC-style dialog tree would be charming. I wrote a spec for the website, refined it with Claude, and thought I would be able to one shot it. Not quite - ha!

## Where I ended

After a LOT of visual iteration, a beautiful pixel art homepage with a working dialog tree routing to the About section or the Blog. It was a really exhilarating fast build. The compromise I made was that my first blog page plus the About page were entirely AI generated content not written by me. In retrospect this was a bit weird if the site was meant to be a form of self expression, but overall I was really pleased with the end product.

## What I learned

The before and after screenshots for this build are hilarious. The key difference between the two was reference images! I tried several frustrating rounds of trying to describe a better aesthetic to Claude with no progress. Finally went to Dribbble, searched for some beautiful pixel art, uploaded it, and the quality of the design went up 1000%. It was a massive unlock I'll never forget. It still took about 10+ reprompts though to really dial in the imagery.

Also originally I didn't have Playwright installed and Claude had no way to visually QA the website, which was a huge problem for something so design heavy.

Me not knowing the right words to use in my design tweaks was a problem. I wanted the homepage screen to be full screen and I didn't realize the right word to use to describe this was "viewport". Took a while to communicate what I wanted and have the full screen effect I was going for.

