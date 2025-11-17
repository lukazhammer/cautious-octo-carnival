# Dashboard Setup Guide

## Overview

This guide explains how to implement Brandora's 15 analytics dashboards using the JSON templates provided. The dashboards can be implemented in various BI tools including Metabase, Looker, Tableau, PowerBI, or custom solutions.

---

## Available Dashboards

### 1. **Executive Dashboard** (`executive-dashboard.json`)
- **Audience:** CEO, Founders, Board Members
- **Purpose:** High-level business health snapshot
- **Key Metrics:** North Star Metric, MRR, ARR, DAU, Weekly Signups, Conversion Rate, Churn, NPS
- **Refresh:** Real-time
- **Update Frequency:** Daily email summary, Weekly PDF

### 2. **Product Dashboard** (`product-dashboard.json`)
- **Audience:** Product Team, Engineering, Design
- **Purpose:** Product usage and feature adoption
- **Key Metrics:** Activation Rate, WAU, DAU/MAU, Module Completion, Time to Value
- **Refresh:** Hourly
- **Views:** Feature heatmaps, module funnels, drop-off analysis

### 3. **Marketing Dashboard** (`marketing-dashboard.json`)
- **Audience:** Marketing Team, Growth Team
- **Purpose:** Channel performance and campaign ROI
- **Key Metrics:** Traffic by Source, CAC by Channel, Campaign ROI, Email Metrics
- **Refresh:** Hourly
- **Views:** Channel performance tables, SEO rankings, paid ads metrics

### 4. **Sales Dashboard** (`sales-dashboard.json`)
- **Audience:** Sales Team, Revenue Team
- **Purpose:** Pipeline, conversions, deal metrics
- **Key Metrics:** Pipeline Value, Conversion Rates by Tier, Sales Cycle Length
- **Refresh:** Hourly
- **Views:** Sales funnel, win/loss analysis, demo metrics

### 5. **Customer Success Dashboard** (`customer-success-dashboard.json`)
- **Audience:** Customer Success Team
- **Purpose:** Customer health, retention, support
- **Key Metrics:** Health Score Distribution, Retention Cohorts, Churn Risk, NPS
- **Refresh:** Hourly
- **Views:** At-risk customers, expansion opportunities, support metrics

### 6. **Growth Dashboard** (`growth-dashboard.json`)
- **Audience:** Growth Team, Leadership
- **Purpose:** Week-over-week and month-over-month growth
- **Key Metrics:** WoW/MoM Growth Rates, Viral Coefficient, Referral Metrics
- **Refresh:** Daily
- **Views:** Cohort analysis, growth accounting, viral metrics

### 7. **Content Dashboard** (`content-dashboard.json`)
- **Audience:** Content Team, Marketing
- **Purpose:** Blog, social, email performance
- **Key Metrics:** Top Posts, Social Engagement, Email Performance, Content ROI
- **Refresh:** Daily
- **Views:** Top content, SEO performance, social metrics

### 8. **Acquisition Dashboard** (`acquisition-dashboard.json`)
- **Audience:** Growth Team, Marketing
- **Purpose:** Signup funnel optimization
- **Key Metrics:** Signup Funnel, Landing Page Performance, A/B Test Results
- **Refresh:** Hourly
- **Views:** Source attribution, CAC by channel, conversion optimization

### 9. **Retention Dashboard** (`retention-dashboard.json`)
- **Audience:** Product Team, Customer Success
- **Purpose:** User retention and resurrection
- **Key Metrics:** Cohort Retention, Churn Analysis, Resurrection Rate
- **Refresh:** Daily
- **Views:** Retention curves, feature correlation, engagement distribution

### 10. **Revenue Dashboard** (`revenue-dashboard.json`)
- **Audience:** Finance, Leadership
- **Purpose:** Detailed revenue metrics
- **Key Metrics:** MRR Waterfall, ARR Trend, Revenue by Tier, NRR
- **Refresh:** Real-time
- **Views:** Cohort revenue, expansion MRR, ARPU, LTV by tier

### 11. **Financial Dashboard** (`financial-dashboard.json`)
- **Audience:** CFO, Finance Team, Leadership
- **Purpose:** Financial health and unit economics
- **Key Metrics:** Cash Flow, Burn Rate, Runway, Gross Margin, Unit Economics
- **Refresh:** Daily
- **Views:** Revenue breakdown, cost analysis, profitability metrics

### 12. **Support Dashboard** (`support-dashboard.json`)
- **Audience:** Support Team, Customer Success
- **Purpose:** Support ticket and satisfaction metrics
- **Key Metrics:** Ticket Volume, Response Time, Resolution Time, CSAT
- **Refresh:** Hourly
- **Views:** Ticket trends, common issues, satisfaction scores

### 13. **Competitive Dashboard** (`competitive-dashboard.json`)
- **Audience:** Product, Marketing, Leadership
- **Purpose:** Competitive intelligence
- **Key Metrics:** Market Share, Competitor Pricing, Feature Comparison
- **Refresh:** Weekly
- **Views:** Sentiment analysis, social mentions, feature matrix

### 14. **Experiment Dashboard** (`experiment-dashboard.json`)
- **Audience:** Product Team, Growth Team
- **Purpose:** A/B test tracking and results
- **Key Metrics:** Active Experiments, Results, Statistical Significance
- **Refresh:** Daily
- **Views:** Experiment queue, impact analysis, learnings

### 15. **Operations Dashboard** (`operations-dashboard.json`)
- **Audience:** Engineering, DevOps
- **Purpose:** System health and performance
- **Key Metrics:** Uptime, API Response Times, Error Rates, Infrastructure Costs
- **Refresh:** Real-time
- **Views:** System monitoring, performance trends, cost analysis

---

## Implementation Options

### Option 1: Metabase (Recommended for Startups)

**Pros:**
- Open-source and free
- Easy setup and maintenance
- Good for SQL-based queries
- Embedded dashboards

**Setup Steps:**

1. **Install Metabase:**
```bash
docker run -d -p 3000:3000 \
  -e "MB_DB_TYPE=postgres" \
  -e "MB_DB_DBNAME=metabase" \
  -e "MB_DB_PORT=5432" \
  -e "MB_DB_USER=metabase" \
  -e "MB_DB_PASS=your_password" \
  -e "MB_DB_HOST=postgres" \
  --name metabase metabase/metabase
```

2. **Connect to Brandora Database:**
   - Database type: PostgreSQL
   - Host: your_db_host
   - Database name: brandora_production
   - Username/Password: analytics_user credentials

3. **Create Dashboard from Template:**
   - Use JSON templates as blueprints
   - Create questions (queries) for each widget
   - Arrange in dashboard layout
   - Set refresh schedules

4. **Configure Alerts:**
   - Set up email alerts for threshold breaches
   - Slack integration for real-time notifications

**Example Metabase Question (North Star Metric):**
```sql
SELECT COUNT(DISTINCT user_id) as active_brand_builders
FROM (
  SELECT u.user_id
  FROM users u
  JOIN module_completions mc ON u.user_id = mc.user_id
  LEFT JOIN pdf_exports pe ON u.user_id = pe.user_id
  LEFT JOIN content_shares cs ON u.user_id = cs.user_id
  WHERE mc.completed_at >= NOW() - INTERVAL '30 days'
    AND (pe.exported_at >= NOW() - INTERVAL '30 days'
         OR cs.shared_at >= NOW() - INTERVAL '30 days')
) active_users;
```

### Option 2: Looker (Best for Scale)

**Pros:**
- Powerful modeling layer (LookML)
- Scales well
- Advanced features
- Great for data teams

**Setup Steps:**

1. **Define LookML Models:**
```lookml
view: users {
  sql_table_name: public.users ;;

  dimension: user_id {
    primary_key: yes
    type: number
    sql: ${TABLE}.user_id ;;
  }

  dimension: tier {
    type: string
    sql: ${TABLE}.tier ;;
  }

  measure: count {
    type: count
    drill_fields: [user_id, tier]
  }
}

view: subscriptions {
  sql_table_name: public.subscriptions ;;

  measure: mrr {
    type: sum
    sql: CASE
      WHEN ${billing_period} = 'monthly' THEN ${amount}
      WHEN ${billing_period} = 'annual' THEN ${amount} / 12
      WHEN ${billing_period} = 'quarterly' THEN ${amount} / 3
    END ;;
  }
}
```

2. **Create Explores:**
```lookml
explore: users {
  join: subscriptions {
    sql_on: ${users.user_id} = ${subscriptions.user_id} ;;
    relationship: one_to_many
  }

  join: module_completions {
    sql_on: ${users.user_id} = ${module_completions.user_id} ;;
    relationship: one_to_many
  }
}
```

3. **Build Dashboards:**
   - Import dashboard definitions from JSON templates
   - Create Looks for each widget
   - Arrange in dashboard
   - Set filters and drill-downs

### Option 3: Amplitude (Product Analytics)

**Best For:** Product Dashboard, User Journey Analytics

**Setup:**

1. **Install Amplitude SDK:**
```javascript
// Web
amplitude.getInstance().init("YOUR_API_KEY");

// Track events
amplitude.getInstance().logEvent('Module Started', {
  module_name: 'Brand Purpose',
  user_tier: 'complete'
});

// Set user properties
amplitude.getInstance().setUserId(userId);
amplitude.getInstance().setUserProperties({
  tier: 'complete',
  signup_date: '2025-01-15'
});
```

2. **Create Charts:**
   - Use Amplitude's chart builder
   - Event Segmentation for feature usage
   - Funnel Analysis for conversion funnels
   - Retention for cohort analysis
   - Pathfinder for user journeys

3. **Build Dashboards:**
   - Combine charts into dashboards
   - Add insights and annotations
   - Set up cohorts
   - Configure alerts

### Option 4: Custom Dashboard (Fully Customized)

**Tech Stack:**
- Frontend: React + Chart.js/D3.js/Recharts
- Backend: Node.js/Python + Express/Flask
- Database: PostgreSQL + TimescaleDB (for time-series)
- Caching: Redis

**Setup:**

1. **Backend API:**
```javascript
// Express.js example
app.get('/api/metrics/north-star', async (req, res) => {
  const { startDate, endDate } = req.query;

  const query = `
    SELECT COUNT(DISTINCT user_id) as value
    FROM active_brand_builders
    WHERE date >= $1 AND date <= $2
  `;

  const result = await db.query(query, [startDate, endDate]);
  res.json(result.rows[0]);
});
```

2. **Frontend Dashboard:**
```jsx
// React component
import { Line } from 'react-chartjs-2';

function MRRChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/metrics/mrr-trend')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="widget">
      <h3>MRR Growth</h3>
      <Line data={data} options={options} />
    </div>
  );
}
```

3. **Real-time Updates:**
```javascript
// WebSocket for real-time updates
const ws = new WebSocket('wss://api.brandora.com/metrics');

ws.on('message', (data) => {
  const update = JSON.parse(data);
  updateDashboard(update);
});
```

---

## Data Pipeline Setup

### Required Data Sources

1. **Application Database (PostgreSQL)**
   - Users table
   - Subscriptions table
   - Events/analytics_events table
   - Module completions
   - Transactions

2. **Analytics Tools**
   - Google Analytics 4 (web traffic)
   - Mixpanel/Amplitude (product analytics)
   - Stripe (payment data)
   - Intercom/Zendesk (support data)

3. **Marketing Platforms**
   - Google Ads
   - Facebook Ads
   - LinkedIn Ads
   - Mailchimp/SendGrid (email)

### ETL Pipeline

**Option A: Airbyte (Recommended)**

```yaml
# airbyte-config.yml
sources:
  - name: postgres-production
    type: postgres
    config:
      host: db.brandora.com
      database: brandora_prod
      username: analytics_ro

  - name: stripe
    type: stripe
    config:
      account_id: your_stripe_account

  - name: google-ads
    type: google-ads

destinations:
  - name: data-warehouse
    type: postgres
    config:
      host: warehouse.brandora.com
      database: analytics_warehouse
```

**Option B: Custom ETL (Python)**

```python
# etl/daily_metrics.py
import psycopg2
import pandas as pd
from datetime import datetime, timedelta

def calculate_mrr():
    """Calculate daily MRR snapshot"""
    query = """
        SELECT
            DATE_TRUNC('day', NOW()) as date,
            SUM(CASE
                WHEN billing_period = 'monthly' THEN amount
                WHEN billing_period = 'annual' THEN amount / 12
                WHEN billing_period = 'quarterly' THEN amount / 3
            END) as mrr
        FROM subscriptions
        WHERE status = 'active'
    """

    df = pd.read_sql(query, conn)
    df.to_sql('mrr_daily', warehouse_conn, if_exists='append')

def calculate_active_brand_builders():
    """Calculate North Star Metric"""
    query = """
        SELECT
            DATE_TRUNC('day', NOW()) as date,
            COUNT(DISTINCT user_id) as active_brand_builders
        FROM (
            SELECT u.user_id
            FROM users u
            WHERE EXISTS (
                SELECT 1 FROM module_completions mc
                WHERE mc.user_id = u.user_id
                AND mc.completed_at >= NOW() - INTERVAL '30 days'
            )
            AND (
                EXISTS (
                    SELECT 1 FROM pdf_exports pe
                    WHERE pe.user_id = u.user_id
                    AND pe.exported_at >= NOW() - INTERVAL '30 days'
                )
                OR EXISTS (
                    SELECT 1 FROM content_shares cs
                    WHERE cs.user_id = u.user_id
                    AND cs.shared_at >= NOW() - INTERVAL '30 days'
                )
            )
        ) active_users
    """

    df = pd.read_sql(query, conn)
    df.to_sql('north_star_daily', warehouse_conn, if_exists='append')

# Schedule with cron or Airflow
if __name__ == '__main__':
    calculate_mrr()
    calculate_active_brand_builders()
    # ... other metrics
```

---

## Dashboard Configuration

### Access Control

**Role-Based Access:**

| Role | Dashboards | Permissions |
|------|------------|-------------|
| **CEO/Founders** | All dashboards | Full access, export |
| **Leadership Team** | All except Operations | View, comment |
| **Product Team** | Product, Growth, Experiment | Edit, create |
| **Marketing Team** | Marketing, Content, Acquisition | Edit, create |
| **Sales Team** | Sales, Revenue | View, export |
| **CS Team** | Customer Success, Support, Retention | Edit, create |
| **Finance Team** | Financial, Revenue, Executive | Full access |
| **Engineering** | Product, Operations | View, comment |
| **All Employees** | Executive (summary view) | View only |

### Refresh Schedules

**Real-time (WebSocket/Polling):**
- Executive Dashboard (key metrics)
- Operations Dashboard
- Revenue Dashboard (MRR changes)

**Hourly:**
- Product Dashboard
- Marketing Dashboard
- Sales Dashboard
- Customer Success Dashboard

**Daily:**
- Growth Dashboard
- Content Dashboard
- Financial Dashboard
- Support Dashboard

**Weekly:**
- Competitive Dashboard
- Experiment Dashboard (summary)

### Alert Configuration

**Critical Alerts (Immediate):**
- MRR decreases week-over-week
- Churn rate >7%
- System uptime <99%
- Critical error rate >1%

**Warning Alerts (4-hour delay):**
- Activation rate <50%
- Weekly signup growth <5%
- NPS <40
- Support response time >6 hours

**Notification Channels:**
- Email: All stakeholders
- Slack: #exec-alerts, #product-alerts, #ops-alerts
- SMS: Critical alerts only (CEO, CTO)

---

## Best Practices

### 1. **Start Simple**
- Implement Executive Dashboard first
- Add Product and Marketing dashboards
- Gradually expand to all 15

### 2. **Ensure Data Quality**
- Validate data accuracy before launch
- Set up data quality monitoring
- Regular audits (monthly)

### 3. **Performance Optimization**
- Pre-aggregate metrics (materialize views)
- Use caching (Redis) for expensive queries
- Index database appropriately

```sql
-- Example: Materialized view for daily metrics
CREATE MATERIALIZED VIEW daily_metrics AS
SELECT
    DATE_TRUNC('day', date) as date,
    COUNT(DISTINCT user_id) as dau,
    COUNT(DISTINCT CASE WHEN event_type = 'signup' THEN user_id END) as signups,
    SUM(CASE WHEN event_type = 'purchase' THEN amount ELSE 0 END) as revenue
FROM events
GROUP BY DATE_TRUNC('day', date);

CREATE UNIQUE INDEX ON daily_metrics (date);

-- Refresh nightly
REFRESH MATERIALIZED VIEW CONCURRENTLY daily_metrics;
```

### 4. **Documentation**
- Document metric definitions
- Explain calculation methodologies
- Maintain changelog

### 5. **Regular Reviews**
- Weekly: Review key metrics in team meetings
- Monthly: Dashboard health check
- Quarterly: Metrics review (add/remove/update)

---

## Troubleshooting

### Common Issues

**Issue: Slow Dashboard Loading**
- Solution: Add database indexes, use materialized views, implement caching

**Issue: Metrics Don't Match**
- Solution: Verify data sources, check timezone settings, validate calculations

**Issue: Real-time Data Not Updating**
- Solution: Check WebSocket connection, verify ETL pipeline, restart services

**Issue: Export Failing**
- Solution: Check disk space, verify permissions, update export libraries

---

## Maintenance

### Daily
- Monitor dashboard performance
- Check alert accuracy
- Verify data freshness

### Weekly
- Review metric trends
- Update materialized views
- Test export functionality

### Monthly
- Data quality audit
- Performance optimization
- User feedback review

### Quarterly
- Metrics review (add/remove)
- Dashboard redesign (if needed)
- Tool evaluation

---

## Support & Resources

**Internal:**
- Dashboard issues: #analytics-support
- Metric questions: #analytics-questions
- Feature requests: #analytics-requests

**External:**
- Metabase Docs: https://www.metabase.com/docs/
- Looker Docs: https://cloud.google.com/looker/docs
- Amplitude Docs: https://help.amplitude.com/

---

## Version Control

All dashboard templates are versioned in the repository:
- Location: `/analytics/dashboards/templates/`
- Format: JSON
- Version: 1.0
- Last Updated: November 2024

**Change Process:**
1. Propose change in #analytics-requests
2. Review with stakeholders
3. Update JSON template
4. Test in staging environment
5. Deploy to production
6. Document in changelog

---

This setup guide should enable any team to implement Brandora's comprehensive analytics dashboards regardless of their chosen BI tool.
