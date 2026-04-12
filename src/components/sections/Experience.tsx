'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Shield, Clock, Award, Truck, ThumbsUp } from 'lucide-react'

const values = [
  'Precision craftsmanship in every stone and pour',
  'Materials sourced for longevity and beauty',
  'Transparent communication from concept to completion',
  'Designs that increase property value and quality of life',
]

const advantages = [
  { icon: Shield, title: 'Licensed & Insured', description: 'Full coverage protection for your property' },
  { icon: Clock, title: 'On-Time Delivery', description: 'We respect your schedule, every time' },
  { icon: Award, title: 'Premium Materials', description: 'Only the best from trusted manufacturers' },
  { icon: Truck, title: 'Clean Job Sites', description: 'We leave your property spotless' },
  { icon: ThumbsUp, title: '5-Year Warranty', description: 'We stand behind every project' },
  { icon: CheckCircle2, title: 'Satisfaction Guaranteed', description: '100% client satisfaction, period' },
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
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: '-60px' })
  const advantagesRef = useRef(null)
  const isAdvantagesInView = useInView(advantagesRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* Experience / About */}
      <section id="experience" className="py-16 sm:py-20 md:py-28 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/[0.08]">
                <img
                  src="/images/experience.png"
                  alt="NXT LVL Landscape craftsmanship"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-3 sm:-bottom-5 right-2 sm:right-8 bg-white rounded-xl shadow-xl p-3.5 sm:p-5 border border-border/40 animate-float"
              >
                <div className="text-2xl sm:text-3xl font-display text-forest">20</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Years of</div>
                <div className="text-[10px] sm:text-xs font-semibold">Craftsmanship</div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <div className="font-eyebrow text-forest mb-3 sm:mb-4">
                Our Story
              </div>

              <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-display text-foreground mb-5 sm:mb-6 text-balance">
                Not Just Landscaping.
                <br />
                <span className="text-muted-foreground">A Legacy of Craft.</span>
              </h2>

              <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial mb-4 leading-relaxed">
                Founded by brothers Joseph & Jose Henriquez, NXT LVL Landscape was built on a simple
                belief: your outdoor space should be as thoughtfully designed as your home&apos;s interior.
              </p>

              <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial mb-6 sm:mb-8 leading-relaxed">
                For two decades, we&apos;ve transformed properties with precision hardscaping that
                stands the test of time. Every project begins with understanding your vision and ends
                with an outdoor space that exceeds it.
              </p>

              {/* Values */}
              <div className="space-y-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-forest mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-[15px] text-foreground font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary/20" ref={advantagesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isAdvantagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="font-eyebrow text-forest mb-3 sm:mb-4">
              Why NXT LVL
            </div>
            <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground">
              The NXT LVL Difference
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAdvantagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest/8 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-forest/12 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground font-editorial leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-28 bg-background" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="font-eyebrow text-forest mb-3 sm:mb-4">
              Client Stories
            </div>
            <h2 className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-border/40 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fbbf24] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-forest">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
