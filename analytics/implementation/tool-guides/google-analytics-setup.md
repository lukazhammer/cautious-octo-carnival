# Google Analytics 4 (GA4) Setup Guide

## Installation

### 1. Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Admin → Create Property
3. Property name: "Brandora"
4. Time zone: Your timezone
5. Currency: USD

### 2. Add Data Stream
1. Admin → Data Streams → Add stream
2. Choose: Web
3. Website URL: https://app.brandora.com
4. Stream name: "Brandora Web App"
5. Copy Measurement ID (G-XXXXXXXXXX)

### 3. Install gtag.js

```html
<!-- Add to <head> of all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Event Configuration

### Custom Events

```javascript
// Track custom event
gtag('event', 'module_started', {
  module_name: 'Brand Purpose',
  module_id: 'brand-purpose'
});

// Track conversion
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 450.00,
  currency: 'USD',
  items: [{
    item_name: 'Complete Plan',
    price: 450.00
  }]
});
```

### Conversion Events
Mark as conversions in GA4:
- `purchase`
- `sign_up`
- `generate_lead`

## Custom Dimensions

Admin → Custom Definitions → Create custom dimension:
- User Tier (user scope)
- Module Name (event scope)
- Feature Name (event scope)

