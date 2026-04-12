'use client'

import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Pavers & Patios', href: '#services' },
    { label: 'Concrete Work', href: '#services' },
    { label: 'Retaining Walls', href: '#services' },
    { label: 'Landscape Lighting', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#experience' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Free Quote', href: '#planner' },
    { label: 'Contact', href: '#planner' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10 sm:py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs sm:text-sm tracking-tight">NXT</span>
              </div>
              <div>
                <div className="text-base sm:text-lg font-semibold tracking-tight leading-none">NXT LVL</div>
                <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground leading-none mt-0.5">
                  Landscape
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground font-editorial leading-relaxed mb-4 sm:mb-6 max-w-xs">
              Precision hardscaping and landscape design that creates lasting outdoor experiences.
              Founded by Joseph & Jose Henriquez.
            </p>
            <a
              href="https://instagram.com/nxt.lvl.landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors duration-300 text-xs sm:text-sm py-2"
            >
              <Instagram size={16} />
              @nxt.lvl.landscape
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 -my-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-1">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 -my-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-6 sm:py-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
            <a href="tel:+15551234567" className="flex items-center gap-1.5 sm:gap-2 hover:text-foreground transition-colors py-2 -my-1">
              <Phone size={14} />
              (555) 123-4567
            </a>
            <a href="mailto:info@nxtlvllandscape.com" className="flex items-center gap-1.5 sm:gap-2 hover:text-foreground transition-colors py-2 -my-1">
              <Mail size={14} />
              info@nxtlvllandscape.com
            </a>
            <span className="flex items-start gap-1.5 sm:gap-2 py-2 -my-1">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Serving the Greater Metro Area
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NXT LVL Landscape. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="hover:text-foreground transition-colors py-2 -my-1">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors py-2 -my-1">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
