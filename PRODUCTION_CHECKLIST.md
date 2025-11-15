# Brandora - Production Deployment Checklist

Complete checklist to ensure your production deployment is ready and secure.

---

## Pre-Deployment Checklist

### 1. Code Quality & Testing

- [ ] All tests pass locally
  ```bash
  npm run test
  ```

- [ ] Build succeeds without errors
  ```bash
  npm run build
  ```

- [ ] Linting passes without errors
  ```bash
  npm run lint
  ```

- [ ] TypeScript compilation successful (no type errors)
  ```bash
  npm run type-check
  ```

- [ ] No console.log() statements in production code
  ```bash
  grep -r "console.log" app/ components/ lib/
  ```

- [ ] All TODO comments resolved or documented
  ```bash
  grep -r "TODO" app/ components/ lib/
  ```

- [ ] Code reviewed and approved by team member

---

### 2. Environment Configuration

#### Vercel Project Setup

- [ ] Vercel project created and linked to GitHub repository
- [ ] Production branch set to `main` in Vercel settings
- [ ] Preview deployments enabled for pull requests
- [ ] Deployment comments enabled for GitHub PRs

#### Environment Variables - Production Scope

- [ ] `NODE_ENV` = `production`
- [ ] `NEXT_PUBLIC_APP_URL` = `https://brandora.com`

#### Supabase

- [ ] `NEXT_PUBLIC_SUPABASE_URL` configured
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` configured
- [ ] `SUPABASE_SERVICE_ROLE_KEY` configured (sensitive!)
- [ ] Supabase project upgraded from free tier (if needed)
- [ ] Database migrations run in production environment
- [ ] Row Level Security (RLS) policies enabled and tested
- [ ] Supabase auth redirect URLs configured:
  - [ ] `https://brandora.com/auth/callback`
  - [ ] `https://brandora.com/auth/confirm`

#### Stripe (Live Mode)

- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_live_...`
- [ ] `STRIPE_SECRET_KEY` = `sk_live_...`
- [ ] `STRIPE_WEBHOOK_SECRET` configured
- [ ] Stripe account activated for live payments
- [ ] Products created in Stripe dashboard:
  - [ ] Clarity Starter ($0)
  - [ ] Market Fit Pro ($147)
  - [ ] Design Ready ($497)
- [ ] Price IDs configured:
  - [ ] `NEXT_PUBLIC_STRIPE_PRICE_STARTER`
  - [ ] `NEXT_PUBLIC_STRIPE_PRICE_PRO`
  - [ ] `NEXT_PUBLIC_STRIPE_PRICE_DESIGN_READY`
- [ ] Stripe webhook endpoint configured: `https://brandora.com/api/webhooks/stripe`
- [ ] Webhook events selected:
  - [ ] `checkout.session.completed`
  - [ ] `customer.subscription.created`
  - [ ] `customer.subscription.updated`
  - [ ] `customer.subscription.deleted`
  - [ ] `invoice.paid`
  - [ ] `invoice.payment_failed`
- [ ] Test payment completed successfully in live mode

#### Brevo Email

- [ ] `BREVO_API_KEY` configured
- [ ] `BREVO_FROM_EMAIL` configured
- [ ] `BREVO_FROM_NAME` configured
- [ ] Sender email verified in Brevo dashboard
- [ ] Domain authenticated (SPF, DKIM, DMARC records)
- [ ] Email templates created (if using templates):
  - [ ] Welcome email
  - [ ] Strategy ready notification
  - [ ] Payment confirmation
- [ ] Test email sent successfully

#### Perplexity AI

- [ ] `PERPLEXITY_API_KEY` configured
- [ ] `PERPLEXITY_MODEL` configured
- [ ] API quota sufficient for expected usage
- [ ] Billing configured in Perplexity dashboard

#### Authentication & Security

- [ ] `NEXTAUTH_SECRET` generated (unique 32+ character string)
- [ ] `NEXTAUTH_URL` = `https://brandora.com`
- [ ] Auth callback URLs tested

#### Analytics & Monitoring (Optional)

- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` configured (if using Google Analytics)
- [ ] `NEXT_PUBLIC_SENTRY_DSN` configured (if using Sentry)
- [ ] `SENTRY_AUTH_TOKEN` configured (if using Sentry)

---

### 3. Security

#### Code Security

- [ ] No hardcoded secrets in codebase
  ```bash
  git grep -i "sk_live"
  git grep -i "sk_test"
  git grep -i "password"
  git grep -i "secret"
  ```

- [ ] `.env.local` and `.env.*.local` in `.gitignore`
- [ ] No sensitive data in Git history
- [ ] All dependencies up to date and secure
  ```bash
  npm audit
  npm audit fix
  ```

- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (input sanitization)
- [ ] CSRF protection enabled
- [ ] Rate limiting implemented on API routes

#### API Security

- [ ] API routes require authentication where appropriate
- [ ] Webhook endpoints verify signatures (Stripe)
- [ ] CORS configured correctly
- [ ] Server-side validation for all user inputs

#### Supabase Security

- [ ] Row Level Security (RLS) enabled on all tables
- [ ] RLS policies tested thoroughly
- [ ] Service role key only used server-side
- [ ] Anon key permissions limited via RLS

#### Headers & HTTPS

- [ ] Security headers configured in `vercel.json`:
  - [ ] `X-Content-Type-Options: nosniff`
  - [ ] `X-Frame-Options: DENY`
  - [ ] `X-XSS-Protection: 1; mode=block`
  - [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] SSL/HTTPS enforced (automatic on Vercel)

---

### 4. Performance

#### Build Optimization

- [ ] Next.js production build optimized
- [ ] Images optimized (WebP format, responsive sizes)
- [ ] Fonts optimized (preconnect, font-display: swap)
- [ ] Bundle size analyzed
  ```bash
  npm run build
  # Check .next/analyze output
  ```

- [ ] No unused dependencies
  ```bash
  npx depcheck
  ```

#### Runtime Performance

- [ ] React components memoized where appropriate
- [ ] Database queries optimized (indexes, efficient queries)
- [ ] API responses cached where appropriate
- [ ] Static pages pre-rendered (SSG)
- [ ] Dynamic pages use ISR when possible

#### Lighthouse Audit

Run Lighthouse audit on staging/preview URL:

- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=https://your-preview-url.vercel.app
```

---

### 5. SEO & Meta Tags

- [ ] Title tags configured (50-60 characters)
- [ ] Meta descriptions configured (150-160 characters)
- [ ] Open Graph tags configured
  - [ ] `og:title`
  - [ ] `og:description`
  - [ ] `og:image`
  - [ ] `og:url`
  - [ ] `og:type`
- [ ] Twitter Card tags configured
  - [ ] `twitter:card`
  - [ ] `twitter:title`
  - [ ] `twitter:description`
  - [ ] `twitter:image`
- [ ] Canonical URLs configured
- [ ] Sitemap generated (`/sitemap.xml`)
- [ ] Robots.txt configured (`/robots.txt`)
- [ ] Structured data (JSON-LD) implemented:
  - [ ] Organization schema
  - [ ] Product schema
  - [ ] FAQ schema

---

### 6. Domain & DNS

- [ ] Custom domain purchased
- [ ] Domain added to Vercel project
- [ ] DNS records configured:
  - [ ] A record pointing to Vercel (if using apex domain)
  - [ ] CNAME record for `www` (if applicable)
  - [ ] CNAME record pointing to `cname.vercel-dns.com`
- [ ] DNS propagation complete (check: https://dnschecker.org)
- [ ] SSL certificate active (automatic via Vercel)
- [ ] SSL certificate shows as "Valid" in Vercel dashboard
- [ ] www → non-www redirect configured (or vice versa)
- [ ] HTTP → HTTPS redirect active (automatic on Vercel)

---

### 7. Email Configuration

- [ ] Domain email configured (hello@brandora.com)
- [ ] SPF record added to DNS
  ```
  v=spf1 include:spf.brevo.com ~all
  ```
- [ ] DKIM record added to DNS (from Brevo)
- [ ] DMARC record added to DNS
  ```
  v=DMARC1; p=none; rua=mailto:dmarc@brandora.com
  ```
- [ ] Email deliverability tested (send to Gmail, Outlook, etc.)
- [ ] Emails not landing in spam folder

---

### 8. Third-Party Integrations

#### Stripe

- [ ] Live mode activated
- [ ] Business information completed
- [ ] Payout method configured
- [ ] Tax settings configured
- [ ] Billing descriptors set
- [ ] Customer emails enabled
- [ ] Receipt emails enabled
- [ ] Webhook endpoint tested
- [ ] Test payment in live mode successful

#### Supabase

- [ ] Production project created (not using free tier for serious apps)
- [ ] Backups enabled
- [ ] Point-in-time recovery configured
- [ ] Database connection pooling enabled (if needed)
- [ ] Storage buckets configured
- [ ] Storage policies configured

#### Analytics

- [ ] Google Analytics property created
- [ ] GA4 tracking code installed
- [ ] Google Search Console verified
- [ ] Sentry project created (if using error tracking)

---

### 9. Content & Copy

- [ ] All placeholder text replaced with final copy
- [ ] All images have descriptive alt text
- [ ] Privacy Policy page created and linked
- [ ] Terms of Service page created and linked
- [ ] Refund Policy page created and linked
- [ ] Contact information up to date
- [ ] Copyright year correct
- [ ] No broken links (check with: https://www.brokenlinkcheck.com)

---

### 10. Legal & Compliance

- [ ] Privacy Policy complies with GDPR (if serving EU users)
- [ ] Cookie consent banner implemented (if required)
- [ ] Terms of Service reviewed by legal counsel
- [ ] Refund policy clearly stated (30-day money-back guarantee)
- [ ] Data processing agreement with third parties
- [ ] User data deletion workflow implemented

---

### 11. Monitoring & Alerts

- [ ] Vercel Analytics enabled
- [ ] Error tracking configured (Sentry or similar)
- [ ] Uptime monitoring configured
  - [ ] Better Uptime, Pingdom, or UptimeRobot
  - [ ] Alerts sent to email/Slack
- [ ] Performance monitoring configured
- [ ] Log aggregation configured (if needed)
- [ ] Stripe webhook delivery monitoring
- [ ] Database performance monitoring (Supabase dashboard)

---

### 12. Backup & Disaster Recovery

- [ ] Database backup strategy configured
  - [ ] Automated daily backups (Supabase)
  - [ ] Point-in-time recovery enabled
- [ ] Backup restoration tested
- [ ] Rollback procedure documented (see ROLLBACK_GUIDE.md)
- [ ] Code repository has multiple contributors (bus factor > 1)
- [ ] Critical passwords stored in password manager (1Password, LastPass)
- [ ] Environment variables backed up securely

---

## Deployment Process

### Step 1: Final Testing in Preview

1. Create a pull request from your staging/develop branch to `main`
2. Wait for Vercel preview deployment
3. Test preview deployment URL thoroughly:
   - [ ] Homepage loads correctly
   - [ ] All navigation links work
   - [ ] Signup/login flow works
   - [ ] Payment flow works (use test card)
   - [ ] Strategy generation works
   - [ ] Emails are sent
   - [ ] Mobile responsive design looks good
4. Run Lighthouse audit on preview URL
5. Get team approval on pull request

### Step 2: Merge to Production

1. Merge pull request to `main` branch
2. Monitor Vercel deployment in dashboard
3. Check build logs for errors/warnings
4. Wait for deployment to complete

### Step 3: Post-Deployment Verification

Within 5 minutes of deployment:

- [ ] Visit https://brandora.com
- [ ] Homepage loads without errors
- [ ] Check browser console (no errors)
- [ ] Test user signup
- [ ] Test user login
- [ ] Test password reset flow
- [ ] Test payment flow (with real card, refund immediately)
- [ ] Test strategy generation
- [ ] Verify email received
- [ ] Check Stripe dashboard for payment
- [ ] Check Supabase dashboard for user data
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### Step 4: Smoke Tests

Run automated smoke tests (if implemented):

```bash
npm run test:e2e:production
```

Or manual smoke tests:
1. Critical user journeys work end-to-end
2. Payment processing completes successfully
3. Emails are delivered
4. Database writes succeed
5. API endpoints respond correctly

---

## Post-Deployment Tasks

### Immediate (0-1 hour)

- [ ] Monitor error tracking dashboard (Sentry)
- [ ] Check Vercel logs for errors
- [ ] Monitor server response times
- [ ] Watch Stripe webhook deliveries
- [ ] Verify email delivery rates in Brevo

### First Day

- [ ] Monitor analytics for traffic spike/drop
- [ ] Check for increased error rates
- [ ] Review user feedback/support tickets
- [ ] Monitor performance metrics
- [ ] Check database performance
- [ ] Verify all cron jobs ran successfully (if any)

### First Week

- [ ] Review conversion rates
- [ ] Analyze user behavior in analytics
- [ ] Check for any payment failures
- [ ] Review email deliverability rates
- [ ] Optimize any slow pages/queries
- [ ] Update documentation if needed

---

## Rollback Criteria

Rollback immediately if:

- [ ] Error rate exceeds 5% of requests
- [ ] Payment processing fails
- [ ] Database connection errors
- [ ] Authentication broken
- [ ] Site completely down
- [ ] Data integrity issues

See [ROLLBACK_GUIDE.md](./ROLLBACK_GUIDE.md) for rollback procedures.

---

## Communication

### Stakeholder Notification

Before deployment:
- [ ] Notify team of deployment window
- [ ] Notify customers if downtime expected (usually not needed on Vercel)
- [ ] Update status page (if you have one)

After deployment:
- [ ] Announce successful deployment in team Slack/Discord
- [ ] Update changelog (if public)
- [ ] Notify stakeholders of new features

---

## Deployment Sign-Off

**Deployed by**: ___________________________
**Date**: ___________________________
**Time**: ___________________________
**Deployment URL**: https://brandora.com
**Vercel Deployment ID**: ___________________________

**Approvals**:
- [ ] Developer: ___________________________
- [ ] QA/Tester: ___________________________
- [ ] Product Owner: ___________________________

---

## Quick Reference

### Critical URLs

- **Production**: https://brandora.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Supabase Dashboard**: https://app.supabase.com
- **Stripe Dashboard**: https://dashboard.stripe.com
- **Brevo Dashboard**: https://app.brevo.com
- **GitHub Repo**: https://github.com/lukazhammer/cautious-octo-carnival

### Emergency Contacts

- **Developer**: ___________________________
- **DevOps**: ___________________________
- **Product Owner**: ___________________________
- **Vercel Support**: https://vercel.com/support

### Quick Commands

```bash
# Check deployment status
vercel ls

# View production logs
vercel logs [deployment-url]

# Rollback to previous deployment
# (via Vercel dashboard: Deployments → Previous → Promote to Production)

# Test API health
curl https://brandora.com/api/health
```

---

**Last Updated**: 2025-11-15
