'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, Check, Send, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const projectTypes = [
  { id: 'pavers', label: 'Pavers / Patio', icon: '🪨' },
  { id: 'concrete', label: 'Concrete Work', icon: '🏗️' },
  { id: 'retaining', label: 'Retaining Wall', icon: '🧱' },
  { id: 'lighting', label: 'Landscape Lighting', icon: '💡' },
  { id: 'driveway', label: 'Driveway', icon: '🚗' },
  { id: 'full', label: 'Full Outdoor Living', icon: '🌿' },
  { id: 'other', label: 'Other', icon: '✨' },
]

const budgetRanges = [
  { id: 'under5k', label: 'Under $5,000', range: '< $5k' },
  { id: '5k-10k', label: '$5,000 – $10,000', range: '$5k–$10k' },
  { id: '10k-25k', label: '$10,000 – $25,000', range: '$10k–$25k' },
  { id: '25k-50k', label: '$25,000 – $50,000', range: '$25k–$50k' },
  { id: '50k+', label: '$50,000+', range: '$50k+' },
]

const timelines = [
  { id: 'asap', label: 'ASAP', icon: '⚡' },
  { id: '1-3months', label: '1–3 Months', icon: '📅' },
  { id: '3-6months', label: '3–6 Months', icon: '🗓️' },
  { id: 'exploring', label: 'Just Exploring', icon: '🔍' },
]

const steps = [
  { id: 1, title: 'Project Type' },
  { id: 2, title: 'Budget Range' },
  { id: 3, title: 'Timeline' },
  { id: 4, title: 'Your Details' },
]

export function ProjectPlanner() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selections, setSelections] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const { toast } = useToast()

  const totalSteps = steps.length
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100

  const canProceed = () => {
    switch (currentStep) {
      case 1: return !!selections.projectType
      case 2: return !!selections.budget
      case 3: return !!selections.timeline
      case 4: return !!selections.name && !!selections.email && !!selections.phone
      default: return false
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selections),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setIsComplete(true)
      toast({
        title: 'Project inquiry received!',
        description: 'We\'ll be in touch within 24 hours with a personalized plan.',
      })
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isComplete) {
    return (
      <section id="planner" className="py-24 sm:py-32 bg-white" ref={sectionRef}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-forest" />
          </motion.div>
          <h3 className="text-3xl font-display mb-4">You&apos;re All Set!</h3>
          <p className="text-muted-foreground font-editorial text-lg">
            Thank you, {selections.name}! Our team will review your project details and reach out
            within 24 hours with a personalized consultation plan.
          </p>
          <div className="mt-8 p-6 bg-secondary/50 rounded-2xl">
            <div className="text-sm text-muted-foreground mb-2">Estimated Promo Savings</div>
            <div className="text-3xl font-display text-forest">
              {selections.budget === '50k+' || selections.budget === '25k-50k' || selections.budget === '10k-25k'
                ? '$500 OFF'
                : '10% OFF'}
            </div>
            <div className="text-sm text-muted-foreground mt-1">Applied to your project estimate</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="planner" className="py-24 sm:py-32 bg-white" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-forest rounded-full" />
            <span className="text-sm font-medium text-forest">Smart Project Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-4">
            Let&apos;s Build Something{' '}
            <span className="text-forest">Extraordinary</span>
          </h2>
          <p className="text-muted-foreground font-editorial text-lg">
            Answer a few quick questions and we&apos;ll craft a personalized plan for your outdoor space.
          </p>
        </motion.div>

        {/* Step Indicators */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`text-xs font-medium transition-colors duration-300 ${
                  currentStep >= step.id ? 'text-forest' : 'text-muted-foreground/50'
                }`}
              >
                <span className="hidden sm:inline">{step.title}</span>
                <span className="sm:hidden">{step.id}</span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-forest rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-secondary/30 rounded-2xl p-6 sm:p-10 border border-border/50"
        >
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">What type of project are you envisioning?</h3>
              <p className="text-sm text-muted-foreground mb-6">Select one that best describes your project.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelections({ ...selections, projectType: type.id })}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-forest/50 hover:bg-forest/5 ${
                      selections.projectType === type.id
                        ? 'border-forest bg-forest/5 shadow-sm'
                        : 'border-border/50 bg-white'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{type.icon}</span>
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Budget */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">What&apos;s your project budget range?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                This helps us recommend the best approach for your investment.
              </p>
              <div className="space-y-3">
                {budgetRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelections({ ...selections, budget: range.id })}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-forest/50 hover:bg-forest/5 flex items-center justify-between ${
                      selections.budget === range.id
                        ? 'border-forest bg-forest/5 shadow-sm'
                        : 'border-border/50 bg-white'
                    }`}
                  >
                    <span className="font-medium">{range.label}</span>
                    {selections.budget === range.id && (
                      <Check className="w-5 h-5 text-forest" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Timeline */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">When would you like to start?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                No pressure — we work at your pace.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {timelines.map((tl) => (
                  <button
                    key={tl.id}
                    onClick={() => setSelections({ ...selections, timeline: tl.id })}
                    className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:border-forest/50 hover:bg-forest/5 ${
                      selections.timeline === tl.id
                        ? 'border-forest bg-forest/5 shadow-sm'
                        : 'border-border/50 bg-white'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{tl.icon}</span>
                    <span className="font-medium">{tl.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {currentStep === 4 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Almost there! How can we reach you?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                We&apos;ll respond within 24 hours with your personalized project plan.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={selections.name}
                    onChange={(e) => setSelections({ ...selections, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <input
                    type="email"
                    value={selections.email}
                    onChange={(e) => setSelections({ ...selections, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    value={selections.phone}
                    onChange={(e) => setSelections({ ...selections, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Project Address</label>
                  <input
                    type="text"
                    value={selections.address}
                    onChange={(e) => setSelections({ ...selections, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all"
                    placeholder="123 Main St, City, State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Additional Notes</label>
                  <textarea
                    value={selections.notes}
                    onChange={(e) => setSelections({ ...selections, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
            <div>
              {currentStep > 1 && (
                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-muted-foreground gap-2"
                >
                  <ArrowLeft size={16} />
                  Back
                </Button>
              )}
            </div>
            <div>
              {currentStep < totalSteps ? (
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!canProceed()}
                  className="bg-forest hover:bg-forest-light text-white rounded-full px-6 gap-2 disabled:opacity-40"
                >
                  Continue
                  <ArrowRight size={16} />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="bg-forest hover:bg-forest-light text-white rounded-full px-8 gap-2 disabled:opacity-40"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  Submit Project
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Trust Message */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          🔒 Your information is kept private. We never share your data.
        </p>
      </div>
    </section>
  )
}
