import { useEffect, useRef, useState } from 'react'

export interface DragState {
  x: number
  y: number
  dragging: boolean
}

interface UseDragOpts {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
}

/** Pointer-based drag with swipe detection. Returns ref, drag state, and handlers. */
export function useDrag({ onSwipeLeft, onSwipeRight, threshold = 100 }: UseDragOpts) {
  const ref = useRef<HTMLDivElement>(null)
  const [drag, setDrag] = useState<DragState>({ x: 0, y: 0, dragging: false })
  const start = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - start.current.x
      const dy = e.clientY - start.current.y
      setDrag({ x: dx, y: dy, dragging: true })
    }
    const onUp = (e: PointerEvent) => {
      const dx = e.clientX - start.current.x
      setDrag({ x: 0, y: 0, dragging: false })
      if (dx < -threshold) onSwipeLeft?.()
      else if (dx > threshold) onSwipeRight?.()
    }
    const onDown = (e: PointerEvent) => {
      start.current = { x: e.clientX, y: e.clientY }
      setDrag({ x: 0, y: 0, dragging: true })
      el.setPointerCapture(e.pointerId)
    }

    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', () => setDrag({ x: 0, y: 0, dragging: false }))

    return () => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
    }
  }, [onSwipeLeft, onSwipeRight, threshold])

  return { ref, drag }
}
