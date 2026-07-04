import type { ReactNode } from 'react'
import TabBar from './TabBar'

interface LayoutProps {
  children: ReactNode
  /** Show floating AI FAB button */
  showFab?: boolean
  onFabClick?: () => void
  /** Hide tab bar (e.g. on chat page) */
  hideTabBar?: boolean
  /** Dark tab bar variant */
  darkTab?: boolean
}

export default function Layout({
  children,
  showFab = false,
  onFabClick,
  hideTabBar = false,
  darkTab = false,
}: LayoutProps) {
  return (
    <div className="device-frame">
      <main className="device-scroll" style={{ paddingBottom: '5.5rem' }}>
        {children}
      </main>
      {showFab && (
        <button
          onClick={onFabClick}
          aria-label="AI 助手"
          className="absolute z-[110] flex items-center justify-center w-[52px] h-[52px] rounded-full text-white"
          style={{
            background: 'var(--mp-gradient-primary)',
            boxShadow: 'var(--mp-shadow-btn)',
            bottom: '5.5rem',
            right: '1rem',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </button>
      )}
      {!hideTabBar && <TabBar dark={darkTab} />}
    </div>
  )
}
