import styles from './Tag.module.css'

interface TagProps { label: string; variant?: 'default' | 'green' }

export default function Tag({ label, variant = 'default' }: TagProps) {
  return (
    <span className={`${styles.tag} ${variant === 'green' ? styles.green : styles.default}`}>
      {label}
    </span>
  )
}
