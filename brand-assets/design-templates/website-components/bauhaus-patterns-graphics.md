# Bauhaus Patterns & Graphic Elements

## Overview

This guide details the specific geometric patterns, shapes, and graphic elements used in the Brandora Bauhaus design system for web applications.

---

## Geometric Shape Library

### Primary Shapes (SVG Specifications)

#### Circle
```svg
<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="48"
    fill="none"
    stroke="#070058"
    stroke-width="2"/>
</svg>
```

**Usage:**
- Icon backgrounds
- Decorative accents
- Profile images
- Progress indicators
- Bullet points

**Sizes:**
- XS: 20px
- SM: 40px
- MD: 80px
- LG: 120px
- XL: 200px

**Variations:**
- Filled: `fill="#FFBE44"`
- Outlined: `stroke="#070058" fill="none"`
- Half-filled: `fill="url(#half-gradient)"`

---

#### Square/Rectangle
```svg
<svg width="100" height="100" viewBox="0 0 100 100">
  <rect x="2" y="2" width="96" height="96"
    fill="none"
    stroke="#070058"
    stroke-width="2"/>
</svg>
```

**Usage:**
- Content containers
- Image frames
- Buttons
- Grid cells
- Section dividers

**Aspect Ratios:**
- 1:1 (Square)
- 16:9 (Wide)
- 4:3 (Standard)
- 2:1 (Banner)
- 3:2 (Photo)

---

#### Triangle
```svg
<svg width="100" height="100" viewBox="0 0 100 100">
  <polygon points="50,10 90,90 10,90"
    fill="none"
    stroke="#070058"
    stroke-width="2"/>
</svg>
```

**Variations:**
- Equilateral (default)
- Right-angle (90°)
- Isosceles
- Inverted (point down)

**Usage:**
- Directional indicators
- Play buttons
- Navigation arrows
- Decorative accents
- Section transitions

---

#### Line/Bar
```svg
<svg width="100" height="4" viewBox="0 0 100 4">
  <rect x="0" y="0" width="100" height="4"
    fill="#070058"/>
</svg>
```

**Usage:**
- Dividers
- Progress bars
- Underlines
- Grid lines
- Borders

**Widths:**
- Hairline: 1px
- Thin: 2px
- Medium: 4px
- Bold: 8px

---

## Composite Geometric Compositions

### 1. Three Shapes (Brand Trinity)

```
    ○

  ■   ▲
```

**Usage:** Brand identity reinforcement
**Colors:** Navy circle, Yellow square, Blue triangle
**Placement:** Headers, footers, loading screens

---

### 2. Geometric Grid Pattern

```
■ ○ ■ ○ ■
○ ■ ○ ■ ○
■ ○ ■ ○ ■
```

**Usage:** Background textures
**Opacity:** 5-10%
**Spacing:** 40-60px between shapes
**Colors:** Monochromatic Navy or Blue

---

### 3. Diagonal Composition

```
        ○
      ■
    ▲
  ─────────
```

**Usage:** Hero sections, dynamic layouts
**Angle:** 45° diagonal
**Spacing:** Fibonacci sequence (8, 13, 21, 34px)

---

### 4. Overlapping Shapes

```
  ○
 ○ ○
  ○
```

**Usage:** Logo marks, decorative accents
**Opacity:** 50-80% for overlapping areas
**Blend mode:** Multiply or normal

---

### 5. Frame Composition

```
┌─────────────┐
│  ○       ▲  │
│             │
│      ■      │
│             │
└─────────────┘
```

**Usage:** Feature callouts, cards
**Border:** 2px solid
**Internal shapes:** Floating within frame

---

## Pattern Library

### Pattern 1: Circular Grid

```css
.pattern-circular-grid {
  background-image: radial-gradient(
    circle,
    #070058 2px,
    transparent 2px
  );
  background-size: 40px 40px;
  opacity: 0.05;
}
```

**Application:**
- Section backgrounds
- Hero section overlays
- Footer backgrounds

---

### Pattern 2: Square Grid

```css
.pattern-square-grid {
  background-image:
    linear-gradient(#CBD5E1 1px, transparent 1px),
    linear-gradient(90deg, #CBD5E1 1px, transparent 1px);
  background-size: 40px 40px;
}
```

**Application:**
- Notebook/blueprint aesthetic
- Form backgrounds
- Design tool sections

---

### Pattern 3: Diagonal Stripes

```css
.pattern-diagonal-stripes {
  background-image: repeating-linear-gradient(
    45deg,
    #F1F9FF,
    #F1F9FF 10px,
    #E5E7EB 10px,
    #E5E7EB 20px
  );
}
```

**Application:**
- Section dividers
- Alert backgrounds
- Decorative elements

---

### Pattern 4: Triangular Tessellation

```
▲▼▲▼▲
▼▲▼▲▼
▲▼▲▼▲
```

**SVG Pattern:**
```svg
<pattern id="triangles" width="40" height="40" patternUnits="userSpaceOnUse">
  <polygon points="0,0 20,0 10,20" fill="#6F8AEC" opacity="0.1"/>
  <polygon points="20,0 40,0 30,20" fill="#070058" opacity="0.1"/>
  <polygon points="10,20 30,20 20,40" fill="#FFBE44" opacity="0.1"/>
</pattern>
```

**Application:**
- Hero backgrounds
- Feature section backgrounds
- Decorative panels

---

### Pattern 5: Circles & Squares Combo

```
○ ■ ○ ■
■ ○ ■ ○
○ ■ ○ ■
```

**Application:**
- Brand-specific backgrounds
- Loading screens
- Section transitions

---

## Geometric Iconography (Bauhaus Style)

### Icon Construction Grid

```
┌─────────────────┐
│ • • • • • • • • │  24×24px grid
│ • • • • • • • • │  8×8 dots
│ • • • • • • • • │  2px stroke
│ • • • • • • • • │
│ • • • • • • • • │
│ • • • • • • • • │
│ • • • • • • • • │
│ • • • • • • • • │
└─────────────────┘
```

### Bauhaus Icon Examples

**1. Brand Assessment Icon**
```
  ┌───────┐
  │   ○   │  Circle (insight)
  │  ■ ▲  │  Square + Triangle (framework)
  └───────┘
```

**2. Positioning Icon**
```
    ▲
   ╱ ╲    Target/pinnacle
  ╱───╲
 ▔▔▔▔▔▔▔
```

**3. Messaging Icon**
```
  ┌─────┐
  │ ─── │  Speech bubble
  │ ─── │  (rectangular)
  └──▼──┘
```

**4. Export Icon**
```
  ┌───┐
  │   │ ↓  Document + arrow
  └───┘ ▼  (geometric)
```

**5. Team Icon**
```
 ○ ○ ○     Three circles
           (people)
```

---

## Color Block Compositions

### 1. Split Screen (50/50)

```
┌──────────┬──────────┐
│  NAVY    │  WHITE   │
│  #070058 │  #FFFFFF │
│          │          │
│  Content │  Content │
└──────────┴──────────┘
```

**Usage:** Hero sections, feature comparisons

---

### 2. Asymmetric Split (60/40)

```
┌────────────────┬────────┐
│  YELLOW        │  NAVY  │
│  #FFBE44       │#070058 │
│                │        │
│  Content       │Content │
└────────────────┴────────┘
```

**Usage:** Emphasis sections, CTAs

---

### 3. Vertical Stripes

```
│ NAVY │ WHITE │ BLUE │ YELLOW │
│#070058│#FFFFFF│#6F8AEC│#FFBE44 │
```

**Usage:** Footer sections, feature lists

---

### 4. Floating Color Block

```
┌──────────────────────────┐
│  White Background        │
│                          │
│    ┌──────────┐          │
│    │  Navy    │          │
│    │  Block   │          │
│    └──────────┘          │
│                          │
└──────────────────────────┘
```

**Usage:** Callouts, highlighted content

---

### 5. Diagonal Division

```
┌──────────────────────────┐
│  NAVY     ╱              │
│          ╱  WHITE        │
│         ╱                │
│        ╱                 │
└──────────────────────────┘
```

**Usage:** Dynamic transitions, modern feel

---

## Geometric Typography Treatments

### 1. Text in Shapes

**Circle Text Container:**
```
      ┌─────────┐
     ╱           ╲
    │   BRAND    │
    │  STRATEGY  │
     ╲           ╱
      └─────────┘
```

**Square Text Container:**
```
┌─────────────┐
│   DISCOVER  │
│   DEFINE    │
│ DIFFERENTIATE│
└─────────────┘
```

---

### 2. Outlined Text (Geometric)

```
╔═══════════╗
║ BRANDORA  ║
╚═══════════╝
```

**CSS:**
```css
.geometric-outlined-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: transparent;
  -webkit-text-stroke: 2px #070058;
  text-stroke: 2px #070058;
}
```

---

### 3. Text + Geometric Accent

```
TRANSFORM ■
YOUR      ○
BRAND     ▲
```

**Implementation:**
```html
<h1>
  TRANSFORM <span class="geometric-accent square"></span><br>
  YOUR <span class="geometric-accent circle"></span><br>
  BRAND <span class="geometric-accent triangle"></span>
</h1>
```

---

### 4. Vertical Sidebar Text

```
│ B │
│ R │
│ A │ Main Content Area
│ N │
│ D │
│ O │
│ R │
│ A │
```

**CSS:**
```css
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 14px;
  letter-spacing: 0.2em;
  color: #070058;
}
```

---

### 5. Number + Shape Pairing

```
01 ○  Step One
02 ■  Step Two
03 ▲  Step Three
```

---

## Geometric Dividers

### 1. Simple Line
```
────────────────────
```

### 2. Line with Center Shape
```
────────── ○ ──────────
────────── ■ ──────────
────────── ▲ ──────────
```

### 3. Multiple Shapes
```
─── ■ ○ ▲ ───
```

### 4. Diagonal Split
```
           ╱
──────────╱──────────
         ╱
```

### 5. Step Divider
```
─────┐
     │
     └─────
```

---

## Animated Geometric Elements

### 1. Rotating Triangle (Loading)

```css
@keyframes rotate-triangle {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-triangle {
  animation: rotate-triangle 2s linear infinite;
}
```

---

### 2. Pulsing Circle

```css
@keyframes pulse-circle {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}

.pulse-circle {
  animation: pulse-circle 2s ease-in-out infinite;
}
```

---

### 3. Sliding Square

```css
@keyframes slide-square {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}

.slide-square {
  animation: slide-square 3s ease-in-out infinite;
}
```

---

### 4. Morphing Shapes

```css
@keyframes morph-shape {
  0% { border-radius: 0%; } /* Square */
  50% { border-radius: 50%; } /* Circle */
  100% { border-radius: 0%; } /* Square */
}

.morph-shape {
  animation: morph-shape 4s ease-in-out infinite;
}
```

---

## Geometric Loading States

### 1. Three Shapes Loading

```
○  →  ■  →  ▲
```

Each shape appears/pulses in sequence.

**HTML:**
```html
<div class="geometric-loader">
  <span class="shape circle"></span>
  <span class="shape square"></span>
  <span class="shape triangle"></span>
</div>
```

---

### 2. Building Blocks

```
Stage 1:  ■
Stage 2:  ■ ■
Stage 3:  ■ ■ ■
```

Squares stack horizontally or vertically.

---

### 3. Rotating Squares

```
  ■
■   ■
  ■
```

Four squares rotate around center point.

---

## Geometric Backgrounds

### 1. Subtle Shape Scatter

```
      ○           ■
           ▲
  ■            ○
       ▲
```

**CSS:**
```css
.geometric-bg {
  position: relative;
  overflow: hidden;
}

.geometric-bg::before,
.geometric-bg::after {
  content: '';
  position: absolute;
  opacity: 0.05;
  /* Position shapes */
}
```

---

### 2. Corner Accents

```
○                    ■
┌─────────────────────┐
│                     │
│     Content         │
│                     │
└─────────────────────┘
▲                    ○
```

---

### 3. Geometric Gradient (Simulated)

```
■■■■■■░░░░░░
■■■■░░░░░░░░
■■░░░░░░░░░░
░░░░░░░░░░░░
```

Using shapes in various opacities to create gradient effect.

---

## Implementation Code Examples

### Geometric Button Component

```html
<button class="btn-bauhaus btn-bauhaus--yellow">
  <span class="btn-text">Start Now</span>
  <span class="btn-shape triangle"></span>
</button>
```

```css
.btn-bauhaus {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border: 2px solid #070058;
  background: #FFBE44;
  color: #070058;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 200ms ease-in-out;
  cursor: pointer;
}

.btn-bauhaus:hover {
  background: #070058;
  color: #FFBE44;
}

.btn-shape {
  width: 16px;
  height: 16px;
}

.btn-shape.triangle {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid currentColor;
}
```

---

### Geometric Card Component

```html
<div class="card-bauhaus">
  <div class="card-shape circle"></div>
  <h3 class="card-title">Feature Name</h3>
  <p class="card-description">Description text here</p>
  <a href="#" class="card-link">Learn More →</a>
</div>
```

```css
.card-bauhaus {
  position: relative;
  padding: 32px;
  border: 2px solid #070058;
  background: #FFFFFF;
  transition: all 200ms ease-in-out;
}

.card-bauhaus:hover {
  border-color: #6F8AEC;
  transform: translateY(-4px);
}

.card-shape {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  background: #FFBE44;
}

.card-shape.circle {
  border-radius: 50%;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #070058;
  margin-bottom: 12px;
}

.card-description {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #334155;
  line-height: 1.6;
}
```

---

### Geometric Section Divider

```html
<div class="section-divider">
  <span class="divider-line"></span>
  <span class="divider-shape circle"></span>
  <span class="divider-line"></span>
</div>
```

```css
.section-divider {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 60px 0;
}

.divider-line {
  flex: 1;
  height: 2px;
  background: #CBD5E1;
}

.divider-shape {
  width: 40px;
  height: 40px;
  background: #6F8AEC;
}

.divider-shape.circle {
  border-radius: 50%;
}
```

---

## Print Patterns (for PDFs, exports)

### Grid Notebook Pattern
- 1cm squares
- Light gray (#CBD5E1)
- Subtle (1px lines)
- Background for reports

### Dot Grid Pattern
- 5mm spacing
- Small dots (2px)
- Neutral color
- Professional documents

---

## Usage Guidelines

### When to Use Patterns
✓ Large background areas needing visual interest
✓ Section differentiation
✓ Subtle texture without distraction
✓ Brand reinforcement

### When NOT to Use Patterns
✗ Over text (readability issues)
✗ High-traffic interaction areas
✗ When content is already visually dense
✗ Print materials (unless very subtle)

### Opacity Guidelines
- **Background patterns:** 3-10% opacity
- **Decorative accents:** 20-50% opacity
- **Functional elements:** 100% opacity

---

**These geometric patterns and graphics create a distinctive Bauhaus aesthetic while maintaining usability and brand consistency across the Brandora digital experience.**
