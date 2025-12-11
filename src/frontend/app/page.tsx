import Image from 'next/image'
import ResolvedLink from '@/app/components/ResolvedLink'

export default function Page() {
  return (
    <>
      <section className="relative bg-cream min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute top-0 left-0 right-0 stitching-line border-t" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <Image
                  src="/Sewciety Logo.svg"
                  alt="SEWCIETY - Duck with sewing machine"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
              <h1 className="font-rokkitt text-brown leading-tight">
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl block">
                  JOIN THE CLUB
                </span>
              </h1>

              <p className="font-rokkitt text-brown text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl">
                Some super short copywritten description that goes here that talks about our club!!
              </p>

              <div className="pt-4">
                <ResolvedLink
                  link={{
                    linkType: 'href',
                    href: '/join',
                  }}
                  className="inline-block relative group"
                >
                  <div className="relative inline-block min-w-[194px]">
                    <div className="absolute top-[7px] left-[8px] right-0 h-[49px] bg-dark-green" />
                    <div className="absolute top-0 left-0 right-0 h-[49px] bg-[#b8c892]" />
                    <div className="relative px-6 py-2.5 bg-[#b8c892] border-[0.5px] border-brown border-dashed h-[39px] mt-[5px] ml-[5px] mr-[5px] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <span className="font-rokkitt text-brown text-xl font-normal relative z-10 whitespace-nowrap">
                        sign me up!
                      </span>
                    </div>
                  </div>
                </ResolvedLink>
              </div>

              <p className="font-rokkitt text-brown/60 text-sm sm:text-base pt-4">
                art credits: yujin bae
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 stitching-line border-b" />
      </section>

      <section className="relative bg-cream py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-perandory text-brown text-4xl sm:text-5xl lg:text-[64px] leading-normal">
            FEATURED PROJECTS
          </h2>
        </div>
      </section>

      <section className="relative bg-pink min-h-[400px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"></div>
      </section>
    </>
  )
}
