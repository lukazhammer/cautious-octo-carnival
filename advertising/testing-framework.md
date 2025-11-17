# Advertising Testing Framework

## Table of Contents
1. [Testing Philosophy](#testing-philosophy)
2. [A/B Testing Methodology](#ab-testing-methodology)
3. [Multi-Variate Testing](#multi-variate-testing)
4. [Channel-Specific Testing](#channel-specific-testing)
5. [Creative Testing](#creative-testing)
6. [Landing Page Testing](#landing-page-testing)
7. [Audience Testing](#audience-testing)
8. [Testing Calendar](#testing-calendar)

---

## Testing Philosophy

### Core Principles

**1. Always Be Testing**
Never run campaigns without active tests. Continuous improvement comes from continuous experimentation.

**2. Test One Variable at a Time**
Isolate variables to understand what actually drives results. Multiple changes = unclear attribution.

**3. Statistical Significance Required**
Don't call winners prematurely. Wait for 95% confidence and adequate sample size.

**4. Document Everything**
Track hypotheses, results, and learnings. Build institutional knowledge over time.

**5. Fail Fast, Scale Winners**
Kill losers quickly (7 days max). Scale winners aggressively.

**6. Test Big Swings AND Small Tweaks**
- Big swings: 20%+ impact potential (new creative, different angles)
- Small tweaks: 2-5% improvement (CTA color, headline wording)

### Testing Hierarchy (Priority Order)

**Tier 1 - Highest Impact:**
1. Offer/Value Proposition
2. Creative Hook (first 3 seconds of video, hero image, headline)
3. Audience Targeting

**Tier 2 - Medium Impact:**
4. Call-to-Action
5. Ad Format
6. Landing Page Design

**Tier 3 - Lower Impact (But Still Worth Testing):**
7. Ad Copy Variations
8. CTA Button Color
9. Form Field Order
10. Smaller Design Elements

---

## A/B Testing Methodology

### Standard A/B Test Protocol

**1. Hypothesis Formation**
- **Current State:** "Our assessment completion rate is 45%"
- **Hypothesis:** "Changing the headline from benefit-focused to question-format will increase completion rate"
- **Expected Outcome:** "Completion rate will increase to 55%+"
- **Rationale:** "Questions create curiosity gap and engagement"

**2. Test Design**
- **Control (A):** Current headline
- **Variant (B):** New question-format headline
- **Everything Else:** Identical
- **Traffic Split:** 50/50
- **Duration:** Minimum 7 days or 1,000 conversions per variation (whichever comes first)

**3. Sample Size Requirements**

**Minimum Sample Sizes:**
- **High-traffic pages:** 1,000 conversions per variation
- **Medium-traffic pages:** 500 conversions per variation
- **Low-traffic pages:** 100 conversions per variation
- **Minimum time:** 7 days (capture full week including weekend behavior)

**Sample Size Calculator:**
Use: [ev.tools/ab-test-calculator](https://abtestguide.com/calc/)
- Input current conversion rate
- Input expected improvement
- Output: Required sample size

**4. Statistical Significance**

**Requirements:**
- Minimum 95% confidence level
- p-value < 0.05
- Adequate sample size achieved
- Full week of data (accounts for day-of-week variations)

**Don't:**
- Call winners before statistical significance
- Stop test early because one is "obviously winning"
- Keep test running indefinitely (diminishing returns after 30 days)

**5. Results Analysis**

**Document:**
- Hypothesis (what you expected)
- Results (what actually happened)
- Confidence level
- Sample size
- Duration
- Winner
- Magnitude of lift
- Key learnings
- Next steps

**Example:**
```
Test: Homepage Headline A/B
Hypothesis: Question format will increase conversions
Results:
- Control (A): 3.2% conversion (n=5,243)
- Variant (B): 3.8% conversion (n=5,127)
- Lift: +18.75%
- Confidence: 97%
- Winner: Variant B
- Learning: Question-format headlines create curiosity gap and engagement
- Next Step: Test different question variations
```

**6. Implementation**
- Implement winner permanently
- Archive test results
- Share learnings with team
- Plan next test based on results

---

## Multi-Variate Testing (MVT)

### When to Use MVT

**Use When:**
- High traffic volume (10,000+ visitors/week)
- Multiple elements to test simultaneously
- Want to find optimal combination
- Have statistical expertise

**Don't Use When:**
- Low traffic (insufficient sample size)
- Just starting testing program
- Simple A/B test will suffice

### MVT Example: Landing Page

**Elements to Test:**
- Headline: A1 vs A2 vs A3
- Hero Image: B1 vs B2 vs B3
- CTA Button: C1 vs C2 vs C3

**Total Combinations:** 3 × 3 × 3 = 27 variations

**Traffic Requirements:** 27,000+ conversions (1,000 per variation minimum)

**Duration:** Potentially weeks/months

**Better Approach for Most:**
Sequential A/B tests:
1. Test headlines first (find winner)
2. Then test hero images (with winning headline)
3. Then test CTA buttons (with winning headline + image)

Result: 3 tests vs. 1 massive MVT, same insights, faster results

---

## Channel-Specific Testing

### Google Ads Testing

**What to Test:**

**1. Ad Copy (RSAs - Responsive Search Ads)**
- Test 3-5 headline variations
- Test 2-3 description variations
- Let Google optimize combinations
- Review asset performance report

**Example Test:**
- Headlines emphasizing: Cost savings vs. Speed vs. Quality
- Measure: CTR and conversion rate by asset
- Winner: Implement winning messaging across campaigns

**2. Landing Page**
- Test different destination URLs
- Measure: Conversion rate post-click
- Common test: Homepage vs. Dedicated landing page vs. Assessment page

**3. Ad Extensions**
- Test sitelink variations
- Test different callouts
- Measure: Extension CTR and conversion rate

**4. Bidding Strategy**
- Manual CPC vs. Maximize Conversions vs. Target CPA
- Test for 2-3 weeks minimum
- Measure: CPA and conversion volume

**Testing Cadence:**
- New ad copy: Weekly
- Landing page: Monthly
- Bidding strategy: Quarterly

---

### Meta Ads Testing

**What to Test:**

**1. Creative (Primary Priority)**

**Image Ads:**
- Photo vs. Graphic vs. Screenshot
- Different visual styles
- With/without text overlay
- Different value propositions

**Video Ads:**
- Different hooks (first 3 seconds)
- Different lengths (15s vs. 30s vs 60s)
- Talking head vs. Animation vs. Screen recording
- Different storytelling angles

**Test Setup:**
- Create ad set
- Add 3-5 creative variations
- Let Meta optimize delivery
- Review after 7 days, kill lowest performers

**2. Audience**
- Interest-based vs. Lookalike vs. Broad
- Different interest combinations
- Lookalike % (1% vs. 3% vs. 5%)
- Demographic variations (age ranges, locations)

**Test Setup:**
- Duplicate campaign
- Change only audience
- Equal budget split
- Run for 14 days minimum

**3. Placement**
- Automatic vs. Manual
- Feed vs. Stories vs. Reels
- Facebook vs. Instagram
- Feed position

**Test Setup:**
- Duplicate campaign
- Manual placement selection
- Run for 7 days
- Measure CPM, CTR, CPA by placement

**4. Primary Text**
- Long-form (300 chars) vs. Short-form (125 chars)
- Question vs. Statement
- Problem-focused vs. Solution-focused
- With/without emojis

**Testing Cadence:**
- New creative: Every 2 weeks
- Audience: Monthly
- Copy variations: Weekly
- Placement: Quarterly

---

### LinkedIn Ads Testing

**What to Test:**

**1. Audience Targeting**
- Job title variations
- Company size segments
- Industry verticals
- Seniority levels

**Test Setup:**
- Create separate campaigns per audience
- Identical creative and budget
- Run for 2 weeks (LinkedIn has lower volume)
- Measure: CTR, CPC, conversion rate

**2. Ad Format**
- Sponsored Content vs. Message Ads vs. Document Ads
- Single Image vs. Carousel vs. Video
- Different content types

**3. Creative**
- Professional vs. Casual tone
- Feature-focused vs. Benefit-focused
- Data-driven vs. Emotional
- Third-person vs. First-person

**4. Offer**
- Free assessment vs. Guide download vs. Demo
- Different lead magnets
- Different CTAs

**Testing Cadence:**
- Audience: Bi-weekly
- Format: Monthly
- Creative: Weekly
- Offer: Monthly

---

### Twitter Ads Testing

**What to Test:**

**1. Tweet Format**
- Single tweet vs. Thread vs. Poll
- Image vs. Video vs. Text-only
- Different thread lengths (3 vs. 5 vs. 10 tweets)

**2. Creative Angle**
- Hot takes vs. Educational vs. Personal story
- Question vs. Statement
- Contrarian vs. Supportive

**3. CTA**
- Learn more vs. Try free vs. Read article
- Link in tweet vs. Quote tweet with link
- Thread ending CTA vs. Multiple CTAs throughout

**Testing Cadence:**
- New tweets: Daily/Weekly
- Format variations: Weekly
- Angle shifts: Bi-weekly

---

## Creative Testing

### Video Ad Testing Framework

**Hook Testing (Most Important)**
Test first 3 seconds extensively:
- Question vs. Statement vs. Visual hook
- Problem vs. Solution opening
- Stat/number vs. Story opening

**Example:**
- Version A: "Are you struggling with brand positioning?"
- Version B: "$15,000. That's what agencies charge for brand strategy."
- Version C: "We analyzed 10,000 brand strategies..."

**Test Setup:**
- Same video after first 3 seconds
- Only hook differs
- Measure: 3-second view rate, completion rate, CTR

**Length Testing**
- 15-second vs. 30-second vs. 60-second
- Test same concept in different lengths
- Measure: Completion rate, CPA, ROAS

**Format Testing**
- Talking head vs. Screen recording vs. Animation
- Captions vs. No captions
- Music vs. No music

### Image Ad Testing Framework

**Visual Style**
- Photography vs. Graphics vs. Screenshots
- Minimal vs. Detailed
- Dark vs. Light background
- With person vs. Without person

**Text Overlay**
- With vs. Without
- Different headline options
- Different amounts of text

**Color Scheme**
- Brand colors vs. High contrast
- Different background colors
- Different accent colors

### Testing Matrix

| Week | Creative Type | Variable | Variations |
|------|--------------|----------|------------|
| 1 | Video | Hook | 3 versions |
| 2 | Image | Visual style | 3 versions |
| 3 | Video | Length | 15s vs 30s vs 60s |
| 4 | Carousel | Number of cards | 3 vs 5 vs 7 |
| 5 | Image | With/without person | 2 versions |
| 6 | Video | Format | Talking head vs Animation |
| 7 | Image | Text overlay | With vs Without |
| 8 | Video | CTA placement | End only vs Throughout |

---

## Landing Page Testing

### High-Impact Tests

**1. Headline**
- Test 5-10 variations
- Different formats (question, benefit, social proof, etc.)
- Measure: Bounce rate, conversion rate

**2. Hero Section**
- Image vs. Video
- Different CTAs
- With/without social proof

**3. Form Length**
- Number of fields
- Required vs. Optional fields
- Single-step vs. Multi-step

**4. Social Proof Placement**
- Above fold vs. Below fold
- Type: Numbers vs. Testimonials vs. Logos

**5. CTA Button**
- Color (yellow vs. blue vs. green)
- Text ("Get Started" vs. "Start Free" vs. "Try Now")
- Size and placement
- Single vs. Multiple CTAs

### Testing Tools

**Recommended:**
- **Optimizely:** Enterprise-grade A/B testing
- **VWO:** Mid-market solution
- **Google Optimize:** Free (being sunset, but alternatives available)
- **Unbounce:** Landing page builder with built-in A/B testing

### Sample Test Schedule

**Month 1:**
- Week 1: Headline test
- Week 2: Implement winner, test hero image
- Week 3: Implement winner, test CTA button
- Week 4: Implement winner, test form length

**Month 2:**
- Week 1: Test social proof placement
- Week 2: Test page length (short vs. long-form)
- Week 3: Test different value propositions
- Week 4: Consolidate learnings, implement all winners

**Compound Effect:**
- Headline: +15% lift
- Hero image: +8% lift
- CTA button: +5% lift
- Form length: +12% lift
- **Total Potential:** ~40% conversion rate improvement

---

## Audience Testing

### Meta Audience Testing

**Test 1: Interest Categories**
- Broad interests (Entrepreneurship, Marketing)
- Specific interests (Y Combinator, TechCrunch)
- Competitor interests
- Tool/software interests (Canva, Figma, etc.)

**Test 2: Lookalike Percentages**
- 1% (most similar)
- 2-3% (moderate similarity)
- 4-5% (broader reach)

**Test 3: Demographics**
- Age ranges (25-35 vs. 35-45 vs. 45-55)
- Locations (US vs. UK vs. Global English-speaking)
- Devices (Mobile vs. Desktop)

**Test 4: Custom Audiences**
- Website visitors (all vs. high-intent pages only)
- Video viewers (25% vs. 75% vs. 95%)
- Engagement (page likes, post engagement, etc.)

### Google Ads Audience Testing

**Test 1: In-Market Audiences**
- Business Services
- Marketing Services
- Small Business Services
- Compare: In-market vs. No audience layering

**Test 2: Affinity Audiences**
- Business Professionals
- Technophiles
- Startup Enthusiasts
- Compare: Different affinity combinations

**Test 3: Custom Intent**
- Keywords they've searched
- URLs they've visited
- Apps they use
- Compare: Custom intent vs. Broad match

### LinkedIn Audience Testing

**Test 1: Job Function**
- Marketing only
- Marketing + Sales
- Marketing + Business Development
- All business functions

**Test 2: Seniority**
- C-level only
- Director+ level
- Manager+ level
- All seniority levels

**Test 3: Company Size**
- 1-50 employees
- 51-200 employees
- 201-1000 employees
- Compare: Small vs. Mid-market focus

---

## Testing Calendar

### Monthly Testing Plan Template

**Week 1:**
- Launch new creative tests (3-5 variations)
- Review previous month's results
- Document learnings

**Week 2:**
- Check creative test performance
- Kill obvious losers
- Scale early winners

**Week 3:**
- Audience testing
- Landing page element test
- Review mid-month metrics

**Week 4:**
- Finalize monthly tests
- Implement winners
- Plan next month's tests

### Quarterly Testing Roadmap

**Q1 Focus: Foundation**
- Establish baseline metrics
- Test core value propositions
- Find winning creative formats
- Identify best-performing audiences

**Q2 Focus: Optimization**
- Optimize winning campaigns
- Test variations of winners
- Expand successful audiences
- Improve conversion funnel

**Q3 Focus: Scale**
- Scale proven winners
- Test new channels
- Lookalike expansion
- Advanced targeting tests

**Q4 Focus: Efficiency**
- Maximize ROAS
- Test retention offers
- Holiday/seasonal messaging
- Annual planning based on learnings

---

## Test Documentation Template

```
TEST NAME: [Descriptive name]
DATE: [Start date] - [End date]
CHANNEL: [Platform/channel]
OBJECTIVE: [What you're trying to improve]

HYPOTHESIS:
We believe that [change]
Will result in [expected outcome]
Because [rationale]

CONTROL (A):
[Description of current/control]

VARIANT (B):
[Description of test variant]

VARIANT (C):
[If applicable]

SUCCESS METRICS:
Primary: [Main KPI]
Secondary: [Supporting KPIs]

SAMPLE SIZE:
Required: [Calculated sample size]
Achieved: [Actual sample size]

RESULTS:
Control: [Metric] = [Value] (n=[sample size])
Variant: [Metric] = [Value] (n=[sample size])
Lift: [Percentage change]
Confidence: [Statistical confidence level]
Winner: [Control or Variant]

LEARNINGS:
- [Key takeaway 1]
- [Key takeaway 2]
- [Key takeaway 3]

NEXT STEPS:
- [Action item 1]
- [Action item 2]

CREATIVE ASSETS:
[Links to creative files, screenshots, etc.]
```

---

This testing framework provides systematic approach to continuous improvement across all advertising channels, ensuring data-driven decision-making and compound performance gains over time.
