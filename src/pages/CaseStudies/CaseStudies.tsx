import { useNavigate } from 'react-router-dom'
import { caseStudies, caseStudiesCopy } from '../../data/caseStudies'
import { labels } from '../../data/labels'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import ClientLabel from '../../components/common/ClientLabel'
import styles from './CaseStudies.module.css'

export default function CaseStudies() {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <Seo title={caseStudiesCopy.seoTitle} />
      <h1 className={styles.pageTitle}>
        {caseStudiesCopy.pageTitle} <em>{caseStudiesCopy.pageTitleEmphasis}</em>
      </h1>
      <div className={styles.caseGrid}>
        {caseStudies.map(c => (
          <div key={c.id} className={styles.caseCard} style={{ borderTop: `3px solid ${c.accent}` }}>
            <div className={styles.caseHeader}>
              <ClientLabel client={c.client} className={styles.caseClient} style={{ color: c.accent }} />
              <div className={styles.caseTitle}>{c.title}</div>
            </div>
            <div className={styles.casePreview}>{labels.projectScreenshotPreview}</div>
            <div className={styles.caseBody}>
              <div className={styles.caseSection}>
                <div className={styles.caseSectionTitle} style={{ color: c.accent }}>{labels.challenge}</div>
                <div className={styles.caseSectionText}>{c.challenge}</div>
              </div>
              <div className={styles.caseSection}>
                <div className={styles.caseSectionTitle} style={{ color: c.accent }}>{labels.solution}</div>
                <div className={styles.caseSectionText}>{c.solution}</div>
              </div>
              <div className={styles.caseMetricsGrid}>
                {c.metrics.map(m => (
                  <div key={m.label} className={styles.caseMetric}>
                    <div className={styles.caseMetricValue} style={{ color: c.accent }}>{m.value}</div>
                    <div className={styles.caseMetricLabel}>{m.label}</div>
                  </div>
                ))}
              </div>
              <button className={styles.caseButton} style={{ color: c.accent }} onClick={() => navigate(`/projects/${c.id}`)}>
                {labels.readCaseStudy}
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
