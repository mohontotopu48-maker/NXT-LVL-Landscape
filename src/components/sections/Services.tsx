'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 'pavers',
    title: 'Pavers & Patios',
    description:
      'Hand-selected natural stone and premium concrete pavers installed with meticulous precision for lasting beauty.',
    image: '/images/service-pavers.png',
    features: ['Driveways', 'Patios', 'Walkways', 'Pool Decks'],
    accent: 'from-earth/80 to-earth-dark/80',
  },
  {
    id: 'concrete',
    title: 'Concrete Design',
    description:
      'Stamped, colored, and textured concrete that transforms surfaces into striking design statements.',
    image: '/images/service-concrete.png',
    features: ['Stamped', 'Colored', 'Foundations', 'Flatwork'],
    accent: 'from-foreground/70 to-foreground/90',
  },
  {
    id: 'retaining',
    title: 'Retaining Walls',
    description:
      'Engineered for strength, designed for beauty — creating stunning garden tiers and functional levels.',
    image: '/images/service-retaining.png',
    features: ['Segmental', 'Natural Stone', 'Terraces', 'Seat Walls'],
    accent: 'from-forest-dark/70 to-forest/80',
  },
  {
    id: 'lighting',
    title: 'Light Installation',
    description:
      'Architectural lighting that highlights your home\'s best features with ambiance and safety.',
    image: '/images/service-lighting.png',
    features: ['Path Lights', 'Up-lighting', 'Deck Lights', 'Security'],
    accent: 'from-gold/70 to-earth/70',
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
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Arrow */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg">
            <ArrowUpRight size={15} className="text-primary" />
          </div>
        </div>

        {/* Category tag on image */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-white/90 bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-full">
            {service.features[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 lg:p-7">
        <h3 className="text-base sm:text-lg font-semibold mb-1.5 tracking-tight">{service.title}</h3>
        <p className="text-muted-foreground text-[13px] sm:text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="px-2.5 py-1 bg-secondary/70 text-secondary-foreground text-[10px] sm:text-[11px] font-medium rounded-md"
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
    <section id="services" className="py-16 sm:py-20 md:py-28 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-eyebrow text-forest mb-3 sm:mb-4"
          >
            What We Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground mb-4 sm:mb-5 text-balance"
          >
            Crafted Services,
            <br />
            <span className="text-muted-foreground">Exceptional Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground font-editorial max-w-xl mx-auto px-2 leading-relaxed"
          >
            Each service is delivered with the same unwavering commitment to quality,
            precision, and lasting beauty.
          </motion.p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
