'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Lightbulb, Layers, Hammer, BrickWall, Droplets, Waves, Square, Flower2, Sprout, Flame, Paintbrush } from 'lucide-react'

const services = [
  {
    id: 'lighting',
    title: 'Light Installation',
    description: 'Enhance your outdoor spaces with professional landscape lighting that adds beauty, security, and ambiance.',
    image: '/images/svc-lighting.jpg',
    icon: Lightbulb,
    benefits: ['Increased security and safety', 'Extended outdoor living hours', 'Highlight architectural features', 'Energy-efficient LED options'],
  },
  {
    id: 'pavers',
    title: 'Pavers',
    description: 'Custom-designed paver walkways, patios, and driveways that bring durability and style to your property.',
    image: '/images/svc-pavers.jpg',
    icon: Layers,
    benefits: ['Custom patterns and designs', 'Durable and long-lasting', 'Low maintenance', 'Increases property value'],
  },
  {
    id: 'concrete',
    title: 'Concrete Work',
    description: 'High-quality concrete solutions for patios, pathways, and outdoor living areas built to last.',
    image: '/images/svc-concrete.jpg',
    icon: Hammer,
    benefits: ['Stamped and decorative finishes', 'Structural strength', 'Versatile design options', 'Weather resistant'],
  },
  {
    id: 'retaining',
    title: 'Retaining Walls',
    description: 'Functional and decorative retaining walls that prevent erosion while adding structure and elegance to your yard.',
    image: '/images/svc-retaining.jpg',
    icon: BrickWall,
    benefits: ['Erosion prevention', 'Creates usable garden space', 'Decorative stone and block options', 'Engineered for stability'],
  },
  {
    id: 'irrigation',
    title: 'Irrigation System Install',
    description: 'Efficient irrigation systems designed to keep your lawn and garden healthy year-round with minimal effort.',
    image: '/images/svc-irrigation.jpg',
    icon: Droplets,
    benefits: ['Water-efficient smart systems', 'Automatic scheduling', 'Drip and sprinkler options', 'Reduced water bills'],
  },
  {
    id: 'drainage',
    title: 'Drainage Installation',
    description: 'Professional drainage solutions to protect your landscape from water damage and maintain proper flow.',
    image: '/images/svc-drainage.jpg',
    icon: Waves,
    benefits: ['Prevents flooding and pooling', 'Protects foundation', 'French drain systems', 'Grading and channel solutions'],
  },
  {
    id: 'tile',
    title: 'Tile Work',
    description: 'Beautiful outdoor tile installations for patios, fire pits, and decorative accents that elevate your design.',
    image: '/images/svc-tile.jpg',
    icon: Square,
    benefits: ['Premium porcelain and ceramic', 'Custom patterns and layouts', 'Slip-resistant finishes', 'Easy to clean'],
  },
  {
    id: 'planting',
    title: 'Planting',
    description: 'Add flowers, shrubs, or trees to create stunning landscapes.',
    image: '/images/svc-planting.jpg',
    icon: Flower2,
    benefits: ['Native and drought-tolerant plants', 'Seasonal color planning', 'Tree and shrub installation', 'Garden bed design'],
  },
  {
    id: 'sod',
    title: 'Sod Installation',
    description: 'Fresh sod professionally installed for an instant lush, green lawn that transforms your outdoor space.',
    image: '/images/svc-sod.jpg',
    icon: Sprout,
    benefits: ['Instant green lawn', 'Professional soil preparation', 'Premium sod varieties', 'Proper watering guidelines'],
  },
  {
    id: 'firepit',
    title: 'Fire Pits / BBQ Installations',
    description: 'Custom-built fire pits and BBQ areas for entertaining and enjoying cozy outdoor gatherings.',
    image: '/images/svc-firepit.jpg',
    icon: Flame,
    benefits: ['Custom stone and brick designs', 'Gas and wood-burning options', 'BBQ island installations', 'Built-in seating areas'],
  },
  {
    id: 'stucco',
    title: 'Stucco Work',
    description: 'Durable and stylish stucco applications to enhance the appearance and protection of your property.',
    image: '/images/svc-stucco.jpg',
    icon: Paintbrush,
    benefits: ['Long-lasting durability', 'Custom color matching', 'Texture options', 'Weather protection'],
  },
]

function ServiceCard({
  service,
  index,
  onLearnMore,
}: {
  service: (typeof services)[0]
  index: number
  onLearnMore: (service: (typeof services)[0]) => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500 card-lift"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} by NXT LVL Landscape`}
          className="w-full h-full object-cover img-zoom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md">
            <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-forest hover:text-white transition-colors" onClick={() => onLearnMore(service)}>
            <ArrowUpRight size={15} className="text-primary group-hover/item:text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-1.5 tracking-tight">{service.title}</h3>
        <p className="text-muted-foreground text-[13px] sm:text-sm leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>
        <button
          onClick={() => onLearnMore(service)}
          className="text-forest text-[13px] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
        >
          Learn More
          <ArrowUpRight size={13} />
        </button>
      </div>
    </motion.div>
  )
}

export function Services({ onLearnMore }: { onLearnMore: (service: (typeof services)[0]) => void }) {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 mesh-gradient-forest">
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
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground font-editorial max-w-xl mx-auto px-2 leading-relaxed"
          >
            From professional lighting to custom paver patios, we deliver quality craftsmanship in every project.
          </motion.p>
        </div>

        {/* Service Grid - 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} onLearnMore={onLearnMore} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { services }
export type ServiceType = (typeof services)[0]
