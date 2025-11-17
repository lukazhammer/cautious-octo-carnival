# Content Performance Report (Monthly)
**Month:** {{month}} {{year}}
## Blog Performance
| Post | Views | Time on Page | Signups | Conv % |
|------|-------|--------------|---------|--------|
{{#each top_posts}}
| {{title}} | {{views}} | {{time}}min | {{signups}} | {{conv}}% |
{{/each}}
## SEO Performance
- Organic Traffic: {{traffic}} ({{change}})
- Top 10 Rankings: {{top_10_count}} keywords
- Domain Authority: {{da}}
## Email Performance
- Sends: {{sends}} | Opens: {{open_rate}}% | Clicks: {{click_rate}}% | Conversions: {{conv_rate}}%
