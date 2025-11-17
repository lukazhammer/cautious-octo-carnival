# User Onboarding Automation Workflows

## Workflow 1: New User Signup

**Trigger**: User completes signup form

**Actions**:
1. Send welcome email (Brevo/SendinBlue)
   - Subject: "Welcome to Brandora! Let's build your brand 🚀"
   - Content: Welcome message, what to expect, link to dashboard
   - CTA: "Start Your Free Assessment"

2. Create user profile (Supabase)
   - Initialize user record
   - Set default preferences
   - Create empty brand workspace

3. Initialize free brand assessment
   - Create assessment record
   - Set status to "not_started"
   - Generate unique assessment URL

4. Add to email nurture sequence (Brevo)
   - Tag: "new_user"
   - List: "Free Users - Onboarding"
   - Start Day 0 nurture sequence

5. Notify sales team (Slack)
   - Channel: #new-signups
   - Message: "New user: [Name] ([Email]) - Industry: [Industry]"
   - Include: Link to admin view of user

6. Track event (Analytics)
   - Event: "user_signup"
   - Properties: referral_source, industry, company_size
   - User ID: [user_id]

**Tools Required**: Brevo API, Supabase, Slack Webhook, Analytics

**Success Metrics**:
- Welcome email open rate
- Assessment start rate (within 24 hours)
- Time from signup to first action

---

## Workflow 2: Assessment Completed

**Trigger**: User completes brand assessment

**Actions**:
1. Calculate assessment scores (Perplexity AI + Custom Logic)
   - Aggregate responses
   - Calculate section scores
   - Identify strengths and weaknesses
   - Generate overall brand health score

2. Generate AI insights (Perplexity AI)
   - Analyze assessment responses
   - Identify top 3 priorities
   - Generate personalized recommendations
   - Create industry-specific insights

3. Send results email (Brevo)
   - Subject: "Your Brand Assessment Results are Ready!"
   - Include: Overall score, key insights preview
   - CTA: "View Full Results"
   - Attachment: PDF summary (if available)

4. Create upgrade campaign trigger (Brevo)
   - Tag: "assessment_completed"
   - Remove from: "Onboarding" sequence
   - Add to: "Assessment Complete" nurture
   - Schedule: Upgrade offer email in 2 days

5. Update user profile (Supabase)
   - Set assessment_status to "completed"
   - Store assessment_score
   - Update user_stage to "assessed"
   - Record completion_date

6. Update CRM (HubSpot - if integrated)
   - Update contact property: assessment_score
   - Add to list: "Hot Leads" (if score < 50)
   - Create task for sales: Follow up with high-intent users

7. Track event (Analytics)
   - Event: "assessment_completed"
   - Properties: score, completion_time, industry
   - Identify conversion path

**Tools Required**: Perplexity API, Brevo, Supabase, HubSpot API, Analytics

**Success Metrics**:
- Assessment completion rate
- Results email open rate
- Upgrade conversion within 7 days

---

## Workflow 3: Payment Received (Free → Paid)

**Trigger**: Stripe webhook "payment_intent.succeeded"

**Actions**:
1. Upgrade user tier (Supabase)
   - Update subscription_tier
   - Set subscription_status to "active"
   - Record subscription_start_date
   - Unlock all modules and features

2. Send confirmation email (Brevo)
   - Subject: "Welcome to Brandora [Plan Name]! 🎉"
   - Content: Thank you, what's unlocked, next steps
   - Include: Invoice, Getting Started Guide
   - CTA: "Start Module 1"

3. Create invoice (Stripe)
   - Generate PDF invoice
   - Email to customer
   - Store in customer portal

4. Unlock modules (Supabase)
   - Set module_access for all purchased modules
   - Initialize module progress tracking
   - Create module completion checklist

5. Trigger onboarding sequence (Brevo)
   - Remove from: Free user lists
   - Add to: "Paid Customers - Onboarding"
   - Send Day 0: Welcome and orientation
   - Schedule ongoing education emails

6. Notify team (Slack)
   - Channel: #revenue
   - Message: "💰 New customer: [Name] - Plan: [Plan] - MRR: $[Amount]"
   - Include: Link to customer profile

7. Update CRM (HubSpot)
   - Move to: "Customer" lifecycle stage
   - Create deal: Closed-Won
   - Calculate: Customer Lifetime Value
   - Add to: Customer success queue

8. Send to founder (if high-value)
   - If MRR > $100: Email notification to founder
   - Personalized thank you opportunity

9. Track event (Analytics)
   - Event: "subscription_created"
   - Properties: plan, amount, trial_conversion
   - Revenue tracking

**Tools Required**: Stripe, Supabase, Brevo, Slack, HubSpot, Analytics

**Success Metrics**:
- Payment success rate
- Onboarding email engagement
- Module 1 start rate (within 48 hours)

---

## Workflow 4: Trial Started

**Trigger**: User starts free trial

**Actions**:
1. Unlock trial access (Supabase)
   - Set trial_status to "active"
   - Set trial_end_date (+14 days)
   - Unlock trial features

2. Send trial welcome email (Brevo)
   - Subject: "Your 14-Day Brandora Trial Starts Now!"
   - Content: What's included, how to get value, support
   - CTA: "Build Your Brand Strategy"

3. Start trial nurture sequence (Brevo)
   - Day 0: Welcome and setup
   - Day 2: Tips for success
   - Day 5: Feature spotlight
   - Day 8: Case study / social proof
   - Day 11: Last chance to save
   - Day 13: Final reminder, special offer
   - Day 14: Trial expired, convert offer

4. Create trial calendar reminders
   - Day 7: Halfway reminder
   - Day 12: Almost over reminder
   - Day 14: Trial ending reminder

5. Track trial metrics (Supabase)
   - Log trial start
   - Track feature usage during trial
   - Calculate engagement score

6. Notify sales (Slack)
   - Channel: #trials
   - Message: "New trial: [Name] - [Plan]"

7. Track event (Analytics)
   - Event: "trial_started"
   - Properties: plan, source, industry

**Tools Required**: Supabase, Brevo, Slack, Analytics

**Success Metrics**:
- Trial activation rate (% who use product)
- Trial conversion rate
- Average engagement during trial

---

## Workflow 5: Onboarding Milestone Reached

**Trigger**: User completes onboarding milestone (e.g., adds logo, completes profile, creates first brand element)

**Actions**:
1. Send congratulations email (Brevo)
   - Subject: "Great progress! Here's what's next..."
   - Celebrate accomplishment
   - Suggest next step
   - CTA: Continue to next milestone

2. Update progress tracking (Supabase)
   - Mark milestone as complete
   - Calculate overall completion %
   - Update user_onboarding_status

3. Unlock achievement/badge (if gamified)
   - Award badge
   - Show in-app notification
   - Update user profile

4. Track event (Analytics)
   - Event: "milestone_completed"
   - Properties: milestone_name, time_to_complete, user_tenure

5. Personalize next step
   - Based on completed milestone
   - Recommend relevant content or module
   - Send targeted tips

**Tools Required**: Brevo, Supabase, Analytics

**Success Metrics**:
- Milestone completion rates
- Time to each milestone
- Impact on retention

---

## Workflow 6: Onboarding Abandoned

**Trigger**: User signed up but no activity for 7 days

**Actions**:
1. Send re-engagement email (Brevo)
   - Subject: "Need help getting started?"
   - Content: We noticed you haven't started, offer help
   - Include: Quick start guide, video tutorial
   - CTA: "Get Started in 5 Minutes"

2. Tag for special attention (Brevo)
   - Tag: "onboarding_abandoned"
   - Trigger: Recovery sequence

3. Notify customer success (Slack - if high-value lead)
   - Personal outreach for qualified leads
   - Offer: 1-on-1 onboarding call

4. Survey (optional)
   - Ask: What's preventing you from starting?
   - Identify: Common blockers
   - Improve: Onboarding based on feedback

5. Track event (Analytics)
   - Event: "onboarding_abandoned"
   - Properties: signup_source, industry, days_inactive

**Tools Required**: Brevo, Slack, Survey Tool, Analytics

**Success Metrics**:
- Re-engagement rate
- Recovery to active use
- Churn rate of abandoned users

---

## Email Sequence Templates

### Welcome Email (Day 0)
```
Subject: Welcome to Brandora! Let's build your brand 🚀

Hi [First Name],

Welcome to Brandora! We're excited to help you build a powerful, authentic brand.

Here's what happens next:

1. Take your free brand assessment (5 minutes)
   → Discover exactly where your brand stands
   → Get personalized recommendations
   → Identify your biggest opportunities

2. Get your results + action plan
   → Detailed analysis of your brand
   → Step-by-step roadmap
   → Industry-specific insights

3. Start building your brand strategy
   → Guided modules and templates
   → AI-powered assistance
   → Expert frameworks

[CTA BUTTON: Start Your Free Assessment]

Need help? Just reply to this email.

To your success,
[Your Name]
The Brandora Team

P.S. The free assessment takes just 5 minutes and gives you immediate insights. Start now!
```

### Trial Welcome Email
```
Subject: Your 14-Day Brandora Trial Starts Now!

Hi [First Name],

Your 14-day trial of Brandora [Plan] is officially live! 🎉

You now have full access to:
✓ All brand strategy modules
✓ AI-powered insights and recommendations
✓ Professional templates and frameworks
✓ Downloadable brand assets
✓ [Other plan features]

Here's how to get the most value:

Day 1-3: Foundation
→ Complete your brand assessment
→ Define your vision and values
→ Identify your target audience

Day 4-7: Strategy
→ Develop your positioning
→ Craft your value proposition
→ Create your messaging framework

Day 8-14: Implementation
→ Build your visual identity
→ Create your content strategy
→ Plan your launch

[CTA BUTTON: Start Module 1]

Your trial ends on [Date]. No credit card required until you decide to continue.

Questions? We're here to help!

Best,
[Your Name]

P.S. Check out our Quick Start Guide for the fastest path to a complete brand strategy.
```

---

## Automation Setup Checklist

### Brevo/SendinBlue Setup
- [ ] Create email templates for all sequences
- [ ] Set up automation workflows
- [ ] Create contact lists and segments
- [ ] Configure API access
- [ ] Test webhook connections

### Supabase Setup
- [ ] Create user tables and relationships
- [ ] Set up database functions for automation
- [ ] Configure RLS policies
- [ ] Create API endpoints
- [ ] Set up real-time subscriptions

### Stripe Setup
- [ ] Configure webhook endpoints
- [ ] Create products and pricing
- [ ] Set up customer portal
- [ ] Configure tax settings
- [ ] Test payment flows

### Slack Setup
- [ ] Create channels for notifications
- [ ] Set up incoming webhooks
- [ ] Configure notification formatting
- [ ] Test message delivery
- [ ] Set up escalation rules

### Analytics Setup
- [ ] Implement event tracking
- [ ] Create conversion funnels
- [ ] Set up user properties
- [ ] Configure cohort analysis
- [ ] Create dashboards

---

## Monitoring & Optimization

### Key Metrics to Track
- Signup to assessment completion rate
- Assessment to paid conversion rate
- Trial activation rate
- Trial to paid conversion rate
- Time to first value
- Onboarding completion rate
- Email engagement rates
- Feature adoption rates

### Optimization Opportunities
- A/B test email subject lines and content
- Optimize email send timing
- Test different milestone sequences
- Personalize based on industry/role
- Adjust trial length based on engagement
- Identify and fix drop-off points
- Improve highest-impact touchpoints

### Monthly Review
- Review conversion funnel metrics
- Identify bottlenecks and leaks
- Test new sequences or messaging
- Update based on user feedback
- Benchmark against goals
- Share learnings with team
