---
layout: post
title: "Read the whole error message"
date: 2026-02-28
excerpt: "The single highest-leverage debugging habit I've found, and why it's so hard to actually do."
tags: [engineering, debugging, featured]
---

Most of the time I've been stuck on a bug, the answer was already on my screen. I just didn't read it.

## The pattern

A stack trace appears. My eyes jump to the top line, I recognize a few words, and I form a theory before I've read the rest. Then I spend twenty minutes chasing that theory while the *actual* cause — line 14 of the trace, a different file entirely — sits there, unread.

## A deliberately slow habit

Now when something breaks, I make myself do three things before touching the code:

1. **Read the message out loud.** It's embarrassing and it works. Saying it forces every word through.
2. **Find the first line that mentions my code,** not the framework's. The framework is usually fine; the boundary is where I went wrong.
3. **State the cause in one sentence** before proposing a fix. If I can't, I don't understand it yet.

## Why it's hard

Reading carefully feels slower than guessing, and guessing occasionally works, which trains the bad habit. But averaged over a week, the careful read wins every time. The error message is a letter the computer wrote you. Open it.
