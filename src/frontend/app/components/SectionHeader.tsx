type SectionHeaderProps = {
  title: string
  className?: string
}

export default function SectionHeader({title, className = ''}: SectionHeaderProps) {
  return (
    <section className={`relative bg-cream dark:bg-brown py-16 lg:py-20 transition-colors ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <div className="absolute top-1/2 -translate-y-2/5 -left-4 -right-4 bg-pink dark:bg-light-green h-[50%] z-0 transition-colors" />
            <h2 className="font-perandory text-brown dark:text-cream text-4xl sm:text-5xl lg:text-[64px] leading-normal relative z-10 transition-colors">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

