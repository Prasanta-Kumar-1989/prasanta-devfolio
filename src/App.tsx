import { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  useEffect(() => {
    if (!import.meta.env.PROD) return

    const blockContextMenu = (event: MouseEvent) => {
      event.preventDefault()
    }

    document.addEventListener('contextmenu', blockContextMenu)
    return () => document.removeEventListener('contextmenu', blockContextMenu)
  }, [])

  return <AppRoutes />
}
