'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, CreditCard } from 'lucide-react'

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-primary overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/[0.02] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-white/[0.02] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fbbf24]/15 rounded-full mb-5 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full animate-subtle-pulse" />
            <span className="text-[#fbbf24] text-[11px] sm:text-xs font-semibold tracking-wide">
              Spring 2025 Scheduling Open
            </span>
          </motion.div>

          <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-primary-foreground mb-4 sm:mb-5 text-balance leading-tight">
            Ready to Transform
            <br />
            Your Outdoor Space?
          </h2>

          <p className="text-sm sm:text-base md:text-[17px] text-primary-foreground/60 font-editorial max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2 leading-relaxed">
            Let&apos;s create something extraordinary together. Your free consultation
            is just a click away — no commitment, just conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-forest hover:bg-forest-light text-white rounded-full px-7 sm:px-9 h-12 sm:h-[54px] text-sm sm:text-[15px] font-semibold shadow-xl shadow-forest/30 transition-all duration-300 hover:scale-[1.02] group"
            >
              <a href="#planner" className="gap-2">
                Get Your Free Estimate
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/8 rounded-full px-7 sm:px-9 h-12 sm:h-[54px] text-sm sm:text-[15px] font-medium gap-2 transition-all duration-300"
            >
              <a href="tel:+15551234567">
                <Phone size={16} />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Trust Features */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 mb-8">
            <div className="flex items-center gap-1.5 text-primary-foreground/40 text-[11px] sm:text-xs">
              <CreditCard size={13} />
              <span>Flexible Financing</span>
            </div>
            <div className="flex items-center gap-1.5 text-primary-foreground/40 text-[11px] sm:text-xs">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-1.5 text-primary-foreground/40 text-[11px] sm:text-xs">
              <span>Free Estimates</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-primary-foreground/35">
            <a href="mailto:info@nxtlvllandscape.com" className="flex items-center gap-1.5 hover:text-primary-foreground/60 transition-colors">
              <Mail size={13} />
              info@nxtlvllandscape.com
            </a>
            <div className="hidden sm:block w-px h-3 bg-primary-foreground/15" />
            <a href="tel:+15551234567" className="flex items-center gap-1.5 hover:text-primary-foreground/60 transition-colors">
              <Phone size={13} />
              (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
