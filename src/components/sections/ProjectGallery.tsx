'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    image: '/images/service-pavers.png',
    title: 'Elegant Paver Patio',
    category: 'Pavers',
    description: 'A stunning backyard transformation with natural stone pavers, creating an elegant outdoor living space perfect for entertaining.',
  },
  {
    id: 2,
    image: '/images/service-retaining.png',
    title: 'Tiered Garden Wall',
    category: 'Retaining Walls',
    description: 'Multi-level retaining walls with integrated planters, turning a sloped yard into a beautifully terraced garden.',
  },
  {
    id: 3,
    image: '/images/service-lighting.png',
    title: 'Landscape Lighting',
    category: 'Lighting',
    description: 'Strategic lighting design that transforms the property after dark with path lights, up-lighting, and ambient warmth.',
  },
  {
    id: 4,
    image: '/images/service-concrete.png',
    title: 'Stamped Concrete Driveway',
    category: 'Concrete',
    description: 'Premium stamped concrete with a natural stone pattern, giving the appearance of real stone with superior durability.',
  },
  {
    id: 5,
    image: '/images/hero.png',
    title: 'Full Outdoor Living',
    category: 'Full Build',
    description: 'Complete outdoor transformation including patio, kitchen, fire pit, and lighting — all designed as one cohesive experience.',
  },
  {
    id: 6,
    image: '/images/experience.png',
    title: 'Craftsmanship Detail',
    category: 'Portfolio',
    description: 'Close-up of our precision work — every joint, every edge, every stone placed with meticulous attention to detail.',
  },
]

function ProjectCard({ project, index, onOpen }: { project: typeof projects[0]; index: number; onOpen: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-400 flex flex-col justify-end p-4 sm:p-6">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70 mb-1">
          {project.category}
        </span>
        <h3 className="text-sm sm:text-base font-semibold text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          {project.title}
        </h3>
        <p className="text-[11px] sm:text-xs text-white/60 mt-1 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

export function ProjectGallery() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setLightbox(index), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevImage = useCallback(() => setLightbox(i => i !== null ? (i - 1 + projects.length) % projects.length : null), [])
  const nextImage = useCallback(() => setLightbox(i => i !== null ? (i + 1) % projects.length : null), [])

  return (
    <>
      <section id="gallery" className="py-16 sm:py-20 md:py-28 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-eyebrow text-forest mb-3 sm:mb-4"
            >
              Our Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground mb-4 sm:mb-5"
            >
              Recent Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground font-editorial max-w-lg mx-auto leading-relaxed"
            >
              Real transformations. Real craftsmanship. See what we can build for you.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Nav arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-3 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-3 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Image + Info */}
          <motion.div
            key={lightbox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl max-h-[85vh] mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[lightbox].image}
              alt={projects[lightbox].title}
              className="max-h-[65vh] w-auto rounded-xl object-contain"
            />
            <div className="mt-4 sm:mt-6 text-center">
              <span className="text-xs font-semibold tracking-[0.1em] uppercase text-white/50">
                {projects[lightbox].category}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">
                {projects[lightbox].title}
              </h3>
              <p className="text-sm text-white/60 mt-2 max-w-md mx-auto leading-relaxed">
                {projects[lightbox].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
