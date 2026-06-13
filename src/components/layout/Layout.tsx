import { useState, useEffect } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { profile } from '../../data/profile'
import { downloadResume } from '../../utils/downloadResume'
import { labels } from '../../data/labels'
import TrustedBar from '../common/TrustedBar'
import styles from './Layout.module.css'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className={styles.shell}>
      <header className={styles.mobileHeader}>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <div className={styles.mobileLogo}>{profile.initials}</div>
      </header>

      {menuOpen && (
        <button
          type="button"
          className={styles.overlay}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className={styles.topbar} aria-label="Section navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `${styles.topbarItem} ${isActive ? styles.topbarActive : ''}`
            }
          >
            {item.topLabel}
          </NavLink>
        ))}
      </nav>

      <aside className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.logoWrap}>
          <div className={styles.logoBox}>{profile.initials}</div>
        </div>

        <nav className={styles.navList} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.navActive : ''}`
              }
            >
              <span className={styles.navLabel}>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <button type="button" className={styles.dlResume} onClick={downloadResume}>
            {labels.dlResumeSidebar}
          </button>
        </div>
      </aside>

      <div className={styles.contentArea}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <TrustedBar />
      </div>
    </div>
  )
}
