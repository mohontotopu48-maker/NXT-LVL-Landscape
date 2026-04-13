'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, Star, Gift } from 'lucide-react'

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden" ref={ref}>
      {/* Dark green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-dark" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/[0.03] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-white/[0.03] rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-forest-light/[0.15] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-5 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-subtle-pulse" />
            <span className="text-white/80 text-[11px] sm:text-xs font-semibold tracking-wide">
              Free Estimates Available
            </span>
          </motion.div>

          <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-white mb-4 sm:mb-5 text-balance leading-tight">
            Ready to Transform
            <br />
            Your Outdoors?
          </h2>

          <p className="text-sm sm:text-base md:text-[17px] text-white/65 font-editorial max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2 leading-relaxed">
            Let&apos;s create something extraordinary together. Your free consultation
            is just a call away — no commitment, just conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-forest hover:bg-white/90 rounded-full px-7 sm:px-9 h-12 sm:h-[54px] text-sm sm:text-[15px] font-semibold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-[1.02] group"
            >
              <a href="#contact" className="gap-2">
                Get Your Free Quote
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-full px-7 sm:px-9 h-12 sm:h-[54px] text-sm sm:text-[15px] font-medium gap-2 transition-all duration-300"
            >
              <a href="tel:+16577209054">
                <Phone size={16} />
                (657) 720-9054
              </a>
            </Button>
          </div>

          {/* Trust Features */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 mb-8">
            <div className="flex items-center gap-1.5 text-white/50 text-[11px] sm:text-xs">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fbbf24] fill-[#fbbf24]" />
              <span>5-Star Rated</span>
            </div>
            <div className="w-px h-3 bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-white/50 text-[11px] sm:text-xs">
              <Gift className="w-3.5 h-3.5" />
              <span>Free Estimates</span>
            </div>
            <div className="w-px h-3 bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-white/50 text-[11px] sm:text-xs">
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-white/40">
            <a href="mailto:nxtlvllandscape@gmail.com" className="flex items-center gap-1.5 hover:text-white/60 transition-colors">
              <Mail size={13} />
              nxtlvllandscape@gmail.com
            </a>
            <div className="hidden sm:block w-px h-3 bg-white/15" />
            <a href="tel:+16577209054" className="flex items-center gap-1.5 hover:text-white/60 transition-colors">
              <Phone size={13} />
              (657) 720-9054
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
