import {AllPosts} from '@/app/components/Posts'

export default async function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <AllPosts />
    </div>
  )
}

