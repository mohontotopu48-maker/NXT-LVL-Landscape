'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Start Your Project', href: '#planner' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm'
            : 'bg-gradient-to-b from-black/30 to-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group z-10">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-xs sm:text-sm tracking-tight">NXT</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold tracking-tight leading-none">
                NXT LVL
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground leading-none mt-0.5">
                Landscape
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 xl:px-4 py-2 text-sm transition-colors duration-300 rounded-lg hover:bg-secondary/50 ${
                  isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="ml-3 bg-forest hover:bg-forest-light text-white rounded-full px-5 xl:px-6 h-10 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-forest/20"
            >
              <a href="#planner">Free Quote</a>
            </Button>
          </div>

          {/* Mobile: CTA + Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              asChild
              className="bg-forest hover:bg-forest-light text-white rounded-full px-4 h-9 text-xs font-medium"
            >
              <a href="#planner">Free Quote</a>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors z-10 ${
                isScrolled ? 'hover:bg-secondary/50 text-foreground' : 'hover:bg-white/10 text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="text-2xl sm:text-3xl font-display text-foreground hover:text-forest py-3 transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="mt-6"
              >
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-lg">(555) 123-4567</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
