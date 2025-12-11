import Link from 'next/link'
import {AllPosts} from '@/app/components/Posts'
import {studioUrl} from '@/sanity/lib/api'

export default async function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-perandory text-3xl font-normal tracking-tight text-brown sm:text-4xl lg:text-5xl">
          Blog
        </h1>
        <Link
          href={`${studioUrl}/structure/intent/create/template=post;type=post;path=title`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-rokkitt bg-brown text-cream hover:bg-brown/90 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-normal transition-colors duration-200"
        >
          Create Post
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </Link>
      </div>
      <AllPosts showHeading={false} />
    </div>
  )
}

