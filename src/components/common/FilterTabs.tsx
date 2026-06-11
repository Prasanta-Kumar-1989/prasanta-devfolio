import shared from '../../styles/common/shared.module.css'

interface FilterTabsProps { tabs: string[]; active: string; onChange: (t: string) => void }

export default function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className={shared.filterTabs}>
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`${shared.filterTab} ${active === t ? shared.filterTabActive : ''}`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
