import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, LayoutGrid, ChevronDown, SlidersHorizontal, Heart, Sparkles } from 'lucide-react'
import Layout from '../components/Layout'
import { useApp } from '../components/AppState'
import { LOOKS, LIBRARY_CATEGORIES } from '../data/mockData'

const SORT_OPTIONS = [
  { id: 'hot', label: '最热' },
  { id: 'new', label: '最新' },
  { id: 'likes', label: '最受欢迎' },
] as const

const DIFFICULTY_COLORS: Record<string, string> = {
  success: 'var(--mp-success)',
  warning: 'var(--mp-warning)',
  error: 'var(--mp-error)',
}

const TAG_COLORS: Record<string, string> = {
  'rose-gold': 'var(--mp-rose-gold)',
  sunset: 'var(--mp-sunset)',
  champagne: 'var(--mp-champagne)',
}

export default function LibraryWaterfall() {
  const navigate = useNavigate()
  const { toast, favorites, toggleFavorite } = useApp()
  const [activeCat, setActiveCat] = useState<string>('all')
  const [sortOpen, setSortOpen] = useState(false)
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]['id']>('hot')

  const filtered = useMemo(() => {
    let list = activeCat === 'all' ? LOOKS : LOOKS.filter((l) => l.category === activeCat)
    if (sort === 'likes') {
      list = [...list].sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes))
    } else if (sort === 'new') {
      list = [...list].reverse()
    }
    // Duplicate so the masonry always has plenty of cards
    return [...list, ...list]
  }, [activeCat, sort])

  // Split into two columns for stable masonry (avoid layout jumps when images load).
  const columns = useMemo(() => {
    const cols: typeof filtered[] = [[], []]
    filtered.forEach((item, i) => cols[i % 2].push(item))
    return cols
  }, [filtered])

  const handleFav = (id: number, title: string) => {
    const added = toggleFavorite(id)
    toast(added ? `已收藏「${title}」` : '已取消收藏')
  }

  return (
    <Layout>
      {/* Top Bar */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-4 h-14"
        style={{
          background: 'color-mix(in srgb, var(--mp-bg) 92%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <button
          onClick={() => navigate('/library/card')}
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg"
          style={{ color: 'var(--mp-text-primary)' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-base font-semibold tracking-tight" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-primary)' }}>
          颜库
        </h1>
        <button
          onClick={() => navigate('/library/card')}
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg"
          style={{ color: 'var(--mp-text-primary)' }}
          aria-label="切换为卡片模式"
        >
          <LayoutGrid size={20} />
        </button>
      </header>

      {/* Category Tabs */}
      <nav className="px-4 pt-2 pb-1">
        <div className="flex gap-1 overflow-x-auto no-scrollbar py-1 px-1">
          {LIBRARY_CATEGORIES.map((cat) => {
            const active = activeCat === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className="shrink-0 whitespace-nowrap px-4 py-1.5 text-xs font-medium transition-colors"
                style={{
                  background: active ? 'var(--mp-gradient-primary)' : 'transparent',
                  color: active ? '#FFFFFF' : 'var(--mp-text-secondary)',
                  borderRadius: 'var(--mp-radius-pill)',
                  fontFamily: 'var(--mp-font-cn)',
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Sort/Filter Row */}
      <div className="relative flex items-center justify-between px-4 pt-2 pb-3">
        <span className="text-xs" style={{ fontFamily: 'var(--mp-font-display)', color: 'var(--mp-text-tertiary)' }}>
          共 <span style={{ fontFamily: 'var(--mp-font-display)', color: 'var(--mp-text-secondary)', fontWeight: 600 }}>{filtered.length / 2}</span> 个妆容
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSortOpen((v) => !v)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg"
            style={{ background: 'var(--mp-bg-white)', color: 'var(--mp-text-secondary)' }}
          >
            <span className="text-xs" style={{ fontFamily: 'var(--mp-font-cn)' }}>
              {SORT_OPTIONS.find((s) => s.id === sort)?.label}
            </span>
            <ChevronDown size={12} style={{ transition: 'transform 0.2s', transform: sortOpen ? 'rotate(180deg)' : 'none' }} />
          </button>
          <button
            onClick={() => toast('筛选功能开发中')}
            className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
            style={{ background: 'var(--mp-bg-white)', color: 'var(--mp-text-tertiary)' }}
            aria-label="高级筛选"
          >
            <SlidersHorizontal size={12} />
          </button>
        </div>
        {sortOpen && (
          <div
            className="absolute right-4 top-9 z-20 mp-scale-in"
            style={{
              background: 'var(--mp-bg-white)',
              borderRadius: 'var(--mp-radius-md)',
              boxShadow: 'var(--mp-shadow-md)',
              padding: '4px',
              minWidth: 100,
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setSort(opt.id)
                  setSortOpen(false)
                }}
                className="block w-full text-left px-3 py-2 text-xs rounded-lg"
                style={{
                  fontFamily: 'var(--mp-font-cn)',
                  color: sort === opt.id ? 'var(--mp-sunset)' : 'var(--mp-text-secondary)',
                  background: sort === opt.id ? 'rgba(255,140,66,0.08)' : 'transparent',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Waterfall Grid — two-column masonry */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-2">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2">
              {col.map((look) => {
                const isFav = favorites.has(look.id)
                return (
                  <article
                    key={`${look.id}-${colIdx}`}
                    onClick={() => toast(`查看「${look.title}」`)}
                    className="mp-fade-in active:scale-[0.98]"
                    style={{
                      borderRadius: 'var(--mp-radius-xl)',
                      boxShadow: 'var(--mp-shadow-xs)',
                      background: 'var(--mp-bg-white)',
                      overflow: 'hidden',
                      transition: 'transform 0.15s',
                      cursor: 'pointer',
                    }}
                  >
                    <div className="relative" style={{ height: look.cover ? (colIdx === 0 ? 200 : 170) : (colIdx === 0 ? 170 : 200) }}>
                      {look.cover ? (
                        <img src={look.cover} alt={look.title} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ background: look.gradient }}>
                          <Sparkles size={32} style={{ color: 'rgba(255,255,255,0.5)' }} />
                        </div>
                      )}
                      {look.isTutorial && (
                        <span
                          className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-md font-medium"
                          style={{ background: 'rgba(74,37,17,0.7)', color: '#FFFFFF', fontFamily: 'var(--mp-font-cn)' }}
                        >
                          教程
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleFav(look.id, look.title)
                        }}
                        className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)' }}
                        aria-label={isFav ? '取消收藏' : '收藏'}
                      >
                        <Heart
                          size={14}
                          style={{ color: isFav ? 'var(--mp-error)' : 'var(--mp-text-tertiary)' }}
                          fill={isFav ? 'var(--mp-error)' : 'none'}
                        />
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold truncate" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-primary)' }}>
                        {look.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        {look.tags.map((tag) => (
                          <span
                            key={tag.label}
                            className="text-[10px] px-1.5 py-0.5 rounded-md whitespace-nowrap"
                            style={{ background: 'var(--mp-bg)', color: TAG_COLORS[tag.color] ?? 'var(--mp-rose-gold)', fontFamily: 'var(--mp-font-cn)' }}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center gap-1">
                          <Heart size={12} style={{ color: 'var(--mp-error)' }} />
                          <span className="text-[11px]" style={{ fontFamily: 'var(--mp-font-display)', color: 'var(--mp-text-tertiary)' }}>
                            {look.likes}
                          </span>
                        </div>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-md font-medium"
                          style={{ background: 'var(--mp-bg)', color: DIFFICULTY_COLORS[look.difficultyColor], fontFamily: 'var(--mp-font-cn)' }}
                        >
                          {look.difficulty}
                        </span>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
