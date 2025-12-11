# Understanding Slugs and File Structure

## What is a Slug?

A **slug** is a URL-friendly version of a title or name. It's the part of the URL that identifies a specific page or post.

### Examples:
- **Title**: "How to Sew a Button"
- **Slug**: `how-to-sew-a-button`
- **Full URL**: `https://yoursite.com/posts/how-to-sew-a-button`

Slugs are:
- ✅ Lowercase
- ✅ Use hyphens instead of spaces
- ✅ No special characters
- ✅ Easy to read and remember

In your Sanity CMS, each page and post has a `slug` field that creates the URL path.

---

## File Structure & Routing in Next.js App Router

Next.js uses the **file system** to create routes. The folder structure in `/app` directly maps to URLs.

### Current Structure:

```
/app
├── page.tsx                    → / (homepage)
├── [slug]/
│   └── page.tsx                → /{any-slug} (dynamic pages from Sanity)
├── blog/
│   └── page.tsx                → /blog (blog listing page)
└── posts/
    └── [slug]/
        └── page.tsx            → /posts/{post-slug} (individual blog posts)
```

### Route Mapping:

| File Path | URL | Purpose |
|-----------|-----|---------|
| `/app/page.tsx` | `/` | Homepage (hardcoded hero section) |
| `/app/[slug]/page.tsx` | `/about`, `/contact`, etc. | Dynamic pages from Sanity CMS |
| `/app/blog/page.tsx` | `/blog` | Blog listing (shows all posts) |
| `/app/posts/[slug]/page.tsx` | `/posts/my-first-post` | Individual blog post pages |

---

## Understanding the Redundancy

You're seeing some redundancy because there are **two different systems** for handling content:

### 1. **Static Routes** (Hardcoded)
- `/app/page.tsx` - Homepage with hardcoded hero section
- `/app/blog/page.tsx` - Blog listing page

### 2. **Dynamic Routes** (From Sanity CMS)
- `/app/[slug]/page.tsx` - Catches ANY slug and tries to find a page in Sanity
- `/app/posts/[slug]/page.tsx` - Catches post slugs and finds posts in Sanity

### Why This Structure?

```
/app/[slug]/page.tsx
```
This is a **catch-all** route that handles:
- `/about`
- `/contact`
- `/services`
- `/home` (if you create a "home" page in Sanity)
- Any other page you create in Sanity

```
/app/posts/[slug]/page.tsx
```
This specifically handles blog posts:
- `/posts/my-first-post`
- `/posts/how-to-sew`
- All blog post URLs

---

## The Flow

### When someone visits `/blog`:
1. Next.js looks for `/app/blog/page.tsx` ✅
2. That page fetches ALL posts from Sanity
3. Displays them in a list

### When someone visits `/posts/my-first-post`:
1. Next.js looks for `/app/posts/[slug]/page.tsx` ✅
2. Extracts `slug = "my-first-post"`
3. Queries Sanity for a post with that slug
4. Displays the full post

### When someone visits `/about`:
1. Next.js looks for `/app/about/page.tsx` ❌ (doesn't exist)
2. Falls back to `/app/[slug]/page.tsx` ✅
3. Extracts `slug = "about"`
4. Queries Sanity for a page with that slug
5. Displays the page using PageBuilder

---

## Potential Simplifications

### Option 1: Keep Current Structure (Recommended)
- ✅ Clear separation between posts and pages
- ✅ `/blog` is explicit and easy to understand
- ✅ `/posts/[slug]` makes it clear these are blog posts

### Option 2: Consolidate Posts
You could remove `/app/posts/[slug]/page.tsx` and handle posts in `[slug]`:
- ❌ Less clear what's a post vs. a page
- ❌ Harder to style posts differently
- ✅ One less file to maintain

### Option 3: Remove Dynamic [slug] Route
Only use it for pages, not posts:
- ✅ More explicit routing
- ❌ Less flexible for CMS-driven content

---

## Current Redundancy Issues

### 1. Homepage Handling
- `/app/page.tsx` has hardcoded hero
- But it also checks for a "home" page in Sanity
- **This is intentional** - fallback if no Sanity page exists

### 2. Post vs Page Routes
- Posts use `/posts/[slug]`
- Pages use `/[slug]`
- **This separation is good** - keeps content types distinct

### 3. Blog Listing
- `/blog` is a static route
- Could theoretically be a Sanity page
- **Current approach is fine** - blog listing is usually static

---

## Recommendations

**Keep the current structure!** It's actually well-organized:

1. **Static routes** (`/`, `/blog`) for pages that don't change often
2. **Dynamic routes** (`/[slug]`, `/posts/[slug]`) for CMS content
3. **Clear separation** between posts and pages

The only "redundancy" is the homepage checking both hardcoded and Sanity content, which is a good fallback pattern.

---

## Quick Reference

| What | Where | URL Pattern |
|------|-------|-------------|
| Homepage | `/app/page.tsx` | `/` |
| Blog List | `/app/blog/page.tsx` | `/blog` |
| Any Page | `/app/[slug]/page.tsx` | `/{page-slug}` |
| Blog Post | `/app/posts/[slug]/page.tsx` | `/posts/{post-slug}` |

---

## Questions?

- **Q: Why not just use `[slug]` for everything?**
  - A: You could, but separating posts and pages makes styling, SEO, and organization easier.

- **Q: Can I rename `/posts` to something else?**
  - A: Yes! Just rename the folder. But update links in your components.

- **Q: What if I want `/blog/my-post` instead of `/posts/my-post`?**
  - A: Move `/app/posts/[slug]` to `/app/blog/[slug]` and update the Posts component links.

