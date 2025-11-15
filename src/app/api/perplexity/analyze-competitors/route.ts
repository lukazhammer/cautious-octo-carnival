import { NextRequest, NextResponse } from 'next/server';
import { perplexityService } from '@/lib/perplexity';
import { Location } from '@/types/module';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { competitors, industry, location } = body as {
      competitors: string[];
      industry: string;
      location?: Location;
    };

    if (!competitors || competitors.length === 0 || !industry) {
      return NextResponse.json(
        { success: false, error: 'Competitors and industry are required' },
        { status: 400 }
      );
    }

    const result = await perplexityService.analyzeCompetitorAudiences(
      competitors,
      industry,
      location
    );

    // Extract opportunities from the content
    const lines = result.content.split('\n');
    const opportunities: string[] = [];

    for (const line of lines) {
      if (
        line.toLowerCase().includes('opportunity') ||
        line.toLowerCase().includes('underserved') ||
        line.toLowerCase().includes('gap')
      ) {
        const cleaned = line.replace(/^[-*•]\s*/, '').trim();
        if (cleaned) opportunities.push(cleaned);
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        analysis: result.content,
        opportunities: opportunities.length > 0 ? opportunities : ['No specific opportunities identified'],
        citations: result.citations,
      },
    });
  } catch (error) {
    console.error('Failed to analyze competitors:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to analyze competitors',
      },
      { status: 500 }
    );
  }
}
