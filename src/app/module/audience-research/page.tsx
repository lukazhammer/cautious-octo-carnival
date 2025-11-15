'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { LoadingOverlay } from '@/components/ui/Loading';
import { useAutoSave } from '@/hooks/useAutoSave';
import { Module2Data, Location } from '@/types/module';
import { calculateCompletion } from '@/lib/utils';

// Section imports
import { PersonaBuilder } from '@/components/sections/PersonaBuilder';
import { MarketIntelligenceSection } from '@/components/sections/MarketIntelligence';
import { WebSearchResearch } from '@/components/sections/WebSearchResearch';
import { PainPointsMatrix } from '@/components/sections/PainPointsMatrix';
import { JobsToBeDone } from '@/components/sections/JobsToBeDone';
import { AudienceSegmentation } from '@/components/sections/AudienceSegmentation';
import { CompetitiveAnalysis } from '@/components/sections/CompetitiveAnalysis';
import { InsightsSummary } from '@/components/sections/InsightsSummary';

import {
  Users,
  TrendingUp,
  Search,
  AlertCircle,
  Briefcase,
  Target,
  BarChart3,
  Lightbulb,
  Save,
  Check,
} from 'lucide-react';

const SECTIONS = [
  { id: 'personas', label: 'Customer Personas', icon: Users },
  { id: 'market-intelligence', label: 'Market Intelligence', icon: TrendingUp },
  { id: 'web-research', label: 'Web Research', icon: Search },
  { id: 'pain-points', label: 'Pain Points', icon: AlertCircle },
  { id: 'jobs-to-be-done', label: 'Jobs-to-be-Done', icon: Briefcase },
  { id: 'segmentation', label: 'Segmentation', icon: Target },
  { id: 'competitive', label: 'Competitive Analysis', icon: BarChart3 },
  { id: 'insights', label: 'AI Insights', icon: Lightbulb },
];

export default function AudienceResearchModule() {
  const [userId] = useState('demo-user'); // Replace with actual auth
  const [moduleData, setModuleData] = useState<Module2Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('personas');
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Module settings
  const [industry, setIndustry] = useState('');
  const [product, setProduct] = useState('');
  const [location, setLocation] = useState<Location>({});

  // Load module data
  useEffect(() => {
    loadModuleData();
  }, []);

  const loadModuleData = async () => {
    try {
      const response = await fetch(`/api/module/progress?userId=${userId}&moduleId=2`);
      const result = await response.json();

      if (result.success && result.data) {
        setModuleData(result.data.data);
        setLocation(result.data.location || {});

        // Extract global settings
        if (result.data.data.industry) setIndustry(result.data.data.industry);
        if (result.data.data.productService) setProduct(result.data.data.productService);
      }
    } catch (error) {
      console.error('Failed to load module data:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveModuleData = async (data: Module2Data) => {
    setSaving(true);
    try {
      const dataWithSettings = {
        ...data,
        industry,
        productService: product,
        targetLocation: location,
        completionPercentage: calculateCompletion(data),
      };

      const response = await fetch('/api/module/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          moduleId: 2,
          data: dataWithSettings,
          location,
        }),
      });

      if (response.ok) {
        setLastSaved(new Date());
      }
    } catch (error) {
      console.error('Failed to save module data:', error);
    } finally {
      setSaving(false);
    }
  };

  // Auto-save hook
  useAutoSave({
    data: moduleData,
    onSave: saveModuleData,
    delay: 2000,
    enabled: !!moduleData,
  });

  const updateModuleData = (updates: Partial<Module2Data>) => {
    setModuleData((prev) => (prev ? { ...prev, ...updates } : null));
  };

  if (loading) {
    return <LoadingOverlay message="Loading Audience Research Module..." />;
  }

  if (!moduleData) {
    return <div>Failed to load module data</div>;
  }

  const completionPercentage = calculateCompletion(moduleData);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                Module 2: Audience Research
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Build comprehensive audience profiles with AI-powered insights
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                {saving ? (
                  <span className="flex items-center gap-2">
                    <Save size={16} className="animate-pulse" />
                    Saving...
                  </span>
                ) : lastSaved ? (
                  <span className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    Saved {lastSaved.toLocaleTimeString()}
                  </span>
                ) : null}
              </div>
              <div className="text-sm font-medium">
                {completionPercentage}% Complete
              </div>
            </div>
          </div>

          {/* Module Settings */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <Input
              placeholder="Industry (e.g., SaaS)"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              onBlur={() => saveModuleData(moduleData)}
            />
            <Input
              placeholder="Product/Service"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onBlur={() => saveModuleData(moduleData)}
            />
            <Input
              placeholder="Country"
              value={location.country || ''}
              onChange={(e) =>
                setLocation((prev) => ({ ...prev, country: e.target.value }))
              }
              onBlur={() => saveModuleData(moduleData)}
            />
            <Input
              placeholder="Region/State"
              value={location.region || ''}
              onChange={(e) =>
                setLocation((prev) => ({ ...prev, region: e.target.value }))
              }
              onBlur={() => saveModuleData(moduleData)}
            />
          </div>

          {/* Section Navigation */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {activeSection === 'personas' && (
          <PersonaBuilder
            personas={moduleData.personas}
            onChange={(personas) => updateModuleData({ personas })}
          />
        )}

        {activeSection === 'market-intelligence' && (
          <MarketIntelligenceSection
            data={moduleData.marketIntelligence}
            location={location}
            industry={industry}
            product={product}
            onChange={(marketIntelligence) => updateModuleData({ marketIntelligence })}
          />
        )}

        {activeSection === 'web-research' && (
          <WebSearchResearch
            data={moduleData.marketResearch}
            industry={industry}
            location={location.country}
            onChange={(marketResearch) => updateModuleData({ marketResearch })}
          />
        )}

        {activeSection === 'pain-points' && (
          <PainPointsMatrix
            data={moduleData.painPointsMatrix}
            onChange={(painPointsMatrix) => updateModuleData({ painPointsMatrix })}
          />
        )}

        {activeSection === 'jobs-to-be-done' && (
          <JobsToBeDone
            data={moduleData.jobsToBeDone}
            onChange={(jobsToBeDone) => updateModuleData({ jobsToBeDone })}
          />
        )}

        {activeSection === 'segmentation' && (
          <AudienceSegmentation
            data={moduleData.segmentation}
            onChange={(segmentation) => updateModuleData({ segmentation })}
          />
        )}

        {activeSection === 'competitive' && (
          <CompetitiveAnalysis
            data={moduleData.competitiveAnalysis}
            location={location}
            industry={industry}
            onChange={(competitiveAnalysis) => updateModuleData({ competitiveAnalysis })}
          />
        )}

        {activeSection === 'insights' && (
          <InsightsSummary
            data={moduleData.insightsSummary}
            moduleData={moduleData}
            location={location}
            industry={industry}
            product={product}
            onChange={(insightsSummary) => updateModuleData({ insightsSummary })}
          />
        )}
      </div>
    </div>
  );
}
