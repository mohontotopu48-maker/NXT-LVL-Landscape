'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Premium outdoor living space by NXT LVL Landscape"
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-14 sm:pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 glass rounded-full mb-6 sm:mb-8"
        >
          <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-subtle-pulse" />
          <span className="text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
            20 Years Creating Lasting Experiences
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,8vw,5.5rem)] font-display text-white leading-[1.05] mb-5 sm:mb-6 text-balance"
        >
          Your Outdoor Space.
          <br />
          <span className="gradient-text">Elevated.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-white/75 font-editorial max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2 text-balance leading-relaxed"
        >
          Precision hardscaping that transforms ordinary yards into extraordinary
          outdoor experiences. Built to last. Designed to inspire.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-full px-7 sm:px-8 h-12 sm:h-[52px] text-sm sm:text-[15px] font-semibold shadow-2xl shadow-black/25 transition-all duration-300 hover:shadow-black/35 hover:scale-[1.02] group"
          >
            <a href="#planner" className="gap-2">
              Get Your Free Estimate
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto text-white/85 hover:text-white hover:bg-white/10 rounded-full px-7 sm:px-8 h-12 sm:h-[52px] text-sm sm:text-[15px] font-medium gap-2.5 transition-all duration-300"
          >
            <a href="#gallery">
              <Play size={14} className="fill-current" />
              View Our Work
            </a>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 text-white/50 text-[11px] sm:text-xs"
        >
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>5-Star Rated</span>
          </div>
          <div className="w-px h-2.5 bg-white/20 hidden sm:block" />
          <span>Licensed & Insured</span>
          <div className="w-px h-2.5 bg-white/20 hidden sm:block" />
          <span>Family Owned Since 2004</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[22px] h-[34px] rounded-full border-[1.5px] border-white/25 flex items-start justify-center pt-2"
        >
          <div className="w-[3px] h-[6px] bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
