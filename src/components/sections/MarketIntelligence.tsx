'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { LoadingOverlay } from '@/components/ui/Loading';
import { MarketIntelligence, Location } from '@/types/module';
import { Sparkles, MapPin, RefreshCw } from 'lucide-react';

interface MarketIntelligenceProps {
  data?: MarketIntelligence;
  location?: Location;
  industry?: string;
  product?: string;
  onChange: (data: MarketIntelligence) => void;
}

export function MarketIntelligenceSection({
  data,
  location,
  industry,
  product,
  onChange,
}: MarketIntelligenceProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateIntelligence = async () => {
    if (!industry || !product) {
      setError('Please specify industry and product in module settings');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/perplexity/analyze-audience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, product, location }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate market intelligence');
      }

      const result = await response.json();

      onChange({
        demographics: result.data.demographics,
        psychographics: result.data.psychographics,
        competitiveLandscape: result.data.competitiveLandscape,
        industryBehaviors: result.data.industryBehaviors,
        marketSizing: result.data.marketSizing,
        citations: result.data.citations,
        generatedAt: new Date().toISOString(),
        location,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
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
                <Sparkles className="text-highlight" size={24} />
                AI-Powered Market Intelligence
                <Badge variant="ai">Powered by Perplexity</Badge>
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Generate real-time market insights, demographics, and competitive intelligence
                for your target audience.
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            {location && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} />
                <span>
                  {[location.city, location.region, location.country]
                    .filter(Boolean)
                    .join(', ')}
                </span>
              </div>
            )}
            <Button
              onClick={generateIntelligence}
              disabled={loading || !industry || !product}
              className="ml-auto"
            >
              {loading ? (
                <>
                  <RefreshCw size={16} className="mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles size={16} className="mr-2" />
                  {data ? 'Regenerate' : 'Generate'} Intelligence
                </>
              )}
            </Button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Loading State */}
      {loading && <LoadingOverlay message="Analyzing market data with AI..." />}

      {/* Results */}
      {data && !loading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Demographics */}
          <Card>
            <CardHeader>
              <CardTitle>Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap">{data.demographics}</p>
              </div>
            </CardContent>
          </Card>

          {/* Psychographics */}
          <Card>
            <CardHeader>
              <CardTitle>Psychographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap">{data.psychographics}</p>
              </div>
            </CardContent>
          </Card>

          {/* Competitive Landscape */}
          <Card>
            <CardHeader>
              <CardTitle>Competitive Landscape</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap">{data.competitiveLandscape}</p>
              </div>
            </CardContent>
          </Card>

          {/* Industry Behaviors */}
          <Card>
            <CardHeader>
              <CardTitle>Industry-Specific Behaviors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap">{data.industryBehaviors}</p>
              </div>
            </CardContent>
          </Card>

          {/* Market Sizing */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Market Sizing Estimates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap">{data.marketSizing}</p>
              </div>
            </CardContent>
          </Card>

          {/* Citations */}
          {data.citations && data.citations.length > 0 && (
            <Card className="lg:col-span-2">
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
                            className="ml-4 text-highlight hover:text-primary text-sm font-medium"
                          >
                            View Source →
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
          <Card className="lg:col-span-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Badge variant="ai">AI-Generated</Badge>
                  <span>Powered by Perplexity AI</span>
                </div>
                <span>
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
