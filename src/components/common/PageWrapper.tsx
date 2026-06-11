import shared from '../../styles/common/shared.module.css'

interface PageWrapperProps { children: React.ReactNode }

export default function PageWrapper({ children }: PageWrapperProps) {
  return <div className={shared.pageWrapper}>{children}</div>
}
