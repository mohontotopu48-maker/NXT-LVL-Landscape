'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/85 backdrop-blur-2xl border-b border-border/30 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group z-10">
            <Image
              src="/images/logo.png"
              alt="NXT LVL Landscape Logo"
              width={140}
              height={40}
              className="h-8 sm:h-9 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 xl:px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-lg hover:bg-black/5 ${
                  isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 flex items-center gap-2">
              <a
                href="tel:+16577209054"
                className={`px-3 py-2 text-[13px] font-medium transition-all duration-300 rounded-lg flex items-center gap-1.5 ${
                  isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/70 hover:text-white'
                }`}
              >
                <Phone size={13} />
                (657) 720-9054
              </a>
              <Button
                asChild
                className="bg-forest hover:bg-forest-light text-white rounded-full px-5 xl:px-6 h-9 text-[13px] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-forest/25"
              >
                <a href="#contact">Free Estimate</a>
              </Button>
            </div>
          </div>

          {/* Mobile: CTA + Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+16577209054"
              className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-forest/5 text-forest hover:bg-forest/10'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Call us"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-11 h-11 flex items-center justify-center rounded-lg transition-colors z-10 ${
                isScrolled ? 'hover:bg-secondary text-foreground' : 'hover:bg-white/10 text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-1 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="text-[26px] font-display text-foreground hover:text-forest py-2.5 transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.45 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <Button
                  asChild
                  className="bg-forest hover:bg-forest-light text-white rounded-full px-8 h-12 text-sm font-medium w-64"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Free Estimate</a>
                </Button>
                <a
                  href="tel:+16577209054"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Phone size={16} />
                  (657) 720-9054
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
