'use client'

import { Phone, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'FAQs', href: '#faq' },
]

const helpLinks = [
  { label: 'Contact Us', href: '#contact' },
  { label: 'FAQs', href: '#faq' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-foreground text-primary-foreground pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* About Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.png"
                alt="NXT LVL Landscape Logo"
                width={140}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-xs text-primary-foreground/60 font-editorial leading-relaxed mb-4 max-w-[260px]">
              Professional landscaping, hardscaping, and patio solutions tailored to your needs. Founded by Joseph A. & Jose Henriquez.
            </p>
            <a
              href="https://instagram.com/nxt.lvl.landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-pink-400 transition-colors text-xs py-2"
            >
              <Instagram size={15} />
              @nxt.lvl.landscape
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4 text-primary-foreground/80">Quick Links</h4>
            <ul className="space-y-0.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-xs sm:text-[13px] text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-200 py-1.5 -my-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4 text-primary-foreground/80">Help & Support</h4>
            <ul className="space-y-0.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-xs sm:text-[13px] text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-200 py-1.5 -my-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a href="mailto:nxtlvllandscape@gmail.com" className="flex items-center gap-2 text-xs sm:text-[13px] text-primary-foreground/55 hover:text-primary-foreground transition-colors py-1.5">
                <Mail size={14} className="shrink-0" />
                nxtlvllandscape@gmail.com
              </a>
            </div>
          </div>

          {/* Find Us */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4 text-primary-foreground/80">Find Us</h4>
            <div className="space-y-2.5">
              <a href="tel:+16577209054" className="flex items-center gap-2 text-xs sm:text-[13px] text-primary-foreground/55 hover:text-primary-foreground transition-colors py-1.5">
                <Phone size={14} className="shrink-0" />
                (657) 720-9054
              </a>
              <span className="flex items-start gap-2 text-xs sm:text-[13px] text-primary-foreground/55 py-1.5">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Orange County, California
              </span>
              <span className="flex items-center gap-2 text-xs sm:text-[13px] text-primary-foreground/55 py-1.5">
                <Mail size={14} className="shrink-0" />
                PST (Pacific Standard Time)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 sm:py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-primary-foreground/40">
          <p>&copy; 2025 By NXT LVL Landscape. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary-foreground/70 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-5 right-5 z-40 w-10 h-10 bg-foreground/80 hover:bg-foreground text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 sm:bottom-6 sm:right-6"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  )
}
