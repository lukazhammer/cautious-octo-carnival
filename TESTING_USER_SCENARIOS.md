# Brandora Test User Scenarios

This document defines comprehensive user journey scenarios for each tier. Use these scenarios to perform end-to-end testing of the complete user experience.

---

## Test User Accounts

Create the following test accounts in your testing environment:

| Test Account | Email | Tier | Purpose |
|--------------|-------|------|---------|
| Free User | test-free@brandora.test | Clarity Starter | Free tier journey testing |
| Market Fit Pro User | test-pro@brandora.test | Market Fit Pro | Mid-tier journey testing |
| Design Ready User | test-design@brandora.test | Design Ready | Full-tier journey testing |
| New User | test-new-[timestamp]@brandora.test | None | Fresh signup flow testing |

**Password for all test accounts:** `TestBrandora2024!`

---

## Scenario 1: Free User Complete Journey

### User Profile
- **Name:** Sarah Martinez
- **Business:** New wellness coaching business
- **Tier:** Clarity Starter (Free)
- **Goal:** Define basic brand foundations before launch

### Complete User Journey

#### Step 1: Discovery & Signup (Day 0)
**Actions:**
1. Visits brandora.com from Google search
2. Reads landing page, intrigued by free tier
3. Clicks "Start Free Assessment" CTA
4. Redirected to signup page

**Expected Behavior:**
- Landing page loads in < 3 seconds
- Free tier clearly highlighted
- CTA button visible above fold
- Signup form appears with fields: Email, Password, Confirm Password

**Test Email:** `sarah.free@brandora.test`

#### Step 2: Account Creation
**Actions:**
1. Enters email: sarah.free@brandora.test
2. Creates password: `WellnessCoach2024!`
3. Checks "I agree to Terms & Privacy Policy"
4. Clicks "Create Account"

**Expected Behavior:**
- Form validates in real-time (green checkmarks appear)
- Account created successfully
- Redirected to "Check your email" confirmation page
- Welcome email (01-welcome-email.html) sent within 1 minute

#### Step 3: Email Confirmation
**Actions:**
1. Opens email inbox
2. Clicks "Confirm Your Email" button in welcome email

**Expected Behavior:**
- Email received from noreply@brandora.com
- Email renders correctly in Gmail/Outlook
- Click redirects to brandora.com/auth/callback
- Success message: "Email confirmed! Let's assess your brand."
- Auto-redirect to assessment page

#### Step 4: Complete Assessment (Day 0)
**Actions:**
Answers all 13 questions:

**Brand Clarity Questions (1-4):**
1. Vision clarity: "Somewhat clear" (Score: 5/10)
2. Mission statement: "Not yet defined" (Score: 2/10)
3. Core values: "Have some ideas" (Score: 4/10)
4. Elevator pitch: "Need work" (Score: 3/10)

**Market Positioning Questions (5-8):**
5. Target audience: "Too broad" (Score: 3/10)
6. Unique value: "Unclear" (Score: 4/10)
7. Competitors: "Know a few" (Score: 5/10)
8. Positioning: "Not defined" (Score: 2/10)

**Audience Understanding Questions (9-13):**
9. Customer pain points: "Some understanding" (Score: 5/10)
10. Customer goals: "General idea" (Score: 4/10)
11. Where they hang out: "Not sure" (Score: 3/10)
12. Their language: "Need to research" (Score: 3/10)
13. Purchase decision: "Unclear" (Score: 3/10)

**Expected Behavior:**
- All 13 questions displayed one at a time OR on single scrollable page
- Progress indicator shows completion (e.g., "Question 5 of 13")
- Cannot submit until all answered
- Submit button enabled when complete

#### Step 5: View Assessment Results
**Actions:**
1. Clicks "View My Results"
2. Reviews scores on results page

**Expected Results Displayed:**
- **Brand Clarity:** 3.5/10 (average of Q1-4)
- **Market Positioning:** 3.5/10 (average of Q5-8)
- **Audience Understanding:** 3.6/10 (average of Q9-13)
- **Overall Score:** 3.5/10

**Page Content:**
- Score visualization (gauges or bars)
- Personalized recommendation: "Your brand needs foundational work. Start with defining your vision and mission."
- CTA: "Start Building Your Brand" (leads to Module 1)
- Assessment results email (02-assessment-results.html) sent

#### Step 6: Access Free Modules (Days 0-7)
**Actions:**
1. Clicks "Start Module 1: Vision Statement"
2. Works through vision framework
3. Inputs: "Empower women to live healthier, more balanced lives through personalized wellness coaching"
4. Waits 30 seconds (auto-save triggers)
5. Clicks "Save & Continue"

**Expected Behavior:**
- Module 1 content loads instantly
- Form fields are editable
- Auto-save indicator shows "Saving..." then "Saved at 3:42 PM"
- Progress bar updates: Module 1: 50% complete
- Can navigate away and return—content persisted

**Completes:**
- ✅ Module 1: Vision Statement
- ✅ Module 2: Mission Statement
- ✅ Module 3: Core Values (lists 5 values)
- ✅ Module 4: Elevator Pitch

**Dashboard Shows:**
- Progress: 100% (4 of 4 modules complete for free tier)
- Badge: "Clarity Starter Complete"
- Locked modules 5-12 shown with blur + lock icon

#### Step 7: Upgrade Prompts (Days 3, 7, 14)
**Day 3 Email:**
- Receives 05-upgrade-day-3.html
- Subject: "Ready to find your perfect customers?"
- Social proof: "Join 1,000+ founders who upgraded"
- CTA: "Unlock Market Fit Pro - $147"

**Actions:** Reads email, doesn't upgrade yet

**Day 7 Email:**
- Receives 06-upgrade-day-7.html
- Subject: "See how Emily found her niche in 3 days"
- Case study included
- CTA: "Get Market Fit Pro Today"

**Actions:** Still considering, doesn't upgrade

**Day 14 Email:**
- Receives 07-upgrade-day-14.html
- Subject: "Don't build in the dark—light the way to your audience"
- More direct messaging
- CTA: "Upgrade Now"

**Actions:** Decides to upgrade

#### Step 8: Upgrade to Market Fit Pro (Day 14)
**Actions:**
1. Clicks "Upgrade to Market Fit Pro" from email
2. Redirected to pricing page
3. Clicks "Choose Market Fit Pro - $147"
4. Stripe Checkout opens

**Payment Details:**
- Card: 4242 4242 4242 4242
- Expiry: 12/25
- CVC: 123
- ZIP: 94102

5. Clicks "Pay $147"

**Expected Behavior:**
- Stripe processes payment (test mode)
- Success page: "Welcome to Market Fit Pro!"
- Payment confirmation email sent (04-payment-confirmation.html)
- Redirected to dashboard
- Tier badge updates to "Market Fit Pro"
- Modules 5-8 now unlocked

#### Step 9: Continue Journey (Days 15-30)
**Actions:**
- Completes Modules 5-8 over next 2 weeks
- Exports PDF of complete strategy
- Uses content strategy to launch Instagram account

**Final State:**
- Tier: Market Fit Pro
- Modules Completed: 8/8 (100%)
- Exports Generated: 2 PDFs, 1 CSV
- Emails Received: 7 total (welcome, assessment, 3 nurture, upgrade confirmation, module completion)
- Status: Active, engaged user

---

## Scenario 2: Foundation Tier User (Market Fit Pro) Journey

### User Profile
- **Name:** Marcus Johnson
- **Business:** SaaS product for project managers
- **Tier:** Market Fit Pro (purchased upfront)
- **Goal:** Define target audience and positioning before building product

### Complete User Journey

#### Step 1: Signup & Immediate Purchase (Day 0)
**Actions:**
1. Discovers Brandora via ProductHunt
2. Reads landing page
3. Decides to skip free tier—wants complete audience/positioning tools
4. Clicks "Get Market Fit Pro - $147"
5. Sees signup form + Stripe checkout combined

**Expected Behavior:**
- Can purchase without creating account first
- Account created automatically after payment
- Email confirmation + payment confirmation sent together
- Immediately redirected to assessment (not modules)

#### Step 2: Complete Assessment (Day 0)
**Actions:**
Answers 13 questions with higher scores (average: 6.5/10)

**Results:**
- Brand Clarity: 7/10 (has some clarity)
- Market Positioning: 6/10 (needs refinement)
- Audience Understanding: 6.5/10 (general understanding)
- Overall: 6.5/10

**Personalized Recommendation:**
"You have a solid foundation! Focus on refining your target audience and positioning to stand out in the market."

#### Step 3: Module Progression (Days 0-14)
**Module Completion Timeline:**

| Day | Module | Time Spent | Status |
|-----|--------|-----------|--------|
| 0 | Module 1: Vision | 30 min | Complete |
| 0 | Module 2: Mission | 20 min | Complete |
| 1 | Module 3: Values | 25 min | Complete |
| 1 | Module 4: Elevator Pitch | 40 min | Complete |
| 3 | Module 5: Target Audience | 90 min | Complete |
| 5 | Module 6: Positioning | 60 min | Complete |
| 7 | Module 7: Key Messages | 45 min | Complete |
| 10 | Module 8: Content Strategy | 75 min | Complete |

**Expected Behavior:**
- Can access all 8 modules immediately after purchase
- Auto-save works on every module
- Progress tracked accurately
- Module completion email sent after Module 8 (03-module-completion.html)

#### Step 4: Export Strategy (Day 14)
**Actions:**
1. Clicks "Export Complete Strategy"
2. Selects "PDF" format
3. Downloads file

**Expected Export:**
- File: `Brandora-Complete-Strategy-2024-11-14.pdf`
- Size: ~2-3 MB
- Pages: 15-20 pages
- Contents:
  - Cover page with branding
  - Table of contents
  - All 8 modules with user inputs
  - Recommendations and next steps
  - Brandora footer on each page

#### Step 5: Consider Upgrade to Design Ready (Day 20)
**Actions:**
1. Receives targeted email: "Ready to bring your brand to life visually?"
2. Explores Design Ready features
3. Sees upgrade pricing: $350 (difference from $497 total)
4. Decides to wait until after product launch

**Expected Behavior:**
- Upgrade path clearly shown in dashboard
- Pricing correctly calculated ($350, not $497)
- Can upgrade anytime without losing progress
- No pressure, optional upsell

**Final State:**
- Tier: Market Fit Pro
- Modules Completed: 8/8
- Exports: 2 PDFs, 1 CSV
- Active user, high engagement

---

## Scenario 3: Complete Tier User (Design Ready) Journey

### User Profile
- **Name:** Priya Patel
- **Business:** Boutique sustainable fashion brand
- **Tier:** Design Ready (purchased upfront)
- **Goal:** Complete brand strategy + visual identity before hiring designer

### Complete User Journey

#### Step 1: Direct Purchase of Design Ready (Day 0)
**Actions:**
1. Referred by friend who used Brandora
2. Goes directly to pricing page
3. Clicks "Get Design Ready - $497"
4. Completes signup + payment in one flow

**Test Payment:**
- Card: 4242 4242 4242 4242
- Success

**Expected Behavior:**
- Account created with Design Ready tier
- All modules 1-12 unlocked immediately
- Welcome email + payment confirmation sent
- Onboarding checklist appears in dashboard

#### Step 2: Assessment (Day 0)
**Scores:**
- Brand Clarity: 8/10 (clear vision)
- Market Positioning: 7/10 (good positioning)
- Audience Understanding: 8.5/10 (knows her customers well)
- Overall: 7.8/10

**Recommendation:**
"Excellent foundation! You're ready to develop your visual identity and designer briefs."

#### Step 3: Rapid Module Completion (Days 0-7)
**Actions:**
Priya is highly motivated and completes all 12 modules in 1 week:

**Days 0-2:** Modules 1-4 (Foundation)
**Days 3-4:** Modules 5-8 (Market Fit)
**Days 5-7:** Modules 9-12 (Design Ready)

**Module 9: Visual Identity**
- Defines brand personality: Elegant, Sustainable, Empowering
- Selects mood board images
- Describes visual direction

**Module 10: Color & Typography**
- Primary colors: Earthy greens (#2D5016, #7A9E7E)
- Secondary: Warm neutrals (#F4E8D8)
- Typography: Serif for headers (elegant), Sans-serif for body (modern)

**Module 11: Designer Brief Templates**
- Fills out logo brief
- Business card brief
- Website brief
- Packaging brief

**Module 12: Brand Guidelines**
- Generates comprehensive brand guideline document
- Includes all elements from Modules 1-11
- 30-page PDF created

**Expected Behavior:**
- All modules accessible without restrictions
- Advanced features work: color pickers, image uploads, PDF generation
- Auto-save on every module
- Progress: 100% after Module 12

#### Step 4: Request Expert Review (Day 8)
**Actions:**
1. Clicks "Request Expert Review" in dashboard
2. Fills out form:
   - Industry: Fashion
   - Specific concerns: "Want feedback on positioning and visual identity"
   - Deadline: "Planning to hire designer in 2 weeks"
3. Submits request

**Expected Behavior:**
- Expert notified via internal system
- Priya receives confirmation email: "Expert review requested. Expect feedback in 3-5 business days."
- Status in dashboard: "Under Review"

#### Step 5: Receive Expert Feedback (Day 12)
**Expert Feedback Received:**
- Detailed review of brand strategy (3 pages)
- Specific suggestions for positioning refinement
- Visual identity feedback with examples
- Recommendations for designer brief improvements

**Actions:**
1. Reviews feedback
2. Makes adjustments to Module 6 (Positioning)
3. Updates Module 9 (Visual Identity) based on suggestions

**Expected Behavior:**
- Can edit modules after expert review
- Changes auto-saved
- Feedback stored in "Reviews" section for future reference

#### Step 6: Final Exports (Day 14)
**Actions:**
1. Exports complete brand strategy PDF (40 pages with all modules + expert feedback)
2. Exports designer brief package (ZIP file with all briefs)
3. Exports brand guidelines PDF (30 pages)
4. Exports assessment + module data CSV (for own records)

**Expected Files:**
- `Brandora-Complete-Strategy-PriyaPatel-2024-11-14.pdf` (40 pages)
- `Brandora-Designer-Briefs-2024-11-14.zip` (5 PDF files)
- `Brandora-Brand-Guidelines-2024-11-14.pdf` (30 pages)
- `Brandora-Data-Export-2024-11-14.csv`

**Expected Behavior:**
- All exports generated successfully
- PDFs professionally formatted
- ZIP file contains all briefs
- CSV properly formatted for Excel/Sheets

#### Step 7: Designer Collaboration (Day 15)
**Actions:**
1. Hires designer via Fiverr
2. Shares all exported PDFs with designer
3. Designer uses briefs to create logo, website mockups, packaging

**Outcome:**
- Designer delivers high-quality work using Brandora briefs
- Minimal revisions needed (clear direction provided)
- Priya extremely satisfied with result

**Final State:**
- Tier: Design Ready
- Modules: 12/12 complete (100%)
- Expert Review: Completed
- Exports: 4 files (3 PDFs, 1 ZIP, 1 CSV)
- Status: Successfully used Brandora to guide designer, happy customer

---

## Scenario 4: Professional Tier User (Expert Review Focus)

### User Profile
- **Name:** David Chen
- **Business:** B2B cybersecurity consulting
- **Tier:** Design Ready (for expert review)
- **Goal:** Validate brand strategy with expert before expensive rebranding

### Complete User Journey

#### Step 1: Strategic Purchase (Day 0)
**Motivation:**
- Planning $50K rebrand with agency
- Wants expert validation of strategy first
- Sees Design Ready expert review as low-cost insurance

**Actions:**
1. Purchases Design Ready tier specifically for expert review
2. Completes signup

#### Step 2: Focused Module Completion (Days 0-5)
**Actions:**
- Completes Modules 1-8 (Foundation + Market Fit) thoroughly
- Skips Modules 9-12 (Visual Identity) for now
- Focuses on strategy validation

**Expected Behavior:**
- Can request expert review even with only some modules complete
- System allows partial completion before review request

#### Step 3: Expert Review Request (Day 5)
**Actions:**
1. Requests expert review
2. Specifically asks:
   - "Is our positioning clear enough for enterprise buyers?"
   - "Do our key messages resonate with CISOs?"
   - "Should we narrow our target audience?"

**Expected Behavior:**
- Can add specific questions for expert
- Expert receives context about B2B/enterprise focus

#### Step 4: Expert Review with Iteration (Days 8-12)
**Day 8:** Receives initial expert feedback
- Suggestion to narrow positioning from "all businesses" to "mid-market SaaS companies"
- Refine messaging to address CISO pain points more directly

**Day 10:** David makes revisions based on feedback

**Day 12:** Requests second review (if allowed)
- Expert confirms improvements
- Gives green light for rebranding agency brief

**Expected Behavior:**
- Expert feedback is detailed and actionable
- Can iterate on modules after feedback
- Expert review turnaround: 3-5 business days

#### Step 5: Use Strategy with Agency (Day 15)
**Actions:**
1. Exports refined strategy
2. Shares with rebranding agency
3. Agency impressed with clarity and depth

**Outcome:**
- Agency quote reduced by $10K due to clear direction provided
- Brandora ROI: 20x ($497 → saved $10,000)

**Final State:**
- Tier: Design Ready
- Modules: 8/12 complete (focused on strategy, not design)
- Expert Review: 2 rounds completed
- Success: Validated strategy, saved money on agency work

---

## Scenario 5: User Upgrade Path (Free → Market Fit Pro → Design Ready)

### User Profile
- **Name:** Lisa Rodriguez
- **Business:** Online course creator (productivity for freelancers)
- **Tier:** Starts Free, upgrades twice
- **Timeline:** 30 days

### Complete Journey

#### Phase 1: Free Tier (Days 0-7)
1. Signs up for free
2. Completes assessment (Score: 5.5/10)
3. Completes Modules 1-4
4. Hits paywall at Module 5

#### Phase 2: First Upgrade to Market Fit Pro (Day 7)
1. Sees Module 5 (Target Audience) is locked
2. Realizes she needs positioning help
3. Receives Day 7 nurture email
4. Decides to upgrade to Market Fit Pro ($147)
5. Payment successful
6. Modules 5-8 unlocked

**Expected Behavior:**
- Previous progress (Modules 1-4) preserved
- Seamless transition to new tier
- No data loss
- Payment confirmation email sent

#### Phase 3: Market Fit Pro Usage (Days 8-21)
1. Completes Modules 5-8
2. Uses positioning to refine course offering
3. Sees improved sales from clearer messaging

#### Phase 4: Second Upgrade to Design Ready (Day 21)
1. Wants to create professional course branding
2. Sees "Upgrade to Design Ready for $350" (difference from $497)
3. Upgrades

**Expected Behavior:**
- Upgrade price correctly calculated: $350 (not full $497)
- Stripe payment: $350
- All modules 1-12 now accessible
- Progress from Modules 1-8 preserved

#### Phase 5: Design Ready Completion (Days 22-30)
1. Completes Modules 9-12
2. Requests expert review on visual identity
3. Exports complete brand package
4. Hires designer using briefs

**Final State:**
- Total Spent: $147 + $350 = $497 (same as if purchased Design Ready upfront)
- Modules: 12/12 complete
- Smooth upgrade path validated

---

## Testing Validation Checklist

For each scenario, verify:

### Functionality
- [ ] All module access permissions correct for tier
- [ ] Auto-save works in every module
- [ ] Progress tracking accurate
- [ ] Email sequence sends at correct times
- [ ] Exports generate correctly

### Data Integrity
- [ ] No data loss during upgrades
- [ ] Assessment scores calculated correctly
- [ ] Module completion tracked accurately
- [ ] User tier reflected correctly in database

### User Experience
- [ ] Smooth navigation between modules
- [ ] Clear upgrade prompts (not pushy)
- [ ] Professional email communications
- [ ] Helpful expert feedback
- [ ] Intuitive dashboard

### Business Logic
- [ ] Free tier appropriately limited
- [ ] Upgrade pricing calculated correctly
- [ ] Tier permissions enforced
- [ ] Payment webhooks process correctly
- [ ] Nurture emails stop after upgrade

---

## Performance Testing Scenarios

### Scenario 6: High-Volume User Activity

**Test Case:** 100 concurrent users
- 30 in assessment
- 40 filling out modules (auto-save triggering)
- 20 processing payments
- 10 generating PDF exports

**Expected Performance:**
- Page load times: < 2 seconds
- Auto-save response: < 500ms
- PDF generation: < 10 seconds
- Payment processing: < 5 seconds
- No database deadlocks
- No failed auto-saves

---

## Mobile User Scenario

### Scenario 7: Mobile-First User

**User:** Uses iPhone exclusively

**Journey:**
1. Discovers Brandora on mobile
2. Signs up via mobile Safari
3. Completes assessment on phone (13 questions with mobile-optimized inputs)
4. Receives email, clicks confirmation on phone
5. Completes Module 1 on phone during commute (auto-save critical!)
6. Switches to iPad for Modules 2-4 (session persists)
7. Completes payment on phone (Stripe mobile checkout)

**Expected Behavior:**
- Fully responsive design
- Mobile-optimized forms
- Stripe mobile checkout works perfectly
- Auto-save prevents data loss on mobile
- Can switch devices seamlessly (cloud-synced)

---

## Test Scenario Metrics

Track these metrics for each scenario:

| Metric | Target | Notes |
|--------|--------|-------|
| Time to Complete Signup | < 2 minutes | Including email confirmation |
| Time to Complete Assessment | < 10 minutes | All 13 questions |
| Time to Complete Module (avg) | 20-45 minutes | Varies by module |
| Auto-save Success Rate | > 99.9% | Critical for UX |
| Payment Success Rate | > 98% | (excluding declined cards) |
| Email Delivery Rate | > 99% | Via Brevo |
| PDF Export Success Rate | 100% | Must be reliable |

---

## Scenario Testing Sign-Off

- [ ] Scenario 1 (Free User) - Complete
- [ ] Scenario 2 (Market Fit Pro) - Complete
- [ ] Scenario 3 (Design Ready) - Complete
- [ ] Scenario 4 (Expert Review) - Complete
- [ ] Scenario 5 (Upgrade Path) - Complete
- [ ] Scenario 6 (Performance) - Complete
- [ ] Scenario 7 (Mobile) - Complete

**Tested By:** ___________________
**Date:** ___________________
**Environment:** ☐ Dev ☐ Staging ☐ Production
**Sign-Off:** ___________________
