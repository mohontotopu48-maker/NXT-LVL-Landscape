'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { CheckCircle2, Shield, Clock, Award, Truck, ThumbsUp, Star } from 'lucide-react'

const values = [
  {
    title: 'Experience You Can Trust',
    description: 'With years of hands-on expertise, our team ensures every project is done with precision, quality, and care.',
  },
  {
    title: 'Custom Designs for Every Home',
    description: 'We create outdoor solutions tailored to your lifestyle, turning your vision into a reality that lasts.',
  },
]

const advantages = [
  { icon: Shield, title: 'Licensed & Insured', description: 'Full coverage protection for your property' },
  { icon: Clock, title: 'On-Time Delivery', description: 'We respect your schedule, every time' },
  { icon: Award, title: 'Premium Materials', description: 'Only the best from trusted manufacturers' },
  { icon: Truck, title: 'Clean Job Sites', description: 'We leave your property spotless' },
  { icon: ThumbsUp, title: 'Satisfaction Guaranteed', description: 'Your satisfaction is our priority' },
  { icon: CheckCircle2, title: 'Free Estimates', description: 'No-obligation quotes for every project' },
]

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 350, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
]

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {count}{suffix}
    </motion.span>
  )
}

// Split text reveal for headings
function SplitTextReveal({ text, className, isInView, delay = 0 }: { text: string; className?: string; isInView: boolean; delay?: number }) {
  const words = text.split(' ')
  return (
    <h2 className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.2em]"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  )
}

const testimonials = [
  {
    text: 'NXT LVL transformed our backyard into a paradise. The team was professional, reliable, and delivered exactly what we wanted — all at an affordable price. Highly recommend them!',
    rating: 5,
  },
  {
    text: 'Joseph and his crew went above and beyond our expectations. From design to installation, everything was smooth and stress-free. We absolutely love our new patio and can\'t wait to enjoy it for years to come.',
    rating: 5,
  },
  {
    text: 'This is by far the best landscaping company we\'ve ever hired. The attention to detail, the quality of work, and the respect for our property made all the difference. Definitely recommending them to family and friends.',
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
      <section id="about" className="py-16 sm:py-20 md:py-28 bg-background mesh-gradient-hero" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/[0.08]">
                <img
                  src="/images/about-real.jpg"
                  alt="NXT LVL Landscape team at work in Orange County"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-3 sm:-bottom-5 right-2 sm:right-8 bg-white rounded-xl shadow-xl p-3.5 sm:p-5 border border-border/40 animate-float"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-white text-xs font-bold border-2 border-white">J</div>
                    <div className="w-8 h-8 rounded-full bg-earth flex items-center justify-center text-white text-xs font-bold border-2 border-white">J</div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Founded by</div>
                    <div className="text-[11px] sm:text-sm font-semibold">Joseph & Jose</div>
                  </div>
                </div>
              </motion.div>

              {/* Stats floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-3 sm:-top-5 left-2 sm:left-8 bg-forest rounded-xl shadow-xl p-3.5 sm:p-4 text-white animate-float-slow"
              >
                <div className="text-2xl sm:text-3xl font-display">
                  <AnimatedCounter target={500} suffix="+" isInView={isInView} />
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 font-medium">Projects Done</div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="font-eyebrow text-forest mb-3 sm:mb-4"
              >
                About Us
              </motion.div>

              <SplitTextReveal
                text="Your Trusted Landscaping Experts"
                isInView={isInView}
                delay={0.1}
                className="text-[clamp(1.75rem,4.5vw,3rem)] font-display text-foreground mb-5 sm:mb-6 text-balance"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-[15px] text-muted-foreground font-editorial mb-4 leading-relaxed"
              >
                Founded by Joseph A. & Jose Henriquez, NXT LVL Landscape is built on the belief that every outdoor space deserves a touch of excellence. With years of experience, our team delivers professional landscaping, hardscaping, and patio solutions tailored to your needs. We don&apos;t just create landscapes — we create lasting experiences.
              </motion.p>

              {/* Values */}
              <div className="space-y-5 mt-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-xl p-4 sm:p-5 border border-border/40 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.12, type: 'spring' }}
                      >
                        <CheckCircle2 className="w-5 h-5 sm:w-[18px] sm:h-[18px] text-forest mt-0.5 shrink-0" />
                      </motion.div>
                      <div>
                        <span className="text-sm sm:text-[15px] text-foreground font-semibold block mb-1">{value.title}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-editorial leading-relaxed">{value.description}</span>
                      </div>
                    </div>
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
            <SplitTextReveal
              text="The NXT LVL Difference"
              isInView={isAdvantagesInView}
              delay={0.1}
              className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  animate={isAdvantagesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={isAdvantagesInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1, type: 'spring' }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-forest/8 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-forest/12 transition-colors"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest" strokeWidth={1.5} />
                  </motion.div>
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
            <SplitTextReveal
              text="What Our Clients Say"
              isInView={isTestimonialsInView}
              delay={0.1}
              className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-border/40 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isTestimonialsInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 + index * 0.12, type: 'spring' }}
                    >
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fbbf24] fill-[#fbbf24]" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isTestimonialsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.12, type: 'spring' }}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center text-sm font-semibold text-white"
                  >
                    ✓
                  </motion.div>
                  <div>
                    <div className="font-semibold text-sm">Verified Client</div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground">Happy Customer</div>
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
