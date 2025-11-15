import { NextRequest, NextResponse } from 'next/server';
import { webSearchService } from '@/lib/web-search';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, industry, location, query } = body;

    if (!industry) {
      return NextResponse.json(
        { success: false, error: 'Industry is required' },
        { status: 400 }
      );
    }

    let results;
    const locationStr = location ? `in ${location}` : '';

    switch (type) {
      case 'reports':
        results = await webSearchService.searchMarketReports(industry, location);
        break;
      case 'statistics':
        results = await webSearchService.searchStatistics(
          query || `${industry} market statistics`,
          location
        );
        break;
      case 'behavior':
        results = await webSearchService.searchConsumerBehavior(
          query || `${industry} consumer`,
          location
        );
        break;
      case 'competitive':
        results = await webSearchService.searchCompetitorNews(
          query ? [query] : [],
          industry
        );
        break;
      default:
        // Perform all searches
        const [reports, stats, behavior, competitive] = await Promise.all([
          webSearchService.searchMarketReports(industry, location),
          webSearchService.searchStatistics(`${industry} statistics`, location),
          webSearchService.searchConsumerBehavior(`${industry} consumer`, location),
          webSearchService.searchCompetitorNews([], industry),
        ]);

        return NextResponse.json({
          success: true,
          data: {
            marketReports: reports.map((r) => ({
              title: r.title,
              url: r.url,
              summary: r.snippet,
              source: r.source || 'Web',
              date: r.date,
            })),
            statistics: stats.map((s) => ({
              statistic: s.title,
              url: s.url,
              source: s.source || 'Web',
              date: s.date,
            })),
            consumerBehavior: behavior.map((b) => ({
              insight: b.snippet,
              source: b.source || 'Web',
              url: b.url,
            })),
            competitiveIntel: competitive.map((c) => ({
              finding: c.snippet,
              source: c.source || 'Web',
              url: c.url,
            })),
            citations: [...reports, ...stats, ...behavior, ...competitive].map((r) => ({
              source: r.source || 'Web',
              url: r.url,
              date: r.date,
            })),
          },
        });
    }

    return NextResponse.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error('Web search failed:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Web search failed',
      },
      { status: 500 }
    );
  }
}
