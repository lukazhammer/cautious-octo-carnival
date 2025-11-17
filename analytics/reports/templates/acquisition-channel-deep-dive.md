# Acquisition Channel Deep Dive: {{channel_name}}
**Period:** {{start_date}} - {{end_date}}
## Channel Overview
- **Traffic:** {{traffic}} ({{change}})
- **Signups:** {{signups}} ({{change}})
- **Conversion Rate:** {{conv_rate}}% ({{change}})
- **CAC:** {{cac}} ({{change}})
- **LTV:CAC:** {{ratio}}
## Funnel Analysis
Traffic ({{traffic}})
  ↓ {{conv}}%
Signups ({{signups}})
  ↓ {{activation}}%
Activated ({{activated}})
  ↓ {{paid_conv}}%
Paid Customers ({{paid}})
## Cohort Performance
| Signup Week | Signups | Activation % | Paid % | 30d LTV |
|-------------|---------|--------------|--------|---------|
{{#each cohorts}}
| {{week}} | {{signups}} | {{activation}}% | {{paid}}% | {{ltv}} |
{{/each}}
## Optimization Recommendations
1. {{recommendation_1}}
2. {{recommendation_2}}
3. {{recommendation_3}}
