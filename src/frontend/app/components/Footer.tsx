import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-cream dark:bg-brown stitch-at-top border-brown/20 dark:border-cream/20 transition-colors">
      {/* Stitching line above */}
      <div className="stitching-line stitch-at-top" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Connect with us section */}
          <div className="lg:col-span-2">
            <h2 className="font-perandory text-brown dark:text-cream text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 transition-colors">
              Connect with us
            </h2>
            <p className="font-rokkitt text-brown dark:text-cream text-base sm:text-lg leading-relaxed max-w-xl mb-6 transition-colors">
              Join our community of sewing enthusiasts! Follow us on social media, subscribe to our newsletter, or reach out directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/uwsewciety"
                target="_blank"
                rel="noopener noreferrer"
                className="body-link"
              >
                Instagram
              </a>
              <a
                href="https://discord.com/invite/c3S7zGuVaT"
                target="_blank"
                rel="noopener noreferrer"
                className="body-link"
              >
                Discord
              </a>
              <a
                href="mailto:hello@sewciety.com"
                className="body-link"
              >
                Email
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-rokkitt text-brown dark:text-cream text-xl font-normal mb-4 transition-colors">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/pages/blog" 
                  className="body-link"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/pages/resources" 
                  className="body-link"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="/join" 
                  className="body-link"
                >
                  Join the Club
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="line"/>
          <p className="font-rokkitt text-brown/60 dark:text-cream/60 text-sm text-center transition-colors">
            © {new Date().getFullYear()} Sewciety. All rights reserved.
          </p>
      </div>
      {/* Stitching line below */}
      <div className="stitching-line stitch-at-top" />
    </footer>
  )
}

