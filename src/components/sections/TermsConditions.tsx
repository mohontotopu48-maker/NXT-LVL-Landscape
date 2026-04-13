'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, ClipboardList, CreditCard, Tag, AlertTriangle, Phone, Mail } from 'lucide-react'

export function TermsConditionsContent() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  const sections = [
    {
      icon: FileText,
      title: 'Services',
      content: 'NXT LVL Landscape provides professional landscaping and hardscaping services in Orange County, California and surrounding areas. All services are subject to availability and a signed agreement. Project timelines and costs are estimates and may vary based on project scope.',
    },
    {
      icon: ClipboardList,
      title: 'Quotes and Estimates',
      content: 'Free quotes are provided as estimates and may be subject to change based on a detailed on-site assessment. A formal agreement must be signed before work commences. Prices are valid for 30 days from the date of the quote unless otherwise stated.',
    },
    {
      icon: CreditCard,
      title: 'Payment',
      content: 'Payment terms will be outlined in the project agreement. A deposit may be required before work begins. Final payment is due upon project completion and satisfactory walkthrough.',
    },
    {
      icon: Tag,
      title: 'Promotions',
      content: 'Promotional offers are subject to change without notice and cannot be combined with other offers unless explicitly stated. Promotions have specific terms and conditions that will be communicated at the time of the offer.',
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: 'NXT LVL Landscape is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the cost of services provided.',
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-forest-dark via-forest to-forest-light mesh-gradient-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6"
          >
            <FileText className="w-3.5 h-3.5 text-white/80" />
            <span className="text-white/80 text-xs font-medium tracking-wide">Legal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-3 sm:mb-4"
          >
            Terms &amp; Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-white/60 font-editorial"
          >
            Last Updated: January 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white" ref={sectionRef}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10"
          >
            <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial leading-relaxed">
              Welcome to NXT LVL Landscape. These terms and conditions govern your use of our website and services. By accessing our website or engaging our services, you agree to these terms.
            </p>
          </motion.div>

          {/* Terms Cards */}
          <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="bg-secondary/30 rounded-2xl p-5 sm:p-6 border border-border/40"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 tracking-tight">{section.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-editorial leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-r from-forest-dark via-forest to-forest-light rounded-2xl p-5 sm:p-7 text-center"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Questions About These Terms?</h3>
            <p className="text-white/70 text-sm font-editorial mb-4">We&apos;re here to clarify anything. Reach out anytime.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:nxtlvllandscape@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-forest rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                nxtlvllandscape@gmail.com
              </a>
              <a
                href="tel:+16577209054"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                <Phone className="w-4 h-4" />
                (657) 720-9054
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
