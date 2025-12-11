import Link from 'next/link'
import Image from 'next/image'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default async function Header() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-cream">
      {/* Stitching line above */}
      <div className="stitching-line border-t" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link className="flex items-center" href="/">
            <span className="font-perandory text-brown text-3xl sm:text-4xl lg:text-[48px] font-normal">
              sewciety
            </span>
          </Link>

          {/* Navigation */}
          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6"
            >
              <li>
                <Link 
                  href="/blog" 
                  className="font-rokkitt text-brown text-base sm:text-lg hover:underline transition-colors"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources" 
                  className="font-rokkitt text-brown text-base sm:text-lg hover:underline transition-colors"
                >
                  resources
                </Link>
              </li>
              <li>
                <Link
                  className="font-rokkitt bg-brown text-cream hover:bg-brown/90 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-normal transition-colors duration-200 flex items-center gap-2"
                  href="/join"
                >
                  join the club
                  <span className="text-lg">→</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Stitching line below */}
      <div className="stitching-line border-b" />
      {/* <hr className="bg-brown/20"/> */}
    </header>
  )
}
