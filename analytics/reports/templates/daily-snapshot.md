# Daily Snapshot Report

**Report Type:** Daily (Automated)
**Recipients:** Leadership Team
**Delivery:** Email at 8:00 AM
**Format:** HTML Email

---

## Report Date: {{DATE}}

### 📊 Key Metrics (Yesterday)

| Metric | Value | Change (vs Prev Day) | Week-to-Date | Status |
|--------|-------|----------------------|--------------|--------|
| **Active Brand Builders** | {{north_star}} | {{north_star_change}} | {{north_star_wtd}} | {{status_icon}} |
| **Signups** | {{signups}} | {{signups_change}} | {{signups_wtd}} | {{status_icon}} |
| **MRR** | {{mrr}} | {{mrr_change}} | {{mrr_wtd}} | {{status_icon}} |
| **Daily Active Users** | {{dau}} | {{dau_change}} | {{dau_avg_wtd}} | {{status_icon}} |
| **Conversions (Free→Paid)** | {{conversions}} | {{conversions_change}} | {{conversions_wtd}} | {{status_icon}} |

---

### 📈 Yesterday's Highlights

**Traffic:**
- Total Visitors: {{visitors}}
- Top Source: {{top_source}} ({{source_percentage}}%)
- Top Landing Page: {{top_landing_page}}

**Engagement:**
- Sessions: {{sessions}}
- Avg Session Duration: {{avg_duration}}
- Module Completions: {{module_completions}}

**Revenue:**
- New MRR: {{new_mrr}}
- Expansion MRR: {{expansion_mrr}}
- Churned MRR: {{churned_mrr}}
- Net New MRR: {{net_new_mrr}}

---

### 🎯 Week-to-Date Comparison

| Metric | This Week | Last Week | Change |
|--------|-----------|-----------|--------|
| Signups | {{wtd_signups}} | {{last_wtd_signups}} | {{wtd_signups_change}} |
| Conversions | {{wtd_conversions}} | {{last_wtd_conversions}} | {{wtd_conversions_change}} |
| Net New MRR | {{wtd_mrr}} | {{last_wtd_mrr}} | {{wtd_mrr_change}} |

---

### 🔔 Notable Events

{{#if notable_events}}
{{#each notable_events}}
- **{{type}}:** {{description}}
{{/each}}
{{else}}
No notable events yesterday.
{{/if}}

---

### ⚠️ Alerts & Action Items

{{#if alerts}}
{{#each alerts}}
- **{{severity}}:** {{metric}} {{condition}} (Current: {{value}}, Target: {{target}})
  - **Action:** {{recommended_action}}
{{/each}}
{{else}}
✅ All metrics within target ranges.
{{/if}}

---

### 📋 Today's Priorities

1. {{priority_1}}
2. {{priority_2}}
3. {{priority_3}}

---

**Full Dashboard:** [View Executive Dashboard](https://analytics.brandora.com/executive)

---

*This automated report is generated daily at 8:00 AM. Questions? Contact #analytics-support*
