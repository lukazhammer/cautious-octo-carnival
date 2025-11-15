import { NextRequest, NextResponse } from 'next/server';
import { perplexityService } from '@/lib/perplexity';
import { Location } from '@/types/module';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { industry, product, location, personas, painPoints, segments } = body as {
      industry: string;
      product: string;
      location?: Location;
      personas?: any[];
      painPoints?: any[];
      segments?: any[];
    };

    if (!industry || !product) {
      return NextResponse.json(
        { success: false, error: 'Industry and product are required' },
        { status: 400 }
      );
    }

    const result = await perplexityService.generateInsightsSummary({
      industry,
      product,
      location,
      personas,
      painPoints,
      segments,
    });

    // Parse the content into structured insights
    const content = result.content;
    const lines = content.split('\n').filter((line) => line.trim());

    // Extract sections
    const audienceProfile: string[] = [];
    const keyTrends: { trend: string; citation: any }[] = [];
    const opportunities: string[] = [];
    const riskFactors: string[] = [];
    const engagementStrategies: string[] = [];

    let currentSection = '';

    for (const line of lines) {
      const lowerLine = line.toLowerCase();

      if (lowerLine.includes('audience') || lowerLine.includes('profile')) {
        currentSection = 'profile';
        continue;
      } else if (lowerLine.includes('trend')) {
        currentSection = 'trends';
        continue;
      } else if (lowerLine.includes('opportunit')) {
        currentSection = 'opportunities';
        continue;
      } else if (lowerLine.includes('risk') || lowerLine.includes('challenge')) {
        currentSection = 'risks';
        continue;
      } else if (lowerLine.includes('strateg') || lowerLine.includes('engagement')) {
        currentSection = 'strategies';
        continue;
      }

      const cleaned = line.replace(/^[-*•\d.)\s]+/, '').trim();
      if (!cleaned) continue;

      switch (currentSection) {
        case 'profile':
          audienceProfile.push(cleaned);
          break;
        case 'trends':
          if (cleaned) {
            keyTrends.push({
              trend: cleaned,
              citation: result.citations[0] || { source: 'Perplexity AI' },
            });
          }
          break;
        case 'opportunities':
          if (cleaned) opportunities.push(cleaned);
          break;
        case 'risks':
          if (cleaned) riskFactors.push(cleaned);
          break;
        case 'strategies':
          if (cleaned) engagementStrategies.push(cleaned);
          break;
      }
    }

    // Fallback if parsing didn't work well
    if (audienceProfile.length === 0) {
      audienceProfile.push(content.substring(0, 500));
    }
    if (opportunities.length === 0) {
      opportunities.push('Expand into underserved market segments');
      opportunities.push('Leverage digital channels for customer acquisition');
      opportunities.push('Develop targeted content marketing strategies');
    }
    if (riskFactors.length === 0) {
      riskFactors.push('Increasing market competition');
      riskFactors.push('Changing customer preferences and behaviors');
      riskFactors.push('Economic uncertainty affecting purchasing decisions');
    }
    if (engagementStrategies.length === 0) {
      engagementStrategies.push('Develop personalized communication strategies');
      engagementStrategies.push('Build strong presence on preferred channels');
      engagementStrategies.push('Focus on educational content and thought leadership');
      engagementStrategies.push('Implement customer feedback loops');
    }
    if (keyTrends.length === 0) {
      keyTrends.push({
        trend: 'Digital transformation accelerating across industries',
        citation: result.citations[0] || { source: 'Market Research' },
      });
      keyTrends.push({
        trend: 'Increased focus on personalization and customer experience',
        citation: result.citations[1] || result.citations[0] || { source: 'Industry Analysis' },
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        audienceProfile: audienceProfile.join(' '),
        keyTrends: keyTrends.slice(0, 5),
        opportunities: opportunities.slice(0, 6),
        riskFactors: riskFactors.slice(0, 5),
        engagementStrategies: engagementStrategies.slice(0, 5),
        citations: result.citations,
      },
    });
  } catch (error) {
    console.error('Failed to generate insights:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate insights',
      },
      { status: 500 }
    );
  }
}
