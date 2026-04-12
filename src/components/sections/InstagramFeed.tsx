'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Heart } from 'lucide-react'

const instagramPosts = [
  {
    id: 1,
    image: '/images/service-pavers.png',
    caption: 'New paver patio installation 🔥',
    likes: '124',
  },
  {
    id: 2,
    image: '/images/service-retaining.png',
    caption: 'Tiered retaining wall with planters 🌿',
    likes: '98',
  },
  {
    id: 3,
    image: '/images/service-lighting.png',
    caption: 'Evening ambiance done right ✨',
    likes: '156',
  },
  {
    id: 4,
    image: '/images/service-concrete.png',
    caption: 'Stamped concrete masterpiece 💎',
    likes: '203',
  },
  {
    id: 5,
    image: '/images/hero.png',
    caption: 'Full outdoor living transformation',
    likes: '312',
  },
  {
    id: 6,
    image: '/images/experience.png',
    caption: 'Precision craftsmanship in action 🛠️',
    likes: '89',
  },
]

function InstagramCard({ post, index }: { post: (typeof instagramPosts)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href="https://instagram.com/nxt.lvl.landscape"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden block"
    >
      <img
        src={post.image}
        alt={post.caption}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center p-3 sm:p-4">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-center">
          <div className="flex items-center gap-3 sm:gap-4 text-white mb-1.5 sm:mb-2">
            <span className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              {post.likes}
            </span>
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <p className="text-white/90 text-[11px] sm:text-sm font-editorial">{post.caption}</p>
        </div>
      </div>
      {/* Instagram Icon */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg flex items-center justify-center shadow-lg">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </div>
      </div>
    </motion.a>
  )
}

export function InstagramFeed() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://instagram.com/nxt.lvl.landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-3 sm:mb-6 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-pink-600">@nxt.lvl.landscape</span>
            </a>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display text-foreground mb-3 sm:mb-4"
          >
            Live From the Field
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground font-editorial max-w-lg sm:max-w-xl mx-auto"
          >
            Real projects. Real results. Follow our journey on Instagram.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <InstagramCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-6 sm:mt-10"
        >
          <a
            href="https://instagram.com/nxt.lvl.landscape"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-forest font-medium hover:text-forest-light transition-colors duration-300"
          >
            Follow us on Instagram
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
