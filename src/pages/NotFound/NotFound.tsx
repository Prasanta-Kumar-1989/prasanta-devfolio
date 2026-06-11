import { useNavigate } from 'react-router-dom'
import { notFoundCopy } from '../../data/notFound'
import { labels } from '../../data/labels'
import shared from '../../styles/common/shared.module.css'
import styles from './NotFound.module.css'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.code}>{notFoundCopy.code}</div>
      <div className={styles.title}>{notFoundCopy.title}</div>
      <div className={styles.description}>{notFoundCopy.description}</div>
      <button className={`${shared.primaryButton} ${styles.button}`} onClick={() => navigate('/')}>
        {labels.goHome}
      </button>
    </div>
  )
}
