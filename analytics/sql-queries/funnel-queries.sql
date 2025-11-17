-- Funnel Analysis SQL Queries

-- Signup Funnel (30 days)
WITH funnel_events AS (
  SELECT
    session_id,
    MAX(CASE WHEN event_name = 'Landing Page Viewed' THEN 1 ELSE 0 END) as step_1,
    MAX(CASE WHEN event_name = 'Signup Page Viewed' THEN 1 ELSE 0 END) as step_2,
    MAX(CASE WHEN event_name = 'Signup Form Started' THEN 1 ELSE 0 END) as step_3,
    MAX(CASE WHEN event_name = 'Email Entered' THEN 1 ELSE 0 END) as step_4,
    MAX(CASE WHEN event_name = 'Account Created' THEN 1 ELSE 0 END) as step_5,
    MAX(CASE WHEN event_name = 'Email Verified' THEN 1 ELSE 0 END) as step_6
  FROM events
  WHERE event_date >= CURRENT_DATE - INTERVAL '30 days'
  GROUP BY session_id
)
SELECT
  'Landing Page' as step, 
  SUM(step_1) as users,
  100.0 as conversion_rate
FROM funnel_events
UNION ALL
SELECT 
  'Signup Page',
  SUM(step_2),
  (SUM(step_2)::float / NULLIF(SUM(step_1), 0) * 100)
FROM funnel_events
UNION ALL
SELECT 
  'Form Started',
  SUM(step_3),
  (SUM(step_3)::float / NULLIF(SUM(step_2), 0) * 100)
FROM funnel_events
UNION ALL
SELECT 
  'Email Entered',
  SUM(step_4),
  (SUM(step_4)::float / NULLIF(SUM(step_3), 0) * 100)
FROM funnel_events
UNION ALL
SELECT 
  'Account Created',
  SUM(step_5),
  (SUM(step_5)::float / NULLIF(SUM(step_4), 0) * 100)
FROM funnel_events
UNION ALL
SELECT 
  'Email Verified',
  SUM(step_6),
  (SUM(step_6)::float / NULLIF(SUM(step_5), 0) * 100)
FROM funnel_events;
