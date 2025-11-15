'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { PainPoint, PainPointsMatrix as PainPointsMatrixType } from '@/types/module';
import { generateId } from '@/lib/utils';
import { Plus, Trash2, Sparkles } from 'lucide-react';

interface PainPointsMatrixProps {
  data?: PainPointsMatrixType;
  onChange: (data: PainPointsMatrixType) => void;
}

export function PainPointsMatrix({ data, onChange }: PainPointsMatrixProps) {
  const painPoints = data?.painPoints || [];
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

  const addPainPoint = () => {
    const newPoint: PainPoint = {
      id: generateId(),
      description: '',
      urgent: 'low',
      important: 'low',
      frequency: 'monthly',
      impactRating: 5,
      currentSolutions: [],
      costOfProblem: {},
      marketGap: false,
    };

    onChange({
      ...data,
      painPoints: [...painPoints, newPoint],
    });
    setSelectedPoint(newPoint.id);
  };

  const updatePainPoint = (id: string, updates: Partial<PainPoint>) => {
    onChange({
      ...data,
      painPoints: painPoints.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    });
  };

  const deletePainPoint = (id: string) => {
    onChange({
      ...data,
      painPoints: painPoints.filter((p) => p.id !== id),
    });
    setSelectedPoint(null);
  };

  const getQuadrant = (urgent: string, important: string) => {
    if (urgent === 'high' && important === 'high') return 'Critical';
    if (urgent === 'high' && important === 'low') return 'Urgent';
    if (urgent === 'low' && important === 'high') return 'Important';
    return 'Low Priority';
  };

  const selectedPainPoint = painPoints.find((p) => p.id === selectedPoint);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Pain Points Matrix</CardTitle>
            <Button onClick={addPainPoint} size="sm">
              <Plus size={16} className="mr-2" />
              Add Pain Point
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Matrix Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-2 border-red-500 bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-700 mb-2">Critical (High/High)</h4>
              {painPoints
                .filter((p) => p.urgent === 'high' && p.important === 'high')
                .map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPoint(p.id)}
                    className="w-full text-left p-2 mb-2 bg-white rounded hover:bg-red-100 text-sm"
                  >
                    {p.description || 'Untitled'}
                  </button>
                ))}
            </div>

            <div className="border-2 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-700 mb-2">Important (Low/High)</h4>
              {painPoints
                .filter((p) => p.urgent === 'low' && p.important === 'high')
                .map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPoint(p.id)}
                    className="w-full text-left p-2 mb-2 bg-white rounded hover:bg-yellow-100 text-sm"
                  >
                    {p.description || 'Untitled'}
                  </button>
                ))}
            </div>

            <div className="border-2 border-orange-500 bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-orange-700 mb-2">Urgent (High/Low)</h4>
              {painPoints
                .filter((p) => p.urgent === 'high' && p.important === 'low')
                .map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPoint(p.id)}
                    className="w-full text-left p-2 mb-2 bg-white rounded hover:bg-orange-100 text-sm"
                  >
                    {p.description || 'Untitled'}
                  </button>
                ))}
            </div>

            <div className="border-2 border-gray-400 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2">Low Priority (Low/Low)</h4>
              {painPoints
                .filter((p) => p.urgent === 'low' && p.important === 'low')
                .map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPoint(p.id)}
                    className="w-full text-left p-2 mb-2 bg-white rounded hover:bg-gray-100 text-sm"
                  >
                    {p.description || 'Untitled'}
                  </button>
                ))}
            </div>
          </div>

          {/* AI Suggestion */}
          {data?.aiSuggestions && (
            <div className="p-4 bg-highlight/10 border border-highlight rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-highlight" size={16} />
                <span className="font-medium">AI Suggestions</span>
                <Badge variant="ai">Perplexity</Badge>
              </div>
              <p className="text-sm text-gray-700">{data.aiSuggestions}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pain Point Details */}
      {selectedPainPoint && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Pain Point Details</CardTitle>
              <Button
                onClick={() => deletePainPoint(selectedPainPoint.id)}
                variant="outline"
                size="sm"
              >
                <Trash2 size={16} className="mr-2" />
                Delete
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              label="Description"
              value={selectedPainPoint.description}
              onChange={(e) =>
                updatePainPoint(selectedPainPoint.id, { description: e.target.value })
              }
              placeholder="Describe the pain point..."
            />

            <div className="grid grid-cols-2 gap-4">
              <Select
                label="Urgent"
                value={selectedPainPoint.urgent}
                onChange={(e) =>
                  updatePainPoint(selectedPainPoint.id, {
                    urgent: e.target.value as 'high' | 'low',
                  })
                }
                options={[
                  { value: 'low', label: 'Low' },
                  { value: 'high', label: 'High' },
                ]}
              />

              <Select
                label="Important"
                value={selectedPainPoint.important}
                onChange={(e) =>
                  updatePainPoint(selectedPainPoint.id, {
                    important: e.target.value as 'high' | 'low',
                  })
                }
                options={[
                  { value: 'low', label: 'Low' },
                  { value: 'high', label: 'High' },
                ]}
              />
            </div>

            <Select
              label="Frequency"
              value={selectedPainPoint.frequency}
              onChange={(e) =>
                updatePainPoint(selectedPainPoint.id, {
                  frequency: e.target.value as PainPoint['frequency'],
                })
              }
              options={[
                { value: 'rarely', label: 'Rarely' },
                { value: 'monthly', label: 'Monthly' },
                { value: 'weekly', label: 'Weekly' },
                { value: 'daily', label: 'Daily' },
              ]}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Impact Rating: {selectedPainPoint.impactRating}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={selectedPainPoint.impactRating}
                onChange={(e) =>
                  updatePainPoint(selectedPainPoint.id, {
                    impactRating: parseInt(e.target.value),
                  })
                }
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedPainPoint.marketGap}
                  onChange={(e) =>
                    updatePainPoint(selectedPainPoint.id, { marketGap: e.target.checked })
                  }
                />
                <span className="text-sm font-medium">Market Gap / Unmet Need</span>
              </label>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-3">Cost of Problem</h4>
              <div className="space-y-3">
                <Input
                  label="Time Cost"
                  value={selectedPainPoint.costOfProblem.time || ''}
                  onChange={(e) =>
                    updatePainPoint(selectedPainPoint.id, {
                      costOfProblem: { ...selectedPainPoint.costOfProblem, time: e.target.value },
                    })
                  }
                  placeholder="e.g., 5 hours per week"
                />
                <Input
                  label="Money Cost"
                  value={selectedPainPoint.costOfProblem.money || ''}
                  onChange={(e) =>
                    updatePainPoint(selectedPainPoint.id, {
                      costOfProblem: { ...selectedPainPoint.costOfProblem, money: e.target.value },
                    })
                  }
                  placeholder="e.g., $500 per month"
                />
                <Input
                  label="Emotional Toll"
                  value={selectedPainPoint.costOfProblem.emotional || ''}
                  onChange={(e) =>
                    updatePainPoint(selectedPainPoint.id, {
                      costOfProblem: {
                        ...selectedPainPoint.costOfProblem,
                        emotional: e.target.value,
                      },
                    })
                  }
                  placeholder="e.g., High stress, frustration"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
