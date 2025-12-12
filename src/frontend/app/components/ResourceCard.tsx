type ResourceCardProps = {
  title: string
  description: string
}

export default function ResourceCard({title, description}: ResourceCardProps) {
  return (
    <div className="border border-brown/20 dark:border-cream/20 rounded-sm p-6 bg-cream dark:bg-brown transition-colors">
      <h3 className="font-rokkitt text-brown dark:text-cream text-xl mb-3 transition-colors">
        {title}
      </h3>
      <p className="font-rokkitt text-brown/70 dark:text-cream/70 text-sm leading-relaxed transition-colors">
        {description}
      </p>
    </div>
  )
}

