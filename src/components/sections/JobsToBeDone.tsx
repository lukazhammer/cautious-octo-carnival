'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { JobsToBeDone as JobsToBeDoneType, Job } from '@/types/module';
import { generateId } from '@/lib/utils';
import { Plus, Trash2 } from 'lucide-react';

interface JobsToBeDoneProps {
  data?: JobsToBeDoneType;
  onChange: (data: JobsToBeDoneType) => void;
}

export function JobsToBeDone({ data, onChange }: JobsToBeDoneProps) {
  const addJob = (type: 'functional' | 'emotional' | 'social' | 'supporting') => {
    const newJob: Job = {
      id: generateId(),
      description: '',
      importance: 3,
      satisfaction: 3,
    };

    onChange({
      ...data,
      [type + 'Jobs']: [...(data?.[type + 'Jobs' as keyof JobsToBeDoneType] as Job[] || []), newJob],
    } as JobsToBeDoneType);
  };

  const updateJob = (type: string, id: string, updates: Partial<Job>) => {
    onChange({
      ...data,
      [type + 'Jobs']: (data?.[type + 'Jobs' as keyof JobsToBeDoneType] as Job[] || []).map((j: Job) =>
        j.id === id ? { ...j, ...updates } : j
      ),
    } as JobsToBeDoneType);
  };

  const deleteJob = (type: string, id: string) => {
    onChange({
      ...data,
      [type + 'Jobs']: (data?.[type + 'Jobs' as keyof JobsToBeDoneType] as Job[] || []).filter((j: Job) => j.id !== id),
    } as JobsToBeDoneType);
  };

  const JobList = ({ type, title }: { type: string; title: string }) => {
    const jobs = (data?.[type + 'Jobs' as keyof JobsToBeDoneType] as Job[]) || [];

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{title}</CardTitle>
            <Button onClick={() => addJob(type as any)} size="sm">
              <Plus size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex gap-2">
                <Textarea
                  value={job.description}
                  onChange={(e) =>
                    updateJob(type, job.id, { description: e.target.value })
                  }
                  placeholder="Describe the job..."
                  rows={2}
                />
                <Button
                  onClick={() => deleteJob(type, job.id)}
                  variant="ghost"
                  size="sm"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600">
                    Importance: {job.importance}/5
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={job.importance}
                    onChange={(e) =>
                      updateJob(type, job.id, { importance: parseInt(e.target.value) })
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">
                    Satisfaction: {job.satisfaction}/5
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={job.satisfaction}
                    onChange={(e) =>
                      updateJob(type, job.id, { satisfaction: parseInt(e.target.value) })
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Jobs-to-be-Done Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Understand what jobs your customers are trying to accomplish and how satisfied
            they are with current solutions.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <JobList type="functional" title="Functional Jobs" />
        <JobList type="emotional" title="Emotional Jobs" />
        <JobList type="social" title="Social Jobs" />
        <JobList type="supporting" title="Supporting Jobs" />
      </div>

      {/* Consumption Chain */}
      <Card>
        <CardHeader>
          <CardTitle>Consumption Chain Mapping</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            label="Before (comma-separated tasks)"
            value={data?.consumptionChain?.before?.join(', ') || ''}
            onChange={(e) =>
              onChange({
                ...data,
                consumptionChain: {
                  ...data?.consumptionChain,
                  before: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                } as any,
              } as JobsToBeDoneType)
            }
            placeholder="Tasks before using the product..."
          />
          <Textarea
            label="During (comma-separated tasks)"
            value={data?.consumptionChain?.during?.join(', ') || ''}
            onChange={(e) =>
              onChange({
                ...data,
                consumptionChain: {
                  ...data?.consumptionChain,
                  during: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                } as any,
              } as JobsToBeDoneType)
            }
            placeholder="Tasks while using the product..."
          />
          <Textarea
            label="After (comma-separated tasks)"
            value={data?.consumptionChain?.after?.join(', ') || ''}
            onChange={(e) =>
              onChange({
                ...data,
                consumptionChain: {
                  ...data?.consumptionChain,
                  after: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                } as any,
              } as JobsToBeDoneType)
            }
            placeholder="Tasks after using the product..."
          />
        </CardContent>
      </Card>

      {data?.aiInsights && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-2">
              <Badge variant="ai">AI Insights</Badge>
              <p className="text-sm text-gray-700">{data.aiInsights}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
