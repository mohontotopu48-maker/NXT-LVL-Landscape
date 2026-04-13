'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, Pencil, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Contact & Free Quote',
    description: 'Reach out via phone, email, or our online form to share your ideas and get a free, no-obligation quote.',
    icon: Phone,
    color: 'bg-forest/10 text-forest',
  },
  {
    number: '02',
    title: 'Consultation & Design',
    description: 'Our team visits your property, discusses your vision, and creates a custom landscaping plan tailored to your style and budget.',
    icon: Pencil,
    color: 'bg-earth/10 text-earth',
  },
  {
    number: '03',
    title: 'Project Execution',
    description: 'We bring your design to life with professional hardscaping, softscaping, and patio installations, using high-quality materials.',
    icon: ClipboardCheck,
    color: 'bg-forest/10 text-forest',
  },
  {
    number: '04',
    title: 'Final Walkthrough & Satisfaction',
    description: 'After completion, we review the project with you to ensure everything meets your expectations. Your satisfaction is our priority.',
    icon: MessageCircle,
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
      <div className={`w-14 h-14 sm:w-16 sm:h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
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
            Our Simple Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground font-editorial max-w-lg mx-auto leading-relaxed"
          >
            From first call to finished project — a seamless, stress-free experience every step of the way.
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
