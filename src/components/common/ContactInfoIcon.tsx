export type ContactIconType = 'email' | 'phone' | 'location' | 'linkedin' | 'github'

const iconColors: Record<ContactIconType, string> = {
  email: '#EA4335',
  phone: '#2563EB',
  location: '#EF4444',
  linkedin: '#0A66C2',
  github: '#181717',
}

interface ContactInfoIconProps {
  type: ContactIconType
  className?: string
}

export default function ContactInfoIcon({ type, className }: ContactInfoIconProps) {
  const color = iconColors[type]
  const svgProps = {
    className,
    viewBox: '0 0 24 24' as const,
    'aria-hidden': true as const,
    style: { color },
  }

  switch (type) {
    case 'email':
      return (
        <svg {...svgProps} fill="none">
          <path
            d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m5 7 7 5 7-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'phone':
      return (
        <svg {...svgProps} fill="none">
          <path
            d="M8.5 5.5h2l1.2 3.6-1.8 1.2a11 11 0 0 0 5.5 5.5l1.2-1.8 3.6 1.2v2a2 2 0 0 1-2 2c-7.2 0-13-5.8-13-13a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'location':
      return (
        <svg {...svgProps} fill="none">
          <path
            d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...svgProps} fill="currentColor">
          <path d="M6.5 8.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.2h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.1c0-.98-.02-2.24-1.36-2.24-1.48 0-1.7 1.16-1.7 2.35V19h-3v-9Z" />
        </svg>
      )
    case 'github':
      return (
        <svg {...svgProps} fill="currentColor">
          <path d="M12 2.5c-5.25 0-9.5 4.22-9.5 9.43 0 4.17 2.73 7.7 6.52 8.95.48.09.65-.2.65-.46 0-.23-.01-.84-.01-1.64-2.65.56-3.21-1.24-3.21-1.24-.44-1.1-1.07-1.39-1.07-1.39-.87-.58.07-.57.07-.57.96.07 1.47.97 1.47.97.85 1.43 2.23 1.02 2.77.78.09-.6.33-.97.6-1.2-2.12-.23-4.34-1.04-4.34-4.63 0-1.02.37-1.86.97-2.52-.1-.23-.42-1.17.09-2.44 0 0 .79-.25 2.58.96a9.1 9.1 0 0 1 2.36-.31c.8 0 1.6.1 2.36.31 1.79-1.21 2.58-.96 2.58-.96.51 1.27.19 2.21.09 2.44.6.66.97 1.5.97 2.52 0 3.6-2.23 4.4-4.36 4.62.34.28.64.84.64 1.7 0 1.23-.01 2.22-.01 2.52 0 .26.17.56.66.46 3.78-1.25 6.5-4.78 6.5-8.95 0-5.21-4.25-9.43-9.5-9.43Z" />
        </svg>
      )
  }
}
