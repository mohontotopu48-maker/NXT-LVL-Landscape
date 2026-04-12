'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 'pavers',
    title: 'Pavers',
    description:
      'Hand-selected natural stone and premium concrete pavers installed with meticulous precision.',
    image: '/images/service-pavers.png',
    features: ['Driveways', 'Patios', 'Walkways', 'Pool Decks'],
  },
  {
    id: 'concrete',
    title: 'Concrete',
    description:
      'Stamped, colored, and textured concrete work that transforms surfaces into design statements.',
    image: '/images/service-concrete.png',
    features: ['Stamped', 'Colored', 'Driveways', 'Foundations'],
  },
  {
    id: 'retaining',
    title: 'Retaining Walls',
    description:
      'Engineered for strength, designed for beauty — creating stunning garden tiers and levels.',
    image: '/images/service-retaining.png',
    features: ['Segmental', 'Natural Stone', 'Terraces', 'Seat Walls'],
  },
  {
    id: 'lighting',
    title: 'Light Installation',
    description:
      'Architectural lighting that highlights your home\'s best features with ambiance and safety.',
    image: '/images/service-lighting.png',
    features: ['Path Lighting', 'Up-lighting', 'Deck Lights', 'Security'],
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Arrow */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <ArrowUpRight size={14} className="text-primary sm:w-[18px] sm:h-[18px]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 tracking-tight">{service.title}</h3>
        <p className="text-muted-foreground font-editorial text-sm leading-relaxed mb-3 sm:mb-5">
          {service.description}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="px-2 py-0.5 sm:px-3 sm:py-1 bg-secondary/80 text-secondary-foreground text-[10px] sm:text-xs font-medium rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/5 rounded-full mb-4 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 bg-forest rounded-full" />
            <span className="text-xs sm:text-sm font-medium text-forest">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4 sm:mb-6"
          >
            Crafted Services,
            <br className="sm:hidden" />
            <span className="sm:inline"> </span>
            <span className="text-muted-foreground">Exceptional Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground font-editorial max-w-xl sm:max-w-2xl mx-auto px-2"
          >
            Each service is delivered with the same unwavering commitment to quality,
            precision, and lasting beauty.
          </motion.p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
