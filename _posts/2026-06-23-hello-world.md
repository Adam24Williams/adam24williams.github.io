---
layout: post
title: "Hello, World"
date: 2026-06-23
excerpt: "The first post on this site — a quick note on getting started."
---

Welcome to the blog. This is your first post.

## How posts work

Posts live in the `_posts/` directory and follow this naming convention:

```
YYYY-MM-DD-title-of-post.md
```

The date in the filename is what sorts them — newest appears first on the blog listing and homepage. Each post needs a small block of front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-06-23
excerpt: "Optional one-line summary shown in post listings."
---
```

Then write the rest of the post in plain Markdown below the `---`.

## Markdown quick reference

**Bold**, *italic*, `inline code`.

```python
# Code blocks are syntax-highlighted
def hello():
    print("Hello, world!")
```

> Blockquotes work too.

- Bullet lists
- Like this

1. Numbered lists
2. Like this

Delete this file and replace it with your own posts whenever you're ready.
