# Prompt Engineering Guide for Brandora

## Perplexity AI - Brand Strategy & Research

### Why Perplexity for Brand Work?

**Strengths**:
- Real-time web search and current data
- Cited sources with dates
- Market research with actual numbers
- Competitive intelligence
- Industry trends and news
- Up-to-date statistics

**Best Uses**:
- Market size and growth data
- Competitor analysis
- Industry trends
- Customer research
- Pricing benchmarks
- Technology trends

### Perplexity Prompt Structure

```
[CONTEXT] + [SPECIFIC REQUEST] + [OUTPUT FORMAT] + [CONSTRAINTS]
```

### Example: Market Research

**Poor Prompt**:
```
Tell me about the SaaS market
```

**Good Prompt**:
```
Research the B2B SaaS market for small businesses (1-50 employees) in North America:

1. Market size and growth rate (last 3 years + projections)
2. Top 5 trends shaping the market
3. Average customer acquisition costs
4. Typical pricing models and ranges
5. Key pain points cited by SMB buyers

Please cite recent sources (2023-2024) and include publication dates.
```

**Why it's better**:
- Specific niche (B2B SaaS for SMBs)
- Clear geographic scope
- Structured output (5 points)
- Time requirement (recent data)
- Citation requirement

---

## Perplexity Prompt Templates

### Template 1: Competitive Analysis

```
Conduct a competitive analysis of [COMPETITOR] in the [INDUSTRY] space:

Company Overview:
- Business model and revenue streams
- Target market and customers
- Key products/services
- Recent funding or financial news (if available)

Market Position:
- Estimated market share
- Positioning and differentiation
- Pricing strategy
- Customer reviews sentiment

Recent Activity (last 12 months):
- Product launches
- Partnerships or acquisitions
- Leadership changes
- Marketing campaigns

Strengths and Weaknesses:
- What they do well
- Where they're vulnerable
- Customer complaints (from reviews)

Please cite all sources with publication dates.
```

### Template 2: Industry Trends

```
What are the most significant trends in [INDUSTRY] for 2024-2025?

For each trend, provide:
1. Description and impact
2. Evidence/data supporting the trend
3. Companies leading this trend
4. Implications for [YOUR BUSINESS TYPE]
5. Timeline (emerging, growing, or mature)

Focus on trends that would affect [SPECIFIC MARKET SEGMENT].
Include sources and dates for all data.
```

### Template 3: Customer Research

```
Research the buying behavior and preferences of [TARGET CUSTOMER] when purchasing [PRODUCT CATEGORY]:

Demographics:
- Size and characteristics of this market segment
- Geographic concentration
- Income/budget ranges

Purchase Behavior:
- How they research and evaluate options
- Decision criteria and priorities
- Average sales cycle length
- Influencers and information sources

Pain Points:
- Common frustrations with current solutions
- Unmet needs
- Deal-breakers and must-haves

Recent Surveys or Studies:
- Customer satisfaction data
- Market research findings
- Behavioral studies

Cite specific reports, surveys, and publication dates.
```

### Template 4: Pricing Research

```
Research pricing for [PRODUCT/SERVICE CATEGORY] in [MARKET]:

Pricing Ranges:
- Low-end providers and their pricing
- Mid-market pricing
- Premium/enterprise pricing
- What drives pricing differences

Pricing Models:
- Common models (subscription, one-time, usage-based)
- Typical contract terms
- Free trial or freemium prevalence
- Add-on or upsell strategies

Market Data:
- Average deal size
- Price sensitivity indicators
- Recent pricing trends (increasing/decreasing)

Include specific company examples and recent data (2023-2024).
```

### Template 5: Technology Trends

```
What emerging technologies are impacting [INDUSTRY]?

For each technology:
1. Description and current adoption level
2. Use cases in [INDUSTRY]
3. Companies implementing it successfully
4. Cost and accessibility
5. Expected timeline to mainstream adoption
6. Potential risks or challenges

Focus on technologies with practical applications for [BUSINESS SIZE/TYPE].
Cite recent articles, reports, and expert opinions.
```

---

## Best Practices for Perplexity

### 1. Be Specific

❌ "What's the market size?"
✅ "What's the market size for project management software for remote teams in the US, including growth rate 2020-2024?"

### 2. Request Citations

Always add:
```
Please cite all sources with publication dates. Prefer data from the last 12-24 months.
```

### 3. Structure Your Output

```
Provide the analysis in this format:
1. [Section name]
2. [Section name]
3. [Section name]

For each section, include relevant data and sources.
```

### 4. Specify Timeframes

```
Focus on data from [TIME PERIOD]
Include historical context from [EARLIER PERIOD]
Project trends for [FUTURE PERIOD]
```

### 5. Define Scope

```
Geographic: [North America / Global / Specific country]
Market segment: [SMB / Enterprise / Consumer]
Industry vertical: [SaaS / E-commerce / Healthcare]
```

---

## Claude/ChatGPT - Brand Strategy Development

### When to Use Claude vs Perplexity

**Use Perplexity for**:
- Current market data
- Competitor research
- Industry statistics
- News and trends
- Cited information

**Use Claude/ChatGPT for**:
- Strategy development
- Creative ideation
- Content creation
- Analysis and synthesis
- Refinement and iteration

### Prompt Engineering for Brand Strategy

#### 1. Vision Statement Development

```
I'm developing a vision statement for my company. Here's the context:

Company: [NAME]
Industry: [INDUSTRY]
What we do: [DESCRIPTION]
Who we serve: [TARGET AUDIENCE]
Our unique approach: [DIFFERENTIATOR]
Long-term aspiration: [WHAT WE WANT TO ACHIEVE]

Values we hold: [VALUES]
Market position goal: [WHERE WE WANT TO BE]

Create 5 vision statement options that are:
- Inspirational and aspirational
- Clear and specific
- Under 25 words
- Memorable
- Differentiated from generic corporate speak

For each option, explain the strategic choice and emphasis.
```

#### 2. Persona Development

```
Create a detailed customer persona based on this information:

Product: [PRODUCT DESCRIPTION]
Target market: [MARKET DESCRIPTION]
Problems solved: [PAIN POINTS]
Price point: $[PRICE]

Include:
1. Demographics (age, location, income, education, role)
2. Psychographics (values, attitudes, lifestyle)
3. Goals and motivations
4. Pain points and frustrations
5. Day-in-the-life scenario
6. Buying behavior and decision process
7. Objections and concerns
8. Preferred channels and content
9. Success definition (what they want to achieve)

Make this persona specific and realistic - give them a name, quote, and personality.
```

#### 3. Positioning Statement

```
Help me craft a positioning statement. Here's what you need to know:

Target customer: [SPECIFIC CUSTOMER DESCRIPTION]
Category: [MARKET CATEGORY]
Key benefit: [PRIMARY BENEFIT]
Reason to believe: [PROOF/DIFFERENTIATOR]

Competitors position themselves as:
- Competitor A: [THEIR POSITIONING]
- Competitor B: [THEIR POSITIONING]
- Competitor C: [THEIR POSITIONING]

Create 3-5 positioning statement options using this framework:
"For [target customer] who [need/want], [brand] is the [category] that [benefit] unlike [competitors] because [reason to believe]."

For each option, analyze:
- Differentiation strength
- Clarity and memorability
- Customer appeal
- Defensibility
```

---

## Content Generation Best Practices

### Blog Post Outlines

```
Create a comprehensive outline for a blog post:

Title: [WORKING TITLE]
Target keyword: [SEO KEYWORD]
Audience: [READER DESCRIPTION]
Goal: [EDUCATE / PERSUADE / ENTERTAIN]
Tone: [PROFESSIONAL / CASUAL / TECHNICAL]

The outline should include:
1. Compelling title options (3-5)
2. Introduction hook (2-3 options)
3. Main sections (H2s) with key points
4. Subsections (H3s) where appropriate
5. Key takeaways for each section
6. Examples or case studies to include
7. Conclusion and CTA

Target length: [WORD COUNT]
Make it actionable and specific.
```

### Social Media Content

```
Create [NUMBER] social media posts for [PLATFORM]:

Topic: [TOPIC]
Goal: [AWARENESS / ENGAGEMENT / TRAFFIC / LEADS]
Brand voice: [VOICE CHARACTERISTICS]
Target audience: [AUDIENCE]
Key message: [CORE MESSAGE]
CTA: [DESIRED ACTION]

For each post, provide:
- Hook/opening line
- Main content (appropriate length for platform)
- Hashtags (3-5 relevant)
- Visual suggestion
- Best posting time

Variety: Mix educational, entertaining, and promotional angles.
```

---

## Advanced Techniques

### Chain of Thought Prompting

Instead of:
```
Create a content strategy for my SaaS company.
```

Use:
```
Let's develop a content strategy step by step:

1. First, analyze my target audience:
   - Who: B2B project managers at mid-size companies
   - Pain points: Team coordination, deadline tracking
   - Current solutions: Spreadsheets, email
   - Decision factors: Ease of use, team collaboration features

2. Based on this audience, what content topics would resonate?

3. For each topic, what formats would work best?

4. How should we organize this into a content calendar?

5. What metrics should we track?

Walk through each step systematically.
```

### Few-Shot Learning

Provide examples of what you want:

```
I need value propositions in this style:

Example 1: "Enterprise security without enterprise complexity"
Example 2: "Powerful analytics that everyone can understand"
Example 3: "Professional design in minutes, not days"

Now create 5 similar value propositions for:
[YOUR PRODUCT/SERVICE DESCRIPTION]

Match the style: [benefit] without [common obstacle]
```

### Iterative Refinement

```
I'm refining a value proposition. Current version:
"[CURRENT VERSION]"

Feedback: [SPECIFIC ISSUES]

Please:
1. Identify specific weaknesses in the current version
2. Suggest 3 refined alternatives that address these issues
3. For each alternative, explain the strategic reasoning
4. Recommend which to test and why
```

---

## Temperature and Parameter Settings

### For Factual/Analytical Work (Temperature: 0.2-0.5)

- Competitive analysis
- Data interpretation
- Strategic frameworks
- Structured planning

### For Creative Work (Temperature: 0.7-0.9)

- Brainstorming
- Creative concepts
- Content ideas
- Brand naming

### For Balanced Work (Temperature: 0.5-0.7)

- Copywriting
- Strategy development
- Persona creation
- Value propositions

---

## Common Mistakes to Avoid

### 1. Vague Prompts

❌ "Help with my brand"
✅ "Help me develop a brand positioning statement for a B2B SaaS project management tool targeting teams of 10-50 people in the tech industry"

### 2. No Context

❌ "Write a blog post about productivity"
✅ "Write a blog post about productivity for remote software development teams, targeting engineering managers, in a practical and actionable tone"

### 3. Open-Ended Without Boundaries

❌ "Give me marketing ideas"
✅ "Give me 10 low-cost content marketing ideas for a bootstrapped SaaS startup with a $500/month budget"

### 4. Not Specifying Format

❌ "Explain brand positioning"
✅ "Explain brand positioning in a step-by-step framework that I can use to develop my own positioning statement, with examples"

### 5. Single-Shot for Complex Tasks

❌ One prompt: "Create my entire brand strategy"
✅ Series: Vision → Audience → Positioning → Messaging → Visual identity

---

## Prompt Library Quick Reference

**Market Research**: "Research [specific market aspect] for [specific segment] in [geography], focusing on [timeframe]. Include [specific data points]. Cite sources."

**Competitive Analysis**: "Analyze [competitor] in [industry], covering [specific aspects]. Compare to [our approach]. Include recent activity from [timeframe]."

**Persona Development**: "Create detailed persona for [product] targeting [audience] with [characteristics]. Include demographics, psychographics, goals, pains, buying behavior."

**Value Proposition**: "Generate value propositions for [product] solving [problem] for [audience], emphasizing [differentiator]. Provide 5 variations using different frameworks."

**Content Strategy**: "Develop content strategy for [business] targeting [audience] with goals of [objectives]. Include topics, formats, channels, frequency, and metrics."

**Positioning**: "Create positioning statement for [brand] targeting [audience] in [category] with [benefit] because [proof]. Differentiate from [competitors]."

---

## Testing and Iteration

### A/B Test Your Prompts

Try variations and compare results:

**Version A**: Simple, direct
**Version B**: Detailed with examples
**Version C**: Step-by-step with constraints

Document which produces better results for different tasks.

### Build a Prompt Library

Save successful prompts with:
- Use case
- Best model for this prompt
- Typical output quality
- Refinement notes
- Examples of good results

### Iterate Based on Output

1. Run initial prompt
2. Evaluate output
3. Identify gaps or issues
4. Refine prompt with specific feedback
5. Re-run and compare
6. Repeat until satisfied

This is the foundation of excellent AI-assisted brand strategy work. Master these techniques and you'll 10x your productivity while maintaining quality.
