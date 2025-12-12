import {MetadataRoute} from 'next'
import {headers} from 'next/headers'
import {getPostSlugs} from '@/lib/posts'

/**
 * This file creates a sitemap (sitemap.xml) for the application. Learn more about sitemaps in Next.js here: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * Be sure to update the `changeFrequency` and `priority` values to match your application's content.
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers()
  const domain: String = headersList.get('host') as string
  const postSlugs = getPostSlugs()
  
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: domain as string,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly',
    },
    {
      url: `${domain}/pages/blog`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    {
      url: `${domain}/pages/resources`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'monthly',
    },
  ]

  // Add blog post URLs
  postSlugs.forEach((slug) => {
    sitemap.push({
      url: `${domain}/pages/posts/${slug.replace(/\.mdx$/, '')}`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: 'never',
    })
  })

  return sitemap
}
