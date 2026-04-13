'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Send, Loader2, Phone, Mail, MapPin, Instagram, Check, Clock } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const serviceOptions = [
  'Re-Seeding',
  'Mulching',
  'Pruning mowing',
  'Fertilization',
  'Planting',
  'Leaf Removal',
  'Snow Removal',
  'Aeration',
  'Sod Installment',
]

export function EstimateForm() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    smsConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setIsComplete(true)
      toast({
        title: 'Estimate request received!',
        description: 'We\'ll get back to you within 24 hours with your free quote.',
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
      <section id="contact" className="py-16 sm:py-20 md:py-28 bg-secondary/20 mesh-gradient-forest" ref={sectionRef}>
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
            Thank you, {formData.name}! Our team will review your request and reach out
            within 24 hours with your free estimate.
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
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-secondary/20 mesh-gradient-forest" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="font-eyebrow text-forest mb-3 sm:mb-4">
            Get Your Free Estimate
          </div>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-display text-foreground mb-3 sm:mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-sm sm:text-[15px] text-muted-foreground font-editorial max-w-lg mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll get back to you within 24 hours with a personalized quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 border border-border/40 shadow-sm">
              <div className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-xs sm:text-sm font-medium mb-1.5 block">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="rounded-xl h-11 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs sm:text-sm font-medium mb-1.5 block">
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(657) 720-9054"
                      className="rounded-xl h-11 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-xs sm:text-sm font-medium mb-1.5 block">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="rounded-xl h-11 text-sm"
                    required
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <Label htmlFor="service" className="text-xs sm:text-sm font-medium mb-1.5 block">
                    Service Needed
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="rounded-xl h-11 text-sm">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-xs sm:text-sm font-medium mb-1.5 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="rounded-xl text-sm resize-none"
                  />
                </div>

                {/* SMS Consent */}
                <div className="flex items-start gap-2.5">
                  <Checkbox
                    id="sms-consent"
                    checked={formData.smsConsent}
                    onCheckedChange={(checked) => setFormData({ ...formData, smsConsent: !!checked })}
                    className="mt-0.5"
                  />
                  <label htmlFor="sms-consent" className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    By filling in your details, you agree to receive occasional SMS notifications from Prosper MGMT Inc. Message frequency varies. Reply STOP to unsubscribe. Standard message and data rates may apply.{' '}
                    <a href="#privacy" className="underline hover:text-foreground">Privacy Policy</a> and{' '}
                    <a href="#terms" className="underline hover:text-foreground">Terms &amp; Conditions</a> for more details.
                  </label>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                  className="w-full bg-forest hover:bg-forest-light text-white rounded-full h-12 text-sm font-semibold gap-2 transition-all disabled:opacity-35"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  Send Message
                </Button>
              </div>

              {/* Privacy */}
              <div className="text-center mt-4 space-y-1">
                <p className="text-[11px] text-muted-foreground">
                  🔒 Your information is kept private. We never share your data.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Sidebar - 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border/40 shadow-sm space-y-5">
              <h3 className="text-base font-semibold tracking-tight">Contact Information</h3>

              <a href="tel:+16577209054" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest/15 transition-colors">
                  <Phone className="w-4.5 h-4.5 text-forest" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Call or Text</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-forest transition-colors">(657) 720-9054</div>
                </div>
              </a>

              <a href="mailto:nxtlvllandscape@gmail.com" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-earth/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-earth/15 transition-colors">
                  <Mail className="w-4.5 h-4.5 text-earth" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Email Us</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-earth transition-colors break-all">nxtlvllandscape@gmail.com</div>
                </div>
              </a>

              <a
                href="https://instagram.com/nxt.lvl.landscape"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-pink-500/15 transition-colors">
                  <Instagram className="w-4.5 h-4.5 text-pink-500" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Follow Us</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-pink-500 transition-colors">@nxt.lvl.landscape</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                  <div className="text-sm font-semibold text-foreground">Orange County, California</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border/40 shadow-sm">
              <h3 className="text-base font-semibold tracking-tight mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-forest" />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday – Friday</span>
                  <span className="font-medium">7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-muted-foreground">Closed</span>
                </div>
              </div>
              <div className="mt-3 text-[11px] text-muted-foreground">
                📍 All times in Pacific Standard Time (PST)
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden border border-border/40 shadow-sm">
              <div className="relative aspect-[16/10] bg-secondary/50 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="w-8 h-8 text-forest/40 mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground mb-1">Orange County, California</p>
                  <p className="text-xs text-muted-foreground">Serving the Greater Orange County area</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
