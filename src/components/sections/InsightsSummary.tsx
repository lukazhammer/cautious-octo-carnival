'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { LoadingOverlay } from '@/components/ui/Loading';
import { InsightsSummary as InsightsSummaryType, Location } from '@/types/module';
import { Sparkles, TrendingUp, AlertTriangle, Target, Lightbulb, ExternalLink } from 'lucide-react';

interface InsightsSummaryProps {
  data?: InsightsSummaryType;
  moduleData?: any;
  location?: Location;
  industry?: string;
  product?: string;
  onChange: (data: InsightsSummaryType) => void;
}

export function InsightsSummary({
  data,
  moduleData,
  location,
  industry,
  product,
  onChange,
}: InsightsSummaryProps) {
  const [loading, setLoading] = useState(false);

  const generateInsights = async () => {
    if (!industry || !product) {
      alert('Please set industry and product in module settings');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/perplexity/generate-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          product,
          location,
          personas: moduleData?.personas,
          painPoints: moduleData?.painPointsMatrix?.painPoints,
          segments: moduleData?.segmentation?.segments,
        }),
      });

      const result = await response.json();

      onChange({
        audienceProfile: result.data.audienceProfile,
        keyTrends: result.data.keyTrends,
        opportunities: result.data.opportunities,
        riskFactors: result.data.riskFactors,
        engagementStrategies: result.data.engagementStrategies,
        generatedAt: new Date().toISOString(),
        citations: result.data.citations,
      });
    } catch (error) {
      console.error('Failed to generate insights:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb size={24} className="text-highlight" />
                AI-Generated Insights Summary
                <Badge variant="ai">Powered by Perplexity</Badge>
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Comprehensive market analysis and strategic recommendations based on your
                research
              </p>
            </div>
            <Button onClick={generateInsights} disabled={loading}>
              <Sparkles size={16} className="mr-2" />
              {data ? 'Regenerate' : 'Generate'} Insights
            </Button>
          </div>
        </CardHeader>
      </Card>

      {loading && <LoadingOverlay message="Generating comprehensive insights..." />}

      {data && !loading && (
        <div className="space-y-6">
          {/* Audience Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target size={20} />
                Audience Profile Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap">{data.audienceProfile}</p>
              </div>
            </CardContent>
          </Card>

          {/* Key Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp size={20} />
                Key Trends Affecting This Audience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.keyTrends.map((trend, index) => (
                  <div
                    key={index}
                    className="p-4 border-l-4 border-highlight bg-highlight/5 rounded-r-lg"
                  >
                    <p className="font-medium mb-2">{trend.trend}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{trend.citation.source}</span>
                      {trend.citation.url && (
                        <a
                          href={trend.citation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-highlight hover:underline flex items-center gap-1"
                        >
                          <ExternalLink size={12} />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles size={20} />
                Emerging Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <span className="flex-1 text-gray-700">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle size={20} />
                Risk Factors & Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.riskFactors.map((risk, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2" />
                    <span className="flex-1 text-gray-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Engagement Strategies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target size={20} />
                Recommended Engagement Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.engagementStrategies.map((strategy, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="flex-1 text-gray-700">{strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Citations */}
          {data.citations && data.citations.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Sources & Citations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.citations.map((citation, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{citation.source}</p>
                          {citation.publisher && (
                            <p className="text-xs text-gray-600 mt-1">
                              {citation.publisher}
                              {citation.date && ` • ${citation.date}`}
                            </p>
                          )}
                          {citation.quote && (
                            <p className="text-sm text-gray-700 mt-2 italic">
                              "{citation.quote}"
                            </p>
                          )}
                        </div>
                        {citation.url && (
                          <a
                            href={citation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 text-highlight hover:text-primary text-sm font-medium flex items-center gap-1"
                          >
                            <ExternalLink size={14} />
                            View
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Metadata */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="ai">AI-Generated</Badge>
                  <span className="text-gray-600">
                    All insights generated by Perplexity AI
                  </span>
                </div>
                <span className="text-gray-500">
                  Generated: {new Date(data.generatedAt).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
