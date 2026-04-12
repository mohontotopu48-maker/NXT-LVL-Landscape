import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Experience } from '@/components/sections/Experience'
import { Services } from '@/components/sections/Services'
import { PromoBanner } from '@/components/sections/PromoBanner'
import { ProjectPlanner } from '@/components/sections/ProjectPlanner'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <PromoBanner />
        <Experience />
        <ProjectPlanner />
        <InstagramFeed />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
