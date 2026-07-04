import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

type Toast = { id: number; message: string }

type AppState = {
  cartCount: number
  addToCart: () => void
  toast: (message: string) => void
  likedLooks: Set<number>
  toggleLike: (id: number) => boolean
  favorites: Set<number>
  toggleFavorite: (id: number) => boolean
}

const AppCtx = createContext<AppState | null>(null)

let toastId = 0

export function AppProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0)
  const [toasts, setToasts] = useState<Toast[]>([])
  const [likedLooks, setLikedLooks] = useState<Set<number>>(new Set())
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const toast = useCallback((message: string) => {
    const id = ++toastId
    setToasts((prev) => [...prev, { id, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 2200)
  }, [])

  const addToCart = useCallback(() => {
    setCartCount((c) => c + 1)
    toast('已加入购物车')
  }, [toast])

  const toggleLike = useCallback((id: number) => {
    setLikedLooks((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
    return !likedLooks.has(id)
  }, [likedLooks])

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
    return !favorites.has(id)
  }, [favorites])

  return (
    <AppCtx.Provider value={{ cartCount, addToCart, toast, likedLooks, toggleLike, favorites, toggleFavorite }}>
      {children}
      <div aria-live="polite" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
        {toasts.map((t, i) => (
          <div
            key={t.id}
            className="mp-toast"
            style={{ bottom: `${6 + i * 3.4}rem` }}
          >
            {t.message}
          </div>
        ))}
      </div>
    </AppCtx.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppCtx)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
