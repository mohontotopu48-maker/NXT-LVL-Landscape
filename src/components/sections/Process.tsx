'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Ruler, Hammer, Heart } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Share your vision. We listen, ask questions, and understand your goals, style, and budget.',
    icon: MessageSquare,
    color: 'bg-forest/10 text-forest',
  },
  {
    number: '02',
    title: 'Custom Design',
    description: 'Our team crafts a detailed plan with 3D renderings and material selections tailored to you.',
    icon: Ruler,
    color: 'bg-earth/10 text-earth',
  },
  {
    number: '03',
    title: 'Expert Build',
    description: 'Our craftsmen bring the design to life with precision, quality materials, and clean execution.',
    icon: Hammer,
    color: 'bg-forest/10 text-forest',
  },
  {
    number: '04',
    title: 'Enjoy & Share',
    description: 'Step into your transformed outdoor space. We follow up to ensure everything exceeds expectations.',
    icon: Heart,
    color: 'bg-gold/10 text-gold',
  },
]

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Connector Line (not on last) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-[28px] left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t border-dashed border-border/60" />
      )}

      {/* Icon Circle */}
      <div className={`w-14 h-14 sm:w-16 sm:h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
      </div>

      {/* Step Number */}
      <span className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] text-forest/60 mb-2">
        Step {step.number}
      </span>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold mb-2 tracking-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-muted-foreground font-editorial leading-relaxed max-w-[240px]">
        {step.description}
      </p>
    </motion.div>
  )
}

export function Process() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-eyebrow text-forest mb-3 sm:mb-4"
          >
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground mb-4 sm:mb-5"
          >
            Simple Process,
            <br />
            <span className="text-muted-foreground">Stunning Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground font-editorial max-w-lg mx-auto leading-relaxed"
          >
            From first call to finished project, we make the entire experience seamless and enjoyable.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
