import Link from 'next/link'
import HeaderNav from './HeaderNav'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-cream dark:bg-brown">
      {/* Stitching line above */}
      <div className="stitching-line stitch-at-bot" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link className="flex items-center" href="/">
            <span className="font-perandory text-brown dark:text-cream text-3xl sm:text-4xl lg:text-[48px] font-normal">
              sewciety
            </span>
          </Link>

          {/* Navigation */}
          <HeaderNav />
        </div>
      </div>

      {/* Stitching line below */}
      <div className="stitching-line stitch-at-bot" />
      {/* <hr className="bg-brown/20"/> */}
    </header>
  )
}
