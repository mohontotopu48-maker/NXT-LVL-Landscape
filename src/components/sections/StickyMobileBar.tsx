'use client'

import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
      >
        <div className="flex items-center gap-2 px-4 py-3">
          <a
            href="tel:+16577209054"
            className="flex-1 flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-white rounded-xl h-11 text-sm font-semibold transition-colors"
          >
            <Phone size={16} />
            (657) 720-9054
          </a>
          <a
            href="#planner"
            className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-xl h-11 text-sm font-semibold transition-colors"
          >
            Free Estimate
          </a>
          <button
            onClick={() => setIsDismissed(true)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-secondary/50 text-muted-foreground transition-colors -mr-1 shrink-0"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
