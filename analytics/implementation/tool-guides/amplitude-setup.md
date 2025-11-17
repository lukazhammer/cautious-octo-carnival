# Amplitude Setup Guide

## Installation

### 1. Create Project
1. Go to [Amplitude](https://amplitude.com/)
2. Create Project: "Brandora"
3. Copy API Key

### 2. Install SDK

```bash
npm install @amplitude/analytics-browser
```

```javascript
// Initialize
import * as amplitude from '@amplitude/analytics-browser';
amplitude.init('YOUR_API_KEY');

// Track event
amplitude.track('Module Started', {
  module_name: 'Brand Purpose',
  module_id: 'brand-purpose'
});

// Identify user
amplitude.setUserId(userId);
const identify = new amplitude.Identify();
identify.set('tier', user.tier);
identify.set('email', user.email);
amplitude.identify(identify);
```

## Key Features

### Event Segmentation
Analyze events by:
- User properties
- Event properties
- Cohorts

### Pathfinder
Visualize user journeys:
- Common paths to activation
- Conversion paths
- Drop-off points

### Behavioral Cohorts
Auto-generate cohorts:
- Likely to convert
- Likely to churn
- Power users

