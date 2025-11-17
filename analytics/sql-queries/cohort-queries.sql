-- Cohort Analysis SQL Queries

-- Monthly Signup Cohort Retention
WITH cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', signup_date) as cohort_month
  FROM users
),
monthly_activity AS (
  SELECT DISTINCT
    user_id,
    DATE_TRUNC('month', activity_date) as activity_month
  FROM user_activity
  WHERE meaningful_action = true
)
SELECT
  c.cohort_month,
  EXTRACT(MONTH FROM AGE(ma.activity_month, c.cohort_month)) as month_number,
  COUNT(DISTINCT ma.user_id) as active_users,
  COUNT(DISTINCT ma.user_id)::float / 
    (SELECT COUNT(*) FROM cohorts WHERE cohort_month = c.cohort_month) as retention_pct
FROM cohorts c
LEFT JOIN monthly_activity ma ON c.user_id = ma.user_id
WHERE c.cohort_month >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '12 months')
GROUP BY c.cohort_month, month_number
ORDER BY c.cohort_month, month_number;
