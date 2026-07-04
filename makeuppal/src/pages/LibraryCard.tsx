import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, LayoutGrid, Heart, X, Eye } from 'lucide-react'
import Layout from '../components/Layout'
import { useApp } from '../components/AppState'
import { useDrag } from '../hooks/useDrag'
import { IMAGE, LOOKS } from '../data/mockData'

const CARD_IMAGES = [IMAGE.look5, IMAGE.look4, IMAGE.look3, IMAGE.tutorial, IMAGE.look5, IMAGE.look4, IMAGE.look3]

export default function LibraryCard() {
  const navigate = useNavigate()
  const { toast, likedLooks, toggleLike } = useApp()
  const [index, setIndex] = useState(0)
  const [exitDir, setExitDir] = useState<'left' | 'right' | null>(null)
  const [recycling, setRecycling] = useState(false)

  // Build a window of 3 cards: current top + 2 behind it
  const stack = useMemo(() => {
    const total = LOOKS.length
    return [0, 1, 2].map((offset) => {
      const i = (index + offset) % total
      return { look: LOOKS[i], image: CARD_IMAGES[i], pos: offset, key: `${index}-${offset}` }
    })
  }, [index])

  const advance = (dir: 'left' | 'right') => {
    setExitDir(dir)
    setTimeout(() => {
      setExitDir(null)
      setIndex((i) => (i + 1) % LOOKS.length)
      setRecycling(true)
      setTimeout(() => setRecycling(false), 50)
    }, 280)
  }

  const { ref, drag } = useDrag({
    onSwipeLeft: () => advance('left'),
    onSwipeRight: () => {
      const look = LOOKS[index]
      toggleLike(look.id)
      toast('已加入喜欢')
      advance('right')
    },
    threshold: 90,
  })

  const rotation = drag.x / 18
  const opacity = Math.max(0, 1 - Math.abs(drag.x) / 320)

  return (
    <Layout>
      {/* Top Bar */}
      <header
        className="flex items-center justify-between px-4 pt-3 pb-2"
        style={{ height: 'var(--mp-header-height)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 flex items-center justify-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.7)' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} style={{ color: 'var(--mp-text-primary)' }} />
        </button>
        <h1 className="text-[17px] font-semibold" style={{ color: 'var(--mp-text-primary)', fontFamily: 'var(--mp-font-cn)' }}>
          颜库
        </h1>
        <button
          onClick={() => navigate('/library/waterfall')}
          className="w-10 h-10 flex items-center justify-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.7)' }}
          aria-label="切换为瀑布流模式"
        >
          <LayoutGrid size={20} style={{ color: 'var(--mp-text-secondary)' }} />
        </button>
      </header>

      {/* Card Stack */}
      <section
        className="flex-1 flex items-center justify-center select-none"
        style={{ paddingTop: 'var(--mp-space-2)', paddingBottom: 'var(--mp-space-4)', touchAction: 'none' }}
      >
        <div className="relative" style={{ width: 280, height: 380 }}>
          {stack
            .slice()
            .reverse()
            .map((card) => {
              const isTop = card.pos === 0
              const back = card.pos === 1 ? 1 : 2
              const isLiked = likedLooks.has(card.look.id)

              // Style for non-top cards (stacked behind)
              const backStyle = {
                position: 'absolute' as const,
                top: back === 2 ? 24 : 12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: back === 2 ? 260 : 270,
                height: 380,
                borderRadius: 'var(--mp-radius-xl)',
                boxShadow: back === 2 ? 'var(--mp-shadow-sm)' : 'var(--mp-shadow-md)',
                opacity: back === 2 ? 0.8 : 0.9,
                overflow: 'hidden',
                zIndex: 10 - back,
                transition: recycling ? 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                pointerEvents: 'none' as const,
              }

              if (!isTop) {
                return (
                  <div key={card.key} style={backStyle}>
                    <img src={card.image} alt={card.look.title} className="w-full h-full object-cover" style={{ borderRadius: 'var(--mp-radius-xl)' }} />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'var(--mp-gradient-card-img)', opacity: back === 2 ? 0.3 : 0.2, borderRadius: 'var(--mp-radius-xl)' }}
                    />
                  </div>
                )
              }

              // Top card — draggable
              const translate = `translateX(${drag.x}px) translateY(${drag.y * 0.3}px) rotate(${rotation}deg)`
              const exitTransform =
                exitDir === 'left'
                  ? `translateX(-150%) rotate(-30deg)`
                  : exitDir === 'right'
                  ? `translateX(150%) rotate(30deg)`
                  : null

              return (
                <div
                  key={card.key}
                  ref={ref}
                  className="relative"
                  style={{
                    width: 280,
                    height: 380,
                    borderRadius: 'var(--mp-radius-xl)',
                    boxShadow: 'var(--mp-shadow-lg)',
                    overflow: 'hidden',
                    zIndex: 20,
                    cursor: drag.dragging ? 'grabbing' : 'grab',
                    transform: exitTransform ?? translate,
                    transition: drag.dragging || exitDir ? 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.05s linear',
                    opacity: exitDir ? 0 : opacity,
                    touchAction: 'none',
                  }}
                >
                  <img src={card.image} alt={card.look.title} className="w-full h-full object-cover pointer-events-none" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--mp-gradient-card-img)', opacity: 0.15 }} />

                  {/* Swipe hint overlays */}
                  {drag.dragging && drag.x > 30 && (
                    <div
                      className="absolute top-6 left-6 px-4 py-2 rounded-2xl text-white font-bold text-2xl"
                      style={{ background: 'var(--mp-success)', transform: 'rotate(-12deg)', opacity: Math.min(1, drag.x / 100) }}
                    >
                      LIKE
                    </div>
                  )}
                  {drag.dragging && drag.x < -30 && (
                    <div
                      className="absolute top-6 right-6 px-4 py-2 rounded-2xl text-white font-bold text-2xl"
                      style={{ background: 'var(--mp-error)', transform: 'rotate(12deg)', opacity: Math.min(1, -drag.x / 100) }}
                    >
                      NOPE
                    </div>
                  )}

                  {/* Bottom info */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(74,37,17,0.7) 0%, transparent 100%)' }}
                  >
                    <h2
                      className="text-[18px] font-semibold text-white mb-2"
                      style={{ fontFamily: 'var(--mp-font-cn)', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
                    >
                      {card.look.title}
                    </h2>
                    <div className="flex gap-2 flex-wrap">
                      {card.look.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium text-white whitespace-nowrap"
                          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', fontFamily: 'var(--mp-font-cn)' }}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Like badge */}
                  {isLiked && (
                    <div
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center mp-scale-in"
                      style={{ background: 'var(--mp-peach)', transform: 'rotate(-12deg)', boxShadow: 'var(--mp-shadow-sm)' }}
                    >
                      <Heart size={20} className="text-white" fill="white" />
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      </section>

      {/* Swipe Action Buttons */}
      <section className="flex items-center justify-center gap-6 py-4">
        <button
          onClick={() => advance('left')}
          className="w-14 h-14 rounded-full flex items-center justify-center active:scale-90"
          style={{ background: 'var(--mp-bg-white)', border: '2px solid var(--mp-border)', boxShadow: 'var(--mp-shadow-sm)', transition: 'transform 0.15s' }}
          aria-label="跳过"
        >
          <X size={22} style={{ color: 'var(--mp-text-tertiary)' }} strokeWidth={2.5} />
        </button>
        <span className="text-[11px] whitespace-nowrap" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
          左滑跳过 · 右滑喜欢
        </span>
        <button
          onClick={() => {
            const look = LOOKS[index]
            toggleLike(look.id)
            toast('已加入喜欢')
            advance('right')
          }}
          className="w-14 h-14 rounded-full flex items-center justify-center active:scale-90"
          style={{ background: 'var(--mp-gradient-primary)', boxShadow: 'var(--mp-shadow-btn)', transition: 'transform 0.15s' }}
          aria-label="喜欢"
        >
          <Heart size={24} className="text-white" />
        </button>
      </section>

      {/* Bottom Info Bar */}
      <section className="flex items-center justify-center gap-5 px-6 py-3">
        <div className="flex items-center gap-2">
          <img
            src={IMAGE.avatar}
            alt="Makeup artist"
            className="w-7 h-7 rounded-full object-cover"
            style={{ border: '1.5px solid var(--mp-border-light)' }}
          />
          <span className="text-[12px]" style={{ color: 'var(--mp-text-secondary)', fontFamily: 'var(--mp-font-cn)' }}>
            小桃老师
          </span>
        </div>
        <div className="h-4" style={{ width: 1, background: 'var(--mp-border)' }} />
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium"
          style={{ background: 'rgba(196,149,106,0.12)', color: 'var(--mp-rose-dark)', fontFamily: 'var(--mp-font-cn)' }}
        >
          简单
        </span>
        <div className="h-4" style={{ width: 1, background: 'var(--mp-border)' }} />
        <div className="flex items-center gap-1">
          <Eye size={14} style={{ color: 'var(--mp-text-tertiary)' }} />
          <span className="text-[12px]" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-display)' }}>
            2.3k
          </span>
        </div>
      </section>
    </Layout>
  )
}
