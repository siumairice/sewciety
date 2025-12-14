'use client'

import Link from 'next/link'

export default function HeaderNav() {
  return (
    <nav>
      <ul
        role="list"
        className="flex items-center gap-3 md:gap-14"
      >
        <li>
          <Link 
            href="/pages/blog" 
            className="nav-menu"
          >
            blog
          </Link>
        </li>
        <li>
          <Link 
            href="/pages/resources" 
            className="nav-menu"
          >
            resources
          </Link>
        </li>
        <li>
          <Link
            className="nav-menu-join"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdGC4JZmLCWyleveuSbKm_Sn6-CAmzaYDax7PD-y57G0dxEfw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            join us →
          </Link>
        </li>
      </ul>
    </nav>
  )
}

