import {notFound} from 'next/navigation'
import {getPostSlugs, getPostBySlug} from '@/lib/posts'
import {CustomMDX} from '@/app/components/mdx'
import {format} from 'date-fns'

type Props = {
  params: Promise<{slug: string}>
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }))
}

export default async function PostPage(props: Props) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 pb-6 stitch-at-bot border-brown/20 dark:border-cream/20">
          <h1 className="font-perandory text-brown dark:text-cream text-4xl sm:text-5xl lg:text-6xl mb-4 transition-colors">
            {post.meta.title}
          </h1>
          {post.meta.excerpt && (
            <p className="font-rokkitt text-brown/70 dark:text-cream/70 text-lg leading-relaxed transition-colors">
              {post.meta.excerpt}
            </p>
          )}
          <div className="mt-4 flex items-center gap-4 text-sm text-brown/60 dark:text-cream/60 transition-colors">
            {post.meta.date && (
              <time dateTime={post.meta.date}>
                {format(new Date(post.meta.date), 'LLLL d, yyyy')}
              </time>
            )}
            {post.meta.author && <span>by {post.meta.author}</span>}
          </div>
        </header>
        <div className="prose prose-lg max-w-none transition-colors">
          <CustomMDX source={post.content} />
        </div>
      </article>
    </div>
  )
}

