import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Settings, Sparkles, RefreshCw, Heart, Crown, ScanFace, X, type LucideIcon } from 'lucide-react'
import Layout from '../components/Layout'
import { useApp } from '../components/AppState'
import { IMAGE, PROFILE_ACTIVITIES, PROFILE_MENU } from '../data/mockData'

const ICONS: Record<string, LucideIcon> = {
  settings: Settings,
  sparkles: Sparkles,
  'refresh-cw': RefreshCw,
  heart: Heart,
  crown: Crown,
  'scan-face': ScanFace,
}

const MENU_ROUTES: Record<string, string> = {
  'my-looks': '/library/waterfall',
  'refresh-history': '/mirror',
  favorites: '/library/waterfall',
  vip: '/mall',
  skin: '/mirror',
  settings: '',
}

export default function Profile() {
  const navigate = useNavigate()
  const { toast } = useApp()
  const [editOpen, setEditOpen] = useState(false)
  const [name, setName] = useState('小美妆达人')

  const handleMenu = (id: string) => {
    const route = MENU_ROUTES[id]
    if (route) {
      navigate(route)
    } else {
      toast('设置功能开发中')
    }
  }

  return (
    <Layout>
      {/* Profile Header */}
      <section className="relative overflow-hidden" style={{ minHeight: 220 }}>
        <div className="absolute inset-0">
          <img
            src={IMAGE.userAvatar}
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: 'blur(18px) brightness(0.6)', transform: 'scale(1.1)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(74,37,17,0.2) 0%, rgba(74,37,17,0.7) 70%, rgba(74,37,17,0.95) 100%)' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center pt-10 pb-6 px-5">
          <button
            onClick={() => toast('打开设置')}
            className="absolute top-3 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
            aria-label="设置"
          >
            <Settings size={20} style={{ color: 'rgba(255,255,255,0.85)' }} />
          </button>

          <div className="rounded-full p-[4px]" style={{ background: 'var(--mp-gradient-primary)' }}>
            <img
              src={IMAGE.userAvatar}
              alt="用户头像"
              className="h-[72px] w-[72px] rounded-full object-cover"
              style={{ border: '3px solid rgba(255,255,255,0.9)' }}
            />
          </div>

          <h1 className="mt-3 text-[18px] font-semibold text-white" style={{ fontFamily: 'var(--mp-font-cn)' }}>
            {name}
          </h1>
          <p className="mt-1 text-[12px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            @xiaomei妆伴ID
          </p>

          <button
            onClick={() => setEditOpen(true)}
            className="mt-4 inline-flex items-center justify-center px-5 h-8 rounded-full text-[13px] font-medium active:scale-95"
            style={{
              border: '1px solid rgba(255,255,255,0.5)',
              color: 'rgba(255,255,255,0.9)',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 'var(--mp-radius-pill)',
              fontFamily: 'var(--mp-font-cn)',
              transition: 'transform 0.15s',
            }}
          >
            编辑资料
          </button>
        </div>
      </section>

      {/* GP Balance Card */}
      <section className="px-4 -mt-3 relative z-20">
        <div className="rounded-[24px] p-5" style={{ background: 'var(--mp-gradient-gp)', boxShadow: 'var(--mp-shadow-gp)' }}>
          <div className="flex items-center justify-between">
            <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
              焕新值
            </span>
            <button
              onClick={() => toast('打开充值面板')}
              className="inline-flex items-center justify-center px-4 h-7 rounded-full text-[12px] font-medium active:scale-95"
              style={{ background: 'rgba(255,255,255,0.95)', color: 'var(--mp-text-primary)', borderRadius: 'var(--mp-radius-pill)', transition: 'transform 0.15s' }}
            >
              充值
            </button>
          </div>
          <p
            className="mt-2 text-[36px] font-bold text-white"
            style={{ fontFamily: 'var(--mp-font-display)', fontVariantNumeric: 'tabular-nums' }}
          >
            2,580
          </p>
          <p className="mt-1 text-[12px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            本月消耗 320 点
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="px-4 mt-4">
        <div className="flex items-center justify-around py-3 rounded-[16px]" style={{ background: 'var(--mp-bg-white)' }}>
          {[
            { num: '128', label: '收藏' },
            { num: '56', label: '关注' },
            { num: '234', label: '粉丝' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <span className="text-[20px] font-bold" style={{ fontFamily: 'var(--mp-font-display)', color: 'var(--mp-text-primary)' }}>
                  {stat.num}
                </span>
                <span className="mt-0.5 text-[11px]" style={{ color: 'var(--mp-text-tertiary)' }}>
                  {stat.label}
                </span>
              </div>
              {i < 2 && <div className="h-8 w-px mx-4" style={{ background: 'var(--mp-border-light)' }} />}
            </div>
          ))}
        </div>
      </section>

      {/* Feature Menu Grid */}
      <section className="px-4 mt-5">
        <div className="grid grid-cols-3 gap-3">
          {PROFILE_MENU.map((item) => {
            const Icon = ICONS[item.icon] ?? Settings
            return (
              <button
                key={item.id}
                onClick={() => handleMenu(item.id)}
                className="flex flex-col items-center gap-2 py-4 rounded-[16px] active:scale-95 mp-fade-in"
                style={{ background: 'var(--mp-bg-white)', transition: 'transform 0.15s' }}
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: item.gradient }}
                >
                  <Icon size={18} style={{ color: item.iconColor }} />
                </div>
                <span className="text-[13px] truncate" style={{ color: 'var(--mp-text-secondary)' }}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="px-4 mt-6">
        <h2 className="text-[15px] font-semibold mb-3" style={{ color: 'var(--mp-text-primary)', fontFamily: 'var(--mp-font-cn)' }}>
          最近动态
        </h2>
        <div className="flex flex-col gap-3">
          {PROFILE_ACTIVITIES.map((a) => {
            const Icon = ICONS[a.icon] ?? Settings
            return (
              <div
                key={a.id}
                onClick={() => toast('查看详情')}
                className="flex items-center gap-3 rounded-[16px] p-3 active:scale-[0.99] mp-fade-in"
                style={{ background: 'var(--mp-bg-white)', boxShadow: 'var(--mp-shadow-xs)', transition: 'transform 0.15s', cursor: 'pointer' }}
              >
                <div
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ background: a.gradient }}
                >
                  <Icon size={18} style={{ color: a.iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium truncate" style={{ color: 'var(--mp-text-primary)', fontFamily: 'var(--mp-font-cn)' }}>
                    {a.text}
                  </p>
                  <p className="text-[11px] mt-0.5 truncate" style={{ color: 'var(--mp-text-tertiary)' }}>
                    {a.time}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Edit Profile Modal */}
      {editOpen && (
        <div
          className="absolute inset-0 z-[300] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setEditOpen(false)}
        >
          <div
            className="w-full max-w-sm p-5 mp-scale-in"
            style={{ background: 'var(--mp-bg-white)', borderRadius: 'var(--mp-radius-xl)', maxWidth: 340 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-primary)' }}>
                编辑资料
              </h3>
              <button onClick={() => setEditOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full" style={{ background: 'var(--mp-bg)' }} aria-label="关闭">
                <X size={16} style={{ color: 'var(--mp-text-tertiary)' }} />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs mb-1 block" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
                  昵称
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm outline-none"
                  style={{
                    borderRadius: 'var(--mp-radius-md)',
                    border: '1px solid var(--mp-border)',
                    background: 'var(--mp-bg)',
                    color: 'var(--mp-text-primary)',
                    fontFamily: 'var(--mp-font-cn)',
                  }}
                />
              </div>
              <div>
                <label className="text-xs mb-1 block" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
                  妆伴ID
                </label>
                <input
                  value="@xiaomei妆伴ID"
                  readOnly
                  className="w-full px-3 py-2 text-sm outline-none"
                  style={{
                    borderRadius: 'var(--mp-radius-md)',
                    border: '1px solid var(--mp-border)',
                    background: 'var(--mp-bg)',
                    color: 'var(--mp-text-tertiary)',
                    fontFamily: 'var(--mp-font-cn)',
                  }}
                />
              </div>
              <button
                onClick={() => {
                  setEditOpen(false)
                  toast('资料已保存')
                }}
                className="mt-2 py-2.5 rounded-full text-white text-sm font-semibold active:scale-95"
                style={{ background: 'var(--mp-gradient-primary)', fontFamily: 'var(--mp-font-cn)', boxShadow: 'var(--mp-shadow-btn)', transition: 'transform 0.15s' }}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
