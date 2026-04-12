import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, projectType, budget, timeline, address, notes } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
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

    // In production, you would save to database here:
    // await db.lead.create({ data: { name, email, phone, projectType, budget, timeline, address, notes } })

    // Log the lead (for demonstration)
    console.log('New lead received:', {
      name,
      email,
      phone,
      projectType,
      budget,
      timeline,
      address: address || 'Not provided',
      notes: notes || 'None',
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Lead received successfully',
        promo: budget === '5k-10k' || budget === '10k-25k' || budget === '25k-50k' || budget === '50k+'
          ? '$500 OFF'
          : '10% OFF',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
