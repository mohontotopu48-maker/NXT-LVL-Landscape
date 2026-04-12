import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { PromoBanner } from '@/components/sections/PromoBanner'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { Experience } from '@/components/sections/Experience'
import { ProjectPlanner } from '@/components/sections/ProjectPlanner'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'
import { StickyMobileBar } from '@/components/sections/StickyMobileBar'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <PromoBanner />
        <ProjectGallery />
        <Experience />
        <ProjectPlanner />
        <CTA />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  )
}
