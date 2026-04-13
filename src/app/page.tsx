'use client'

import { useState } from 'react'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services, ServiceType } from '@/components/sections/Services'
import { ServiceDetail } from '@/components/sections/ServiceDetail'
import { Process } from '@/components/sections/Process'
import { PromoBanner } from '@/components/sections/PromoBanner'
import { Experience } from '@/components/sections/Experience'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { EstimateForm } from '@/components/sections/EstimateForm'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PrivacyPolicy } from '@/components/sections/PrivacyPolicy'
import { TermsConditions } from '@/components/sections/TermsConditions'
import { Footer } from '@/components/sections/Footer'
import { StickyMobileBar } from '@/components/sections/StickyMobileBar'
import { ChatWidget } from '@/components/sections/ChatWidget'

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [serviceDialogOpen, setServiceDialogOpen] = useState(false)

  const handleLearnMore = (service: ServiceType) => {
    setSelectedService(service)
    setServiceDialogOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services onLearnMore={handleLearnMore} />
        <Process />
        <PromoBanner />
        <Experience />
        <ProjectGallery />
        <EstimateForm />
        <FAQ />
        <CTA />
        <PrivacyPolicy />
        <TermsConditions />
      </main>
      <Footer />
      <StickyMobileBar />
      <ChatWidget />
      <ServiceDetail
        service={selectedService}
        open={serviceDialogOpen}
        onOpenChange={setServiceDialogOpen}
      />
    </div>
  )
}
