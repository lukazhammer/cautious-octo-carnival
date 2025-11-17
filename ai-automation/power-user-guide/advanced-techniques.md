# Brandora Power User Guide

## Advanced Techniques, Shortcuts & Automation Recipes

---

## Data Export & Integration

### 1. Export Complete Brand Strategy as JSON

**Use Case**: Import your brand data into other tools (Notion, Airtable, custom apps)

**How**:
```javascript
// In browser console or via API
const exportData = {
  user: currentUser,
  brand: {
    vision: visionData,
    mission: missionData,
    values: valuesData,
    positioning: positioningData,
    visualIdentity: visualData,
  },
  assessments: allAssessments,
  modules: moduleProgress,
};

// Download as JSON
const dataStr = JSON.stringify(exportData, null, 2);
const dataBlob = new Blob([dataStr], { type: 'application/json' });
const url = URL.createObjectURL(dataBlob);
const link = document.createElement('a');
link.href = url;
link.download = 'brandora-export.json';
link.click();
```

**API Endpoint** (if available):
```
GET /api/v1/export/brand
Authorization: Bearer YOUR_API_KEY

Response: Complete brand data in structured JSON
```

### 2. CSV Export for CRM Import

**Use Case**: Export personas for import to HubSpot, Salesforce, etc.

**Format**:
```csv
Name,Email,Company,Industry,Persona_Type,Pain_Points,Goals,Demographics
"Persona 1",,SaaS,B2B,Decision_Maker,"Point 1, Point 2","Goal 1, Goal 2","Age: 35-45"
```

### 3. Markdown Export for Documentation

**Use Case**: Create internal documentation, share with team via GitHub, Notion

**Command**: Export → Markdown Format

**Output**:
```markdown
# Brand Strategy - [Company Name]

## Vision
[Your vision]

## Mission
[Your mission]

## Target Audience
### Persona 1: [Name]
- Demographics: [details]
- Pain Points: [points]
...
```

### 4. PDF Export - Custom Branded

**Power Tip**: Customize PDF template with your own branding

**Advanced**:
```javascript
// Custom PDF generation with your branding
const pdfOptions = {
  format: 'A4',
  branding: {
    logo: yourLogoURL,
    colors: yourBrandColors,
    fonts: yourBrandFonts,
  },
  sections: [
    'vision',
    'mission',
    'personas',
    'positioning',
    'messaging',
  ],
};

await generateBrandedPDF(pdfOptions);
```

---

## Productivity Hacks

### 5. Keyboard Shortcuts

**Universal**:
- `Cmd/Ctrl + S`: Save current work
- `Cmd/Ctrl + K`: Open command palette
- `Esc`: Close modals/cancel
- `Tab`: Next field
- `Shift + Tab`: Previous field

**Navigation**:
- `Cmd/Ctrl + 1-7`: Jump to module
- `Cmd/Ctrl + /`: Search
- `Cmd/Ctrl + B`: Toggle sidebar

**Power User**:
- `Cmd/Ctrl + Shift + D`: Duplicate current element
- `Cmd/Ctrl + Shift + E`: Export current module
- `Alt + Up/Down`: Reorder items

### 6. Bulk Operations

**Duplicate Personas Across Brands**:
```
1. Select persona
2. Right-click → Copy
3. Switch to other brand
4. Right-click → Paste
5. Adjust details
```

**Bulk Import**:
```csv
# personas.csv
Name,Role,Company Size,Pain Points,Goals
"Sarah",CMO,50-200,"Brand inconsistency","Unified brand voice"
"John",Founder,1-10,"No clear positioning","Stand out in market"
```

Import → Upload CSV → Map fields → Confirm

### 7. Template Reuse

**Save Custom Templates**:
```
1. Create a template brand (Template: SaaS, Template: E-commerce)
2. Build out complete strategy
3. Clone for new projects
4. Replace company-specific details
5. 80% done instantly
```

**Template Library**:
- SaaS B2B startup
- E-commerce DTC brand
- Professional services
- Local business
- Non-profit
- Personal brand

### 8. Quick Assessment for Clients

**Agency Workflow**:
```
1. Create client-specific assessment link
2. Customize questions for their industry
3. Send link (no signup required for them)
4. They complete assessment
5. Results sent to you
6. Import into full project
```

**URL Format**:
```
https://brandora.com/assess?agency=YOUR_ID&client=CLIENT_NAME
```

### 9. Collaboration Shortcuts

**Share Specific Module** (not full brand):
```
Share → Select Module(s) → Generate Link → Set Permissions
```

**Comment Mode**:
```
Cmd/Ctrl + Shift + C: Add comment
Cmd/Ctrl + Shift + R: Reply to comment
Cmd/Ctrl + Shift + M: Mention teammate
```

**Version History**:
```
View → History → Compare versions → Restore if needed
```

### 10. AI Co-Pilot Tricks

**Context Building**:
```
Before asking AI for help, load context:
1. "Here's my vision: [paste]"
2. "Here's my target audience: [paste]"
3. Now ask: "Create messaging that aligns with both"
```

**Batch Processing**:
```
"Create 10 value proposition variations, then for the top 3:
- Refine for clarity
- Test against objections
- Create ad copy versions"
```

**Refinement Loop**:
```
1. Generate initial output
2. "That's good, but make it more [specific quality]"
3. "Now remove any jargon"
4. "Give me 3 variations of the best one"
```

---

## Customization Hacks

### 11. Custom Color Palette Injection

**For Brand Consistency**:
```css
/* Add to Custom CSS if available */
:root {
  --brand-primary: #your-color;
  --brand-secondary: #your-color;
  --brand-accent: #your-color;
}
```

**Or via browser extension** (Stylus):
```css
.brandora-app {
  /* Override with your colors */
}
```

### 12. White-Label PDF Exports

**For Agencies**:
```javascript
const whiteLabel = {
  hideBrandoraLogo: true,
  customLogo: yourAgencyLogo,
  customFooter: "Prepared by [Your Agency]",
  customColors: yourBrandColors,
};

exportPDF(whiteLabel);
```

### 13. Custom Domain for Assessments

**Professional Touch**:
```
Instead of: brandora.com/assess/xyz
Use: brand-assessment.youragency.com
```

Setup via DNS CNAME (if Brandora supports custom domains)

### 14. Branded Email Templates

**Customize Email Notifications**:
```html
<!-- Email template override -->
<div style="background: {{your.color}}; padding: 20px;">
  <img src="{{your.logo}}" alt="Logo" />
  <h1>{{email.subject}}</h1>
  {{email.content}}
  <footer>{{your.footer}}</footer>
</div>
```

### 15. Custom Terminology

**Rename Modules**:
```
Default → Custom
"Vision & Mission" → "Brand Foundation"
"Personas" → "Target Customers"
"Positioning" → "Market Position"
```

*Settings → Customization → Module Names*

---

## Automation Recipes

### 16. Auto-Save to Notion

**Zapier Recipe**:
```
Trigger: Brandora module completed
Action: Create Notion page with content
```

**Fields**:
- Module name → Notion title
- Content → Notion body
- Completion date → Date property
- User → Author

### 17. Weekly Progress Email

**Automation**:
```
Every Monday 9 AM:
- Calculate progress (% modules complete)
- Summary of last week's activity
- Suggestions for next steps
- Email to user
```

### 18. Slack Integration for Team

**Notifications**:
```
When: Teammate completes module
Then: Post to Slack #brand-strategy
Message: "@team [Name] completed [Module]! Check it out: [Link]"
```

### 19. Auto-Generate Social Posts

**Workflow**:
```
Trigger: Brand positioning updated
Action: Generate 5 social posts showcasing new positioning
Save to: Content calendar
Schedule: Next 5 days
```

### 20. Competitor Monitoring Alert

**Setup**:
```
Tool: Google Alerts or Mention.com
Track: Competitor brand names
When: New mention detected
Then: Log in Brandora competitive intel section
Alert: Slack notification to team
```

---

## Advanced AI Techniques

### 21. Multi-Model Comparison

**Strategy**:
```
For critical decisions (vision, positioning):
1. Ask same question to ChatGPT
2. Ask same question to Claude
3. Ask same question to Perplexity
4. Compare outputs
5. Synthesize best elements
```

### 22. Prompt Chaining

**Complex Analysis**:
```
Prompt 1: "Analyze my assessment results: [data]"
→ Get insights

Prompt 2: "Based on these insights: [insights], what should my positioning emphasize?"
→ Get positioning recommendations

Prompt 3: "Create messaging framework based on this positioning: [positioning]"
→ Get messaging

Each builds on previous output for better results.
```

### 23. Role-Playing for Testing

**Validate Messaging**:
```
"Act as my skeptical target customer. Here's my value proposition: [value prop]

Challenge it. What objections would you have? What's unclear? What would make you choose a competitor?"

Iterate based on feedback.
```

### 24. Synthetic User Research

**When Real Research Isn't Feasible**:
```
"Simulate 5 interviews with [persona] about [problem].

For each interview:
- Different perspective/situation
- Realistic quotes
- Varying priorities
- Common pain points

Make them realistic, not identical."

Use to identify patterns and themes.
```

### 25. AI-Powered Competitive Intelligence

**Ongoing Monitoring**:
```
Weekly: "Research [Competitor] - what's new in the last week?"
Monthly: "Compare my positioning vs. [Competitors] - any new threats or opportunities?"
Quarterly: "Market trend analysis for [industry] - what's changing?"
```

---

## Pro Tips & Hidden Features

### 26. Assessment Benchmarking

**Compare to Industry**:
```
Your score: 67/100
Industry average: 58/100
Top quartile: 78+

See how you stack up →
```

### 27. Collaborative Workshops Mode

**Facilitate Team Sessions**:
```
1. Enable presentation mode
2. Share screen
3. Live collaborative editing
4. Everyone sees changes real-time
5. Vote on options
6. Export decisions
```

### 28. A/B Testing Framework

**Built-in Testing**:
```
Test: Headline variations
- Option A: [headline]
- Option B: [headline]

Track:
- Click rate
- Conversion rate
- User preference

Winner: [auto-determine after X impressions]
```

### 29. Brand Audit Mode

**Self-Assessment Tool**:
```
Quarterly review:
✓ Is vision still relevant?
✓ Does positioning reflect current reality?
✓ Are personas accurate?
✓ Is messaging consistent?
✓ Are values demonstrated?

Generate audit report with recommendations.
```

### 30. Integration with Design Tools

**Figma Plugin**:
```
1. Export brand colors, fonts, logos
2. Auto-sync to Figma
3. Designers always have latest brand assets
4. Two-way sync for updates
```

---

## Power User Workflows

### Agency Workflow

```
1. Client Assessment (15 min)
   → Share link, they complete

2. Initial Strategy (2 hours)
   → Use templates, customize

3. Client Review (30 min)
   → Shared link, comment mode

4. Refinement (1 hour)
   → Incorporate feedback

5. Final Delivery (15 min)
   → Branded PDF export
   → Training session

Total: ~4 hours vs. 20+ hours manual
```

### Startup Workflow

```
Week 1: Foundation
- Complete assessment
- Define vision, mission, values
- Identify target audience

Week 2: Strategy
- Develop positioning
- Create messaging framework
- Build visual identity

Week 3: Content
- Content strategy
- Channel plan
- First month's content

Week 4: Launch
- Finalize all assets
- Train team
- Go live
```

### Rebrand Workflow

```
1. Audit Current Brand
   - Import existing materials
   - Assess performance
   - Identify gaps

2. Research & Insights
   - Customer feedback
   - Competitor analysis
   - Market trends

3. Strategy Development
   - Updated positioning
   - Refined messaging
   - New visual direction

4. Transition Plan
   - Rollout timeline
   - Asset migration
   - Communication plan
```

---

## Optimization Checklist

**Monthly**:
- [ ] Review and update personas based on customer data
- [ ] Refresh competitive intelligence
- [ ] Update messaging based on what's working
- [ ] Audit brand consistency across channels

**Quarterly**:
- [ ] Full brand strategy review
- [ ] Market research update
- [ ] Positioning validation
- [ ] Performance analysis

**Annually**:
- [ ] Complete brand audit
- [ ] Vision and mission review
- [ ] Strategic planning session
- [ ] Major updates if needed

---

## Support & Resources

**Power User Community**:
- Join Slack: brandora-power-users.slack.com
- Share tips and tricks
- Get early access to features
- Influence product roadmap

**Advanced Training**:
- Video tutorials for each hack
- Monthly webinars
- Office hours with brand experts
- Certification program

**API Access** (Enterprise):
- Full API documentation
- Custom integrations
- Webhook support
- Dedicated support

This guide turns Brandora from a tool into a complete brand building operating system. Master these techniques and you'll build brands faster, better, and more consistently than ever before.
