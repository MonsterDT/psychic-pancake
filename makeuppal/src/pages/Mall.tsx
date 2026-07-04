import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ScanLine, Droplets, Sparkles, Wind, Paintbrush, Heart, Gift, Plus, ShoppingCart } from 'lucide-react'
import Layout from '../components/Layout'
import { useApp } from '../components/AppState'
import { PRODUCTS, MALL_CATEGORIES, IMAGE } from '../data/mockData'

const ICONS: Record<string, typeof Droplets> = {
  droplets: Droplets,
  sparkles: Sparkles,
  wind: Wind,
  paintbrush: Paintbrush,
  heart: Heart,
  gift: Gift,
}

const GRADIENTS: Record<string, string> = {
  primary: 'var(--mp-gradient-primary)',
  sunset: 'var(--mp-gradient-sunset)',
  gp: 'var(--mp-gradient-gp)',
}

export default function Mall() {
  const navigate = useNavigate()
  const { cartCount, addToCart } = useApp()
  const [activeCat, setActiveCat] = useState<string>('skincare')
  const [search, setSearch] = useState('')
  const [showCart, setShowCart] = useState(false)

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.category === activeCat || activeCat === 'all')
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q))
    }
    return list
  }, [activeCat, search])

  return (
    <Layout>
      {/* Search Bar */}
      <section className="px-4 pt-4 pb-2 sticky top-0 z-10" style={{ background: 'var(--mp-bg)' }}>
        <div className="flex items-center gap-2">
          <div
            className="flex-1 flex items-center gap-2 px-4 py-2.5"
            style={{
              borderRadius: 'var(--mp-radius-pill)',
              border: '1px solid var(--mp-border)',
              background: 'var(--mp-bg-white)',
              boxShadow: 'var(--mp-shadow-xs)',
            }}
          >
            <Search size={16} className="shrink-0" style={{ color: 'var(--mp-text-tertiary)' }} />
            <input
              type="text"
              placeholder="搜索美妆好物..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-[13px] outline-none"
              style={{ color: 'var(--mp-text-primary)', fontFamily: 'var(--mp-font-cn)' }}
            />
            {search && (
              <button onClick={() => setSearch('')} className="text-xs" style={{ color: 'var(--mp-text-tertiary)' }}>
                清除
              </button>
            )}
          </div>
          <button
            onClick={() => navigate('/mirror')}
            className="inline-flex items-center justify-center w-10 h-10 shrink-0"
            style={{ borderRadius: 'var(--mp-radius-lg)', background: 'var(--mp-bg-white)', border: '1px solid var(--mp-border)' }}
            aria-label="扫码"
          >
            <ScanLine size={20} style={{ color: 'var(--mp-text-secondary)' }} />
          </button>
          <button
            onClick={() => setShowCart(true)}
            className="relative inline-flex items-center justify-center w-10 h-10 shrink-0"
            style={{ borderRadius: 'var(--mp-radius-lg)', background: 'var(--mp-bg-white)', border: '1px solid var(--mp-border)' }}
            aria-label="购物车"
          >
            <ShoppingCart size={20} style={{ color: 'var(--mp-text-secondary)' }} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-white text-[10px] font-bold rounded-full px-1"
                style={{ background: 'var(--mp-gradient-primary)', boxShadow: 'var(--mp-shadow-btn)' }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </section>

      {/* Category Icons */}
      <section className="px-4 pt-2 pb-1">
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
          {MALL_CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Droplets
            const active = activeCat === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className="flex flex-col items-center gap-1.5 shrink-0 active:scale-95"
                style={{ transition: 'transform 0.15s' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: active ? 'var(--mp-rose-light)' : 'rgba(255, 193, 161, 0.25)',
                    border: active ? '2px solid var(--mp-rose-gold)' : '2px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={24} style={{ color: active ? 'var(--mp-rose-gold)' : 'var(--mp-sunset)' }} />
                </div>
                <span
                  className="text-[11px] whitespace-nowrap"
                  style={{ color: active ? 'var(--mp-text-primary)' : 'var(--mp-text-secondary)', fontFamily: 'var(--mp-font-cn)' }}
                >
                  {cat.label}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="px-4 pt-3 pb-1">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7', borderRadius: 'var(--mp-radius-xl)' }}>
          <img src={IMAGE.banner} alt="夏日美妆季促销活动" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(74,37,17,0.55) 0%, rgba(166,123,82,0.30) 100%)' }} />
          <div className="relative z-10 flex flex-col justify-center h-full px-5 py-4">
            <h2 className="text-white font-bold text-[20px] leading-tight" style={{ fontFamily: 'var(--mp-font-cn)', textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
              夏日美妆季
            </h2>
            <p className="text-white/85 text-[13px] mt-1" style={{ fontFamily: 'var(--mp-font-cn)' }}>
              全场低至5折
            </p>
            <button
              onClick={() => navigate('/mirror')}
              className="inline-flex items-center justify-center mt-3 px-5 py-1.5 rounded-full text-white text-[12px] font-semibold whitespace-nowrap w-fit active:scale-95"
              style={{ background: 'var(--mp-gradient-primary)', boxShadow: 'var(--mp-shadow-btn)', fontFamily: 'var(--mp-font-cn)', transition: 'transform 0.15s' }}
            >
              立即抢购
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 pt-4 pb-2">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
              暂无相关商品
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="mp-fade-in overflow-hidden"
                style={{ borderRadius: 'var(--mp-radius-xl)', background: 'var(--mp-bg-white)', boxShadow: 'var(--mp-shadow-xs)' }}
              >
                <div className="relative aspect-square">
                  <img src={p.cover} alt={p.name} className="w-full h-full object-cover" />
                  {p.badge && (
                    <span
                      className="absolute top-2 left-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-white text-[10px] font-semibold whitespace-nowrap"
                      style={{ background: GRADIENTS[p.badge.gradient], fontFamily: 'var(--mp-font-cn)' }}
                    >
                      {p.badge.label}
                    </span>
                  )}
                </div>
                <div className="px-3 pt-2 pb-3">
                  <h3 className="text-[13px] leading-snug line-clamp-2" style={{ color: 'var(--mp-text-primary)', fontFamily: 'var(--mp-font-cn)' }}>
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-[15px] font-bold" style={{ color: 'var(--mp-rose-gold)', fontFamily: 'var(--mp-font-display)' }}>
                      ¥{p.price}
                    </span>
                    {p.originalPrice && (
                      <span className="text-[11px] line-through" style={{ color: 'var(--mp-text-tertiary)' }}>
                        ¥{p.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px]" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
                      已售{p.sold}
                    </span>
                    <button
                      onClick={addToCart}
                      className="inline-flex items-center justify-center w-[28px] h-[28px] rounded-full text-white shrink-0 active:scale-90"
                      style={{ background: 'var(--mp-gradient-primary)', transition: 'transform 0.15s' }}
                      aria-label="加入购物车"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cart Sheet */}
      {showCart && (
        <div
          className="absolute inset-0 z-[200] flex items-end"
          style={{ background: 'rgba(0,0,0,0.4)' }}
          onClick={() => setShowCart(false)}
        >
          <div
            className="w-full mp-slide-up"
            style={{
              background: 'var(--mp-bg-white)',
              borderRadius: 'var(--mp-radius-2xl) var(--mp-radius-2xl) 0 0',
              padding: '20px 16px calc(20px + var(--mp-safe-bottom))',
              maxWidth: 'var(--mp-content-max-width)',
              margin: '0 auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-primary)' }}>
                购物车
              </h3>
              <button onClick={() => setShowCart(false)} className="text-xs" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
                关闭
              </button>
            </div>
            <div className="py-8 text-center">
              <ShoppingCart size={48} style={{ color: 'var(--mp-border)', margin: '0 auto' }} />
              <p className="text-sm mt-3" style={{ color: 'var(--mp-text-tertiary)', fontFamily: 'var(--mp-font-cn)' }}>
                {cartCount > 0 ? `购物车有 ${cartCount} 件商品` : '购物车空空如也'}
              </p>
              {cartCount > 0 && (
                <button
                  onClick={() => {
                    addToCart()
                    setShowCart(false)
                  }}
                  className="mt-4 px-6 py-2 rounded-full text-white text-sm font-semibold"
                  style={{ background: 'var(--mp-gradient-primary)', fontFamily: 'var(--mp-font-cn)', boxShadow: 'var(--mp-shadow-btn)' }}
                >
                  再加一件
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
