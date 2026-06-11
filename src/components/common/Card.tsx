interface CardProps { children: React.ReactNode; style?: React.CSSProperties; onClick?: () => void }
export default function Card({ children, style, onClick }: CardProps) {
  return (
    <div onClick={onClick} style={{
      background: 'var(--bg2)', border: '1px solid var(--border)',
      borderRadius: 6, padding: 20, cursor: onClick ? 'pointer' : undefined, ...style,
    }}>
      {children}
    </div>
  )
}
