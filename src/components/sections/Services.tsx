'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useCallback } from 'react'
import { ArrowUpRight, Lightbulb, Layers, Hammer, BrickWall, Droplets, Waves, Square, Flower2, Sprout, Flame, Paintbrush } from 'lucide-react'

const services = [
  {
    id: 'lighting',
    title: 'Light Installation',
    description: 'Enhance your outdoor spaces with professional landscape lighting that adds beauty, security, and ambiance.',
    image: '/images/svc-lighting-real.jpg',
    icon: Lightbulb,
    benefits: ['Increased security and safety', 'Extended outdoor living hours', 'Highlight architectural features', 'Energy-efficient LED options'],
  },
  {
    id: 'pavers',
    title: 'Pavers',
    description: 'Custom-designed paver walkways, patios, and driveways that bring durability and style to your property.',
    image: '/images/svc-pavers-real.jpg',
    icon: Layers,
    benefits: ['Custom patterns and designs', 'Durable and long-lasting', 'Low maintenance', 'Increases property value'],
  },
  {
    id: 'concrete',
    title: 'Concrete Work',
    description: 'High-quality concrete solutions for patios, pathways, and outdoor living areas built to last.',
    image: '/images/svc-concrete-real.jpg',
    icon: Hammer,
    benefits: ['Stamped and decorative finishes', 'Structural strength', 'Versatile design options', 'Weather resistant'],
  },
  {
    id: 'retaining',
    title: 'Retaining Walls',
    description: 'Functional and decorative retaining walls that prevent erosion while adding structure and elegance to your yard.',
    image: '/images/svc-retaining-real.jpg',
    icon: BrickWall,
    benefits: ['Erosion prevention', 'Creates usable garden space', 'Decorative stone and block options', 'Engineered for stability'],
  },
  {
    id: 'irrigation',
    title: 'Irrigation System Install',
    description: 'Efficient irrigation systems designed to keep your lawn and garden healthy year-round with minimal effort.',
    image: '/images/real-project-10.jpg',
    icon: Droplets,
    benefits: ['Water-efficient smart systems', 'Automatic scheduling', 'Drip and sprinkler options', 'Reduced water bills'],
  },
  {
    id: 'drainage',
    title: 'Drainage Installation',
    description: 'Professional drainage solutions to protect your landscape from water damage and maintain proper flow.',
    image: '/images/real-project-11.jpg',
    icon: Waves,
    benefits: ['Prevents flooding and pooling', 'Protects foundation', 'French drain systems', 'Grading and channel solutions'],
  },
  {
    id: 'tile',
    title: 'Tile Work',
    description: 'Beautiful outdoor tile installations for patios, fire pits, and decorative accents that elevate your design.',
    image: '/images/real-project-12.jpg',
    icon: Square,
    benefits: ['Premium porcelain and ceramic', 'Custom patterns and layouts', 'Slip-resistant finishes', 'Easy to clean'],
  },
  {
    id: 'planting',
    title: 'Planting',
    description: 'Add flowers, shrubs, or trees to create stunning landscapes.',
    image: '/images/real-project-4.jpg',
    icon: Flower2,
    benefits: ['Native and drought-tolerant plants', 'Seasonal color planning', 'Tree and shrub installation', 'Garden bed design'],
  },
  {
    id: 'sod',
    title: 'Sod Installation',
    description: 'Fresh sod professionally installed for an instant lush, green lawn that transforms your outdoor space.',
    image: '/images/real-project-9.jpg',
    icon: Sprout,
    benefits: ['Instant green lawn', 'Professional soil preparation', 'Premium sod varieties', 'Proper watering guidelines'],
  },
  {
    id: 'firepit',
    title: 'Fire Pits / BBQ Installations',
    description: 'Custom-built fire pits and BBQ areas for entertaining and enjoying cozy outdoor gatherings.',
    image: '/images/svc-firepit-real.jpg',
    icon: Flame,
    benefits: ['Custom stone and brick designs', 'Gas and wood-burning options', 'BBQ island installations', 'Built-in seating areas'],
  },
  {
    id: 'stucco',
    title: 'Stucco Work',
    description: 'Durable and stylish stucco applications to enhance the appearance and protection of your property.',
    image: '/images/real-project-13.jpg',
    icon: Paintbrush,
    benefits: ['Long-lasting durability', 'Custom color matching', 'Texture options', 'Weather protection'],
  },
]

// Featured services for horizontal scroll showcase
const featuredServices = services.slice(0, 5)

function MagneticServiceCard({
  service,
  index,
  onLearnMore,
}: {
  service: (typeof services)[0]
  index: number
  onLearnMore: (service: (typeof services)[0]) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = service.icon

  // Magnetic hover effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.08)
    y.set((e.clientY - centerY) * 0.08)
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500"
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
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.08 + 0.3 }}
          className="absolute top-3 left-3 sm:top-4 sm:left-4"
        >
          <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md">
            <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Hover Arrow */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-forest hover:text-white transition-colors"
            onClick={() => onLearnMore(service)}
          >
            <ArrowUpRight size={15} className="text-primary group-hover/item:text-white" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-1.5 tracking-tight">{service.title}</h3>
        <p className="text-muted-foreground text-[13px] sm:text-sm leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>
        <motion.button
          onClick={() => onLearnMore(service)}
          whileHover={{ x: 2 }}
          className="text-forest text-[13px] font-medium inline-flex items-center gap-1 transition-all duration-200"
        >
          Learn More
          <ArrowUpRight size={13} />
        </motion.button>
      </div>
    </motion.div>
  )
}

export function Services({ onLearnMore }: { onLearnMore: (service: (typeof services)[0]) => void }) {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })
  const showcaseRef = useRef(null)
  const isShowcaseInView = useInView(showcaseRef, { once: true, margin: '-50px' })

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

        {/* Featured Horizontal Scroll Showcase */}
        <motion.div
          ref={showcaseRef}
          initial={{ opacity: 0 }}
          animate={isShowcaseInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16 -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <div className="flex gap-4 sm:gap-5 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 40 }}
                animate={isShowcaseInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]"
              >
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[200px] sm:h-[220px]" onClick={() => onLearnMore(service)}>
                  <img
                    src={service.image}
                    alt={`${service.title} by NXT LVL Landscape`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <service.icon className="w-4 h-4 text-[#c9a96e]" />
                      <span className="text-white/70 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">{service.title}</h3>
                  </div>
                  <motion.div
                    className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight size={14} className="text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <MagneticServiceCard key={service.id} service={service} index={index} onLearnMore={onLearnMore} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { services }
export type ServiceType = (typeof services)[0]
