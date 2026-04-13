import { NextRequest, NextResponse } from 'next/server';
import { COMPANY_KNOWLEDGE } from '@/lib/knowledge-base';

// In-memory conversation store
const conversations = new Map<string, Array<{ role: string; content: string }>>();

const MAX_MESSAGES = 20;

// Rule-based response system using the knowledge base
function generateResponse(message: string, history: Array<{ role: string; content: string }>): string {
  const q = message.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|howdy|yo|good (morning|afternoon|evening)|sup|what'?s up|hola)/i.test(q)) {
    return `Hey there! 👋 Welcome to **NXT LVL Landscape**!\n\nI'm here to help you with anything about our landscaping and hardscaping services. What can I help you with today?`;
  }

  // Thank you
  if (/^(thanks|thank you|thx|ty|appreciate)/i.test(q)) {
    return `You're welcome! 😊 If you have any other questions about our services, feel free to ask. You can also reach us at **(657) 720-9054** or **nxtlvllandscape@gmail.com**.`;
  }

  // Pricing / Cost questions
  if (/\b(price|pricing|cost|how much|estimate|quote|budget|expensive|cheap|afford|rate|charge)\b/.test(q)) {
    return `Great question! Pricing varies depending on the scope, materials, and design of your project. The best way to get an accurate quote is through our **free consultation**.\n\nHere's some great news — we have several **current promotions**:\n\n• 💰 **$500 off** any hardscaping project above $5,000\n• 🎉 **10% off** your first service with a free quote\n• 👥 **$25 off** for referred customers\n• 🌿 **10-15% off** softscape projects with patio installation\n\nGive us a call at **(657) 720-9054** or email **nxtlvllandscape@gmail.com** for your free, no-obligation estimate!`;
  }

  // Services overview
  if (/\b(service|offer|provide|do you do|what do you|special|expert|capable)\b/.test(q) && !/\b(area|location|serve|cover)\b/.test(q)) {
    return `We offer a comprehensive range of **professional landscaping and hardscaping services**! 🌱\n\n**Hardscaping:**\n• 🧱 **Pavers** — Custom walkways, patios, and driveways\n• 🏗️ **Concrete Work** — Patios, pathways, and outdoor areas\n• 🧱 **Retaining Walls** — Erosion control and elegant design\n• 💡 **Light Installation** — Landscape lighting for beauty & security\n• 💧 **Irrigation Systems** — Keep your lawn healthy year-round\n• 🌊 **Drainage Installation** — Protect from water damage\n• 🪨 **Tile Work** — Patios, fire pits, decorative accents\n• 🔥 **Fire Pits / BBQ** — Custom outdoor gathering areas\n• 🏠 **Stucco Work** — Durable property enhancement\n\n**Softscaping & Maintenance:**\n• 🌺 **Planting** — Flowers, shrubs, and trees\n• 🌱 **Sod Installation** — Instant lush green lawn\n• 🌿 **Re-Seeding** — Restore damaged lawns\n• 🍂 **Mulching** — Soil protection and aesthetics\n• ✂️ **Pruning & Mowing** — Regular landscape maintenance\n• 💪 **Fertilization** — Promote healthy growth\n• 🍁 **Leaf Removal** — Seasonal cleanup\n• ❄️ **Snow Removal** — Winter maintenance\n• 🌀 **Aeration** — Improve soil health\n\nWould you like details on any specific service? Call **(657) 720-9054** for a free quote!`;
  }

  // Specific service: Pavers
  if (/\b(paver|patio|driveway|walkway|pathway)\b/.test(q)) {
    return `Our **paver services** are one of our most popular offerings! 🧱\n\nWe design and install custom paver:\n• Walkways & pathways\n• Patios & outdoor living areas\n• Driveways\n• Pool decks\n\nOur pavers bring **durability and style** to your property. We use high-quality materials and create designs tailored to your lifestyle.\n\n💡 **Current promo:** $500 off any hardscaping project above $5,000!\n\nCall **(657) 720-9054** or email **nxtlvllandscape@gmail.com** to schedule a free consultation!`;
  }

  // Specific service: Concrete
  if (/\b(concrete|cement)\b/.test(q)) {
    return `Our **concrete work** delivers high-quality solutions for your property! 🏗️\n\nWe offer:\n• Patios and outdoor living areas\n• Pathways and walkways\n• Driveways\n• Custom concrete designs\n\nAll our concrete work is **built to last** using premium materials. We focus on precision and quality craftsmanship.\n\nGet a free quote at **(657) 720-9054** or **nxtlvllandscape@gmail.com**!`;
  }

  // Specific service: Retaining walls
  if (/\b(retain|wall|erosion)\b/.test(q)) {
    return `Our **retaining walls** are both **functional and decorative**! 🧱\n\nThey:\n• Prevent erosion on your property\n• Add structure and elegance to your yard\n• Create tiered garden spaces\n• Increase usable land area\n\nWe use high-quality materials and professional installation techniques.\n\n📞 Call **(657) 720-9054** for a free estimate!`;
  }

  // Specific service: Lighting
  if (/\b(light|lighting|illum|landscape light|outdoor light)\b/.test(q)) {
    return `Our **landscape lighting** enhances your outdoor spaces! 💡\n\nProfessional lighting adds:\n• ✨ Beauty and ambiance\n• 🔒 Security and safety\n• 🏡 Extended outdoor living hours\n• 🌟 Property value increase\n\nWe design custom lighting plans to highlight your landscape's best features.\n\nGet started with a free quote: **(657) 720-9054**!`;
  }

  // Specific service: Fire pits / BBQ
  if (/\b(fire pit|bbq|barbecue|grill|fireplace|outdoor kitchen)\b/.test(q)) {
    return `We build **custom fire pits and BBQ areas** perfect for entertaining! 🔥\n\nOur installations include:\n• Custom-designed fire pits\n• BBQ grill stations\n• Outdoor kitchen areas\n• Cozy gathering spaces\n\nImagine enjoying evenings around a beautiful fire pit in your own backyard!\n\n📞 Call **(657) 720-9054** to start designing yours!`;
  }

  // Specific service: Irrigation / Drainage
  if (/\b(irrigat|drainage|water|sprinkler|spray)\b/.test(q)) {
    return `We offer professional **irrigation and drainage solutions**! 💧\n\n**Irrigation Systems:**\n• Efficient sprinkler systems\n• Drip irrigation\n• Smart controllers\n• Keep your lawn & garden healthy year-round\n\n**Drainage Installation:**\n• Protect from water damage\n• Maintain proper water flow\n• French drains and grading\n\n📞 Get a free consultation: **(657) 720-9054**!`;
  }

  // Specific service: Sod / Lawn
  if (/\b(sod|lawn|grass|re-seed|reseed)\b/.test(q)) {
    return `We offer complete **lawn and sod services**! 🌱\n\n• **Sod Installation** — Instant lush, green lawn\n• **Re-Seeding** — Restore thin or damaged areas\n• **Aeration** — Improve soil health and drainage\n• **Fertilization** — Promote vibrant, healthy growth\n\nOur sod is professionally installed for immediate results. Combined with our maintenance programs, your lawn will stay beautiful year-round!\n\n📞 Call **(657) 720-9054**!`;
  }

  // Specific service: Maintenance
  if (/\b(maintain|mow|prun|mulch|leaf|snow|clean|yard|garden care)\b/.test(q)) {
    return `We provide comprehensive **landscape maintenance services**! ✂️\n\n• ✂️ **Pruning & Mowing** — Keep your landscape looking its best\n• 🍂 **Mulching** — Protect soil and enhance appearance\n• 🍁 **Leaf Removal** — Seasonal cleanup\n• ❄️ **Snow Removal** — Winter maintenance\n• 💪 **Fertilization** — Promote healthy growth\n\nWe offer regular maintenance plans to keep your property looking pristine all year.\n\n📞 Call **(657) 720-9054** for a maintenance plan!`;
  }

  // Process / How it works
  if (/\b(process|how (do|does) it work|step|start|begin|get started|what('?s| is) next)\b/.test(q)) {
    return `Getting started with NXT LVL Landscape is simple! Here's our **4-step process**: 🚀\n\n**1. 📞 Contact & Free Quote**\nReach out via phone, email, or our online form to share your ideas and get a free, no-obligation quote.\n\n**2. 📐 Consultation & Design**\nOur team visits your property, discusses your vision, and creates a custom landscaping plan tailored to your style and budget.\n\n**3. 🔨 Project Execution**\nWe bring your design to life with professional hardscaping, softscaping, and patio installations, using high-quality materials.\n\n**4. ✅ Final Walkthrough & Satisfaction**\nAfter completion, we review everything with you to ensure it meets your expectations. Your satisfaction is our priority!\n\nReady to get started? Call **(657) 720-9054** or email **nxtlvllandscape@gmail.com**!`;
  }

  // Area / Location / Service area
  if (/\b(area|location|where|serve|cover|region|county|city|near|orange)\b/.test(q)) {
    return `We're based in **Orange County, California**! 📍\n\nWe serve the Orange County area and surrounding communities. For specific availability in your area, please reach out to us directly:\n\n• 📞 **Phone:** (657) 720-9054\n• 📧 **Email:** nxtlvllandscape@gmail.com\n\nWe'd be happy to discuss your project and confirm service availability!`;
  }

  // Contact information
  if (/\b(contact|call|phone|email|reach|talk|speak|number|address)\b/.test(q)) {
    return `We'd love to hear from you! Here's how to reach us:\n\n• 📞 **Phone:** (657) 720-9054\n• 📧 **Email:** nxtlvllandscape@gmail.com\n• 📸 **Instagram:** @nxt.lvl.landscape\n• 🌐 **Website:** nxtlvllandscaping.com\n• 📝 **Online Form:** Available on our contact page\n\nYou can also use our **contact form** right here on the website. We typically respond within 24 hours!`;
  }

  // Promotions / Deals / Discounts
  if (/\b(promo|deal|discount|offer|coupon|save|off|special|sale)\b/.test(q)) {
    return `We have some **amazing current promotions**! 🎉\n\n• 💰 **$500 off** any hardscaping project above $5,000\n• 🎁 **10% off** your first service (with free quote)\n• 👥 **$25 off** for referred customers\n• 🌿 **10-15% off** softscape projects with any patio installation\n\nThese offers won't last forever! Call **(657) 720-9054** or email **nxtlvllandscape@gmail.com** to claim your discount!`;
  }

  // About / Who are you
  if (/\b(who (are|is)|about|founder|owner|team|company|history|story|joseph|jose|henriquez)\b/.test(q)) {
    return `**NXT LVL Landscape** was founded by **Joseph A. Henriquez & Jose Henriquez**! 👷\n\nWe're built on the belief that every outdoor space deserves a touch of excellence. With years of experience, our team delivers professional landscaping, hardscaping, and patio solutions tailored to your needs.\n\n**What sets us apart:**\n• ✅ Years of hands-on expertise\n• ✅ Custom designs for every home\n• ✅ High-quality materials\n• ✅ Satisfaction guaranteed\n• ✅ Free quotes and consultations\n\nWe don't just create landscapes — we create **lasting experiences**! 🌿\n\n📞 Call **(657) 720-9054** to learn more!`;
  }

  // Reviews / Testimonials
  if (/\b(review|testimonial|rating|feedback|customer|client|refer|recommend)\b/.test(q)) {
    return `Our clients love working with us! ⭐ Here's what they say:\n\n *"NXT LVL transformed our backyard into a paradise. The team was professional, reliable, and delivered exactly what we wanted — all at an affordable price. Highly recommend them!"*\n\n *"Joseph and his crew went above and beyond our expectations. From design to installation, everything was smooth and stress-free. We absolutely love our new patio!"*\n\n *"This is by far the best landscaping company we've ever hired. The attention to detail, the quality of work, and the respect for our property made all the difference."*\n\n📞 Join our happy clients! Call **(657) 720-9054**!`;
  }

  // Tile / Stucco
  if (/\b(tile|stucco)\b/.test(q)) {
    return `We offer professional **tile and stucco services**! 🪨\n\n**Tile Work:**\n• Beautiful outdoor tile installations\n• Patios and fire pit surrounds\n• Decorative accents\n• Elevate your outdoor design\n\n**Stucco Work:**\n• Durable and stylish applications\n• Enhance property appearance\n• Long-lasting protection\n\n📞 Get a free quote: **(657) 720-9054**!`;
  }

  // Planting
  if (/\b(plant|flower|tree|shrub|garden|landscape design|softscape)\b/.test(q)) {
    return `Our **planting and softscape services** can transform your outdoor space! 🌺\n\n• 🌸 **Flowers & Shrubs** — Beautiful seasonal plantings\n• 🌳 **Trees** — Strategic tree planting for shade and beauty\n• 🌱 **Sod Installation** — Instant lush green lawn\n• 🌿 **Garden Design** — Custom landscape designs\n\nWe select plants that thrive in the Orange County climate and complement your property's style.\n\n📞 Call **(657) 720-9054** for a consultation!`;
  }

  // FAQ
  if (/\b(faq|question|frequently|common)\b/.test(q)) {
    return `Here are some **frequently asked questions**:\n\n**Q: What services do you offer?**\nA: Full range of landscaping and hardscaping — pavers, concrete, retaining walls, lighting, irrigation, planting, sod, fire pits, and more!\n\n**Q: How do I get a quote?**\nA: Call (657) 720-9054 or email us — it's free!\n\n**Q: What areas do you serve?**\nA: Orange County, California and surrounding areas.\n\n**Q: What promotions are available?**\nA: $500 off hardscaping over $5k, 10% off first service, $25 referral bonus!\n\nHave more questions? Call **(657) 720-9054**! 📞`;
  }

  // Bye / Goodbye
  if (/\b(bye|goodbye|see you|later|have a good|take care|gotta go)\b/.test(q)) {
    return `Thanks for chatting with us! 😊 We'd love to help make your outdoor dreams a reality.\n\nDon't forget — you can reach us anytime at **(657) 720-9054** or **nxtlvllandscape@gmail.com**.\n\nHave a wonderful day! 🌿`;
  }

  // Schedule / Appointment / Booking
  if (/\b(schedule|appointment|book|booking|available|when|availability)\b/.test(q)) {
    return `We'd love to schedule a consultation with you! 📅\n\nTo book an appointment:\n• 📞 Call **(657) 720-9054**\n• 📧 Email **nxtlvllandscape@gmail.com**\n• 📝 Use our online contact form\n\nOur team is available during standard business hours (PST). We'll get back to you within 24 hours to confirm your appointment!`;
  }

  // Warranty / Guarantee
  if (/\b(warranty|guarantee|insurance|licensed|bond)\b/.test(q)) {
    return `We take pride in the **quality of our work**! ✅\n\n• We ensure every project meets your expectations with a **final walkthrough**\n• We use **high-quality materials** for lasting results\n• Your **satisfaction is our priority**\n\nFor specific warranty details on your project, please contact us directly at **(657) 720-9054**.`;
  }

  // Timeline / Duration
  if (/\b(how long|timeline|duration|take|time|week|month|start|finish|complete)\b/.test(q)) {
    return `Project timelines vary depending on the scope and complexity of the work. During your **free consultation**, we'll provide a detailed timeline tailored to your project.\n\nOur process is designed to be **simple and stress-free**:\n1. Contact & Free Quote\n2. Consultation & Design\n3. Project Execution\n4. Final Walkthrough\n\nCall **(657) 720-9054** to discuss your timeline!`;
  }

  // Competitor comparison
  if (/\b(compar|compet|vs|versus|other|better|best|difference|why choose|why you)\b/.test(q)) {
    return `Here's why clients choose **NXT LVL Landscape** over others:\n\n✅ **Family-owned** — Founded by Joseph A. & Jose Henriquez (personal touch)\n✅ **Years of experience** — Proven track record\n✅ **Free quotes** — No-obligation estimates\n✅ **Custom designs** — Tailored to your lifestyle\n✅ **Quality materials** — Built to last\n✅ **Satisfaction guaranteed** — Final walkthrough on every project\n✅ **Great promotions** — $500 off hardscaping over $5k, referral bonuses\n✅ **Full range of services** — From design to maintenance\n\n📞 Experience the difference: **(657) 720-9054**!`;
  }

  // Default response - try LLM SDK as fallback
  return generateDefaultResponse(q);
}

function generateDefaultResponse(q: string): string {
  return `Thanks for your question! 😊\n\nI want to make sure you get the most accurate information. Here are a few ways I can help:\n\n• 📞 **Call us:** (657) 720-9054\n• 📧 **Email us:** nxtlvllandscape@gmail.com\n• 📸 **Instagram:** @nxt.lvl.landscape\n\nOur team can answer any specific questions about pricing, scheduling, and project details. We offer **free consultations** and would love to discuss your project!\n\nIs there anything else I can help you with?`;
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId = 'default' } = await request.json();

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Get or create conversation history
    let history = conversations.get(sessionId) || [];

    // Add user message
    history.push({
      role: 'user',
      content: message.trim(),
    });

    // Trim old messages if exceeding limit
    if (history.length > MAX_MESSAGES) {
      history = history.slice(-MAX_MESSAGES);
    }

    // Generate response using rule-based system
    const aiResponse = generateResponse(message, history);

    // Add AI response to history
    history.push({
      role: 'assistant',
      content: aiResponse,
    });

    // Save updated history
    conversations.set(sessionId, history);

    return NextResponse.json({
      success: true,
      response: aiResponse,
      messageCount: history.length,
    });
  } catch (error) {
    console.error('Chat API error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong.',
        response:
          "I'm having a moment — please try again! You can also reach us directly at **(657) 720-9054** or **nxtlvllandscape@gmail.com**.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('sessionId') || 'default';
  conversations.delete(sessionId);

  return NextResponse.json({ success: true, message: 'Conversation cleared' });
}
