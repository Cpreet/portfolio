import { NextRequest, NextResponse } from 'next/server'

// This API route serves as a placeholder for AI image generation.
// In development, images are generated via the Nano-Banana MCP server
// during the build/development process and saved to public/assets/projects/

interface GenerateImageRequest {
  slug: string
  title: string
  type: string
  short: string
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateImageRequest = await request.json()

    if (!body.slug || !body.title) {
      return NextResponse.json(
        { error: 'Missing required fields: slug and title' },
        { status: 400 }
      )
    }

    // Check if image already exists
    const imagePath = `/assets/projects/${body.slug}.webp`
    
    // In production, this would integrate with an AI image generation service
    // For now, we return the expected path where pre-generated images are stored
    return NextResponse.json({
      success: true,
      imagePath,
      message: 'Image generation is handled during development via MCP server. Pre-generated images are served from public/assets/projects/',
      project: {
        slug: body.slug,
        title: body.title,
        type: body.type,
      }
    })

  } catch (error) {
    console.error('Image generation error:', error)
    return NextResponse.json(
      { error: 'Failed to process image generation request' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Image generation API is ready. Use POST with slug, title, type, and short fields.',
    usage: {
      method: 'POST',
      body: {
        slug: 'project-slug',
        title: 'Project Title',
        type: 'Project Type',
        short: 'Short description',
      }
    }
  })
}

