# Product Usage Report

**Week:** {{week_number}} {{year}}
**Period:** {{start_date}} - {{end_date}}

---

## Usage Overview

**Active Users:** {{active_users}}
**Sessions:** {{sessions}}
**Avg Session Duration:** {{duration}} minutes
**Feature Usage Events:** {{events}}

---

## Feature Usage

| Feature | Users | Sessions | Adoption % | vs Last Week |
|---------|-------|----------|------------|--------------|
| **Brand Assessment** | {{users}} | {{sessions}} | {{adoption}}% | {{change}} |
| **Brand Purpose Module** | {{users}} | {{sessions}} | {{adoption}}% | {{change}} |
| **Visual Identity Module** | {{users}} | {{sessions}} | {{adoption}}% | {{change}} |
| **Messaging Module** | {{users}} | {{sessions}} | {{adoption}}% | {{change}} |
| **PDF Export** | {{users}} | {{sessions}} | {{adoption}}% | {{change}} |
| **Team Collaboration** | {{users}} | {{sessions}} | {{adoption}}% | {{change}} |

---

## Module Completion

| Module | Started | Completed | Completion % | Avg Time |
|--------|---------|-----------|--------------|----------|
{{#each modules}}
| {{name}} | {{started}} | {{completed}} | {{pct}}% | {{time}}min |
{{/each}}

---

## User Feedback

**New Feedback:** {{feedback_count}}

**Themes:**
1. {{theme_1}}: {{count}} mentions
2. {{theme_2}}: {{count}} mentions
3. {{theme_3}}: {{count}} mentions

**Top Feature Requests:**
1. {{request_1}}
2. {{request_2}}
3. {{request_3}}

---

## Issues & Bugs

**New Issues:** {{new_issues}}
**Resolved:** {{resolved}}
**Open:** {{open}}

**Priority Issues:**
1. {{issue_1}}
2. {{issue_2}}
3. {{issue_3}}
