import { formatExperienceDuration, getExperienceDuration } from '../../utils/experienceDuration'
import styles from './ExperienceDurationValue.module.css'

interface ExperienceDurationValueProps {
  color?: string
}

export default function ExperienceDurationValue({ color = 'var(--green)' }: ExperienceDurationValueProps) {
  const duration = getExperienceDuration()

  return (
    <div className={styles.root} style={{ color }}>
      {formatExperienceDuration(duration)}
    </div>
  )
}
