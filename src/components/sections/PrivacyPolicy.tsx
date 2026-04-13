'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function PrivacyPolicy() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section id="privacy" className="py-16 sm:py-20 bg-white" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-6">Privacy Policy</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground font-editorial leading-relaxed space-y-4">
            <p><strong className="text-foreground">Last Updated:</strong> January 2025</p>
            <p>NXT LVL Landscape (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Information We Collect</h3>
            <p>We may collect personal information that you voluntarily provide to us when you contact us, request a quote, or fill out a form on our website. This includes your name, email address, phone number, service preferences, and project details.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">How We Use Your Information</h3>
            <p>We use the information we collect to respond to your inquiries, provide quotes, deliver our services, communicate with you about projects, and improve our website and services. With your consent, we may also send you promotional SMS notifications about our services.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">SMS Communications</h3>
            <p>If you opt in to SMS communications, you agree to receive occasional SMS notifications from Prosper MGMT Inc. Message frequency varies. Standard message and data rates may apply. You can opt out at any time by replying STOP to any message.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Data Protection</h3>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Contact Us</h3>
            <p>If you have questions about this privacy policy, please contact us at <a href="mailto:nxtlvllandscape@gmail.com" className="text-forest hover:underline">nxtlvllandscape@gmail.com</a> or call <a href="tel:+16577209054" className="text-forest hover:underline">(657) 720-9054</a>.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
