---
layout: post
title: "A month with Rust"
date: 2026-04-05
excerpt: "What the borrow checker taught me that carried back into the languages I already knew."
tags: [engineering, rust, learning]
---

I spent April writing Rust full-time for a side project. I'm not here to convert anyone — but a month in, the way I write *other* languages has quietly changed.

## The borrow checker is a design reviewer

Early on, the borrow checker felt like an obstacle. By week three I realized it was mostly rejecting designs that were genuinely confused — two parts of the program both believing they owned the same thing. Fixing the compile error usually meant fixing a real ambiguity I'd have shipped in any other language.

## Things that stuck

- **Make ownership explicit.** Even in garbage-collected languages, asking "who owns this and who's just borrowing it?" clarifies the code.
- **Errors as values.** `Result` made me stop treating failure as an afterthought to bolt on later.
- **Small, total functions.** Exhaustive `match` nudges you toward functions that handle every case instead of the happy path plus a shrug.

## Things that didn't

Lifetimes in complex generic code still make my eyes cross, and I reach for `clone()` more than a purist would like. That's fine. I came for the lessons, not the purity points.

The compiler is strict, but it's strict *about the right things*. That turns out to be the whole pitch.
