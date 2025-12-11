export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div>
        <h1 className="font-perandory text-brown text-4xl sm:text-5xl lg:text-6xl mb-6">
          Resources
        </h1>
        <p className="font-rokkitt text-brown text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-12">
          Helpful resources for sewing enthusiasts and club members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resource cards can be added here */}
          <div className="border border-brown/20 rounded-sm p-6 bg-cream">
            <h3 className="font-rokkitt text-brown text-xl font-bold mb-3">Getting Started</h3>
            <p className="font-rokkitt text-brown/70 text-sm leading-relaxed">
              Essential guides for beginners starting their sewing journey.
            </p>
          </div>

          <div className="border border-brown/20 rounded-sm p-6 bg-cream">
            <h3 className="font-rokkitt text-brown text-xl font-bold mb-3">Patterns</h3>
            <p className="font-rokkitt text-brown/70 text-sm leading-relaxed">
              Free and premium sewing patterns for all skill levels.
            </p>
          </div>

          <div className="border border-brown/20 rounded-sm p-6 bg-cream">
            <h3 className="font-rokkitt text-brown text-xl font-bold mb-3">Tutorials</h3>
            <p className="font-rokkitt text-brown/70 text-sm leading-relaxed">
              Step-by-step video and written tutorials for various techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

