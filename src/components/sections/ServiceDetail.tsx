'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'
import { ServiceType } from './Services'

interface ServiceDetailProps {
  service: ServiceType | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ServiceDetail({ service, open, onOpenChange }: ServiceDetailProps) {
  if (!service) return null
  const Icon = service.icon

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0 bg-white border-border/40">
        <DialogTitle className="sr-only">{service.title} - NXT LVL Landscape</DialogTitle>
        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3">
            <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-forest" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-display text-white">{service.title}</h2>
              <p className="text-white/70 text-xs sm:text-sm">NXT LVL Landscape</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7">
          {/* Description */}
          <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Key Benefits */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold tracking-tight mb-3 text-foreground">Key Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 bg-forest/[0.03] rounded-lg">
                  <CheckCircle className="w-4 h-4 text-forest mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-forest-dark via-forest to-forest-light rounded-xl p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Interested in {service.title}?
            </h3>
            <p className="text-white/75 text-sm font-editorial mb-4 leading-relaxed">
              Get a free, no-obligation quote for your project. Our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-white text-forest hover:bg-white/90 rounded-full h-11 text-sm font-semibold flex-1 sm:flex-none gap-2"
              >
                <a href="#contact" onClick={() => onOpenChange(false)}>
                  Get a Free Quote
                  <ArrowRight size={14} />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white/85 hover:text-white hover:bg-white/10 rounded-full h-11 text-sm gap-2"
              >
                <a href="tel:+16577209054">
                  <Phone size={14} />
                  (657) 720-9054
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-border/30">
            <a href="tel:+16577209054" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={14} />
              (657) 720-9054
            </a>
            <a href="mailto:nxtlvllandscape@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={14} />
              nxtlvllandscape@gmail.com
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
