'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Quote } from 'lucide-react'

const values = [
  'Precision craftsmanship in every stone and pour',
  'Materials sourced for longevity and beauty',
  'Transparent communication from concept to completion',
  'Designs that increase property value and quality of life',
]

const testimonials = [
  {
    name: 'Maria S.',
    role: 'Homeowner',
    text: 'NXT LVL transformed our backyard into an outdoor living room. The paver patio is absolutely stunning — neighbors keep stopping by to compliment it.',
    rating: 5,
  },
  {
    name: 'David & Karen T.',
    role: 'Property Investors',
    text: 'We hired them for a full hardscape renovation and the ROI was incredible. Our property value increased significantly. True professionals.',
    rating: 5,
  },
  {
    name: 'James R.',
    role: 'Repeat Client',
    text: 'First they did our driveway, then the retaining wall, then the landscape lighting. Every single project exceeded expectations. We won\'t use anyone else.',
    rating: 5,
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: '-80px' })

  return (
    <>
      <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
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
                className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-8 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-border/50"
              >
                <div className="text-2xl sm:text-3xl font-display text-forest">20</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years of</div>
                <div className="text-xs sm:text-sm font-semibold">Craftsmanship</div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/5 rounded-full mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 bg-forest rounded-full" />
                <span className="text-xs sm:text-sm font-medium text-forest">Our Story</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4 sm:mb-6 text-balance">
                Not Just Landscaping.
                <br />
                <span className="text-muted-foreground">A Legacy of Craft.</span>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground font-editorial mb-4 sm:mb-6 leading-relaxed">
                Founded by brothers Joseph & Jose Henriquez, NXT LVL Landscape was built on a simple
                belief: your outdoor space should be as thoughtfully designed as your home&apos;s interior.
                For two decades, we&apos;ve transformed properties with precision hardscaping that stands the test of time.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground font-editorial mb-6 sm:mb-8 leading-relaxed">
                Every project begins with understanding your vision and ends with an outdoor space
                that exceeds it. We don&apos;t just move earth and lay stone — we craft lasting
                experiences.
              </p>

              {/* Values */}
              <div className="space-y-3 sm:space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base text-foreground font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-24 bg-secondary/30" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/5 rounded-full mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 bg-forest rounded-full" />
              <span className="text-xs sm:text-sm font-medium text-forest">Client Stories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-foreground">
              What Our Clients Say
            </h2>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-border/50 shadow-sm"
              >
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-forest/15 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-muted-foreground font-editorial leading-relaxed mb-4 sm:mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
