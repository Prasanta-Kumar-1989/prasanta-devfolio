import { useEffect } from 'react'
import { profile } from '../../data/profile'

interface SeoProps { title: string; description?: string }

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | ${profile.seoSiteName}`
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])
  return null
}
