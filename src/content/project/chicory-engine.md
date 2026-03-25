---
title: 'Chicory Chess Engine'
description: 'a UCI-compatible, dependence-less chess engine built in Rust'
pubDate: 'Mar 25 2026'
heroImage:
    url: '/chicory-vs-chicory.png'
    alt: 'Screenshot of nil code being ran'
platform: CLI
stack: ['Rust']
github: https://github.com/achester88/chicory-engine
order: 2
draft: true
---

Chicory is a Chess written in rust that uses bitboards for fast move generation, with a handcrafted evaluation function and alpha-beta pruning to deliver a strong yet quick engine. A UCI-compatible GUI, such as [cutechess](https://github.com/cutechess/cutechess), is required for play.

check out the blog post [here](/blog/growing-chicory/)