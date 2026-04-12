'use client'

import { ArrowUpRight, Phone, Mail, MapPin, Instagram } from 'lucide-react'

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
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm tracking-tight">NXT</span>
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight leading-none">NXT LVL</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground leading-none mt-0.5">
                  Landscape
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-editorial leading-relaxed mb-6 max-w-xs">
              Precision hardscaping and landscape design that creates lasting outdoor experiences.
              Founded by Joseph & Jose Henriquez.
            </p>
            <a
              href="https://instagram.com/nxt.lvl.landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors duration-300 text-sm"
            >
              <Instagram size={18} />
              @nxt.lvl.landscape
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Phone size={14} />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nxtlvllandscape.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Mail size={14} />
                  info@nxtlvllandscape.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Serving the Greater Metro Area & Surrounding Counties</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NXT LVL Landscape. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
