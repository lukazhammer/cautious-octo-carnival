# Analytics Tracking Plan

## Overview

This document defines every event, property, and user attribute tracked in Brandora's analytics system.

---

## Event Taxonomy

### Naming Convention

**Format:** `Object` + `Action`
- Examples: `Module Started`, `PDF Exported`, `Subscription Upgraded`
- Use Title Case
- Be specific and descriptive
- Use past tense for completed actions

---

## Core Events (100+ events)

### 1. User Lifecycle Events

#### `User Signed Up`
**When:** User creates account
**Properties:**
- `user_id` (string, required)
- `email` (string, required)
- `signup_method` (string): 'email' | 'google' | 'linkedin'
- `utm_source` (string)
- `utm_medium` (string)
- `utm_campaign` (string)
- `referrer_url` (string)
- `landing_page` (string)
**Tracked In:** Frontend (signup form submission)

#### `User Logged In`
**When:** Successful login
**Properties:**
- `user_id` (string, required)
- `login_method` (string): 'email' | 'google' | 'linkedin' | 'remember_me'
- `days_since_last_login` (integer)
- `login_count` (integer): Total logins for this user
**Tracked In:** Frontend (login success)

#### `Email Verified`
**When:** User verifies email address
**Properties:**
- `user_id` (string, required)
- `time_to_verify_minutes` (integer): Time from signup to verification
**Tracked In:** Backend (email verification endpoint)

### 2. Onboarding Events

#### `Onboarding Started`
**When:** User begins onboarding flow
**Properties:**
- `user_id` (string, required)
- `onboarding_version` (string): A/B test variant
- `time_since_signup_minutes` (integer)
**Tracked In:** Frontend

#### `Onboarding Step Completed`
**When:** User completes each onboarding step
**Properties:**
- `user_id` (string, required)
- `step_number` (integer): 1-7
- `step_name` (string): e.g., 'profile_completion'
- `time_on_step_seconds` (integer)
**Tracked In:** Frontend

#### `Onboarding Completed`
**When:** User completes full onboarding
**Properties:**
- `user_id` (string, required)
- `total_time_minutes` (integer)
- `steps_skipped` (array): List of skipped steps
**Tracked In:** Frontend

### 3. Assessment Events

#### `Assessment Started`
**When:** User starts brand assessment
**Properties:**
- `user_id` (string, required)
- `assessment_type` (string): 'full' | 'quick'
- `entry_point` (string): Where they started from
**Tracked In:** Frontend

#### `Assessment Section Completed`
**When:** User completes each assessment section
**Properties:**
- `user_id` (string, required)
- `section_number` (integer): 1-13
- `section_name` (string)
- `answers_count` (integer)
- `time_spent_seconds` (integer)
**Tracked In:** Frontend

#### `Assessment Completed`
**When:** User finishes full assessment
**Properties:**
- `user_id` (string, required)
- `total_score` (integer): 0-100
- `category_scores` (object): Scores by category
- `total_time_minutes` (integer)
- `completion_rate` (float): % of questions answered
**Tracked In:** Frontend

### 4. Module Events

#### `Module Started`
**When:** User begins any brand module
**Properties:**
- `user_id` (string, required)
- `module_id` (string)
- `module_name` (string)
- `module_number` (integer): 1-13
- `entry_point` (string)
**Tracked In:** Frontend

#### `Module Section Completed`
**When:** User completes section within module
**Properties:**
- `user_id` (string, required)
- `module_id` (string)
- `section_number` (integer)
- `time_spent_seconds` (integer)
**Tracked In:** Frontend

#### `Module Saved`
**When:** User saves progress
**Properties:**
- `user_id` (string, required)
- `module_id` (string)
- `progress_percentage` (float)
- `auto_save` (boolean)
**Tracked In:** Frontend

#### `Module Completed`
**When:** User finishes module (100% complete)
**Properties:**
- `user_id` (string, required)
- `module_id` (string)
- `module_name` (string)
- `total_time_minutes` (integer)
- `sessions_count` (integer): How many sessions to complete
- `completion_method` (string): 'linear' | 'non_linear'
**Tracked In:** Frontend

### 5. Export Events

#### `PDF Exported`
**When:** User exports PDF deliverable
**Properties:**
- `user_id` (string, required)
- `export_type` (string): 'module' | 'guidelines' | 'full_strategy'
- `module_ids` (array): Modules included
- `pages_count` (integer)
**Tracked In:** Backend (PDF generation)

#### `Export Downloaded`
**When:** PDF download completes
**Properties:**
- `user_id` (string, required)
- `export_id` (string)
- `file_size_mb` (float)
**Tracked In:** Frontend

### 6. Collaboration Events

#### `Team Member Invited`
**When:** User invites team member
**Properties:**
- `user_id` (string, required)
- `invitee_email` (string)
- `role` (string): 'editor' | 'viewer'
**Tracked In:** Backend

#### `Team Member Joined`
**When:** Invited member accepts
**Properties:**
- `user_id` (string): New member
- `inviter_id` (string)
- `time_to_accept_hours` (integer)
**Tracked In:** Backend

### 7. Monetization Events

#### `Pricing Page Viewed`
**When:** User views pricing page
**Properties:**
- `user_id` (string, optional if not logged in)
- `referrer_page` (string)
- `time_on_page_seconds` (integer)
- `tiers_compared` (array): Which tiers viewed
**Tracked In:** Frontend

#### `Checkout Started`
**When:** User begins checkout flow
**Properties:**
- `user_id` (string, required)
- `tier` (string): 'foundation' | 'complete' | 'professional'
- `billing_period` (string): 'monthly' | 'annual'
- `price` (float)
- `currency` (string): 'USD'
**Tracked In:** Frontend

#### `Payment Info Entered`
**When:** Payment details submitted
**Properties:**
- `user_id` (string, required)
- `payment_method` (string): 'card' | 'paypal'
**Tracked In:** Frontend

#### `Purchase Completed`
**When:** Payment successful
**Properties:**
- `user_id` (string, required)
- `transaction_id` (string)
- `tier` (string)
- `billing_period` (string)
- `amount` (float)
- `currency` (string)
- `discount_code` (string, optional)
- `discount_amount` (float, optional)
**Tracked In:** Backend (Stripe webhook)

#### `Subscription Upgraded`
**When:** User upgrades tier
**Properties:**
- `user_id` (string, required)
- `from_tier` (string)
- `to_tier` (string)
- `mrr_change` (float)
**Tracked In:** Backend

#### `Subscription Downgraded`
**When:** User downgrades tier
**Properties:**
- `user_id` (string, required)
- `from_tier` (string)
- `to_tier` (string)
- `mrr_change` (float)
- `reason` (string, optional)
**Tracked In:** Backend

#### `Subscription Cancelled`
**When:** User cancels subscription
**Properties:**
- `user_id` (string, required)
- `tier` (string)
- `mrr_lost` (float)
- `reason` (string, from exit survey)
- `lifetime_days` (integer)
- `ltv` (float)
**Tracked In:** Backend

---

## User Properties

### Set on Signup
- `user_id` (string, unique)
- `email` (string)
- `signup_date` (datetime)
- `signup_method` (string)
- `utm_source` (string)
- `utm_medium` (string)
- `utm_campaign` (string)
- `initial_landing_page` (string)

### Update Continuously
- `current_tier` (string): 'free' | 'foundation' | 'complete' | 'professional'
- `billing_period` (string): 'monthly' | 'annual' | null
- `mrr` (float)
- `ltv` (float): Calculated lifetime value
- `days_since_signup` (integer)
- `total_logins` (integer)
- `last_login_date` (datetime)
- `modules_completed` (integer)
- `modules_in_progress` (integer)
- `assessment_completed` (boolean)
- `assessment_score` (integer)
- `pdfs_exported` (integer)
- `team_size` (integer)
- `activation_date` (datetime)
- `is_activated` (boolean)
- `health_score` (integer): 0-100
- `nps_score` (integer): 0-10, null if not surveyed
- `churn_risk` (string): 'low' | 'medium' | 'high'

---

## Event Properties (Global)

Included in EVERY event:

- `event_timestamp` (datetime)
- `user_id` (string, if logged in)
- `session_id` (string)
- `device_type` (string): 'desktop' | 'mobile' | 'tablet'
- `browser` (string)
- `os` (string)
- `screen_resolution` (string)
- `page_url` (string)
- `referrer_url` (string)
- `ip_address` (string, anonymized)
- `country` (string)
- `city` (string)
- `app_version` (string)

---

## Implementation Code Examples

### Frontend (JavaScript/React)

```javascript
// Initialize analytics
import analytics from '@segment/analytics-next'

analytics.load({ writeKey: 'YOUR_WRITE_KEY' })

// Track event
analytics.track('Module Started', {
  module_id: 'brand-purpose',
  module_name: 'Brand Purpose',
  module_number: 1,
  entry_point: 'dashboard'
})

// Identify user
analytics.identify(userId, {
  email: user.email,
  current_tier: user.tier,
  signup_date: user.signupDate
})

// Page view
analytics.page('Pricing', {
  title: 'Pricing - Brandora',
  url: window.location.href
})
```

### Backend (Node.js)

```javascript
const Analytics = require('analytics-node')
const analytics = new Analytics('YOUR_WRITE_KEY')

// Track server-side event
analytics.track({
  userId: user.id,
  event: 'Purchase Completed',
  properties: {
    transaction_id: charge.id,
    tier: 'complete',
    billing_period: 'annual',
    amount: 450.00,
    currency: 'USD'
  }
})
```

---

## Data Validation

### Required Fields
All events MUST include:
- Event name
- Timestamp
- User ID (if logged in)
- Session ID

### Data Types
- Strictly enforce data types
- Use enums for categorical data
- Validate ranges for numeric data

### Quality Checks
- Monitor event volume daily
- Check for missing properties
- Validate against schema
- Alert on anomalies

---

## GDPR & Privacy

### PII Handling
- Email: Hashed before storage
- IP: Anonymized (last octet removed)
- Location: City-level only (no precise coordinates)

### User Rights
- Data export: Available in user settings
- Data deletion: Permanent removal within 30 days
- Opt-out: Analytics tracking can be disabled

### Consent
- Cookie consent required (EU users)
- Tracking notice in ToS
- Analytics opt-out link in footer

---

## Testing & QA

### Before Launch
✅ Event fires correctly
✅ All properties included
✅ Data types correct
✅ Shows in debugger
✅ Appears in dashboard

### Validation Tools
- Segment Debugger
- Amplitude Debugger
- Google Tag Assistant
- Browser DevTools

---

**Version:** 1.0
**Last Updated:** November 2024
**Owner:** Analytics Team
**Review:** Quarterly
