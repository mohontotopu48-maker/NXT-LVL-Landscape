'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '20+', label: 'Years of Excellence' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '$500', label: 'Off $5k+ Projects' },
]

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-display text-forest mb-0.5 sm:mb-1">{value}</div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</div>
    </motion.div>
  )
}

export function TrustBar() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
