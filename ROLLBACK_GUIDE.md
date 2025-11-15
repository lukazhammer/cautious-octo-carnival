# Brandora - Rollback & Recovery Guide

Complete guide for rolling back deployments and recovering from failures.

---

## Table of Contents

1. [When to Rollback](#when-to-rollback)
2. [Rollback Methods](#rollback-methods)
3. [Quick Rollback (Vercel Dashboard)](#quick-rollback-vercel-dashboard)
4. [Rollback via CLI](#rollback-via-cli)
5. [Rollback with Git](#rollback-with-git)
6. [Database Rollback](#database-rollback)
7. [Partial Rollback Strategies](#partial-rollback-strategies)
8. [Post-Rollback Procedures](#post-rollback-procedures)
9. [Incident Response](#incident-response)
10. [Prevention Strategies](#prevention-strategies)

---

## When to Rollback

### Critical Issues (Rollback Immediately)

Initiate rollback if you observe:

- **Site completely down**: 500 errors on all pages
- **Payment processing failure**: Stripe checkout broken
- **Authentication broken**: Users cannot log in
- **Database connection errors**: Persistent connection failures
- **Data loss or corruption**: Users reporting missing data
- **Security breach**: Exposed credentials, unauthorized access
- **Error rate >5%**: More than 5% of requests failing

### Major Issues (Consider Rollback)

Evaluate rollback for:

- **Critical feature broken**: Core functionality not working
- **Performance degradation >50%**: Pages loading significantly slower
- **Email delivery failure**: Transactional emails not sending
- **API integration failures**: Stripe, Supabase, Perplexity errors
- **Accessibility broken**: Site unusable on mobile or certain browsers

### Minor Issues (Fix Forward)

Do NOT rollback for:

- **Typos or minor copy errors**: Fix with a patch
- **Non-critical features broken**: Fix and deploy
- **Performance degradation <30%**: Optimize and deploy
- **Minor styling issues**: Fix with a hotfix
- **Low-impact bugs**: Log as issue and fix in next release

---

## Rollback Methods

Vercel provides multiple ways to rollback. Choose based on urgency:

| Method | Speed | Use Case |
|--------|-------|----------|
| Vercel Dashboard | **Fastest** (1 minute) | Critical production issues |
| Vercel CLI | Fast (2-3 minutes) | Command-line preference |
| Git Revert | Moderate (5-10 minutes) | Need to preserve history |
| Git Reset | Fast but risky | Development/staging only |

---

## Quick Rollback (Vercel Dashboard)

**Time required**: ~1 minute

This is the **fastest and recommended** method for production rollbacks.

### Step 1: Access Deployments

1. Go to https://vercel.com/dashboard
2. Select your project (Brandora)
3. Click on **Deployments** tab

### Step 2: Find Last Working Deployment

You'll see a list of deployments. Identify the last working deployment:

- **Current production**: Has "Production" badge
- **Previous deployments**: Listed chronologically
- **Status indicators**:
  - ✅ **Ready**: Deployment successful
  - ❌ **Error**: Deployment failed
  - 🔄 **Building**: Currently building

**How to identify last good deployment**:
1. Look for the deployment **before** the current production
2. Verify it has "Ready" status
3. Note the commit message and timestamp
4. Ideally, this should be from earlier today or yesterday

### Step 3: Promote to Production

1. Find the last working deployment
2. Click the **⋯** (three dots) menu on the right
3. Select **Promote to Production**
4. Confirm the promotion

### Step 4: Verify Rollback

1. Wait 10-30 seconds for DNS propagation
2. Visit https://brandora.com
3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Verify the site is working
5. Check the deployment in Vercel dashboard shows "Production" badge

**Example**:

```
Current production (broken):
  Deployment: deploy_abc123
  Time: 2025-11-15 14:30
  Commit: "Add new payment feature"
  Status: Ready ❌ (but has bugs)

Last working deployment:
  Deployment: deploy_xyz789
  Time: 2025-11-15 10:00
  Commit: "Update landing page copy"
  Status: Ready ✅

→ Click ⋯ on deploy_xyz789 → Promote to Production
```

---

## Rollback via CLI

**Time required**: ~2-3 minutes

Use this method if you prefer command-line tools or need to automate rollbacks.

### Prerequisites

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login
```

### Step 1: List Recent Deployments

```bash
# Navigate to project directory
cd /path/to/brandora

# List deployments
vercel ls
```

**Output**:
```
Age  Deployment                     Status  Environment
1m   brandora-abc123.vercel.app    Ready   Production
2h   brandora-xyz789.vercel.app    Ready   Preview
5h   brandora-def456.vercel.app    Ready   Preview
```

### Step 2: Identify Previous Production Deployment

```bash
# Get deployment details
vercel inspect [deployment-url]

# Example
vercel inspect brandora-xyz789.vercel.app
```

### Step 3: Promote Previous Deployment

```bash
# Promote a specific deployment to production
vercel promote [deployment-url]

# Example
vercel promote brandora-xyz789.vercel.app
```

### Step 4: Verify

```bash
# Check current production
vercel ls --prod

# View logs
vercel logs https://brandora.com --follow
```

---

## Rollback with Git

Use this method to maintain a clean Git history and trigger automatic re-deployment.

### Method 1: Git Revert (Recommended)

**Preserves history**, creates a new commit that undoes changes.

```bash
# Navigate to repository
cd /path/to/brandora

# Checkout main branch
git checkout main

# Pull latest changes
git pull origin main

# Find the bad commit
git log --oneline -10

# Revert the bad commit (creates a new commit)
git revert <commit-hash>

# Example
git revert abc123

# Resolve conflicts if any, then commit
git add .
git commit -m "Revert: Roll back payment feature due to bugs"

# Push to trigger new deployment
git push origin main
```

**Advantages**:
- Preserves full history
- Safe and reversible
- Clear audit trail

**Disadvantages**:
- Slower (~5-10 minutes including build)
- Requires new deployment

### Method 2: Git Reset (Use with Caution)

**Rewrites history**, dangerous for shared branches.

⚠️ **WARNING**: Only use on feature branches, NEVER on `main` in production!

```bash
# Find the last good commit
git log --oneline -10

# Reset to last good commit (soft reset - keeps changes)
git reset --soft <commit-hash>

# Or hard reset (discards all changes)
git reset --hard <commit-hash>

# Force push (DANGEROUS!)
git push origin main --force
```

**Advantages**:
- Cleaner history (no revert commits)

**Disadvantages**:
- ⚠️ Destructive, cannot be undone easily
- ⚠️ Breaks for collaborators who pulled the bad commit
- ⚠️ Not recommended for production

---

## Database Rollback

Rolling back code is easy, but rolling back the database requires careful planning.

### Supabase Database Rollback

#### Option 1: Point-in-Time Recovery (Recommended)

Supabase Pro plan and higher support point-in-time recovery.

1. Go to https://app.supabase.com/project/_/database/backups
2. Click **Point in Time Recovery**
3. Select the time to restore to (before the bad deployment)
4. Click **Start Recovery**
5. Wait for recovery to complete (~5-30 minutes depending on size)

**Note**: This creates a new project. You'll need to:
- Update `NEXT_PUBLIC_SUPABASE_URL` in Vercel
- Update `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel
- Update `SUPABASE_SERVICE_ROLE_KEY` in Vercel
- Update DNS/redirect to new project

#### Option 2: Restore from Backup

1. Go to https://app.supabase.com/project/_/database/backups
2. Find the backup before the bad deployment
3. Click **Restore** on the backup
4. Confirm restoration

**Note**: This overwrites your current database!

#### Option 3: Manual Rollback with Migrations

If you're using database migrations:

```bash
# Rollback last migration
npx supabase migration down

# Or rollback to specific migration
npx supabase migration down <migration-name>
```

### Database Rollback Best Practices

To minimize risk:

1. **Always make database changes backwards-compatible**
   - Add columns as nullable first
   - Deprecate before removing
   - Use feature flags

2. **Test migrations on preview environment first**
   ```bash
   # Apply to preview database
   npx supabase db push --preview
   ```

3. **Create manual backup before risky changes**
   - Use `pg_dump` for manual backups
   - Store in secure location

4. **Use database transactions for critical operations**
   ```sql
   BEGIN;
   -- Your changes here
   COMMIT;
   -- or ROLLBACK if something fails
   ```

---

## Partial Rollback Strategies

Sometimes you don't need a full rollback. Here are targeted approaches:

### 1. Feature Flag Rollback

If you deployed with feature flags:

```typescript
// In your code
const newFeatureEnabled = process.env.NEXT_PUBLIC_ENABLE_NEW_FEATURE === 'true';
```

**Quick disable in Vercel**:
1. Go to **Settings → Environment Variables**
2. Find `NEXT_PUBLIC_ENABLE_NEW_FEATURE`
3. Change value from `true` to `false`
4. Trigger a redeploy (or wait for automatic rebuild)

**Advantages**:
- No code changes needed
- Can toggle on/off quickly
- Can enable for specific users (A/B testing)

### 2. Environment Variable Rollback

If the issue is caused by environment variable changes:

1. Go to Vercel **Settings → Environment Variables**
2. Find the changed variable
3. Click **Edit**
4. Restore previous value
5. Trigger redeploy

### 3. API Route Rollback

If only one API route is broken:

```typescript
// app/api/problematic-route/route.ts
export async function GET() {
  // Temporarily return maintenance response
  return Response.json(
    { error: 'This endpoint is temporarily unavailable' },
    { status: 503 }
  );
}
```

Deploy this quick fix, then properly fix and re-deploy.

### 4. Client-Side Conditional Rendering

If UI is broken but backend works:

```typescript
// Show old UI until fixed
const useOldUI = process.env.NEXT_PUBLIC_USE_OLD_UI === 'true';

return useOldUI ? <OldComponent /> : <NewComponent />;
```

---

## Post-Rollback Procedures

After a successful rollback, follow these steps:

### Immediate (0-30 minutes)

1. **Verify rollback successful**
   - [ ] Site loads without errors
   - [ ] Critical user journeys work
   - [ ] Payment processing works
   - [ ] Authentication works

2. **Monitor key metrics**
   - [ ] Error rate returned to normal
   - [ ] Response times back to baseline
   - [ ] No spike in 500 errors

3. **Communicate with stakeholders**
   - [ ] Notify team of rollback
   - [ ] Update status page (if applicable)
   - [ ] Post in team Slack/Discord

4. **Document the incident**
   - [ ] What happened?
   - [ ] When was it detected?
   - [ ] What was the impact?
   - [ ] How was it resolved?
   - [ ] Who was involved?

### Short-term (1-4 hours)

1. **Investigate root cause**
   - Review deployment logs
   - Check error tracking (Sentry)
   - Review code changes that caused issue
   - Identify what tests would have caught this

2. **Create hotfix if needed**
   ```bash
   # Create hotfix branch
   git checkout -b hotfix/payment-bug

   # Fix the issue
   # ... make changes ...

   # Test thoroughly
   npm run test
   npm run build

   # Deploy to preview
   git push origin hotfix/payment-bug

   # Test preview deployment
   # ... verify fix ...

   # Merge to main
   git checkout main
   git merge hotfix/payment-bug
   git push origin main
   ```

3. **Update monitoring/alerts**
   - Add alerts for this type of failure
   - Improve error messages
   - Add health checks

### Long-term (1-7 days)

1. **Conduct post-mortem**
   - Schedule meeting with team
   - Discuss what went wrong
   - Document lessons learned
   - Create action items

2. **Improve testing**
   - Add tests for the bug
   - Improve CI/CD pipeline
   - Add integration tests

3. **Update documentation**
   - Update deployment checklist
   - Document new failure modes
   - Update runbooks

4. **Review deployment process**
   - Should we require more approvals?
   - Do we need staging environment?
   - Better QA process?

---

## Incident Response

### Severity Levels

| Level | Description | Response Time | Example |
|-------|-------------|---------------|---------|
| **P0 - Critical** | Site down, data loss, security breach | Immediate | Payment processing broken |
| **P1 - Major** | Core features broken, major performance issues | < 15 minutes | Authentication broken |
| **P2 - Minor** | Non-critical features broken | < 2 hours | Email delivery delayed |
| **P3 - Low** | Cosmetic issues, minor bugs | < 24 hours | Typo on homepage |

### Incident Response Workflow

#### 1. Detection (0-5 minutes)

**How incidents are detected**:
- Monitoring alerts (Sentry, uptime monitors)
- User reports
- Team member discovery
- Automated tests failing

**Action**:
- Acknowledge the alert
- Assess severity
- Notify team

#### 2. Assessment (5-10 minutes)

**Questions to answer**:
- What is broken?
- How many users affected?
- What is the business impact?
- When did it start?

**Action**:
- Check Vercel logs
- Check error tracking
- Check analytics for traffic drop
- Check recent deployments

#### 3. Decision (10-15 minutes)

**Options**:
1. **Rollback** - If recent deployment caused it
2. **Hotfix** - If quick fix available
3. **Mitigation** - If rollback not possible
4. **Monitor** - If low impact

**Decision matrix**:

| Severity | Recent Deploy? | Known Fix? | Action |
|----------|----------------|------------|--------|
| P0 | Yes | - | **Rollback** |
| P0 | No | Yes | **Hotfix** |
| P0 | No | No | **Mitigate + Investigate** |
| P1 | Yes | - | **Rollback** |
| P1 | No | Yes | **Hotfix** |
| P2-P3 | - | - | **Fix Forward** |

#### 4. Execution (15-30 minutes)

Follow the appropriate rollback/fix procedure above.

#### 5. Verification (30-45 minutes)

- [ ] Issue resolved
- [ ] Metrics returned to normal
- [ ] User reports stopped
- [ ] No new errors

#### 6. Communication (45-60 minutes)

**Internal**:
- Post in team chat
- Update incident ticket
- Schedule post-mortem

**External** (if needed):
- Update status page
- Email affected customers
- Post on social media (for major outages)

---

## Prevention Strategies

### Before Deployment

1. **Thorough Testing**
   ```bash
   # Run full test suite
   npm run test
   npm run test:e2e
   npm run test:integration
   ```

2. **Staged Rollout**
   - Deploy to preview first
   - Test on preview URL
   - Get team approval
   - Monitor for 1-2 hours after production deploy

3. **Feature Flags**
   ```typescript
   // Enable for 10% of users first
   const enableNewFeature =
     process.env.NEXT_PUBLIC_ENABLE_NEW_FEATURE === 'true' &&
     Math.random() < 0.1;
   ```

4. **Database Migrations**
   - Test on preview database first
   - Make backwards-compatible
   - Have rollback plan

### During Deployment

1. **Monitor Deployment**
   - Watch build logs
   - Check for warnings
   - Verify environment variables loaded

2. **Gradual Traffic Shift** (Enterprise only)
   - Vercel Enterprise supports gradual traffic shifting
   - Roll out to 10%, 25%, 50%, 100%

3. **Smoke Tests**
   ```bash
   # Run smoke tests after deploy
   npm run test:smoke -- --url=https://brandora.com
   ```

### After Deployment

1. **Monitor Metrics** (first 1-2 hours)
   - Error rates
   - Response times
   - Conversion rates
   - User complaints

2. **Watch Key Endpoints**
   ```bash
   # Monitor critical endpoint
   watch -n 10 'curl -s -o /dev/null -w "%{http_code}" https://brandora.com/api/health'
   ```

3. **Set Up Alerts**
   - Error rate spike
   - Response time degradation
   - Payment failures
   - Webhook delivery failures

---

## Emergency Contacts

### Team

| Role | Name | Contact |
|------|------|---------|
| Lead Developer | __________ | __________ |
| DevOps Engineer | __________ | __________ |
| Product Owner | __________ | __________ |

### External Support

| Service | Support URL | Priority Support Phone |
|---------|-------------|------------------------|
| Vercel | https://vercel.com/support | Enterprise only |
| Supabase | https://supabase.com/support | Pro plan and above |
| Stripe | https://support.stripe.com | 24/7 for live mode |

---

## Rollback Checklist

Quick reference checklist for rollbacks:

### Pre-Rollback
- [ ] Confirm issue is deployment-related
- [ ] Assess severity and impact
- [ ] Notify team of rollback decision
- [ ] Identify last working deployment

### Rollback Execution
- [ ] Promote previous deployment to production (Vercel Dashboard)
- [ ] OR revert commit and push (Git method)
- [ ] Wait for deployment to complete
- [ ] Clear CDN cache if needed

### Post-Rollback Verification
- [ ] Visit https://brandora.com
- [ ] Test critical user journeys
- [ ] Check error rates returned to normal
- [ ] Monitor for 30 minutes

### Documentation
- [ ] Document incident
- [ ] Notify stakeholders
- [ ] Schedule post-mortem
- [ ] Create follow-up tasks

---

## Quick Reference Commands

```bash
# Vercel CLI - List deployments
vercel ls

# Vercel CLI - Promote deployment
vercel promote [deployment-url]

# Vercel CLI - View logs
vercel logs https://brandora.com --follow

# Git - Revert last commit
git revert HEAD
git push origin main

# Git - Revert specific commit
git revert <commit-hash>
git push origin main

# Supabase - Rollback migration
npx supabase migration down
```

---

## Testing Rollback Procedures

**Practice rollback regularly** (quarterly recommended):

1. Deploy a test change to preview
2. Practice rolling back via Vercel dashboard
3. Practice rolling back via CLI
4. Practice reverting with Git
5. Time each method
6. Update this guide with learnings

---

**Last Updated**: 2025-11-15

**Next Review**: 2026-02-15 (Quarterly review recommended)
