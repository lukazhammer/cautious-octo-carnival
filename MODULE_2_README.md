# Module 2: Audience Research - Complete Guide

## Overview

Module 2 is a comprehensive AI-powered audience research tool that helps you build detailed customer profiles, analyze markets, and generate strategic insights using Perplexity AI integration.

## Features

### ✅ 8 Complete Research Sections

1. **Customer Persona Builder** - Create up to 5 detailed personas with demographics, psychographics, goals, challenges, and buying behavior
2. **AI-Powered Market Intelligence** - Real-time market analysis using Perplexity API with citations
3. **Web Search Market Research** - Automated research from authoritative sources
4. **Pain Points Matrix** - Urgent/Important grid with frequency, impact, and cost analysis
5. **Jobs-to-be-Done Framework** - Functional, emotional, social jobs with satisfaction scoring
6. **Audience Segmentation Tool** - Prioritization scoring (size × accessibility × fit)
7. **Competitive Customer Analysis** - Competitor audience analysis and white space identification
8. **AI-Generated Insights Summary** - Comprehensive strategic recommendations

### 🚀 Key Technical Features

- **Auto-save on blur** - All data automatically saved to database
- **JSONB storage** - Flexible nested data structure in PostgreSQL
- **Location awareness** - Geographic targeting throughout all sections
- **Citations management** - Proper source attribution with metadata
- **Perplexity API integration** - AI-powered insights with error handling and rate limiting
- **Responsive UI** - Mobile-first design with Tailwind CSS
- **TypeScript** - Full type safety across the application

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Perplexity API key ([Get one here](https://www.perplexity.ai/))

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/brandora?schema=public"

# Perplexity API
PERPLEXITY_API_KEY="your_perplexity_api_key_here"

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Setup

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations to create tables
npm run prisma:migrate

# (Optional) Open Prisma Studio to view data
npm run prisma:studio
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/module/audience-research`

## Database Schema

### ModuleProgress Table

Stores all module data in JSONB format:

```typescript
{
  id: string;
  userId: string;
  moduleId: number; // 2 for Audience Research
  data: {
    personas: CustomerPersona[];
    marketIntelligence?: MarketIntelligence;
    marketResearch?: MarketResearchData;
    painPointsMatrix?: PainPointsMatrix;
    jobsToBeDone?: JobsToBeDone;
    segmentation?: AudienceSegmentation;
    competitiveAnalysis?: CompetitiveAnalysis;
    insightsSummary?: InsightsSummary;
    targetLocation?: Location;
    industry?: string;
    productService?: string;
    lastUpdated: string;
    completionPercentage: number;
  };
  location?: {
    country?: string;
    region?: string;
    city?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Citations Table

Stores all research citations:

```typescript
{
  id: string;
  userId: string;
  moduleId: number;
  source: string;
  url?: string;
  publisher?: string;
  date?: string;
  quote?: string;
  metadata?: any;
  createdAt: Date;
}
```

## API Endpoints

### Module Progress

- `GET /api/module/progress?userId={userId}&moduleId=2` - Load module data
- `POST /api/module/progress` - Save module data

### Perplexity AI

- `POST /api/perplexity/analyze-audience` - Generate market intelligence
- `POST /api/perplexity/analyze-competitors` - Analyze competitor audiences
- `POST /api/perplexity/generate-insights` - Generate comprehensive insights

### Web Search

- `POST /api/web-search/market-research` - Perform market research searches

## Usage Guide

### Getting Started

1. **Set Module Settings**
   - Industry (e.g., "SaaS", "E-commerce")
   - Product/Service name
   - Target location (Country, Region)

2. **Build Customer Personas**
   - Create up to 5 personas
   - Fill in demographics, psychographics, goals, challenges
   - Define buying behavior patterns

3. **Generate AI Insights**
   - Use the "Generate Intelligence" button in Market Intelligence section
   - AI analyzes your industry and location to provide real data
   - All insights include proper citations

4. **Research Pain Points**
   - Add pain points and categorize by urgency/importance
   - Score frequency and impact
   - Identify market gaps

5. **Complete All Sections**
   - Work through each section systematically
   - Track completion percentage in header
   - All data auto-saves on blur

### AI Features

#### Perplexity Integration

Each AI-powered section includes:
- Real-time market data
- Demographic statistics
- Industry trends
- Competitive analysis
- Proper citations with URLs

**Rate Limiting:**
- Max 1 Perplexity call per section
- Automatic retry with exponential backoff
- Error handling with fallback

**Citation Format:**
```typescript
{
  source: "Statista",
  url: "https://...",
  publisher: "statista.com",
  date: "2024-01-15",
  quote: "Relevant statistic or quote"
}
```

### Location Awareness

All sections support geographic targeting:
- Market Intelligence analyzes specific regions
- Competitive Analysis filters by location
- Segmentation considers local market size
- Insights summary includes regional trends

## Component Architecture

```
src/
├── app/
│   ├── api/
│   │   ├── module/progress/          # Save/load module data
│   │   ├── perplexity/               # AI endpoints
│   │   └── web-search/               # Web search endpoints
│   ├── module/audience-research/     # Main module page
│   └── layout.tsx
├── components/
│   ├── sections/                     # 8 module sections
│   │   ├── PersonaBuilder.tsx
│   │   ├── MarketIntelligence.tsx
│   │   ├── WebSearchResearch.tsx
│   │   ├── PainPointsMatrix.tsx
│   │   ├── JobsToBeDone.tsx
│   │   ├── AudienceSegmentation.tsx
│   │   ├── CompetitiveAnalysis.tsx
│   │   └── InsightsSummary.tsx
│   └── ui/                          # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Badge.tsx
│       └── Loading.tsx
├── lib/
│   ├── db.ts                        # Prisma client
│   ├── perplexity.ts               # Perplexity API service
│   ├── web-search.ts               # Web search service
│   └── utils.ts                    # Utilities
├── hooks/
│   └── useAutoSave.ts              # Auto-save hook
├── types/
│   └── module.ts                   # TypeScript types
└── prisma/
    └── schema.prisma               # Database schema
```

## Auto-Save Functionality

The module implements intelligent auto-save:

```typescript
// Debounced save with 2-second delay
useAutoSave({
  data: moduleData,
  onSave: saveModuleData,
  delay: 2000,
  enabled: true
});
```

**Features:**
- Saves on blur (when you leave a field)
- Debounced to prevent excessive API calls
- Visual feedback (saving/saved indicator)
- Last saved timestamp

## Customization

### Adding New Sections

1. Create component in `src/components/sections/`
2. Define types in `src/types/module.ts`
3. Add to `Module2Data` interface
4. Register in `SECTIONS` array in main page
5. Add navigation button

### Extending AI Features

To add more Perplexity queries:

1. Add method to `perplexityService` in `src/lib/perplexity.ts`
2. Create API route in `src/app/api/perplexity/`
3. Call from section component

### Custom Styling

The module uses Tailwind CSS with custom theme:

```javascript
// tailwind.config.js
colors: {
  primary: '#180D23',
  highlight: '#98BBEC',
  accent: '#FFA9F9',
}
```

## Troubleshooting

### Database Connection Issues

```bash
# Check PostgreSQL is running
pg_isready

# Test connection
psma db push
```

### Perplexity API Errors

- **401 Unauthorized**: Check your API key in `.env`
- **429 Rate Limited**: Wait before retrying (built-in exponential backoff)
- **500 Server Error**: Check API status at status.perplexity.ai

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Regenerate Prisma client
npm run prisma:generate
```

## Performance Optimization

- Debounced auto-save (2s delay)
- Optimistic UI updates
- Lazy loading for sections
- Indexed database queries
- Cached Perplexity responses (15 min)

## Security Considerations

- API keys stored in environment variables
- Server-side API calls only (Perplexity key never exposed)
- Input sanitization
- CORS configuration
- Rate limiting on API routes

## Future Enhancements

- [ ] Export to PDF/CSV
- [ ] Persona comparison view
- [ ] Visual charts and graphs
- [ ] Template personas library
- [ ] Collaboration features
- [ ] Version history
- [ ] AI-powered persona suggestions
- [ ] Integration with CRM platforms

## Support

For issues or questions:
1. Check this documentation
2. Review code comments
3. Check TypeScript types for data structures
4. Open an issue on GitHub

## License

MIT License - See LICENSE file for details

---

Built with ❤️ using Next.js, Prisma, Perplexity AI, and Tailwind CSS
