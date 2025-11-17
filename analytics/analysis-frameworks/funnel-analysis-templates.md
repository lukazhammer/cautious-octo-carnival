# Funnel Analysis Templates

## 1. Signup Funnel

```sql
WITH funnel AS (
  SELECT
    COUNT(DISTINCT CASE WHEN step >= 1 THEN user_id END) as step_1_landing,
    COUNT(DISTINCT CASE WHEN step >= 2 THEN user_id END) as step_2_signup_page,
    COUNT(DISTINCT CASE WHEN step >= 3 THEN user_id END) as step_3_form_start,
    COUNT(DISTINCT CASE WHEN step >= 4 THEN user_id END) as step_4_email_entered,
    COUNT(DISTINCT CASE WHEN step >= 5 THEN user_id END) as step_5_account_created,
    COUNT(DISTINCT CASE WHEN step >= 6 THEN user_id END) as step_6_email_verified
  FROM user_signup_events
  WHERE event_date >= CURRENT_DATE - INTERVAL '30 days'
)
SELECT
  'Landing Page' as step, step_1_landing as users, 100.0 as conversion_rate FROM funnel
UNION ALL
  SELECT 'Signup Page', step_2_signup_page, 
    (step_2_signup_page::float / step_1_landing * 100) FROM funnel
UNION ALL
  SELECT 'Form Start', step_3_form_start,
    (step_3_form_start::float / step_2_signup_page * 100) FROM funnel
UNION ALL
  SELECT 'Email Entered', step_4_email_entered,
    (step_4_email_entered::float / step_3_form_start * 100) FROM funnel
UNION ALL
  SELECT 'Account Created', step_5_account_created,
    (step_5_account_created::float / step_4_email_entered * 100) FROM funnel
UNION ALL
  SELECT 'Email Verified', step_6_email_verified,
    (step_6_email_verified::float / step_5_account_created * 100) FROM funnel;
```

## 2. Free → Paid Conversion Funnel

## 3. Module Completion Funnel

## 4. Upgrade Funnel

## 5. Activation Funnel
