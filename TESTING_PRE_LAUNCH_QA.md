# Brandora Pre-Launch QA Checklist

This comprehensive checklist must be completed before launching Brandora to production. Each section must be signed off by a tester and reviewer.

---

## 📋 Table of Contents
1. [Forms Validation](#1-forms-validation)
2. [Email Delivery](#2-email-delivery)
3. [Payment Processing](#3-payment-processing)
4. [Tier Access Control](#4-tier-access-control)
5. [Exports (PDF & CSV)](#5-exports-pdf--csv)
6. [Security & Authentication](#6-security--authentication)
7. [Performance & Load Testing](#7-performance--load-testing)
8. [Cross-Browser & Device Testing](#8-cross-browser--device-testing)
9. [SEO & Analytics](#9-seo--analytics)
10. [Legal & Compliance](#10-legal--compliance)
11. [Monitoring & Alerting](#11-monitoring--alerting)
12. [Final Production Checks](#12-final-production-checks)

---

## 1. Forms Validation

### Signup Form
- [ ] Email validation works (rejects invalid formats)
- [ ] Password requirements enforced (8+ chars, uppercase, number, special char)
- [ ] Password confirmation matches
- [ ] "Terms & Privacy" checkbox required
- [ ] Submit button disabled until form valid
- [ ] Error messages clear and helpful
- [ ] Success state: redirect to email confirmation page
- [ ] Test with special characters in email (+ . _)
- [ ] Test with very long email (> 100 chars)
- [ ] Test with SQL injection attempts (sanitized)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Login Form
- [ ] Email/password validation works
- [ ] "Remember me" checkbox functions
- [ ] "Forgot password" link works
- [ ] Invalid credentials show generic error (no info disclosure)
- [ ] Successful login redirects to dashboard
- [ ] Rate limiting prevents brute force (5 attempts per 15 min)
- [ ] Error messages don't reveal if email exists
- [ ] Session persists with "Remember me"
- [ ] Session expires correctly without "Remember me"

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Assessment Form (13 Questions)
- [ ] All 13 questions display correctly
- [ ] Cannot submit with missing answers
- [ ] Progress indicator accurate (X of 13)
- [ ] Can navigate back/forward between questions (if applicable)
- [ ] Auto-save preserves partial answers
- [ ] Input validation prevents invalid scores
- [ ] Submit button enabled only when complete
- [ ] Success: redirects to results page
- [ ] Results calculated correctly (3 category scores + overall)
- [ ] Assessment can be retaken (previous attempts archived)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Module Forms (All 12 Modules)
- [ ] All required fields marked with asterisk (*)
- [ ] Cannot mark complete with empty required fields
- [ ] Auto-save triggers after 30s of inactivity
- [ ] Auto-save indicator shows status (Typing/Saving/Saved)
- [ ] Manual "Save" button works
- [ ] Character limits enforced where applicable
- [ ] Rich text editor works (if applicable)
- [ ] File uploads work (if applicable - images, etc.)
- [ ] Form data persists after browser close/refresh
- [ ] Validation errors are clear and actionable

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Payment Forms (Stripe Checkout)
- [ ] All three tier pricing displays correctly ($0, $147, $497)
- [ ] Upgrade pricing calculates correctly ($350 for Pro → Design Ready)
- [ ] Stripe checkout opens in modal/redirect
- [ ] Card validation works (test cards accepted)
- [ ] CVC, expiration, ZIP code validated
- [ ] 3D Secure modal appears for SCA cards
- [ ] Declined cards show appropriate error
- [ ] Successful payment redirects to success page
- [ ] Payment confirmation email sent
- [ ] Tier upgraded in database after payment

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 2. Email Delivery

### Email Infrastructure
- [ ] Brevo API key configured correctly
- [ ] Sender email verified (noreply@brandora.com)
- [ ] SPF record configured
- [ ] DKIM signature configured
- [ ] DMARC policy set (p=quarantine or p=reject)
- [ ] Unsubscribe links work in all emails
- [ ] Email bounces handled (webhook configured)
- [ ] Spam complaints monitored

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Transactional Emails (Must Send)
| Email Template | Trigger | Test Status | Sent? | Renders Correctly? |
|----------------|---------|-------------|-------|-------------------|
| 01-welcome-email.html | Signup | ☐ | ☐ | ☐ |
| 02-assessment-results.html | Assessment completion | ☐ | ☐ | ☐ |
| 03-module-completion.html | All modules complete | ☐ | ☐ | ☐ |
| 04-payment-confirmation.html | Successful payment | ☐ | ☐ | ☐ |

---

### Nurture Emails (Marketing - Optional but Important)
| Email Template | Trigger | Test Status | Sent? | Renders Correctly? |
|----------------|---------|-------------|-------|-------------------|
| 05-upgrade-day-3.html | Day 3 after assessment (no upgrade) | ☐ | ☐ | ☐ |
| 06-upgrade-day-7.html | Day 7 after assessment (no upgrade) | ☐ | ☐ | ☐ |
| 07-upgrade-day-14.html | Day 14 after assessment (no upgrade) | ☐ | ☐ | ☐ |

---

### Email Testing Checklist (All Templates)
For each email template, verify:
- [ ] Renders correctly in Gmail
- [ ] Renders correctly in Outlook
- [ ] Renders correctly in Apple Mail
- [ ] Renders correctly on mobile (responsive)
- [ ] All links work (no 404s)
- [ ] Unsubscribe link present and functional
- [ ] Personalization variables populate correctly (name, email, scores)
- [ ] No broken images
- [ ] Subject line compelling and < 60 characters
- [ ] Preview text set correctly
- [ ] No spelling/grammar errors
- [ ] CTA buttons visible and clickable
- [ ] UTF-8 encoding (special characters work)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Email Automation Testing
- [ ] Welcome email sends within 1 minute of signup
- [ ] Assessment results email sends within 5 minutes of completion
- [ ] Payment confirmation email sends immediately after webhook
- [ ] Day 3 nurture email sends exactly 3 days after assessment
- [ ] Day 7 nurture email sends exactly 7 days after assessment
- [ ] Day 14 nurture email sends exactly 14 days after assessment
- [ ] Nurture sequence stops after user upgrades
- [ ] Emails don't send to bounced addresses
- [ ] Unsubscribed users only receive transactional emails

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 3. Payment Processing

### Stripe Integration
- [ ] Stripe account set to LIVE mode (not test mode)
- [ ] Live API keys configured in production environment
- [ ] Webhook endpoint configured: `https://brandora.com/api/webhooks/stripe`
- [ ] Webhook signing secret set correctly
- [ ] Webhook events subscribed:
  - [ ] payment_intent.succeeded
  - [ ] payment_intent.payment_failed
  - [ ] charge.refunded
  - [ ] checkout.session.completed

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Payment Flow Testing (Live Test Cards)

| Test Case | Card Number | Expected Result | Status |
|-----------|-------------|-----------------|--------|
| Successful payment | 4242 4242 4242 4242 | Payment succeeds, tier upgraded | ☐ |
| Declined card | 4000 0000 0000 0002 | Error shown, no tier upgrade | ☐ |
| 3D Secure required | 4000 0027 6000 3184 | 3DS modal appears, payment succeeds after auth | ☐ |
| Insufficient funds | 4000 0000 0000 9995 | Error shown, user can retry | ☐ |

---

### Payment Edge Cases
- [ ] Duplicate payment prevented (idempotency)
- [ ] Webhook signature verification works
- [ ] Webhook retries handled (Stripe retries on 5xx)
- [ ] Out-of-order webhooks handled correctly
- [ ] Payment timeout handled gracefully
- [ ] Abandoned checkout session expires correctly
- [ ] Refund webhook downgrades tier correctly
- [ ] Multiple rapid payment attempts don't cause issues

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Payment Security
- [ ] SSL/TLS certificate valid on production domain
- [ ] PCI compliance: no card data stored on our servers
- [ ] Stripe.js loaded from Stripe CDN (not self-hosted)
- [ ] Payment form protected by HTTPS
- [ ] CSRF protection on payment endpoints
- [ ] Rate limiting on checkout creation (prevent abuse)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 4. Tier Access Control

### Free Tier (Clarity Starter)
- [ ] Can access Modules 1-4 only
- [ ] Modules 5-12 show "locked" state
- [ ] Clicking locked module shows upgrade prompt
- [ ] Cannot access locked module URLs directly (403 Forbidden)
- [ ] Dashboard shows "4 of 4 modules complete" at 100%
- [ ] Upgrade CTA visible throughout dashboard

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Market Fit Pro Tier
- [ ] Can access Modules 1-8
- [ ] Modules 9-12 locked (Design Ready only)
- [ ] Payment confirmed: $147 charged
- [ ] Tier badge shows "Market Fit Pro" in dashboard
- [ ] Cannot access Design Ready features
- [ ] Upgrade to Design Ready shows $350 (not $497)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Design Ready Tier
- [ ] Can access all Modules 1-12
- [ ] No locked modules
- [ ] Payment confirmed: $497 charged (or $147 + $350)
- [ ] Expert review request button visible
- [ ] Designer brief templates accessible
- [ ] All export options available
- [ ] Tier badge shows "Design Ready"

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Tier Upgrade Testing
- [ ] Free → Market Fit Pro: Modules 5-8 unlock immediately
- [ ] Market Fit Pro → Design Ready: Modules 9-12 unlock immediately
- [ ] Free → Design Ready: All modules unlock
- [ ] Previous progress preserved after upgrade
- [ ] Cannot "purchase" lower tier than current
- [ ] Tier downgrade after refund works correctly

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Access Control Security
- [ ] API endpoints check user tier before allowing access
- [ ] Direct URL access to higher-tier modules blocked
- [ ] Database Row Level Security (RLS) policies configured
- [ ] User cannot manipulate tier via API/console
- [ ] Admin tier override works (for support)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 5. Exports (PDF & CSV)

### PDF Export Testing

| Export Type | Test Case | Expected Result | Status |
|-------------|-----------|-----------------|--------|
| Single Module PDF | Export Module 1 | PDF downloads with module content, formatted correctly | ☐ |
| Complete Strategy PDF | Export all completed modules | Multi-page PDF with table of contents, all modules included | ☐ |
| Assessment Results PDF | Export assessment scores | PDF with scores, charts, recommendations | ☐ |
| Designer Brief PDF | Export designer brief (Design Ready only) | Professional brief template with user inputs | ☐ |
| Brand Guidelines PDF | Export complete brand guidelines | 30+ page comprehensive brand guide | ☐ |

---

### PDF Quality Checks
- [ ] Text is selectable (not image-based)
- [ ] Fonts render correctly (no missing characters)
- [ ] Images/charts render at high resolution
- [ ] Page numbers present (if applicable)
- [ ] Table of contents has working links
- [ ] Headers and footers consistent
- [ ] Brandora branding present (logo, colors)
- [ ] No content cut off or truncated
- [ ] File size reasonable (< 5 MB for strategy PDF)
- [ ] UTF-8 encoding (emojis, special chars work)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### CSV Export Testing

| Export Type | Test Case | Expected Result | Status |
|-------------|-----------|-----------------|--------|
| Assessment Results CSV | Export assessment data | CSV with questions, answers, scores | ☐ |
| Module Data CSV | Export all module inputs | CSV with module name, field, user input, date | ☐ |
| Progress Report CSV | Export completion data | CSV with module, completion status, timestamps | ☐ |

---

### CSV Quality Checks
- [ ] Opens correctly in Excel
- [ ] Opens correctly in Google Sheets
- [ ] UTF-8 encoding with BOM (special characters work)
- [ ] Commas in content properly escaped
- [ ] Quotes in content properly escaped
- [ ] Line breaks preserved correctly
- [ ] Headers row present and clear
- [ ] Date/time formatting consistent (ISO 8601)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Export Access Control
- [ ] Free tier can only export Modules 1-4
- [ ] Market Fit Pro can export Modules 1-8
- [ ] Design Ready can export all modules + briefs + guidelines
- [ ] Cannot export another user's data
- [ ] Rate limiting prevents abuse (5 exports per hour)
- [ ] Large exports don't timeout (< 30s generation time)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 6. Security & Authentication

### Authentication Security
- [ ] Passwords hashed with bcrypt (or Supabase default)
- [ ] Minimum password strength enforced
- [ ] Password reset tokens expire after 1 hour
- [ ] Email confirmation links expire after 24 hours
- [ ] Sessions expire after inactivity (2 hours without "Remember me")
- [ ] "Remember me" sessions expire after 30 days
- [ ] Logout invalidates session completely
- [ ] No session fixation vulnerability

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### API Security
- [ ] All API routes require authentication (except public routes)
- [ ] CSRF protection enabled on state-changing requests
- [ ] CORS configured correctly (only allow own domain)
- [ ] Rate limiting on all API endpoints
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (input sanitization, output escaping)
- [ ] No sensitive data in API responses (no password hashes, etc.)
- [ ] Error messages don't leak sensitive info

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Infrastructure Security
- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] SSL certificate valid and not expiring soon (> 30 days)
- [ ] Security headers configured:
  - [ ] Content-Security-Policy
  - [ ] X-Frame-Options: DENY
  - [ ] X-Content-Type-Options: nosniff
  - [ ] Strict-Transport-Security (HSTS)
  - [ ] Referrer-Policy: no-referrer-when-downgrade
- [ ] No sensitive data in client-side code (API keys, secrets)
- [ ] Environment variables not exposed to client
- [ ] Database credentials secured (not in code)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Data Privacy
- [ ] Privacy policy page published
- [ ] Terms of service page published
- [ ] GDPR compliance (if EU users):
  - [ ] Cookie consent banner (if using non-essential cookies)
  - [ ] Data deletion request process documented
  - [ ] Data export available (user can download their data)
- [ ] User data encrypted at rest (Supabase default)
- [ ] User data encrypted in transit (HTTPS)
- [ ] No unnecessary data collection
- [ ] Analytics anonymized (if applicable)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 7. Performance & Load Testing

### Page Load Performance

| Page | Target Load Time | Actual Time | Status |
|------|------------------|-------------|--------|
| Landing page | < 2s | ___s | ☐ |
| Signup page | < 1.5s | ___s | ☐ |
| Login page | < 1.5s | ___s | ☐ |
| Dashboard | < 2.5s | ___s | ☐ |
| Assessment | < 2s | ___s | ☐ |
| Module page | < 2s | ___s | ☐ |
| Pricing page | < 1.5s | ___s | ☐ |

**Test Environment:** ☐ Desktop ☐ Mobile ☐ Slow 3G

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### API Response Times

| Endpoint | Target | Actual | Status |
|----------|--------|--------|--------|
| POST /api/auth/signup | < 1s | ___s | ☐ |
| POST /api/auth/login | < 500ms | ___s | ☐ |
| GET /api/user/dashboard | < 1s | ___s | ☐ |
| POST /api/assessment/submit | < 1.5s | ___s | ☐ |
| POST /api/modules/[id]/save (auto-save) | < 500ms | ___s | ☐ |
| POST /api/checkout/create | < 2s | ___s | ☐ |
| POST /api/export/pdf | < 10s | ___s | ☐ |

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Load Testing (Concurrent Users)

**Test with:** [Artillery](https://www.artillery.io/), [k6](https://k6.io/), or similar

| Scenario | Target | Result | Status |
|----------|--------|--------|--------|
| 10 concurrent signups/min | No errors | ___ errors | ☐ |
| 50 concurrent users on dashboard | < 3s load time | ___s | ☐ |
| 100 concurrent auto-saves | < 1s response | ___s | ☐ |
| 20 concurrent payments | All succeed | ___ succeeded | ☐ |
| 10 concurrent PDF exports | < 15s each | ___s avg | ☐ |

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Database Performance
- [ ] All queries optimized (< 100ms for reads)
- [ ] Indexes created on frequently queried columns (user_id, email, tier)
- [ ] No N+1 query problems
- [ ] Connection pooling configured
- [ ] Database backup automated (daily)
- [ ] Database restore tested successfully

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 8. Cross-Browser & Device Testing

### Desktop Browsers

| Browser | Version | Signup | Login | Assessment | Modules | Payment | Export | Status |
|---------|---------|--------|-------|------------|---------|---------|--------|--------|
| Chrome | Latest | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ Pass |
| Firefox | Latest | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ Pass |
| Safari | Latest | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ Pass |
| Edge | Latest | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ Pass |

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Mobile Browsers

| Device | OS | Browser | Responsive? | All Features Work? | Status |
|--------|----|---------|-----------|--------------------|--------|
| iPhone 13 | iOS 17 | Safari | ☐ | ☐ | ☐ Pass |
| Samsung Galaxy | Android 13 | Chrome | ☐ | ☐ | ☐ Pass |
| iPad Air | iOS 17 | Safari | ☐ | ☐ | ☐ Pass |

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Responsive Design Breakpoints

| Breakpoint | Width | Layout Check | Status |
|------------|-------|--------------|--------|
| Mobile | 375px | Navigation collapses, forms stack vertically | ☐ |
| Tablet | 768px | 2-column layouts, side-by-side forms | ☐ |
| Desktop | 1024px | Full layout, sidebar visible | ☐ |
| Large Desktop | 1440px+ | Centered content, max-width applied | ☐ |

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 9. SEO & Analytics

### SEO Basics
- [ ] All pages have unique `<title>` tags (< 60 chars)
- [ ] All pages have meta descriptions (< 160 chars)
- [ ] Open Graph tags set for social sharing
- [ ] Twitter Card tags set
- [ ] Canonical URLs configured
- [ ] robots.txt file present and correct
- [ ] sitemap.xml generated and submitted to Google
- [ ] Favicon present (all sizes)
- [ ] Structured data (JSON-LD) for pricing, organization

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Google Search Console
- [ ] Domain verified in Search Console
- [ ] Sitemap submitted
- [ ] No crawl errors reported
- [ ] Mobile usability check passed
- [ ] Core Web Vitals in "Good" range

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Analytics Setup
- [ ] Google Analytics 4 (GA4) configured
- [ ] GA4 tracking code on all pages
- [ ] Goal conversions tracked:
  - [ ] Signup
  - [ ] Assessment completion
  - [ ] Payment (tier 1, tier 2, tier 3)
  - [ ] Module completion
  - [ ] Export download
- [ ] E-commerce tracking for payments (Stripe integration)
- [ ] Events firing correctly in GA4 debug mode
- [ ] Privacy-compliant (anonymize IPs if needed)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 10. Legal & Compliance

### Legal Pages
- [ ] Privacy Policy published at /privacy
- [ ] Terms of Service published at /terms
- [ ] Refund Policy clearly stated (30-day money-back)
- [ ] Contact page/email for support published

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Cookie Compliance
- [ ] Cookie banner shown (if using non-essential cookies)
- [ ] Cookie policy page published
- [ ] User can opt-out of non-essential cookies
- [ ] Cookie preferences saved

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Accessibility (WCAG 2.1 Level AA)
- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] All images have alt text
- [ ] Forms have proper labels (not just placeholders)
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] Screen reader tested (NVDA or VoiceOver)
- [ ] No auto-playing audio/video
- [ ] Error messages associated with form fields

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 11. Monitoring & Alerting

### Error Tracking
- [ ] Sentry (or similar) configured for error tracking
- [ ] Client-side errors captured
- [ ] Server-side errors captured
- [ ] Sourcemaps uploaded for stack traces
- [ ] Alerts configured for critical errors (Slack/email)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Uptime Monitoring
- [ ] Uptime monitor configured (UptimeRobot, Pingdom, etc.)
- [ ] Checks every 5 minutes
- [ ] Alerts sent if downtime > 2 minutes
- [ ] Multiple locations monitored (US, EU)
- [ ] Status page set up (optional but recommended)

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Performance Monitoring
- [ ] Vercel Analytics enabled (or similar)
- [ ] Core Web Vitals tracked:
  - [ ] Largest Contentful Paint (LCP) < 2.5s
  - [ ] First Input Delay (FID) < 100ms
  - [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] API response times monitored
- [ ] Database query performance logged

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Logging
- [ ] Application logs centralized (Vercel logs, Datadog, etc.)
- [ ] Log levels configured (INFO, WARN, ERROR)
- [ ] Sensitive data not logged (passwords, tokens, card numbers)
- [ ] Request IDs for tracing
- [ ] Logs retained for 30 days minimum

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 12. Final Production Checks

### Domain & DNS
- [ ] Custom domain configured (brandora.com)
- [ ] DNS propagated (check with dnschecker.org)
- [ ] www redirects to non-www (or vice versa)
- [ ] SSL certificate valid for production domain
- [ ] SSL certificate auto-renewal enabled

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Environment Configuration
- [ ] Production environment variables set (Vercel/hosting)
- [ ] No test/development credentials in production
- [ ] Database set to production instance (not staging)
- [ ] Stripe set to LIVE mode (not test mode)
- [ ] Brevo using production API key
- [ ] Supabase using production project
- [ ] All API keys rotated from staging
- [ ] Debug mode disabled
- [ ] Verbose logging disabled

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Content Review
- [ ] All placeholder text replaced (no "Lorem ipsum")
- [ ] All images have production-ready versions (no watermarks)
- [ ] Spelling and grammar checked on all pages
- [ ] Brand voice consistent throughout
- [ ] CTAs clear and compelling
- [ ] Pricing clearly displayed
- [ ] No broken links (run link checker)
- [ ] 404 page exists and styled

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Smoke Test in Production (Post-Deploy)
Run these immediately after deploying to production:

- [ ] Homepage loads
- [ ] Can create new account
- [ ] Receive welcome email
- [ ] Confirm email and login
- [ ] Complete assessment
- [ ] Receive assessment results email
- [ ] Access free modules (1-4)
- [ ] Attempt to access locked module (should be blocked)
- [ ] Initiate payment for Market Fit Pro
- [ ] Payment succeeds (use test card, then refund)
- [ ] Tier upgraded, modules unlocked
- [ ] Receive payment confirmation email
- [ ] Complete a module, auto-save works
- [ ] Export a PDF
- [ ] Logout and login again
- [ ] All data persisted correctly

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

### Performance Benchmarks (Production)

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Lighthouse Performance Score | > 90 | ___ | ☐ |
| Lighthouse Accessibility Score | > 90 | ___ | ☐ |
| Lighthouse Best Practices Score | > 90 | ___ | ☐ |
| Lighthouse SEO Score | > 90 | ___ | ☐ |
| Time to First Byte (TTFB) | < 600ms | ___ms | ☐ |
| First Contentful Paint (FCP) | < 1.8s | ___s | ☐ |
| Largest Contentful Paint (LCP) | < 2.5s | ___s | ☐ |

**Tester:** _______________ **Date:** _____ **Status:** ☐ Pass ☐ Fail

---

## 🚀 Final Launch Approval

### Pre-Launch Meeting Attendees
- [ ] Product Owner: ___________________
- [ ] Lead Developer: ___________________
- [ ] QA Lead: ___________________
- [ ] Marketing Lead: ___________________

### Launch Checklist
- [ ] All QA sections above marked as PASS
- [ ] No critical bugs outstanding
- [ ] All high-priority bugs fixed or documented as known issues
- [ ] Rollback plan documented and tested
- [ ] Support team trained on common issues
- [ ] Customer support email/system ready
- [ ] Social media accounts ready for launch
- [ ] Launch announcement drafted
- [ ] Payment system tested with real transaction (then refunded)

### Risk Assessment
- [ ] Identified risks documented
- [ ] Mitigation strategies in place
- [ ] Monitoring and alerting active
- [ ] On-call rotation scheduled for launch week

### Launch Decision
- [ ] **GO for launch** ✅
- [ ] **NO-GO - issues must be resolved** ❌

**Launch Date:** ___________________
**Approved By:** ___________________
**Signature:** ___________________

---

## Post-Launch Monitoring (First 48 Hours)

### Immediate Post-Launch Checks (Every 2 Hours)
- [ ] Site is up and responsive
- [ ] No error spikes in Sentry
- [ ] Signups working
- [ ] Payments processing
- [ ] Emails sending
- [ ] Database performance normal
- [ ] No security alerts

### First Week Metrics to Monitor
- [ ] Signup conversion rate
- [ ] Assessment completion rate
- [ ] Payment success rate
- [ ] Email delivery rate
- [ ] Error rate < 1%
- [ ] User complaints/support tickets
- [ ] Core Web Vitals remain in "Good" range

---

## 📊 Testing Summary Dashboard

| Category | Tests | Passed | Failed | % |
|----------|-------|--------|--------|---|
| Forms Validation | ___ | ___ | ___ | ___% |
| Email Delivery | ___ | ___ | ___ | ___% |
| Payment Processing | ___ | ___ | ___ | ___% |
| Tier Access Control | ___ | ___ | ___ | ___% |
| Exports | ___ | ___ | ___ | ___% |
| Security | ___ | ___ | ___ | ___% |
| Performance | ___ | ___ | ___ | ___% |
| Cross-Browser | ___ | ___ | ___ | ___% |
| SEO & Analytics | ___ | ___ | ___ | ___% |
| Legal & Compliance | ___ | ___ | ___ | ___% |
| Monitoring | ___ | ___ | ___ | ___% |
| Production Checks | ___ | ___ | ___ | ___% |
| **TOTAL** | **___** | **___** | **___** | **___%** |

**Overall Status:** ☐ Ready for Launch ☐ Not Ready

---

## Emergency Contacts

**On-Call Developer:** ___________________
**Phone:** ___________________

**DevOps/Infrastructure:** ___________________
**Phone:** ___________________

**Product Owner:** ___________________
**Phone:** ___________________

**Stripe Support:** https://support.stripe.com
**Vercel Support:** https://vercel.com/support
**Supabase Support:** https://supabase.com/support

---

**Document Version:** 1.0
**Last Updated:** ___________________
**Next Review Date:** ___________________
