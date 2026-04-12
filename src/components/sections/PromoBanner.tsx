'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Gift, Clock } from 'lucide-react'

export function PromoBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-6 sm:py-8 md:py-10" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-forest-dark via-forest to-forest-light p-6 sm:p-8 md:p-10"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-white/[0.06] rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 sm:w-64 h-48 sm:h-64 bg-white/[0.04] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full" />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-4 text-center sm:text-left">
              <div className="w-11 h-11 sm:w-13 sm:h-13 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display text-white mb-1">
                  $500 Off Your Hardscape Project
                </h3>
                <p className="text-white/75 font-editorial text-sm sm:text-[15px] leading-relaxed">
                  Save on projects $5,000+. Mention this offer when requesting your free estimate.
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-white/50 text-xs">
                  <Clock size={12} />
                  <span>Limited time offer — Spring scheduling fills fast</span>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="w-full sm:w-auto bg-white text-forest hover:bg-white/90 rounded-full px-6 sm:px-8 h-11 sm:h-12 font-semibold shrink-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
            >
              <a href="#planner" className="gap-2">
                Claim Offer
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
