# Brandora Metrics Framework

## Executive Summary

This document defines Brandora's comprehensive metrics framework, establishing the foundational KPIs that will drive decision-making across all levels of the organization. The framework follows a tiered approach: North Star Metric → Primary KPIs → Secondary KPIs, ensuring alignment while providing depth for different stakeholder needs.

---

## 1. North Star Metric

### Definition: **Active Brand Builders**

**Formula:** Count of unique users who complete at least 1 brand module AND either export 1 PDF or share 1 deliverable within a 30-day period.

**Rationale:**
- Captures actual value delivery (not just vanity metrics)
- Indicates product-market fit
- Correlates with revenue and retention
- Aligns team around user success
- Measures both engagement and output

**Target Trajectory:**
- Q1 2025: 500 Active Brand Builders
- Q2 2025: 1,500 Active Brand Builders
- Q3 2025: 3,500 Active Brand Builders
- Q4 2025: 7,000 Active Brand Builders

**Why This Metric Matters:**
Unlike DAU/MAU or signup counts, Active Brand Builders measures users who are genuinely deriving value from Brandora. A user who completes modules and exports deliverables is building their brand in reality, not just browsing.

---

## 2. Primary KPIs (Strategic Metrics)

### 2.1 Growth Metrics

#### **Weekly Signups**
- **Definition:** New user accounts created per week
- **Target:** 15% WoW growth
- **Reporting:** Daily monitoring, weekly review
- **Owner:** Growth Team
- **Alert Threshold:** <5% WoW growth for 2 consecutive weeks

#### **Activation Rate**
- **Definition:** % of signups who complete onboarding AND start first module within 7 days
- **Target:** 60% within 7 days
- **Formula:** (Users who start first module within 7 days / Total signups) × 100
- **Owner:** Product Team
- **Alert Threshold:** <50% for any weekly cohort

### 2.2 Engagement Metrics

#### **Module Completion Rate**
- **Definition:** % of started modules that are completed
- **Target:** 75% overall completion rate
- **Breakdown by Module:**
  - High-priority modules (Brand Purpose, Visual Identity): 80%+
  - Standard modules: 70%+
  - Advanced modules: 65%+
- **Owner:** Product Team

#### **Weekly Active Users (WAU)**
- **Definition:** Unique users with meaningful activity in past 7 days
- **Meaningful Activity:** Login + (module progress OR assessment interaction OR export)
- **Target:** 40% of total user base
- **Owner:** Product Team

### 2.3 Revenue Metrics

#### **Monthly Recurring Revenue (MRR)**
- **Definition:** Normalized monthly recurring revenue from all active subscriptions
- **Target:** $50K MRR by Q2 2025, $200K MRR by Q4 2025
- **Breakdown:**
  - Foundation Tier: 40-50% of MRR
  - Complete Tier: 30-40% of MRR
  - Professional Tier: 15-25% of MRR
- **Owner:** Revenue Team

#### **Conversion Rate (Free → Paid)**
- **Definition:** % of free users who convert to any paid tier within 30 days
- **Target:** 8% overall
  - Trial users: 15%
  - Assessment completers: 12%
  - Module starters: 10%
  - Casual browsers: 2%
- **Owner:** Growth & Product Teams

#### **Net Revenue Retention (NRR)**
- **Definition:** (Starting MRR + Expansion - Churn - Contraction) / Starting MRR
- **Target:** 110%+ (indicating net positive growth from existing customers)
- **Owner:** Customer Success Team
- **Best-in-class Benchmark:** 120%+

### 2.4 Retention Metrics

#### **Churn Rate (Monthly)**
- **Definition:** % of customers who cancel in a given month
- **Target:** <5% monthly churn (by tier)
  - Foundation: <7%
  - Complete: <4%
  - Professional: <3%
- **Owner:** Customer Success Team
- **Alert Threshold:** >7% for any tier

---

## 3. Secondary KPIs (Tactical Metrics)

### 3.1 Acquisition Metrics

1. **Traffic Sources (Monthly Visitors)**
   - Organic search: 40%+
   - Direct: 20%+
   - Social: 15%+
   - Paid: 10%+
   - Referral: 10%+
   - Other: 5%

2. **Landing Page Conversion Rate**
   - Homepage → Signup: 8%+
   - Assessment landing → Start: 25%+
   - Pricing page → Checkout: 12%+

3. **Cost Per Acquisition (CPA)**
   - Organic: $5-10
   - Paid social: $20-40
   - Paid search: $30-50
   - Content marketing: $15-25
   - Target blended CPA: $25

4. **Signup Quality Score**
   - Formula: Weighted score based on:
     - Email domain quality (40%)
     - Profile completion (30%)
     - First-week activity (30%)
   - Target: 70+ average score

5. **Time to Signup**
   - First visit → Account creation
   - Target: 60% within first session, 80% within 3 days

### 3.2 Engagement Metrics

6. **Daily Active Users (DAU)**
   - Target: 15-20% of total user base
   - Peak days: Tuesday-Thursday

7. **Session Duration**
   - Target: 25+ minutes average
   - Quality sessions (>15 min with progress): 60%+

8. **Pages Per Session**
   - Target: 8+ pages
   - Module pages: 50%+ of pageviews

9. **Feature Adoption Rate**
   - Assessment tool: 70% of signups
   - Brand modules: 50% of signups
   - PDF exports: 30% of active users
   - Team collaboration: 15% of paid users

10. **Return Visitor Rate**
    - 7-day return rate: 40%+
    - 30-day return rate: 60%+

### 3.3 Product Metrics

11. **Time to First Value**
    - Assessment completion: <30 minutes
    - First module started: <24 hours after signup
    - First export: <7 days after signup

12. **Stickiness (DAU/MAU)**
    - Target: 30%+ (indicates high engagement)
    - Best-in-class SaaS: 40%+

13. **Feature Usage Distribution**
    - Monitor top 10 features
    - Identify underused features for improvement/sunsetting
    - Target: 80/20 rule (80% usage in 20% of features is acceptable)

14. **Error Rate**
    - Target: <0.5% of sessions encounter errors
    - Critical errors: <0.1%

15. **Load Time (P95)**
    - Homepage: <2 seconds
    - Module pages: <3 seconds
    - Assessment: <2.5 seconds

### 3.4 Monetization Metrics

16. **Average Revenue Per User (ARPU)**
    - Target: $25/month (blended)
    - By tier tracking

17. **Lifetime Value (LTV)**
    - Calculation: ARPU × Average Customer Lifespan / Churn Rate
    - Target: $600+ overall
    - By tier and cohort tracking

18. **LTV:CAC Ratio**
    - Target: 3:1 minimum, 5:1 ideal
    - Alert if drops below 2:1

19. **Payback Period**
    - Target: <12 months
    - Ideal: <6 months

20. **Expansion Revenue**
    - % of MRR from upgrades/add-ons
    - Target: 20% of new MRR from existing customers

### 3.5 Customer Success Metrics

21. **Customer Health Score**
    - Composite score (0-100) based on:
      - Login frequency (25%)
      - Feature usage (25%)
      - Module completion (20%)
      - Support interactions (15%)
      - NPS score (15%)
    - Target: 70+ average

22. **Net Promoter Score (NPS)**
    - Target: 50+ (world-class)
    - Quarterly surveys
    - Track by tier and cohort

23. **Customer Satisfaction (CSAT)**
    - Post-support interaction survey
    - Target: 90%+ satisfied/very satisfied

24. **Support Ticket Volume**
    - Target: <5% of active users submit tickets monthly
    - Decreasing trend over time as product matures

25. **First Response Time**
    - Target: <4 hours during business hours
    - <12 hours overall

---

## 4. Vanity Metrics to Avoid

### Metrics That Look Good But Don't Drive Value

1. **Total Registered Users**
   - **Why Avoid:** Counts inactive accounts; doesn't indicate health
   - **Use Instead:** Active users, activated users

2. **Raw Pageviews**
   - **Why Avoid:** Can be inflated by confusion or poor UX
   - **Use Instead:** Meaningful sessions, goal completions

3. **Social Media Followers**
   - **Why Avoid:** Doesn't correlate with conversions
   - **Use Instead:** Social traffic → signup conversion

4. **Email List Size**
   - **Why Avoid:** Bloated lists with low engagement
   - **Use Instead:** Email engagement rate, email → conversion

5. **App Downloads (if applicable)**
   - **Why Avoid:** Downloads ≠ usage
   - **Use Instead:** Activated users, retained users

6. **Time on Site (in isolation)**
   - **Why Avoid:** Long times may indicate confusion
   - **Use Instead:** Time on site + goal completion

7. **Number of Features**
   - **Why Avoid:** More features ≠ more value
   - **Use Instead:** Feature adoption, feature retention impact

8. **Total Revenue (without context)**
   - **Why Avoid:** Doesn't show sustainability
   - **Use Instead:** MRR, ARR, revenue growth rate, NRR

---

## 5. Leading vs Lagging Indicators

### Understanding the Relationship

**Leading Indicators** = Predictive metrics that signal future performance
**Lagging Indicators** = Historical metrics that confirm what happened

### Leading Indicators

| Metric | Predicts | Action Window |
|--------|----------|---------------|
| **Activation Rate (7-day)** | Future retention & conversion | 7 days to intervene |
| **Weekly Active Users trend** | Next month's engagement | 2-4 weeks to intervene |
| **Feature adoption rate** | Stickiness & retention | 30 days to drive adoption |
| **NPS score** | Churn risk & expansion | 60-90 days to address |
| **Support ticket sentiment** | Churn risk | 14-30 days to rescue |
| **Trial engagement** | Trial → Paid conversion | 7-14 days to convert |
| **Session frequency (first 14 days)** | Long-term retention | 14 days to build habit |
| **Assessment completion rate** | Product engagement | 3-7 days to encourage |

### Lagging Indicators

| Metric | What It Confirms | Review Cadence |
|--------|------------------|----------------|
| **MRR/ARR** | Revenue performance | Monthly |
| **Churn rate** | Customer satisfaction | Monthly |
| **LTV** | Long-term value delivery | Quarterly |
| **Market share** | Competitive position | Quarterly |
| **Annual revenue** | Business health | Yearly |
| **Customer acquisition** | Growth effectiveness | Monthly |
| **Net Revenue Retention** | Customer value growth | Quarterly |

### Using Both Together

**Example: Improving Retention**

1. **Monitor Leading Indicators:**
   - Declining WAU/MAU ratio → Engagement dropping
   - Lower NPS scores → Satisfaction issues
   - Decreased feature usage → Value realization problem

2. **Take Action:**
   - Launch re-engagement campaign
   - Fix product issues
   - Improve onboarding

3. **Confirm with Lagging Indicators:**
   - Churn rate decreases next month
   - NRR improves next quarter
   - LTV increases over time

**Example: Accelerating Growth**

1. **Monitor Leading Indicators:**
   - Signup velocity increasing
   - Activation rate improving
   - Trial engagement up

2. **Take Action:**
   - Scale successful acquisition channels
   - Optimize high-performing funnels
   - Invest in winning content

3. **Confirm with Lagging Indicators:**
   - MRR growth rate increases
   - Customer base expands
   - Market share grows

---

## 6. Metric Ownership & Accountability

### Organizational Alignment

| Metric | Primary Owner | Secondary Owner | Review Frequency |
|--------|---------------|-----------------|------------------|
| **North Star Metric** | CEO | All Leadership | Weekly |
| **MRR/ARR** | CFO/Revenue | CEO | Weekly |
| **Activation Rate** | Product Lead | Growth Lead | Daily |
| **WAU/DAU** | Product Lead | Engineering | Daily |
| **Conversion Rate** | Growth Lead | Product Lead | Daily |
| **Churn Rate** | CS Lead | Product Lead | Weekly |
| **NRR** | CS Lead | Revenue | Monthly |
| **CAC** | Marketing Lead | CFO | Weekly |
| **LTV** | CFO | CS Lead | Monthly |
| **Feature Adoption** | Product Lead | Engineering | Weekly |
| **NPS** | CS Lead | Product Lead | Quarterly |
| **Support Metrics** | CS Lead | Operations | Weekly |

---

## 7. Metrics Reporting Cadence

### Daily Metrics (Automated Dashboard)
- Signups (yesterday, WTD, vs. last week)
- Active users (DAU, WAU trend)
- MRR (current, change from yesterday)
- Conversion events
- System health (uptime, errors)

### Weekly Metrics (Monday Morning Report)
- All Primary KPIs with WoW changes
- Top 10 Secondary KPIs
- Notable wins/losses
- Funnel performance
- Cohort updates

### Monthly Metrics (Business Review)
- Full Primary & Secondary KPI review
- Cohort analysis deep dive
- Channel performance
- Product feature analysis
- Financial metrics
- Strategic recommendations

### Quarterly Metrics (QBR)
- North Star Metric progress
- OKR achievement
- LTV, NRR, annual metrics
- Competitive positioning
- Strategic pivots
- Next quarter planning

---

## 8. Metric Calculation Methodologies

### Standardized Definitions

#### Active User Calculations

**Daily Active User (DAU):**
```
Unique user IDs with ≥1 meaningful action on date D
Meaningful actions: login + (module_view OR module_edit OR assessment_action OR export_pdf)
```

**Weekly Active User (WAU):**
```
Unique user IDs with ≥1 meaningful action in rolling 7-day window ending on date D
```

**Monthly Active User (MAU):**
```
Unique user IDs with ≥1 meaningful action in rolling 30-day window ending on date D
```

#### Revenue Calculations

**MRR (Monthly Recurring Revenue):**
```
Sum of:
- Monthly subscriptions: Full price
- Annual subscriptions: (Annual price / 12)
- Quarterly subscriptions: (Quarterly price / 3)

Exclude: One-time fees, add-ons (unless recurring)
```

**ARR (Annual Recurring Revenue):**
```
MRR × 12
```

**Net Revenue Retention (NRR):**
```
NRR = ((Starting MRR + Expansion MRR - Churned MRR - Contraction MRR) / Starting MRR) × 100

Measured over 12-month period for annual NRR
Can be calculated monthly for trending
```

#### Churn Calculations

**Logo Churn (Customer Churn):**
```
(Customers lost in period / Customers at start of period) × 100
```

**Revenue Churn (MRR Churn):**
```
(MRR lost in period / MRR at start of period) × 100
```

**Net Churn:**
```
((MRR lost - MRR expansion) / Starting MRR) × 100

Negative net churn is ideal (expansion > churn)
```

#### Conversion Rate Calculations

**Overall Conversion Rate:**
```
(Conversions / Total visitors) × 100
```

**Cohort Conversion Rate:**
```
Track specific cohorts (e.g., "signed up in Jan 2025")
Measure conversion at 7, 14, 30, 60, 90 days
```

**Funnel Step Conversion:**
```
(Users completing step N+1 / Users completing step N) × 100
```

---

## 9. Benchmarking & Targets

### Industry Benchmarks (SaaS B2B)

| Metric | Good | Great | World-Class | Brandora Target |
|--------|------|-------|-------------|-----------------|
| **Free → Paid Conversion** | 2-5% | 5-10% | 10-15% | 8% |
| **Trial → Paid Conversion** | 10-15% | 15-25% | 25%+ | 15% |
| **Monthly Churn** | <7% | <5% | <3% | <5% |
| **NRR** | 100%+ | 110%+ | 120%+ | 110% |
| **LTV:CAC** | 3:1 | 4:1 | 5:1+ | 4:1 |
| **Payback Period** | <18mo | <12mo | <6mo | <12mo |
| **NPS** | 30+ | 50+ | 70+ | 50+ |
| **DAU/MAU** | 15-20% | 25-30% | 35%+ | 30% |
| **Activation Rate** | 30-40% | 50-60% | 70%+ | 60% |

### Setting Realistic Targets

**Year 1 Targets (2025):**
- Focus on learning and establishing baselines
- Aim for "Good" benchmarks across the board
- Prioritize 2-3 metrics for "Great" performance

**Year 2 Targets (2026):**
- Move majority of metrics to "Great"
- Achieve "World-Class" in 1-2 key differentiators
- Scale while maintaining quality

**Year 3 Targets (2027):**
- Sustain "World-Class" across primary KPIs
- Establish Brandora as benchmark for the industry
- Focus on efficiency and profitability metrics

---

## 10. Metrics Dashboard Access & Permissions

### Dashboard Hierarchy

**Level 1: Executive Dashboard**
- **Access:** CEO, Founders, Board
- **Metrics:** North Star + Primary KPIs only
- **Update Frequency:** Real-time
- **Format:** Single-page summary

**Level 2: Leadership Dashboard**
- **Access:** All department heads
- **Metrics:** Primary + relevant Secondary KPIs
- **Update Frequency:** Real-time
- **Format:** Multi-tab departmental views

**Level 3: Team Dashboards**
- **Access:** All team members
- **Metrics:** Role-specific deep dives
- **Update Frequency:** Real-time
- **Format:** Customizable per team

**Level 4: Public Metrics**
- **Access:** All employees
- **Metrics:** Selected transparency metrics
- **Update Frequency:** Weekly
- **Format:** Company all-hands presentation

---

## 11. Metrics Review & Iteration

### Quarterly Metrics Review Process

**Week 1 of Quarter:**
1. Review previous quarter's metric performance
2. Assess if metrics still align with strategy
3. Identify new metrics needed
4. Sunset metrics that aren't actionable

**Evaluation Criteria:**
- ✅ Is this metric actionable?
- ✅ Does it drive decision-making?
- ✅ Can we reliably measure it?
- ✅ Does it align with current strategy?
- ✅ Is the target still relevant?

**Change Management:**
- Document why metrics are added/removed
- Maintain historical data even for sunset metrics
- Communicate changes across organization

---

## Appendix A: Metrics Glossary

**Activation:** User completes onboarding and demonstrates initial value realization

**Churn:** Customer cancels subscription or does not renew

**Cohort:** Group of users who share a common characteristic (e.g., signup month)

**Conversion:** User completes a desired action (e.g., free → paid)

**DAU/MAU:** Ratio indicating user stickiness and engagement

**Expansion Revenue:** Additional revenue from existing customers (upgrades, add-ons)

**Lagging Indicator:** Metric that confirms past performance

**Leading Indicator:** Metric that predicts future performance

**LTV (Lifetime Value):** Total revenue expected from a customer over their lifetime

**MAU (Monthly Active User):** Unique user with activity in past 30 days

**MRR (Monthly Recurring Revenue):** Normalized monthly subscription revenue

**NPS (Net Promoter Score):** Customer loyalty metric (-100 to +100)

**NRR (Net Revenue Retention):** Revenue retention including expansion and churn

**Stickiness:** Frequency of user engagement (DAU/MAU ratio)

**Vanity Metric:** Metric that looks impressive but doesn't drive decisions

**WAU (Weekly Active User):** Unique user with activity in past 7 days

---

## Document Control

**Version:** 1.0
**Last Updated:** November 2024
**Owner:** Chief Product Officer
**Review Cadence:** Quarterly
**Next Review:** February 2025

---

*This metrics framework is a living document and will evolve as Brandora grows and market conditions change.*
