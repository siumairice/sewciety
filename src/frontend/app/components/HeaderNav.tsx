'use client'

import Link from 'next/link'

export default function HeaderNav() {
  return (
    <nav>
      <ul
        role="list"
        className="flex items-center gap-4 md:gap-6"
      >
        <li>
          <Link 
            href="/pages/blog" 
            className="font-rokkitt text-brown text-base sm:text-lg hover:underline"
          >
            blog
          </Link>
        </li>
        <li>
          <Link 
            href="/pages/resources" 
            className="font-rokkitt text-brown text-base sm:text-lg hover:underline"
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
  )
}

