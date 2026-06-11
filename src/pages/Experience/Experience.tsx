import { useState } from 'react'
import { experience } from '../../data/experience'
import { experienceCopy } from '../../data/experienceCopy'
import { labels } from '../../data/labels'
import Tag from '../../components/common/Tag'
import ClientLabel from '../../components/common/ClientLabel'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import shared from '../../styles/common/shared.module.css'
import styles from './Experience.module.css'

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experience[active]

  return (
    <PageWrapper>
      <Seo title={experienceCopy.seoTitle} />
      <h1 className={styles.pageTitle}>{experienceCopy.pageTitle}</h1>

      <div className={styles.experienceGrid}>
        <div className={styles.timelineList}>
          {experience.map((e, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`${styles.timelineItem} ${active === i ? styles.timelineItemActive : ''}`}
            >
              <div className={styles.timelineItemDate}>{e.date}</div>
              <div className={styles.timelineItemTitle}>{e.title}</div>
            </div>
          ))}
        </div>

        <div className={styles.detailPanel}>
          <div className={styles.detailDate}>{exp.date}</div>
          <div className={styles.detailTitle}>{exp.title}</div>
          <div className={styles.detailMeta}>
            <ClientLabel client={exp.company} className={styles.detailCompany} />
            {exp.project && (
              <div className={styles.detailProject}>Project: {exp.project}</div>
            )}
          </div>
          {exp.bullets.map((b, i) => (
            <div key={i} className={shared.bulletRow}>
              <span className={shared.bulletMarker}>•</span> {b}
            </div>
          ))}
          <div className={shared.highlightBox}>
            <div className={shared.highlightTitle}>{labels.moreRolesAtCompany}</div>
            <div className={shared.tagRow}>
              {exp.tags.map(t => <Tag key={t} label={t} variant="green" />)}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
