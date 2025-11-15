'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { LoadingOverlay } from '@/components/ui/Loading';
import { MarketResearchData } from '@/types/module';
import { Search, ExternalLink } from 'lucide-react';

interface WebSearchResearchProps {
  data?: MarketResearchData;
  industry?: string;
  location?: string;
  onChange: (data: MarketResearchData) => void;
}

export function WebSearchResearch({
  data,
  industry,
  location,
  onChange,
}: WebSearchResearchProps) {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const performSearch = async (type: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/web-search/market-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, industry, location, query: searchQuery }),
      });

      const result = await response.json();
      onChange(result.data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search size={24} />
            Web Search Market Research
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder="Enter search query (optional)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={() => performSearch('all')}>
              <Search size={16} className="mr-2" />
              Search
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => performSearch('reports')}
            >
              Market Reports
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => performSearch('statistics')}
            >
              Statistics
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => performSearch('behavior')}
            >
              Consumer Behavior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => performSearch('competitive')}
            >
              Competitive Intel
            </Button>
          </div>
        </CardContent>
      </Card>

      {loading && <LoadingOverlay message="Searching web sources..." />}

      {data && !loading && (
        <div className="space-y-6">
          {/* Market Reports */}
          {data.marketReports && data.marketReports.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Market Reports & Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.marketReports.map((report, idx) => (
                    <div key={idx} className="p-4 border rounded-lg">
                      <h4 className="font-medium flex items-center justify-between">
                        {report.title}
                        <a
                          href={report.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-highlight hover:text-primary"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">{report.summary}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        {report.source} {report.date && `• ${report.date}`}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Statistics */}
          {data.statistics && data.statistics.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Key Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {data.statistics.map((stat, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded">
                      <p className="font-medium">{stat.statistic}</p>
                      <a
                        href={stat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-highlight hover:underline"
                      >
                        {stat.source} {stat.date && `(${stat.date})`}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
