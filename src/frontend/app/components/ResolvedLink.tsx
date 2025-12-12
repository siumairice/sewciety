import Link from 'next/link'

interface ResolvedLinkProps {
  link: {
    linkType?: string
    href?: string
    openInNewTab?: boolean
  }
  children: React.ReactNode
  className?: string
}

export default function ResolvedLink({link, children, className}: ResolvedLinkProps) {
  // Handle href links directly
  if (link?.href) {
    const isExternal = link.href.startsWith('http')
    return (
      <Link
        href={link.href}
        target={link?.openInNewTab || isExternal ? '_blank' : undefined}
        rel={link?.openInNewTab || isExternal ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {children}
      </Link>
    )
  }
  return <>{children}</>
}
