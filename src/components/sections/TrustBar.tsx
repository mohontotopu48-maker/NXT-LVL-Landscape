'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 20, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 500, prefix: '$', suffix: '', label: 'Off $5k+ Projects' },
]

const partners = [
  'Belgard', 'Techo-Bloc', 'Epic', 'Unique'
]

function AnimatedCounter({ value, prefix = '', suffix = '', isInView }: { value: number; prefix?: string; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
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
  }, [isInView, value])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
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
      className="text-center py-3 sm:py-4"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-display text-forest mb-1 tracking-tight">
        <AnimatedCounter
          value={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
          isInView={isInView}
        />
      </div>
      <div className="text-[11px] sm:text-xs text-muted-foreground font-medium tracking-wide uppercase">
        {stat.label}
      </div>
    </motion.div>
  )
}

export function TrustBar() {
  const partnersRef = useRef(null)
  const isPartnersInView = useInView(partnersRef, { once: true, margin: '-20px' })

  return (
    <>
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Badges */}
      <section className="py-5 sm:py-6 bg-secondary/40 border-y border-border/30" ref={partnersRef}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isPartnersInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8"
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.12em] uppercase text-muted-foreground">
              Trusted Partners
            </span>
            <div className="flex items-center gap-5 sm:gap-8">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-xs sm:text-sm font-semibold text-muted-foreground/60 tracking-wide"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
