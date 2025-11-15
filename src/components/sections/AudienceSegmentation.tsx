'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { AudienceSegmentation as SegmentationType, AudienceSegment } from '@/types/module';
import { generateId } from '@/lib/utils';
import { Plus, Trash2, Target } from 'lucide-react';

interface AudienceSegmentationProps {
  data?: SegmentationType;
  onChange: (data: SegmentationType) => void;
}

export function AudienceSegmentation({ data, onChange }: AudienceSegmentationProps) {
  const segments = data?.segments || [];
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const addSegment = () => {
    const newSegment: AudienceSegment = {
      id: generateId(),
      name: '',
      segmentationType: 'demographic',
      characteristics: [],
      estimatedSize: '',
      accessibilityScore: 3,
      strategicFitScore: 3,
      prioritizationScore: 0,
    };

    onChange({
      ...data,
      segments: [...segments, newSegment],
    });
    setSelectedSegment(newSegment.id);
  };

  const updateSegment = (id: string, updates: Partial<AudienceSegment>) => {
    const updatedSegments = segments.map((s) => {
      if (s.id === id) {
        const updated = { ...s, ...updates };
        // Calculate prioritization score
        const sizeNum = parseInt(updated.estimatedSize.replace(/\D/g, '')) || 1;
        updated.prioritizationScore =
          (sizeNum / 1000) * updated.accessibilityScore * updated.strategicFitScore;
        return updated;
      }
      return s;
    });

    onChange({
      ...data,
      segments: updatedSegments,
    });
  };

  const deleteSegment = (id: string) => {
    onChange({
      ...data,
      segments: segments.filter((s) => s.id !== id),
    });
    setSelectedSegment(null);
  };

  const selectedSeg = segments.find((s) => s.id === selectedSegment);

  // Sort segments by prioritization score
  const sortedSegments = [...segments].sort(
    (a, b) => b.prioritizationScore - a.prioritizationScore
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target size={24} />
                Audience Segmentation
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Define and prioritize your target audience segments
              </p>
            </div>
            <Button onClick={addSegment}>
              <Plus size={16} className="mr-2" />
              Add Segment
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Segment List */}
          <div className="space-y-2">
            {sortedSegments.map((segment, index) => (
              <button
                key={segment.id}
                onClick={() => setSelectedSegment(segment.id)}
                className={`w-full p-4 border rounded-lg text-left transition-all ${
                  selectedSegment === segment.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{segment.name || 'Untitled Segment'}</span>
                      {index === 0 && <Badge variant="success">Primary</Badge>}
                      {index === 1 && <Badge variant="default">Secondary</Badge>}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {segment.segmentationType} • {segment.estimatedSize}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      Score: {segment.prioritizationScore.toFixed(1)}
                    </div>
                    <div className="text-xs text-gray-500">
                      Access: {segment.accessibilityScore} • Fit:{' '}
                      {segment.strategicFitScore}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Segment Details */}
      {selectedSeg && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Segment Details</CardTitle>
              <Button
                onClick={() => deleteSegment(selectedSeg.id)}
                variant="outline"
                size="sm"
              >
                <Trash2 size={16} className="mr-2" />
                Delete
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Segment Name"
              value={selectedSeg.name}
              onChange={(e) => updateSegment(selectedSeg.id, { name: e.target.value })}
              placeholder="e.g., Small Business Owners"
            />

            <Select
              label="Segmentation Type"
              value={selectedSeg.segmentationType}
              onChange={(e) =>
                updateSegment(selectedSeg.id, {
                  segmentationType: e.target.value as AudienceSegment['segmentationType'],
                })
              }
              options={[
                { value: 'demographic', label: 'Demographic' },
                { value: 'psychographic', label: 'Psychographic' },
                { value: 'behavioral', label: 'Behavioral' },
                { value: 'needs', label: 'Needs-based' },
                { value: 'location', label: 'Location-based' },
              ]}
            />

            <Textarea
              label="Characteristics (comma-separated)"
              value={selectedSeg.characteristics.join(', ')}
              onChange={(e) =>
                updateSegment(selectedSeg.id, {
                  characteristics: e.target.value
                    .split(',')
                    .map((c) => c.trim())
                    .filter(Boolean),
                })
              }
              placeholder="Key characteristics of this segment..."
              rows={3}
            />

            <Input
              label="Estimated Market Size"
              value={selectedSeg.estimatedSize}
              onChange={(e) =>
                updateSegment(selectedSeg.id, { estimatedSize: e.target.value })
              }
              placeholder="e.g., 50,000 businesses"
            />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accessibility Score: {selectedSeg.accessibilityScore}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={selectedSeg.accessibilityScore}
                  onChange={(e) =>
                    updateSegment(selectedSeg.id, {
                      accessibilityScore: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">How easy to reach this segment?</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Strategic Fit Score: {selectedSeg.strategicFitScore}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={selectedSeg.strategicFitScore}
                  onChange={(e) =>
                    updateSegment(selectedSeg.id, {
                      strategicFitScore: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  How well aligned with your capabilities?
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium mb-1">Prioritization Score</div>
              <div className="text-3xl font-bold text-primary">
                {selectedSeg.prioritizationScore.toFixed(1)}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Size × Accessibility × Strategic Fit
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {data?.aiInsights && (
        <Card>
          <CardContent className="pt-6">
            <Badge variant="ai" className="mb-2">
              AI Insights
            </Badge>
            <p className="text-sm text-gray-700">{data.aiInsights}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
