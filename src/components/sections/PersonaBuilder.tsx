'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { CustomerPersona, Demographics, Psychographics } from '@/types/module';
import { generateId } from '@/lib/utils';
import { Trash2, Plus, User } from 'lucide-react';

interface PersonaBuilderProps {
  personas: CustomerPersona[];
  onChange: (personas: CustomerPersona[]) => void;
}

export function PersonaBuilder({ personas, onChange }: PersonaBuilderProps) {
  const [activePersonaIndex, setActivePersonaIndex] = useState(0);

  const activePersona = personas[activePersonaIndex];

  const addPersona = () => {
    if (personas.length >= 5) {
      alert('Maximum 5 personas allowed');
      return;
    }

    const newPersona: CustomerPersona = {
      id: generateId(),
      name: `Persona ${personas.length + 1}`,
      demographics: {
        ageRange: '',
        gender: '',
        incomeLevel: '',
        education: '',
        occupation: '',
        location: {},
      },
      psychographics: {
        values: [],
        interests: [],
        lifestyle: '',
        motivations: [],
        mediaConsumption: [],
      },
      goalsAspirations: [],
      challengesPainPoints: [],
      decisionFactors: [],
      buyingBehavior: {
        researchMethods: [],
        decisionProcess: '',
        purchaseChannels: [],
      },
    };

    onChange([...personas, newPersona]);
    setActivePersonaIndex(personas.length);
  };

  const deletePersona = (index: number) => {
    if (personas.length === 1) {
      alert('At least one persona is required');
      return;
    }

    const newPersonas = personas.filter((_, i) => i !== index);
    onChange(newPersonas);
    setActivePersonaIndex(Math.max(0, index - 1));
  };

  const updatePersona = (updates: Partial<CustomerPersona>) => {
    const newPersonas = [...personas];
    newPersonas[activePersonaIndex] = {
      ...activePersona,
      ...updates,
    };
    onChange(newPersonas);
  };

  const updateDemographics = (field: keyof Demographics, value: any) => {
    updatePersona({
      demographics: {
        ...activePersona.demographics,
        [field]: value,
      },
    });
  };

  const updatePsychographics = (field: keyof Psychographics, value: any) => {
    updatePersona({
      psychographics: {
        ...activePersona.psychographics,
        [field]: value,
      },
    });
  };

  const updateArrayField = (field: keyof CustomerPersona, value: string) => {
    const currentArray = (activePersona[field] as string[]) || [];
    updatePersona({
      [field]: value.split(',').map(item => item.trim()).filter(Boolean),
    });
  };

  return (
    <div className="space-y-6">
      {/* Persona Tabs */}
      <div className="flex flex-wrap gap-2 items-center">
        {personas.map((persona, index) => (
          <div key={persona.id} className="relative">
            <button
              onClick={() => setActivePersonaIndex(index)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                activePersonaIndex === index
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <User size={16} />
              {persona.name}
            </button>
            {personas.length > 1 && (
              <button
                onClick={() => deletePersona(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <Trash2 size={12} />
              </button>
            )}
          </div>
        ))}
        {personas.length < 5 && (
          <Button onClick={addPersona} variant="outline" size="sm">
            <Plus size={16} className="mr-1" />
            Add Persona
          </Button>
        )}
      </div>

      {/* Persona Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Persona Name"
              value={activePersona.name}
              onChange={(e) => updatePersona({ name: e.target.value })}
              placeholder="e.g., Marketing Mary"
            />
          </CardContent>
        </Card>

        {/* Demographics */}
        <Card>
          <CardHeader>
            <CardTitle>Demographics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Age Range"
              value={activePersona.demographics.ageRange}
              onChange={(e) => updateDemographics('ageRange', e.target.value)}
              placeholder="e.g., 25-34"
            />
            <Select
              label="Gender"
              value={activePersona.demographics.gender}
              onChange={(e) => updateDemographics('gender', e.target.value)}
              options={[
                { value: '', label: 'Select...' },
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'non-binary', label: 'Non-binary' },
                { value: 'all', label: 'All genders' },
              ]}
            />
            <Input
              label="Income Level"
              value={activePersona.demographics.incomeLevel}
              onChange={(e) => updateDemographics('incomeLevel', e.target.value)}
              placeholder="e.g., $50,000-$75,000"
            />
            <Input
              label="Education"
              value={activePersona.demographics.education}
              onChange={(e) => updateDemographics('education', e.target.value)}
              placeholder="e.g., Bachelor's degree"
            />
            <Input
              label="Occupation"
              value={activePersona.demographics.occupation}
              onChange={(e) => updateDemographics('occupation', e.target.value)}
              placeholder="e.g., Marketing Manager"
            />
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Country"
              value={activePersona.demographics.location.country || ''}
              onChange={(e) =>
                updateDemographics('location', {
                  ...activePersona.demographics.location,
                  country: e.target.value,
                })
              }
              placeholder="e.g., United States"
            />
            <Input
              label="Region/State"
              value={activePersona.demographics.location.region || ''}
              onChange={(e) =>
                updateDemographics('location', {
                  ...activePersona.demographics.location,
                  region: e.target.value,
                })
              }
              placeholder="e.g., California"
            />
            <Input
              label="City"
              value={activePersona.demographics.location.city || ''}
              onChange={(e) =>
                updateDemographics('location', {
                  ...activePersona.demographics.location,
                  city: e.target.value,
                })
              }
              placeholder="e.g., San Francisco"
            />
          </CardContent>
        </Card>

        {/* Psychographics */}
        <Card>
          <CardHeader>
            <CardTitle>Psychographics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              label="Values (comma-separated)"
              value={activePersona.psychographics.values.join(', ')}
              onChange={(e) =>
                updatePsychographics(
                  'values',
                  e.target.value.split(',').map((v) => v.trim()).filter(Boolean)
                )
              }
              placeholder="e.g., Innovation, Sustainability, Work-life balance"
              rows={2}
            />
            <Textarea
              label="Interests (comma-separated)"
              value={activePersona.psychographics.interests.join(', ')}
              onChange={(e) =>
                updatePsychographics(
                  'interests',
                  e.target.value.split(',').map((v) => v.trim()).filter(Boolean)
                )
              }
              placeholder="e.g., Technology, Travel, Fitness"
              rows={2}
            />
            <Textarea
              label="Lifestyle"
              value={activePersona.psychographics.lifestyle}
              onChange={(e) => updatePsychographics('lifestyle', e.target.value)}
              placeholder="Describe their lifestyle..."
              rows={3}
            />
            <Textarea
              label="Motivations (comma-separated)"
              value={activePersona.psychographics.motivations.join(', ')}
              onChange={(e) =>
                updatePsychographics(
                  'motivations',
                  e.target.value.split(',').map((v) => v.trim()).filter(Boolean)
                )
              }
              placeholder="e.g., Career advancement, Financial security"
              rows={2}
            />
            <Textarea
              label="Media Consumption (comma-separated)"
              value={activePersona.psychographics.mediaConsumption.join(', ')}
              onChange={(e) =>
                updatePsychographics(
                  'mediaConsumption',
                  e.target.value.split(',').map((v) => v.trim()).filter(Boolean)
                )
              }
              placeholder="e.g., LinkedIn, Podcasts, Industry blogs"
              rows={2}
            />
          </CardContent>
        </Card>

        {/* Goals and Aspirations */}
        <Card>
          <CardHeader>
            <CardTitle>Goals & Aspirations</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              label="What they want to achieve (comma-separated)"
              value={activePersona.goalsAspirations.join(', ')}
              onChange={(e) => updateArrayField('goalsAspirations', e.target.value)}
              placeholder="e.g., Grow their business, Increase efficiency, Build their brand"
              rows={4}
            />
          </CardContent>
        </Card>

        {/* Challenges and Pain Points */}
        <Card>
          <CardHeader>
            <CardTitle>Challenges & Pain Points</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              label="What holds them back (comma-separated)"
              value={activePersona.challengesPainPoints.join(', ')}
              onChange={(e) => updateArrayField('challengesPainPoints', e.target.value)}
              placeholder="e.g., Limited budget, Lack of expertise, Time constraints"
              rows={4}
            />
          </CardContent>
        </Card>

        {/* Decision Factors */}
        <Card>
          <CardHeader>
            <CardTitle>Decision-Making Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              label="What influences their purchases (comma-separated)"
              value={activePersona.decisionFactors.join(', ')}
              onChange={(e) => updateArrayField('decisionFactors', e.target.value)}
              placeholder="e.g., Price, Quality, Customer reviews, Brand reputation"
              rows={4}
            />
          </CardContent>
        </Card>

        {/* Buying Behavior */}
        <Card>
          <CardHeader>
            <CardTitle>Buying Behavior</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              label="Research Methods (comma-separated)"
              value={activePersona.buyingBehavior.researchMethods.join(', ')}
              onChange={(e) =>
                updatePersona({
                  buyingBehavior: {
                    ...activePersona.buyingBehavior,
                    researchMethods: e.target.value
                      .split(',')
                      .map((v) => v.trim())
                      .filter(Boolean),
                  },
                })
              }
              placeholder="e.g., Google search, Review sites, Ask peers"
              rows={2}
            />
            <Textarea
              label="Decision Process"
              value={activePersona.buyingBehavior.decisionProcess}
              onChange={(e) =>
                updatePersona({
                  buyingBehavior: {
                    ...activePersona.buyingBehavior,
                    decisionProcess: e.target.value,
                  },
                })
              }
              placeholder="Describe how they make purchase decisions..."
              rows={3}
            />
            <Textarea
              label="Purchase Channels (comma-separated)"
              value={activePersona.buyingBehavior.purchaseChannels.join(', ')}
              onChange={(e) =>
                updatePersona({
                  buyingBehavior: {
                    ...activePersona.buyingBehavior,
                    purchaseChannels: e.target.value
                      .split(',')
                      .map((v) => v.trim())
                      .filter(Boolean),
                  },
                })
              }
              placeholder="e.g., Website, Mobile app, In-store"
              rows={2}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
