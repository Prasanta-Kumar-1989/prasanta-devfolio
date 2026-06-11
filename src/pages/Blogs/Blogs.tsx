import { useState } from 'react'
import { blogs, blogFilters, blogsCopy } from '../../data/blogs'
import FilterTabs from '../../components/common/FilterTabs'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import styles from './Blogs.module.css'

export default function Blogs() {
  const [filter, setFilter] = useState('All')
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null)
  const filtered = filter === 'All' ? blogs : blogs.filter(b => b.category === filter)

  const toggleExpand = (title: string) => {
    setExpandedTitle(prev => (prev === title ? null : title))
  }

  return (
    <PageWrapper>
      <Seo title={blogsCopy.seoTitle} />
      <h1 className={styles.pageTitle}>{blogsCopy.pageTitle}</h1>
      <FilterTabs tabs={blogFilters} active={filter} onChange={setFilter} />
      {filtered.map(b => {
        const isExpanded = expandedTitle === b.title
        const hasTips = Boolean(b.tips?.length)
        const tipLabel = b.category === 'TypeScript' ? 'patterns' : 'tips'

        return (
          <article key={b.title} className={styles.blogEntry}>
            <div
              className={`${styles.blogCard} ${hasTips ? styles.blogCardExpandable : ''} ${isExpanded ? styles.blogCardExpanded : ''}`}
              onClick={hasTips ? () => toggleExpand(b.title) : undefined}
              onKeyDown={hasTips ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleExpand(b.title)
                }
              } : undefined}
              role={hasTips ? 'button' : undefined}
              tabIndex={hasTips ? 0 : undefined}
              aria-expanded={hasTips ? isExpanded : undefined}
            >
              <div className={styles.blogIcon}>{b.icon}</div>
              <div className={styles.blogInfo}>
                <div className={styles.blogTitle}>{b.title}</div>
                <div className={styles.blogDesc}>{b.desc}</div>
                <div className={styles.blogMeta}>
                  {b.date} &nbsp;• {b.readTime}
                  <span className={styles.blogTag}>{b.tag}</span>
                  {hasTips && (
                    <span className={styles.expandLabel}>
                      {isExpanded ? 'Show less ↑' : `Read ${b.tips!.length} ${tipLabel} ↓`}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {isExpanded && b.tips && (
              <ol className={styles.blogTips}>
                {b.tips.map((tip, index) => (
                  <li key={tip.title} className={styles.blogTip}>
                    <div className={styles.blogTipTitle}>
                      {index + 1}. {tip.title}
                    </div>
                    <p className={styles.blogTipDesc}>{tip.desc}</p>
                  </li>
                ))}
              </ol>
            )}
          </article>
        )
      })}
    </PageWrapper>
  )
}
