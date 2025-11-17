# Bauhaus Implementation Guide for Brandora Website

## Complete Page Examples with Code

---

## Homepage (Bauhaus Style)

### Full Page Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brandora - Professional Brand Strategy Platform</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="bauhaus-theme">

  <!-- Navigation -->
  <header class="nav-bauhaus">
    <div class="container">
      <div class="nav-grid">
        <div class="nav-logo">
          <span class="logo-shape circle"></span>
          <span class="logo-text">BRANDORA</span>
        </div>
        <nav class="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
        </nav>
        <div class="nav-cta">
          <a href="#login" class="link-minimal">Login</a>
          <a href="#trial" class="btn-bauhaus btn-bauhaus--yellow">
            Start Free Trial
            <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-bauhaus">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <span class="geometric-shape circle hero-accent-1"></span>
          <h1 class="hero-title">
            PROFESSIONAL<br>
            BRAND STRATEGY<br>
            IN HOURS
          </h1>
          <p class="hero-subtitle">
            AI-powered positioning frameworks that help you discover,
            define, and communicate what makes you unique.
          </p>
          <div class="hero-cta-group">
            <a href="#start" class="btn-bauhaus btn-bauhaus--yellow btn-large">
              Start Free Assessment
              <span class="geometric-shape triangle-right"></span>
            </a>
            <a href="#demo" class="btn-bauhaus btn-bauhaus--outline">
              Watch Demo →
            </a>
          </div>
          <div class="hero-social-proof">
            <div class="proof-item">
              <span class="geometric-shape square"></span>
              <span class="proof-stat">10,000+</span>
              <span class="proof-label">Brands</span>
            </div>
            <div class="proof-item">
              <span class="geometric-shape circle"></span>
              <span class="proof-stat">4.8/5</span>
              <span class="proof-label">Rating</span>
            </div>
            <div class="proof-item">
              <span class="geometric-shape triangle"></span>
              <span class="proof-stat">50+</span>
              <span class="proof-label">Countries</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="geometric-composition">
            <span class="floating-shape square yellow-bg"></span>
            <span class="floating-shape circle blue-border"></span>
            <span class="floating-shape triangle navy-fill"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="geometric-divider">
      <span class="divider-shape triangle-down"></span>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features-bauhaus">
    <div class="container">
      <header class="section-header">
        <span class="section-label geometric-outlined">FEATURES</span>
        <h2 class="section-title">Everything You Need to Build<br>Your Brand Strategy</h2>
      </header>

      <div class="feature-grid-3">
        <!-- Feature 1 -->
        <div class="feature-card">
          <div class="feature-icon circle navy-bg"></div>
          <h3 class="feature-title">Audience Research</h3>
          <p class="feature-description">
            Define your ideal customer with AI-powered frameworks
            that identify psychographics, behaviors, and pain points.
          </p>
          <a href="#" class="feature-link">
            Learn more
            <span class="arrow-right">→</span>
          </a>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card featured">
          <div class="feature-icon square yellow-bg"></div>
          <h3 class="feature-title">Positioning Framework</h3>
          <p class="feature-description">
            Discover your unique market position with proven strategic
            frameworks used by top brand consultants.
          </p>
          <a href="#" class="feature-link">
            Learn more
            <span class="arrow-right">→</span>
          </a>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card">
          <div class="feature-icon triangle blue-fill"></div>
          <h3 class="feature-title">Messaging Builder</h3>
          <p class="feature-description">
            Create consistent brand messaging with AI-generated
            value propositions and messaging frameworks.
          </p>
          <a href="#" class="feature-link">
            Learn more
            <span class="arrow-right">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Alternating Feature Detail -->
  <section class="feature-detail-bauhaus">
    <div class="container-wide">
      <!-- Detail 1: Image Left -->
      <div class="feature-detail-row">
        <div class="detail-visual">
          <div class="screenshot-frame">
            <img src="screenshot-assessment.png" alt="Brand Assessment Interface">
            <span class="floating-accent circle yellow-bg"></span>
          </div>
        </div>
        <div class="detail-content">
          <span class="detail-label">BRAND ASSESSMENT</span>
          <h3 class="detail-title">Discover Your Positioning in 30 Minutes</h3>
          <p class="detail-text">
            Our intelligent assessment asks strategic questions about your
            business, market, and customers. The AI analyzes your responses
            and generates personalized positioning recommendations.
          </p>
          <ul class="detail-list">
            <li><span class="list-icon square"></span>Competitive analysis framework</li>
            <li><span class="list-icon square"></span>Target audience definition</li>
            <li><span class="list-icon square"></span>Differentiation opportunities</li>
            <li><span class="list-icon square"></span>Messaging architecture</li>
          </ul>
          <a href="#" class="btn-bauhaus btn-bauhaus--outline">
            Try Assessment Free →
          </a>
        </div>
      </div>

      <!-- Detail 2: Image Right -->
      <div class="feature-detail-row reverse">
        <div class="detail-content">
          <span class="detail-label">TEMPLATE LIBRARY</span>
          <h3 class="detail-title">100+ Ready-to-Use Brand Assets</h3>
          <p class="detail-text">
            Don't just get strategy—get implementation. Download presentations,
            messaging templates, social media graphics, and brand guidelines
            personalized to your brand.
          </p>
          <div class="template-count-grid">
            <div class="count-item">
              <span class="count-number">50+</span>
              <span class="count-label">Templates</span>
            </div>
            <div class="count-item">
              <span class="count-number">25+</span>
              <span class="count-label">Frameworks</span>
            </div>
            <div class="count-item">
              <span class="count-number">10+</span>
              <span class="count-label">Exports</span>
            </div>
          </div>
          <a href="#" class="btn-bauhaus btn-bauhaus--outline">
            Explore Templates →
          </a>
        </div>
        <div class="detail-visual">
          <div class="screenshot-frame">
            <img src="screenshot-templates.png" alt="Template Library">
            <span class="floating-accent triangle blue-fill"></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing-bauhaus">
    <div class="container">
      <header class="section-header centered">
        <h2 class="section-title">Choose Your Plan</h2>
        <p class="section-subtitle">
          Professional brand strategy at every stage of growth
        </p>
      </header>

      <div class="pricing-grid">
        <!-- Starter -->
        <div class="pricing-card">
          <div class="pricing-icon square navy-border"></div>
          <h3 class="pricing-tier">Starter</h3>
          <div class="pricing-price">
            <span class="price-currency">$</span>
            <span class="price-amount">49</span>
            <span class="price-period">/assessment</span>
          </div>
          <p class="pricing-description">
            Perfect for validating your positioning
          </p>
          <ul class="pricing-features">
            <li><span class="check-icon">✓</span>Brand assessment</li>
            <li><span class="check-icon">✓</span>Positioning recommendations</li>
            <li><span class="check-icon">✓</span>Basic templates</li>
            <li><span class="check-icon">✓</span>PDF export</li>
          </ul>
          <a href="#" class="btn-bauhaus btn-bauhaus--outline btn-full-width">
            Get Started
          </a>
        </div>

        <!-- Pro (Featured) -->
        <div class="pricing-card featured">
          <div class="featured-badge">
            <span class="geometric-shape triangle"></span>
            RECOMMENDED
          </div>
          <div class="pricing-icon circle yellow-bg"></div>
          <h3 class="pricing-tier">Pro</h3>
          <div class="pricing-price">
            <span class="price-currency">$</span>
            <span class="price-amount">149</span>
            <span class="price-period">/month</span>
          </div>
          <p class="pricing-description">
            Complete platform for growing businesses
          </p>
          <ul class="pricing-features">
            <li><span class="check-icon">✓</span>Unlimited assessments</li>
            <li><span class="check-icon">✓</span>Advanced frameworks</li>
            <li><span class="check-icon">✓</span>Premium templates</li>
            <li><span class="check-icon">✓</span>Team collaboration</li>
            <li><span class="check-icon">✓</span>Priority support</li>
          </ul>
          <a href="#" class="btn-bauhaus btn-bauhaus--yellow btn-full-width">
            Start Free Trial
          </a>
        </div>

        <!-- Enterprise -->
        <div class="pricing-card">
          <div class="pricing-icon triangle blue-fill"></div>
          <h3 class="pricing-tier">Enterprise</h3>
          <div class="pricing-price">
            <span class="price-amount">Custom</span>
          </div>
          <p class="pricing-description">
            For agencies and large teams
          </p>
          <ul class="pricing-features">
            <li><span class="check-icon">✓</span>Everything in Pro</li>
            <li><span class="check-icon">✓</span>White-label option</li>
            <li><span class="check-icon">✓</span>API access</li>
            <li><span class="check-icon">✓</span>Custom integrations</li>
            <li><span class="check-icon">✓</span>Dedicated support</li>
          </ul>
          <a href="#" class="btn-bauhaus btn-bauhaus--outline btn-full-width">
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-bauhaus navy-bg">
    <div class="container">
      <div class="cta-content centered">
        <span class="geometric-shape circle yellow-bg cta-accent-top"></span>
        <h2 class="cta-title">Ready to Transform Your Brand Strategy?</h2>
        <p class="cta-subtitle">
          Start your free assessment and get personalized recommendations in 30 minutes
        </p>
        <a href="#" class="btn-bauhaus btn-bauhaus--yellow btn-large">
          Start Free Assessment
          <span class="geometric-shape triangle-right"></span>
        </a>
        <p class="cta-note">No credit card required • 14-day free trial</p>
        <span class="geometric-shape triangle yellow-border cta-accent-bottom"></span>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer-bauhaus">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-shape circle"></span>
            <span class="logo-text">BRANDORA</span>
          </div>
          <p class="footer-tagline">
            Professional brand strategy,<br>
            accessible pricing.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link">
              <span class="geometric-shape circle">Li</span>
            </a>
            <a href="#" class="social-link">
              <span class="geometric-shape square">Tw</span>
            </a>
            <a href="#" class="social-link">
              <span class="geometric-shape triangle">Fb</span>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading">Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading">Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading">Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading">Legal</h4>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">© 2025 Brandora. All rights reserved.</p>
        <div class="footer-geometric-accent">
          <span class="geometric-shape square"></span>
          <span class="geometric-shape circle"></span>
          <span class="geometric-shape triangle"></span>
        </div>
      </div>
    </div>
  </footer>

</body>
</html>
```

---

## CSS Stylesheet (Bauhaus Theme)

```css
/* ===================================
   BAUHAUS DESIGN SYSTEM - BRANDORA
   =================================== */

/* CSS Variables */
:root {
  /* Bauhaus Colors */
  --bauhaus-navy: #070058;
  --bauhaus-blue: #6F8AEC;
  --bauhaus-yellow: #FFBE44;
  --bauhaus-bg-blue: #F1F9FF;
  --bauhaus-black: #000000;
  --bauhaus-white: #FFFFFF;
  --bauhaus-red: #E63946;

  /* Neutrals */
  --neutral-900: #0F172A;
  --neutral-700: #334155;
  --neutral-500: #64748B;
  --neutral-300: #CBD5E1;
  --neutral-100: #F1F5F9;

  /* Typography */
  --font-heading: 'Montserrat', -apple-system, sans-serif;
  --font-body: 'Poppins', -apple-system, sans-serif;

  /* Spacing (8px system) */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-8: 64px;
  --space-12: 96px;
  --space-16: 128px;

  /* Layout */
  --container-width: 1200px;
  --container-wide: 1400px;
  --grid-gap: 20px;

  /* Geometric */
  --border-width: 2px;
  --border-radius: 0px; /* Pure Bauhaus */
  --border-radius-soft: 8px;

  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;
}

/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-900);
  background: var(--bauhaus-white);
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.container-wide {
  max-width: var(--container-wide);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  color: var(--bauhaus-navy);
}

h1 {
  font-size: 64px;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 48px;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 32px;
}

a {
  color: var(--bauhaus-blue);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--bauhaus-navy);
}

/* ===================================
   GEOMETRIC SHAPES
   =================================== */

.geometric-shape {
  display: inline-block;
}

.geometric-shape.circle {
  border-radius: 50%;
  aspect-ratio: 1;
}

.geometric-shape.square {
  aspect-ratio: 1;
}

.geometric-shape.triangle {
  width: 0;
  height: 0;
  border-style: solid;
}

.geometric-shape.triangle-right {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid currentColor;
  transform: rotate(-90deg);
}

.geometric-shape.triangle-down {
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid var(--bauhaus-navy);
}

/* Shape Colors */
.navy-bg { background: var(--bauhaus-navy); }
.navy-border { border: var(--border-width) solid var(--bauhaus-navy); }
.navy-fill { fill: var(--bauhaus-navy); }

.blue-bg { background: var(--bauhaus-blue); }
.blue-border { border: var(--border-width) solid var(--bauhaus-blue); }
.blue-fill { fill: var(--bauhaus-blue); }

.yellow-bg { background: var(--bauhaus-yellow); }
.yellow-border { border: var(--border-width) solid var(--bauhaus-yellow); }
.yellow-fill { fill: var(--bauhaus-yellow); }

/* ===================================
   BUTTONS
   =================================== */

.btn-bauhaus {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 16px 32px;
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--border-width) solid var(--bauhaus-navy);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-bauhaus--yellow {
  background: var(--bauhaus-yellow);
  color: var(--bauhaus-navy);
}

.btn-bauhaus--yellow:hover {
  background: var(--bauhaus-navy);
  color: var(--bauhaus-yellow);
}

.btn-bauhaus--outline {
  background: transparent;
  color: var(--bauhaus-navy);
}

.btn-bauhaus--outline:hover {
  background: var(--bauhaus-navy);
  color: var(--bauhaus-white);
}

.btn-large {
  padding: 20px 40px;
  font-size: 18px;
}

.btn-full-width {
  width: 100%;
  justify-content: center;
}

/* ===================================
   NAVIGATION
   =================================== */

.nav-bauhaus {
  position: sticky;
  top: 0;
  height: 80px;
  background: var(--bauhaus-white);
  border-bottom: var(--border-width) solid var(--neutral-300);
  z-index: 1000;
}

.nav-grid {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-4);
  height: 80px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.logo-shape {
  width: 40px;
  height: 40px;
  background: var(--bauhaus-navy);
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--bauhaus-navy);
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
}

.nav-links a {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  color: var(--neutral-700);
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--bauhaus-navy);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.link-minimal {
  color: var(--neutral-700);
  font-weight: 500;
}

/* ===================================
   HERO SECTION
   =================================== */

.hero-bauhaus {
  position: relative;
  padding: var(--space-16) 0 var(--space-12);
  background: var(--bauhaus-bg-blue);
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

.hero-content {
  position: relative;
}

.hero-accent-1 {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 80px;
  height: 80px;
  background: var(--bauhaus-blue);
  opacity: 0.2;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-4);
}

.hero-subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: var(--neutral-700);
  margin-bottom: var(--space-6);
  max-width: 540px;
}

.hero-cta-group {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.hero-social-proof {
  display: flex;
  gap: var(--space-6);
}

.proof-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.proof-item .geometric-shape {
  width: 24px;
  height: 24px;
  margin-bottom: var(--space-1);
}

.proof-stat {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  color: var(--bauhaus-navy);
}

.proof-label {
  font-size: 14px;
  color: var(--neutral-500);
}

/* Hero Visual */
.geometric-composition {
  position: relative;
  height: 500px;
}

.floating-shape {
  position: absolute;
  width: 120px;
  height: 120px;
  animation: float 6s ease-in-out infinite;
}

.floating-shape:nth-child(1) {
  top: 50px;
  right: 100px;
  animation-delay: 0s;
}

.floating-shape:nth-child(2) {
  top: 200px;
  right: 50px;
  animation-delay: 2s;
}

.floating-shape:nth-child(3) {
  top: 350px;
  right: 150px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Geometric Divider */
.geometric-divider {
  text-align: center;
  margin-top: var(--space-6);
}

.divider-shape {
  display: inline-block;
}

/* ===================================
   FEATURES SECTION
   =================================== */

.features-bauhaus {
  padding: var(--space-12) 0;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.section-header.centered {
  text-align: center;
}

.section-label {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bauhaus-blue);
  margin-bottom: var(--space-2);
}

.section-title {
  font-size: 48px;
  margin-bottom: var(--space-3);
}

.section-subtitle {
  font-size: 20px;
  color: var(--neutral-700);
}

/* Feature Grid */
.feature-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.feature-card {
  padding: var(--space-6);
  border: var(--border-width) solid var(--neutral-300);
  transition: all var(--transition-base);
}

.feature-card:hover {
  border-color: var(--bauhaus-blue);
  transform: translateY(-4px);
}

.feature-card.featured {
  border-color: var(--bauhaus-navy);
  background: var(--bauhaus-bg-blue);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin-bottom: var(--space-4);
}

.feature-title {
  font-size: 24px;
  margin-bottom: var(--space-2);
}

.feature-description {
  color: var(--neutral-700);
  margin-bottom: var(--space-4);
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-weight: 600;
  color: var(--bauhaus-blue);
}

.arrow-right {
  transition: transform var(--transition-fast);
}

.feature-link:hover .arrow-right {
  transform: translateX(4px);
}

/* ===================================
   PRICING SECTION
   =================================== */

.pricing-bauhaus {
  padding: var(--space-12) 0;
  background: var(--bauhaus-bg-blue);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  max-width: 1100px;
  margin: 0 auto;
}

.pricing-card {
  position: relative;
  padding: var(--space-6);
  background: var(--bauhaus-white);
  border: var(--border-width) solid var(--neutral-300);
  transition: all var(--transition-base);
}

.pricing-card:hover {
  border-color: var(--bauhaus-blue);
  transform: translateY(-8px);
}

.pricing-card.featured {
  border-color: var(--bauhaus-navy);
  border-width: 3px;
}

.featured-badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  background: var(--bauhaus-yellow);
  color: var(--bauhaus-navy);
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.pricing-icon {
  width: 60px;
  height: 60px;
  margin-bottom: var(--space-3);
}

.pricing-tier {
  font-size: 24px;
  margin-bottom: var(--space-2);
}

.pricing-price {
  margin-bottom: var(--space-3);
}

.price-currency {
  font-size: 24px;
  vertical-align: top;
}

.price-amount {
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 700;
  color: var(--bauhaus-navy);
}

.price-period {
  font-size: 16px;
  color: var(--neutral-500);
}

.pricing-description {
  color: var(--neutral-700);
  margin-bottom: var(--space-4);
}

.pricing-features {
  list-style: none;
  margin-bottom: var(--space-6);
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--neutral-100);
}

.check-icon {
  color: var(--bauhaus-blue);
  font-weight: 700;
}

/* ===================================
   CTA SECTION
   =================================== */

.cta-bauhaus {
  padding: var(--space-16) 0;
  position: relative;
  overflow: hidden;
}

.cta-bauhaus.navy-bg {
  background: var(--bauhaus-navy);
  color: var(--bauhaus-white);
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-content.centered {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-accent-top,
.cta-accent-bottom {
  position: absolute;
  z-index: 0;
}

.cta-accent-top {
  top: -40px;
  right: 100px;
  width: 120px;
  height: 120px;
  opacity: 0.3;
}

.cta-accent-bottom {
  bottom: -40px;
  left: 100px;
  width: 100px;
  height: 100px;
  opacity: 0.2;
}

.cta-title {
  font-size: 48px;
  color: var(--bauhaus-white);
  margin-bottom: var(--space-3);
}

.cta-subtitle {
  font-size: 20px;
  color: var(--neutral-300);
  margin-bottom: var(--space-6);
}

.cta-note {
  margin-top: var(--space-3);
  font-size: 14px;
  color: var(--neutral-300);
}

/* ===================================
   FOOTER
   =================================== */

.footer-bauhaus {
  padding: var(--space-12) 0 var(--space-6);
  background: var(--bauhaus-navy);
  color: var(--bauhaus-white);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
}

.footer-logo .logo-shape {
  background: var(--bauhaus-yellow);
}

.footer-logo .logo-text {
  color: var(--bauhaus-white);
}

.footer-tagline {
  color: var(--neutral-300);
  margin-bottom: var(--space-4);
  line-height: 1.6;
}

.footer-social {
  display: flex;
  gap: var(--space-2);
}

.social-link .geometric-shape {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-width) solid var(--bauhaus-white);
  color: var(--bauhaus-white);
  font-size: 12px;
  font-weight: 700;
  transition: all var(--transition-base);
}

.social-link:hover .geometric-shape {
  background: var(--bauhaus-yellow);
  border-color: var(--bauhaus-yellow);
  color: var(--bauhaus-navy);
}

.footer-heading {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: var(--space-3);
  color: var(--bauhaus-white);
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: var(--space-2);
}

.footer-links a {
  color: var(--neutral-300);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--bauhaus-yellow);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-copyright {
  color: var(--neutral-300);
  font-size: 14px;
}

.footer-geometric-accent {
  display: flex;
  gap: var(--space-2);
}

.footer-geometric-accent .geometric-shape {
  width: 20px;
  height: 20px;
  background: var(--bauhaus-yellow);
  opacity: 0.5;
}

/* ===================================
   RESPONSIVE
   =================================== */

@media (max-width: 1024px) {
  .hero-grid,
  .feature-grid-3,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  h1, .hero-title {
    font-size: 48px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  .nav-grid {
    grid-template-columns: 1fr auto;
  }

  .nav-links {
    display: none; /* Mobile menu needed */
  }

  .hero-cta-group {
    flex-direction: column;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Additional Pages

### Features Page Layout
### Pricing Page Layout
### About Page Layout
### Contact Page Layout

*(Follow same Bauhaus principles: geometric shapes, grid systems, high contrast, asymmetric layouts)*

---

This implementation guide provides production-ready HTML and CSS for building a Bauhaus-styled Brandora website that maintains brand identity while embracing modernist design principles.
