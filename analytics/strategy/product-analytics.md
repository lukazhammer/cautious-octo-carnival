# Product Analytics Strategy

## Executive Summary

This document defines how we measure product success, understand user behavior, and drive product decisions with data. Product analytics at Brandora focuses on activation, engagement, feature adoption, and delivering measurable value to users.

---

## 1. Activation Metrics

### Definition of Activation
A user is **activated** when they complete onboarding AND complete at least 1 brand module OR assessment within 7 days of signup.

### Why This Matters
Activated users have experienced Brandora's core value and are 5x more likely to convert to paid and 10x more likely to be retained long-term.

### Key Activation Metrics

#### **Activation Rate**
**Formula:** (Activated users / Total signups) × 100

**Targets by Time Window:**
- Within 24 hours: 25%
- Within 3 days: 45%
- Within 7 days: 60%
- Within 30 days: 70%

**Benchmark:** Best-in-class SaaS = 70%+ within 7 days

#### **Time to Activation**
**Median Target:** <48 hours from signup

**Distribution:**
- Same day: 30%
- Day 2-3: 25%
- Day 4-7: 15%
- Day 8-30: 10%
- Never: 20%

#### **Activation Funnel**

```
1. Account Created              (100%)   Baseline
      ↓ 95%
2. Email Verified               (95%)    5% email issues
      ↓ 85%
3. Onboarding Started           (81%)    14% immediate drop-off
      ↓ 90%
4. Profile Completed            (73%)    8% abandon during profile
      ↓ 95%
5. Onboarding Completed         (69%)    4% early exit
      ↓ 65%
6. First Module/Assessment      (45%)    24% don't start using
      ↓ 90%
7. Module/Assessment Completed  (40%)    5% start but don't finish
```

**Drop-off Analysis:**
- **Biggest leak:** Onboarding → First use (24% drop)
- **Optimization focus:** Reduce friction to start first module
- **A/B test:** Skip-to-value button in onboarding

### Activation Drivers

**High-Correlation Factors:**
1. **Welcome email opened** → 2x activation rate
2. **Product tour completed** → 1.8x activation rate
3. **Social proof shown** → 1.5x activation rate
4. **Specific use case selected** → 1.7x activation rate
5. **Invite team member** → 2.2x activation rate (collaboration)

### Segmentation Analysis

**Activation Rate by Segment:**

| Segment | Activation Rate | Time to Activate | Notes |
|---------|-----------------|------------------|-------|
| **Assessment Completers** | 85% | 2 days | Already engaged |
| **Direct Signups** | 45% | 4 days | Need onboarding |
| **Trial Users** | 70% | 1 day | High intent |
| **Free Users** | 50% | 5 days | Lower urgency |
| **Referral Signups** | 65% | 3 days | Pre-sold |
| **Paid Search** | 55% | 3 days | Solution-seeking |
| **Organic Search** | 48% | 5 days | Researching |

### Optimization Opportunities

**High-Impact Improvements:**
1. **Streamline onboarding (reduce steps by 40%)**
   - Current: 7 steps, 8 minutes
   - Target: 4 steps, 3 minutes
   - A/B test progressive profiling

2. **Add "Quick Start" path**
   - Skip to pre-filled module template
   - Ask 3 questions, generate starter content
   - Reduce time-to-value to <5 minutes

3. **Personalized activation paths**
   - Segment by use case (startup, rebrand, agency)
   - Customize onboarding for each
   - Show relevant examples

4. **Early wins**
   - Generate simple deliverable in onboarding
   - Export sample PDF
   - Create shareable moment

---

## 2. Engagement Metrics

### Definition of Engagement
Meaningful product interaction that indicates value realization. Not just logins or pageviews.

### Key Engagement Metrics

#### **Weekly Active Users (WAU)**
**Definition:** Unique users with ≥1 meaningful action in past 7 days

**Meaningful Actions:**
- Start or continue a module
- Complete assessment section
- Export PDF
- Save progress
- Team collaboration

**Target:** 40% of total registered users

**Trending:**
- Month 1 post-signup: 60% WAU
- Month 3 post-signup: 40% WAU
- Month 6 post-signup: 35% WAU
- Month 12 post-signup: 30% WAU

#### **DAU/MAU Ratio (Stickiness)**
**Formula:** (Daily Active Users / Monthly Active Users)

**Target:** 30%+ (indicates daily habit)

**Benchmarks:**
- 10-20%: Low engagement (monthly tool)
- 20-30%: Medium engagement (weekly tool)
- 30-40%: High engagement (daily habit)
- 40%+: Very high engagement (essential tool)

**Brandora Target:** 30% (aspiring to daily brand-building habit)

#### **Session Metrics**

**Sessions per User per Week:**
- Free users: 1.5 sessions/week
- Paid users: 3 sessions/week
- Power users: 5+ sessions/week

**Session Duration:**
- Average: 25 minutes
- Median: 18 minutes
- Engaged session (>10 min): 70% of sessions

**Pages per Session:**
- Average: 8 pages
- Module pages: 50%+ of total

#### **Feature Usage Depth**

**Engagement Levels:**

| Level | Description | Criteria | % of Users | Target |
|-------|-------------|----------|------------|--------|
| **Superficial** | Browsing only | <10 min, no saves | 30% | Reduce to 20% |
| **Basic** | Single feature | 1-2 modules started | 35% | Stable |
| **Moderate** | Multiple features | 3+ modules, assessment | 25% | Increase to 30% |
| **Deep** | Regular usage | 5+ modules, exports | 8% | Increase to 15% |
| **Power** | Daily habit | All features, team use | 2% | Increase to 5% |

### Engagement Tracking

**Core Engagement Events:**

```javascript
// Session engagement
analytics.track('Session Started', {
  user_id: user_id,
  session_number: total_sessions,
  days_since_last_session: days
});

// Module engagement
analytics.track('Module Progress', {
  module_id: module_name,
  progress_percentage: percent,
  time_spent: minutes
});

// Deep engagement
analytics.track('Deep Engagement Indicator', {
  engagement_type: 'long_session' | 'multiple_modules' | 'export',
  session_duration: minutes,
  actions_count: count
});
```

### Engagement Cohorts

**Monthly Engagement Retention:**

| Cohort | Week 1 | Week 4 | Week 8 | Week 12 | Week 24 |
|--------|--------|--------|--------|---------|---------|
| **Jan 2025** | 65% | 42% | 35% | 32% | 28% |
| **Feb 2025** | 68% | 45% | 38% | 35% | TBD |
| **Mar 2025** | 70% | 48% | TBD | TBD | TBD |

**Goal:** Each cohort improves on previous

### Engagement Segmentation

**By User Tier:**
- Free: 25% engaged weekly
- Foundation: 45% engaged weekly
- Complete: 55% engaged weekly
- Professional: 65% engaged weekly

**By User Type:**
- Solo entrepreneur: 50% engaged (sporadic deep sessions)
- Small business: 45% engaged (consistent weekly)
- Agency: 60% engaged (frequent, team-based)
- Enterprise: 55% engaged (structured usage)

### Re-engagement Strategies

**Dormant User Triggers:**
| Days Inactive | Risk Level | Action |
|---------------|------------|--------|
| 7 days | Low | In-app notification |
| 14 days | Medium | Email reminder with personalization |
| 21 days | High | Value-based email + incentive |
| 30 days | Critical | Win-back campaign (CS outreach if paid) |
| 60 days | Churned | Last-chance offer |

---

## 3. Feature Adoption

### Feature Hierarchy

**Core Features (Must-use):**
1. Brand Assessment
2. Brand Purpose Module
3. Visual Identity Module
4. PDF Export

**Target Adoption:** 80%+ of activated users

**Secondary Features (Should-use):**
5. All 13 Brand Modules
6. Save & Resume
7. Templates
8. Brand Guidelines Export

**Target Adoption:** 50%+ of activated users

**Advanced Features (Power-user):**
9. Team Collaboration
10. Brand Versioning
11. Asset Library
12. API Integration (if applicable)

**Target Adoption:** 15%+ of paid users

### Feature Adoption Metrics

#### **Adoption Rate**
**Formula:** (Users who used feature / Total users) × 100

**Measured at:**
- 7 days post-activation
- 30 days post-activation
- 90 days post-activation

#### **Adoption Funnel (Per Feature)**

```
1. Feature Awareness        (100%)   Baseline
      ↓ 70%
2. Feature Discovery        (70%)    30% never see it
      ↓ 60%
3. Feature Trial            (42%)    28% see but don't try
      ↓ 50%
4. Feature Usage            (21%)    21% try but don't continue
      ↓ 70%
5. Regular Usage            (15%)    6% use occasionally
```

**Overall Adoption: 15%** (Feature awareness → Regular usage)

#### **Feature Adoption Matrix**

| Feature | Awareness | Trial | Adoption | Retention | Priority |
|---------|-----------|-------|----------|-----------|----------|
| **Brand Assessment** | 95% | 70% | 65% | 80% | ✅ Core |
| **Brand Purpose** | 90% | 60% | 50% | 85% | ✅ Core |
| **Visual Identity** | 85% | 55% | 48% | 82% | ✅ Core |
| **Messaging Module** | 75% | 45% | 35% | 70% | 🔄 Grow |
| **PDF Export** | 80% | 50% | 45% | 90% | ✅ Core |
| **Templates** | 65% | 40% | 28% | 60% | 🔄 Grow |
| **Team Collab** | 50% | 20% | 12% | 85% | 📈 Premium |
| **Asset Library** | 40% | 15% | 8% | 70% | 🔍 Improve |

**Priority Key:**
- ✅ Core: Maintain high adoption
- 🔄 Grow: Increase awareness/trial
- 📈 Premium: Target power users
- 🔍 Improve: Low adoption, needs work or sunsetting

### Feature Engagement Depth

**For Each Feature, Track:**

1. **Discovery time:** How long until user finds it
2. **Time to first use:** How long until they try it
3. **Usage frequency:** How often they return to it
4. **Session depth:** How deeply they engage
5. **Retention impact:** Does it improve overall retention?

**Example: PDF Export Feature**
- Discovery: 85% within first session
- Time to first use: Median 3 days (complete module first)
- Frequency: 2x per month (per active user)
- Session depth: 5 min (customize and download)
- Retention impact: +25% retention vs non-exporters

### Feature Cross-Usage Analysis

**Common Feature Combinations:**

| Feature Combo | % of Users | Retention | LTV Multiplier |
|---------------|------------|-----------|----------------|
| **Assessment + Purpose** | 60% | 75% | 1.8x |
| **Assessment + Export** | 45% | 70% | 2.1x |
| **3+ Modules + Export** | 35% | 80% | 2.5x |
| **All Modules + Team** | 8% | 90% | 4.0x |
| **Templates + Modules** | 40% | 72% | 2.0x |

**Insight:** Users who combine multiple features have exponentially higher LTV

**Strategy:** Encourage feature bundling through:
- Guided workflows
- Progress incentives
- Feature discovery prompts

### Feature Sunset Criteria

**Evaluate quarterly if feature:**
- ❌ <10% adoption after 6 months
- ❌ Negative or neutral retention impact
- ❌ High support cost
- ❌ Low NPS from users of feature
- ❌ Doesn't align with product vision

**Sunset Process:**
1. Analyze usage data
2. User research (why low adoption?)
3. Consider: Improve vs Remove
4. If removing: Notify users, migration plan
5. Archive code, update docs

---

## 4. Module Completion Rates

### Overall Completion Metrics

**Module Completion Rate:**
**Formula:** (Modules completed / Modules started) × 100

**Overall Target:** 75%

**By Priority:**
- High-priority modules: 80%+
- Standard modules: 75%+
- Advanced modules: 70%+

### Module-by-Module Performance

| Module | Start Rate | Completion Rate | Avg Time | Drop-off Point |
|--------|------------|-----------------|----------|----------------|
| **1. Brand Purpose** | 85% | 78% | 35 min | Section 3 (vision) |
| **2. Target Audience** | 75% | 72% | 28 min | Section 2 (research) |
| **3. Brand Positioning** | 70% | 68% | 32 min | Section 4 (differentiation) |
| **4. Brand Personality** | 65% | 75% | 22 min | Smooth flow |
| **5. Visual Identity** | 80% | 70% | 45 min | Color selection |
| **6. Messaging** | 60% | 65% | 38 min | Tone examples |
| **7. Voice & Tone** | 55% | 70% | 30 min | Good completion |
| **8. Content Strategy** | 50% | 60% | 40 min | Section 3 (calendar) |
| **9. Social Media** | 48% | 62% | 25 min | Platform selection |
| **10. Customer Experience** | 45% | 58% | 35 min | Journey mapping |
| **11. Brand Guidelines** | 70% | 82% | 20 min | High value, easy |
| **12. Implementation** | 40% | 55% | 42 min | Complex, low priority |
| **13. Measurement** | 35% | 50% | 38 min | Last module fatigue |

### Completion Funnel Analysis

**Typical Module Completion Flow:**

```
1. Module Started           (100%)   Baseline
      ↓ 95%
2. Section 1 Complete       (95%)    5% immediate bounce
      ↓ 90%
3. Section 2 Complete       (86%)    9% drop after preview
      ↓ 85%
4. 50% Progress             (73%)    13% midpoint abandonment
      ↓ 90%
5. 75% Progress             (66%)    7% late-stage drop
      ↓ 95%
6. 100% Complete            (63%)    3% almost but not quite
```

**Average Drop-off:** 37% (target: reduce to 25%)

### Time to Complete Analysis

**Module Completion Time:**

| Metric | Current | Target | Best Performers |
|--------|---------|--------|-----------------|
| **Single Session** | 25% | 35% | 45% |
| **Multiple Sessions (2-3)** | 50% | 55% | 40% |
| **Long Tail (4+ sessions)** | 25% | 10% | 15% |

**Median Time from Start → Complete:**
- Same day: 25%
- 2-3 days: 35%
- 4-7 days: 25%
- 8-30 days: 10%
- Never: 5% (started but abandoned)

### Completion Drivers

**High Completion Indicators:**
1. **Save progress in first session** → 85% completion
2. **Complete section 1 in <10 min** → 80% completion
3. **Use templates/examples** → 78% completion
4. **Return within 24 hours** → 82% completion
5. **Mobile + desktop usage** → 75% completion (multi-device)

**Low Completion Indicators:**
1. **First session <5 min** → 30% completion
2. **No saves** → 25% completion
3. **Skip sections** → 40% completion
4. **No return in 7 days** → 15% completion

### Optimization Strategies

**To Improve Completion Rates:**

1. **Reduce module length**
   - Current avg: 35 minutes
   - Target: 25 minutes
   - Strategy: Remove optional sections

2. **Add progress incentives**
   - Show progress bar
   - Celebrate milestones (50%, 75%)
   - "Almost there!" prompts

3. **Enable module skipping**
   - Allow non-linear progress
   - "Come back later" option
   - Track skip patterns

4. **Smart reminders**
   - Email after 24h if <50% complete
   - In-app nudges when returning
   - "You're 80% done!" notifications

5. **Templates & shortcuts**
   - Pre-fill common answers
   - Industry templates
   - "Use example" buttons

---

## 5. Time to Value

### Definition
**Time to Value (TTV):** Duration from signup to experiencing meaningful product value.

**Brandora's Value Moments:**
1. **First Value:** Complete assessment, see insights (30 min)
2. **Quick Win:** Complete first module (45 min)
3. **Tangible Value:** Export first PDF (3 days)
4. **Full Value:** Complete brand strategy (14 days)
5. **Ongoing Value:** Return usage, team sharing (30+ days)

### Time to Value Metrics

#### **Time to First Value**
**Target:** <30 minutes from signup

**Current Performance:**
- <10 min: 15%
- 10-30 min: 35%
- 30-60 min: 25%
- 1-24 hours: 15%
- >24 hours: 10%

**Optimization Goal:** 60% within 30 minutes

#### **Time to Quick Win**
**Target:** <24 hours from signup

**Measured As:** First module completion or first export

**Current Performance:**
- Same session: 20%
- Within 24 hours: 35%
- 2-3 days: 25%
- 4-7 days: 12%
- Never: 8%

#### **Time to Tangible Value**
**Target:** <7 days from signup

**Measured As:** First PDF export

**Current Performance:**
- Day 1: 12%
- Day 2-3: 28%
- Day 4-7: 25%
- Day 8-14: 20%
- Day 15-30: 10%
- Never: 5%

### Correlation: TTV and Retention

| TTV Segment | Retention (30-day) | Conversion (Free→Paid) | LTV |
|-------------|--------------------|-----------------------|-----|
| **Value within 1 day** | 75% | 18% | 2.5x |
| **Value within 3 days** | 55% | 12% | 1.8x |
| **Value within 7 days** | 40% | 8% | 1.2x |
| **Value within 30 days** | 25% | 5% | 1.0x |
| **No value in 30 days** | 5% | 1% | 0.3x |

**Insight:** Every day of delay reduces retention by ~5%

**Strategy:** Reduce TTV through faster onboarding, quicker wins

### Value Realization Tracking

**Events to Track:**

```javascript
// Value milestones
analytics.track('Value Milestone Reached', {
  milestone_type: 'assessment_complete' | 'first_module' | 'first_export',
  time_since_signup: hours,
  user_tier: tier
});

// Aha moment
analytics.track('Aha Moment', {
  moment_type: 'insight_generated' | 'pdf_quality' | 'time_saved',
  user_feedback: optional_text
});

// Value perception
analytics.track('Value Survey Response', {
  perceived_value: 'high' | 'medium' | 'low',
  value_statement: text
});
```

### TTV Optimization Strategies

**1. Instant Gratification:**
- Generate sample brand guidelines in onboarding
- Show AI-powered insights immediately
- Preview final deliverable early

**2. Guided Quick Start:**
- "5-minute brand snapshot" flow
- Skip full assessment, use lite version
- Pre-fill with smart defaults

**3. Progressive Depth:**
- Start simple, add depth later
- "Good enough" first draft
- Refine over time

**4. Social Proof:**
- Show examples throughout
- "Others completed this in 20 min"
- Before/after showcases

---

## 6. Stickiness (DAU/MAU)

### Stickiness Definition
**Formula:** DAU / MAU

**Interpretation:**
- 30% stickiness = avg user uses product 9 days/month
- High stickiness = daily habit
- Low stickiness = occasional use

### Brandora Stickiness Targets

**Overall Target:** 30%

**By User Segment:**
- Free users: 15-20%
- Paid users: 35-40%
- Power users: 50%+
- Teams: 45%+

**By User Journey Stage:**
- First 30 days: 40% (exploring)
- Days 31-90: 30% (regular usage)
- Days 91+: 25% (established pattern)

### Stickiness Drivers

**High Stickiness Behaviors:**
1. **Multi-module engagement** → 42% stickiness
2. **Team collaboration** → 48% stickiness
3. **Frequent exports** → 38% stickiness
4. **Mobile + desktop** → 36% stickiness
5. **Daily reminders enabled** → 40% stickiness

**Low Stickiness Behaviors:**
1. **Single module focus** → 18% stickiness
2. **No exports** → 12% stickiness
3. **No team usage** → 20% stickiness
4. **Desktop only** → 22% stickiness

### Improving Stickiness

**Product Strategies:**
1. **Build habit loops**
   - Daily brand tip/inspiration
   - Progress tracking/streaks
   - Micro-commitments

2. **Increase utility**
   - More use cases
   - Quick actions (update logo, tweak messaging)
   - Always-on value

3. **Social/Team features**
   - Collaboration = more frequent use
   - @mentions, comments
   - Shared workspace

4. **Notifications (thoughtful)**
   - Progress reminders
   - Team activity
   - New template/content alerts

---

## 7. Product Health Dashboard

### Core Metrics (Daily Review)

| Metric | Current | Target | Trend | Status |
|--------|---------|--------|-------|--------|
| **Activation Rate (7d)** | 58% | 60% | ↗ +2% | 🟡 |
| **WAU** | 38% | 40% | → Flat | 🟡 |
| **DAU/MAU** | 28% | 30% | ↗ +1% | 🟡 |
| **Module Completion** | 73% | 75% | ↘ -1% | 🟡 |
| **Time to Value** | 2.5 days | 2 days | ↗ Improving | 🟢 |
| **Feature Adoption** | 48% | 50% | → Flat | 🟡 |

**Status:**
- 🟢 Green: On/above target
- 🟡 Yellow: Within 10% of target
- 🔴 Red: >10% below target

### Weekly Product Review

**Agenda:**
1. Review core metrics vs targets
2. Analyze biggest wins/losses
3. Deep dive: 1 focus area
4. Experimentation results
5. Next week priorities

**Deep Dive Rotation:**
- Week 1: Activation
- Week 2: Engagement
- Week 3: Feature Adoption
- Week 4: Retention

---

## Document Control

**Version:** 1.0
**Last Updated:** November 2024
**Owner:** Chief Product Officer
**Review Cadence:** Weekly
**Next Review:** December 2024

---

*Product analytics drives every product decision at Brandora. Data informs, intuition guides.*
