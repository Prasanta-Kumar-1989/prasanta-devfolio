import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects, projectFilters } from '../../data/projects'
import { projectsCopy } from '../../data/projectsCopy'
import { labels } from '../../data/labels'
import FilterTabs from '../../components/common/FilterTabs'
import Tag from '../../components/common/Tag'
import ClientLabel from '../../components/common/ClientLabel'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import shared from '../../styles/common/shared.module.css'
import styles from './Projects.module.css'

export default function Projects() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.categories.includes(filter))

  return (
    <PageWrapper>
      <Seo title={projectsCopy.seoTitle} />
      <h1 className={styles.pageTitle}>{projectsCopy.pageTitle}</h1>
      <FilterTabs tabs={projectFilters} active={filter} onChange={setFilter} />
      {filtered.map(p => (
        <div key={p.id} className={styles.projectCard} onClick={() => navigate(`/projects/${p.id}`)}>
          <div className={styles.projectInfo}>
            <ClientLabel client={p.client} className={shared.projectClient} />
            <div className={shared.projectName}>{p.name}</div>
            <div className={styles.projectDesc}>{p.desc}</div>
            <div className={shared.projectTags}>
              {p.tags.map(t => <Tag key={t} label={t} />)}
            </div>
            <span className={styles.projectView}>{labels.viewCaseStudy}</span>
          </div>
          <div className={styles.projectIcon}>
            <svg className={styles.projectIconSvg} width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
            </svg>
          </div>
        </div>
      ))}
    </PageWrapper>
  )
}
