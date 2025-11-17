# Data Visualization Style Guide

## Overview

Data visualization at Brandora should be:
- Clear and easy to understand
- Visually aligned with brand identity
- Accessible to all users
- Purposeful, not decorative
- Consistent across platforms

---

## Color Palette for Data

### Primary Data Colors

**1. Blue (#6F8AEC)**
- Primary data color
- Positive metrics
- Main data series
- Interactive elements

**2. Navy (#070058)**
- Secondary data series
- Comparison data
- Headers and labels
- Strong emphasis

**3. Yellow (#FFBE44)**
- Highlights and callouts
- Important data points
- Warnings or attention
- Success indicators

### Extended Data Palette

For multi-series charts needing more colors:

**4. Light Blue (#93C5FD)**
- Third data series
- Lighter emphasis

**5. Teal (#14B8A6)**
- Fourth data series
- Growth indicators

**6. Purple (#A78BFA)**
- Fifth data series
- Special categories

**7. Green (#10B981)**
- Success, positive growth
- Completion metrics

**8. Orange (#F59E0B)**
- Warnings, moderate urgency
- Attention-needed metrics

**9. Red (#EF4444)**
- Errors, negative metrics
- Urgent issues

### Neutral Palette for Data

**Gray Scale:**
- Neutral 300 (#CBD5E1) - Grid lines
- Neutral 500 (#64748B) - Secondary labels
- Neutral 700 (#334155) - Primary labels
- Neutral 900 (#0F172A) - Headers, emphasis

---

## Chart Types & Usage

### 1. Bar Charts

**When to use:**
- Comparing categories
- Showing discrete data
- Comparing values across groups

**Design specifications:**
- **Bar color:** Blue #6F8AEC (primary)
- **Bar width:** Consistent, 60-70% of available space
- **Bar spacing:** 20-30% gap
- **Corner radius:** 4px (top corners for vertical bars)
- **Hover state:** Navy #070058
- **Grid lines:** Neutral 300, dashed, minimal

**Variations:**
- Vertical bar chart (standard)
- Horizontal bar chart (for long labels)
- Grouped bar chart (comparing multiple series)
- Stacked bar chart (showing composition)

**Labels:**
- X-axis: Poppins Regular, 14px, Neutral 700
- Y-axis: Poppins Regular, 14px, Neutral 700
- Values: Display on hover or above bars if space allows

---

### 2. Line Charts

**When to use:**
- Showing trends over time
- Continuous data
- Multiple time series comparison

**Design specifications:**
- **Line color:** Blue #6F8AEC (primary series)
- **Line width:** 3px
- **Line style:** Smooth curves (not jagged)
- **Data points:** 8px circles (optional, if not too many points)
- **Grid lines:** Horizontal only, Neutral 300, subtle
- **Area fill:** Optional, 20% opacity of line color

**Multi-series:**
- Series 1: Blue #6F8AEC
- Series 2: Navy #070058
- Series 3: Yellow #FFBE44
- Maximum 3-4 series for clarity

**Labels:**
- Axes: Poppins Regular, 14px, Neutral 700
- Legend: Poppins Regular, 14px, color-coded
- Tooltips: Display value on hover

---

### 3. Pie Charts & Donut Charts

**When to use:**
- Showing composition (parts of a whole)
- Limited categories (3-6 maximum)
- Percentage distribution

**Design specifications:**
- **Segment colors:** Use brand palette in order
- **Stroke:** 2px white stroke between segments
- **Labels:** Outside segments with leader lines
- **Values:** Show percentage
- **Donut width:** 40-50% of radius

**Color order:**
1. Blue #6F8AEC
2. Navy #070058
3. Yellow #FFBE44
4. Light Blue #93C5FD
5. Teal #14B8A6
6. Purple #A78BFA

**Best practices:**
- Start largest segment at 12 o'clock
- Order segments by size (descending)
- Limit to 6 segments maximum
- Consider bar chart if too many categories

---

### 4. Area Charts

**When to use:**
- Showing volume over time
- Emphasizing magnitude of change
- Stacked data showing composition

**Design specifications:**
- **Fill:** Blue #6F8AEC at 40% opacity
- **Border:** Solid blue line (3px)
- **Grid lines:** Minimal, horizontal only
- **Stacking:** Different opacity levels for clarity

---

### 5. Scatter Plots

**When to use:**
- Showing correlation between variables
- Displaying clusters
- Outlier identification

**Design specifications:**
- **Points:** Blue #6F8AEC circles, 8-12px
- **Point opacity:** 70-80% if many overlapping points
- **Trend line:** Optional, Navy #070058, dashed
- **Axes:** Clear labels with units

---

### 6. Progress Bars & Gauges

**When to use:**
- Showing completion percentage
- Goal progress
- Comparative performance

**Progress Bar:**
- **Background:** Neutral 200 (#E5E7EB)
- **Fill:** Blue #6F8AEC (standard), Green #10B981 (success), Yellow #FFBE44 (warning)
- **Height:** 8-12px
- **Border radius:** 4px
- **Label:** Show percentage inside or above

**Gauge/Dial:**
- **Range colors:**
  - 0-33%: Red #EF4444
  - 34-66%: Yellow #FFBE44
  - 67-100%: Green #10B981
- **Needle:** Navy #070058
- **Label:** Large percentage in center

---

### 7. Funnel Charts

**When to use:**
- Conversion processes
- Step-by-step dropoff
- Sales pipeline

**Design specifications:**
- **Segments:** Gradient from Blue #6F8AEC to Navy #070058
- **Labels:** Stage name + percentage
- **Values:** Show number and percentage

---

### 8. Tables (Data Tables)

**When to use:**
- Precise values needed
- Multiple data dimensions
- Searchable/sortable data

**Design specifications:**
- **Header:** Navy #070058 background, White text, Montserrat Semi Bold, 14px
- **Rows:** Alternating White and Background Blue #F1F9FF
- **Text:** Poppins Regular, 14px, Neutral 900
- **Borders:** Neutral 300, 1px
- **Hover:** Light Blue highlight
- **Padding:** 12px vertical, 16px horizontal

**Features:**
- Sortable columns (arrow indicators)
- Pagination if > 50 rows
- Search/filter
- Highlight on hover

---

## Typography for Data Viz

### Chart Titles
- **Font:** Montserrat Semi Bold
- **Size:** 20-24px
- **Color:** Navy #070058
- **Placement:** Top left or center above chart

### Axis Labels
- **Font:** Poppins Regular
- **Size:** 14px
- **Color:** Neutral 700 #334155
- **Rotation:** Horizontal preferred (vertical only if necessary)

### Data Labels (on chart)
- **Font:** Poppins Medium
- **Size:** 12-14px
- **Color:** Neutral 900 #0F172A or White (if on dark background)

### Legends
- **Font:** Poppins Regular
- **Size:** 14px
- **Color:** Neutral 700
- **Marker:** 12px square or circle matching data color
- **Placement:** Top right, right side, or bottom

### Tooltips
- **Background:** Navy #070058, 95% opacity
- **Text:** Poppins Regular, 14px, White
- **Padding:** 12px
- **Border radius:** 4px
- **Shadow:** Subtle
- **Content:** Label + Value + Unit

---

## Grid Lines & Axes

### Grid Lines
- **Color:** Neutral 300 #CBD5E1
- **Style:** Dashed or solid at 30% opacity
- **Weight:** 1px
- **Horizontal:** Show for value reference
- **Vertical:** Use sparingly or omit

### Axes
- **Line color:** Neutral 400
- **Weight:** 1.5px
- **Arrows:** Optional, Navy #070058

### Tick Marks
- **Length:** 4-6px
- **Color:** Neutral 400
- **Frequency:** Every major interval

---

## Accessibility Guidelines

### Color Contrast
- Ensure 4.5:1 contrast ratio for text
- Don't rely on color alone to convey information
- Use patterns or textures in addition to color for colorblind users

### Alternative Representations
- Provide data tables as alternative to charts
- Include text descriptions of key insights
- Offer downloadable data (CSV, Excel)

### Interactive Elements
- Keyboard navigable
- Screen reader friendly (ARIA labels)
- Clear focus indicators
- Hover and click targets minimum 44×44px

### Text Alternatives
- Alt text for chart images
- Descriptive captions
- Summary statistics

---

## Responsive Design

### Mobile Adaptations
- Simplify charts for small screens
- Larger tap targets
- Reduce data density
- Consider table view for complex charts
- Horizontal scrolling for wide data

### Breakpoints
- **Mobile:** < 768px - Simplified, stacked charts
- **Tablet:** 768px - 1023px - Moderate detail
- **Desktop:** ≥ 1024px - Full detail

---

## Chart Templates

### Dashboard Widget (Small)
**Dimensions:** 300×200px
**Content:** Single metric with trend line
**Design:** Minimal, quick-glance info

**Example:**
```
Total Users
10,234 (+12%)
[small line chart showing trend]
```

### Report Chart (Medium)
**Dimensions:** 600×400px
**Content:** Full chart with labels and legend
**Design:** Detailed, print-friendly

### Presentation Chart (Large)
**Dimensions:** 1200×600px
**Content:** Bold, simplified for projection
**Design:** Large text, high contrast, minimal detail

---

## Animation & Interaction

### Load Animations
- Bars grow from bottom to top (300ms ease-out)
- Lines draw from left to right (500ms ease-in-out)
- Pie segments expand from center (400ms)

### Hover States
- Highlight hovered element
- Show tooltip
- Slightly increase size/opacity (110%)
- Dim other elements (70% opacity)

### Transitions
- Smooth transitions between data updates (300ms)
- Ease-in-out for most animations
- No abrupt changes

---

## Data Formatting

### Numbers
- **Thousands:** 1,234 or 1.2K
- **Millions:** 1.2M
- **Billions:** 1.2B
- **Decimals:** Maximum 2 decimal places

### Percentages
- **Format:** 12.5% (with % symbol)
- **Axis:** 0%, 25%, 50%, 75%, 100%

### Currency
- **Format:** $1,234 or $1.2K
- **International:** USD $1,234 or €1,234

### Dates
- **Short:** Jan 2025
- **Long:** January 15, 2025
- **Axis:** Consistent format, readable at a glance

---

## Best Practices

### Do:
✓ Choose the right chart type for the data
✓ Keep it simple - remove unnecessary elements
✓ Label clearly and consistently
✓ Use brand colors purposefully
✓ Ensure accessibility
✓ Provide context (title, description, source)
✓ Test on multiple devices
✓ Make interactive elements discoverable

### Don't:
✗ Use 3D effects (distorts data)
✗ Overload with too much information
✗ Use too many colors
✗ Truncate axes to mislead
✗ Omit labels or legends
✗ Use low contrast colors
✗ Ignore mobile users
✗ Create chartjunk (decorative elements that don't add value)

---

## Tools & Libraries

### Recommended Libraries

**JavaScript:**
- Chart.js (simple, responsive)
- D3.js (advanced, customizable)
- Recharts (React)
- Victory (React)
- Plotly (interactive)

**Configuration:**
Use brand colors and fonts in library configurations.

**Example (Chart.js):**
```javascript
{
  colors: {
    primary: '#6F8AEC',
    secondary: '#070058',
    accent: '#FFBE44',
  },
  fonts: {
    family: 'Poppins, Arial, sans-serif'
  }
}
```

---

## Exporting & Sharing

### File Formats
- **Web:** SVG (scalable, interactive)
- **Print:** PNG or PDF (high resolution, 300 DPI)
- **Data:** CSV, JSON, Excel

### Image Export Specs
- **Width:** Minimum 1200px for high-res displays
- **Format:** PNG-24 for transparency
- **DPI:** 144 for web, 300 for print

---

## Examples by Use Case

### Marketing Dashboard
- KPIs: Large numbers with trend indicators
- Traffic sources: Donut chart
- Conversion funnel: Funnel chart
- Time-based metrics: Line charts

### Brand Assessment Results
- Overall score: Large gauge or score card
- Category breakdown: Horizontal bar chart
- Comparison to benchmarks: Grouped bar chart
- Progress over time: Line chart

### Financial Reports
- Revenue: Stacked area chart
- Growth: Line chart with projections
- Breakdown: Pie or donut chart
- Comparisons: Grouped bar chart

---

This data visualization style guide ensures all Brandora charts, graphs, and data presentations are clear, accessible, and aligned with our brand identity while effectively communicating insights to users.
