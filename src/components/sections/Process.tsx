'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Phone, ClipboardCheck, Hammer, ThumbsUp, MessageSquare, Truck, Shield, Clock } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Contact & Free Quote',
    description: 'Reach out via phone, email, or our online form to share your ideas and get a free, no-obligation quote.',
    icon: Phone,
    color: 'from-forest to-forest-light',
    bgColor: 'bg-forest',
  },
  {
    number: '02',
    title: 'Consultation & Design',
    description: 'Our team visits your property, discusses your vision, and creates a custom landscaping plan tailored to your style and budget.',
    icon: ClipboardCheck,
    color: 'from-earth to-earth-light',
    bgColor: 'bg-earth',
  },
  {
    number: '03',
    title: 'Project Execution',
    description: 'We bring your design to life with professional hardscaping, softscaping, and patio installations, using high-quality materials.',
    icon: Hammer,
    color: 'from-forest-dark to-forest',
    bgColor: 'bg-forest-dark',
  },
  {
    number: '04',
    title: 'Final Walkthrough & Satisfaction',
    description: 'After completion, we review the project with you to ensure everything meets your expectations. Your satisfaction is our priority.',
    icon: ThumbsUp,
    color: 'from-gold to-gold-light',
    bgColor: 'bg-gold',
  },
]

function ProcessStep({ step, index, totalSteps }: { step: typeof steps[0]; index: number; totalSteps: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Step number badge - top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
        className="absolute -top-2 -right-2 sm:right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-border/40 flex items-center justify-center"
      >
        <span className="text-[10px] sm:text-[11px] font-bold text-forest">{step.number}</span>
      </motion.div>

      {/* Icon Circle */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 sm:mb-6 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-forest/10`}
      >
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/20" />
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 tracking-tight text-foreground px-2"
      >
        {step.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        className="text-xs sm:text-sm text-muted-foreground font-editorial leading-relaxed max-w-[240px] sm:max-w-[280px] px-2"
      >
        {step.description}
      </motion.p>

      {/* Desktop connector arrow */}
      {index < totalSteps - 1 && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
          className="hidden lg:block absolute top-[36px] sm:top-[42px] left-[calc(50%+48px)] sm:left-[calc(50%+56px)] right-[calc(-50%+48px)] sm:right-[calc(-50%+56px)]"
        >
          <div className="h-px bg-gradient-to-r from-border/80 via-gold/50 to-border/80 relative">
            {/* Animated dot */}
            <motion.div
              initial={{ left: 0, opacity: 0 }}
              animate={isInView ? { left: '100%', opacity: [0, 1, 1, 0] } : {}}
              transition={{ duration: 2, delay: index * 0.15 + 0.6, repeat: Infinity, repeatDelay: 3 }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-forest"
            />
            {/* Arrow head */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-border/80" />
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export function Process() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%'])

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-eyebrow text-forest mb-3 sm:mb-4"
          >
            Our Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground mb-4 sm:mb-5"
          >
            A Simple, Stress-Free Experience
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

        {/* Scroll progress bar */}
        <div className="hidden lg:block mb-12 h-[2px] bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-forest via-gold to-forest rounded-full"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Steps Grid - Clean 4-column layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 relative">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} totalSteps={steps.length} />
          ))}
        </div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: Shield, label: 'Licensed & Insured' },
            { icon: Clock, label: 'On-Time Delivery' },
            { icon: Truck, label: 'Clean Job Sites' },
            { icon: MessageSquare, label: 'Free Estimates' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
              <item.icon className="w-4 h-4 text-forest/60" strokeWidth={1.5} />
              <span className="text-xs sm:text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
