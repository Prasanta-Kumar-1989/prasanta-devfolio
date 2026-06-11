import { useState } from 'react'
import { blogs, blogFilters, blogsCopy } from '../../data/blogs'
import { profile } from '../../data/profile'
import { labels } from '../../data/labels'
import FilterTabs from '../../components/common/FilterTabs'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import shared from '../../styles/common/shared.module.css'
import styles from './Blogs.module.css'

export default function Blogs() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? blogs : blogs.filter(b => b.category === filter)

  return (
    <PageWrapper>
      <Seo title={blogsCopy.seoTitle} />
      <h1 className={styles.pageTitle}>{blogsCopy.pageTitle}</h1>
      <FilterTabs tabs={blogFilters} active={filter} onChange={setFilter} />
      {filtered.map(b => (
        <div key={b.title} className={styles.blogCard}>
          <div className={styles.blogIcon}>{b.icon}</div>
          <div className={styles.blogInfo}>
            <div className={styles.blogTitle}>{b.title}</div>
            <div className={styles.blogDesc}>{b.desc}</div>
            <div className={styles.blogMeta}>
              {b.date} &nbsp;• {b.readTime}
              <span className={styles.blogTag}>{b.tag}</span>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.blogLink}>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className={shared.externalLink}>
          {labels.viewAllArticles}
        </a>
      </div>
    </PageWrapper>
  )
}
