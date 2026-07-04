import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Zap, Sparkles, SlidersHorizontal, Circle, Eye, Heart, Palette, Sun, Image, RefreshCw } from 'lucide-react'
import TabBar from '../components/TabBar'
import { useApp } from '../components/AppState'
import { IMAGE, MAKEUP_CATEGORIES, COLOR_SWATCHES } from '../data/mockData'

const ICONS: Record<string, typeof Circle> = {
  circle: Circle,
  eye: Eye,
  heart: Heart,
  palette: Palette,
  sun: Sun,
}

export default function Mirror() {
  const navigate = useNavigate()
  const { toast } = useApp()
  const [activeCat, setActiveCat] = useState('base')
  const [activeColor, setActiveColor] = useState(COLOR_SWATCHES[0].id)
  const [flashOn, setFlashOn] = useState(false)
  const [beautyLevel, setBeautyLevel] = useState(2)

  const handleCapture = () => {
    toast('已拍摄，正在生成试妆效果...')
  }

  return (
    <div className="device-frame" style={{ background: 'var(--mp-bg-dark)' }}>
      <main className="relative w-full flex-1 overflow-hidden" style={{ fontFamily: 'var(--mp-font-cn), var(--mp-font-body), system-ui, sans-serif' }}>
        {/* Full-Screen Camera View */}
        <img src={IMAGE.camera} alt="Camera preview" className="absolute inset-0 w-full h-full object-cover" />

        {/* Flash overlay */}
        {flashOn && (
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(255,246,236,0.18)' }} />
        )}

        {/* Face Outline Guide */}
        <div className="absolute left-0 right-0 flex items-center justify-center pointer-events-none" style={{ top: '10%', height: '80%' }}>
          <div
            className="w-52 h-72 rounded-full mp-pulse-soft"
            style={{ border: '2px dashed var(--mp-rose-gold)', opacity: 0.25, animation: 'mp-pulse-soft 2.4s ease-in-out infinite' }}
          />
        </div>

        {/* Top Controls */}
        <div
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 z-10"
          style={{ paddingTop: 'calc(var(--mp-safe-top, 0px) + 12px)' }}
        >
          <button
            onClick={() => navigate('/')}
            className="w-12 h-12 flex items-center justify-center rounded-full active:scale-90"
            style={{ background: 'rgba(0,0,0,0.4)', transition: 'transform 0.15s' }}
            aria-label="关闭"
          >
            <X size={20} className="text-white" />
          </button>
          <span className="text-white text-sm font-medium" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            焕新试妆
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setFlashOn((v) => !v)
                toast(flashOn ? '闪光灯已关' : '闪光灯已开')
              }}
              className="w-11 h-11 flex items-center justify-center rounded-full active:scale-90"
              style={{ background: flashOn ? 'var(--mp-gradient-primary)' : 'rgba(0,0,0,0.4)', transition: 'all 0.2s' }}
              aria-label="闪光灯"
            >
              <Zap size={20} className="text-white" />
            </button>
            <button
              onClick={() => {
                setBeautyLevel((v) => (v >= 3 ? 0 : v + 1))
                toast(`美颜等级 ${beautyLevel + 1 > 3 ? 0 : beautyLevel + 1}`)
              }}
              className="w-11 h-11 flex items-center justify-center rounded-full active:scale-90 relative"
              style={{ background: beautyLevel > 0 ? 'var(--mp-gradient-primary)' : 'rgba(0,0,0,0.4)', transition: 'all 0.2s' }}
              aria-label="美颜等级"
            >
              <Sparkles size={20} className="text-white" />
              {beautyLevel > 0 && (
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                  style={{ background: 'var(--mp-rose-gold)' }}
                >
                  {beautyLevel}
                </span>
              )}
            </button>
            <button
              onClick={() => toast('打开设置面板')}
              className="w-11 h-11 flex items-center justify-center rounded-full active:scale-90"
              style={{ background: 'rgba(0,0,0,0.4)', transition: 'transform 0.15s' }}
              aria-label="设置"
            >
              <SlidersHorizontal size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Makeup Category Strip */}
        <div className="absolute left-4 right-4 flex justify-center z-10" style={{ top: '28%' }}>
          <div
            className="inline-flex items-center gap-2 px-3 py-2 overflow-x-auto no-scrollbar"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: 'var(--mp-radius-full)',
            }}
          >
            {MAKEUP_CATEGORIES.map((cat) => {
              const Icon = ICONS[cat.icon] ?? Circle
              const active = activeCat === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCat(cat.id)
                    toast(`切换到${cat.label}`)
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full shrink-0 text-xs font-medium active:scale-95"
                  style={{
                    background: active ? 'var(--mp-gradient-primary)' : 'rgba(255,255,255,0.12)',
                    color: active ? '#fff' : 'rgba(255,255,255,0.7)',
                    fontSize: 'var(--mp-text-body)',
                    fontFamily: 'var(--mp-font-cn)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Product Selector Panel */}
        <div className="absolute left-4 right-4 flex justify-center z-10" style={{ top: '53%' }}>
          <div
            className="px-5 py-3.5"
            style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: 'var(--mp-radius-xl)',
              width: 'calc(100% - 32px)',
              maxWidth: 340,
            }}
          >
            {/* Color Swatches */}
            <div className="flex items-center justify-center gap-3 mb-2.5">
              {COLOR_SWATCHES.map((sw) => {
                const active = activeColor === sw.id
                return (
                  <button
                    key={sw.id}
                    onClick={() => {
                      setActiveColor(sw.id)
                      toast(`选择色号：${sw.name}`)
                    }}
                    className="w-9 h-9 rounded-full shrink-0 active:scale-90"
                    style={{
                      background: sw.color,
                      border: active ? '3px solid white' : '3px solid transparent',
                      boxShadow: active ? '0 0 0 2px rgba(255,255,255,0.5)' : 'none',
                      transition: 'all 0.2s',
                    }}
                    aria-label={sw.name}
                  />
                )
              })}
            </div>
            {/* Product name + brand */}
            <div className="text-center">
              <p className="text-white text-xs font-medium truncate" style={{ fontSize: 'var(--mp-text-heading)' }}>
                {COLOR_SWATCHES.find((s) => s.id === activeColor)?.name}
              </p>
              <p className="truncate" style={{ color: 'var(--mp-rose-light)', opacity: 0.7, fontSize: 'var(--mp-text-caption)' }}>
                {COLOR_SWATCHES.find((s) => s.id === activeColor)?.brand}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Capture Bar */}
        <div
          className="absolute left-0 right-0 z-10"
          style={{ paddingBottom: 'calc(var(--mp-tab-bar-height) + var(--mp-safe-bottom, 0px) + 16px)' }}
        >
          <div className="flex items-center justify-center gap-8 px-8">
            <button
              onClick={() => toast('打开相册')}
              className="w-11 h-11 rounded-lg overflow-hidden shrink-0 active:scale-90"
              style={{ border: '2px solid rgba(255,255,255,0.3)', transition: 'transform 0.15s' }}
              aria-label="相册"
            >
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Image size={20} className="text-white/60" />
              </div>
            </button>

            <button
              onClick={handleCapture}
              className="shrink-0 rounded-full active:scale-95"
              style={{
                width: 72,
                height: 72,
                padding: 3,
                background: 'var(--mp-gradient-primary)',
                boxShadow: 'var(--mp-shadow-btn)',
                transition: 'transform 0.15s',
              }}
              aria-label="拍照试妆"
            >
              <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: 'white' }}>
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{ width: 52, height: 52, background: 'linear-gradient(135deg, var(--mp-rose-gold), var(--mp-sunset))', opacity: 0.18 }}
                />
              </div>
            </button>

            <button
              onClick={() => toast('切换摄像头')}
              className="w-11 h-11 flex items-center justify-center rounded-full shrink-0 active:rotate-180"
              style={{ background: 'rgba(0,0,0,0.4)', transition: 'transform 0.4s' }}
              aria-label="切换摄像头"
            >
              <RefreshCw size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Dark Tab Bar */}
        <TabBar dark />
      </main>
    </div>
  )
}
