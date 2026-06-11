import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import { projectDetailTabs, type ProjectTabKey } from '../../data/projectsCopy'
import { labels } from '../../data/labels'
import Tag from '../../components/common/Tag'
import ClientLabel from '../../components/common/ClientLabel'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import shared from '../../styles/common/shared.module.css'
import styles from './ProjectDetails.module.css'

export default function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<ProjectTabKey>('OVERVIEW')

  const project = projects.find(p => p.id === id) || projects[0]

  const infoRows = [
    { label: labels.role, value: project.role },
    { label: labels.duration, value: project.duration },
    { label: labels.teamSize, value: project.team },
    { label: labels.projectType, value: project.type },
  ]

  return (
    <PageWrapper>
      <Seo title={project.name} />
      <div className={styles.breadcrumb}>
        <span className={styles.breadcrumbLink} onClick={() => navigate('/projects')}>Projects</span>
        {' > '}{project.name}<br />
        <ClientLabel client={project.client} className={styles.breadcrumbClient} />
      </div>

      <h1 className={styles.detailTitle}>{project.name}</h1>

      <div className={styles.contentGrid}>
        <div>
          <div className={styles.preview}>{labels.projectDashboardPreview}</div>
          <div className={shared.projectTags}>
            {project.tags.map(t => <Tag key={t} label={t} />)}
          </div>

          <div className={styles.tabBar}>
            {projectDetailTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'OVERVIEW' && (
            <div className={styles.tabPanel}>
              <div className={styles.sidebarTitle}>{labels.techStack}</div>
              <div className={styles.techGrid}>
                <div>
                  <div className={styles.techLabel}>{labels.frontend}</div>
                  <div className={styles.techValue}>{project.tech.frontend}</div>
                  <div className={styles.techLabel}>{labels.database}</div>
                  <div className={styles.techValue}>{project.tech.database}</div>
                </div>
                <div>
                  <div className={styles.techLabel}>{labels.backend}</div>
                  <div className={styles.techValue}>{project.tech.backend}</div>
                  <div className={styles.techLabel}>{labels.testing}</div>
                  <div className={styles.techValue}>{project.tech.testing}</div>
                </div>
              </div>
              <div className={styles.featureList}>
                {project.features.map(f => (
                  <div key={f} className={shared.bulletRow}>
                    <span className={shared.bulletMarker}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'CHALLENGE' && (
            <div className={styles.tabPanelLg}>
              <p className={styles.tabPanelText}>{project.challenge}</p>
            </div>
          )}
          {activeTab === 'SOLUTION' && (
            <div className={styles.tabPanelLg}>
              <p className={styles.tabPanelText}>{project.solution}</p>
            </div>
          )}
          {activeTab === 'IMPACT' && (
            <div className={styles.tabPanelLg}>
              <p className={styles.tabPanelText}>{project.impact}</p>
              <div className={styles.impactMetrics}>
                {project.metrics.map(m => (
                  <div key={m.l} className={shared.metricCard}>
                    <div className={`${shared.metricValue} ${shared.metricValueSm}`}>{m.v}</div>
                    <div className={shared.metricLabel}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'GALLERY' && (
            <div className={styles.tabPanelEmpty}>
              <div className={styles.tabPanelText}>{labels.galleryComingSoon}</div>
            </div>
          )}
        </div>

        <div>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarTitle}>{labels.projectInfo}</div>
            {infoRows.map(row => (
              <div key={row.label} className={styles.sidebarRow}>
                <div className={styles.sidebarLabel}>{row.label}</div>
                <div className={styles.sidebarValue}>{row.value}</div>
              </div>
            ))}
          </div>
          <div className={styles.sidebarMetrics}>
            {project.metrics.map(m => (
              <div key={m.l} className={styles.sidebarMetric}>
                <div className={styles.sidebarMetricValue}>{m.v}</div>
                <div className={styles.sidebarMetricLabel}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
