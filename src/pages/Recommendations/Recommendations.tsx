import { recommendations, recommendationsCopy } from '../../data/recommendations'
import { profile, linkedInMetrics, formatLinkedInMetric } from '../../data/profile'
import { labels } from '../../data/labels'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import shared from '../../styles/common/shared.module.css'
import styles from './Recommendations.module.css'

export default function Recommendations() {
  return (
    <PageWrapper>
      <Seo title={recommendationsCopy.seoTitle} />
      <div className={styles.pageHead}>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className={shared.externalLink}>
          {labels.viewAllOnLinkedIn}
        </a>
      </div>
      <h1 className={styles.pageTitle}>{recommendationsCopy.pageTitle}</h1>

      <div className={styles.recGrid}>
        {recommendations.map(r => (
          <div key={r.name} className={styles.recCard}>
            <div className={styles.recHeader}>
              <div className={styles.recAvatar} style={{ background: r.bg, color: r.color }}>{r.initial}</div>
              <div>
                <div className={styles.recInfoName}>{r.name}</div>
                <div className={styles.recInfoRole}>{r.role}</div>
              </div>
            </div>
            <p className={styles.recText}>{r.text}</p>
            <span className={styles.recBadge}>{r.badge}</span>
          </div>
        ))}
      </div>

      <div className={styles.presencePanel}>
        <div className={styles.presenceLabel}>{labels.professionalPresence}</div>
        <div className={styles.presenceStats}>
          {linkedInMetrics.map(m => (
            <div key={m.label} className={styles.presenceStat}>
              <div className={styles.presenceValue}>{formatLinkedInMetric(m)}</div>
              <div className={styles.presenceLabelSmall}>{m.label}</div>
            </div>
          ))}
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <button className={styles.presenceButton}>{labels.viewLinkedIn}</button>
          </a>
        </div>
      </div>
    </PageWrapper>
  )
}
