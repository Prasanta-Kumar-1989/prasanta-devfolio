import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import { leadershipCopy, leadershipStats, howILead, leadershipImpact, mentoringActivity } from '../../data/leadership'
import { labels } from '../../data/labels'
import shared from '../../styles/common/shared.module.css'
import styles from './Leadership.module.css'

export default function Leadership() {
  return (
    <PageWrapper>
      <Seo title={leadershipCopy.seoTitle} />
      <h1 className={shared.pageTitleLg}>{leadershipCopy.pageTitle}</h1>

      <div className={styles.statsGrid}>
        {leadershipStats.map(s => (
          <div key={s.label} className={styles.statCard}>
            <div className={styles.statIcon}>{s.icon}</div>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.panel}>
          <div className={styles.panelTitle}>{labels.howILead}</div>
          {howILead.map(item => (
            <div key={item} className={styles.listItem}>
              <span className={shared.bulletMarker}>→</span> {item}
            </div>
          ))}
        </div>
        <div className={styles.panel}>
          <div className={styles.panelTitle}>{labels.impact}</div>
          {leadershipImpact.map(item => (
            <div key={item} className={styles.impactItem}>
              <span className={shared.bulletMarker}>✓</span> {item}
            </div>
          ))}
          <div className={styles.activityBox}>
            <div className={styles.activityTitle}>{labels.recentMentoringActivity}</div>
            <div className={styles.activityText}>{mentoringActivity}</div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
