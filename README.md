# Tydal-Inspired Modern SaaS Theme

A clean, modern, and professional design system inspired by contemporary SaaS applications, featuring a custom color palette and comprehensive component library.

## Color Palette

- **Primary Color**: `#030076` - Deep blue for buttons, headers, and primary UI elements
- **Accent Color**: `#F9A643` - Warm orange for highlights and call-to-action elements
- **Background**: `#F9F9F9` - Light gray for page backgrounds
- **Text**: `#000000` - Black for body text and content

## Features

- **Modern Design System**: Complete CSS theme with design tokens and variables
- **Responsive Layout**: Mobile-first design that works on all devices
- **Component Library**: Pre-built components including buttons, cards, forms, and more
- **Smooth Animations**: Subtle transitions and scroll effects
- **Flexible Grid System**: Easy-to-use grid layouts (2, 3, and 4 columns)
- **Accessibility**: Semantic HTML and proper contrast ratios

## File Structure

```
.
├── css/
│   ├── theme.css          # Design tokens and CSS variables
│   └── styles.css         # Component styles and layouts
├── js/
│   └── main.js           # Interactive features and animations
├── index.html            # Main landing page
├── components.html       # Component showcase page
└── README.md
```

## Quick Start

1. Clone this repository
2. Open `index.html` in your browser to see the main landing page
3. Open `components.html` to view all available components

## Using the Theme

### Including the Stylesheets

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Theme Stylesheets -->
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/styles.css">
```

### Using CSS Variables

All theme values are available as CSS variables:

```css
/* Colors */
var(--color-primary)
var(--color-accent)
var(--color-background)
var(--color-text-primary)

/* Spacing */
var(--space-4)
var(--space-8)
var(--space-12)

/* Typography */
var(--font-size-xl)
var(--font-weight-bold)
var(--line-height-normal)
```

## Components

### Buttons

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-accent">Accent Button</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Regular</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Subtitle</p>
  </div>
  <div class="card-body">
    <p>Card content goes here</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Grid Layout

```html
<!-- 2 Columns -->
<div class="grid grid-cols-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3 Columns -->
<div class="grid grid-cols-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- 4 Columns -->
<div class="grid grid-cols-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

### Forms

```html
<div class="form-group">
  <label for="input" class="form-label">Label</label>
  <input type="text" id="input" class="form-input" placeholder="Placeholder">
</div>

<div class="form-group">
  <label for="textarea" class="form-label">Message</label>
  <textarea id="textarea" class="form-textarea"></textarea>
</div>
```

## Customization

### Changing Colors

Edit the CSS variables in `css/theme.css`:

```css
:root {
  --color-primary: #030076;      /* Change primary color */
  --color-accent: #F9A643;       /* Change accent color */
  --color-background: #F9F9F9;   /* Change background */
  --color-text-primary: #000000; /* Change text color */
}
```

### Modifying Spacing

Adjust the spacing scale in `css/theme.css`:

```css
:root {
  --space-4: 1rem;      /* 16px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  /* Add or modify as needed */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This theme is provided as-is for your project use.

## Credits

Design inspired by modern SaaS applications with custom color palette and components.