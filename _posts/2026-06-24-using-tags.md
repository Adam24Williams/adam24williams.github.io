---
layout: post
title: "Organizing posts with tags"
date: 2026-06-24
excerpt: "How tags work on this site — and how the Featured label pins a post to the top of the sidebar."
tags: [meta, writing, featured]
---

Every post can declare a list of tags in its front matter. They power the **Topics** sidebar on the home page and the [Topics]({{ '/tags' | relative_url }}) archive.

## Adding tags to a post

Add a `tags:` line to the front matter at the top of the post. Use a comma-separated list inside square brackets:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-06-24
excerpt: "Optional one-line summary."
tags: [writing, ideas, featured]
---
```

Each tag becomes a chip under the post and an entry in the **Topics** sidebar, with a count of how many posts share it. Clicking a tag jumps to that section on the Topics page.

## The featured label

The `featured` tag is special. Any post tagged `featured` is pinned to a **Featured** card at the very top of the home-page sidebar, ahead of the regular topic list. Tag your best or most current work with it:

```yaml
tags: [writing, featured]
```

That's it — drop the tag in, and the post surfaces to the top automatically.
