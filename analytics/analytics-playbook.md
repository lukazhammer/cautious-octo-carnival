# Brandora Analytics Playbook

**Version:** 1.0
**Last Updated:** November 2024
**Owner:** Analytics Team

---

## Table of Contents

1. [Introduction](#introduction)
2. [Quick Start Guide](#quick-start-guide)
3. [Analytics Framework](#analytics-framework)
4. [How to Use This Playbook](#how-to-use-this-playbook)
5. [Key Resources](#key-resources)
6. [Team Responsibilities](#team-responsibilities)

---

## Introduction

Welcome to Brandora's Analytics Playbook. This is your comprehensive guide to understanding, implementing, and leveraging analytics to drive data-informed decisions across the organization.

### Purpose

This playbook serves as:
- **Central Reference**: Single source of truth for all analytics practices
- **Onboarding Guide**: Get new team members up to speed quickly
- **Decision Framework**: Guide for making data-driven decisions
- **Best Practices**: Standardized approaches to analytics

### Philosophy

Our analytics approach is built on three pillars:

1. **Data-Informed, Not Data-Driven**: Data informs decisions, but doesn't make them. Context and intuition matter.

2. **North Star Focused**: All analytics ladder up to our North Star Metric: Active Brand Builders.

3. **Action-Oriented**: Every metric should be actionable. If you can't take action on it, don't track it.

---

## Quick Start Guide

### For New Team Members

**Week 1: Learn the Metrics**
- Read: [Metrics Framework](strategy/metrics-framework.md)
- Understand: North Star Metric and Primary KPIs
- Access: Request dashboard access from #analytics-support

**Week 2: Explore Dashboards**
- Review: [Executive Dashboard](dashboards/templates/executive-dashboard.json)
- Find: Your team-specific dashboard
- Learn: How to interpret key charts

**Week 3: Understand Your Role**
- Read: Relevant strategy documents for your function
- Identify: Metrics you own
- Schedule: Weekly metrics review with your manager

**Week 4: Start Contributing**
- Propose: One optimization based on data
- Share: Insights in team meetings
- Experiment: Run your first A/B test (if applicable)

### For Executives

**Daily**
- Review: [Daily Snapshot](reports/templates/daily-snapshot.md) (8:00 AM email)
- Monitor: [Executive Dashboard](https://analytics.brandora.com/executive)
- Check: Critical alerts in #exec-alerts

**Weekly**
- Read: [Weekly Summary](reports/templates/weekly-summary.md) (Monday 7:00 AM)
- Review: In leadership meeting
- Set: Priorities based on data

**Monthly**
- Present: [Monthly Business Review](reports/templates/monthly-review.md)
- Review: With full leadership team
- Plan: Next month based on trends

**Quarterly**
- Prepare: [QBR](reports/templates/quarterly-qbr.md)
- Present: To board
- Set: OKRs for next quarter

---

## Analytics Framework

### Our Metrics Hierarchy

```
North Star Metric: Active Brand Builders
           ↓
    Primary KPIs (7 metrics)
    - Signups, Activation, MRR, WAU, Conversion, Churn, NRR
           ↓
    Secondary KPIs (15 metrics)
    - Channel-specific, feature-specific metrics
           ↓
    Operational Metrics
    - Day-to-day tracking metrics
```

### The Analytics Cycle

```
1. MEASURE → 2. ANALYZE → 3. INSIGHT → 4. ACTION → 5. LEARN → (repeat)
```

1. **Measure**: Track events and behaviors
2. **Analyze**: Look for patterns and trends
3. **Insight**: Understand the "why" behind the data
4. **Action**: Make changes based on insights
5. **Learn**: Measure impact and iterate

---

## How to Use This Playbook

### By Role

#### **Product Managers**
Focus on:
- [Product Analytics Strategy](strategy/product-analytics.md)
- [Product Dashboard](dashboards/templates/product-dashboard.json)
- [Feature Launch Analysis](reports/templates/feature-launch-analysis.md)
- [A/B Test Framework](analysis-frameworks/ab-test-framework.md)

Key Metrics: Activation Rate, Module Completion, Feature Adoption, DAU/MAU

#### **Marketing Team**
Focus on:
- [Marketing Analytics Strategy](strategy/marketing-analytics.md)
- [Marketing Dashboard](dashboards/templates/marketing-dashboard.json)
- [Channel Performance Reports](reports/templates/marketing-performance.md)
- [Campaign Post-Mortems](reports/templates/campaign-postmortem.md)

Key Metrics: CAC, LTV:CAC, Channel Conversion Rates, ROAS

#### **Customer Success**
Focus on:
- [User Journey Analytics](strategy/user-journey-analytics.md)
- [Customer Success Dashboard](dashboards/templates/customer-success-dashboard.json)
- [Churn Investigation](reports/templates/churn-investigation.md)
- [Customer Health Reports](reports/templates/customer-health-report.md)

Key Metrics: Churn Rate, NPS, Health Score, NRR

#### **Finance/Revenue**
Focus on:
- [Revenue Analytics Strategy](strategy/revenue-analytics.md)
- [Financial Dashboard](dashboards/templates/financial-dashboard.json)
- [Revenue Operations Report](reports/templates/revenue-operations.md)

Key Metrics: MRR, ARR, Churn, NRR, LTV, Unit Economics

#### **Leadership**
Focus on:
- [All Strategy Documents](strategy/)
- [Executive Dashboard](dashboards/templates/executive-dashboard.json)
- [QBR Reports](reports/templates/quarterly-qbr.md)
- [Annual Review](reports/templates/annual-review.md)

Key Metrics: North Star Metric, All Primary KPIs

---

## Key Resources

### Strategy Documents

| Document | Purpose | Audience |
|----------|---------|----------|
| [Metrics Framework](strategy/metrics-framework.md) | Define all key metrics | All teams |
| [User Journey Analytics](strategy/user-journey-analytics.md) | Understand user behavior | Product, Marketing, CS |
| [Product Analytics](strategy/product-analytics.md) | Product performance metrics | Product, Engineering |
| [Marketing Analytics](strategy/marketing-analytics.md) | Marketing effectiveness | Marketing, Growth |
| [Revenue Analytics](strategy/revenue-analytics.md) | Financial health metrics | Finance, Leadership |

### Dashboards (15 Total)

**Core Dashboards:**
- [Executive Dashboard](dashboards/templates/executive-dashboard.json) - Leadership overview
- [Product Dashboard](dashboards/templates/product-dashboard.json) - Product metrics
- [Marketing Dashboard](dashboards/templates/marketing-dashboard.json) - Channel performance
- [Sales Dashboard](dashboards/templates/sales-dashboard.json) - Pipeline & conversions
- [Customer Success Dashboard](dashboards/templates/customer-success-dashboard.json) - Customer health

**Specialized Dashboards:**
- [Growth Dashboard](dashboards/templates/growth-dashboard.json)
- [Content Dashboard](dashboards/templates/content-dashboard.json)
- [Acquisition Dashboard](dashboards/templates/acquisition-dashboard.json)
- [Retention Dashboard](dashboards/templates/retention-dashboard.json)
- [Revenue Dashboard](dashboards/templates/revenue-dashboard.json)
- [Financial Dashboard](dashboards/templates/financial-dashboard.json)
- [Support Dashboard](dashboards/templates/support-dashboard.json)
- [Competitive Dashboard](dashboards/templates/competitive-dashboard.json)
- [Experiment Dashboard](dashboards/templates/experiment-dashboard.json)
- [Operations Dashboard](dashboards/templates/operations-dashboard.json)

**Setup:** See [Dashboard Setup Guide](dashboards/dashboard-setup-guide.md)

### Reports (20+ Templates)

**Recurring Reports:**
- Daily: [Daily Snapshot](reports/templates/daily-snapshot.md)
- Weekly: [Weekly Summary](reports/templates/weekly-summary.md), [Product Usage](reports/templates/product-usage-report.md), [Marketing Performance](reports/templates/marketing-performance.md)
- Monthly: [Business Review](reports/templates/monthly-review.md), [Customer Health](reports/templates/customer-health-report.md), [Content Performance](reports/templates/content-performance-report.md)
- Quarterly: [QBR](reports/templates/quarterly-qbr.md)
- Annual: [Annual Review](reports/templates/annual-review.md)

**Ad-Hoc Reports:**
- [Campaign Post-Mortem](reports/templates/campaign-postmortem.md)
- [Feature Launch Analysis](reports/templates/feature-launch-analysis.md)
- [Churn Investigation](reports/templates/churn-investigation.md)
- [Pricing Change Impact](reports/templates/pricing-change-impact.md)
- [A/B Test Results](reports/templates/ab-test-results.md)
- And 15 more...

**Schedule:** See [Reporting Schedule](reports/reporting-schedule.md)

### Implementation Guides

**Getting Started:**
- [Tracking Plan](implementation/tracking-plan.md) - Events & properties to track
- [Google Analytics 4 Setup](implementation/tool-guides/google-analytics-setup.md)
- [Mixpanel Setup](implementation/tool-guides/mixpanel-setup.md)
- [Amplitude Setup](implementation/tool-guides/amplitude-setup.md)
- [Data Governance](implementation/data-governance.md)

### Analysis Frameworks

**Advanced Analysis:**
- [Cohort Analysis](analysis-frameworks/cohort-analysis-templates.md)
- [Funnel Analysis](analysis-frameworks/funnel-analysis-templates.md)
- [A/B Testing Framework](analysis-frameworks/ab-test-framework.md)
- [Predictive Models](analysis-frameworks/predictive-models.md)

### SQL Queries

**Ready-to-Use Queries:**
- [User Metrics Queries](sql-queries/user-metrics.sql)
- [Revenue Queries](sql-queries/revenue-queries.sql)
- [Cohort Queries](sql-queries/cohort-queries.sql)
- [Funnel Queries](sql-queries/funnel-queries.sql)

---

## Team Responsibilities

### Analytics Team

**Responsibilities:**
- Maintain analytics infrastructure
- Generate automated reports
- Provide ad-hoc analysis
- Train team members
- Ensure data quality

**SLAs:**
- Dashboard uptime: 99.9%
- Daily reports: By 8:00 AM
- Ad-hoc requests: 48-hour response
- Data accuracy: >99%

### Product Team

**Owns:**
- Product Dashboard
- Activation Rate
- Module Completion Rate
- Feature Adoption
- Product NPS

**Reviews:**
- Daily: Product Dashboard
- Weekly: Feature adoption trends
- Monthly: Product metrics deep dive

### Marketing Team

**Owns:**
- Marketing Dashboard
- CAC by Channel
- Campaign ROI
- Content Performance
- Email Metrics

**Reviews:**
- Daily: Channel performance
- Weekly: Campaign results
- Monthly: Full marketing review

### Customer Success Team

**Owns:**
- Customer Success Dashboard
- Churn Rate
- Customer Health Scores
- NPS
- Support Metrics

**Reviews:**
- Daily: At-risk customers
- Weekly: Health score trends
- Monthly: Churn analysis

### Finance Team

**Owns:**
- Financial Dashboard
- MRR/ARR
- Revenue Forecasts
- Unit Economics
- Cash Flow

**Reviews:**
- Daily: MRR changes
- Weekly: Revenue trends
- Monthly: Financial performance

---

## Best Practices

### 1. Start with "Why"
Before tracking anything, ask:
- Why do we need this metric?
- What decision will it inform?
- What action will we take based on it?

### 2. Follow the Hierarchy
Always connect metrics to the North Star:
- How does this metric impact Active Brand Builders?
- Is it a leading or lagging indicator?
- What's the causal relationship?

### 3. Be Rigorous
- Use statistical significance for A/B tests
- Consider sample sizes
- Watch for confounding variables
- Correlation ≠ causation

### 4. Communicate Clearly
- Use visualizations
- Tell stories with data
- Provide context
- Recommend actions

### 5. Iterate Constantly
- Review metrics quarterly
- Sunset vanity metrics
- Add new metrics as strategy evolves
- Optimize dashboards based on usage

---

## Common Scenarios

### "I want to run an experiment"
1. Read: [A/B Test Framework](analysis-frameworks/ab-test-framework.md)
2. Define: Hypothesis and success metrics
3. Calculate: Required sample size
4. Run: Test with proper controls
5. Analyze: Statistical significance
6. Document: [A/B Test Results](reports/templates/ab-test-results.md)

### "Churn is increasing"
1. Run: [Churn Investigation](reports/templates/churn-investigation.md)
2. Segment: By tier, cohort, reason
3. Identify: Preventable vs inevitable churn
4. Prioritize: High-value churn prevention
5. Implement: Retention initiatives
6. Measure: Impact on churn rate

### "We're launching a new feature"
1. Define: Success metrics upfront
2. Instrument: Tracking for all events
3. Launch: To limited cohort (if possible)
4. Monitor: Adoption and usage
5. Analyze: [Feature Launch Analysis](reports/templates/feature-launch-analysis.md) at 7, 30, 90 days
6. Iterate: Based on data

### "CAC is too high"
1. Review: [Marketing Dashboard](dashboards/templates/marketing-dashboard.json)
2. Compare: CAC across channels
3. Analyze: Funnel drop-offs
4. Identify: Inefficient channels
5. Optimize: Or pause underperforming channels
6. Test: New approaches
7. Measure: Impact on blended CAC

---

## Getting Help

### Slack Channels
- `#analytics-support` - Technical issues, access requests
- `#analytics-questions` - Interpretation help, methodology questions
- `#analytics-requests` - New dashboards, custom reports
- `#analytics-alerts` - Automated metric alerts

### Office Hours
- **When:** Every Tuesday & Thursday, 2-3 PM
- **Where:** Analytics Team Room / Zoom
- **Who:** Anyone with analytics questions

### Documentation
- **This Playbook:** Your first stop for questions
- **Dashboard Tooltips:** Hover over any metric for definition
- **Metric Glossary:** In [Metrics Framework](strategy/metrics-framework.md)

---

## Appendix

### Metric Definitions

See [Metrics Framework](strategy/metrics-framework.md) for complete definitions.

### Changelog

**Version 1.0 (November 2024)**
- Initial playbook creation
- All core documentation included
- 15 dashboards defined
- 20 report templates created

### Future Roadmap

**Q1 2025:**
- ML-powered churn prediction
- Real-time alerting system
- Self-service analytics portal

**Q2 2025:**
- Advanced cohort analysis tools
- Automated insight generation
- Mobile dashboard app

---

## Conclusion

Analytics at Brandora is more than dashboards and reports. It's a culture of curiosity, rigor, and continuous improvement. Use this playbook as your guide, but don't be afraid to question, experiment, and innovate.

Remember: **Data informs, humans decide.**

---

**Questions?** Contact #analytics-support
**Feedback?** We'd love to hear it! analytics@brandora.com

---

**Document Owner:** Analytics Team
**Last Review:** November 2024
**Next Review:** February 2025
