import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import ExperienceDurationValue from '../../components/common/ExperienceDurationValue'
import { aboutCopy, aboutStats, whatIDo } from '../../data/about'
import { labels } from '../../data/labels'
import styles from './About.module.css'

export default function About() {
  return (
    <PageWrapper>
      <Seo title={aboutCopy.seoTitle} />

      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {aboutCopy.heroTitle}<br />
            <span>{aboutCopy.heroHighlight}</span>
          </h1>
          <p className={styles.heroText}>{aboutCopy.paragraph1}</p>
          <p className={styles.heroText}>{aboutCopy.paragraph2}</p>
        </div>
        <div className={styles.statsGrid}>
          {aboutStats.map(m => (
            <div key={m.label} className={styles.statsCard}>
              {m.dynamic === 'experience' ? (
                <ExperienceDurationValue color={m.color} />
              ) : (
                <div className={styles.statsValue} style={{ color: m.color }}>{m.value}</div>
              )}
              <div className={styles.statsLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sectionHeading}>{labels.whatIDo}</div>
      <div className={styles.whatGrid}>
        {whatIDo.map(w => (
          <div key={w.title} className={styles.whatCard}>
            <div className={styles.whatIcon}>{w.icon}</div>
            <div className={styles.whatTitle}>{w.title}</div>
            <div className={styles.whatDesc}>{w.desc}</div>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
