# API Integration Examples

## 1. Stripe Integration (Payments)

### Setup

```javascript
// Install Stripe SDK
// npm install stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Environment variables needed:
// STRIPE_SECRET_KEY=sk_live_xxx
// STRIPE_WEBHOOK_SECRET=whsec_xxx
```

### Create Payment Intent

```javascript
async function createPaymentIntent(amount, customerId, metadata) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'usd',
      customer: customerId,
      metadata: {
        brandora_user_id: metadata.userId,
        plan: metadata.plan,
        billing_period: metadata.billingPeriod,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    };
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    throw error;
  }
}

// Usage
const payment = await createPaymentIntent(29.99, 'cus_xxx', {
  userId: 'user_123',
  plan: 'professional',
  billingPeriod: 'monthly',
});
```

### Create Subscription

```javascript
async function createSubscription(customerId, priceId, metadata) {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
      metadata: {
        brandora_user_id: metadata.userId,
        plan: metadata.plan,
      },
      trial_period_days: metadata.trialDays || 0,
    });

    return {
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    };
  } catch (error) {
    console.error('Subscription creation failed:', error);
    throw error;
  }
}
```

### Handle Webhooks

```javascript
const express = require('express');
const app = express();

// Webhook endpoint (raw body needed for signature verification)
app.post('/webhooks/stripe',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data.object);
        break;

      case 'customer.subscription.created':
        await handleSubscriptionCreated(event.data.object);
        break;

      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;

      case 'customer.subscription.deleted':
        await handleSubscriptionCancelled(event.data.object);
        break;

      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  }
);

async function handlePaymentSuccess(paymentIntent) {
  const { brandora_user_id, plan } = paymentIntent.metadata;

  // Update user in database
  await db.users.update(brandora_user_id, {
    plan_tier: plan,
    subscription_status: 'active',
    last_payment_date: new Date(),
  });

  // Send confirmation email
  await sendEmail({
    to: paymentIntent.receipt_email,
    template: 'payment_success',
    data: { plan, amount: paymentIntent.amount / 100 },
  });

  // Track analytics
  await analytics.track({
    userId: brandora_user_id,
    event: 'Payment Succeeded',
    properties: { amount: paymentIntent.amount / 100, plan },
  });
}
```

### Cancel Subscription

```javascript
async function cancelSubscription(subscriptionId, immediately = false) {
  try {
    const subscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: !immediately,
    });

    if (immediately) {
      await stripe.subscriptions.cancel(subscriptionId);
    }

    return subscription;
  } catch (error) {
    console.error('Cancellation failed:', error);
    throw error;
  }
}
```

---

## 2. Supabase Integration (Database & Auth)

### Setup

```javascript
// Install Supabase client
// npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// For server-side with service role key
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
```

### User Authentication

```javascript
// Sign up new user
async function signUp(email, password, metadata) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: metadata.firstName,
        last_name: metadata.lastName,
        company: metadata.company,
      },
    },
  });

  if (error) throw error;
  return data.user;
}

// Sign in
async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data.session;
}

// Get current session
async function getCurrentUser() {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user;
}
```

### Database Operations

```javascript
// Create user profile
async function createUserProfile(userId, profileData) {
  const { data, error } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      first_name: profileData.firstName,
      last_name: profileData.lastName,
      company: profileData.company,
      industry: profileData.industry,
      created_at: new Date().toISOString(),
    })
    .select();

  if (error) throw error;
  return data[0];
}

// Get user with profile
async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      *,
      subscriptions (*),
      brand_assessments (*),
      modules_progress (*)
    `)
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

// Update user progress
async function updateModuleProgress(userId, moduleId, progress) {
  const { data, error } = await supabase
    .from('modules_progress')
    .upsert({
      user_id: userId,
      module_id: moduleId,
      progress_percentage: progress,
      completed: progress >= 100,
      last_updated: new Date().toISOString(),
    })
    .select();

  if (error) throw error;
  return data[0];
}

// Save assessment results
async function saveAssessment(userId, assessmentData) {
  const { data, error } = await supabase
    .from('brand_assessments')
    .insert({
      user_id: userId,
      overall_score: assessmentData.overallScore,
      vision_score: assessmentData.visionScore,
      audience_score: assessmentData.audienceScore,
      positioning_score: assessmentData.positioningScore,
      responses: assessmentData.responses,
      insights: assessmentData.insights,
      completed_at: new Date().toISOString(),
    })
    .select();

  if (error) throw error;
  return data[0];
}
```

### Real-time Subscriptions

```javascript
// Subscribe to user changes
function subscribeToUserChanges(userId, callback) {
  const channel = supabase
    .channel('user-changes')
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'profiles',
        filter: `id=eq.${userId}`,
      },
      (payload) => callback(payload.new)
    )
    .subscribe();

  return channel;
}

// Usage
const subscription = subscribeToUserChanges('user_123', (updatedProfile) => {
  console.log('Profile updated:', updatedProfile);
});

// Unsubscribe later
subscription.unsubscribe();
```

### Storage Operations

```javascript
// Upload brand asset
async function uploadBrandAsset(userId, file, fileName) {
  const filePath = `${userId}/${fileName}`;

  const { data, error } = await supabase.storage
    .from('brand-assets')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) throw error;

  // Get public URL
  const { data: urlData } = supabase.storage
    .from('brand-assets')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

// Download file
async function downloadBrandAsset(userId, fileName) {
  const { data, error } = await supabase.storage
    .from('brand-assets')
    .download(`${userId}/${fileName}`);

  if (error) throw error;
  return data;
}
```

---

## 3. Brevo (SendinBlue) Integration (Email)

### Setup

```javascript
// Install Brevo SDK
// npm install @sendinblue/client

const SibApiV3Sdk = require('@sendinblue/client');

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);
```

### Send Transactional Email

```javascript
async function sendTransactionalEmail(to, templateId, params) {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.to = [{ email: to.email, name: to.name }];
  sendSmtpEmail.templateId = templateId;
  sendSmtpEmail.params = params;
  sendSmtpEmail.headers = {
    'X-Mailin-custom': `user_id:${params.userId}`,
  };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent:', response);
    return response;
  } catch (error) {
    console.error('Email failed:', error);
    throw error;
  }
}

// Usage
await sendTransactionalEmail(
  { email: 'user@example.com', name: 'John Doe' },
  1, // Template ID
  {
    userId: 'user_123',
    firstName: 'John',
    assessmentScore: 75,
    dashboardUrl: 'https://app.brandora.com/dashboard',
  }
);
```

### Manage Contacts

```javascript
const contactsApi = new SibApiV3Sdk.ContactsApi();
contactsApi.setApiKey(
  SibApiV3Sdk.ContactsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// Create or update contact
async function upsertContact(email, attributes, listIds = []) {
  const createContact = new SibApiV3Sdk.CreateContact();
  createContact.email = email;
  createContact.attributes = attributes;
  createContact.listIds = listIds;
  createContact.updateEnabled = true;

  try {
    const response = await contactsApi.createContact(createContact);
    return response;
  } catch (error) {
    if (error.response?.body?.code === 'duplicate_parameter') {
      // Contact exists, update instead
      await contactsApi.updateContact(email, {
        attributes,
        listIds,
      });
    } else {
      throw error;
    }
  }
}

// Usage
await upsertContact(
  'user@example.com',
  {
    FIRSTNAME: 'John',
    LASTNAME: 'Doe',
    COMPANY: 'Acme Inc',
    PLAN: 'Professional',
    ASSESSMENT_SCORE: 75,
  },
  [2, 5] // List IDs
);

// Add to automation
async function addToAutomation(email, automationId) {
  // Brevo automations are triggered by list membership or attributes
  // Update contact attributes to trigger automation
  await contactsApi.updateContact(email, {
    attributes: {
      AUTOMATION_TRIGGER: automationId,
    },
  });
}
```

### Email Campaigns

```javascript
const emailCampaignsApi = new SibApiV3Sdk.EmailCampaignsApi();
emailCampaignsApi.setApiKey(
  SibApiV3Sdk.EmailCampaignsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

async function createCampaign(campaignData) {
  const emailCampaign = new SibApiV3Sdk.CreateEmailCampaign();
  emailCampaign.name = campaignData.name;
  emailCampaign.subject = campaignData.subject;
  emailCampaign.sender = {
    name: 'Brandora',
    email: 'hello@brandora.com',
  };
  emailCampaign.htmlContent = campaignData.htmlContent;
  emailCampaign.recipients = { listIds: campaignData.listIds };
  emailCampaign.scheduledAt = campaignData.scheduledAt;

  const response = await emailCampaignsApi.createEmailCampaign(emailCampaign);
  return response;
}
```

---

## 4. Perplexity AI Integration

### Setup

```javascript
// Perplexity uses OpenAI-compatible API
const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';
```

### Generate Brand Insights

```javascript
async function generateBrandInsights(assessmentData) {
  const prompt = `
Analyze this brand assessment and provide actionable insights:

Vision & Mission Score: ${assessmentData.visionScore}/100
Audience Understanding Score: ${assessmentData.audienceScore}/100
Positioning Score: ${assessmentData.positioningScore}/100
Industry: ${assessmentData.industry}

Responses:
${JSON.stringify(assessmentData.responses, null, 2)}

Provide:
1. Top 3 strengths
2. Top 3 areas for improvement
3. Specific action items (5-7)
4. Industry-specific recommendations

Be specific and actionable. Use real examples.
  `;

  try {
    const response = await fetch(PERPLEXITY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-large-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are a brand strategy expert helping businesses build stronger brands.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Perplexity API error:', error);
    throw error;
  }
}
```

### Market Research

```javascript
async function conductMarketResearch(industry, targetAudience) {
  const prompt = `
Conduct market research for:
Industry: ${industry}
Target Audience: ${targetAudience}

Provide cited, recent data (last 12-24 months) on:
1. Market size and growth trends
2. Key competitors and their positioning
3. Customer behavior and preferences
4. Emerging opportunities
5. Potential threats and challenges

Include sources and publication dates for all data.
  `;

  const response = await fetch(PERPLEXITY_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.1-sonar-large-128k-online',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2, // Lower for more factual responses
    }),
  });

  const data = await response.json();
  return {
    insights: data.choices[0].message.content,
    sources: data.citations || [],
  };
}
```

---

## 5. Analytics Integration (Mixpanel/Amplitude)

### Setup (Mixpanel)

```javascript
// npm install mixpanel

const Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN);
```

### Track Events

```javascript
function trackEvent(userId, eventName, properties = {}) {
  mixpanel.track(eventName, {
    distinct_id: userId,
    ...properties,
    timestamp: new Date().toISOString(),
  });
}

// Usage examples
trackEvent('user_123', 'Assessment Completed', {
  overall_score: 75,
  vision_score: 80,
  time_to_complete: 320, // seconds
  industry: 'SaaS',
});

trackEvent('user_123', 'Module Started', {
  module_id: 'module_2',
  module_name: 'Audience Research',
});

trackEvent('user_123', 'Payment Success', {
  plan: 'professional',
  amount: 29.99,
  billing_period: 'monthly',
  coupon_code: 'LAUNCH50',
});
```

### Update User Profile

```javascript
function updateUserProfile(userId, properties) {
  mixpanel.people.set(userId, properties);
}

// Usage
updateUserProfile('user_123', {
  $email: 'user@example.com',
  $name: 'John Doe',
  company: 'Acme Inc',
  industry: 'SaaS',
  plan_tier: 'professional',
  assessment_score: 75,
  modules_completed: 3,
  total_spent: 29.99,
});
```

### Track Revenue

```javascript
function trackRevenue(userId, amount, properties = {}) {
  mixpanel.people.track_charge(userId, amount, {
    time: new Date().toISOString(),
    ...properties,
  });
}

// Usage
trackRevenue('user_123', 29.99, {
  plan: 'professional',
  billing_period: 'monthly',
});
```

---

## 6. Slack Integration (Notifications)

### Setup

```javascript
// Using Slack Webhook URL
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
```

### Send Notifications

```javascript
async function sendSlackNotification(channel, message, blocks = []) {
  try {
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        channel,
        text: message,
        blocks,
      }),
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Slack notification failed:', error);
  }
}

// Formatted notification example
async function notifyNewCustomer(customer) {
  await sendSlackNotification(
    '#revenue',
    `New customer: ${customer.name}`,
    [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '💰 New Customer!',
        },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name:*\n${customer.name}` },
          { type: 'mrkdwn', text: `*Email:*\n${customer.email}` },
          { type: 'mrkdwn', text: `*Plan:*\n${customer.plan}` },
          { type: 'mrkdwn', text: `*MRR:*\n$${customer.mrr}` },
        ],
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: { type: 'plain_text', text: 'View Profile' },
            url: `https://app.brandora.com/admin/users/${customer.id}`,
          },
        ],
      },
    ]
  );
}
```

---

## Error Handling & Retry Logic

### Retry with Exponential Backoff

```javascript
async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;

      const delay = baseDelay * Math.pow(2, attempt);
      console.log(`Attempt ${attempt + 1} failed, retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// Usage
const result = await retryWithBackoff(
  () => sendEmail(user.email, template, data),
  3,
  2000
);
```

### Webhook Verification

```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```

This completes the API integration examples with real, production-ready code for all major services Brandora would integrate with.
