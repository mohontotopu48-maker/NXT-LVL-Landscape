'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Gift } from 'lucide-react'

export function PromoBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-4 sm:py-6 md:py-8" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-forest via-forest to-forest-light p-5 sm:p-8 md:p-12"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-4 text-center sm:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display text-white mb-0.5 sm:mb-1">
                  $500 Off Your Hardscape Project
                </h3>
                <p className="text-white/80 font-editorial text-xs sm:text-sm md:text-base">
                  Save big on projects $5,000 and above. Mention this offer when you request your free quote.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="w-full sm:w-auto bg-white text-forest hover:bg-white/90 rounded-full px-6 sm:px-8 h-11 sm:h-12 font-semibold shrink-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
            >
              <a href="#planner" className="gap-2">
                Claim Offer
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
