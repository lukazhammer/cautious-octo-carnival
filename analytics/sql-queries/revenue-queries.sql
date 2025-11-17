-- Revenue Metrics SQL Queries

-- Current MRR
SELECT 
  SUM(CASE
    WHEN billing_period = 'monthly' THEN amount
    WHEN billing_period = 'annual' THEN amount / 12
    WHEN billing_period = 'quarterly' THEN amount / 3
  END) as mrr
FROM subscriptions
WHERE status = 'active';

-- MRR Waterfall (Monthly)
WITH current_month AS (
  SELECT SUM(mrr) as starting_mrr
  FROM mrr_snapshots
  WHERE snapshot_date = DATE_TRUNC('month', CURRENT_DATE)
),
new_mrr AS (
  SELECT SUM(mrr) as amount
  FROM subscriptions
  WHERE first_payment_date >= DATE_TRUNC('month', CURRENT_DATE)
),
expansion AS (
  SELECT SUM(mrr_change) as amount
  FROM subscription_changes
  WHERE change_date >= DATE_TRUNC('month', CURRENT_DATE)
    AND change_type = 'upgrade'
),
contraction AS (
  SELECT SUM(ABS(mrr_change)) as amount
  FROM subscription_changes
  WHERE change_date >= DATE_TRUNC('month', CURRENT_DATE)
    AND change_type = 'downgrade'
),
churned AS (
  SELECT SUM(mrr) as amount
  FROM subscriptions
  WHERE cancellation_date >= DATE_TRUNC('month', CURRENT_DATE)
)
SELECT
  cm.starting_mrr,
  COALESCE(n.amount, 0) as new_mrr,
  COALESCE(e.amount, 0) as expansion_mrr,
  COALESCE(c.amount, 0) as contraction_mrr,
  COALESCE(ch.amount, 0) as churned_mrr,
  cm.starting_mrr + COALESCE(n.amount, 0) + COALESCE(e.amount, 0) 
    - COALESCE(c.amount, 0) - COALESCE(ch.amount, 0) as ending_mrr
FROM current_month cm, new_mrr n, expansion e, contraction c, churned ch;

-- Net Revenue Retention (NRR)
SELECT 
  ((ending_mrr + expansion_mrr - churned_mrr - contraction_mrr) / starting_mrr) * 100 as nrr
FROM (
  -- Calculate from cohort starting 12 months ago
  SELECT 
    SUM(starting_mrr) as starting_mrr,
    SUM(expansion) as expansion_mrr,
    SUM(churn) as churned_mrr,
    SUM(contraction) as contraction_mrr,
    SUM(current_mrr) as ending_mrr
  FROM cohort_mrr_12mo
);
