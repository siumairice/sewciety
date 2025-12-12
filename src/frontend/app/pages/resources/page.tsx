import ResourceCard from '@/app/components/ResourceCard'
import SectionHeader from '@/app/components/SectionHeader'

export default function ResourcesPage() {
  return (
    <>
      <SectionHeader title="RESOURCES" className="pb-8 lg:pb-12" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
        <p className="font-rokkitt text-brown dark:text-cream text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-12 transition-colors">
          Helpful resources for sewing enthusiasts and club members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Getting Started"
            description="Essential guides for beginners starting their sewing journey."
          />
          <ResourceCard
            title="Patterns"
            description="Free and premium sewing patterns for all skill levels."
          />
          <ResourceCard
            title="Tutorials"
            description="Step-by-step video and written tutorials for various techniques."
          />
        </div>
      </div>
    </>
  )
}

