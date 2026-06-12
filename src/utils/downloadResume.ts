import { resumeDownloadName, resumeUrl } from '../data/profile'

export function downloadResume() {
  const link = document.createElement('a')
  link.href = resumeUrl
  link.download = resumeDownloadName
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
}
