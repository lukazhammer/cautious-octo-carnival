# Churn Investigation Report

**Period:** {{period}}
**Report Date:** {{report_date}}
**Analyst:** {{analyst}}

---

## Churn Summary

**Total Churned:** {{churned_count}} customers
**Churned MRR:** {{churned_mrr}}
**Churn Rate:** {{churn_rate}}% (Target: <5%)
**Status:** {{status_red_yellow_green}}

---

## Churn Breakdown

### By Tier

| Tier | Starting Customers | Churned | Churn Rate | Lost MRR |
|------|-------------------|---------|------------|----------|
| **Foundation** | {{starting}} | {{churned}} | {{rate}}% | {{mrr}} |
| **Complete** | {{starting}} | {{churned}} | {{rate}}% | {{mrr}} |
| **Professional** | {{starting}} | {{churned}} | {{rate}}% | {{mrr}} |

### By Cohort

| Signup Month | Churned | Original Cohort | Churn Rate |
|--------------|---------|----------------|------------|
| {{month_1}} | {{churned}} | {{original}} | {{rate}}% |
| {{month_2}} | {{churned}} | {{original}} | {{rate}}% |
| {{month_3}} | {{churned}} | {{original}} | {{rate}}% |

### By Customer Lifetime

| Lifetime | Churned | % of Total Churn | Avg LTV |
|----------|---------|------------------|---------|
| <3 months | {{count}} | {{pct}}% | {{ltv}} |
| 3-6 months | {{count}} | {{pct}}% | {{ltv}} |
| 6-12 months | {{count}} | {{pct}}% | {{ltv}} |
| >12 months | {{count}} | {{pct}}% | {{ltv}} |

---

## Churn Reasons (Exit Survey)

| Reason | Count | % of Total | Lost MRR | Preventable? |
|--------|-------|------------|----------|--------------|
| **No longer need** | {{count}} | {{pct}}% | {{mrr}} | ❌ |
| **Too expensive** | {{count}} | {{pct}}% | {{mrr}} | ✅ |
| **Missing features** | {{count}} | {{pct}}% | {{mrr}} | ✅ |
| **Didn't see value** | {{count}} | {{pct}}% | {{mrr}} | ✅ |
| **Competitor** | {{count}} | {{pct}}% | {{mrr}} | ✅ |
| **Too complex** | {{count}} | {{pct}}% | {{mrr}} | ✅ |
| **Other** | {{count}} | {{pct}}% | {{mrr}} | ? |

**Preventable Churn:** {{preventable_pct}}% ({{preventable_mrr}} MRR)

---

## Churn Patterns

### Leading Indicators (Present in Churned Users)

| Indicator | % of Churned | vs Retained | Predictive Value |
|-----------|--------------|-------------|------------------|
| **No login 14+ days** | {{pct}}% | {{vs_retained}} | {{predictive}} |
| **Usage decreased 50%+** | {{pct}}% | {{vs_retained}} | {{predictive}} |
| **NPS score <7** | {{pct}}% | {{vs_retained}} | {{predictive}} |
| **Support ticket (negative)** | {{pct}}% | {{vs_retained}} | {{predictive}} |
| **No module completed (30d)** | {{pct}}% | {{vs_retained}} | {{predictive}} |

---

## High-Value Churn Analysis

**Definition:** Customers with MRR >$50 or LTV >$500

**Count:** {{high_value_count}}
**Lost MRR:** {{high_value_mrr}}

### Top 10 Churned Customers

| Customer | Tier | MRR | LTV | Lifetime | Reason | Preventable? |
|----------|------|-----|-----|----------|--------|--------------|
| {{name}} | {{tier}} | {{mrr}} | {{ltv}} | {{months}} | {{reason}} | {{preventable}} |
[...9 more]

---

## Root Cause Analysis

### Category 1: Product Issues
- {{issue_1}}
- {{issue_2}}

### Category 2: Pricing
- {{issue_1}}
- {{issue_2}}

### Category 3: Competition
- {{issue_1}}
- {{issue_2}}

### Category 4: Customer Success
- {{issue_1}}
- {{issue_2}}

---

## Recommendations

### Immediate Actions (This Week)
1. {{action_1}}
2. {{action_2}}
3. {{action_3}}

### Short-term (This Month)
1. {{action_1}}
2. {{action_2}}
3. {{action_3}}

### Long-term (This Quarter)
1. {{action_1}}
2. {{action_2}}
3. {{action_3}}

---

## Projected Impact

If recommendations implemented:
- **Churn Reduction:** -{{reduction_pct}}%
- **MRR Saved:** {{mrr_saved}}/month
- **Annual Impact:** {{annual_impact}}
