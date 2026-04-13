'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function TermsConditions() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section id="terms" className="py-16 sm:py-20 bg-white" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-6">Terms &amp; Conditions</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground font-editorial leading-relaxed space-y-4">
            <p><strong className="text-foreground">Last Updated:</strong> January 2025</p>
            <p>Welcome to NXT LVL Landscape. These terms and conditions govern your use of our website and services. By accessing our website or engaging our services, you agree to these terms.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Services</h3>
            <p>NXT LVL Landscape provides professional landscaping and hardscaping services in Orange County, California and surrounding areas. All services are subject to availability and a signed agreement. Project timelines and costs are estimates and may vary based on project scope.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Quotes and Estimates</h3>
            <p>Free quotes are provided as estimates and may be subject to change based on a detailed on-site assessment. A formal agreement must be signed before work commences. Prices are valid for 30 days from the date of the quote unless otherwise stated.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Payment</h3>
            <p>Payment terms will be outlined in the project agreement. A deposit may be required before work begins. Final payment is due upon project completion and satisfactory walkthrough.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Promotions</h3>
            <p>Promotional offers are subject to change without notice and cannot be combined with other offers unless explicitly stated. Promotions have specific terms and conditions that will be communicated at the time of the offer.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Limitation of Liability</h3>
            <p>NXT LVL Landscape is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the cost of services provided.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6">Contact</h3>
            <p>For questions about these terms, contact us at <a href="mailto:nxtlvllandscape@gmail.com" className="text-forest hover:underline">nxtlvllandscape@gmail.com</a> or call <a href="tel:+16577209054" className="text-forest hover:underline">(657) 720-9054</a>.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
