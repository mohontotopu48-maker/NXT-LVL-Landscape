import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message, smsConsent } = body

    // Validate required fields
    if (!email || !phone) {
      return NextResponse.json(
        { error: 'Email and phone are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save lead to database
    const lead = await db.lead.create({
      data: {
        name: name || '',
        email,
        phone,
        service: service || '',
        message: message || '',
        smsConsent: !!smsConsent,
      },
    })

    // Determine applicable promo
    const hardscapeServices = ['Pavers', 'Concrete Work', 'Retaining Walls', 'Light Installation', 'Irrigation System Install', 'Drainage Installation', 'Tile Work', 'Fire Pits / BBQ Installations', 'Stucco Work']
    const promo = hardscapeServices.includes(service) ? '$500 OFF' : '10% OFF'

    return NextResponse.json(
      {
        success: true,
        message: 'Estimate request received successfully!',
        promo,
        leadId: lead.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again or call (657) 720-9054.' },
      { status: 500 }
    )
  }
}
