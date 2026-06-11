import { getClientLogo } from '../../data/clients'
import styles from './ClientLabel.module.css'

interface ClientLabelProps {
  client: string
  className?: string
  style?: React.CSSProperties
}

export default function ClientLabel({ client, className, style }: ClientLabelProps) {
  const logo = getClientLogo(client)

  if (!logo) {
    return <span className={className} style={style}>{client}</span>
  }

  return (
    <span className={`${styles.clientRow} ${className ?? ''}`} style={style}>
      <img src={logo} alt="" className={styles.logo} aria-hidden="true" />
      {client}
    </span>
  )
}
