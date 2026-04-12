'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Premium outdoor living space by NXT LVL Landscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 sm:mb-8"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-forest-light rounded-full animate-pulse" />
          <span className="text-white/90 text-xs sm:text-sm font-medium">
            20 Years Creating Lasting Experiences
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-6 text-balance"
        >
          Your Outdoor Space.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-light to-[#8fbc8f]">
            Elevated.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/80 font-editorial max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2 text-balance"
        >
          We craft precision hardscapes that transform ordinary yards into
          extraordinary outdoor experiences. Built to last. Designed to inspire.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-2xl shadow-black/20 transition-all duration-300 hover:shadow-black/30 hover:scale-[1.02] group"
          >
            <a href="#planner" className="gap-2">
              Start Your Project
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto text-white/90 hover:text-white hover:bg-white/10 rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base font-medium gap-2 transition-all duration-300"
          >
            <a href="#services">
              <Play size={14} className="fill-current" />
              View Our Work
            </a>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/60 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-forest-light" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>5-Star Rated</span>
          </div>
          <div className="w-px h-3 bg-white/20 hidden sm:block" />
          <span>Licensed & Insured</span>
          <div className="w-px h-3 bg-white/20 hidden sm:block" />
          <span>Family Owned Since 2004</span>
        </motion.div>
      </div>

      {/* Scroll Indicator - hidden on very short viewports */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
