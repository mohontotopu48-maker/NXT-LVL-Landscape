'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Floating leaf particles
function LeafParticles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 3 + Math.random() * 4,
    duration: 12 + Math.random() * 18,
    delay: Math.random() * 15,
    drift: (Math.random() - 0.5) * 120,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: p.left,
            top: -20,
            width: p.size,
            height: p.size,
            animation: `leaf-float ${p.duration}s linear ${p.delay}s infinite`,
            // @ts-expect-error CSS custom animation
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}

// Word-by-word staggered text reveal
function AnimatedWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Ken Burns + Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src="/images/hero-real.jpg"
          alt="Professional landscaping and hardscaping by NXT LVL Landscape"
          className="w-full h-full object-cover ken-burns"
        />
      </motion.div>

      {/* Cinematic multi-layer overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Floating leaf particles */}
      <LeafParticles />

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-14 sm:pt-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6 sm:mb-8"
        >
          <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-subtle-pulse" />
          <span className="text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
            Transform Your Outdoors
          </span>
        </motion.div>

        {/* Headline - word-by-word reveal */}
        <h1 className="text-[clamp(2.2rem,7vw,5rem)] font-display text-white leading-[1.05] mb-5 sm:mb-6 text-balance">
          <AnimatedWords text="Professional Landscaping" delay={0.5} />
          <br />
          <AnimatedWords
            text="& Hardscaping Services"
            delay={0.9}
            className="gradient-text-light"
          />
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/75 font-editorial max-w-2xl mx-auto mb-8 sm:mb-10 px-2 text-balance leading-relaxed"
        >
          From lush gardens to stunning patios, NXT LVL Landscape brings your outdoor vision to life. Get expert design, reliable service, and lasting beauty for your home or business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-forest hover:bg-forest-light text-white rounded-full px-7 sm:px-8 h-12 sm:h-[52px] text-sm sm:text-[15px] font-semibold shadow-2xl shadow-black/25 transition-all duration-300 hover:shadow-black/35 hover:scale-[1.02] animate-pulse-glow group"
          >
            <a href="#contact" className="gap-2">
              Get Free Estimate
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto text-white/85 hover:text-white hover:bg-white/10 rounded-full px-7 sm:px-8 h-12 sm:h-[52px] text-sm sm:text-[15px] font-medium gap-2.5 transition-all duration-300 border border-white/15 hover:border-white/30"
          >
            <a href="#gallery">
              View Our Work
            </a>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
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
          <a href="tel:+16577209054" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>(657) 720-9054</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[22px] h-[34px] rounded-full border-[1.5px] border-white/25 flex items-start justify-center pt-2"
        >
          <motion.div
            className="w-[3px] h-[6px] bg-white/50 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
