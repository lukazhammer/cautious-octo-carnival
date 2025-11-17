# Typography System

## Font Families

### Heading Font: Montserrat

**Designer:** Julieta Ulanovsky
**Classification:** Geometric sans-serif
**License:** Open Font License (free for commercial use)

**Why Montserrat:**
- Modern, professional appearance
- Excellent readability at all sizes
- Strong geometric construction conveys structure and strategy
- Wide range of weights for hierarchy
- Excellent web and print performance

**Available weights:**
- Thin (100) - Avoid for accessibility
- Extra Light (200) - Avoid for accessibility
- Light (300) - Use sparingly, large sizes only
- Regular (400) - Avoid for headings
- Medium (500) - Subheadings, UI elements
- Semi Bold (600) - Primary heading weight
- Bold (700) - Emphasis, important headings
- Extra Bold (800) - Hero headings, special emphasis
- Black (900) - Display use only

**Where to use:**
- All headings (H1-H6)
- Navigation menus
- Buttons and CTAs
- Display text and hero headlines
- Pull quotes
- Statistics and data callouts
- Card titles

**Web font loading:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet">
```

**CSS:**
```css
font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
```

---

### Body Font: Poppins

**Designer:** Indian Type Foundry
**Classification:** Geometric sans-serif
**License:** Open Font License (free for commercial use)

**Why Poppins:**
- Highly readable for long-form content
- Friendly, approachable character
- Pairs beautifully with Montserrat
- Slightly rounded terminals soften the geometric Montserrat
- Excellent screen rendering
- Supports wide range of languages

**Available weights:**
- Thin (100) - Avoid
- Extra Light (200) - Avoid
- Light (300) - Captions, metadata
- Regular (400) - Primary body text weight
- Medium (500) - Emphasized body text
- Semi Bold (600) - Strong emphasis, UI labels
- Bold (700) - Strong emphasis, list items
- Extra Bold (800) - Avoid for body text
- Black (900) - Avoid for body text

**Where to use:**
- Body copy (all lengths)
- Paragraphs and articles
- Captions and image credits
- Form labels and inputs
- Table content
- List items
- UI text and descriptions
- Footnotes and disclaimers

**Web font loading:**
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**CSS:**
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
```

---

### Monospace Font: JetBrains Mono

**Designer:** JetBrains
**Classification:** Monospace
**License:** Open Font License

**Why JetBrains Mono:**
- Designed specifically for developers
- Excellent readability for code
- Clear character differentiation (0 vs O, 1 vs l)
- Matches our tech-forward brand

**Where to use:**
- Code snippets
- API documentation
- Technical specifications
- Developer-facing content
- Terminal/console output
- Data tables (when appropriate)

**Web font loading:**
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**CSS:**
```css
font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
```

---

## Type Scale

### Desktop/Tablet (768px and above)

#### H1 - Hero Heading
- **Font:** Montserrat Semi Bold (600)
- **Size:** 56px (3.5rem)
- **Line height:** 64px (1.14)
- **Letter spacing:** -0.02em
- **Color:** Navy #070058 or Neutral 900 #0F172A
- **Use case:** Landing page heroes, main page titles

#### H2 - Section Heading
- **Font:** Montserrat Semi Bold (600)
- **Size:** 40px (2.5rem)
- **Line height:** 48px (1.2)
- **Letter spacing:** -0.01em
- **Color:** Navy #070058 or Neutral 900 #0F172A
- **Use case:** Major section headings, page sections

#### H3 - Subsection Heading
- **Font:** Montserrat Semi Bold (600)
- **Size:** 32px (2rem)
- **Line height:** 40px (1.25)
- **Letter spacing:** -0.01em
- **Color:** Navy #070058 or Neutral 900 #0F172A
- **Use case:** Subsections, card headings, feature titles

#### H4 - Component Heading
- **Font:** Montserrat Semi Bold (600)
- **Size:** 24px (1.5rem)
- **Line height:** 32px (1.33)
- **Letter spacing:** 0
- **Color:** Navy #070058 or Neutral 900 #0F172A
- **Use case:** Component titles, smaller sections

#### H5 - Small Heading
- **Font:** Montserrat Semi Bold (600)
- **Size:** 20px (1.25rem)
- **Line height:** 28px (1.4)
- **Letter spacing:** 0
- **Color:** Navy #070058 or Neutral 900 #0F172A
- **Use case:** Sidebar headings, card subtitles

#### H6 - Tiny Heading
- **Font:** Montserrat Semi Bold (600)
- **Size:** 16px (1rem)
- **Line height:** 24px (1.5)
- **Letter spacing:** 0.01em
- **Color:** Navy #070058 or Neutral 700 #334155
- **Use case:** Labels, overlines, small UI headings

---

#### Body Large
- **Font:** Poppins Regular (400)
- **Size:** 20px (1.25rem)
- **Line height:** 32px (1.6)
- **Letter spacing:** 0
- **Color:** Neutral 900 #0F172A
- **Use case:** Lead paragraphs, introductions, emphasis

#### Body Regular (Default)
- **Font:** Poppins Regular (400)
- **Size:** 16px (1rem)
- **Line height:** 26px (1.625)
- **Letter spacing:** 0
- **Color:** Neutral 900 #0F172A
- **Use case:** Primary body text, paragraphs, content

#### Body Small
- **Font:** Poppins Regular (400)
- **Size:** 14px (0.875rem)
- **Line height:** 22px (1.57)
- **Letter spacing:** 0
- **Color:** Neutral 700 #334155
- **Use case:** Secondary text, descriptions, helper text

#### Caption
- **Font:** Poppins Regular (400)
- **Size:** 12px (0.75rem)
- **Line height:** 18px (1.5)
- **Letter spacing:** 0.01em
- **Color:** Neutral 500 #64748B
- **Use case:** Image captions, metadata, timestamps, footnotes

#### Overline
- **Font:** Montserrat Medium (500)
- **Size:** 12px (0.75rem)
- **Line height:** 18px (1.5)
- **Letter spacing:** 0.08em
- **Text transform:** UPPERCASE
- **Color:** Neutral 500 #64748B or Blue #6F8AEC
- **Use case:** Labels, categories, eyebrows, section indicators

---

### Mobile (below 768px)

#### H1 - Hero Heading (Mobile)
- **Font:** Montserrat Semi Bold (600)
- **Size:** 40px (2.5rem)
- **Line height:** 48px (1.2)
- **Letter spacing:** -0.02em

#### H2 - Section Heading (Mobile)
- **Font:** Montserrat Semi Bold (600)
- **Size:** 32px (2rem)
- **Line height:** 40px (1.25)
- **Letter spacing:** -0.01em

#### H3 - Subsection Heading (Mobile)
- **Font:** Montserrat Semi Bold (600)
- **Size:** 24px (1.5rem)
- **Line height:** 32px (1.33)
- **Letter spacing:** 0

#### H4 - Component Heading (Mobile)
- **Font:** Montserrat Semi Bold (600)
- **Size:** 20px (1.25rem)
- **Line height:** 28px (1.4)
- **Letter spacing:** 0

#### H5 - Small Heading (Mobile)
- **Font:** Montserrat Semi Bold (600)
- **Size:** 18px (1.125rem)
- **Line height:** 26px (1.44)
- **Letter spacing:** 0

#### H6 - Tiny Heading (Mobile)
- **Font:** Montserrat Semi Bold (600)
- **Size:** 16px (1rem)
- **Line height:** 24px (1.5)
- **Letter spacing:** 0

**Note:** Body text sizes remain the same on mobile for optimal readability.

---

## Typography Guidelines

### Line Height Rules

**Headings:**
- Large headings (H1-H2): 1.1-1.25
- Medium headings (H3-H4): 1.25-1.4
- Small headings (H5-H6): 1.4-1.5
- **Rationale:** Tighter line height for impact and visual hierarchy

**Body text:**
- Large body: 1.5-1.6
- Regular body: 1.5-1.625
- Small body: 1.5-1.6
- **Rationale:** Generous line height improves readability

**Rule of thumb:** Longer line lengths need more line height

---

### Letter Spacing (Tracking)

**Large headings (H1-H2):**
- Negative tracking (-0.02em to -0.01em)
- Improves visual cohesion at large sizes

**Medium headings (H3-H4):**
- Neutral tracking (0)
- Natural spacing

**Small text and overlines:**
- Positive tracking (0.01em to 0.08em)
- Improves readability at small sizes

**Body text:**
- No adjustment (0)
- Font's natural spacing is optimal

---

### Paragraph Spacing

**Between paragraphs:**
- Desktop: 24px (1.5rem)
- Mobile: 20px (1.25rem)

**Between sections:**
- Desktop: 48-64px (3-4rem)
- Mobile: 32-48px (2-3rem)

**After headings:**
- H1: 24px (1.5rem)
- H2: 20px (1.25rem)
- H3-H4: 16px (1rem)
- H5-H6: 12px (0.75rem)

---

### Line Length (Measure)

**Optimal reading length:**
- **Ideal:** 60-75 characters per line
- **Acceptable:** 50-90 characters per line
- **Too short:** Below 40 characters
- **Too long:** Above 90 characters

**Implementation:**
```css
max-width: 65ch; /* Optimal for body text */
max-width: 45ch; /* For larger text sizes */
```

---

### Text Alignment

**Left-aligned (Default):**
- Body text
- Headlines
- Lists
- Forms
- Most UI text

**Center-aligned:**
- Hero headlines
- Short marketing copy
- Single-line headings
- CTAs and buttons
- Testimonials (optional)

**Right-aligned:**
- Numerical data in tables
- Navigation items (sometimes)
- Dates and metadata (sometimes)

**Justified:**
- **Avoid** for web (creates uneven spacing)
- Print only, with proper hyphenation

---

### Hierarchy Examples

#### Example 1: Blog Post
```
[OVERLINE] BRAND STRATEGY
[H1] How to Define Your Target Audience in 5 Steps
[BODY LARGE] Lead paragraph introducing the topic...
[H2] Step 1: Analyze Your Current Customer Base
[BODY] Regular body text explaining the step...
[H3] Understanding Demographics vs Psychographics
[BODY] More detailed explanation...
[CAPTION] Image: Customer analysis framework
```

#### Example 2: Landing Page
```
[H1] Transform Your Brand Strategy in Days, Not Months
[BODY LARGE] Professional brand positioning framework powered by AI
[BUTTON] Start Your Free Assessment
[H2] Trusted by 10,000+ Entrepreneurs
[H3] Feature 1: Audience Research
[BODY] Description of the feature...
```

#### Example 3: Product UI
```
[H3] Brand Assessment Results
[BODY] Your brand strength score is:
[H1 - DISPLAY] 87/100
[H5] Recommendations
[BODY SMALL] Based on your assessment...
[CAPTION] Last updated 2 hours ago
```

---

### Special Typography Treatments

#### Display Headings (Extra Large)
**Font:** Montserrat Bold (700) or Extra Bold (800)
**Size:** 64-96px
**Line height:** 1.0-1.1
**Use case:** Hero sections, landing pages, special campaigns
**Color:** Navy #070058

#### Pull Quotes
**Font:** Montserrat Semi Bold (600)
**Size:** 24-32px
**Line height:** 1.4
**Color:** Navy #070058
**Border:** 4px left border in Blue #6F8AEC
**Margin:** 32px top and bottom

```
│ "Brandora helped us clarify our positioning
│ and 10x our conversion rate in just 3 weeks."
│ — Sarah Chen, Founder
```

#### Eyebrows / Kickers
**Font:** Montserrat Medium (500)
**Size:** 12-14px
**Transform:** UPPERCASE
**Letter spacing:** 0.08em
**Color:** Blue #6F8AEC or Neutral 500
**Use:** Above headlines to provide context

#### Numbers / Statistics
**Font:** Montserrat Bold (700)
**Size:** 48-72px
**Color:** Blue #6F8AEC or Navy #070058
**Pairing:** Small caption below in Poppins

```
   10,000+
Brands Transformed
```

---

### Web Font Performance

#### Font Loading Strategy

**Critical fonts (load immediately):**
- Montserrat Semi Bold (600)
- Poppins Regular (400)

**Non-critical fonts (load deferred):**
- Montserrat Light (300)
- Montserrat Bold (700)
- Poppins Medium (500)
- Poppins Semi Bold (600)

**CSS implementation:**
```css
/* Critical fonts */
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/montserrat-semibold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  src: url('/fonts/poppins-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

**Font display strategy:**
- Use `font-display: swap` for all fonts
- Ensures text is visible during font loading
- Prevents invisible text (FOIT)

---

### Accessibility Guidelines

#### Minimum Sizes
- **Body text:** Never smaller than 16px (1rem)
- **Small text:** Minimum 14px (0.875rem)
- **Captions:** Minimum 12px (0.75rem)

#### Contrast Requirements
- **Large text (18px+ or 14px+ bold):** 3:1 minimum (WCAG AA)
- **Body text:** 4.5:1 minimum (WCAG AA)
- **Preferred:** 7:1 for AAA compliance

#### Font Weight
- Avoid Thin (100) and Extra Light (200) weights
- Light (300) only for large text (24px+)
- Minimum Regular (400) for body text

#### Line Height
- Minimum 1.5 for body text
- Minimum 1.2 for headings

#### Responsive Considerations
- Scale down headings on mobile
- Maintain body text at 16px minimum
- Increase line height for narrow columns

---

### Typography Don'ts

**Don't:**
❌ Use more than 2-3 font families
❌ Use too many font weights in one design
❌ Set body text below 16px
❌ Use all caps for long text (hard to read)
❌ Use light weights on colored backgrounds
❌ Create insufficient contrast
❌ Use justified text on web
❌ Set long lines (over 90 characters)
❌ Use decorative fonts for body text
❌ Stretch or compress fonts
❌ Use faux bold or italic (use real weights)

**Do:**
✓ Stick to Montserrat for headings, Poppins for body
✓ Use appropriate weights for hierarchy
✓ Maintain 16px minimum for body text
✓ Use all caps sparingly (labels, overlines)
✓ Test contrast ratios
✓ Left-align body text
✓ Limit line length to 60-75 characters
✓ Use system fonts as fallbacks
✓ Load fonts efficiently
✓ Test on various devices

---

## CSS Implementation

### Base Typography Styles

```css
/* Root typography setup */
:root {
  --font-heading: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;

  /* Type scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.25rem;    /* 20px */
  --text-xl: 1.5rem;     /* 24px */
  --text-2xl: 2rem;      /* 32px */
  --text-3xl: 2.5rem;    /* 40px */
  --text-4xl: 3.5rem;    /* 56px */

  /* Line heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
}

/* Base styles */
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: #0F172A;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  color: #070058;
  margin-top: 0;
}

h1 {
  font-size: var(--text-4xl);
  line-height: 1.14;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: var(--text-3xl);
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;
}

h3 {
  font-size: var(--text-2xl);
  line-height: 1.25;
  margin-bottom: 1rem;
}

h4 {
  font-size: var(--text-xl);
  line-height: 1.33;
  margin-bottom: 1rem;
}

/* Paragraphs */
p {
  margin-bottom: 1.5rem;
  max-width: 65ch;
}

/* Mobile responsive */
@media (max-width: 767px) {
  h1 { font-size: var(--text-3xl); }
  h2 { font-size: var(--text-2xl); }
  h3 { font-size: var(--text-xl); }
}
```

---

## Print Typography

### Print-Specific Considerations

**Fonts:**
- Embed fonts in PDFs
- Provide font files to print vendors
- Use Montserrat and Poppins consistently

**Sizes:**
- Convert pixels to points (1px ≈ 0.75pt)
- Minimum body text: 10pt
- Ideal body text: 11-12pt

**Leading (Line Height):**
- Print typically uses tighter leading than web
- Body text: 120-140% of point size
- Headings: 110-120% of point size

**Contrast:**
- Higher contrast needed for print
- Test gray values on actual printer

---

This typography system ensures consistency, readability, and accessibility across all Brandora communications while maintaining our professional yet approachable brand personality.
