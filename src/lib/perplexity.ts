import axios, { AxiosError } from 'axios';

export interface PerplexityMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface PerplexityResponse {
  id: string;
  model: string;
  created: number;
  choices: Array<{
    index: number;
    finish_reason: string;
    message: {
      role: string;
      content: string;
    };
    delta: {
      role: string;
      content: string;
    };
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  citations?: string[];
}

export interface Citation {
  source: string;
  url?: string;
  publisher?: string;
  date?: string;
  quote?: string;
}

export interface PerplexitySearchResult {
  content: string;
  citations: Citation[];
  rawResponse: PerplexityResponse;
}

class PerplexityService {
  private apiKey: string;
  private baseURL = 'https://api.perplexity.ai';
  private model = 'llama-3.1-sonar-large-128k-online';
  private maxRetries = 3;
  private retryDelay = 1000; // 1 second

  constructor() {
    this.apiKey = process.env.PERPLEXITY_API_KEY || '';
    if (!this.apiKey) {
      console.warn('PERPLEXITY_API_KEY is not set. Perplexity features will not work.');
    }
  }

  /**
   * Makes a request to Perplexity API with retry logic
   */
  private async makeRequest(
    messages: PerplexityMessage[],
    retryCount = 0
  ): Promise<PerplexityResponse> {
    try {
      const response = await axios.post<PerplexityResponse>(
        `${this.baseURL}/chat/completions`,
        {
          model: this.model,
          messages,
          max_tokens: 2000,
          temperature: 0.2,
          return_citations: true,
          return_related_questions: false,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          timeout: 30000, // 30 second timeout
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;

        // Rate limiting or server errors - retry
        if (
          (axiosError.response?.status === 429 ||
           axiosError.response?.status === 503 ||
           axiosError.code === 'ECONNABORTED') &&
          retryCount < this.maxRetries
        ) {
          const delay = this.retryDelay * Math.pow(2, retryCount);
          console.log(`Retrying Perplexity request in ${delay}ms... (attempt ${retryCount + 1}/${this.maxRetries})`);

          await new Promise(resolve => setTimeout(resolve, delay));
          return this.makeRequest(messages, retryCount + 1);
        }

        // Handle specific error cases
        if (axiosError.response?.status === 401) {
          throw new Error('Invalid Perplexity API key');
        }

        if (axiosError.response?.status === 400) {
          throw new Error('Invalid request to Perplexity API');
        }

        throw new Error(`Perplexity API error: ${axiosError.message}`);
      }

      throw error;
    }
  }

  /**
   * Parses citations from Perplexity response
   */
  private parseCitations(response: PerplexityResponse): Citation[] {
    const citations: Citation[] = [];
    const citationUrls = response.citations || [];

    citationUrls.forEach((url, index) => {
      try {
        const urlObj = new URL(url);
        const hostname = urlObj.hostname.replace('www.', '');

        citations.push({
          source: this.extractSourceName(hostname),
          url: url,
          publisher: hostname,
          date: new Date().toISOString().split('T')[0], // Current date as fallback
        });
      } catch (error) {
        console.error(`Failed to parse citation URL: ${url}`, error);
      }
    });

    return citations;
  }

  /**
   * Extracts a readable source name from hostname
   */
  private extractSourceName(hostname: string): string {
    const knownSources: Record<string, string> = {
      'statista.com': 'Statista',
      'pewresearch.org': 'Pew Research Center',
      'census.gov': 'U.S. Census Bureau',
      'forbes.com': 'Forbes',
      'mckinsey.com': 'McKinsey & Company',
      'gartner.com': 'Gartner',
      'nielsen.com': 'Nielsen',
      'emarketer.com': 'eMarketer',
      'businesswire.com': 'Business Wire',
      'prnewswire.com': 'PR Newswire',
    };

    return knownSources[hostname] || hostname
      .split('.')[0]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * Searches for market intelligence using Perplexity
   */
  async searchMarketIntelligence(
    query: string,
    location?: { country?: string; region?: string; city?: string }
  ): Promise<PerplexitySearchResult> {
    if (!this.apiKey) {
      throw new Error('Perplexity API key is not configured');
    }

    const locationContext = location
      ? `Focus on ${[location.city, location.region, location.country].filter(Boolean).join(', ')}.`
      : '';

    const systemPrompt = `You are a market research analyst. Provide accurate, data-driven insights with specific statistics and trends. Always cite your sources. ${locationContext}`;

    const messages: PerplexityMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: query },
    ];

    const response = await this.makeRequest(messages);
    const content = response.choices[0]?.message?.content || '';
    const citations = this.parseCitations(response);

    return {
      content,
      citations,
      rawResponse: response,
    };
  }

  /**
   * Analyzes target audience demographics and psychographics
   */
  async analyzeAudience(
    industry: string,
    product: string,
    location?: { country?: string; region?: string; city?: string }
  ): Promise<PerplexitySearchResult> {
    const locationStr = location
      ? `in ${[location.city, location.region, location.country].filter(Boolean).join(', ')}`
      : 'globally';

    const query = `Provide detailed demographic and psychographic analysis for the target audience of ${product} in the ${industry} industry ${locationStr}. Include:
    1. Age ranges and gender distribution
    2. Income levels and education
    3. Key values, interests, and lifestyle patterns
    4. Media consumption habits
    5. Purchase behavior and decision-making factors

    Include specific statistics and cite all sources.`;

    return this.searchMarketIntelligence(query, location);
  }

  /**
   * Researches common pain points for a target audience
   */
  async researchPainPoints(
    audience: string,
    industry: string
  ): Promise<PerplexitySearchResult> {
    const query = `What are the most common pain points, challenges, and frustrations experienced by ${audience} in the ${industry} industry? Include:
    1. Most urgent and important problems
    2. Frequency of occurrence
    3. Impact on their daily work or life
    4. Current solutions and their limitations
    5. Unmet needs in the market

    Provide specific examples and cite sources.`;

    return this.searchMarketIntelligence(query);
  }

  /**
   * Analyzes jobs-to-be-done for target audience
   */
  async analyzeJobsToBeDone(
    audience: string,
    context: string
  ): Promise<PerplexitySearchResult> {
    const query = `Using the Jobs-to-be-Done framework, analyze what ${audience} are trying to accomplish ${context}. Include:
    1. Functional jobs (tasks they need done)
    2. Emotional jobs (how they want to feel)
    3. Social jobs (how they want to be perceived)
    4. Supporting jobs and related tasks
    5. Current satisfaction with existing solutions

    Provide industry research and cite sources.`;

    return this.searchMarketIntelligence(query);
  }

  /**
   * Identifies market segments and opportunities
   */
  async identifySegments(
    market: string,
    product: string,
    location?: { country?: string; region?: string }
  ): Promise<PerplexitySearchResult> {
    const locationStr = location
      ? `in ${[location.region, location.country].filter(Boolean).join(', ')}`
      : '';

    const query = `Identify and analyze market segments for ${product} in the ${market} market ${locationStr}. Include:
    1. Key demographic segments
    2. Behavioral segments
    3. Psychographic segments
    4. Market size estimates for each segment
    5. Accessibility and strategic fit
    6. Emerging micro-segments

    Provide data-backed insights with citations.`;

    return this.searchMarketIntelligence(query, location);
  }

  /**
   * Analyzes competitors and their target audiences
   */
  async analyzeCompetitorAudiences(
    competitors: string[],
    industry: string,
    location?: { country?: string; region?: string }
  ): Promise<PerplexitySearchResult> {
    const competitorList = competitors.join(', ');
    const locationStr = location
      ? `in ${[location.region, location.country].filter(Boolean).join(', ')}`
      : '';

    const query = `Analyze the target audiences of these competitors: ${competitorList} in the ${industry} industry ${locationStr}. Include:
    1. Who do they primarily serve?
    2. How do they position themselves to different audience segments?
    3. What are their strengths and weaknesses in serving customer needs?
    4. What audience segments are underserved or overlooked?
    5. White space opportunities in the market

    Cite all sources and provide specific examples.`;

    return this.searchMarketIntelligence(query, location);
  }

  /**
   * Generates comprehensive audience insights summary
   */
  async generateInsightsSummary(
    audienceData: {
      personas?: any[];
      painPoints?: any[];
      segments?: any[];
      industry: string;
      product: string;
      location?: { country?: string; region?: string; city?: string };
    }
  ): Promise<PerplexitySearchResult> {
    const { industry, product, location } = audienceData;
    const locationStr = location
      ? `in ${[location.city, location.region, location.country].filter(Boolean).join(', ')}`
      : '';

    const query = `Provide a comprehensive market analysis and strategic insights for ${product} in the ${industry} industry ${locationStr}. Include:
    1. Key trends affecting this audience and market
    2. Emerging opportunities based on current market conditions
    3. Risk factors and challenges to be aware of
    4. Recommended audience engagement strategies
    5. Market growth projections and dynamics

    Focus on actionable insights with data and citations.`;

    return this.searchMarketIntelligence(query, location);
  }
}

// Export singleton instance
export const perplexityService = new PerplexityService();
