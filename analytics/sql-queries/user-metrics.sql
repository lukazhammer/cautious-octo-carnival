-- User Metrics SQL Queries

-- Daily Active Users (DAU)
SELECT 
  DATE(activity_date) as date,
  COUNT(DISTINCT user_id) as dau
FROM user_activity
WHERE activity_date >= CURRENT_DATE - INTERVAL '30 days'
  AND meaningful_action = true
GROUP BY DATE(activity_date)
ORDER BY date;

-- Weekly Active Users (WAU)
SELECT 
  DATE_TRUNC('week', activity_date) as week,
  COUNT(DISTINCT user_id) as wau
FROM user_activity
WHERE activity_date >= CURRENT_DATE - INTERVAL '90 days'
  AND meaningful_action = true
GROUP BY week
ORDER BY week;

-- DAU/MAU Ratio (Stickiness)
WITH dau AS (
  SELECT DATE(activity_date) as date, COUNT(DISTINCT user_id) as count
  FROM user_activity
  WHERE activity_date >= CURRENT_DATE - INTERVAL '30 days'
    AND meaningful_action = true
  GROUP BY DATE(activity_date)
),
mau AS (
  SELECT COUNT(DISTINCT user_id) as count
  FROM user_activity
  WHERE activity_date >= CURRENT_DATE - INTERVAL '30 days'
    AND meaningful_action = true
)
SELECT 
  dau.date,
  dau.count as dau,
  mau.count as mau,
  (dau.count::float / mau.count) as stickiness
FROM dau, mau
ORDER BY dau.date;

-- Activation Rate (7-day)
SELECT 
  COUNT(DISTINCT CASE WHEN activated_at <= signup_date + INTERVAL '7 days' 
        THEN user_id END)::float / 
  COUNT(DISTINCT user_id) * 100 as activation_rate_7d
FROM users
WHERE signup_date >= CURRENT_DATE - INTERVAL '14 days';
