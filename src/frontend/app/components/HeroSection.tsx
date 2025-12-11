'use client'

import Image from 'next/image'
import {Suspense} from 'react'
import ResolvedLink from '@/app/components/ResolvedLink'

type HeroSectionProps = {
  block: {
    heading?: string
    description?: string
    ctaText?: string
    ctaLink?: any
    illustration?: {
      asset?: {
        url: string
      }
    }
    artCredits?: string
  }
  index: number
}

export default function HeroSection({block, index}: HeroSectionProps) {
  return (
    <section className="relative bg-cream min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Stitching lines at top */}
      <div className="absolute top-0 left-0 right-0 stitching-line border-t" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            {block.illustration?.asset ? (
              <div className="relative w-full max-w-md">
                <Image
                  src={block.illustration.asset.url}
                  alt={block.heading || 'SEWCIETY hero illustration'}
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority={index === 0}
                />
              </div>
            ) : (
              <div className="relative w-full max-w-md">
                {/* Placeholder for duck illustration - using logo as fallback */}
                <Image
                  src="/Sewciety Logo.svg"
                  alt="SEWCIETY"
                  width={600}
                  height={600}
                  className="w-full h-auto opacity-80"
                  priority={index === 0}
                />
              </div>
            )}
          </div>

          {/* Right Side - Text Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            {/* Heading */}
            <div className="space-y-0">
              {block.heading && (
                <h1 className="font-perandory text-brown font-bold leading-tight">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl block">
                    {block.heading.split(' ').slice(0, -1).join(' ')}
                  </span>
                  <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl block">
                    {block.heading.split(' ').slice(-1)[0]}
                  </span>
                </h1>
              )}
            </div>

            {/* Description */}
            {block.description && (
              <p className="font-rokkitt text-brown text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl">
                {block.description}
              </p>
            )}

            {/* CTA Button */}
            {block.ctaText && block.ctaLink && (
              <Suspense fallback={null}>
                <div className="pt-4">
                  <ResolvedLink
                    link={block.ctaLink}
                    className="inline-block relative group"
                  >
                    <div className="relative px-8 py-4 bg-light-green stitching-line border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <span className="font-rokkitt text-brown text-lg sm:text-xl font-normal relative z-10">
                        {block.ctaText}
                      </span>
                    </div>
                  </ResolvedLink>
                </div>
              </Suspense>
            )}

            {/* Art Credits */}
            {block.artCredits && (
              <p className="font-rokkitt text-brown/60 text-sm sm:text-base pt-4">
                {block.artCredits}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stitching lines at bottom */}
      <div className="absolute bottom-0 left-0 right-0 stitching-line border-b" />
    </section>
  )
}

