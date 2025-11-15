// Type definitions for Module 2: Audience Research

export interface Location {
  country?: string;
  region?: string;
  city?: string;
}

export interface Citation {
  source: string;
  url?: string;
  publisher?: string;
  date?: string;
  quote?: string;
}

// Section 1: Customer Persona Builder
export interface Demographics {
  ageRange: string;
  gender: string;
  incomeLevel: string;
  education: string;
  occupation: string;
  location: Location;
}

export interface Psychographics {
  values: string[];
  interests: string[];
  lifestyle: string;
  motivations: string[];
  mediaConsumption: string[];
}

export interface CustomerPersona {
  id: string;
  name: string;
  demographics: Demographics;
  psychographics: Psychographics;
  goalsAspirations: string[];
  challengesPainPoints: string[];
  decisionFactors: string[];
  buyingBehavior: {
    researchMethods: string[];
    decisionProcess: string;
    purchaseChannels: string[];
  };
}

// Section 2: AI-Powered Market Intelligence
export interface MarketIntelligence {
  demographics: string;
  psychographics: string;
  competitiveLandscape: string;
  industryBehaviors: string;
  marketSizing: string;
  citations: Citation[];
  generatedAt: string;
  location?: Location;
}

// Section 3: Web Search Market Research
export interface MarketResearchData {
  marketReports: {
    title: string;
    source: string;
    url: string;
    summary: string;
    date?: string;
  }[];
  statistics: {
    statistic: string;
    source: string;
    url: string;
    date?: string;
  }[];
  consumerBehavior: {
    insight: string;
    source: string;
    url: string;
  }[];
  competitiveIntel: {
    finding: string;
    source: string;
    url: string;
  }[];
  citations: Citation[];
}

// Section 4: Pain Points Matrix
export interface PainPoint {
  id: string;
  description: string;
  urgent: 'high' | 'low';
  important: 'high' | 'low';
  frequency: 'daily' | 'weekly' | 'monthly' | 'rarely';
  impactRating: number; // 1-10
  currentSolutions: {
    solution: string;
    satisfactionLevel: number; // 1-5
  }[];
  costOfProblem: {
    time?: string;
    money?: string;
    emotional?: string;
  };
  marketGap: boolean;
}

export interface PainPointsMatrix {
  painPoints: PainPoint[];
  aiSuggestions?: string;
  citations?: Citation[];
}

// Section 5: Jobs-to-be-done Framework
export interface Job {
  id: string;
  description: string;
  importance: number; // 1-5
  satisfaction: number; // 1-5
}

export interface JobsToBeDone {
  functionalJobs: Job[];
  emotionalJobs: Job[];
  socialJobs: Job[];
  supportingJobs: Job[];
  consumptionChain: {
    before: string[];
    during: string[];
    after: string[];
  };
  aiInsights?: string;
  citations?: Citation[];
}

// Section 6: Audience Segmentation Tool
export interface AudienceSegment {
  id: string;
  name: string;
  segmentationType: 'demographic' | 'psychographic' | 'behavioral' | 'needs' | 'location';
  characteristics: string[];
  estimatedSize: string;
  accessibilityScore: number; // 1-5
  strategicFitScore: number; // 1-5
  prioritizationScore: number; // Calculated: size × accessibility × fit
}

export interface AudienceSegmentation {
  segments: AudienceSegment[];
  primarySegment?: string; // segment ID
  secondarySegment?: string; // segment ID
  reasoning?: string;
  aiInsights?: string;
  citations?: Citation[];
}

// Section 7: Competitive Customer Analysis
export interface CompetitorAnalysis {
  competitorId: string;
  name: string;
  targetAudience: string;
  positioning: string;
  strengths: string[];
  weaknesses: string[];
  location?: Location;
}

export interface CompetitiveAnalysis {
  competitors: CompetitorAnalysis[];
  whiteSpaceOpportunities: string[];
  marketGaps: {
    gap: string;
    opportunity: string;
    location?: Location;
  }[];
  aiAnalysis?: string;
  citations?: Citation[];
}

// Section 8: AI-Generated Insights Summary
export interface InsightsSummary {
  audienceProfile: string;
  keyTrends: {
    trend: string;
    citation: Citation;
  }[];
  opportunities: string[];
  riskFactors: string[];
  engagementStrategies: string[];
  generatedAt: string;
  citations: Citation[];
}

// Complete Module 2 Data Structure
export interface Module2Data {
  // Section 1
  personas: CustomerPersona[];

  // Section 2
  marketIntelligence?: MarketIntelligence;

  // Section 3
  marketResearch?: MarketResearchData;

  // Section 4
  painPointsMatrix?: PainPointsMatrix;

  // Section 5
  jobsToBeDone?: JobsToBeDone;

  // Section 6
  segmentation?: AudienceSegmentation;

  // Section 7
  competitiveAnalysis?: CompetitiveAnalysis;

  // Section 8
  insightsSummary?: InsightsSummary;

  // Global settings
  targetLocation?: Location;
  industry?: string;
  productService?: string;

  // Metadata
  lastUpdated: string;
  completionPercentage: number;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ModuleProgressResponse {
  id: string;
  userId: string;
  moduleId: number;
  data: Module2Data;
  location?: Location;
  createdAt: string;
  updatedAt: string;
}
