import { skillCategories } from '../../data/skills'
import { skillsCopy, skillColorMap } from '../../data/skillsCopy'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <PageWrapper>
      <Seo title={skillsCopy.seoTitle} />
      <h1 className={styles.pageTitle}>{skillsCopy.pageTitle}</h1>
      <p className={styles.pageDesc}>{skillsCopy.pageDesc}</p>
      <div className={styles.skillsGrid}>
        {skillCategories.map(cat => {
          const accent = skillColorMap[cat.color] || 'var(--green)'
          return (
            <div key={cat.name} className={styles.skillCard}>
              <div className={styles.skillTitle} style={{ borderBottomColor: accent }}>
                {cat.name}
              </div>
              {cat.items.map(item => (
                <div key={item} className={styles.skillItem}>
                  <div className={styles.skillBullet} style={{ background: accent }} />
                  {item}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </PageWrapper>
  )
}
