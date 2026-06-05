import { NextRequest, NextResponse } from 'next/server'
import PptxGenJS from 'pptxgenjs'
import { daysData } from '@/lib/pptx-content'
import type { DayContent, SlideData } from '@/lib/pptx-content'

// ─── Color palette ───
const C = {
  darkBg: '0F172A',
  darkerBg: '020617',
  white: 'FFFFFF',
  offWhite: 'F8FAFC',
  lightGray: 'E2E8F0',
  midGray: '94A3B8',
  darkGray: '64748B',
  textDark: '1E293B',
  amber: 'D97706',
  amberLight: 'FEF3C7',
  green: '16A34A',
  red: 'DC2626',
  purple: '7C3AED',
  blue: '2563EB',
}

function generateDayPPTX(dayContent: DayContent): PptxGenJS {
  const pptx = new PptxGenJS()
  pptx.layout = 'LAYOUT_16x9'
  pptx.author = 'Crypto Foundations Academy'
  pptx.subject = `Day ${dayContent.day}: ${dayContent.title}`
  pptx.title = `Day ${dayContent.day}: ${dayContent.title} — ${dayContent.subtitle}`

  // ─── Cover Slide ───
  const cover = pptx.addSlide()
  cover.background = { color: C.darkerBg }
  cover.addShape((pptx as any).shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: C.amber } })
  cover.addText(`DAY ${dayContent.day}`, { x: 0.8, y: 1.6, w: 8.4, h: 0.5, fontSize: 14, fontFace: 'Arial', color: C.amber, bold: true, letterSpacing: 6 } as any)
  cover.addText(dayContent.title, { x: 0.8, y: 2.1, w: 8.4, h: 1.2, fontSize: 36, fontFace: 'Arial', color: C.white, bold: true })
  cover.addText(dayContent.subtitle, { x: 0.8, y: 3.4, w: 8.4, h: 0.6, fontSize: 18, fontFace: 'Arial', color: C.midGray })
  cover.addText(`"${dayContent.tagline}"`, { x: 0.8, y: 4.2, w: 8.4, h: 0.5, fontSize: 14, fontFace: 'Arial', color: C.amber, italic: true })
  cover.addText('Crypto Foundations Academy  |  10-Day Crypto Trading Bootcamp', { x: 0.8, y: 5, w: 8.4, h: 0.4, fontSize: 10, fontFace: 'Arial', color: C.darkGray })

  // ─── Table of Contents ───
  const toc = pptx.addSlide()
  toc.background = { color: C.offWhite }
  toc.addShape((pptx as any).shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.85, fill: { color: C.darkBg } })
  toc.addText('TABLE OF CONTENTS', { x: 0.8, y: 0.15, w: 8.4, h: 0.55, fontSize: 22, fontFace: 'Arial', color: C.amber, bold: true })

  const tocItems = dayContent.sections.map((s, i) => [`${i + 1}.  ${s.sectionTitle}`])
  toc.addText(tocItems.map(item => ({ text: item[0], options: { fontSize: 14, fontFace: 'Arial', color: C.textDark, bullet: false, paraSpaceAfter: 8 } })), {
    x: 0.8, y: 1.2, w: 8.4, h: 4.3, valign: 'top',
  })

  // ─── Section & Content Slides ───
  for (let si = 0; si < dayContent.sections.length; si++) {
    const section = dayContent.sections[si]

    // Section divider
    const divider = pptx.addSlide()
    divider.background = { color: C.darkBg }
    divider.addShape((pptx as any).shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.04, fill: { color: C.amber } })
    divider.addText(`SECTION ${si + 1}`, { x: 1, y: 2, w: 8, h: 0.4, fontSize: 12, fontFace: 'Arial', color: C.amber, bold: true, letterSpacing: 4, align: 'center' } as any)
    divider.addText(section.sectionTitle, { x: 1, y: 2.5, w: 8, h: 1.2, fontSize: 22, fontFace: 'Arial', color: C.white, bold: true, align: 'center' })
    divider.addText(`${section.slides.length} Topics`, { x: 1, y: 3.8, w: 8, h: 0.4, fontSize: 14, fontFace: 'Arial', color: C.midGray, align: 'center' })

    // Content slides
    for (let ti = 0; ti < section.slides.length; ti++) {
      addContentSlide(pptx, section.slides[ti], ti + 1)
    }
  }

  // ─── Closing Slide ───
  const closing = pptx.addSlide()
  closing.background = { color: C.darkerBg }
  closing.addShape((pptx as any).shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.04, fill: { color: C.amber } })
  closing.addText('Crypto Foundations Academy', { x: 1, y: 2, w: 8, h: 0.6, fontSize: 28, fontFace: 'Arial', color: C.white, bold: true, align: 'center' })
  closing.addText(`Day ${dayContent.day}: ${dayContent.title}`, { x: 1, y: 2.7, w: 8, h: 0.5, fontSize: 16, fontFace: 'Arial', color: C.amber, align: 'center' })
  closing.addText('Educational content only. Not financial advice. Always DYOR.', { x: 1, y: 4, w: 8, h: 0.4, fontSize: 10, fontFace: 'Arial', color: C.darkGray, align: 'center' })

  return pptx
}

function addContentSlide(pptx: PptxGenJS, slideData: SlideData, topicNum: number) {
  const slide = pptx.addSlide()
  slide.background = { color: C.offWhite }

  // Header bar
  slide.addShape((pptx as any).shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.85, fill: { color: C.darkBg } })

  // Topic number badge
  slide.addShape((pptx as any).shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 0.15, w: 0.5, h: 0.5, fill: { color: C.amber }, rectRadius: 0.08 })
  slide.addText(String(topicNum), { x: 0.6, y: 0.15, w: 0.5, h: 0.5, fontSize: 16, fontFace: 'Arial', color: C.white, bold: true, align: 'center', valign: 'middle' })

  // Title
  slide.addText(slideData.title, { x: 1.3, y: 0.15, w: 7.9, h: 0.55, fontSize: 20, fontFace: 'Arial', color: C.white, bold: true, valign: 'middle' })

  // Bullets
  slide.addText(
    slideData.bullets.map(b => ({
      text: b,
      options: {
        fontSize: 14,
        fontFace: 'Arial',
        color: C.textDark,
        bullet: { type: 'bullet' },
        paraSpaceAfter: 6,
        lineSpacingMultiple: 1.15,
      },
    })),
    { x: 0.8, y: 1.2, w: 8.4, h: 4.0, valign: 'top' }
  )
}

export async function GET(request: NextRequest) {
  const dayParam = request.nextUrl.searchParams.get('day')

  if (!dayParam) {
    return NextResponse.json({ error: 'Missing "day" parameter. Use /api/generate-pptx?day=1' }, { status: 400 })
  }

  const dayNum = parseInt(dayParam, 10)
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 10) {
    return NextResponse.json({ error: 'Invalid day. Must be between 1 and 10.' }, { status: 400 })
  }

  const dayContent = daysData.find(d => d.day === dayNum)
  if (!dayContent) {
    return NextResponse.json({ error: `Day ${dayNum} content not available yet.` }, { status: 404 })
  }

  try {
    const pptx = generateDayPPTX(dayContent)
    const buffer = await pptx.write({ outputType: 'nodebuffer' }) as Buffer
    const fileName = `Crypto_Academy_Day_${dayNum}_${dayContent.title.replace(/\s+/g, '_')}.pptx`

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': buffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('PPTX generation error:', error)
    return NextResponse.json({ error: 'Failed to generate presentation.' }, { status: 500 })
  }
}
