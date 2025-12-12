'use client'

import {Suspense} from 'react'
import Image from 'next/image'
import ResolvedLink from '@/app/components/ResolvedLink'

type CtaButtonProps = {
  text: string
  link: any
}

export default function CtaButton({text, link}: CtaButtonProps) {
  return (
    <Suspense fallback={null}>
      <div className="pt-4 flex">
        <ResolvedLink
          link={link}
          className="inline-block relative group"
        >
          <Image
            src="/cta-button.svg"
            alt={text}
            width={202}
            height={56}
            className="h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </ResolvedLink>
      </div>
    </Suspense>
  )
}

