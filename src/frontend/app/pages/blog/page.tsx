import Link from 'next/link'
import {AllPosts} from '@/app/components/Posts'
import SectionHeader from '@/app/components/SectionHeader'
import {studioUrl} from '@/sanity/lib/api'

export default async function BlogPage() {
  const createPostButton = (
    <Link
      href={`${studioUrl}/structure/intent/create/template=post;type=post;path=title`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-rokkitt bg-brown dark:bg-light-green text-cream dark:text-brown hover:bg-brown/90 dark:hover:bg-light-green/90 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-normal transition-colors duration-200"
    >
      Create Post
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
      </svg>
    </Link>
  )

  return (
    <>
      <SectionHeader title="BLOG" className="pb-8 lg:pb-12" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
        <AllPosts showHeading={false} actionButton={createPostButton} />
      </div>
    </>
  )
}

