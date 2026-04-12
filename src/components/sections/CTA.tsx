'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-primary" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground mb-4 sm:mb-6 text-balance">
            Ready to Transform
            <br />
            Your Outdoor Space?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/70 font-editorial max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            Let&apos;s create something extraordinary together. Your free consultation
            is just a click away — no commitment, just conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-forest hover:bg-forest-light text-white rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl shadow-forest/20 transition-all duration-300 hover:scale-[1.02] group"
            >
              <a href="#planner" className="gap-2">
                Get Your Free Quote
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-medium gap-2 transition-all duration-300"
            >
              <a href="tel:+15551234567">
                <Phone size={16} />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-primary-foreground/50">
            <a href="mailto:info@nxtlvllandscape.com" className="flex items-center gap-1.5 sm:gap-2 hover:text-primary-foreground/80 transition-colors">
              <Mail size={14} />
              info@nxtlvllandscape.com
            </a>
            <div className="hidden sm:block w-px h-3 bg-primary-foreground/20" />
            <a href="tel:+15551234567" className="flex items-center gap-1.5 sm:gap-2 hover:text-primary-foreground/80 transition-colors">
              <Phone size={14} />
              (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
