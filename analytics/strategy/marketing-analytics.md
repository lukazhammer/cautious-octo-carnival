# Marketing Analytics Strategy

## Executive Summary

This document defines how we measure marketing performance, optimize channels, and drive efficient customer acquisition. Marketing analytics at Brandora focuses on attribution, channel performance, campaign ROI, and full-funnel optimization.

---

## 1. Channel Performance

### Overview of Marketing Channels

Brandora's marketing mix across paid, owned, and earned media:

**Paid Channels:**
- Google Ads (Search & Display)
- Social Media Ads (LinkedIn, Facebook, Instagram)
- Retargeting/Remarketing
- Sponsorships & Partnerships

**Owned Channels:**
- Organic Search (SEO)
- Blog Content
- Email Marketing
- Social Media (Organic)
- Product (referrals, in-product)

**Earned Channels:**
- PR & Media Coverage
- User Reviews & Testimonials
- Word of Mouth
- Community & Forums

### Channel Performance Metrics

#### **Primary Channel Metrics**

| Channel | Traffic | Signups | Conversion Rate | CAC | LTV:CAC | MRR |
|---------|---------|---------|-----------------|-----|---------|-----|
| **Organic Search** | 20K/mo | 1,200 | 6% | $15 | 40:1 | $18K |
| **Paid Search** | 5K/mo | 300 | 6% | $50 | 12:1 | $6K |
| **Content/Blog** | 15K/mo | 900 | 6% | $10 | 60:1 | $14K |
| **Social Organic** | 8K/mo | 400 | 5% | $5 | 120:1 | $6K |
| **Social Paid** | 6K/mo | 360 | 6% | $40 | 15:1 | $7K |
| **Email** | 3K/mo | 600 | 20% | $5 | 120:1 | $12K |
| **Referral** | 4K/mo | 720 | 18% | $8 | 75:1 | $14K |
| **Direct** | 10K/mo | 1,000 | 10% | $0 | ∞ | $20K |
| **Other** | 2K/mo | 120 | 6% | $25 | 24:1 | $2K |

**Total:** 73K visits/mo, 5,600 signups/mo, $99K MRR

### Channel Quality Metrics

Beyond volume, measure quality:

| Channel | Activation Rate | 30d Retention | Trial→Paid | Avg LTV | Quality Score |
|---------|-----------------|---------------|------------|---------|---------------|
| **Referral** | 75% | 65% | 18% | $750 | A+ |
| **Email** | 72% | 60% | 16% | $680 | A |
| **Organic Search** | 65% | 55% | 12% | $600 | A |
| **Direct** | 68% | 58% | 14% | $640 | A |
| **Content** | 62% | 52% | 11% | $580 | B+ |
| **Social Organic** | 58% | 48% | 10% | $520 | B |
| **Paid Search** | 55% | 45% | 9% | $480 | B |
| **Social Paid** | 52% | 42% | 8% | $450 | B- |

**Quality Score Formula:**
```
(Activation × 30%) + (Retention × 30%) + (Conversion × 20%) + (LTV × 20%)
```

**Insight:** Referral and Email have highest quality despite lower volume

**Strategy:** Invest in quality channels, optimize paid channels for better quality

### Channel Attribution

**Attribution Models Used:**

1. **First-Touch:** Credit to first channel (awareness)
2. **Last-Touch:** Credit to converting channel (conversion)
3. **Linear:** Equal credit across all touches
4. **Time-Decay:** More credit to recent touches
5. **Position-Based:** 40% first, 40% last, 20% middle
6. **Data-Driven (Custom):** ML-based attribution

**Primary Model:** Position-Based (40-20-40)
- 40% to first touch (awareness)
- 20% distributed to middle touches
- 40% to last touch (conversion)

**Attribution Window:** 90 days

### Channel Optimization

**Monthly Channel Review:**

**For Each Channel, Analyze:**
1. **Volume:** Traffic, signups trending
2. **Efficiency:** CAC, conversion rate
3. **Quality:** Activation, LTV
4. **ROI:** LTV:CAC ratio
5. **Trends:** MoM growth, seasonality

**Optimization Decisions:**
- ✅ **Scale:** LTV:CAC > 5:1, quality score A/B+
- 🔄 **Optimize:** LTV:CAC 3-5:1, room for improvement
- 🔍 **Test:** New channel, small budget
- ⏸️ **Pause:** LTV:CAC < 2:1, quality issues

---

## 2. Campaign ROI

### Campaign Structure

**Campaign Hierarchy:**
```
Channel (e.g., Paid Search)
  ↳ Campaign (e.g., Brand Awareness Q1)
    ↳ Ad Group (e.g., Brand Strategy Keywords)
      ↳ Creative (e.g., Ad Variant A)
```

### Campaign Performance Metrics

#### **Core Campaign Metrics**

**For Every Campaign, Track:**

| Metric | Formula | Target | Purpose |
|--------|---------|--------|---------|
| **Impressions** | Ad views | Varies | Reach |
| **Clicks** | Ad clicks | Varies | Interest |
| **CTR** | Clicks / Impressions | 3-5% | Ad relevance |
| **CPC** | Cost / Clicks | <$2 | Efficiency |
| **Conversions** | Goal completions | Varies | Effectiveness |
| **Conversion Rate** | Conversions / Clicks | 8-12% | Landing page quality |
| **CPA** | Cost / Conversions | <$30 | Acquisition efficiency |
| **ROAS** | Revenue / Ad Spend | 5:1+ | Return on ad spend |
| **ROI** | (Revenue - Cost) / Cost | 400%+ | Profitability |

### Campaign ROI Calculation

**Basic ROI:**
```
ROI = (Revenue - Cost) / Cost × 100%

Example:
- Ad Spend: $5,000
- New MRR: $8,000
- Annual Value: $96,000
- Short-term ROI: (8,000 - 5,000) / 5,000 = 60%
- Long-term ROI (12mo): (96,000 - 5,000) / 5,000 = 1,820%
```

**Full-Funnel ROI:**
```
1. Campaign Cost: $5,000
2. Signups: 200
3. Activated (60%): 120
4. Paid Conversions (10%): 12
5. Average Plan: $50/mo
6. MRR: $600
7. LTV (avg 24mo): $1,200/customer
8. Total LTV: $14,400
9. ROI: (14,400 - 5,000) / 5,000 = 188%
```

### Campaign Types & Benchmarks

#### **1. Brand Awareness Campaigns**

**Goal:** Increase brand visibility and reach

**Key Metrics:**
- Impressions: 100K+
- Reach: 50K+ unique
- Brand search lift: +20%
- CPM: <$15

**ROI Timeline:** 3-6 months (indirect)

**Example Campaigns:**
- Display ads on industry sites
- Social media brand campaigns
- Podcast sponsorships
- PR/media outreach

#### **2. Lead Generation Campaigns**

**Goal:** Drive signups and email captures

**Key Metrics:**
- Signups: 500+
- Conversion rate: 10%+
- CPA: <$25
- Activation rate: 65%+

**ROI Timeline:** 30-60 days

**Example Campaigns:**
- "Free Brand Assessment" ads
- Gated content (eBooks, templates)
- Webinar registrations
- Newsletter signups

#### **3. Direct Response Campaigns**

**Goal:** Drive immediate purchases

**Key Metrics:**
- Purchases: 50+
- Conversion rate: 2-4%
- CPA: <$100
- ROAS: 3:1+

**ROI Timeline:** Immediate

**Example Campaigns:**
- "Start Trial" ads
- Limited-time offers
- Retargeting campaigns
- "Upgrade Now" promotions

#### **4. Retention/Expansion Campaigns**

**Goal:** Keep customers, drive upgrades

**Key Metrics:**
- Engagement lift: +15%
- Upgrade rate: 10%+
- Churn reduction: -20%
- NRR impact: +5%

**ROI Timeline:** 30 days

**Example Campaigns:**
- Feature announcement emails
- Upgrade incentives
- Re-engagement sequences
- Customer success content

### Campaign Testing Framework

**A/B Test Every Campaign Element:**

1. **Audience:** Demographics, interests, lookalikes
2. **Creative:** Headlines, images, copy, CTAs
3. **Offer:** Pricing, trial length, incentives
4. **Landing Page:** Layout, copy, form fields
5. **Timing:** Day of week, time of day, seasonality

**Test Methodology:**
- **Sample Size:** Statistical significance (95% confidence)
- **Test Duration:** Minimum 7 days or 100 conversions
- **Winner Declaration:** >10% improvement, statistically significant
- **Iteration:** Test → Learn → Optimize → Repeat

**Example A/B Test:**

**Test:** Ad Creative - Headline Variation

**Variant A:** "Build a Powerful Brand Strategy in Days"
- CTR: 3.2%
- Conversion: 8%
- CPA: $32

**Variant B:** "From Brand Confusion to Brand Clarity"
- CTR: 4.1%
- Conversion: 11%
- CPA: $24

**Result:** B wins (+28% CTR, +38% conversion, -25% CPA)

**Action:** Make B the new control, test new variations

---

## 3. Customer Acquisition Cost (CAC)

### CAC Definition & Calculation

**CAC Formula:**
```
CAC = Total Sales & Marketing Costs / New Customers Acquired

Costs Include:
- Ad spend
- Marketing tools/software
- Content production
- Team salaries (sales & marketing)
- Agency/contractor fees
- Events/sponsorships
```

**CAC Variants:**

1. **Paid CAC:** Only paid acquisition costs
2. **Blended CAC:** All marketing costs (paid + organic)
3. **Fully-Loaded CAC:** All sales & marketing costs including overhead

### Brandora CAC Targets

**Blended CAC Target:** $30 per customer

**By Channel:**
- Organic: $10-15
- Referral: $5-10
- Email: $5
- Content: $15-20
- Social Paid: $30-50
- Search Paid: $40-60
- Events: $100-150

**By Tier (Paid CAC acceptable):**
- Free→Foundation ($15/mo): $20-30
- Free→Complete ($45/mo): $60-90
- Free→Professional ($90/mo): $120-180

### CAC Efficiency Metrics

#### **LTV:CAC Ratio**

**Formula:** Lifetime Value / Customer Acquisition Cost

**Benchmarks:**
- <1:1 = Unsustainable (losing money)
- 1:1 to 2:1 = Poor (barely profitable)
- 3:1 = Good (healthy SaaS)
- 4:1 = Great (efficient growth)
- 5:1+ = Excellent (scale aggressively)
- >10:1 = Underinvesting (grow faster)

**Brandora Target:** 4:1 overall
- Organic channels: 40-60:1
- Paid channels: 4-8:1
- Blended: 4-5:1

#### **CAC Payback Period**

**Definition:** Time to recoup customer acquisition cost

**Formula:** CAC / (MRR per customer × Gross Margin %)

**Example:**
- CAC: $60
- MRR: $30
- Gross Margin: 80%
- Payback: $60 / ($30 × 0.80) = 2.5 months

**Targets:**
- <6 months: Excellent
- 6-12 months: Good
- 12-18 months: Acceptable
- >18 months: Concerning

**Brandora Target:** <12 months blended

### CAC Trends & Monitoring

**Monthly CAC Review:**

| Month | Blended CAC | Paid CAC | LTV:CAC | Payback | Trend |
|-------|-------------|----------|---------|---------|-------|
| **Jan** | $28 | $45 | 4.2:1 | 11mo | ↗ Baseline |
| **Feb** | $32 | $48 | 3.9:1 | 13mo | ↗ +14% |
| **Mar** | $30 | $46 | 4.1:1 | 12mo | ↘ -6% |
| **Apr** | $27 | $43 | 4.6:1 | 10mo | ↘ -10% |

**Alert Triggers:**
- 🔴 CAC increases >20% MoM
- 🔴 LTV:CAC drops below 3:1
- 🔴 Payback period >15 months
- 🟡 CAC increases >10% MoM
- 🟢 CAC decreasing, LTV:CAC improving

### CAC Optimization Strategies

**1. Improve Conversion Rates**
- Higher conversion = Lower CAC
- 10% → 12% conversion = 17% CAC reduction

**2. Increase Organic Mix**
- Organic CAC 50% lower than paid
- Invest in SEO, content, community

**3. Optimize Paid Channels**
- Pause underperforming campaigns
- Scale winning campaigns
- Continuous A/B testing

**4. Improve Activation & Retention**
- Lower churn = Higher LTV = Better LTV:CAC
- 5% churn → 4% churn = 25% LTV improvement

**5. Referral Programs**
- Lowest CAC channel
- Scale through incentives
- Viral loops

---

## 4. Lifetime Value (LTV)

### LTV Definition & Calculation

**Simple LTV:**
```
LTV = ARPU × Customer Lifetime (months)

Example:
- ARPU: $35/month
- Avg Lifetime: 18 months
- LTV: $35 × 18 = $630
```

**Advanced LTV (with churn):**
```
LTV = ARPU / Monthly Churn Rate × Gross Margin %

Example:
- ARPU: $35
- Monthly Churn: 5%
- Gross Margin: 80%
- LTV: $35 / 0.05 × 0.80 = $560
```

**Cohort-Based LTV:**
```
Track actual revenue per cohort over time
More accurate than formulaic approach
Adjust for expansion/contraction
```

### LTV by Segment

**By Tier:**

| Tier | ARPU | Churn | Lifetime | LTV | % of Customers |
|------|------|-------|----------|-----|----------------|
| **Foundation** | $15 | 7% | 14mo | $168 | 50% |
| **Complete** | $45 | 4% | 25mo | $900 | 35% |
| **Professional** | $90 | 3% | 33mo | $2,376 | 15% |
| **Blended** | $35 | 5% | 20mo | $560 | 100% |

**By Acquisition Channel:**

| Channel | ARPU | Retention | LTV | vs Avg |
|---------|------|-----------|-----|--------|
| **Referral** | $38 | High | $750 | +34% |
| **Organic Search** | $36 | High | $680 | +21% |
| **Direct** | $40 | High | $720 | +29% |
| **Email** | $35 | Medium | $600 | +7% |
| **Paid Search** | $32 | Medium | $520 | -7% |
| **Social Paid** | $30 | Lower | $450 | -20% |

**By User Behavior:**

| Behavior | LTV | vs Baseline |
|----------|-----|-------------|
| **Activated in 24h** | $800 | +43% |
| **Completed 3+ modules** | $900 | +61% |
| **Exported PDF** | $750 | +34% |
| **Team collaboration** | $1,200 | +114% |
| **Annual billing** | $840 | +50% |
| **Baseline (avg user)** | $560 | -- |

### LTV Optimization

**High-Impact LTV Drivers:**

1. **Reduce Churn (-1% churn = +25% LTV)**
   - Improve onboarding
   - Proactive customer success
   - Product quality

2. **Increase ARPU (+$5 ARPU = +14% LTV)**
   - Upsell/cross-sell
   - Value-based pricing
   - Feature expansion

3. **Drive Annual Plans (+50% LTV)**
   - Discount incentives (2 months free)
   - Payment plan options
   - Commitment campaigns

4. **Expansion Revenue**
   - Seat expansion (teams)
   - Feature upgrades
   - Add-on services

5. **Customer Success**
   - Onboarding programs
   - Training & education
   - Regular check-ins

### LTV Forecasting

**Cohort LTV Projection:**

| Cohort | Month 3 | Month 6 | Month 12 | Projected LTV |
|--------|---------|---------|----------|---------------|
| **Jan 2025** | $105 | $210 | $420 | $630 |
| **Feb 2025** | $120 | $240 | $480 | $720 |
| **Mar 2025** | $135 | TBD | TBD | $810 (projected) |

**Target:** +15% LTV improvement per cohort through retention and expansion

---

## 5. Content Marketing Analytics

### Content Performance Metrics

**Blog Content:**

| Metric | Formula | Target | Purpose |
|--------|---------|--------|---------|
| **Traffic** | Unique pageviews | 20K/mo | Reach |
| **Engagement** | Avg time on page | 3+ min | Quality |
| **Scroll Depth** | % scroll to end | 50%+ | Readability |
| **Bounce Rate** | Single-page sessions | <60% | Relevance |
| **CTR** | Clicks on CTAs | 5%+ | Conversion |
| **Signups** | From blog | 900/mo | Effectiveness |
| **SEO Value** | Organic traffic | 15K/mo | Discoverability |

**Top Performing Content Types:**

1. **How-To Guides** (35% of traffic)
   - Avg time: 4.5 min
   - Conversion rate: 8%
   - Example: "How to Build a Brand Strategy"

2. **Templates & Resources** (25% of traffic)
   - Avg time: 2 min
   - Conversion rate: 15% (gated)
   - Example: "Brand Positioning Template"

3. **Case Studies** (15% of traffic)
   - Avg time: 3.5 min
   - Conversion rate: 12%
   - Example: "How Acme Rebranded in 30 Days"

4. **Industry Insights** (15% of traffic)
   - Avg time: 3 min
   - Conversion rate: 6%
   - Example: "State of Branding 2025"

5. **Opinion/Thought Leadership** (10% of traffic)
   - Avg time: 2.5 min
   - Conversion rate: 4%
   - Example: "Why Most Brands Fail"

### SEO Analytics

**Keyword Performance:**

| Keyword Category | Monthly Searches | Ranking | Traffic | Conversion | Priority |
|------------------|------------------|---------|---------|------------|----------|
| **Brand Strategy** | 12K | #3 | 3,600 | 8% | High |
| **Brand Guidelines** | 8K | #5 | 1,600 | 10% | High |
| **Visual Identity** | 6K | #8 | 900 | 7% | Medium |
| **Brand Assessment** | 2K | #2 | 800 | 15% | High |
| **Brandora (brand)** | 1K | #1 | 1,000 | 25% | Monitor |

**SEO Targets:**
- Total organic traffic: 20K/month
- Top 3 rankings: 15 keywords
- Top 10 rankings: 50 keywords
- Domain authority: 40+ (Moz)
- Quality backlinks: 500+

**SEO ROI:**
- Organic CAC: $10-15
- LTV:CAC: 40-60:1
- Payback: <2 months
- **ROI:** 5,000%+

### Email Marketing Analytics

**Email Performance Benchmarks:**

| Email Type | Send Volume | Open Rate | Click Rate | Conversion | Unsubscribe |
|------------|-------------|-----------|------------|------------|-------------|
| **Welcome Series** | 5K/mo | 65% | 25% | 15% | 0.5% |
| **Onboarding** | 5K/mo | 55% | 20% | 12% | 0.8% |
| **Newsletter** | 20K/mo | 35% | 8% | 3% | 0.3% |
| **Product Updates** | 20K/mo | 45% | 12% | 5% | 0.4% |
| **Re-engagement** | 3K/mo | 25% | 15% | 8% | 2% |
| **Promotional** | 8K/mo | 40% | 18% | 10% | 1% |

**Email List Growth:**
- New subscribers: 2K/month
- Unsubscribes: 300/month
- Net growth: 1,700/month
- Total list size: 50K
- Engaged subscribers (90d): 30K

**Email ROI:**
- Cost (tools + design): $500/month
- Revenue attributed: $12K MRR = $144K/year
- ROI: 28,700%

### Social Media Analytics

**Platform Performance:**

| Platform | Followers | Engagement Rate | Traffic | Signups | CAC |
|----------|-----------|-----------------|---------|---------|-----|
| **LinkedIn** | 8K | 4.5% | 3K/mo | 180 | $8 |
| **Twitter** | 5K | 2.8% | 2K/mo | 100 | $10 |
| **Instagram** | 4K | 3.2% | 1.5K/mo | 75 | $12 |
| **Facebook** | 3K | 2.1% | 1K/mo | 50 | $15 |
| **YouTube** | 2K | 5.0% | 500/mo | 30 | $20 |

**Content Performance:**

**Best Performing Post Types:**
1. **Tips & How-Tos:** 5% engagement
2. **User Success Stories:** 4.5% engagement
3. **Behind-the-Scenes:** 3.8% engagement
4. **Industry News:** 3.2% engagement
5. **Product Updates:** 2.8% engagement

**Social Media ROI:**
- Organic social CAC: $5-15
- Paid social CAC: $30-50
- Time investment: 20 hrs/week
- Total cost: $3K/month (tools + team)
- Revenue: $6K MRR attributed
- ROI: 2,300%

---

## 6. Paid Advertising Analytics

### Google Ads Performance

**Campaign Structure:**

**1. Brand Campaigns**
- Keywords: Brandora, Brandora login, etc.
- CTR: 15%+
- CPC: $0.50
- Conversion: 25%
- CPA: $8
- Purpose: Protect brand, capture high-intent

**2. Competitor Campaigns**
- Keywords: [Competitor] alternative, vs [Competitor]
- CTR: 8%
- CPC: $3
- Conversion: 12%
- CPA: $45
- Purpose: Capture comparison shoppers

**3. Category Campaigns**
- Keywords: Brand strategy tool, branding software
- CTR: 5%
- CPC: $4
- Conversion: 10%
- CPA: $55
- Purpose: Capture active searchers

**4. Problem/Solution Campaigns**
- Keywords: How to build brand, brand positioning help
- CTR: 4%
- CPC: $2.50
- Conversion: 8%
- CPA: $40
- Purpose: Educational, top-of-funnel

**Overall Google Ads:**
- Monthly spend: $10K
- Clicks: 4,000
- Conversions: 250
- CPA: $40
- MRR: $5K
- ROI: 500%/year

### Facebook/LinkedIn Ads

**Audience Targeting:**

1. **Lookalike Audiences** (best performing)
   - Based on: Paying customers
   - CTR: 4%
   - CPA: $35
   - Conversion: 10%

2. **Interest-Based**
   - Interests: Marketing, branding, design
   - CTR: 2.5%
   - CPA: $50
   - Conversion: 6%

3. **Job Title Targeting**
   - Titles: CMO, Marketing Director, Brand Manager
   - CTR: 3%
   - CPA: $45
   - Conversion: 8%

4. **Retargeting**
   - Audience: Website visitors, engaged users
   - CTR: 6%
   - CPA: $30
   - Conversion: 12%

**Overall Social Ads:**
- Monthly spend: $8K
- Impressions: 2M
- Clicks: 8,000
- Conversions: 200
- CPA: $40
- MRR: $4K
- ROI: 500%/year

### Ad Creative Performance

**Creative Testing:**

**A/B Test Every Quarter:**
1. **Headlines:** 5 variations
2. **Images:** 3 variations
3. **Body Copy:** 3 variations
4. **CTAs:** 3 variations
5. **Landing Pages:** 2 variations

**Total Combinations:** 270 possible (test top 10-15)

**Winning Creative Patterns:**
- Customer testimonials: +25% conversion
- Before/after examples: +30% CTR
- Specific outcomes: +20% conversion
- "Free" in headline: +15% CTR
- Video vs image: +10% engagement

---

## 7. Marketing Dashboard (Summary)

### Executive Marketing Metrics (Weekly)

| Metric | This Week | Last Week | WoW Change | Target | Status |
|--------|-----------|-----------|------------|--------|--------|
| **Traffic** | 18K | 17K | +5.9% | 18K | 🟢 |
| **Signups** | 1,350 | 1,200 | +12.5% | 1,400 | 🟡 |
| **MRR (New)** | $22K | $20K | +10% | $25K | 🟡 |
| **Blended CAC** | $28 | $30 | -6.7% | <$30 | 🟢 |
| **LTV:CAC** | 4.2:1 | 4.0:1 | +5% | >4:1 | 🟢 |
| **Content Traffic** | 15K | 14K | +7.1% | 15K | 🟢 |
| **Email Signups** | 580 | 550 | +5.5% | 600 | 🟡 |
| **Paid ROAS** | 5.2:1 | 4.8:1 | +8.3% | >5:1 | 🟢 |

**Overall Marketing Health:** 🟢 Strong

---

## Document Control

**Version:** 1.0
**Last Updated:** November 2024
**Owner:** Chief Marketing Officer
**Review Cadence:** Weekly
**Next Review:** December 2024

---

*Marketing analytics turns spend into growth. Measure everything, optimize relentlessly.*
