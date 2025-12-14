import Link from 'next/link'
import {format} from 'date-fns'
import type {PostMeta} from '@/lib/posts'

type PostCardProps = {
  post: PostMeta
}

export default function PostCard({post}: PostCardProps) {
  return (
    <article className="border border-brown/20 dark:border-cream/20 rounded-sm p-6 bg-cream dark:bg-brown flex flex-col justify-between transition-colors hover:bg-cream/80 dark:hover:bg-brown/80 relative">
      <Link className="hover:text-brown/80 transition-colors" href={`/pages/posts/${post.slug}`}>
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3 className="font-rokkitt text-2xl mb-4 leading-tight text-brown dark:text-cream transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="line-clamp-3 text-sm leading-6 text-brown/70 dark:text-cream/70 max-w-[70ch] font-rokkitt transition-colors">
            {post.excerpt}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 stitch-at-top border-brown/10 dark:border-cream/10">
        {post.date && (
          <time className="text-brown/60 dark:text-cream/60 text-xs font-mono transition-colors" dateTime={post.date}>
            {format(new Date(post.date), 'LLLL d, yyyy')}
          </time>
        )}
      </div>
    </article>
  )
}

