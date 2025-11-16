# Zapier Integration Templates for Brandora

## Integration 1: Brandora → Notion

### Use Case: Create Notion database entry for new users

**Trigger**: New user signup in Brandora
**Action**: Create page in Notion database

**Setup Instructions**:
1. Connect Brandora webhook to Zapier
2. Add Notion "Create Database Item" action
3. Map fields from Brandora to Notion

**Field Mapping**:
```
Brandora Field → Notion Property
-----------------------------------
User Name → Name (Title)
Email → Email (Email)
Company → Company (Text)
Industry → Industry (Select)
Signup Date → Created (Date)
Plan Tier → Plan (Select)
Assessment Score → Score (Number)
Status → Status (Select: Active, Trial, Churned)
```

**Notion Database Structure**:
```json
{
  "properties": {
    "Name": { "type": "title" },
    "Email": { "type": "email" },
    "Company": { "type": "rich_text" },
    "Industry": {
      "type": "select",
      "options": ["SaaS", "E-commerce", "Consulting", "Other"]
    },
    "Created": { "type": "date" },
    "Plan": {
      "type": "select",
      "options": ["Free", "Basic", "Professional", "Enterprise"]
    },
    "Score": { "type": "number" },
    "Status": {
      "type": "select",
      "options": ["Active", "Trial", "Inactive", "Churned"]
    }
  }
}
```

**Zapier Configuration**:
```yaml
Name: New Brandora User → Notion
Trigger:
  App: Webhooks by Zapier
  Event: Catch Hook
  Webhook URL: https://hooks.zapier.com/hooks/catch/xxx/
Action:
  App: Notion
  Event: Create Database Item
  Database: Brandora Users
  Properties:
    Name: {{user.name}}
    Email: {{user.email}}
    Company: {{user.company}}
    Industry: {{user.industry}}
    Created: {{user.created_at}}
    Plan: {{user.plan_tier}}
    Score: {{user.assessment_score}}
    Status: Active
```

---

## Integration 2: Brandora → Slack

### Use Cases

#### 2a. New Signup Notification

**Trigger**: New user signs up
**Action**: Post to #sales channel

**Slack Message Template**:
```
🎉 New signup!

*Name*: {{user.name}}
*Email*: {{user.email}}
*Company*: {{user.company}}
*Industry*: {{user.industry}}
*Source*: {{user.referral_source}}

<{{admin_url}}|View Profile>
```

**Zapier Config**:
```yaml
Name: New Signup → Slack
Trigger:
  App: Webhooks
  Event: Catch Hook
Action:
  App: Slack
  Event: Send Channel Message
  Channel: #sales
  Message Text: |
    🎉 New signup!

    *Name*: {{user.name}}
    *Email*: {{user.email}}
    *Company*: {{user.company}}
    *Industry*: {{user.industry}}
    *Source*: {{user.referral_source}}

    <{{admin_url}}|View Profile>
  Bot Name: Brandora Bot
  Icon: :tada:
```

#### 2b. Payment Received Notification

**Trigger**: Payment successful (Stripe)
**Action**: Post to #revenue channel

**Slack Message**:
```
💰 New customer!

*Customer*: {{customer.name}}
*Plan*: {{subscription.plan}}
*Amount*: ${{amount}} / month
*MRR Impact*: +${{amount}}

Total MRR: ${{total_mrr}}

<{{admin_url}}|View Customer>
```

#### 2c. Support Ticket Alert

**Trigger**: High-priority support ticket created
**Action**: Post to #support channel with @mention

**Slack Message**:
```
🚨 High Priority Ticket

*From*: {{user.name}} ({{user.email}})
*Subject*: {{ticket.subject}}
*Priority*: HIGH
*Sentiment*: {{ticket.sentiment}}

*Issue*:
{{ticket.description}}

@support-team

<{{ticket_url}}|View Ticket>
```

---

## Integration 3: Brandora → Google Sheets

### Use Case: Log all assessments in spreadsheet

**Trigger**: Assessment completed
**Action**: Add row to Google Sheet

**Sheet Structure**:
```
| Date | User Name | Email | Industry | Score | Vision Score | Audience Score | Positioning Score | Plan |
```

**Zapier Config**:
```yaml
Name: Assessment → Google Sheets
Trigger:
  App: Webhooks
  Event: Catch Hook
Action:
  App: Google Sheets
  Event: Create Spreadsheet Row
  Spreadsheet: Brandora Assessments
  Worksheet: Assessments 2024
  Row Data:
    Date: {{assessment.completed_at}}
    User Name: {{user.name}}
    Email: {{user.email}}
    Industry: {{user.industry}}
    Overall Score: {{assessment.overall_score}}
    Vision Score: {{assessment.vision_score}}
    Audience Score: {{assessment.audience_score}}
    Positioning Score: {{assessment.positioning_score}}
    Current Plan: {{user.plan_tier}}
```

**Additional Use Cases**:
- Daily metrics snapshot
- Lead list export
- Revenue tracking
- Customer feedback log

---

## Integration 4: Brandora → Mailchimp

### Use Cases

#### 4a. Add New User to List

**Trigger**: User signs up
**Action**: Add to Mailchimp list with tags

**Zapier Config**:
```yaml
Name: New User → Mailchimp
Trigger:
  App: Webhooks
  Event: Catch Hook
Action:
  App: Mailchimp
  Event: Add/Update Subscriber
  Audience: Brandora Users
  Email: {{user.email}}
  Merge Fields:
    FNAME: {{user.first_name}}
    LNAME: {{user.last_name}}
    COMPANY: {{user.company}}
    INDUSTRY: {{user.industry}}
    PLAN: {{user.plan_tier}}
  Tags:
    - new_user
    - {{user.industry}}
    - {{user.plan_tier}}
  Status: subscribed
```

#### 4b. Tier Upgrade → Move Segment

**Trigger**: User upgrades plan
**Action**: Move to different Mailchimp segment and tag

**Actions**:
1. Remove tags: `free_user`
2. Add tags: `paid_customer`, `{{new_plan}}`
3. Update merge field: `PLAN`
4. Move to segment: `Paid Customers`

#### 4c. Activity-Based Tagging

**Trigger**: User completes module
**Action**: Add activity tag

**Tags to Add**:
- `module_1_complete`
- `module_2_complete`
- `engaged_user`
- `ready_for_upsell`

---

## Integration 5: Brandora → HubSpot

### Use Cases

#### 5a. Sync User Data to HubSpot CRM

**Trigger**: New user or user updated
**Action**: Create/Update contact in HubSpot

**HubSpot Contact Properties**:
```yaml
Email: {{user.email}}
First Name: {{user.first_name}}
Last Name: {{user.last_name}}
Company: {{user.company}}
Industry: {{user.industry}}
Website: {{user.website}}
Phone: {{user.phone}}

# Custom Properties
Brandora Plan: {{user.plan_tier}}
Assessment Score: {{user.assessment_score}}
Signup Date: {{user.created_at}}
Last Active: {{user.last_active_at}}
Modules Completed: {{user.modules_completed}}
Lifecycle Stage: {{user.lifecycle_stage}}
```

**Lifecycle Stage Mapping**:
```
Brandora Status → HubSpot Lifecycle
--------------------------------------
Signed up → Subscriber
Assessment complete → Lead
Trial started → Marketing Qualified Lead
High engagement → Sales Qualified Lead
Paid customer → Customer
```

#### 5b. Lead Scoring Integration

**Trigger**: User activity or milestone
**Action**: Update HubSpot contact score

**Scoring Rules**:
```javascript
// Points to add in HubSpot
const scoringEvents = {
  'assessment_completed': +10,
  'module_completed': +5,
  'trial_started': +20,
  'pricing_page_visit': +15,
  'demo_requested': +30,
  'email_opened': +1,
  'email_clicked': +3,
}
```

#### 5c. Create Deal on High Intent

**Trigger**: User becomes sales-qualified (score > 80)
**Action**: Create deal in HubSpot

**Deal Properties**:
```yaml
Deal Name: {{user.company}} - Brandora {{plan}}
Amount: {{estimated_annual_value}}
Close Date: {{estimated_close_date}}
Deal Stage: SQL
Deal Owner: {{assigned_sales_rep}}
Pipeline: Brandora Sales
```

---

## Integration 6: Brandora → Airtable

### Use Case: Product roadmap voting

**Trigger**: User submits feature request
**Action**: Add to Airtable product roadmap base

**Airtable Fields**:
```
Feature Name: {{request.feature_name}}
Description: {{request.description}}
Requested By: {{user.name}} ({{user.email}})
User Plan: {{user.plan_tier}}
Votes: 1
Priority Score: {{calculated_score}}
Status: Under Review
Category: {{request.category}}
Date Requested: {{request.date}}
```

---

## Integration 7: Brandora → Google Calendar

### Use Case: Schedule QBR meetings automatically

**Trigger**: 90 days after subscription start
**Action**: Create calendar event and send invite

**Calendar Event**:
```yaml
Title: Quarterly Business Review - {{customer.name}}
Description: |
  Quarterly review for {{customer.name}}

  Agenda:
  - Review progress and usage
  - Discuss wins and challenges
  - Explore opportunities
  - Plan next quarter

  Prepare: Customer usage report
Date: {{subscription_date + 90 days}}
Duration: 30 minutes
Attendees:
  - {{customer.email}}
  - {{csm.email}}
  - {{account_manager.email}}
Location: Zoom (link auto-generated)
```

---

## Integration 8: Brandora → Typeform

### Use Case: Trigger feedback survey after milestone

**Trigger**: User completes all modules
**Action**: Send Typeform survey

**Typeform Questions**:
1. How would you rate your Brandora experience? (1-10)
2. What was most valuable?
3. What could we improve?
4. Would you recommend Brandora? (Yes/No)
5. May we use your feedback as a testimonial? (Yes/No)

**Follow-up Actions** (based on responses):
- Score 9-10: Request testimonial
- Score 0-6: Alert customer success
- Willing to recommend: Request review
- Improvement suggestions: Add to product backlog

---

## Integration 9: Brandora → Zapier Storage / SQL

### Use Case: Data warehouse for analytics

**Trigger**: Any significant event
**Action**: Log to data warehouse

**Events to Track**:
- User signups
- Assessments completed
- Payments received
- Modules completed
- Support tickets
- Feature usage
- Churn events

**Schema Example**:
```sql
CREATE TABLE events (
  id UUID PRIMARY KEY,
  event_type VARCHAR(50),
  user_id UUID,
  timestamp TIMESTAMP,
  properties JSONB,
  metadata JSONB
);

-- Index for fast queries
CREATE INDEX idx_events_type ON events(event_type);
CREATE INDEX idx_events_user ON events(user_id);
CREATE INDEX idx_events_timestamp ON events(timestamp);
```

---

## Integration 10: Multi-Step Workflows

### Workflow Example: Complete Onboarding Automation

**Trigger**: New user signs up

**Steps**:
1. **Delay** (1 hour)
2. **Check**: Has user started assessment?
   - Yes: End
   - No: Continue
3. **Send Email** (Brevo): Reminder to start
4. **Delay** (24 hours)
5. **Check**: Has user started assessment?
   - Yes: End
   - No: Continue
6. **Send Email** (Brevo): Special offer + help
7. **Create Task** (Notion): CSM to reach out
8. **Alert** (Slack): User needs help

**Zapier Paths Configuration**:
```yaml
Name: Smart Onboarding Nudge
Trigger: Webhook
Steps:
  1_delay:
    action: Delay
    time: 1 hour

  2_filter:
    action: Filter
    condition: assessment_status = "not_started"

  3_email:
    action: Brevo - Send Email
    template: assessment_reminder_1

  4_delay:
    action: Delay
    time: 24 hours

  5_filter:
    action: Filter
    condition: assessment_status = "not_started"

  6_paths:
    path_a:
      filter: user_value_score > 70
      actions:
        - Send high-value email
        - Create Notion task
        - Alert Slack
    path_b:
      filter: user_value_score <= 70
      actions:
        - Send standard email
        - Add to re-engagement campaign
```

---

## Setup Guide

### 1. Create Webhook Endpoints in Brandora

```javascript
// Example webhook implementation
const ZAPIER_WEBHOOKS = {
  newUser: process.env.ZAPIER_NEW_USER_WEBHOOK,
  assessmentComplete: process.env.ZAPIER_ASSESSMENT_WEBHOOK,
  paymentReceived: process.env.ZAPIER_PAYMENT_WEBHOOK,
  moduleComplete: process.env.ZAPIER_MODULE_WEBHOOK,
};

async function triggerZapier(event, data) {
  const webhookUrl = ZAPIER_WEBHOOKS[event];
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(`Zapier webhook failed for ${event}:`, error);
    // Add to retry queue
  }
}

// Usage
await triggerZapier('newUser', {
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    // ... other data
  },
  timestamp: new Date().toISOString(),
});
```

### 2. Test Your Zaps

**Testing Checklist**:
- [ ] Test with sample data
- [ ] Verify field mapping
- [ ] Check error handling
- [ ] Test edge cases (missing data, special characters)
- [ ] Verify timing/delays work correctly
- [ ] Check rate limits and quotas
- [ ] Monitor first real triggers
- [ ] Set up error notifications

### 3. Monitor and Maintain

**Monitoring**:
- Enable Zap history
- Set up error email notifications
- Check Zap run success rate weekly
- Review and optimize slow Zaps
- Update when Brandora data structure changes

**Best Practices**:
- Use filters to avoid unnecessary runs
- Add delays to avoid rate limits
- Include error paths in multi-step Zaps
- Document each Zap's purpose
- Name Zaps clearly
- Use folders to organize
- Regular audit unused Zaps

---

## Zapier Alternatives

### Make.com (Integromat)
- More complex workflows
- Visual workflow builder
- Better for conditional logic
- Lower cost for high volume

### N8n (Self-hosted)
- Open source
- Full control
- No per-task pricing
- Requires technical setup

### Custom Webhooks
- Most flexible
- No third-party dependency
- Requires development
- Best for complex needs

---

## Cost Optimization

### Zapier Pricing Tiers

**Free**: 100 tasks/month
**Starter**: $19.99/mo - 750 tasks
**Professional**: $49/mo - 2,000 tasks
**Team**: $299/mo - 50,000 tasks

### Optimization Tips

1. **Combine Webhooks**: Send multiple events in one payload
2. **Filter Early**: Use filters before expensive actions
3. **Batch Updates**: Update Google Sheets in batches
4. **Cache Lookups**: Don't look up same data repeatedly
5. **Use Native Integrations**: Direct API calls for high-volume
6. **Schedule Low-Priority**: Use schedule triggers for non-urgent tasks
7. **Audit Regularly**: Disable unused Zaps

### When to Use vs. Custom Code

**Use Zapier when**:
- Quick setup needed
- Simple workflows
- No developer time
- Low volume (<10k/month)
- Connecting popular apps

**Build custom when**:
- Complex logic required
- High volume (cost savings)
- Need full control
- Custom apps/databases
- Performance critical
- Data privacy concerns
