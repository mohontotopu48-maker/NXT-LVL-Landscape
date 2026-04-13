'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const allImages = [
  // Project images (PappaJohn Sculpture Park)
  { src: '/images/project-1.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-2.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-3.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-4.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-5.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-6.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-7.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-8.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-9.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  { src: '/images/project-10.jpg', title: 'PappaJohn Sculpture Park', category: 'Project Gallery' },
  // Additional gallery images
  { src: '/images/gallery-1.jpg', title: 'Landscaping Work', category: 'Gallery' },
  { src: '/images/gallery-2.jpg', title: 'Landscaping Work', category: 'Gallery' },
  { src: '/images/gallery-3.jpg', title: 'Landscaping Work', category: 'Gallery' },
  { src: '/images/gallery-4.jpg', title: 'Landscaping Work', category: 'Gallery' },
  { src: '/images/gallery-5.jpg', title: 'Landscaping Work', category: 'Gallery' },
  { src: '/images/gallery-6.jpg', title: 'Landscaping Work', category: 'Gallery' },
  { src: '/images/gallery-7.jpg', title: 'Landscaping Work', category: 'Gallery' },
  { src: '/images/gallery-8.jpg', title: 'Landscaping Work', category: 'Gallery' },
  { src: '/images/gallery-9.jpg', title: 'Landscaping Work', category: 'Gallery' },
]

function GalleryCard({ image, index, onOpen }: { image: typeof allImages[0]; index: number; onOpen: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover img-zoom"
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 group-hover:opacity-90 transition-all duration-400 flex flex-col justify-end p-4 sm:p-6">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70 mb-1">
          {image.category}
        </span>
        <h3 className="text-sm sm:text-base font-semibold text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          {image.title}
        </h3>
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
  const prevImage = useCallback(() => setLightbox(i => i !== null ? (i - 1 + allImages.length) % allImages.length : null), [])
  const nextImage = useCallback(() => setLightbox(i => i !== null ? (i + 1) % allImages.length : null), [])

  // Keyboard navigation
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

  // Lock body scroll when lightbox open
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
              PappaJohn Sculpture Park
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground font-editorial max-w-lg mx-auto leading-relaxed"
            >
              Explore our featured project gallery. Click any image to view in full size.
            </motion.p>
          </div>

          {/* Project Images Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {allImages.map((image, index) => (
              <GalleryCard
                key={image.src}
                image={image}
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
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Nav arrows */}
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
              src={allImages[lightbox].src}
              alt={allImages[lightbox].title}
              className="max-h-[65vh] w-auto rounded-xl object-contain"
            />
            <div className="mt-4 sm:mt-6 text-center">
              <span className="text-xs font-semibold tracking-[0.1em] uppercase text-white/50">
                {allImages[lightbox].category}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">
                {allImages[lightbox].title}
              </h3>
              <p className="text-sm text-white/40 mt-2">
                {lightbox + 1} / {allImages.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
