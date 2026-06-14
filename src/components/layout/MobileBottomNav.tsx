import { NavLink } from 'react-router-dom'
import { mobileNavigation } from '../../data/navigation'
import MobileNavIcon from './MobileNavIcon'
import styles from './MobileBottomNav.module.css'

export default function MobileBottomNav() {
  return (
    <nav className={styles.mobileBottomNav} aria-label="Mobile navigation">
      {mobileNavigation.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path !== '/projects'}
          className={({ isActive }) =>
            `${styles.mobileNavItem} ${isActive ? styles.mobileNavActive : ''}`
          }
        >
          <MobileNavIcon type={item.icon} className={styles.mobileNavIcon} />
          <span className={styles.mobileNavLabel}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
