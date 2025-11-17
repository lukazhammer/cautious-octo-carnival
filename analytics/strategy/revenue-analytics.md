# Revenue Analytics Strategy

## Executive Summary

This document defines how we measure, forecast, and optimize revenue at Brandora. Revenue analytics focuses on MRR/ARR growth, churn management, expansion revenue, and overall business health metrics that drive sustainable, profitable growth.

---

## 1. Monthly Recurring Revenue (MRR)

### MRR Definition & Calculation

**MRR (Monthly Recurring Revenue):** Normalized monthly revenue from all active subscriptions.

**Calculation:**
```
MRR = Sum of all monthly subscription values

For annual plans: Annual Price / 12
For quarterly plans: Quarterly Price / 3
For monthly plans: Monthly Price
```

**Example:**
```
- 500 Foundation users @ $15/mo = $7,500
- 300 Complete users @ $45/mo = $13,500
- 100 Professional users @ $90/mo = $9,000
- 50 Annual Complete @ $450/yr = ($450/12) × 50 = $1,875
Total MRR = $31,875
```

### MRR Components

**New MRR:** Revenue from new customers
- Target: $15K+ new MRR/month
- Growth rate: +20% MoM

**Expansion MRR:** Additional revenue from existing customers
- Upgrades (Foundation → Complete)
- Seat expansion (team growth)
- Add-on features
- Target: $3K+ expansion MRR/month

**Contraction MRR:** Lost revenue from downgrades
- Complete → Foundation
- Seat reduction
- Target: <$500/month

**Churned MRR:** Revenue lost from cancellations
- Total cancellations
- Target: <$1,500/month (5% of MRR)

**Net New MRR:**
```
Net New MRR = New MRR + Expansion MRR - Contraction MRR - Churned MRR

Example:
$15,000 + $3,000 - $500 - $1,500 = $16,000 net new MRR
```

### MRR Tracking & Reporting

**Daily MRR Snapshot:**
- Current MRR
- Yesterday's change
- MTD new MRR
- Projected month-end MRR

**Weekly MRR Report:**
- WoW MRR growth
- New vs expansion vs churn
- MRR by tier
- Cohort performance

**Monthly MRR Analysis:**
- MoM growth rate
- MRR movements (waterfall)
- Customer count changes
- ARPU trends

### MRR Growth Targets

**2025 MRR Roadmap:**

| Quarter | Starting MRR | New MRR | Expansion | Churn | Ending MRR | Growth Rate |
|---------|--------------|---------|-----------|-------|------------|-------------|
| **Q1 2025** | $30K | $45K | $9K | -$4K | $80K | 167% |
| **Q2 2025** | $80K | $60K | $15K | -$5K | $150K | 88% |
| **Q3 2025** | $150K | $75K | $20K | -$8K | $237K | 58% |
| **Q4 2025** | $237K | $90K | $25K | -$12K | $340K | 43% |

**Year-End 2025 Target:** $340K MRR (11x growth from $30K)

**Path to $1M MRR:** Q3 2026

### MRR Waterfall Analysis

**Visual Monthly MRR Movement:**

```
Starting MRR (Jan 1):        $30,000
  + New MRR:                 +$15,000
  + Expansion MRR:           +$3,000
  - Contraction MRR:         -$500
  - Churned MRR:             -$1,500
Ending MRR (Jan 31):         $46,000

Net New MRR:                 $16,000
Growth Rate:                 53.3%
```

**Key Insights from Waterfall:**
- Identifies growth drivers
- Highlights churn impact
- Shows expansion opportunity
- Reveals contraction risks

### MRR by Customer Segment

**By Tier (Target Mix):**

| Tier | Customers | ARPU | MRR | % of Total | Target Mix |
|------|-----------|------|-----|------------|------------|
| **Foundation** | 750 | $15 | $11,250 | 33% | 30-40% |
| **Complete** | 450 | $45 | $20,250 | 60% | 50-60% |
| **Professional** | 25 | $90 | $2,250 | 7% | 10-15% |
| **Total** | 1,225 | $27.55 | $33,750 | 100% | 100% |

**Optimization Goal:** Shift mix toward higher tiers

**By Cohort (Monthly Signups):**

| Cohort | Initial MRR | Month 3 MRR | Month 6 MRR | Month 12 MRR | Retention |
|--------|-------------|-------------|-------------|--------------|-----------|
| **Jan 2025** | $5,000 | $4,200 | $4,000 | $3,800 | 76% |
| **Feb 2025** | $6,500 | $5,850 | $5,525 | TBD | 85% (better) |
| **Mar 2025** | $8,000 | TBD | TBD | TBD | TBD |

**Goal:** Each cohort retains more MRR than previous cohort

---

## 2. Annual Recurring Revenue (ARR)

### ARR Definition & Calculation

**ARR (Annual Recurring Revenue):** Annualized value of recurring revenue.

**Simple Calculation:**
```
ARR = MRR × 12

Example:
MRR = $33,750
ARR = $33,750 × 12 = $405,000
```

**Advanced Calculation (for mixed billing):**
```
ARR = (Monthly subscriptions × 12) + Annual subscriptions

More accurate when significant annual contracts
```

### ARR as Business Valuation Metric

**SaaS Valuation Multiples:**
- Early stage: 5-10x ARR
- Growth stage: 10-20x ARR
- Mature/profitable: 15-30x ARR

**Example:**
```
Brandora ARR (EOY 2025): $4M
Growth rate: 300% YoY
Churn: <5%
Estimated valuation: $4M × 12 = $48M

(High multiple due to growth + low churn)
```

### ARR Milestones

**Revenue Milestones & Implications:**

| ARR | Milestone | Implications |
|-----|-----------|--------------|
| **$100K** | Product-Market Fit | Validation, initial traction |
| **$1M** | Series A Ready | Seed funding, 10-20 employees |
| **$5M** | Series B Ready | Proven model, 50+ employees |
| **$10M** | Scale-up | Series B/C, 100+ employees |
| **$50M** | Growth Stage | IPO consideration |
| **$100M** | Public Ready | Mature SaaS business |

**Brandora 2025 Goal:** $4M ARR (on path to $10M in 2026)

---

## 3. Churn Rate

### Churn Definition & Types

**Customer Churn (Logo Churn):**
```
Customer Churn = (Customers Lost / Customers at Start) × 100

Example:
- Jan 1 customers: 1,000
- Cancellations in Jan: 50
- Customer Churn: 50/1,000 = 5%
```

**Revenue Churn (MRR Churn):**
```
Revenue Churn = (MRR Lost / MRR at Start) × 100

Example:
- Jan 1 MRR: $30,000
- Churned MRR: $1,500
- Revenue Churn: 1,500/30,000 = 5%
```

**Why Revenue Churn Matters More:**
- Losing 1 Professional customer ($90) ≠ losing 1 Foundation ($15)
- Revenue churn shows true business impact
- Can differ significantly from customer churn

### Churn Benchmarks

**SaaS Churn Benchmarks (Monthly):**

| Category | Good | Average | Poor |
|----------|------|---------|------|
| **B2B SaaS** | <3% | 5-7% | >10% |
| **SMB** | <5% | 7-10% | >12% |
| **Enterprise** | <1% | 2-3% | >5% |

**Brandora Targets:**

| Tier | Monthly Churn | Annual Churn | Rationale |
|------|---------------|--------------|-----------|
| **Foundation** | <7% | <84% | SMB, lower commitment |
| **Complete** | <4% | <48% | Mid-market, more invested |
| **Professional** | <3% | <36% | High value, sticky |
| **Overall** | <5% | <60% | Blended target |

**Annual Churn Formula:**
```
Annual Churn ≈ 1 - (1 - Monthly Churn)^12

Example:
5% monthly → 1 - (0.95)^12 = 46% annual
```

### Churn Analysis

**Churn by Cohort:**

| Cohort | Month 1 | Month 3 | Month 6 | Month 12 | Total Churn |
|--------|---------|---------|---------|----------|-------------|
| **Jan 2025** | 10% | 5% | 4% | 3% | 22% (1st yr) |
| **Feb 2025** | 8% | 4% | 3% | TBD | Better |
| **Mar 2025** | 7% | TBD | TBD | TBD | Even better |

**Insight:** Early churn (Month 1) highest - onboarding critical

**Churn by Segment:**

| Segment | Churn Rate | Insight |
|---------|------------|---------|
| **By Tier:** Foundation 7%, Complete 4%, Pro 3% | Higher price = lower churn |
| **By Company Size:** 1-10: 8%, 11-50: 5%, 51+: 3% | Larger = stickier |
| **By Activation:** Activated 3%, Not Activated 25% | Activation critical |
| **By Usage:** Daily 1%, Weekly 4%, Monthly 10% | Engagement = retention |
| **By Source:** Referral 2%, Organic 4%, Paid 7% | Quality varies |

### Churn Reasons

**Top Churn Reasons (Exit Survey Data):**

1. **No longer need (35%)** - Business closed, pivoted
2. **Too expensive (25%)** - Price sensitivity
3. **Missing features (15%)** - Product gaps
4. **Didn't see value (12%)** - Activation failure
5. **Switched to competitor (8%)** - Lost to competition
6. **Too complex (3%)** - UX issues
7. **Other (2%)** - Miscellaneous

**Actionable Insights:**
- 35% unavoidable (business reasons)
- 65% preventable (price, product, value, UX)
- Focus on preventable churn

### Churn Prevention

**Proactive Churn Indicators:**

**High Risk (30-day churn probability >50%):**
- ❌ No login in 21+ days
- ❌ Decreased usage by 75%+
- ❌ NPS score 0-6 (detractor)
- ❌ Support ticket with negative sentiment
- ❌ Visited cancellation page
- ❌ Failed payment

**Medium Risk (30-day churn probability 20-50%):**
- ⚠️ No login in 14 days
- ⚠️ Decreased usage by 50%
- ⚠️ NPS score 7-8 (passive)
- ⚠️ Low feature usage
- ⚠️ No team collaboration (if team plan)

**Churn Prevention Playbook:**

**High Risk Users:**
1. Immediate CS outreach (personal email/call)
2. Offer onboarding help
3. Discount/incentive if needed
4. Executive escalation if high-value

**Medium Risk Users:**
1. Automated re-engagement email
2. Feature highlight campaign
3. Success story inspiration
4. Webinar/training invite

**Metrics:**
- At-risk users identified: 100/month
- Intervention success rate: 40%
- Churn prevented: 40 customers/month
- Saved MRR: $1,200/month

---

## 4. Net Revenue Retention (NRR)

### NRR Definition & Calculation

**Net Revenue Retention (NRR):** Revenue retention rate including expansion and contraction.

**Formula:**
```
NRR = ((Starting MRR + Expansion - Contraction - Churn) / Starting MRR) × 100

Example:
- Jan 1 MRR: $30,000 (from existing customers only)
- Expansion: $3,000 (upgrades)
- Contraction: $500 (downgrades)
- Churn: $1,500 (cancellations)
- Jan 31 MRR: $31,000

NRR = (31,000 / 30,000) × 100 = 103.3%
```

**Note:** NRR excludes new customer revenue; measures existing cohort only

### NRR Benchmarks

**SaaS NRR Benchmarks (Annual):**

| NRR Range | Rating | Implication |
|-----------|--------|-------------|
| **<90%** | Poor | Losing money from existing customers |
| **90-100%** | Below Average | Expansion not covering churn |
| **100-110%** | Good | Slight net expansion |
| **110-120%** | Great | Strong expansion revenue |
| **120%+** | World-Class | Exceptional expansion, low churn |

**Best-in-Class Examples:**
- Snowflake: 168% NRR
- Twilio: 137% NRR
- Datadog: 130% NRR

**Brandora Target:** 110-115% NRR

**Why NRR Matters:**
- NRR >100% = Can grow without new customers
- Key metric for SaaS valuation
- Indicates product stickiness + expansion opportunity
- High NRR = high valuation multiples

### NRR Components

**Expansion Revenue Sources:**

1. **Tier Upgrades (70% of expansion)**
   - Foundation → Complete: $30/mo increase
   - Complete → Professional: $45/mo increase
   - Target: 10% of customers upgrade annually

2. **Seat Expansion (20% of expansion)**
   - Team plan: Add team members
   - Per-seat pricing on Professional tier
   - Target: 15% seat growth annually

3. **Add-ons & Features (10% of expansion)**
   - Premium templates
   - Additional exports
   - API access
   - Target: 5% attach rate

**Contraction Sources:**

1. **Downgrades (70% of contraction)**
   - Complete → Foundation
   - Professional → Complete
   - Typically due to budget cuts

2. **Seat Reduction (30% of contraction)**
   - Team shrinkage
   - Employee turnover
   - Budget optimization

### NRR by Cohort

**Cohort NRR Analysis (12-month):**

| Signup Cohort | Starting MRR | Month 12 MRR | NRR | Grade |
|---------------|--------------|--------------|-----|-------|
| **Q1 2024** | $5,000 | $5,500 | 110% | 🟢 Great |
| **Q2 2024** | $8,000 | $9,200 | 115% | 🟢 Great |
| **Q3 2024** | $12,000 | $14,400 | 120% | 🟢 World-class |
| **Q4 2024** | $18,000 | TBD (target 120%) | TBD | TBD |

**Trend:** Improving NRR over time as product matures

### NRR Optimization

**Strategies to Improve NRR:**

**1. Reduce Churn (-1% churn = +1% NRR)**
- Better onboarding
- Proactive support
- Product quality

**2. Drive Upgrades (+5% upgrade rate = +3% NRR)**
- Feature-gate valuable features
- Usage-based triggers ("you're outgrowing Foundation")
- Limited-time upgrade offers

**3. Enable Seat Expansion (+10% seat growth = +2% NRR)**
- Team features
- Collaboration tools
- Multi-user pricing

**4. Cross-sell Add-ons (+10% attach rate = +1% NRR)**
- Premium templates
- Advanced features
- Service add-ons

**Combined Impact:**
```
Current NRR: 105%
- Reduce churn 7% → 5%: +2% NRR
- Increase upgrades 8% → 12%: +2% NRR
- Seat growth 5% → 15%: +2% NRR
- Add-ons 2% → 8%: +1% NRR
Target NRR: 112%
```

---

## 5. Expansion Revenue

### Expansion Revenue Definition

**Expansion Revenue:** Additional revenue from existing customers (excludes new customer revenue).

**Types:**
1. **Upsells:** Tier upgrades
2. **Cross-sells:** Add-on features
3. **Seat expansion:** Additional users
4. **Usage-based:** Increased consumption (if applicable)

### Expansion Revenue Metrics

**Expansion MRR:**
- Target: 20% of new MRR comes from expansion
- Current: $3K expansion MRR/month
- Target (Q4 2025): $8K expansion MRR/month

**Expansion Rate:**
```
Expansion Rate = (Expansion MRR / Starting MRR) × 100

Example:
- Starting MRR: $30K
- Expansion: $3K
- Expansion Rate: 10% monthly
```

**Customer Upgrade Rate:**
```
Upgrade Rate = (Customers who upgraded / Total customers) × 100

Example:
- 1,000 customers
- 80 upgraded this month
- Upgrade Rate: 8% monthly
```

### Expansion Opportunities

**Upgrade Paths:**

**1. Foundation → Complete ($30/mo increase)**
- Trigger: 3+ modules completed
- Incentive: Unlock all modules
- Conversion rate: 15% annually
- Potential: 750 Foundation × 15% × $30 = $3,375 MRR

**2. Complete → Professional ($45/mo increase)**
- Trigger: Team collaboration needed
- Incentive: Unlimited team members
- Conversion rate: 10% annually
- Potential: 450 Complete × 10% × $45 = $2,025 MRR

**3. Seat Expansion (Team Plans)**
- Current avg: 3 seats
- Target avg: 4 seats
- Growth: 33% seat expansion
- Potential: Varies by pricing

**Total Expansion Potential:** $5,400+ MRR/month

### Expansion Playbook

**Automated Triggers:**

**Foundation → Complete Upgrade Prompt:**
```
Trigger: User completes 3 modules on Foundation
Message: "You're getting great value! Upgrade to Complete for all 13 modules + premium templates."
Offer: 20% off first 3 months
Conversion: 25% of prompted users
```

**Complete → Professional Upgrade Prompt:**
```
Trigger: User invites 2nd team member
Message: "Collaborate better with unlimited team members on Professional."
Offer: Free month of Professional
Conversion: 15% of prompted users
```

**Manual Triggers (CS Team):**

**High Usage Users:**
- Identify power users (top 20% usage)
- Personal outreach with upgrade offer
- Success rate: 30-40%

**Quarterly Business Reviews (QBRs):**
- For Professional customers
- Identify expansion opportunities
- Success rate: 20-30%

### Expansion Revenue Tracking

**Monthly Expansion Report:**

| Expansion Type | Customers | MRR Impact | % of Total Expansion |
|----------------|-----------|------------|----------------------|
| **Foundation → Complete** | 12 | $360 | 45% |
| **Complete → Professional** | 4 | $180 | 23% |
| **Seat Expansion** | 8 | $240 | 30% |
| **Add-ons** | 2 | $20 | 2% |
| **Total** | 26 | $800 | 100% |

---

## 6. Contraction Revenue

### Contraction Definition

**Contraction Revenue:** Revenue lost from existing customers due to downgrades (not cancellations).

**Sources:**
1. **Tier Downgrades:** Professional → Complete, Complete → Foundation
2. **Seat Reduction:** Fewer team members
3. **Removed Add-ons:** Cancelled additional features

**Note:** Contraction ≠ Churn. Customer stays but pays less.

### Contraction Metrics

**Contraction MRR:**
- Current: $500/month
- Target: <$300/month (<1% of MRR)

**Contraction Rate:**
```
Contraction Rate = (Contraction MRR / Starting MRR) × 100

Example:
- Starting MRR: $30K
- Contraction: $500
- Contraction Rate: 1.67%
```

**Customer Downgrade Rate:**
```
Downgrade Rate = (Customers who downgraded / Total customers) × 100

Example:
- 1,000 customers
- 15 downgraded
- Downgrade Rate: 1.5%
```

### Contraction Reasons

**Why Customers Downgrade:**

1. **Budget Cuts (45%)** - Economic pressures
2. **Lower Usage (30%)** - Don't need higher tier
3. **Team Size Reduced (15%)** - Headcount reduction
4. **Testing Lower Tier (10%)** - Exploring if features needed

**Prevention Strategies:**

**Budget-Driven:**
- Offer annual discount (lock in revenue)
- Payment plans
- Feature usage reports (show value)

**Usage-Driven:**
- May be legitimate fit issue
- Ensure they know all features
- Re-engagement campaign

**Team Size:**
- Flexible seat reduction
- Keep on higher tier, fewer seats
- Retain relationship

### Contraction vs Churn

**Better to Contract than Churn:**
```
Option A (Churn):
- Customer cancels Complete ($45/mo)
- Lost: $45/mo = $540/year
- Recovery: Difficult (20% win-back rate)

Option B (Contract to Foundation):
- Customer downgrades to Foundation ($15/mo)
- Lost: $30/mo = $360/year
- Retained: $15/mo = $180/year
- Upgrade opportunity: 25% re-upgrade rate

Winner: Option B (retain customer, easier to expand later)
```

**Strategy:** Offer downgrade before allowing cancellation

---

## 7. Revenue Forecasting

### Forecasting Methodology

**Bottom-Up Forecast:**
```
1. Existing MRR
2. + Projected New MRR (signups × conversion rate × ARPU)
3. + Projected Expansion MRR (upgrade rate × customer base)
4. - Projected Contraction MRR (downgrade rate × MRR)
5. - Projected Churn (churn rate × MRR)
= Projected Ending MRR
```

**Example (Next Month):**
```
1. Current MRR: $30,000
2. New MRR: 1,400 signups × 8% conversion × $35 = $3,920
3. Expansion: 1,000 customers × 2% × $30 = $600
4. Contraction: $30,000 × 1.5% = -$450
5. Churn: $30,000 × 5% = -$1,500
= Projected MRR: $32,570 (+8.6% growth)
```

### Revenue Projections

**2025 Revenue Forecast:**

| Quarter | Starting MRR | New Customers | New MRR | Expansion | Churn | Ending MRR | QoQ Growth |
|---------|--------------|---------------|---------|-----------|-------|------------|------------|
| **Q1** | $30K | 3,500 | $45K | $9K | -$4K | $80K | 167% |
| **Q2** | $80K | 4,500 | $60K | $15K | -$5K | $150K | 88% |
| **Q3** | $150K | 5,500 | $75K | $20K | -$8K | $237K | 58% |
| **Q4** | $237K | 6,500 | $90K | $25K | -$12K | $340K | 43% |

**2025 ARR:** $4.08M
**2025 Total Revenue:** ~$2.85M (average MRR × 12)

**Conservative vs Aggressive:**

| Scenario | EOY 2025 MRR | ARR | Assumptions |
|----------|--------------|-----|-------------|
| **Conservative** | $280K | $3.36M | 15% slower growth, 6% churn |
| **Base Case** | $340K | $4.08M | Current trajectory |
| **Aggressive** | $420K | $5.04M | 20% faster growth, 4% churn |

### Scenario Planning

**Sensitivity Analysis:**

**Impact of Churn Rate:**
| Churn Rate | EOY MRR | Difference |
|------------|---------|------------|
| **3%** | $385K | +$45K (+13%) |
| **5%** (base) | $340K | Baseline |
| **7%** | $295K | -$45K (-13%) |

**Impact of Conversion Rate:**
| Conversion | EOY MRR | Difference |
|------------|---------|------------|
| **6%** | $285K | -$55K (-16%) |
| **8%** (base) | $340K | Baseline |
| **10%** | $395K | +$55K (+16%) |

**Insight:** Churn and conversion both critical; 1% change = ~$15K MRR impact

---

## 8. Financial Health Metrics

### Unit Economics

**Customer Unit Economics:**

```
Revenue per Customer (Annual): $420
COGS per Customer (Annual): $84
Gross Margin per Customer: $336 (80%)
CAC: $30
LTV: $630

LTV:CAC Ratio: 21:1 (blended, dominated by organic)
Paid LTV:CAC: 4.5:1 (more realistic)
Payback Period: 2.1 months (gross margin basis)
```

**Tier Economics:**

| Tier | ARPU | Gross Margin | CAC | LTV | LTV:CAC | Payback |
|------|------|--------------|-----|-----|---------|---------|
| **Foundation** | $15 | $12 | $25 | $168 | 6.7:1 | 4.2mo |
| **Complete** | $45 | $36 | $35 | $900 | 25.7:1 | 1.9mo |
| **Professional** | $90 | $72 | $50 | $2,376 | 47.5:1 | 1.4mo |

**Insight:** Higher tiers have vastly better economics

**Strategy:** Focus on Complete and Professional acquisition and upgrades

### Rule of 40

**Rule of 40:** Growth Rate + Profit Margin ≥ 40%

**Brandora 2025:**
```
Revenue Growth Rate: 300% (year-over-year)
Profit Margin: -50% (investing in growth)
Rule of 40 Score: 300% - 50% = 250%

Grade: Exceptional (>40% = healthy SaaS)
```

**Typical Stages:**
- Early: High growth, negative margin = Rule of 40+ (invest)
- Growth: Moderate growth, break-even = Rule of 40+ (scale)
- Mature: Low growth, high margin = Rule of 40+ (profitable)

### Cash Flow & Burn Rate

**Monthly Cash Flow (Example):**
```
Cash Inflows:
- New MRR (cash collected): $12,000
- Expansion MRR: $2,400
- Annual plans (upfront): $5,000
Total Inflows: $19,400

Cash Outflows:
- Team salaries: $50,000
- Marketing spend: $15,000
- Infrastructure: $3,000
- Other operating: $7,000
Total Outflows: $75,000

Net Cash Flow: -$55,600
```

**Burn Rate:** $55,600/month

**Runway Calculation:**
```
Current Cash: $500,000
Monthly Burn: $55,600
Runway: 500,000 / 55,600 = 9 months
```

**Path to Profitability:**
- Current MRR: $34K → Monthly revenue: $34K
- Monthly costs: $75K
- Deficit: $41K
- Break-even MRR: $75K (assuming 100% margin, actually ~80%)
- Actual break-even: $94K MRR
- Months to break-even: 3-4 months at current growth

---

## 9. Revenue Dashboard (Summary)

### Executive Revenue Metrics (Weekly)

| Metric | Current | Last Week | WoW Change | Target | Status |
|--------|---------|-----------|------------|--------|--------|
| **MRR** | $33,750 | $32,800 | +2.9% | +3%/week | 🟡 |
| **ARR** | $405K | $394K | +2.9% | $4M EOY | 🟢 |
| **New MRR** | $3,900 | $3,750 | +4% | $4K/week | 🟡 |
| **Expansion MRR** | $800 | $650 | +23% | $750/week | 🟢 |
| **Churned MRR** | $350 | $420 | -17% | <$400 | 🟢 |
| **Net New MRR** | $4,350 | $3,980 | +9.3% | $4,500 | 🟡 |
| **Customer Count** | 1,225 | 1,187 | +3.2% | +3.5% | 🟡 |
| **ARPU** | $27.55 | $27.63 | -0.3% | Stable | 🟢 |
| **Churn Rate** | 4.8% | 5.1% | -6% | <5% | 🟢 |
| **NRR** | 108% | 106% | +2% | >110% | 🟡 |

**Overall Revenue Health:** 🟢 Strong Growth

---

## 10. Advanced Revenue Analytics

### Cohort Revenue Analysis

**Revenue Retention by Cohort:**

Track how each monthly signup cohort retains and grows revenue over time.

| Cohort | M0 | M1 | M2 | M3 | M6 | M12 |
|--------|-------|-------|-------|-------|-------|-------|
| **Jan 25** | 100% | 95% | 92% | 89% | 85% | 80% |
| **Feb 25** | 100% | 97% | 94% | 92% | TBD | TBD |
| **Mar 25** | 100% | 98% | 96% | TBD | TBD | TBD |

**Insight:** Newer cohorts showing better retention (product improvements working)

### Customer Lifetime Value Calculation

**Detailed LTV Calculation:**

```
Cohort-based LTV (most accurate):
1. Track cohort over 12+ months
2. Sum all revenue per customer in cohort
3. Extrapolate remaining lifetime

Example (Jan 2024 cohort):
- Month 0-12 revenue: $450/customer
- Retention at month 12: 78%
- Projected remaining lifetime: 12 months
- Projected future revenue: $450 × 78% = $351
- Total LTV: $450 + $351 = $801
```

### Revenue Concentration Risk

**Revenue Distribution:**

**By Customer:**
- Top customer: 2.5% of MRR (healthy)
- Top 10 customers: 18% of MRR (healthy)
- Top 100 customers: 65% of MRR (moderate risk)

**Target:** No single customer >5%, top 10 <25%

**By Tier:**
- Foundation: 33% (diversified)
- Complete: 60% (concentrated but mid-market)
- Professional: 7% (underdeveloped opportunity)

**By Acquisition Channel:**
- Organic: 45% (healthy)
- Paid: 35% (manageable)
- Referral: 20% (growing)

**Risk Assessment:** Low risk, well-diversified

---

## Document Control

**Version:** 1.0
**Last Updated:** November 2024
**Owner:** Chief Financial Officer
**Review Cadence:** Daily (MRR), Weekly (detailed), Monthly (forecast)
**Next Review:** December 2024

---

*Revenue is the scorecard. Growth is the goal. Sustainability is the strategy.*
