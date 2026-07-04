import { NavLink, useLocation } from 'react-router-dom'
import { Home, Palette, Sparkles, ShoppingBag, User, type LucideIcon } from 'lucide-react'

type TabKey = 'home' | 'library' | 'mirror' | 'mall' | 'profile'

const TABS: { key: TabKey; to: string; label: string; icon: LucideIcon }[] = [
  { key: 'home', to: '/', label: '首页', icon: Home },
  { key: 'library', to: '/library/card', label: '颜库', icon: Palette },
  { key: 'mirror', to: '/mirror', label: '焕新', icon: Sparkles },
  { key: 'mall', to: '/mall', label: '市集', icon: ShoppingBag },
  { key: 'profile', to: '/profile', label: '我的', icon: User },
]

function isActive(pathname: string, to: string): boolean {
  if (to === '/') return pathname === '/'
  return pathname.startsWith(to)
}

interface TabBarProps {
  /** Use dark (camera) variant on the Mirror page */
  dark?: boolean
}

export default function TabBar({ dark = false }: TabBarProps) {
  const location = useLocation()
  const activeTab = TABS.find((t) => isActive(location.pathname, t.to))?.key ?? 'home'

  if (dark) {
    return (
      <nav
        className="absolute bottom-0 left-0 right-0 z-[120] flex justify-center"
        style={{ paddingBottom: 'var(--mp-safe-bottom)' }}
      >
        <div
          className="inline-flex items-center"
          style={{
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 'var(--mp-radius-tab)',
            height: 'var(--mp-tab-bar-height)',
            boxShadow: 'var(--mp-shadow-lg)',
          }}
        >
          {TABS.map((tab) => {
            const Icon = tab.icon
            const active = activeTab === tab.key
            const isCenter = tab.key === 'mirror'
            if (isCenter) {
              return (
                <NavLink
                  key={tab.key}
                  to={tab.to}
                  className="flex flex-col items-center justify-center px-4 py-1.5 min-w-[56px] -mt-3 rounded-full"
                  style={{
                    background: 'var(--mp-gradient-primary)',
                    color: 'white',
                    boxShadow: 'var(--mp-shadow-gp)',
                  }}
                >
                  <Icon size={20} />
                  <span className="mt-0.5" style={{ fontSize: 'var(--mp-text-small)' }}>
                    {tab.label}
                  </span>
                </NavLink>
              )
            }
            return (
              <NavLink
                key={tab.key}
                to={tab.to}
                className="flex flex-col items-center justify-center px-4 py-1.5 min-w-[56px]"
                style={{ color: active ? '#fff' : 'rgba(255,255,255,0.5)' }}
              >
                <Icon size={20} />
                <span className="mt-0.5" style={{ fontSize: 'var(--mp-text-small)' }}>
                  {tab.label}
                </span>
              </NavLink>
            )
          })}
        </div>
      </nav>
    )
  }

  return (
    <nav
      className="absolute bottom-3 left-1/2 z-[100] -translate-x-1/2"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)', width: 'min(320px, calc(100% - 32px))' }}
    >
      <div
        className="flex items-center justify-around"
        style={{
          background: 'var(--mp-bg-white)',
          borderRadius: 'var(--mp-radius-tab)',
          padding: '6px 8px',
          boxShadow: 'var(--mp-shadow-lg)',
          border: '1px solid var(--mp-border-light)',
        }}
      >
        {TABS.map((tab) => {
          const Icon = tab.icon
          const active = activeTab === tab.key
          const isCenter = tab.key === 'mirror'
          if (isCenter) {
            return (
              <NavLink
                key={tab.key}
                to={tab.to}
                aria-label={tab.label}
                className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-[var(--mp-radius-md)] whitespace-nowrap"
              >
                <div
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white -mt-3"
                  style={{ background: 'var(--mp-gradient-primary)', boxShadow: 'var(--mp-shadow-btn)' }}
                >
                  <Icon size={20} />
                </div>
                <span className="text-[10px] -mt-0.5" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-tertiary)' }}>
                  {tab.label}
                </span>
              </NavLink>
            )
          }
          return (
            <NavLink
              key={tab.key}
              to={tab.to}
              aria-label={tab.label}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-[var(--mp-radius-md)] whitespace-nowrap"
              style={active ? {
                background: 'var(--mp-gradient-primary)',
                color: 'white',
                boxShadow: 'var(--mp-shadow-sm)',
              } : { color: 'var(--mp-text-tertiary)' }}
            >
              <Icon size={20} />
              <span className="text-[10px]" style={{ fontFamily: 'var(--mp-font-cn)' }}>
                {tab.label}
              </span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
