import { trustedCompanies } from '../../data/profile'
import { labels } from '../../data/labels'
import styles from './TrustedBar.module.css'

export default function TrustedBar() {
  return (
    <footer className={styles.trustedBar} aria-label="Trusted by leading enterprises">
      <p className={styles.trustedLabel}>{labels.trustedBy}</p>
      <div className={styles.trustedLogos}>
        {trustedCompanies.map(c => (
          <div key={c.name} className={styles.trustedLogoItem} title={c.name}>
            <img src={c.logo} alt={c.name} className={styles.trustedLogo} />
          </div>
        ))}
      </div>
    </footer>
  )
}
