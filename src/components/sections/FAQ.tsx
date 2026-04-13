'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What services does NXT LVL Landscape offer?',
    answer: 'We offer a full range of professional landscaping and hardscaping services including Pavers, Concrete Work, Retaining Walls, Light Installation, Irrigation Systems, Drainage Installation, Tile Work, Planting, Sod Installation, Fire Pits & BBQ Installations, and Stucco Work. We also provide maintenance services like mowing, pruning, mulching, leaf removal, snow removal, and aeration.',
  },
  {
    question: 'How do I get a free quote?',
    answer: 'Getting a free quote is easy! You can call us at (657) 720-9054, email us at nxtlvllandscape@gmail.com, or fill out our online contact form on this website. We\'ll get back to you within 24 hours with a personalized estimate for your project.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We\'re based in Orange County, California and serve the surrounding communities. Contact us to confirm service availability in your specific area.',
  },
  {
    question: 'What promotions are currently available?',
    answer: 'We have several great promotions running: $500 off any hardscaping project above $5,000, Free Quotes & 10% off your first service, $25 off for referred customers, and 10-15% off softscape projects with any patio installation. Contact us to learn more!',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on the scope, materials, and complexity. During your free consultation, we\'ll provide a detailed timeline specific to your project. Our process is designed to be simple and stress-free from start to finish.',
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'We stand behind the quality of our work. After every project, we do a final walkthrough to ensure everything meets your expectations. Your satisfaction is our priority. Contact us for specific warranty details on your project.',
  },
  {
    question: 'Who owns NXT LVL Landscape?',
    answer: 'NXT LVL Landscape was founded by Joseph A. Henriquez & Jose Henriquez. We\'re a family-owned business built on the belief that every outdoor space deserves a touch of excellence.',
  },
  {
    question: 'What is your process?',
    answer: 'Our simple 4-step process: 1) Contact & Free Quote — share your ideas, 2) Consultation & Design — we visit your property and create a custom plan, 3) Project Execution — we bring your design to life with professional installation, 4) Final Walkthrough & Satisfaction — we review everything to ensure it meets your expectations.',
  },
]

function FAQItem({ faq, isOpen, onToggle, index, isInView }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-border/40 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-[15px] font-medium text-foreground pr-4 group-hover:text-forest transition-colors duration-200">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown
            size={18}
            className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-forest' : 'text-muted-foreground'}`}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden accordion-content"
          >
            <motion.p
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="pb-5 sm:pb-6 text-sm text-muted-foreground font-editorial leading-relaxed pr-8"
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 font-eyebrow text-forest mb-3 sm:mb-4">
            <HelpCircle size={14} />
            FAQs
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.75rem,5vw,2.75rem)] font-display text-foreground mb-3 sm:mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-[15px] text-muted-foreground font-editorial max-w-lg mx-auto leading-relaxed"
          >
            Got questions? We&apos;ve got answers. Here are the most common things people ask us about.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-secondary/20 rounded-2xl px-5 sm:px-7 md:px-8 border border-border/30"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Still have questions? We&apos;re happy to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+16577209054"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white rounded-full px-6 h-11 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-forest/25"
            >
              📞 (657) 720-9054
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 border border-border hover:bg-secondary text-foreground rounded-full px-6 h-11 text-sm font-semibold transition-all"
            >
              Send a Message
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
