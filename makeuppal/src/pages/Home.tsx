import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, Search, ScanFace, TrendingUp, Palette, Sparkles, ShoppingBag, Heart, ChevronRight } from 'lucide-react'
import Layout from '../components/Layout'
import { useApp } from '../components/AppState'
import { IMAGE, FEEDS } from '../data/mockData'

const BANNERS = [
  { id: 0, image: IMAGE.banner, title: '夏日美妆季' },
  { id: 1, image: IMAGE.look3, title: '复古灵感' },
  { id: 2, image: IMAGE.look4, title: '玫瑰色调' },
  { id: 3, image: IMAGE.look5, title: '桃花妆容' },
]

const QUICK_ENTRIES = [
  { key: 'library', label: '颜库', icon: Palette, color: 'var(--mp-rose-gold)', bg: 'rgba(196, 149, 106, 0.10)', to: '/library/card' },
  { key: 'mirror', label: '焕新', icon: Sparkles, color: 'var(--mp-sunset)', bg: 'rgba(255, 140, 66, 0.10)', to: '/mirror' },
  { key: 'mall', label: '市集', icon: ShoppingBag, color: 'var(--mp-rose-gold)', bg: 'rgba(196, 149, 106, 0.10)', to: '/mall' },
  { key: 'chat', label: '闺蜜', icon: Heart, color: 'var(--mp-sunset)', bg: 'rgba(255, 140, 66, 0.10)', to: '/chat' },
] as const

export default function Home() {
  const navigate = useNavigate()
  const { toast } = useApp()
  const [bannerIdx, setBannerIdx] = useState(0)

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIdx((i) => (i + 1) % BANNERS.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <Layout showFab onFabClick={() => navigate('/chat')}>
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 h-14 flex items-center justify-between px-4"
        style={{
          background: 'rgba(255,246,236,0.85)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        <span
          className="text-lg font-bold tracking-tight"
          style={{ color: 'var(--mp-rose-gold)', fontFamily: 'var(--mp-font-cn)' }}
        >
          妆伴
        </span>
        <div className="flex items-center gap-3">
          <button onClick={() => toast('暂无新通知')} className="inline-flex items-center justify-center w-9 h-9" aria-label="通知">
            <Bell size={20} style={{ color: 'var(--mp-text-secondary)' }} />
          </button>
          <button onClick={() => navigate('/mall')} className="inline-flex items-center justify-center w-9 h-9" aria-label="搜索">
            <Search size={20} style={{ color: 'var(--mp-text-secondary)' }} />
          </button>
        </div>
      </header>

      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* FACE CONTOUR CARD */}
        <section
          className="rounded-3xl p-4 flex items-center gap-4"
          style={{ background: 'var(--mp-bg-white)', borderRadius: 'var(--mp-radius-xl)', boxShadow: 'var(--mp-shadow-md)' }}
        >
          <div
            className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--mp-bg)' }}
          >
            <ScanFace size={28} style={{ color: 'var(--mp-rose-gold)' }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" style={{ color: 'var(--mp-text-primary)', fontFamily: 'var(--mp-font-cn)' }}>
              面部轮廓分析
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
              轮廓匹配度{' '}
              <span className="font-semibold" style={{ color: 'var(--mp-rose-gold)', fontFamily: 'var(--mp-font-display)' }}>
                92
              </span>
              <span style={{ color: 'var(--mp-text-tertiary)' }}>/100</span>
            </p>
          </div>
          <button
            onClick={() => navigate('/mirror')}
            className="shrink-0 px-5 py-2 text-xs font-semibold text-white active:scale-95"
            style={{
              background: 'var(--mp-gradient-primary)',
              borderRadius: 'var(--mp-radius-pill)',
              boxShadow: 'var(--mp-shadow-btn)',
              fontFamily: 'var(--mp-font-cn)',
              transition: 'transform 0.15s',
            }}
          >
            开始分析
          </button>
        </section>

        {/* GP INDEX CARD */}
        <section
          className="rounded-3xl p-5"
          style={{ background: 'var(--mp-gradient-gp)', borderRadius: 'var(--mp-radius-xl)', boxShadow: 'var(--mp-shadow-gp)' }}
        >
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-medium text-white/80" style={{ fontFamily: 'var(--mp-font-cn)' }}>
              GP 指数
            </span>
            <span className="text-xs text-white/60" style={{ fontFamily: 'var(--mp-font-cn)' }}>
              综合美丽评分
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span
              className="text-5xl font-bold text-white"
              style={{ fontFamily: 'var(--mp-font-display)', fontVariantNumeric: 'tabular-nums' }}
            >
              2,580
            </span>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <TrendingUp size={12} className="text-white/70" />
            <span className="text-xs text-white/70" style={{ fontFamily: 'var(--mp-font-cn)' }}>
              较上周{' '}
              <span className="text-white font-semibold" style={{ fontFamily: 'var(--mp-font-display)' }}>
                +120
              </span>
            </span>
          </div>
        </section>

        {/* BANNER CAROUSEL */}
        <section>
          <div className="relative rounded-2xl overflow-hidden" style={{ borderRadius: 'var(--mp-radius-lg)' }}>
            <div className="relative h-40">
              {BANNERS.map((b, i) => (
                <button
                  key={b.id}
                  onClick={() => setBannerIdx(i)}
                  className="absolute inset-0 w-full h-full transition-opacity duration-500"
                  style={{ opacity: i === bannerIdx ? 1 : 0, zIndex: i === bannerIdx ? 2 : 1 }}
                  aria-label={b.title}
                >
                  <img src={b.image} alt={b.title} className="w-full h-40 object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-1.5 mt-3">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setBannerIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === bannerIdx ? 20 : 6,
                  height: 6,
                  background: i === bannerIdx ? 'var(--mp-rose-gold)' : 'var(--mp-border)',
                }}
                aria-label={`第 ${i + 1} 张`}
              />
            ))}
          </div>
        </section>

        {/* QUICK ENTRY GRID */}
        <section>
          <div className="grid grid-cols-4 gap-2">
            {QUICK_ENTRIES.map((entry) => {
              const Icon = entry.icon
              return (
                <button
                  key={entry.key}
                  onClick={() => navigate(entry.to)}
                  className="flex flex-col items-center gap-1.5 py-2 active:scale-95"
                  style={{ transition: 'transform 0.15s' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: entry.bg }}
                  >
                    <Icon size={24} style={{ color: entry.color }} />
                  </div>
                  <span className="text-xs font-medium" style={{ color: 'var(--mp-text-secondary)', fontFamily: 'var(--mp-font-cn)' }}>
                    {entry.label}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* RECOMMENDED FEED */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold" style={{ color: 'var(--mp-text-primary)', fontFamily: 'var(--mp-font-cn)' }}>
              为你推荐
            </h2>
            <button
              onClick={() => navigate('/library/waterfall')}
              className="text-xs flex items-center"
              style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}
            >
              查看全部 <ChevronRight size={12} className="inline-block align-middle" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1">
            {FEEDS.map((feed) => (
              <article
                key={feed.id}
                onClick={() => toast(`查看「${feed.title}」`)}
                className="shrink-0 w-44 rounded-2xl overflow-hidden active:scale-[0.98] mp-fade-in"
                style={{
                  borderRadius: 'var(--mp-radius-lg)',
                  boxShadow: 'var(--mp-shadow-xs)',
                  background: 'var(--mp-bg-white)',
                  transition: 'transform 0.15s',
                  cursor: 'pointer',
                }}
              >
                <img src={feed.cover} alt={feed.title} className="w-full h-24 object-cover" />
                <div className="p-3">
                  <p className="text-xs font-semibold truncate" style={{ color: 'var(--mp-text-primary)', fontFamily: 'var(--mp-font-cn)' }}>
                    {feed.title}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={feed.avatar} alt={feed.author} className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-xs truncate" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
                      {feed.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Heart size={12} style={{ color: 'var(--mp-rose-gold)' }} />
                    <span className="text-xs" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-display)' }}>
                      {feed.likes}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
