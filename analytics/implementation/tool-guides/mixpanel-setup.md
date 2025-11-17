# Mixpanel Setup Guide

## Installation

### 1. Create Project
1. Go to [Mixpanel](https://mixpanel.com/)
2. Create Project: "Brandora"
3. Copy Project Token

### 2. Install SDK

```bash
npm install mixpanel-browser
```

```javascript
// Initialize
import mixpanel from 'mixpanel-browser';
mixpanel.init('YOUR_PROJECT_TOKEN');

// Track event
mixpanel.track('Module Started', {
  module_name: 'Brand Purpose',
  module_id: 'brand-purpose'
});

// Identify user
mixpanel.identify(userId);
mixpanel.people.set({
  '$email': user.email,
  'tier': user.tier,
  'signup_date': user.signupDate
});
```

## Key Features

### Funnels
Create funnels for:
- Signup → Activation
- Free → Paid conversion
- Module completion

### Cohorts
Define cohorts:
- Activated users
- Power users (top 20%)
- At-risk users

### Retention
Track retention for:
- 7-day retention by cohort
- Feature retention
- Tier retention

