# Cohort Analysis Templates

## 1. Signup Cohorts

### Monthly Retention Cohorts

```sql
WITH cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', signup_date) as cohort_month
  FROM users
),
activity AS (
  SELECT DISTINCT
    user_id,
    DATE_TRUNC('month', activity_date) as activity_month
  FROM user_activity
)
SELECT
  c.cohort_month,
  a.activity_month,
  DATEDIFF('month', c.cohort_month, a.activity_month) as month_number,
  COUNT(DISTINCT a.user_id) as retained_users,
  COUNT(DISTINCT a.user_id)::float / 
    (SELECT COUNT(DISTINCT user_id) FROM cohorts WHERE cohort_month = c.cohort_month) as retention_rate
FROM cohorts c
LEFT JOIN activity a ON c.user_id = a.user_id
GROUP BY c.cohort_month, a.activity_month
ORDER BY c.cohort_month, month_number;
```

## 2. Revenue Cohorts

### MRR Retention by Cohort

```sql
WITH cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', first_payment_date) as cohort_month,
    mrr as starting_mrr
  FROM subscriptions
  WHERE first_payment_date IS NOT NULL
),
monthly_mrr AS (
  SELECT
    user_id,
    DATE_TRUNC('month', period_start) as period_month,
    mrr
  FROM subscriptions
  WHERE status = 'active'
)
SELECT
  c.cohort_month,
  m.period_month,
  DATEDIFF('month', c.cohort_month, m.period_month) as month_number,
  SUM(m.mrr) as cohort_mrr,
  SUM(m.mrr) / SUM(c.starting_mrr) as mrr_retention_rate
FROM cohorts c
LEFT JOIN monthly_mrr m ON c.user_id = m.user_id
GROUP BY c.cohort_month, m.period_month
ORDER BY c.cohort_month, month_number;
```

## 3. Feature Adoption Cohorts

Track feature adoption by signup cohort over time.

## 4. Tier Cohorts

Compare behavior across different pricing tiers.

## 5. Channel Cohorts

Compare retention/revenue by acquisition channel.
