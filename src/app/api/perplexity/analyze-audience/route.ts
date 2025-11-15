import { NextRequest, NextResponse } from 'next/server';
import { perplexityService } from '@/lib/perplexity';
import { Location } from '@/types/module';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { industry, product, location } = body as {
      industry: string;
      product: string;
      location?: Location;
    };

    if (!industry || !product) {
      return NextResponse.json(
        { success: false, error: 'Industry and product are required' },
        { status: 400 }
      );
    }

    const result = await perplexityService.analyzeAudience(industry, product, location);

    // Parse the content into sections
    const content = result.content;
    const sections = {
      demographics: '',
      psychographics: '',
      competitiveLandscape: '',
      industryBehaviors: '',
      marketSizing: '',
    };

    // Simple parsing - split by common headers
    const lines = content.split('\n');
    let currentSection = '';

    for (const line of lines) {
      const lowerLine = line.toLowerCase();

      if (lowerLine.includes('demographic')) {
        currentSection = 'demographics';
      } else if (lowerLine.includes('psychographic')) {
        currentSection = 'psychographics';
      } else if (lowerLine.includes('competitive') || lowerLine.includes('landscape')) {
        currentSection = 'competitiveLandscape';
      } else if (lowerLine.includes('behavior') || lowerLine.includes('industry')) {
        currentSection = 'industryBehaviors';
      } else if (lowerLine.includes('market size') || lowerLine.includes('sizing')) {
        currentSection = 'marketSizing';
      } else if (currentSection && line.trim()) {
        sections[currentSection as keyof typeof sections] += line + '\n';
      }
    }

    // If parsing didn't work well, use the full content for each section
    if (!sections.demographics && !sections.psychographics) {
      sections.demographics = content.substring(0, Math.floor(content.length / 5));
      sections.psychographics = content.substring(
        Math.floor(content.length / 5),
        Math.floor(content.length / 5) * 2
      );
      sections.competitiveLandscape = content.substring(
        Math.floor(content.length / 5) * 2,
        Math.floor(content.length / 5) * 3
      );
      sections.industryBehaviors = content.substring(
        Math.floor(content.length / 5) * 3,
        Math.floor(content.length / 5) * 4
      );
      sections.marketSizing = content.substring(Math.floor(content.length / 5) * 4);
    }

    return NextResponse.json({
      success: true,
      data: {
        ...sections,
        citations: result.citations,
      },
    });
  } catch (error) {
    console.error('Failed to analyze audience:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to analyze audience',
      },
      { status: 500 }
    );
  }
}
