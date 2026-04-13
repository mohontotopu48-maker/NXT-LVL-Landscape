'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Lock, Bell, MessageSquare, FileText } from 'lucide-react'

export function PrivacyPolicyContent() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: 'We may collect personal information that you voluntarily provide to us when you contact us, request a quote, or fill out a form on our website. This includes your name, email address, phone number, service preferences, and project details.',
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to respond to your inquiries, provide quotes, deliver our services, communicate with you about projects, and improve our website and services. With your consent, we may also send you promotional SMS notifications about our services.',
    },
    {
      icon: Bell,
      title: 'SMS Communications',
      content: 'If you opt in to SMS communications, you agree to receive occasional SMS notifications from Prosper MGMT Inc. Message frequency varies. Standard message and data rates may apply. You can opt out at any time by replying STOP to any message.',
    },
    {
      icon: Shield,
      title: 'Data Protection',
      content: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
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
            <Shield className="w-3.5 h-3.5 text-white/80" />
            <span className="text-white/80 text-xs font-medium tracking-wide">Legal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-3 sm:mb-4"
          >
            Privacy Policy
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
              NXT LVL Landscape (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </motion.div>

          {/* Info Cards */}
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-forest-dark via-forest to-forest-light rounded-2xl p-5 sm:p-7 text-center"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Questions About This Policy?</h3>
            <p className="text-white/70 text-sm font-editorial mb-4">Contact us anytime — we&apos;re happy to help.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:nxtlvllandscape@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-forest rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                nxtlvllandscape@gmail.com
              </a>
              <a
                href="tel:+16577209054"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                (657) 720-9054
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
