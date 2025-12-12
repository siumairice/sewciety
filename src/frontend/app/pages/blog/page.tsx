import {getAllPosts} from '@/lib/posts'
import PostCard from '@/app/components/PostCard'
import SectionHeader from '@/app/components/SectionHeader'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <SectionHeader title="BLOG" className="pb-8 lg:pb-12" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-rokkitt text-brown dark:text-cream text-lg leading-relaxed transition-colors">
              Blog posts coming soon!
            </p>
          </div>
        ) : (
          <>
            <p className="font-rokkitt text-brown/70 dark:text-cream/70 text-lg leading-8 mb-6 transition-colors">
              {posts.length === 1
                ? 'This blog post is'
                : `These ${posts.length} blog posts are`}{' '}
              written in MDX format.
            </p>
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.meta.slug} post={post.meta} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

