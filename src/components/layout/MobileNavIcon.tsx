export type MobileNavIconType = 'skills' | 'experience' | 'certifications' | 'projects' | 'connect'

interface MobileNavIconProps {
  type: MobileNavIconType
  className?: string
}

export default function MobileNavIcon({ type, className }: MobileNavIconProps) {
  const svgProps = {
    className,
    viewBox: '0 0 24 24' as const,
    fill: 'none' as const,
    'aria-hidden': true as const,
  }

  switch (type) {
    case 'skills':
      return (
        <svg {...svgProps}>
          <path d="M8 4 4 7v10l4 3 8-6V7l-4-3-8 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="m4 7 8 6 8-6M12 13v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'experience':
      return (
        <svg {...svgProps}>
          <path d="M4 9h16v10H4V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 13h16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'certifications':
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="9" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 13.5 8 20l4-2 4 2-1.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    case 'projects':
      return (
        <svg {...svgProps}>
          <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11H4V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 5V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'connect':
      return (
        <svg {...svgProps}>
          <path d="M5 5h14v10H8l-3 3V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
  }
}
