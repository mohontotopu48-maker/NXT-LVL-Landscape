'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const values = [
  'Precision craftsmanship in every stone and pour',
  'Materials sourced for longevity and beauty',
  'Transparent communication from concept to completion',
  'Designs that increase property value and quality of life',
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 sm:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src="/images/experience.png"
                alt="NXT LVL Landscape craftsmanship"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-2xl shadow-xl p-6 border border-border/50"
            >
              <div className="text-3xl font-display text-forest">20</div>
              <div className="text-sm text-muted-foreground">Years of</div>
              <div className="text-sm font-semibold">Craftsmanship</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-forest rounded-full" />
              <span className="text-sm font-medium text-forest">Our Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6 text-balance">
              Not Just Landscaping.
              <br />
              <span className="text-muted-foreground">A Legacy of Craft.</span>
            </h2>

            <p className="text-lg text-muted-foreground font-editorial mb-6 leading-relaxed">
              Founded by brothers Joseph & Jose Henriquez, NXT LVL Landscape was built on a simple
              belief: your outdoor space should be as thoughtfully designed as your home&apos;s interior.
              For two decades, we&apos;ve transformed properties across the region with precision
              hardscaping that stands the test of time.
            </p>

            <p className="text-lg text-muted-foreground font-editorial mb-8 leading-relaxed">
              Every project begins with understanding your vision and ends with an outdoor space
              that exceeds it. We don&apos;t just move earth and lay stone — we craft lasting
              experiences.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-forest mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
