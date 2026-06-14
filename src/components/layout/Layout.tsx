import { useState, useEffect } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { navigation, getSidebarNavigation } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import TrustedBar from '../common/TrustedBar'
import MobileBottomNav from './MobileBottomNav'
import styles from './Layout.module.css'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const sidebarItems = getSidebarNavigation(isMobile)

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
        <div className={styles.mobileIdentity}>
          <img
            src={profile.photoUrl}
            alt=""
            className={styles.mobilePhoto}
            aria-hidden="true"
          />
          <span className={styles.mobileName}>{profile.seoSiteName}</span>
        </div>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
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
          <img
            src={profile.photoUrl}
            alt={profile.photoAlt}
            className={styles.sidebarPhoto}
          />
        </div>

        <nav className={styles.navList} aria-label="Main navigation">
          {sidebarItems.map((item) => (
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
      </aside>

      <div className={styles.contentArea}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <TrustedBar />
      </div>

      <MobileBottomNav />
    </div>
  )
}
