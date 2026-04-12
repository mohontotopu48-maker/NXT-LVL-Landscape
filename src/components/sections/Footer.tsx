'use client'

import { Phone, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  services: [
    { label: 'Pavers & Patios', href: '#services' },
    { label: 'Concrete Design', href: '#services' },
    { label: 'Retaining Walls', href: '#services' },
    { label: 'Landscape Lighting', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#experience' },
    { label: 'Our Process', href: '#process' },
    { label: 'Project Gallery', href: '#gallery' },
    { label: 'Free Estimate', href: '#planner' },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-border/40 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10 sm:py-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-[10px] tracking-tight">NXT</span>
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight leading-none">NXT LVL</div>
                <div className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground leading-none mt-0.5">
                  Landscape
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-editorial leading-relaxed mb-4 max-w-[260px]">
              Precision hardscaping and landscape design that creates lasting outdoor experiences.
              Founded by Joseph & Jose Henriquez.
            </p>
            <a
              href="https://instagram.com/nxt.lvl.landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors text-xs py-2"
            >
              <Instagram size={15} />
              @nxt.lvl.landscape
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3">Services</h4>
            <ul className="space-y-0.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-xs sm:text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 py-1.5 -my-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3">Company</h4>
            <ul className="space-y-0.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-xs sm:text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 py-1.5 -my-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3">Contact</h4>
            <div className="space-y-2">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-xs sm:text-[13px] text-muted-foreground hover:text-foreground transition-colors py-1.5">
                <Phone size={14} className="shrink-0" />
                (555) 123-4567
              </a>
              <a href="mailto:info@nxtlvllandscape.com" className="flex items-center gap-2 text-xs sm:text-[13px] text-muted-foreground hover:text-foreground transition-colors py-1.5">
                <Mail size={14} className="shrink-0" />
                info@nxtlvllandscape.com
              </a>
              <span className="flex items-start gap-2 text-xs sm:text-[13px] text-muted-foreground py-1.5">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Serving the Greater Metro Area
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-5 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NXT LVL Landscape. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
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
