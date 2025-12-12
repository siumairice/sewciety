import Link from 'next/link'

import {sanityFetch} from '@/sanity/lib/live'
import {morePostsQuery, allPostsQuery} from '@/sanity/lib/queries'
import {Post as PostType, AllPostsQueryResult} from '@/sanity.types'
import DateComponent from '@/app/components/Date'
import OnBoarding from '@/app/components/Onboarding'
import Avatar from '@/app/components/Avatar'
import {createDataAttribute} from 'next-sanity'

const Post = ({post}: {post: AllPostsQueryResult[number]}) => {
  const {_id, title, slug, excerpt, date, author} = post

  const attr = createDataAttribute({
    id: _id,
    type: 'post',
    path: 'title',
  })

  return (
    <article
      data-sanity={attr()}
      key={_id}
      className="border border-brown/20 dark:border-cream/20 rounded-sm p-6 bg-cream dark:bg-brown flex flex-col justify-between transition-colors hover:bg-cream/80 dark:hover:bg-brown/80 relative"
    >
      <Link className="hover:text-brown/80 transition-colors" href={`/pages/posts/${slug}`}>
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3 className="font-rokkitt text-2xl  mb-4 leading-tight text-brown dark:text-cream transition-colors">{title}</h3>

        <p className="line-clamp-3 text-sm leading-6 text-brown/70 dark:text-cream/70 max-w-[70ch] font-rokkitt transition-colors">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-brown/10 dark:border-cream/10">
        {author && author.firstName && author.lastName && (
          <div className="flex items-center">
            <Avatar person={author} small={true} />
          </div>
        )}
        <time className="text-brown/60 dark:text-cream/60 text-xs font-mono transition-colors" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>
    </article>
  )
}

const Posts = ({
  children,
  heading,
  subHeading,
  actionButton,
}: {
  children: React.ReactNode
  heading?: string
  subHeading?: string
  actionButton?: React.ReactNode
}) => (
  <div>
    {heading && (
      <h2 className="font-perandory text-3xl font-normal tracking-tight text-brown dark:text-cream sm:text-4xl lg:text-5xl transition-colors">
        {heading}
      </h2>
    )}
    {subHeading && (
      <div className="mt-2 flex items-center justify-between">
        <p className="text-lg leading-8 text-brown/70 dark:text-cream/70 font-rokkitt transition-colors">{subHeading}</p>
        {actionButton && <div className="shrink-0">{actionButton}</div>}
      </div>
    )}
    <div className="pt-6 space-y-6">{children}</div>
  </div>
)

export const MorePosts = async ({skip, limit}: {skip: string; limit: number}) => {
  const {data} = await sanityFetch({
    query: morePostsQuery,
    params: {skip, limit},
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Posts heading={`Recent Posts (${data?.length})`}>
      {data?.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}

export const AllPosts = async ({showHeading = true, actionButton}: {showHeading?: boolean; actionButton?: React.ReactNode}) => {
  const {data} = await sanityFetch({query: allPostsQuery})

  if (!data || data.length === 0) {
    return <OnBoarding />
  }

  return (
    <Posts
      heading={showHeading ? "Blog" : undefined}
      subHeading={`${data.length === 1 ? 'This blog post is' : `These ${data.length} blog posts are`} populated from your Sanity Studio.`}
      actionButton={actionButton}
    >
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}
