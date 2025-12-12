import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import {Inter, Rokkitt} from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import {Toaster} from 'sonner'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import {ThemeProvider} from '@/app/components/ThemeProvider'

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export const metadata: Metadata = {
  title: {
    template: '%s | Sewciety',
    default: 'Sewciety',
  },
  description: 'Join UW Sewciety - A community for sewing enthusiasts',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const rokkitt = Rokkitt({
  variable: '--font-rokkitt',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const perandory = localFont({
  src: [
    {
      path: './fonts/PERANDORY/Perandory-Condensed.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-perandory',
  display: 'swap',
  fallback: ['serif'],
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${rokkitt.variable} ${perandory.variable}`}>
      <body className="bg-cream dark:bg-brown text-brown dark:text-cream transition-colors" suppressHydrationWarning>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const manualOverride = localStorage.getItem('theme-manual');
                  const savedTheme = localStorage.getItem('theme');
                  
                  // If user has manually set a preference, always use it
                  if (manualOverride === 'true' && (savedTheme === 'dark' || savedTheme === 'light')) {
                    if (savedTheme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  } else {
                    // No saved preference, check system preference
                    // Use a more reliable method to detect system preference
                    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (prefersDark) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  }
                } catch (e) {
                  // Fallback: remove dark class if there's an error
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <ThemeProvider>
          <section className="min-h-screen pt-12 sm:pt-20">
            <Toaster />
            <Header />
            <main className="">{children}</main>
            <Footer />
          </section>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
