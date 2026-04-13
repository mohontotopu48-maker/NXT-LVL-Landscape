import { TermsConditionsContent } from '@/components/sections/TermsConditions'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <TermsConditionsContent />
      </main>
      <Footer />
    </div>
  )
}
