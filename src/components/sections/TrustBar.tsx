'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 350, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '', label: '5-Star Reviews', isStatic: true },
]

function AnimatedCounter({ value, suffix = '', isInView, isStatic = false }: { value: number; suffix: string; isInView: boolean; isStatic?: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || isStatic) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value, isStatic])

  return (
    <span>
      {isStatic ? value : count}{suffix}
    </span>
  )
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center py-3 sm:py-4 relative"
    >
      {/* Divider */}
      {index < stats.length - 1 && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border/60" />
      )}
      {/* Stars for 5-Star */}
      {stat.isStatic ? (
        <div className="flex items-center justify-center gap-0.5 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      ) : (
        <div className="text-2xl sm:text-3xl md:text-4xl font-display text-forest mb-1 tracking-tight">
          <AnimatedCounter
            value={stat.value}
            suffix={stat.suffix}
            isInView={isInView}
            isStatic={stat.isStatic}
          />
        </div>
      )}
      <div className="text-[11px] sm:text-xs text-muted-foreground font-medium tracking-wide uppercase">
        {stat.label}
      </div>
    </motion.div>
  )
}

export function TrustBar() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white border-b border-border/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
