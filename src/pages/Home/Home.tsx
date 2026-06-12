import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import { profile, heroSkills, linkedInMetrics, trustedCompanies } from '../../data/profile'
import { downloadResume } from '../../utils/downloadResume'
import { homeCopy } from '../../data/home'
import { labels } from '../../data/labels'
import Tag from '../../components/common/Tag'
import ClientLabel from '../../components/common/ClientLabel'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import shared from '../../styles/common/shared.module.css'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const featured = projects.slice(0, 2)

  return (
    <PageWrapper>
      <Seo title={homeCopy.seoTitle} description={homeCopy.seoDescription} />

      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>{profile.greeting}</div>
          <div className={styles.heroName}>
            <div>{profile.firstName}</div>
            <div><span>{profile.lastName}</span></div>
          </div>
          <div className={styles.heroSubtitle}>{profile.title}</div>
          <div className={styles.heroSummary}>{profile.summary}</div>
          <div className={styles.skillsRow}>
            {heroSkills.map(s => (
              <span key={s} className={styles.skillPill}>{s}</span>
            ))}
          </div>
          <div className={styles.actionRow}>
            <button type="button" className={styles.primaryButton} onClick={downloadResume}>
              {labels.downloadResume}
            </button>
            <button className={styles.secondaryButton} onClick={() => navigate('/contact')}>
              {labels.contactMe}
            </button>
          </div>
        </div>
        <div className={styles.heroAvatarCard}>
          <img
            src={profile.photoUrl}
            alt={profile.photoAlt}
            className={styles.avatarPhoto}
          />
        </div>
      </div>

      <div className={styles.metricsGrid}>
        {linkedInMetrics.map(m => (
          <div key={m.label} className={styles.metricCard}>
            <div className={styles.metricValue}>{m.value}</div>
            <div className={styles.metricLabel}>{m.label}</div>
          </div>
        ))}
        <div className={`${styles.metricCard} ${shared.metricsGridCenter}`}>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className={shared.externalLink}>
            {labels.viewLinkedInProfile}
          </a>
        </div>
      </div>

      <div className={styles.featureHeader}>
        <div className={styles.featureLabel}>{labels.featuredProjects}</div>
        <button className={styles.featureAction} onClick={() => navigate('/projects')}>
          {labels.viewAllProjects}
        </button>
      </div>

      <div className={styles.featuredProjectsGrid}>
        {featured.map(p => (
          <div key={p.id} className={styles.projectCard} onClick={() => navigate(`/projects/${p.id}`)}>
            <ClientLabel client={p.client} className={styles.projectClient} />
            <div className={styles.projectName}>{p.name}</div>
            <div className={styles.projectDescription}>{p.desc.substring(0, 100)}...</div>
            <div className={styles.projectTags}>
              {p.tags.map(t => <Tag key={t} label={t} />)}
            </div>
            <span className={styles.projectView}>{labels.viewCaseStudy}</span>
          </div>
        ))}
      </div>

      <div className={styles.trustedBar}>
        <p className={styles.trustedLabel}>{labels.trustedBy}</p>
        <div className={styles.trustedLogos}>
          {trustedCompanies.map(c => (
            <div key={c.name} className={styles.trustedLogoItem} title={c.name}>
              <img src={c.logo} alt={c.name} className={styles.trustedLogo} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
