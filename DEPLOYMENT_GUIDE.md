# Brandora - Vercel Deployment Guide

Complete step-by-step guide to deploy Brandora on Vercel with all integrations configured.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Environment Variables Configuration](#environment-variables-configuration)
4. [First Deployment](#first-deployment)
5. [Custom Domain Setup](#custom-domain-setup)
6. [GitHub Integration](#github-integration)
7. [Preview Deployments](#preview-deployments)
8. [Production Deployment](#production-deployment)
9. [Post-Deployment Configuration](#post-deployment-configuration)
10. [Monitoring & Analytics](#monitoring--analytics)
11. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying to Vercel, ensure you have:

- [x] GitHub account with Brandora repository
- [x] Vercel account (sign up at https://vercel.com)
- [x] Supabase project created
- [x] Stripe account configured
- [x] Brevo (Sendinblue) account with API key
- [x] Perplexity AI API key
- [x] Custom domain (optional, but recommended for production)

---

## Initial Setup

### Step 1: Install Vercel CLI (Optional but Recommended)

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate with your Vercel account.

### Step 3: Link Your Project

Navigate to your project directory:

```bash
cd /path/to/brandora
vercel link
```

**OR** skip CLI and deploy via Vercel Dashboard (recommended for first-time users).

---

## Environment Variables Configuration

### Critical: Set Environment Variables in Vercel Dashboard

You **must** configure environment variables before deployment. Navigate to:

**Vercel Dashboard → Your Project → Settings → Environment Variables**

### Environment Variable Scopes

Vercel supports three deployment scopes:
- **Production**: Used for production deployments only
- **Preview**: Used for preview deployments (pull requests, non-main branches)
- **Development**: Used for local development with `vercel dev`

### Required Environment Variables

Copy these from your `.env.example` file and configure in Vercel Dashboard:

#### 1. Application Settings

| Variable | Value | Scope |
|----------|-------|-------|
| `NODE_ENV` | `production` | Production |
| `NODE_ENV` | `preview` | Preview |
| `NEXT_PUBLIC_APP_URL` | `https://brandora.com` | Production |
| `NEXT_PUBLIC_APP_URL` | Auto-generated preview URL | Preview |

#### 2. Supabase Configuration

| Variable | Value | Scope |
|----------|-------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGc...` | All |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGc...` (Secret!) | All |

**How to get these:**
1. Go to https://app.supabase.com/project/_/settings/api
2. Copy **URL** → `NEXT_PUBLIC_SUPABASE_URL`
3. Copy **anon/public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Copy **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

#### 3. Stripe Configuration

| Variable | Value | Scope |
|----------|-------|-------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` (prod) or `pk_test_...` (preview) | Production/Preview |
| `STRIPE_SECRET_KEY` | `sk_live_...` (prod) or `sk_test_...` (preview) | Production/Preview |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` (different for prod/preview) | Production/Preview |

**How to get these:**
1. Go to https://dashboard.stripe.com/apikeys
2. Use **Test** keys for Preview, **Live** keys for Production
3. Create separate webhook endpoints for production and preview (see [Post-Deployment](#post-deployment-configuration))

**Stripe Price IDs:**

| Variable | Value | Scope |
|----------|-------|-------|
| `NEXT_PUBLIC_STRIPE_PRICE_STARTER` | `price_xxxxx` | All |
| `NEXT_PUBLIC_STRIPE_PRICE_PRO` | `price_xxxxx` | All |
| `NEXT_PUBLIC_STRIPE_PRICE_DESIGN_READY` | `price_xxxxx` | All |

**How to get these:**
1. Go to https://dashboard.stripe.com/products
2. Create products for each tier (Starter, Pro, Design Ready)
3. Copy the **Price ID** for each product

#### 4. Brevo Email Configuration

| Variable | Value | Scope |
|----------|-------|-------|
| `BREVO_API_KEY` | `xkeysib-...` | All |
| `BREVO_FROM_EMAIL` | `hello@brandora.com` | All |
| `BREVO_FROM_NAME` | `Brandora` | All |

**How to get these:**
1. Go to https://app.brevo.com/settings/keys/api
2. Create a new API key
3. Copy the key to `BREVO_API_KEY`

**Template IDs (optional, create in Brevo):**

| Variable | Value | Scope |
|----------|-------|-------|
| `BREVO_TEMPLATE_WELCOME` | `1` | All |
| `BREVO_TEMPLATE_STRATEGY_READY` | `2` | All |
| `BREVO_TEMPLATE_PAYMENT_CONFIRMATION` | `3` | All |

#### 5. Perplexity AI Configuration

| Variable | Value | Scope |
|----------|-------|-------|
| `PERPLEXITY_API_KEY` | `pplx-...` | All |
| `PERPLEXITY_MODEL` | `llama-3.1-sonar-large-128k-online` | All |

**How to get these:**
1. Go to https://www.perplexity.ai/settings/api
2. Create an API key
3. Copy to `PERPLEXITY_API_KEY`

#### 6. Authentication & Security

| Variable | Value | Scope |
|----------|-------|-------|
| `NEXTAUTH_SECRET` | Generate with `openssl rand -base64 32` | All |
| `NEXTAUTH_URL` | `https://brandora.com` (prod) / Auto for preview | Production/Preview |

#### 7. Optional: Analytics & Monitoring

| Variable | Value | Scope |
|----------|-------|-------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Production |
| `NEXT_PUBLIC_SENTRY_DSN` | `https://...@sentry.io/...` | All |
| `SENTRY_AUTH_TOKEN` | `sntrys_...` | All |

---

## First Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click **Import Project**
3. Select **Import Git Repository**
4. Choose your GitHub repository (`lukazhammer/cautious-octo-carnival`)
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or where package.json is located)
   - **Build Command**: `npm run build` (or leave default)
   - **Output Directory**: `.next` (or leave default)
6. Add Environment Variables (see above)
7. Click **Deploy**

### Option 2: Deploy via Vercel CLI

```bash
# Navigate to project directory
cd /path/to/brandora

# Deploy to preview (first time)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? [Your username/team]
# - Link to existing project? No
# - What's your project's name? brandora
# - In which directory is your code located? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

---

## Custom Domain Setup

### Step 1: Add Domain in Vercel Dashboard

1. Go to **Project Settings → Domains**
2. Click **Add Domain**
3. Enter your domain: `brandora.com`
4. Click **Add**

### Step 2: Configure DNS

Vercel will show you DNS records to add. You have two options:

#### Option A: Use Vercel Nameservers (Recommended)

1. Go to your domain registrar (Namecheap, GoDaddy, etc.)
2. Update nameservers to Vercel's:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
3. Wait for DNS propagation (5 minutes to 48 hours)

#### Option B: Add CNAME Record

1. Go to your domain's DNS settings
2. Add a CNAME record:
   - **Name**: `@` (or blank for root domain) or `www`
   - **Value**: `cname.vercel-dns.com`
3. For root domain (`brandora.com`), add A records:
   ```
   76.76.21.21
   ```
4. Wait for DNS propagation

### Step 3: Configure SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt. This happens automatically after domain verification.

**Check SSL status:**
- Go to **Project Settings → Domains**
- Look for green checkmark next to domain
- Should show "Valid Certificate"

### Step 4: Redirect www to Root (or vice versa)

Add a redirect in `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "www.brandora.com"
        }
      ],
      "destination": "https://brandora.com/:path*",
      "permanent": true
    }
  ]
}
```

---

## GitHub Integration

### Automatic Deployments from GitHub

Vercel automatically deploys when you push to GitHub:

- **Production deployments**: Pushes to `main` branch
- **Preview deployments**: Pushes to any other branch or pull requests

### Step 1: Connect GitHub Repository

1. Go to **Project Settings → Git**
2. Connect your GitHub account (if not already connected)
3. Select repository: `lukazhammer/cautious-octo-carnival`
4. Choose production branch: `main`

### Step 2: Configure Branch Protection (Recommended)

In your GitHub repository:

1. Go to **Settings → Branches**
2. Add branch protection rule for `main`:
   - Require pull request reviews before merging
   - Require status checks to pass (Vercel deployment)
   - Require branches to be up to date
   - Include administrators

### Step 3: Enable Vercel Deployment Status Checks

Vercel automatically adds deployment status checks to pull requests. You'll see:

- ✅ **Vercel – Preview Deployment Ready**
- 🔄 **Vercel – Building Preview Deployment**
- ❌ **Vercel – Build Failed**

### Step 4: Configure Auto-Deployment Settings

Go to **Project Settings → Git** and configure:

- ✅ **Production Branch**: `main`
- ✅ **Enable Preview Deployments**: Yes (for all branches)
- ✅ **Enable PR Comments**: Yes (Vercel bot comments on PRs)
- ✅ **Enable Commit Comments**: Yes (on GitHub commits)

---

## Preview Deployments

### What are Preview Deployments?

Preview deployments are temporary deployments created for:
- Every pull request
- Every push to non-production branches

Each preview deployment gets a unique URL like:
```
https://brandora-git-feature-branch-username.vercel.app
```

### Best Practices for Preview Deployments

1. **Use Test API Keys**: Configure preview environment variables with test/sandbox keys
2. **Separate Databases**: Use a separate Supabase project for preview deployments
3. **Test Before Merging**: Always test preview deployments before merging to main
4. **Share with Team**: Use preview URLs to share work-in-progress with team/clients

### Configure Preview-Specific Environment Variables

In Vercel Dashboard:

1. Go to **Settings → Environment Variables**
2. For sensitive variables (Stripe, Brevo), add separate values for **Preview** scope
3. Example:
   - Production: `STRIPE_SECRET_KEY` = `sk_live_xxx` (Production only)
   - Preview: `STRIPE_SECRET_KEY` = `sk_test_xxx` (Preview only)

### Managing Preview Deployments

- **View all deployments**: Project → Deployments tab
- **Delete old previews**: Vercel auto-deletes after 30 days (configurable)
- **Cancel running builds**: Click "Cancel" on deployment in progress

---

## Production Deployment

### Pre-Production Checklist

Before deploying to production, verify:

- [ ] All environment variables configured (Production scope)
- [ ] Custom domain configured and SSL active
- [ ] Database migrations run in production Supabase
- [ ] Stripe products and prices created
- [ ] Brevo email templates created
- [ ] All features tested in preview deployment
- [ ] Analytics and monitoring configured
- [ ] Error tracking (Sentry) configured

### Deploy to Production

#### Method 1: Merge to Main Branch (Recommended)

```bash
# Create and checkout a new branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/my-feature

# Create pull request on GitHub
# Review preview deployment
# Merge PR → Automatic production deployment
```

#### Method 2: Direct Push to Main

```bash
# Checkout main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge your feature branch
git merge feature/my-feature

# Push to main (triggers production deployment)
git push origin main
```

#### Method 3: Vercel CLI

```bash
vercel --prod
```

### Monitor Production Deployment

1. Go to **Project → Deployments**
2. Click on the latest deployment
3. Monitor build logs in real-time
4. Check for errors or warnings
5. Verify deployment is **Ready** and **Assigned to Production**

### Post-Deployment Verification

After production deployment:

1. **Visit your domain**: https://brandora.com
2. **Check all pages load**: /, /pricing, /about, etc.
3. **Test critical paths**:
   - [ ] User signup/login
   - [ ] Payment flow (use Stripe test mode first)
   - [ ] Strategy generation
   - [ ] Email sending
4. **Check browser console**: No errors
5. **Verify SSL certificate**: Green padlock in browser
6. **Test on mobile devices**
7. **Run Lighthouse audit**: Aim for 90+ scores

---

## Post-Deployment Configuration

### 1. Configure Stripe Webhooks

Stripe needs to send webhook events to your deployed app.

#### Production Webhook

1. Go to https://dashboard.stripe.com/webhooks
2. Click **Add endpoint**
3. Enter endpoint URL: `https://brandora.com/api/webhooks/stripe`
4. Select events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.paid`
   - `invoice.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Add to Vercel environment variables:
   - Variable: `STRIPE_WEBHOOK_SECRET`
   - Value: `whsec_xxxxx`
   - Scope: **Production**

#### Preview Webhook (Optional)

1. Repeat above steps for preview URL: `https://brandora-git-preview.vercel.app/api/webhooks/stripe`
2. Add signing secret to Vercel with **Preview** scope

### 2. Configure Supabase Authentication Redirect URLs

1. Go to https://app.supabase.com/project/_/auth/url-configuration
2. Add site URLs:
   - Production: `https://brandora.com`
   - Preview: `https://*.vercel.app` (or specific preview URLs)
3. Add redirect URLs:
   - `https://brandora.com/auth/callback`
   - `https://brandora.com/auth/confirm`
   - `https://*.vercel.app/auth/callback` (for previews)

### 3. Configure CORS for Supabase

If needed, add your domain to allowed origins:

1. Go to Supabase Dashboard → Settings → API
2. Add to **Additional allowed origins**:
   - `https://brandora.com`
   - `https://*.vercel.app`

### 4. Update Brevo Sender Domain (Recommended)

For better email deliverability:

1. Go to https://app.brevo.com/settings/sender
2. Add your domain: `brandora.com`
3. Verify domain ownership (add DNS records)
4. Authenticate domain with SPF, DKIM, DMARC

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)

Enabled automatically. View:
- Page views
- Top pages
- Countries
- Browsers
- Devices

Access: **Project → Analytics tab**

### Vercel Speed Insights

Track Core Web Vitals:

1. Install package:
   ```bash
   npm install @vercel/speed-insights
   ```

2. Add to your root layout:
   ```tsx
   import { SpeedInsights } from '@vercel/speed-insights/next';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <SpeedInsights />
         </body>
       </html>
     );
   }
   ```

### Vercel Logs

View real-time logs:
1. Go to **Project → Logs tab**
2. Filter by:
   - Deployment
   - Status (error, warning, info)
   - Source (build, function, edge)
3. Export logs for debugging

### Error Tracking with Sentry (Optional)

1. Sign up at https://sentry.io
2. Create a new project (Next.js)
3. Install Sentry SDK:
   ```bash
   npm install @sentry/nextjs
   ```
4. Run configuration wizard:
   ```bash
   npx @sentry/wizard@latest -i nextjs
   ```
5. Add Sentry DSN to Vercel environment variables

### Uptime Monitoring (Optional)

Use external service to monitor uptime:
- **Better Uptime**: https://betteruptime.com
- **Pingdom**: https://www.pingdom.com
- **UptimeRobot**: https://uptimerobot.com

---

## Troubleshooting

### Common Issues and Solutions

#### 1. Build Failed

**Symptoms**: Deployment fails during build step

**Solutions**:
- Check build logs in Vercel dashboard
- Verify all dependencies in `package.json`
- Ensure environment variables are set
- Check for TypeScript errors: `npm run build` locally
- Verify Node version compatibility

#### 2. Environment Variables Not Working

**Symptoms**: App can't access API keys, features broken

**Solutions**:
- Check variable names (exact match required)
- Verify scope (Production vs Preview)
- Restart deployment after adding variables
- For `NEXT_PUBLIC_*` variables, must start with `NEXT_PUBLIC_`
- Check if variables need to be encrypted (sensitive data)

#### 3. Stripe Webhooks Not Received

**Symptoms**: Payments successful but app doesn't update

**Solutions**:
- Verify webhook URL is correct: `https://yourdomain.com/api/webhooks/stripe`
- Check webhook signing secret matches
- Test webhook with Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- Check Vercel function logs for errors
- Ensure webhook endpoint returns 200 status

#### 4. 404 on Custom Domain

**Symptoms**: Domain shows "404: NOT_FOUND"

**Solutions**:
- Verify domain is assigned to production deployment
- Check DNS propagation: https://dnschecker.org
- Re-assign domain in Vercel dashboard
- Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

#### 5. SSL Certificate Issues

**Symptoms**: "Not Secure" warning in browser

**Solutions**:
- Wait for certificate provisioning (can take up to 24 hours)
- Verify domain ownership
- Check for CAA DNS records blocking Let's Encrypt
- Remove and re-add domain in Vercel

#### 6. Slow Page Loads

**Symptoms**: Pages take >3 seconds to load

**Solutions**:
- Enable Vercel Edge Network (automatic)
- Optimize images with Next.js Image component
- Use React.lazy() for code splitting
- Enable caching headers in `vercel.json`
- Use ISR (Incremental Static Regeneration) for dynamic pages
- Check database query performance

#### 7. Database Connection Errors

**Symptoms**: Supabase queries failing

**Solutions**:
- Verify Supabase URL and keys
- Check Supabase project is not paused (auto-pauses after 7 days inactivity on free plan)
- Verify RLS (Row Level Security) policies
- Check connection pooling settings
- Test connection in Supabase SQL editor

---

## Rollback Procedures

See [ROLLBACK_GUIDE.md](./ROLLBACK_GUIDE.md) for detailed rollback procedures.

Quick rollback:
1. Go to **Project → Deployments**
2. Find the last working deployment
3. Click **⋯ → Promote to Production**

---

## Additional Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Supabase Documentation**: https://supabase.com/docs
- **Stripe Documentation**: https://stripe.com/docs
- **Brevo API Docs**: https://developers.brevo.com/docs

---

## Support

If you encounter issues:

1. Check Vercel Status: https://www.vercel-status.com
2. Search Vercel Discussions: https://github.com/vercel/vercel/discussions
3. Contact Vercel Support: https://vercel.com/support

---

**Last Updated**: 2025-11-15
