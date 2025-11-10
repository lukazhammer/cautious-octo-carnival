# Brandora Landing Page

A conversion-optimized landing page for Brandora—an AI-accelerated brand strategy tool with tiered one-time pricing. Built with clean, semantic HTML5 and modern CSS3, following professional web development best practices.

## 📋 Project Overview

Brandora offers professional brand strategy services at affordable prices using a proven 7-step methodology combined with AI-accelerated research. This landing page is designed to convert visitors into customers by clearly communicating value, addressing pain points, and showcasing pricing transparently.

**Strategic Positioning:**
- **NOT**: "Generic AI template generator" or "Cheap automated tool"
- **IS**: "Proven 7-step formula + AI-accelerated research = Professional strategy in 30 minutes"

**Aesthetic Reference:** [Vool.com](https://www.vool.com/) - clean, minimal, professional, lots of whitespace

---

## 📁 File Structure

```
brandora-landing/
├── index.html          # Main landing page (complete)
├── style.css           # Complete stylesheet with design system
├── README.md          # This file
├── favicon.png        # (TODO: Add favicon image)
└── images/            # (TODO: Add images folder)
    ├── og-image.jpg   # Open Graph image for social sharing
    └── logo.png       # Brandora logo
```

### Page Structure (index.html)

The landing page includes the following sections in order:

1. **Navigation** - Sticky header with menu
2. **Hero Section** - Main headline, CTA buttons, trust badge
3. **Problem Section** - 3 pain points startups face
4. **Solution Section** - 3 key benefits of Brandora
5. **How It Works** - 3-step process
6. **Pricing Section** - 3 pricing tiers side by side
7. **Comparison Table** - Cost savings vs traditional options
8. **Social Proof** - Customer testimonials
9. **FAQ Section** - Accordion-style 10 questions
10. **Final CTA** - Last conversion opportunity with trust elements
11. **Footer** - Links, contact info, legal

---

## 🎨 Design System

### Colors

The color palette is carefully chosen to feel professional, approachable, and valuable:

```css
--color-primary: #180D23      /* Deep purple-black (CTA/Brand) */
--color-highlight: #98BBEC    /* Soft blue (accents) */
--color-accent: #FFA9F9       /* Soft pink (highlights) */
--color-text: #1a1a1a         /* Dark gray (body text) */
--color-text-light: #666666   /* Light gray (secondary text) */
--color-bg: #F9F9F9           /* Off-white (background) */
--color-white: #FFFFFF        /* Pure white (cards) */
```

**Usage Guidelines:**
- **Primary color (#180D23)**: Use for CTAs, headings, and brand elements
- **Highlight color (#98BBEC)**: Use for accents, badges, and interactive elements
- **Background (#F9F9F9)**: Use for page background and alternating sections
- **White (#FFFFFF)**: Use for cards and navigation

### Typography

Two Google Fonts are used throughout the site:

- **Headings**: 'Montserrat', sans-serif (700 weight)
- **Body**: 'Poppins', sans-serif (400 regular, 600 semi-bold)
- **Minimum body size**: 16px (for accessibility)
- **Line height**: 1.6 for body text, 1.2 for headings

**How to customize:**
1. Open `style.css`
2. Find the `:root` section
3. Update `--font-heading` and `--font-body` variables
4. Update the Google Fonts import link in `index.html` (line 31)

### Spacing System

The spacing system uses CSS custom properties for consistency:

```css
--spacing-xs: 8px      /* Extra small spacing */
--spacing-sm: 16px     /* Small spacing */
--spacing-md: 32px     /* Medium spacing */
--spacing-lg: 48px     /* Large spacing */
--spacing-xl: 80px     /* Extra large spacing */
--spacing-xxl: 120px   /* Section padding (desktop) */
```

### Design Language

- **Buttons**: Pill-shaped (border-radius: 50px), minimum 44x44px touch target, subtle shadow, smooth hover animations
- **Cards**: 8-16px border radius, generous padding (32-48px), subtle shadows, hover effect (lift + shadow)
- **Layout**: Max-width 1200px, centered, responsive grid
- **Micro-interactions**: Smooth transitions (0.3s ease), hover states on all interactive elements

---

## 🔧 Technical Features

### SEO Optimization

Every page includes:

- **Title tag**: 50-60 characters, includes "Brandora" + primary keyword
- **Meta description**: 150-160 characters
- **Meta keywords**: 5-7 relevant keywords
- **Open Graph tags**: For Facebook, LinkedIn sharing
- **Twitter Card tags**: For Twitter sharing
- **Canonical link**: Prevents duplicate content issues
- **JSON-LD structured data**: Organization and Service schema for search engines

**To update SEO tags:**
1. Open `index.html`
2. Find the `<head>` section (lines 6-80)
3. Update the content in the meta tags
4. Update the JSON-LD structured data (lines 45-79)

### Accessibility Features

This site follows WCAG 2.1 AAA standards:

- ✅ Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- ✅ ARIA labels on navigation, forms, buttons
- ✅ Alt text on all images (when added)
- ✅ Keyboard navigation works everywhere
- ✅ Visible focus states (3px outline on interactive elements)
- ✅ Color contrast AAA standard (4.5:1 minimum)
- ✅ Form labels properly associated with inputs
- ✅ Skip to main content link (can be added)
- ✅ Reduced motion support for users with vestibular disorders
- ✅ High contrast mode support

### Performance Optimizations

- ✅ Preconnect to Google Fonts servers
- ✅ Font display: swap (prevents invisible text)
- ✅ Minimal CSS (no frameworks, ~10KB)
- ✅ Minimal JavaScript (only for smooth scroll and mobile menu)
- ✅ Mobile-first responsive design
- ✅ Lazy loading ready (add `loading="lazy"` to images below fold)
- ✅ Print styles included

**Performance Tips:**
1. Optimize images to WebP format (50-80% file size reduction)
2. Add `loading="lazy"` attribute to images below the fold
3. Consider inlining critical CSS for above-the-fold content
4. Use a CDN for faster global delivery

### Responsive Design

The site uses a mobile-first approach with three breakpoints:

- **Mobile**: < 768px (default)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

**Key responsive features:**
- Hamburger menu on mobile
- Single column layout on mobile
- 3-column grid on desktop
- Flexible typography using `clamp()`
- Touch-friendly button sizes (min 44x44px)

---

## 🎯 Pricing Tiers

The landing page showcases three pricing tiers:

| Tier | Price | Description |
|------|-------|-------------|
| **Clarity Starter** | $0 (Free) | Vision, Mission, Values, Elevator Pitch |
| **Market Fit Pro** | ~~$197~~ $147 | Everything in Free + Positioning, Audience, Messaging, Content Strategy |
| **Design Ready** | ~~$597~~ $497 | Everything in Pro + Visual Identity, Templates, Designer Briefs |

All tiers are one-time payments with a 30-day money-back guarantee.

---

## 🚀 How to Deploy

### Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be live at `https://yourusername.github.io/brandora-landing`

### Option 2: Netlify (Free)

1. Create an account on [Netlify](https://netlify.com)
2. Drag and drop the `brandora-landing` folder onto Netlify
3. Your site will be live instantly with a custom Netlify URL
4. (Optional) Connect a custom domain in Site Settings

### Option 3: Vercel (Free)

1. Create an account on [Vercel](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project directory
4. Follow the prompts to deploy

### Option 4: Traditional Web Hosting

1. Use FTP/SFTP to upload all files to your web server
2. Ensure files are in the public_html or www directory
3. Access your site via your domain name

---

## 🔄 Future Enhancements

### Phase 2 Pages (Not Yet Built)

These pages are planned but not yet created:

- `about.html` - About Brandora and founder story
- `pricing.html` - Detailed pricing page with expanded information
- `how-it-works.html` - Detailed explanation of the process
- `faq.html` - Comprehensive FAQ page
- `book.html` - Information about the published book
- `contact.html` - Contact form and information

### Suggested Improvements

1. **Add Analytics**: Google Analytics or Plausible for tracking
2. **Add Live Chat**: Intercom, Drift, or Crisp for customer support
3. **Email Capture**: Integrate with Mailchimp, ConvertKit, or SendGrid
4. **A/B Testing**: Test different headlines, CTAs, and pricing
5. **Blog Section**: Content marketing for SEO
6. **Case Studies**: Detailed customer success stories
7. **Video Demo**: Show the product in action
8. **Payment Integration**: Stripe or Paddle for checkout
9. **User Dashboard**: Customer portal for accessing strategies
10. **Testimonial Automation**: Collect and display reviews automatically

---

## 📝 Content Guidelines

### Writing Style

- **Tone**: Professional, helpful, straightforward (not salesy or hypey)
- **Voice**: Direct, outcome-focused, conversational
- **Sentence length**: 15-25 words maximum
- **Use "you" and "your"**: Speak directly to the reader
- **Avoid buzzwords**: No "synergy," "innovative," "revolutionary"
- **Be specific**: Use concrete examples, not abstract benefits

### Headline Examples

✅ **Good Headlines:**
- "Build Your Brand Strategy in 30 Minutes"
- "Strategy Without the Agency Price Tag"
- "Stop Guessing. Start Building."

❌ **Bad Headlines:**
- "Innovative AI-Powered Branding Solutions"
- "Transform Your Business Today"
- "The Ultimate Branding Platform"

### CTA Best Practices

✅ **Good CTAs:**
- "Start Free - No Credit Card Required"
- "Get Market Fit Pro - $147 →"
- "See How It Works ↓"

❌ **Bad CTAs:**
- "Learn More"
- "Click Here"
- "Submit"

---

## 🐛 Known Issues / TODO

- [ ] Add actual favicon image (currently just a link to favicon.png)
- [ ] Add Open Graph image (og-image.jpg) for social sharing
- [ ] Add company logo (logo.png)
- [ ] Create placeholder images for hero section
- [ ] Add company logos for "As Featured In" section (if available)
- [ ] Implement actual form submission for contact form (when created)
- [ ] Add Google Analytics tracking code
- [ ] Test on Internet Explorer 11 (if required)
- [ ] Add cookie consent banner (if required for GDPR)
- [ ] Create legal pages (Privacy Policy, Terms of Service, Refund Policy)

---

## 🤝 Contributing

If you're working on this project as part of a team:

1. Create a new branch for your changes
2. Make your changes and test thoroughly
3. Ensure your code follows the existing style
4. Test on multiple browsers and devices
5. Submit a pull request with a clear description

---

## 📄 License

© 2025 Brandora. All rights reserved.

---

## 📞 Contact

- **Email**: hello@brandora.com
- **Office**: Tallinn, Estonia
- **Support Hours**: Monday-Friday, 9am-5pm EET

---

## 🙏 Acknowledgments

- Design inspiration: [Vool.com](https://www.vool.com/)
- Fonts: Google Fonts (Montserrat, Poppins)
- Built with: HTML5, CSS3, vanilla JavaScript
- Methodology: Based on "Why Your New Business Needs A Brand and How to Build One" by Lucas Hamel

---

**Last Updated**: 2025-11-10

**Version**: 1.0.0 (MVP - Phase 1 Complete)
