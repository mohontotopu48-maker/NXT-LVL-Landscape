'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Clock, Gift, Percent, Users, Hammer } from 'lucide-react'
import { Button } from '@/components/ui/button'

const promos = [
  {
    icon: Gift,
    title: 'Free Quotes & 10% Off',
    description: 'Get a free, no-obligation quote and enjoy 10% off your first service with us.',
    accent: 'bg-forest',
  },
  {
    icon: Users,
    title: '$25 Off Referral Bonus',
    description: 'Refer a friend or family member and both of you receive $25 off your next service.',
    accent: 'bg-earth',
  },
  {
    icon: Hammer,
    title: '$500 Off Hardscape Projects',
    description: 'Save $500 on any hardscape project above $5,000. Quality craftsmanship at an unbeatable value.',
    accent: 'bg-forest-dark',
  },
  {
    icon: Percent,
    title: '10–15% Off Softscape',
    description: 'Transform your garden with 10–15% off all softscape installation projects.',
    accent: 'bg-gold',
  },
]

function PromoCard({ promo, index }: { promo: typeof promos[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const Icon = promo.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="promo-card-border"
    >
      <div className="bg-white rounded-2xl p-5 sm:p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 card-lift">
        <div className={`w-11 h-11 ${promo.accent} rounded-xl flex items-center justify-center mb-4`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-2 tracking-tight text-foreground">
          {promo.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground font-editorial leading-relaxed">
          {promo.description}
        </p>
      </div>
    </motion.div>
  )
}

export function PromoBanner() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-eyebrow text-forest mb-3 sm:mb-4"
          >
            Special Offers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground mb-4 sm:mb-5"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground font-editorial max-w-lg mx-auto leading-relaxed"
          >
            Great service, great value. Take advantage of our current promotions and save on your next project.
          </motion.p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {promos.map((promo, index) => (
            <PromoCard key={promo.title} promo={promo} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-forest-dark via-forest to-forest-light p-6 sm:p-8 md:p-10"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-white/[0.06] rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 sm:w-64 h-48 sm:h-64 bg-white/[0.04] rounded-full" />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-4 text-center sm:text-left">
              <div className="w-11 h-11 sm:w-13 sm:h-13 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display text-white mb-1">
                  Ready to Get Started?
                </h3>
                <p className="text-white/75 font-editorial text-sm sm:text-[15px] leading-relaxed">
                  Mention any of these offers when requesting your free estimate.
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-white/50 text-xs">
                  <Clock size={12} />
                  <span>Scheduling fills fast — contact us today</span>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="w-full sm:w-auto bg-white text-forest hover:bg-white/90 rounded-full px-6 sm:px-8 h-11 sm:h-12 font-semibold shrink-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
            >
              <a href="#planner" className="gap-2">
                Get Free Quote
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
