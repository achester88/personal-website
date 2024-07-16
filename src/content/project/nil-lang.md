---
title: 'NIL Lang'
description: 'My submission for the 2024 hackclub langjam'
pubDate: 'Jul 9 2024'
heroImage:
    url: '/nil-demo2.png'
    alt: 'Screenshot of nil code being ran'
platform: CLI
stack: ['Rust']
github: https://github.com/achester88/nil
order: 2
---

NIL is a simple esoteric interpreted programming language written in rust. NIL code is written bottom to top, and reverses the typical syntax with with function calls wrapped in curly brackets and variables written value first this language is not meet to be easy to understand and let alone written

Example Code:
```
Hello World A Function Call and Returns

/*

;{output} {hello_world} ,Hello,

) {x} hello_world
  ;,World,
  ;{output} x
def (

*/
```

read the docs [here](https://github.com/achester88/nil/blob/main/DOCS.md) or check out the blog post [here](/blog/create-nil-lang/)