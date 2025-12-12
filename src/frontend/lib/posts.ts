import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type PostMeta = {
  title: string
  excerpt?: string
  date: string
  author?: string
  slug: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'))
}

export function getPostBySlug(slug: string): {meta: PostMeta; content: string} | null {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  return {
    meta: {
      ...data,
      slug: realSlug,
    } as PostMeta,
    content,
  }
}

export function getAllPosts(): Array<{meta: PostMeta; content: string}> {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is {meta: PostMeta; content: string} => post !== null)
    .sort((a, b) => {
      if (a.meta.date < b.meta.date) {
        return 1
      } else {
        return -1
      }
    })

  return posts
}

