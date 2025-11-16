# Brandora AI Automation Library

**Complete library of AI prompts, automation workflows, and integration templates for Brandora users and internal team.**

---

## 📚 Table of Contents

1. [User AI Prompts](#user-ai-prompts) - 200+ prompts for brand strategy
2. [Workflow Automations](#workflow-automations) - 30+ automation workflows
3. [Integration Templates](#integration-templates) - 25+ integration examples
4. [Prompt Engineering Guides](#prompt-engineering-guides) - Master AI for brand work
5. [Custom GPTs](#custom-gpts) - 10 specialized AI assistants
6. [Power User Guide](#power-user-guide) - Advanced techniques and shortcuts

---

## 🎯 User AI Prompts (200+ Prompts)

### Brand Strategy (50 prompts)

#### Vision & Mission
**[vision-mission-prompts.md](user-prompts/brand-strategy/vision-mission-prompts.md)**

25 prompts for vision statements:
- Vision analysis and refinement
- Vision generation and validation
- Gap analysis and alignment testing

25 prompts for mission statements:
- Mission generation and refinement
- Authenticity checks and validation
- Operational alignment

**Quick Start**:
```
"Generate 5 compelling vision statement variations for a [industry]
company serving [audience] that values [core values]."
```

#### Values & Purpose
**[values-purpose-prompts.md](user-prompts/brand-strategy/values-purpose-prompts.md)**

25 prompts for core values:
- Values discovery and identification
- Values definition and articulation
- Values validation and testing

25 prompts for brand purpose:
- Purpose discovery and refinement
- Purpose application across business
- Purpose-values alignment

**Quick Start**:
```
"Help me identify core values that align with our vision: [vision]
and our target audience: [audience description]"
```

### Audience Research (50 prompts)

#### Persona Development
**[persona-prompts.md](user-prompts/audience-research/persona-prompts.md)**

25 prompts covering:
- Complete persona creation
- B2B vs B2C personas
- Psychographic deep dives
- Jobs-to-be-done personas
- Persona validation and testing
- Buying triggers and objections
- Multi-persona segmentation

**Quick Start**:
```
"Create a detailed customer persona for [product] targeting [demographic]
who struggles with [pain point]"
```

#### Market Research
**[market-research-prompts.md](user-prompts/audience-research/market-research-prompts.md)**

25 prompts covering:
- Market sizing (TAM, SAM, SOM)
- Industry analysis (Porter's Five Forces)
- Customer demographics and behavior
- Demand drivers and trends
- Competitive landscape
- Market opportunities

**Quick Start**:
```
"Analyze the [industry] market in [region] including market size,
growth trends, and key players"
```

### Positioning (50 prompts)

#### Competitive Analysis
**[competitive-analysis-prompts.md](user-prompts/positioning/competitive-analysis-prompts.md)**

25 prompts covering:
- Competitive landscape mapping
- SWOT analysis by competitor
- Feature comparison matrices
- Win/loss analysis
- Competitive intelligence gathering
- Strategic positioning
- White space identification

**Quick Start**:
```
"Analyze [competitor]'s positioning and identify weaknesses we can exploit"
```

#### Value Proposition
**[value-proposition-prompts.md](user-prompts/positioning/value-proposition-prompts.md)**

25 prompts covering:
- Value proposition creation
- Problem-solution-outcome formats
- Audience-specific variations
- Differentiation strategies
- Value quantification (ROI)
- Clarity testing
- A/B test variations

**Quick Start**:
```
"Generate value propositions for [product] solving [problem] for [audience],
emphasizing [unique approach]"
```

### Implementation (50 prompts)

#### Content Strategy
**[content-strategy-prompts.md](user-prompts/implementation/content-strategy-prompts.md)**

25 prompts covering:
- Blog post idea generation
- Content calendar creation
- Content pillar strategy
- SEO and keyword mapping
- Content formats and distribution
- Performance optimization

**Quick Start**:
```
"Generate 20 blog post ideas for [industry] brand targeting [audience]
focused on [topic area]"
```

#### Marketing Tactics
**[marketing-tactics-prompts.md](user-prompts/implementation/marketing-tactics-prompts.md)**

25 prompts covering:
- Campaign planning and launch
- Channel strategy
- Ad copy variations
- Email sequences
- Social media campaigns
- Conversion optimization
- Analytics and attribution

**Quick Start**:
```
"Create a launch plan for [product] targeting [audience] with
a budget of [amount]"
```

---

## ⚙️ Workflow Automations (30+ Workflows)

### User Onboarding
**[onboarding-automation.md](workflow-automations/onboarding-automation.md)**

**Workflows**:
1. New user signup → Welcome sequence
2. Assessment completed → AI insights + upgrade campaign
3. Payment received → Account setup + onboarding
4. Trial started → 14-day nurture sequence
5. Milestone reached → Celebration + next steps
6. Onboarding abandoned → Re-engagement

**Example**:
```
Trigger: User completes assessment
Actions:
- Calculate scores via Perplexity AI
- Send results email (Brevo)
- Update CRM (HubSpot)
- Add to upgrade campaign
- Notify sales team (Slack)
```

### Customer Success
**[customer-success-automation.md](workflow-automations/customer-success-automation.md)**

**Workflows**:
7. Module completed → Progress tracking + encouragement
8. 30 days inactive → Re-engagement campaign
9. All modules complete → PDF delivery + testimonial request
10. Health score low → CSM intervention
11. Feature adoption → Power user identification
12. Upgrade opportunity → Personalized offer

**Example**:
```
Trigger: 30 days no activity
Actions:
- Send re-engagement email
- Survey for blockers
- Offer support call
- Tag for CSM outreach
```

### Content, Sales, Support & Analytics
**[content-sales-support-analytics-automation.md](workflow-automations/content-sales-support-analytics-automation.md)**

**Content** (13-14):
- New blog post → Social sharing + email
- Webinar registration → Reminder sequence

**Sales** (15-17):
- Pricing page visits → Sales alerts
- Cart abandonment → Recovery sequence
- SQL identified → Deal creation

**Support** (18-19):
- Ticket created → Auto-categorize + assign
- Feature request → Roadmap + acknowledgment

**Analytics** (20-22):
- Daily metrics compilation
- Weekly growth analysis
- Funnel drop alerts

---

## 🔌 Integration Templates (25+ Integrations)

### Zapier Workflows
**[zapier-integrations.md](integration-templates/zapier-integrations.md)**

**Available Integrations**:
1. **Brandora → Notion**: User database sync
2. **Brandora → Slack**: Notifications (signups, revenue, support)
3. **Brandora → Google Sheets**: Assessment logging, metrics
4. **Brandora → Mailchimp**: Contact sync + segmentation
5. **Brandora → HubSpot**: CRM sync + lead scoring
6. **Brandora → Airtable**: Product roadmap voting
7. **Brandora → Google Calendar**: QBR scheduling
8. **Brandora → Typeform**: Feedback surveys
9. **Brandora → Data Warehouse**: Event logging

**Example Setup**:
```yaml
Name: New User → Notion
Trigger: Webhook from Brandora
Action: Create Database Item in Notion
Fields:
  Name: {{user.name}}
  Email: {{user.email}}
  Plan: {{user.plan_tier}}
  Score: {{assessment.score}}
```

### API Integration Examples
**[api-integration-examples.md](integration-templates/api-integration-examples.md)**

**Production-Ready Code**:

1. **Stripe** - Payment processing
   - Create subscriptions
   - Handle webhooks
   - Manage billing

2. **Supabase** - Database & Auth
   - User authentication
   - Database operations
   - Real-time subscriptions
   - File storage

3. **Brevo (SendinBlue)** - Email
   - Transactional emails
   - Contact management
   - Campaigns

4. **Perplexity AI** - Research
   - Brand insights generation
   - Market research
   - Competitive intelligence

5. **Analytics** - Mixpanel/Amplitude
   - Event tracking
   - User properties
   - Revenue tracking

6. **Slack** - Notifications
   - Team alerts
   - Formatted messages
   - Interactive blocks

**Example Code**:
```javascript
// Send transactional email via Brevo
await sendTransactionalEmail(
  { email: 'user@example.com', name: 'John' },
  templateId: 1,
  {
    firstName: 'John',
    assessmentScore: 75,
    dashboardUrl: 'https://app.brandora.com'
  }
);
```

---

## 📖 Prompt Engineering Guides

### Perplexity & Brand Strategy Guide
**[perplexity-brand-strategy-guide.md](prompt-engineering/perplexity-brand-strategy-guide.md)**

**Topics Covered**:

**Perplexity AI**:
- Why use Perplexity for brand work
- Prompt structure and best practices
- Market research templates
- Competitive analysis templates
- Industry trends templates
- Customer research templates
- Pricing research templates

**Claude/ChatGPT**:
- When to use each AI tool
- Vision/mission development
- Persona creation
- Positioning strategies
- Content generation
- Advanced techniques (chain-of-thought, few-shot learning)

**Temperature Settings**:
- Factual work: 0.2-0.5
- Creative work: 0.7-0.9
- Balanced: 0.5-0.7

**Common Mistakes to Avoid**:
- Vague prompts
- No context
- Missing constraints
- Wrong format
- Single-shot for complex tasks

**Example Template**:
```
Research the [specific market] for [specific segment] in [geography]:

1. Market size and growth (cite recent sources)
2. Top trends (last 12-24 months)
3. Key players and positioning
4. Customer behavior insights
5. Pricing benchmarks

Focus on data from 2023-2024. Cite all sources.
```

---

## 🤖 Custom GPTs (10 Specialized Assistants)

**[brandora-specialized-gpts.md](custom-gpts/brandora-specialized-gpts.md)**

### Available Custom GPTs

1. **Brandora Brand Strategist**
   - Expert on Brandora methodology
   - Guides through all modules
   - Strategic recommendations

2. **Brandora Content Creator**
   - Brand-aligned content generation
   - All formats (blog, social, email)
   - Maintains voice consistency

3. **Brandora Research Assistant**
   - Market research
   - Competitive analysis
   - Data-driven insights

4. **Brandora Copywriter**
   - Conversion-focused copy
   - Multiple variations
   - Psychological triggers

5. **Brandora Positioning Expert**
   - Strategic positioning
   - Differentiation strategies
   - Competitive maps

6. **Brandora Messaging GPT**
   - Messaging frameworks
   - Message hierarchies
   - Audience variations

7. **Brandora SEO Strategist**
   - Keyword research
   - Content optimization
   - Topic clusters

8. **Brandora Social Media Manager**
   - Platform-specific content
   - Engagement strategies
   - Content calendars

9. **Brandora Email Marketer**
   - Email sequences
   - Subject line optimization
   - Segmentation

10. **Brandora Analytics Interpreter**
    - Metrics explanation
    - Pattern identification
    - Actionable recommendations

### Setup Instructions

1. Create new GPT in ChatGPT
2. Copy instructions from templates
3. Add your brand context
4. Upload brand documents
5. Test and iterate

**Example Custom Instructions**:
```
You are a Brandora Brand Strategist specialized in helping
[industry] companies build powerful brands.

Context:
- Brand: [Your brand]
- Industry: [Your industry]
- Audience: [Your target]
- Voice: [Your voice]

Follow the Brandora methodology:
1. Strategic foundation
2. Market understanding
3. Differentiation
4. Implementation

Always:
- Ask clarifying questions
- Provide specific recommendations
- Include next steps
- Challenge weak answers
```

---

## ⚡ Power User Guide

**[advanced-techniques.md](power-user-guide/advanced-techniques.md)**

### 50+ Advanced Techniques

**Data Export & Integration**:
1. Export as JSON for custom integrations
2. CSV export for CRM import
3. Markdown for documentation
4. Custom branded PDFs
5. API access for automation

**Productivity Hacks**:
6. Keyboard shortcuts
7. Bulk operations
8. Template reuse
9. Quick client assessments
10. Collaboration workflows

**Customization**:
11. Custom color palettes
12. White-label PDF exports
13. Custom domains
14. Branded email templates
15. Custom terminology

**Automation Recipes**:
16. Auto-save to Notion
17. Weekly progress emails
18. Slack team integration
19. Auto-generate social posts
20. Competitor monitoring

**Advanced AI**:
21. Multi-model comparison
22. Prompt chaining
23. Role-playing for testing
24. Synthetic user research
25. AI-powered monitoring

**Pro Tips**:
26. Assessment benchmarking
27. Collaborative workshops
28. A/B testing framework
29. Brand audit mode
30. Design tool integration

### Power User Workflows

**Agency Workflow** (4 hours total):
```
1. Client Assessment (15 min)
2. Initial Strategy (2 hrs)
3. Client Review (30 min)
4. Refinement (1 hr)
5. Final Delivery (15 min)
```

**Startup Workflow** (4 weeks):
```
Week 1: Foundation
Week 2: Strategy
Week 3: Content
Week 4: Launch
```

**Rebrand Workflow**:
```
1. Audit Current Brand
2. Research & Insights
3. Strategy Development
4. Transition Plan
```

---

## 🚀 Quick Start Guides

### For Users

**Build Your Brand in 4 Weeks**:

**Week 1 - Foundation**:
1. Complete brand assessment (30 min)
2. Review results and insights
3. Define vision using [vision prompts](user-prompts/brand-strategy/vision-mission-prompts.md)
4. Define mission and values using [values prompts](user-prompts/brand-strategy/values-purpose-prompts.md)

**Week 2 - Audience & Market**:
1. Create customer personas using [persona prompts](user-prompts/audience-research/persona-prompts.md)
2. Conduct market research using [market prompts](user-prompts/audience-research/market-research-prompts.md)
3. Analyze competitors using [competitive prompts](user-prompts/positioning/competitive-analysis-prompts.md)

**Week 3 - Positioning & Messaging**:
1. Develop positioning using [positioning prompts](user-prompts/positioning/value-proposition-prompts.md)
2. Create value propositions
3. Build messaging framework
4. Define visual identity

**Week 4 - Implementation**:
1. Create content strategy using [content prompts](user-prompts/implementation/content-strategy-prompts.md)
2. Plan marketing tactics using [marketing prompts](user-prompts/implementation/marketing-tactics-prompts.md)
3. Export complete brand strategy
4. Train team and launch

### For Internal Team

**Setup Automations**:
1. Configure webhook endpoints
2. Setup Brevo/email automation
3. Connect Stripe for payments
4. Configure Slack notifications
5. Setup analytics tracking
6. Create Zapier workflows
7. Test end-to-end
8. Monitor and optimize

**Use Prompt Engineering Guide**:
1. Review [Perplexity guide](prompt-engineering/perplexity-brand-strategy-guide.md)
2. Setup custom GPTs from [templates](custom-gpts/brandora-specialized-gpts.md)
3. Train team on best practices
4. Build internal prompt library

---

## 📊 Success Metrics

### User Metrics
- Time to complete brand strategy: **4 weeks → 1 week**
- Assessment completion rate: **Target 70%+**
- Module completion rate: **Target 80%+**
- User satisfaction (NPS): **Target 50+**

### Automation Metrics
- Email open rate: **Target 40%+**
- Email click rate: **Target 10%+**
- Trial conversion: **Target 25%+**
- Onboarding completion: **Target 60%+**

### Prompt Effectiveness
- Time savings per task: **50-80%**
- Output quality: **4.5/5 average**
- Revision rounds needed: **2 → 0.5**

---

## 🤝 Contributing

We welcome contributions to this library!

**How to Contribute**:
1. Identify gap or improvement
2. Create new prompt template
3. Test with real users
4. Submit PR with documentation
5. Include examples and use cases

**What to Contribute**:
- New prompt templates
- Workflow automations
- Integration examples
- Best practices
- Case studies
- Tips and tricks

---

## 📞 Support

**Questions?**
- Email: support@brandora.com
- Slack: brandora-community.slack.com
- Docs: docs.brandora.com

**Report Issues**:
- GitHub: github.com/brandora/ai-automation
- Email: bugs@brandora.com

**Feature Requests**:
- Product Board: brandora.com/roadmap
- Email: product@brandora.com

---

## 📄 License

This automation library is proprietary to Brandora.

**Internal Use**: Freely available to Brandora team
**Customer Use**: Included with Brandora subscription
**External Use**: Contact licensing@brandora.com

---

## 🎯 Next Steps

**For Users**:
1. [Browse prompts by category](#user-ai-prompts)
2. [Setup custom GPT for your brand](#custom-gpts)
3. [Learn prompt engineering best practices](#prompt-engineering-guides)
4. [Explore power user features](#power-user-guide)

**For Team**:
1. [Review automation workflows](#workflow-automations)
2. [Setup integrations](#integration-templates)
3. [Configure webhooks and APIs](#api-integration-examples)
4. [Monitor and optimize](#monitoring-and-optimization)

---

**Last Updated**: 2024
**Version**: 1.0.0
**Maintained By**: Brandora Product Team

---

**🚀 Start building better brands with AI automation!**
