import { PrivacyPolicyContent } from '@/components/sections/PrivacyPolicy'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  )
}
