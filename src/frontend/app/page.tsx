import Image from 'next/image'
import CtaButton from '@/app/components/CtaButton'
import SectionHeader from '@/app/components/SectionHeader'

export default function Page() {
  return (
    <>
      <section className="relative bg-cream dark:bg-brown min-h-[600px] lg:min-h-[700px] flex items-center transition-colors">
        <div className="absolute top-0 left-0 right-0 stitching-line stitch-at-top" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 py-10 lg:py-20" style={{ width: "800" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <Image
                  src="/Sewciety Logo Hoop.svg"
                  alt="SEWCIETY - Duck with sewing machine"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
              <h1 className="font-rokkitt text-brown dark:text-cream leading-tight transition-colors">
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl block">
                  JOIN THE CLUB
                </span>
              </h1>

              <p className="font-rokkitt text-brown dark:text-cream text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl transition-colors">
                Some super short copywritten description that goes here that talks about our club!!
              </p>

              <CtaButton
                text="sign me up!"
                link={{
                  linkType: 'href',
                  href: 'https://docs.google.com/forms/d/e/1FAIpQLSdGC4JZmLCWyleveuSbKm_Sn6-CAmzaYDax7PD-y57G0dxEfw/viewform',
                }}
              />

              <p className="font-rokkitt text-brown/60 dark:text-cream/60 text-sm sm:text-base pt-4 transition-colors">
                art credits: yujin bae
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 stitching-line stitch-at-bot" />
      </section>

      <SectionHeader title="FEATURED PROJECTS" color="pink" boxAtTop={true} />

      <section className="relative bg-cream dark:bg-brown min-h-[600px] transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Placeholder content boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-3 mb-3">
            <div className="bg-gray-300 dark:bg-gray-600 h-64 md:h-80 lg:h-96" />
            <div className="bg-gray-300 dark:bg-gray-600 h-64 md:h-80 lg:h-96" />
            <div className="bg-gray-300 dark:bg-gray-600 h-64 md:h-80 lg:h-96" />
          </div>

          {/* Placeholder text */}
          <div className="max-w-2xl">
            <p className="font-rokkitt text-brown/80 dark:text-cream text-base sm:text-lg leading-relaxed transition-colors">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
