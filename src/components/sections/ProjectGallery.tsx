'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/images/real-project-1.jpg', title: 'Landscaping Project', category: 'Hardscaping', description: 'Complete backyard transformation with custom pavers', aspect: 'tall' as const },
  { src: '/images/real-project-2.jpg', title: 'Paver Installation', category: 'Hardscaping', description: 'Elegant driveway with premium stone pavers', aspect: 'wide' as const },
  { src: '/images/real-project-3.jpg', title: 'Outdoor Living Space', category: 'Outdoor Living', description: 'Beautiful outdoor living area with fire pit', aspect: 'normal' as const },
  { src: '/images/real-project-4.jpg', title: 'Garden Design', category: 'Softscaping', description: 'Lush garden with native plants and flowers', aspect: 'tall' as const },
  { src: '/images/real-project-5.jpg', title: 'Patio Construction', category: 'Hardscaping', description: 'Custom concrete patio with decorative finish', aspect: 'normal' as const },
  { src: '/images/real-project-6.jpg', title: 'Complete Makeover', category: 'Outdoor Living', description: 'Full yard makeover including lighting and drainage', aspect: 'wide' as const },
  { src: '/images/real-project-7.jpg', title: 'Retaining Wall', category: 'Hardscaping', description: 'Functional retaining wall with decorative stone', aspect: 'normal' as const },
  { src: '/images/real-project-8.jpg', title: 'Landscape Lighting', category: 'Outdoor Living', description: 'Professional landscape lighting installation', aspect: 'tall' as const },
  { src: '/images/real-project-9.jpg', title: 'Lawn & Garden', category: 'Softscaping', description: 'Fresh sod installation with garden bed design', aspect: 'normal' as const },
  { src: '/images/real-project-10.jpg', title: 'Stone Walkway', category: 'Hardscaping', description: 'Natural stone pathway through the garden', aspect: 'wide' as const },
  { src: '/images/real-project-11.jpg', title: 'Outdoor Kitchen', category: 'Outdoor Living', description: 'Custom BBQ island with counter space', aspect: 'normal' as const },
  { src: '/images/real-project-12.jpg', title: 'Water Feature', category: 'Softscaping', description: 'Serene water feature with surrounding plants', aspect: 'tall' as const },
]

const categories = ['All', 'Hardscaping', 'Softscaping', 'Outdoor Living']

function GalleryCard({ image, index, onOpen }: { image: typeof galleryImages[0]; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  // 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  // Masonry aspect ratios
  const aspectClasses = {
    tall: 'aspect-[3/4]',
    wide: 'aspect-[4/3]',
    normal: 'aspect-square',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      className="perspective-hover cursor-pointer"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative rounded-xl sm:rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-black/[0.08] transition-shadow duration-500"
      >
        <div className={`overflow-hidden ${aspectClasses[image.aspect]}`}>
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover img-zoom"
            loading="lazy"
          />
        </div>
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="px-2.5 py-1 bg-forest/90 text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase rounded-full backdrop-blur-sm"
          >
            {image.category}
          </motion.span>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-40 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-4 sm:p-6">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70 mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {image.category}
          </span>
          <h3 className="text-sm sm:text-base font-semibold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {image.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-white/60 mt-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-100 opacity-0 group-hover:opacity-100">
            {image.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectGallery() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = useCallback((index: number) => {
    const globalIndex = galleryImages.findIndex(img => img === filteredImages[index])
    setLightbox(globalIndex >= 0 ? globalIndex : index)
  }, [filteredImages])

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevImage = useCallback(() => setLightbox(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null), [])
  const nextImage = useCallback(() => setLightbox(i => i !== null ? (i + 1) % galleryImages.length : null), [])

  useEffect(() => {
    if (lightbox === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightbox, closeLightbox, prevImage, nextImage])

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <section id="gallery" className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-eyebrow text-forest mb-3 sm:mb-4"
            >
              Our Gallery
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(1.75rem,5vw,3.25rem)] font-display text-foreground mb-4 sm:mb-5"
            >
              Latest Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground font-editorial max-w-lg mx-auto leading-relaxed"
            >
              Explore our latest work. Click any image to view in full size.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-forest text-white shadow-md shadow-forest/20'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                {cat}
              </motion.button>
            ))}
            <span className="ml-2 text-xs text-muted-foreground">
              ({filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'})
            </span>
          </motion.div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {filteredImages.map((image, index) => (
              <GalleryCard
                key={image.src}
                image={image}
                index={index}
                onOpen={() => openLightbox(index)}
              />
            ))}
          </div>

          {/* No results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-sm">No projects found in this category.</p>
            </div>
          )}
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
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-3 sm:left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-3 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <motion.div
            key={lightbox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl max-h-[85vh] mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].title}
              className="max-h-[65vh] w-auto rounded-xl object-contain"
            />
            <div className="mt-4 sm:mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-forest/80 text-white text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full mb-2">
                {galleryImages[lightbox].category}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">
                {galleryImages[lightbox].title}
              </h3>
              <p className="text-sm text-white/50 mt-1">{galleryImages[lightbox].description}</p>
              <p className="text-sm text-white/40 mt-2">
                {lightbox + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
