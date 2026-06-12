import { certifications, certificationsCopy } from '../../data/certifications'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import styles from './Certifications.module.css'

export default function Certifications() {
  return (
    <PageWrapper>
      <Seo title={certificationsCopy.seoTitle} />
      <h1 className={styles.pageTitle}>{certificationsCopy.pageTitle}</h1>
      <div className={styles.certGrid}>
        {certifications.map(c => (
          <div key={c.name} className={styles.certCard} style={{ borderTopColor: c.accent }}>
            <div className={styles.certBody}>
              <div className={styles.certHeader}>
                <div className={styles.certLogoWrap}>
                  <img src={c.logo} alt={`${c.name} certification logo`} className={styles.certLogo} />
                </div>
                <div className={styles.certDate} style={{ color: c.accent }}>{c.date}</div>
              </div>
              <div className={styles.certName}>{c.name}</div>
              <div className={styles.certIssuer}>{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
