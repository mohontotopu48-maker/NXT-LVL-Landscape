'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 sm:py-32 bg-primary" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-primary-foreground mb-6 text-balance">
            Ready to Transform
            <br />
            Your Outdoor Space?
          </h2>

          <p className="text-lg text-primary-foreground/70 font-editorial max-w-2xl mx-auto mb-10">
            Let&apos;s create something extraordinary together. Your free consultation
            is just a click away — no commitment, just conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-forest hover:bg-forest-light text-white rounded-full px-8 h-14 text-base font-semibold shadow-xl shadow-forest/20 transition-all duration-300 hover:scale-[1.02] group"
            >
              <a href="#planner" className="gap-2">
                Get Your Free Quote
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 h-14 text-base font-medium gap-2 transition-all duration-300"
            >
              <a href="tel:+15551234567">
                <Phone size={18} />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/50">
            <a href="mailto:info@nxtlvllandscape.com" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
              <Mail size={16} />
              info@nxtlvllandscape.com
            </a>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/20" />
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
              <Phone size={16} />
              (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
