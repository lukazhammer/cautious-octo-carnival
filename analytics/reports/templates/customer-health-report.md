# Customer Health Report (Monthly)
**Month:** {{month}} {{year}}
## Health Score Distribution
- Healthy (70-100): {{healthy_count}} ({{pct}}%) - {{mrr}}
- At-Risk (40-69): {{at_risk_count}} ({{pct}}%) - {{mrr}}
- Critical (0-39): {{critical_count}} ({{pct}}%) - {{mrr}}
## At-Risk Customers (Top 20)
| Customer | Tier | MRR | Health | Risk Factors | Action |
|----------|------|-----|--------|--------------|--------|
{{#each at_risk}}
| {{name}} | {{tier}} | {{mrr}} | {{score}} | {{factors}} | {{action}} |
{{/each}}
## Expansion Opportunities
| Customer | Current Tier | Suggested | Potential MRR | Propensity |
|----------|--------------|-----------|---------------|------------|
{{#each expansions}}
| {{name}} | {{tier}} | {{suggested}} | {{mrr}} | {{score}}% |
{{/each}}
