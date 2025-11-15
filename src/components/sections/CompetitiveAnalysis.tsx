'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { LoadingOverlay } from '@/components/ui/Loading';
import {
  CompetitiveAnalysis as CompetitiveAnalysisType,
  CompetitorAnalysis,
  Location,
} from '@/types/module';
import { generateId } from '@/lib/utils';
import { Plus, Trash2, Sparkles, TrendingUp } from 'lucide-react';

interface CompetitiveAnalysisProps {
  data?: CompetitiveAnalysisType;
  location?: Location;
  industry?: string;
  onChange: (data: CompetitiveAnalysisType) => void;
}

export function CompetitiveAnalysis({
  data,
  location,
  industry,
  onChange,
}: CompetitiveAnalysisProps) {
  const [loading, setLoading] = useState(false);
  const competitors = data?.competitors || [];

  const addCompetitor = () => {
    const newCompetitor: CompetitorAnalysis = {
      competitorId: generateId(),
      name: '',
      targetAudience: '',
      positioning: '',
      strengths: [],
      weaknesses: [],
      location,
    };

    onChange({
      ...data,
      competitors: [...competitors, newCompetitor],
    });
  };

  const updateCompetitor = (id: string, updates: Partial<CompetitorAnalysis>) => {
    onChange({
      ...data,
      competitors: competitors.map((c) =>
        c.competitorId === id ? { ...c, ...updates } : c
      ),
    });
  };

  const deleteCompetitor = (id: string) => {
    onChange({
      ...data,
      competitors: competitors.filter((c) => c.competitorId !== id),
    });
  };

  const generateAIAnalysis = async () => {
    if (!industry || competitors.length === 0) {
      alert('Add competitors first and ensure industry is set');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/perplexity/analyze-competitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          competitors: competitors.map((c) => c.name),
          industry,
          location,
        }),
      });

      const result = await response.json();
      onChange({
        ...data,
        aiAnalysis: result.data.analysis,
        whiteSpaceOpportunities: result.data.opportunities,
        citations: result.data.citations,
      });
    } catch (error) {
      console.error('AI analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const addMarketGap = () => {
    onChange({
      ...data,
      marketGaps: [
        ...(data?.marketGaps || []),
        { gap: '', opportunity: '', location },
      ],
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp size={24} />
                Competitive Customer Analysis
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Analyze competitors and identify market opportunities
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={addCompetitor} variant="outline">
                <Plus size={16} className="mr-2" />
                Add Competitor
              </Button>
              <Button onClick={generateAIAnalysis} disabled={loading}>
                <Sparkles size={16} className="mr-2" />
                AI Analysis
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {loading && <LoadingOverlay message="Analyzing competitive landscape..." />}

      {/* Competitors */}
      <div className="space-y-4">
        {competitors.map((competitor) => (
          <Card key={competitor.competitorId}>
            <CardContent className="pt-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    label="Competitor Name"
                    value={competitor.name}
                    onChange={(e) =>
                      updateCompetitor(competitor.competitorId, { name: e.target.value })
                    }
                    placeholder="e.g., Company Name"
                  />
                </div>
                <Button
                  onClick={() => deleteCompetitor(competitor.competitorId)}
                  variant="ghost"
                  size="sm"
                  className="mt-6"
                >
                  <Trash2 size={16} />
                </Button>
              </div>

              <Textarea
                label="Target Audience"
                value={competitor.targetAudience}
                onChange={(e) =>
                  updateCompetitor(competitor.competitorId, {
                    targetAudience: e.target.value,
                  })
                }
                placeholder="Who do they serve?"
                rows={2}
              />

              <Textarea
                label="Positioning"
                value={competitor.positioning}
                onChange={(e) =>
                  updateCompetitor(competitor.competitorId, {
                    positioning: e.target.value,
                  })
                }
                placeholder="How do they position themselves?"
                rows={2}
              />

              <div className="grid grid-cols-2 gap-4">
                <Textarea
                  label="Strengths (comma-separated)"
                  value={competitor.strengths.join(', ')}
                  onChange={(e) =>
                    updateCompetitor(competitor.competitorId, {
                      strengths: e.target.value
                        .split(',')
                        .map((s) => s.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="Their strong points..."
                  rows={3}
                />

                <Textarea
                  label="Weaknesses (comma-separated)"
                  value={competitor.weaknesses.join(', ')}
                  onChange={(e) =>
                    updateCompetitor(competitor.competitorId, {
                      weaknesses: e.target.value
                        .split(',')
                        .map((s) => s.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="Their weak points..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* White Space Opportunities */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>White Space Opportunities</CardTitle>
            <Button onClick={addMarketGap} size="sm" variant="outline">
              <Plus size={16} className="mr-2" />
              Add Gap
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {data?.whiteSpaceOpportunities && (
            <Textarea
              label="Underserved Segments"
              value={data.whiteSpaceOpportunities.join('\n')}
              onChange={(e) =>
                onChange({
                  ...data,
                  whiteSpaceOpportunities: e.target.value
                    .split('\n')
                    .filter(Boolean),
                })
              }
              rows={5}
            />
          )}

          {data?.marketGaps && data.marketGaps.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium">Market Positioning Gaps</h4>
              {data.marketGaps.map((gap, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
                  <Input
                    label="Gap"
                    value={gap.gap}
                    onChange={(e) => {
                      const newGaps = [...data.marketGaps];
                      newGaps[index] = { ...gap, gap: e.target.value };
                      onChange({ ...data, marketGaps: newGaps });
                    }}
                    placeholder="What's missing?"
                  />
                  <Input
                    label="Opportunity"
                    value={gap.opportunity}
                    onChange={(e) => {
                      const newGaps = [...data.marketGaps];
                      newGaps[index] = { ...gap, opportunity: e.target.value };
                      onChange({ ...data, marketGaps: newGaps });
                    }}
                    placeholder="How to capitalize?"
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* AI Analysis */}
      {data?.aiAnalysis && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="text-highlight" size={20} />
              <CardTitle>AI Competitive Intelligence</CardTitle>
              <Badge variant="ai">Perplexity</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="whitespace-pre-wrap">{data.aiAnalysis}</p>
            </div>

            {data.citations && data.citations.length > 0 && (
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-3">Citations</h4>
                <div className="space-y-2">
                  {data.citations.map((citation, idx) => (
                    <div key={idx} className="text-sm">
                      <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-highlight hover:underline"
                      >
                        {citation.source}
                      </a>
                      {citation.date && (
                        <span className="text-gray-500 ml-2">({citation.date})</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
