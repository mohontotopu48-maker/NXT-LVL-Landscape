'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, Check, Send, Loader2, Phone } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const mainServices = [
  { id: 'lighting', label: 'Light Installation', icon: '💡' },
  { id: 'pavers', label: 'Pavers', icon: '🪨' },
  { id: 'concrete', label: 'Concrete Work', icon: '🏗️' },
  { id: 'retaining', label: 'Retaining Walls', icon: '🧱' },
]

const additionalServices = [
  { id: 'reseeding', label: 'Re-Seeding', icon: '🌱' },
  { id: 'mulching', label: 'Mulching', icon: '🍂' },
  { id: 'pruning-mowing', label: 'Pruning & Mowing', icon: '✂️' },
  { id: 'fertilization', label: 'Fertilization', icon: '🧪' },
  { id: 'planting', label: 'Planting', icon: '🌿' },
  { id: 'leaf-removal', label: 'Leaf Removal', icon: '🍃' },
  { id: 'snow-removal', label: 'Snow Removal', icon: '❄️' },
  { id: 'aeration', label: 'Aeration', icon: '⛏️' },
  { id: 'sod-installation', label: 'Sod Installation', icon: '🏡' },
]

const allServices = [...mainServices, ...additionalServices, { id: 'other', label: 'Other', icon: '✨' }]

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
  { id: 1, title: 'Project Type', shortTitle: 'Type' },
  { id: 2, title: 'Budget', shortTitle: 'Budget' },
  { id: 3, title: 'Timeline', shortTitle: 'When' },
  { id: 4, title: 'Contact Details', shortTitle: 'Details' },
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
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })
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
        description: 'Please try again or call us at (657) 720-9054.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isComplete) {
    return (
      <section id="planner" className="py-16 sm:py-20 md:py-28 bg-secondary/20" ref={sectionRef}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-forest/10 rounded-2xl flex items-center justify-center mx-auto mb-5"
          >
            <Check className="w-8 h-8 sm:w-10 sm:h-10 text-forest" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-display mb-3">You&apos;re All Set!</h3>
          <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial leading-relaxed">
            Thank you, {selections.name}! Our team will review your project details and reach out
            within 24 hours with a personalized consultation plan.
          </p>
          <div className="mt-6 p-5 bg-white rounded-2xl border border-border/40 shadow-sm">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-forest/60 mb-1">
              Need Immediate Help?
            </div>
            <a
              href="tel:+16577209054"
              className="text-xl sm:text-2xl font-display text-forest hover:text-forest-light transition-colors inline-flex items-center gap-2"
            >
              <Phone size={20} />
              (657) 720-9054
            </a>
            <div className="text-xs text-muted-foreground mt-1">Call or text anytime</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="planner" className="py-16 sm:py-20 md:py-28 bg-secondary/20 mesh-gradient-forest" ref={sectionRef}>
      <div className="max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="font-eyebrow text-forest mb-3 sm:mb-4">
            Free Project Planner
          </div>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-display text-foreground mb-3 sm:mb-4">
            Get Your Free{' '}
            <span className="text-forest">Estimate</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial">
            Answer a few quick questions and we&apos;ll craft a personalized plan for your outdoor space.
          </p>
        </motion.div>

        {/* Step Indicators */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-2.5">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => step.id < currentStep && setCurrentStep(step.id)}
                className={`text-[11px] sm:text-xs font-medium transition-colors duration-300 ${
                  currentStep >= step.id
                    ? 'text-forest cursor-pointer'
                    : 'text-muted-foreground/30 cursor-default'
                }`}
              >
                <span className="hidden sm:inline">{step.title}</span>
                <span className="sm:hidden">{step.shortTitle}</span>
              </button>
            ))}
          </div>
          <div className="h-[3px] bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-forest to-forest-light rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-5 sm:p-7 md:p-10 border border-border/40 shadow-sm"
        >
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 tracking-tight">What type of project?</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-5">Select the service that best describes your project.</p>

              {/* Main Services */}
              <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-2">Main Services</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5">
                {mainServices.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelections({ ...selections, projectType: type.id })}
                    className={`p-3.5 sm:p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-forest/40 hover:bg-forest/[0.03] active:scale-[0.97] ${
                      selections.projectType === type.id
                        ? 'border-forest bg-forest/[0.04] shadow-sm'
                        : 'border-border/40 bg-white'
                    }`}
                  >
                    <span className="text-lg sm:text-xl mb-1.5 block">{type.icon}</span>
                    <span className="text-xs sm:text-sm font-medium">{type.label}</span>
                  </button>
                ))}
              </div>

              {/* Additional Services */}
              <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-2">Additional Services</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {additionalServices.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelections({ ...selections, projectType: type.id })}
                    className={`p-3 sm:p-3.5 rounded-xl border-2 text-left transition-all duration-200 hover:border-forest/40 hover:bg-forest/[0.03] active:scale-[0.97] ${
                      selections.projectType === type.id
                        ? 'border-forest bg-forest/[0.04] shadow-sm'
                        : 'border-border/40 bg-white'
                    }`}
                  >
                    <span className="text-base sm:text-lg mb-1 block">{type.icon}</span>
                    <span className="text-[11px] sm:text-xs font-medium leading-tight">{type.label}</span>
                  </button>
                ))}
                <button
                  onClick={() => setSelections({ ...selections, projectType: 'other' })}
                  className={`p-3 sm:p-3.5 rounded-xl border-2 text-left transition-all duration-200 hover:border-forest/40 hover:bg-forest/[0.03] active:scale-[0.97] ${
                    selections.projectType === 'other'
                      ? 'border-forest bg-forest/[0.04] shadow-sm'
                      : 'border-border/40 bg-white'
                  }`}
                >
                  <span className="text-base sm:text-lg mb-1 block">✨</span>
                  <span className="text-[11px] sm:text-xs font-medium leading-tight">Other</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Budget */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 tracking-tight">What&apos;s your budget range?</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-5">
                This helps us recommend the best approach for your investment.
              </p>
              <div className="space-y-2.5">
                {budgetRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelections({ ...selections, budget: range.id })}
                    className={`w-full p-3.5 sm:p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-forest/40 hover:bg-forest/[0.03] active:scale-[0.99] flex items-center justify-between ${
                      selections.budget === range.id
                        ? 'border-forest bg-forest/[0.04] shadow-sm'
                        : 'border-border/40 bg-white'
                    }`}
                  >
                    <span className="text-sm sm:text-[15px] font-medium">{range.label}</span>
                    {selections.budget === range.id && (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-forest" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Timeline */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 tracking-tight">When would you like to start?</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-5">
                No pressure — we work at your pace.
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {timelines.map((tl) => (
                  <button
                    key={tl.id}
                    onClick={() => setSelections({ ...selections, timeline: tl.id })}
                    className={`p-4 sm:p-5 rounded-xl border-2 text-left transition-all duration-200 hover:border-forest/40 hover:bg-forest/[0.03] active:scale-[0.97] ${
                      selections.timeline === tl.id
                        ? 'border-forest bg-forest/[0.04] shadow-sm'
                        : 'border-border/40 bg-white'
                    }`}
                  >
                    <span className="text-lg sm:text-xl mb-1.5 block">{tl.icon}</span>
                    <span className="text-sm sm:text-[15px] font-medium">{tl.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {currentStep === 4 && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 tracking-tight">Almost there!</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-5">
                We&apos;ll respond within 24 hours with your personalized plan.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={selections.name}
                    onChange={(e) => setSelections({ ...selections, name: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/40 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={selections.email}
                      onChange={(e) => setSelections({ ...selections, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/40 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      value={selections.phone}
                      onChange={(e) => setSelections({ ...selections, phone: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/40 transition-all"
                      placeholder="(657) 720-9054"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5">Project Address</label>
                  <input
                    type="text"
                    value={selections.address}
                    onChange={(e) => setSelections({ ...selections, address: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/40 transition-all"
                    placeholder="123 Main St, City, State"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5">Additional Notes</label>
                  <textarea
                    value={selections.notes}
                    onChange={(e) => setSelections({ ...selections, notes: e.target.value })}
                    rows={3}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/40 transition-all resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 pt-5 border-t border-border/40">
            <div>
              {currentStep > 1 && (
                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-muted-foreground gap-1.5 text-sm h-11"
                >
                  <ArrowLeft size={14} />
                  Back
                </Button>
              )}
            </div>
            <div>
              {currentStep < totalSteps ? (
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!canProceed()}
                  className="bg-forest hover:bg-forest-light text-white rounded-full px-5 sm:px-6 gap-2 disabled:opacity-35 text-sm h-11 transition-all"
                >
                  Continue
                  <ArrowRight size={14} />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="bg-forest hover:bg-forest-light text-white rounded-full px-6 sm:px-8 gap-2 disabled:opacity-35 text-sm h-11 transition-all"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  Submit
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Trust Message */}
        <div className="text-center mt-4 sm:mt-5 space-y-1">
          <p className="text-[11px] sm:text-xs text-muted-foreground">
            🔒 Your information is kept private. We never share your data.
          </p>
          <a href="tel:+16577209054" className="text-[11px] sm:text-xs text-forest hover:text-forest-light transition-colors inline-flex items-center gap-1">
            <Phone size={11} />
            Or call us directly: (657) 720-9054
          </a>
        </div>
      </div>
    </section>
  )
}
