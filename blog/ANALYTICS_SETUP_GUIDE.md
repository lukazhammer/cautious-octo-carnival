# Google Analytics 4 & Search Console Setup Guide

Complete implementation guide for tracking Brandora blog performance, conversions, and SEO metrics.

---

## Table of Contents

1. [Google Analytics 4 Setup](#google-analytics-4-setup)
2. [Custom Events Configuration](#custom-events-configuration)
3. [Conversion Tracking](#conversion-tracking)
4. [GA4 Dashboard Creation](#ga4-dashboard-creation)
5. [Google Search Console Setup](#google-search-console-setup)
6. [Performance Monitoring](#performance-monitoring)
7. [Reporting & Analysis](#reporting-analysis)

---

## Google Analytics 4 Setup

### Step 1: Create GA4 Property

**If you already have Google Analytics:**

1. Go to **Admin** (bottom left gear icon)
2. Under **Property** column, click **Create Property**
3. Enter property details:
   - **Property name:** Brandora Blog
   - **Reporting time zone:** [Your timezone]
   - **Currency:** [Your currency]
4. Click **Next**
5. Select business information:
   - **Industry category:** Technology / Internet & Telecom
   - **Business size:** [Your size]
6. Select business objectives:
   - ✓ Generate leads
   - ✓ Examine user behavior
7. Click **Create**
8. Accept Terms of Service

**If this is your first time:**

1. Go to analytics.google.com
2. Click **Start measuring**
3. Follow the same steps as above

### Step 2: Set Up Data Stream

**For website tracking:**

1. In the property setup wizard, select **Web**
2. Enter website details:
   - **Website URL:** https://brandora.com
   - **Stream name:** Brandora Blog
3. Click **Create stream**
4. **Copy the Measurement ID** (looks like G-XXXXXXXXXX)

### Step 3: Install GA4 Tracking Code

**Option A: Google Tag Manager (Recommended)**

1. Go to tagmanager.google.com
2. Create a new container:
   - **Container name:** Brandora
   - **Target platform:** Web
3. Click **Create**
4. In GTM, click **Tags** → **New**
5. Click **Tag Configuration** → **Google Analytics: GA4 Configuration**
6. Enter your **Measurement ID** (G-XXXXXXXXXX)
7. Under **Triggering**, select **All Pages**
8. Save the tag
9. Click **Submit** → **Publish**
10. Install GTM container code on your website:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->
```

**Place this code:**
- In the `<head>` section of every page
- Immediately after the opening `<head>` tag

**Also add this code:**

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Place this code:**
- Immediately after the opening `<body>` tag

**Option B: Direct Installation (If no GTM)**

Add this code to every page, immediately after the `<head>` tag:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### Step 4: Verify Installation

1. Go to your website
2. In GA4, go to **Reports** → **Realtime**
3. You should see your own visit appear within 30 seconds
4. If nothing appears:
   - Check browser console for errors
   - Verify Measurement ID is correct
   - Ensure ad blockers are disabled for testing
   - Use Google Tag Assistant Chrome extension to debug

### Step 5: Configure Basic Settings

**Enable Enhanced Measurement:**

1. Go to **Admin** → **Data Streams**
2. Click on your web stream
3. Scroll to **Enhanced measurement**
4. Ensure these are enabled:
   - ✓ Page views
   - ✓ Scrolls
   - ✓ Outbound clicks
   - ✓ Site search
   - ✓ Video engagement
   - ✓ File downloads

**Configure Internal Traffic Filter:**

1. Go to **Admin** → **Data Streams** → **Configure tag settings** → **Show all**
2. Click **Define internal traffic**
3. Click **Create**
4. Enter rule:
   - **Rule name:** Internal Traffic
   - **IP address:** [Your office IP address]
   - Click **Create**
5. Go to **Admin** → **Data Settings** → **Data Filters**
6. Click on **Internal Traffic** filter
7. Change **Filter State** to **Active**
8. Save

**Set Up Site Search Tracking:**

If your blog has search functionality:

1. Go to **Admin** → **Data Streams** → Your stream
2. Click **Enhanced measurement** gear icon
3. Expand **Site search**
4. Enable **Site search**
5. Enter search parameter (e.g., `q`, `s`, `search`)

---

## Custom Events Configuration

### Why Custom Events Matter

Default GA4 tracking captures pageviews, but custom events reveal:
- Which blog posts drive newsletter signups
- Which posts drive product signups
- Internal link effectiveness
- Content engagement depth
- Download/resource interactions

### Event 1: Newsletter Signup

**Trigger:** When someone submits newsletter form from a blog post

**Implementation via GTM:**

1. In GTM, create a new tag:
   - **Tag type:** GA4 Event
   - **Configuration Tag:** [Your GA4 Config Tag]
   - **Event Name:** `newsletter_signup`
   - **Event Parameters:**
     - `source_post`: {{Page Path}}
     - `source_pillar`: [Set via dataLayer or custom variable]
     - `value`: 10 (estimated value of signup)

2. Set up trigger:
   - **Trigger type:** Form Submission
   - **Form:** Newsletter form (specify by ID, class, or URL)

3. Save and publish

**Implementation via Direct Code:**

Add to newsletter form submission handler:

```javascript
// On newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  // Get post slug from URL or meta tag
  var postSlug = document.querySelector('meta[property="article:slug"]').content;
  var pillar = document.querySelector('meta[property="article:pillar"]').content;

  gtag('event', 'newsletter_signup', {
    'source_post': postSlug,
    'source_pillar': pillar,
    'value': 10
  });
});
```

### Event 2: Product Signup

**Trigger:** When someone signs up for Brandora from a blog post

**Implementation:**

```javascript
// On product signup form submission
function trackProductSignup() {
  var postSlug = document.querySelector('meta[property="article:slug"]').content;
  var pillar = document.querySelector('meta[property="article:pillar"]').content;

  gtag('event', 'product_signup', {
    'source_post': postSlug,
    'source_pillar': pillar,
    'value': 2000, // Estimated customer lifetime value
    'transaction_id': Date.now() + '-' + Math.random()
  });
}
```

### Event 3: Internal Link Clicks

**Trigger:** When someone clicks internal blog link

**Implementation:**

```javascript
// Track all internal link clicks
document.addEventListener('DOMContentLoaded', function() {
  var internalLinks = document.querySelectorAll('article a[href^="/blog/"]');

  internalLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var fromPost = document.querySelector('meta[property="article:slug"]').content;
      var toPost = this.getAttribute('href').replace('/blog/', '').replace('/', '');
      var linkText = this.textContent;

      gtag('event', 'internal_link_click', {
        'from_post': fromPost,
        'to_post': toPost,
        'link_text': linkText
      });
    });
  });
});
```

### Event 4: Scroll Depth

**Trigger:** When reader scrolls to 25%, 50%, 75%, 90% of post

**Implementation:**

```javascript
var scrollDepths = [25, 50, 75, 90];
var triggeredDepths = [];

window.addEventListener('scroll', function() {
  var scrollPercentage = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);

  scrollDepths.forEach(function(depth) {
    if (scrollPercentage >= depth && triggeredDepths.indexOf(depth) === -1) {
      triggeredDepths.push(depth);

      var postSlug = document.querySelector('meta[property="article:slug"]').content;

      gtag('event', 'scroll_depth', {
        'post_slug': postSlug,
        'depth_percentage': depth
      });
    }
  });
});
```

### Event 5: Time on Page

**Trigger:** When reader spends 30s, 60s, 120s on page

**Implementation:**

```javascript
var timeThresholds = [30, 60, 120]; // seconds
var triggeredTimes = [];

timeThresholds.forEach(function(threshold) {
  setTimeout(function() {
    if (triggeredTimes.indexOf(threshold) === -1) {
      triggeredTimes.push(threshold);

      var postSlug = document.querySelector('meta[property="article:slug"]').content;

      gtag('event', 'time_on_page', {
        'post_slug': postSlug,
        'time_seconds': threshold
      });
    }
  }, threshold * 1000);
});
```

### Event 6: External Link Clicks

**Trigger:** When someone clicks external resource link

**Implementation:**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var externalLinks = document.querySelectorAll('article a[href^="http"]:not([href*="brandora.com"])');

  externalLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var fromPost = document.querySelector('meta[property="article:slug"]').content;
      var destination = this.getAttribute('href');

      gtag('event', 'external_link_click', {
        'from_post': fromPost,
        'destination': destination,
        'link_text': this.textContent
      });
    });
  });
});
```

### Event 7: CTA Clicks

**Trigger:** When someone clicks "Try Brandora" or other CTA buttons

**Implementation:**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var ctaButtons = document.querySelectorAll('.cta-button, a[href*="signup"], a[href*="get-started"]');

  ctaButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      var fromPost = document.querySelector('meta[property="article:slug"]').content;
      var ctaText = this.textContent;
      var ctaLocation = this.closest('section').querySelector('h2, h3').textContent || 'unknown';

      gtag('event', 'cta_click', {
        'from_post': fromPost,
        'cta_text': ctaText,
        'cta_location': ctaLocation
      });
    });
  });
});
```

### Event 8: Resource Downloads

**Trigger:** When someone downloads a resource/template

**Implementation:**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var downloadLinks = document.querySelectorAll('a[download], a[href$=".pdf"], a[href$=".zip"]');

  downloadLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var fromPost = document.querySelector('meta[property="article:slug"]').content;
      var resourceName = this.getAttribute('download') || this.textContent;

      gtag('event', 'resource_download', {
        'from_post': fromPost,
        'resource_name': resourceName
      });
    });
  });
});
```

### Complete Event Tracking Script

**Add this to all blog post pages:**

```html
<script>
(function() {
  // Get post metadata
  function getPostSlug() {
    var meta = document.querySelector('meta[property="article:slug"]');
    return meta ? meta.content : window.location.pathname;
  }

  function getPillar() {
    var meta = document.querySelector('meta[property="article:pillar"]');
    return meta ? meta.content : 'unknown';
  }

  // Track newsletter signups
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      gtag('event', 'newsletter_signup', {
        'source_post': getPostSlug(),
        'source_pillar': getPillar(),
        'value': 10
      });
    });
  }

  // Track internal link clicks
  var internalLinks = document.querySelectorAll('article a[href^="/blog/"]');
  internalLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      gtag('event', 'internal_link_click', {
        'from_post': getPostSlug(),
        'to_post': this.getAttribute('href'),
        'link_text': this.textContent
      });
    });
  });

  // Track scroll depth
  var scrollDepths = [25, 50, 75, 90];
  var triggeredDepths = [];
  window.addEventListener('scroll', function() {
    var scrollPercentage = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
    scrollDepths.forEach(function(depth) {
      if (scrollPercentage >= depth && triggeredDepths.indexOf(depth) === -1) {
        triggeredDepths.push(depth);
        gtag('event', 'scroll_depth', {
          'post_slug': getPostSlug(),
          'depth_percentage': depth
        });
      }
    });
  });

  // Track time on page
  var timeThresholds = [30, 60, 120];
  timeThresholds.forEach(function(threshold) {
    setTimeout(function() {
      gtag('event', 'time_on_page', {
        'post_slug': getPostSlug(),
        'time_seconds': threshold
      });
    }, threshold * 1000);
  });

  // Track CTA clicks
  var ctaButtons = document.querySelectorAll('.cta-button, a[href*="signup"]');
  ctaButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      gtag('event', 'cta_click', {
        'from_post': getPostSlug(),
        'cta_text': this.textContent
      });
    });
  });
})();
</script>
```

**Add these meta tags to blog post template:**

```html
<meta property="article:slug" content="[POST_SLUG]">
<meta property="article:pillar" content="[PILLAR_NAME]">
```

---

## Conversion Tracking

### Step 1: Mark Events as Conversions

1. In GA4, go to **Admin** → **Events**
2. Wait 24 hours for custom events to appear
3. For each important event, toggle **Mark as conversion**:
   - ✓ `newsletter_signup`
   - ✓ `product_signup`
   - ✓ `cta_click`

### Step 2: Assign Values to Conversions

**Newsletter Signup Value:**
- Estimated value: $10
- Reasoning: Average newsletter subscriber → product signup conversion rate

**Product Signup Value:**
- Estimated value: $2,000
- Reasoning: Estimated customer lifetime value

**CTA Click Value:**
- Estimated value: $5
- Reasoning: Indicates high intent

**To set values:**

Values are set in the gtag event code (see examples above).

```javascript
gtag('event', 'newsletter_signup', {
  'value': 10,
  'currency': 'USD'
});
```

### Step 3: Create Conversion Funnels

**Newsletter Signup Funnel:**

1. Go to **Explore** → **Funnel exploration**
2. Create funnel:
   - **Step 1:** Page view (blog post)
   - **Step 2:** Scroll depth 50%
   - **Step 3:** CTA click
   - **Step 4:** Newsletter signup

**Product Signup Funnel:**

1. **Step 1:** Page view (blog post)
2. **Step 2:** Internal link click
3. **Step 3:** CTA click
4. **Step 4:** Product signup

### Step 4: Set Up Conversion Reporting

**Create Custom Report:**

1. Go to **Explore** → **Blank**
2. Add dimensions:
   - Source/medium
   - Landing page
   - Event name
3. Add metrics:
   - Conversions
   - Conversion rate
   - Revenue (if e-commerce enabled)
4. Add filters:
   - Event name = newsletter_signup, product_signup, cta_click
5. Save report as **"Blog Conversion Report"**

---

## GA4 Dashboard Creation

### Dashboard 1: Blog Overview

**Metrics to include:**

**Traffic:**
- Total users (30 days)
- Total pageviews (30 days)
- Average session duration
- Pages per session

**Top Content:**
- Top 10 blog posts by pageviews
- Top 5 landing pages
- Top 5 exit pages

**Sources:**
- Traffic by source/medium
- Organic search traffic
- Direct traffic
- Referral traffic
- Social traffic

**Engagement:**
- Average scroll depth
- Average time on page
- Bounce rate

**To create:**

1. Go to **Explore** → **Blank**
2. Set **Date range:** Last 30 days
3. Add segments:
   - All users
   - Blog visitors only (page path contains "/blog/")
4. Add visualizations:
   - **Scorecard:** Total users, pageviews, avg session duration
   - **Line chart:** Users over time (by day)
   - **Table:** Top pages by pageviews
   - **Donut chart:** Traffic by source/medium
5. Save as **"Blog Overview Dashboard"**

### Dashboard 2: Conversion Dashboard

**Metrics to include:**

**Conversion Overview:**
- Total conversions
- Conversion rate
- Conversions by type (newsletter, product, CTA)

**Top Converting Content:**
- Top 10 posts by newsletter signups
- Top 10 posts by product signups
- Top 10 posts by CTA clicks

**Conversion Funnel:**
- Pageview → Engagement → Conversion
- Drop-off rates at each stage

**Conversion Sources:**
- Conversions by source/medium
- Conversions by landing page
- Conversions by device type

**To create:**

1. Go to **Explore** → **Blank**
2. Add dimensions:
   - Landing page
   - Source/medium
   - Event name
3. Add metrics:
   - Conversions
   - Conversion rate
   - Total users
4. Filter to conversion events only
5. Create visualizations:
   - **Scorecard:** Total conversions, conversion rate
   - **Bar chart:** Conversions by type
   - **Table:** Top converting pages
   - **Funnel:** Conversion pathway
6. Save as **"Blog Conversion Dashboard"**

### Dashboard 3: Pillar Performance

**Metrics to include:**

**By Pillar:**
- Pageviews per pillar
- Avg time on page per pillar
- Conversions per pillar
- Conversion rate per pillar

**Internal Linking:**
- Most clicked internal links
- Link flow between pillars
- Hub page performance

**To create:**

1. Go to **Explore** → **Blank**
2. Add custom dimension for pillar (from page path or meta tag)
3. Create table:
   - **Dimension:** Pillar
   - **Metrics:** Pageviews, avg time, conversions, conversion rate
4. Create sankey diagram:
   - **Starting point:** Hub pages
   - **Ending point:** Detail pages
   - Shows internal link flow
5. Save as **"Pillar Performance Dashboard"**

### Dashboard 4: SEO Performance

**Metrics to include:**

**Organic Traffic:**
- Total organic users
- Organic traffic trend (12 months)
- Top organic landing pages

**Keyword Performance:**
- (Integrate with Search Console data)
- Top keywords by clicks
- Top keywords by impressions
- Avg position by keyword

**To create:**

1. Go to **Explore** → **Blank**
2. Add filter: Source/medium contains "organic"
3. Create visualizations:
   - **Line chart:** Organic users over time
   - **Table:** Top organic landing pages
   - **Scorecard:** Total organic users, growth %
4. Link Search Console data (see Search Console section)
5. Save as **"SEO Performance Dashboard"**

---

## Google Search Console Setup

### Step 1: Verify Property Ownership

**Method 1: DNS Verification (Recommended)**

1. Go to search.google.com/search-console
2. Click **Add Property**
3. Select **Domain** property type
4. Enter: `brandora.com`
5. Copy the TXT record provided
6. Add to your domain DNS settings:
   - **Type:** TXT
   - **Name:** @
   - **Value:** [Paste verification code]
   - **TTL:** 3600
7. Wait 24-48 hours for DNS propagation
8. Click **Verify** in Search Console

**Method 2: HTML Tag (Faster)**

1. Go to search.google.com/search-console
2. Click **Add Property**
3. Select **URL prefix** property type
4. Enter: `https://brandora.com`
5. Choose **HTML tag** verification method
6. Copy the meta tag:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXX" />
   ```
7. Add to `<head>` section of your homepage
8. Click **Verify**

**Method 3: Google Analytics (If GA4 Already Installed)**

1. In Search Console setup, choose **Google Analytics** method
2. Ensure you're logged in with same Google account used for GA4
3. Click **Verify**

### Step 2: Submit Sitemap

**Generate XML Sitemap:**

Your sitemap should list all blog posts. Example structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://brandora.com/blog/fundamentals/what-is-brand-strategy/</loc>
    <lastmod>2025-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brandora.com/blog/fundamentals/why-logo-isnt-branding/</loc>
    <lastmod>2025-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add all 60 posts -->
</urlset>
```

**Submit to Search Console:**

1. In Search Console, select your property
2. Go to **Sitemaps** (left sidebar)
3. Enter sitemap URL: `https://brandora.com/sitemap.xml`
4. Click **Submit**
5. Check back in 24-48 hours to see indexing status

**Create Sitemap Index (If You Have Multiple Sitemaps):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://brandora.com/sitemap-blog.xml</loc>
    <lastmod>2025-11-16</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brandora.com/sitemap-pages.xml</loc>
    <lastmod>2025-11-16</lastmod>
  </sitemap>
</sitemapindex>
```

### Step 3: Request Indexing for Priority Posts

**For your top 10-20 most important posts:**

1. In Search Console, go to **URL Inspection** (top bar)
2. Enter full URL of post: `https://brandora.com/blog/[post-slug]/`
3. Click **Test live URL**
4. If crawlable, click **Request indexing**
5. Repeat for priority posts

**Priority posts to index first:**

1. What Is Brand Strategy
2. How to Position Your Brand
3. Brand Strategy Mistakes
4. Brand Positioning Examples
5. SaaS Rebrand Case Study
6. Freelancer Positioning Transformation
7. How to Brand Your Agency
8. Brand Messaging Framework
9. Brand Differentiation Strategies
10. DIY Brand Strategy

### Step 4: Set Up Enhanced Reports

**Enable All Features:**

1. Go to **Settings** (left sidebar)
2. Ensure these are enabled:
   - ✓ Search results
   - ✓ Discover
   - ✓ Google News (if applicable)
   - ✓ Web Stories (if you create them)

**Configure Users:**

1. Go to **Settings** → **Users and permissions**
2. Add team members with appropriate access:
   - **Owner:** Full access
   - **Full user:** View all data, request indexing
   - **Restricted user:** View only

### Step 5: Link Search Console to GA4

**Why link them:**
- See Search Console data in GA4 reports
- Combine organic performance with conversion data
- Understand which keywords drive conversions

**How to link:**

1. In GA4, go to **Admin**
2. Under **Product Links**, click **Search Console Links**
3. Click **Link**
4. Choose your Search Console property
5. Select which data streams to link
6. Click **Submit**

**Verify link:**

1. In GA4, go to **Reports** → **Acquisition** → **Traffic acquisition**
2. Add secondary dimension: **Session source/medium**
3. Filter to **google / organic**
4. You should now see Search Console metrics

---

## Performance Monitoring

### Daily Checks (5 minutes)

**GA4 Realtime Report:**
- Go to **Reports** → **Realtime**
- Check:
  - Current active users
  - Top active pages
  - Event count (are custom events firing?)

**Search Console Overview:**
- Go to **Overview**
- Check for:
  - Coverage errors (should be 0)
  - Indexing issues
  - Manual actions (should be none)

### Weekly Checks (15 minutes)

**GA4 Analysis:**

1. Go to **Reports** → **Engagement** → **Pages and screens**
2. Set date range: Last 7 days
3. Check:
   - Top 10 pages by views
   - Which posts are trending up?
   - Average engagement time
   - Are new posts getting traffic?

4. Go to **Reports** → **Acquisition** → **Traffic acquisition**
5. Check:
   - Organic traffic trend
   - Top traffic sources
   - Any sudden drops or spikes?

6. Go to **Events**
7. Check conversion event counts:
   - Newsletter signups this week
   - Product signups this week
   - CTA clicks

**Search Console Analysis:**

1. Go to **Performance**
2. Set date range: Last 7 days, compare to previous period
3. Check:
   - Total clicks (up or down?)
   - Total impressions (up or down?)
   - Average CTR (above 2%?)
   - Average position (improving?)

4. Click **Pages** tab
5. Sort by **Clicks**
6. Identify:
   - Which posts are getting search traffic
   - Which posts have impressions but low CTR (optimize title/meta)

7. Click **Queries** tab
8. Check:
   - Top search queries
   - New keywords appearing
   - Ranking position for target keywords

### Monthly Deep Dive (60 minutes)

**GA4 Monthly Report:**

1. **Traffic Analysis:**
   - Total users vs. last month
   - Total pageviews vs. last month
   - Organic traffic growth %
   - Top 10 posts by traffic
   - Traffic by source (organic, direct, referral, social)

2. **Engagement Analysis:**
   - Average session duration
   - Pages per session
   - Scroll depth metrics (% of users scrolling to 75%+)
   - Time on page by post
   - Internal link click-through rates

3. **Conversion Analysis:**
   - Total newsletter signups
   - Total product signups
   - Conversion rate by landing page
   - Top converting posts
   - Conversion funnel drop-off points

4. **Pillar Performance:**
   - Pageviews by pillar
   - Conversions by pillar
   - Engagement by pillar
   - Identify underperforming pillars

**Search Console Monthly Report:**

1. **Ranking Progress:**
   - Keywords in top 3 positions (count)
   - Keywords in top 10 positions (count)
   - Keywords in top 20 positions (count)
   - Keywords with biggest position gains
   - Keywords with position losses (investigate why)

2. **Content Performance:**
   - Posts with highest impressions
   - Posts with highest clicks
   - Posts with best CTR
   - Posts with impressions but low CTR (needs optimization)

3. **Index Coverage:**
   - Total indexed pages (should equal total published posts)
   - Pages with errors
   - Pages with warnings
   - Excluded pages (investigate why)

4. **Mobile Usability:**
   - Mobile usability errors (should be 0)
   - Core Web Vitals status
   - Page experience signals

**Create Monthly Summary:**

Export data to spreadsheet with:
- Month-over-month comparisons
- Top performers
- Areas for improvement
- Action items for next month

### Quarterly Review (2-3 hours)

**Comprehensive Analysis:**

1. **Traffic Trends:**
   - 3-month traffic pattern
   - Seasonal variations
   - Growth rate sustainability
   - Traffic source diversification

2. **Content Audit:**
   - Posts with declining traffic (need refresh)
   - Posts with consistent growth (learn from)
   - Posts not indexed (fix technical issues)
   - Posts not ranking (improve SEO)

3. **Conversion Optimization:**
   - Which post types convert best?
   - Which CTAs work best?
   - Where do visitors drop off?
   - A/B test results

4. **SEO Progress:**
   - Keyword ranking improvements
   - Backlink growth
   - Domain authority changes
   - Competitor comparison

5. **Goal Achievement:**
   - Are we hitting traffic goals?
   - Are we hitting conversion goals?
   - Are we hitting revenue goals?
   - Adjust strategy as needed

### Alerts and Notifications

**Set Up Alerts in Search Console:**

1. Go to **Settings** → **Users and permissions** → **Your email**
2. Enable notifications for:
   - ✓ Search Console message (critical issues)
   - ✓ Manual actions
   - ✓ Index coverage issues
   - ✓ Mobile usability issues

**Set Up Custom Alerts in GA4:**

1. Go to **Admin** → **Custom Insights**
2. Create alert for traffic drop:
   - **Condition:** Daily users decrease by 25%+ vs. previous day
   - **Action:** Email notification

3. Create alert for conversion spike:
   - **Condition:** Conversions increase by 50%+ vs. previous day
   - **Action:** Email notification (good news!)

4. Create alert for zero conversions:
   - **Condition:** Zero conversion events in past 24 hours
   - **Action:** Email notification (tracking might be broken)

---

## Reporting & Analysis

### Weekly Email Report Template

```
Subject: Brandora Blog - Week of [Date]

**Traffic:**
• Total users: [X] ([+/- %] vs last week)
• Total pageviews: [X] ([+/- %] vs last week)
• Organic traffic: [X] ([+/- %] vs last week)

**Top 5 Posts:**
1. [Post Title] - [X pageviews]
2. [Post Title] - [X pageviews]
3. [Post Title] - [X pageviews]
4. [Post Title] - [X pageviews]
5. [Post Title] - [X pageviews]

**Conversions:**
• Newsletter signups: [X]
• Product signups: [X]
• Top converting post: [Post Title] ([X signups])

**SEO:**
• Total clicks from search: [X] ([+/- %] vs last week)
• Keywords in top 10: [X]
• Notable keyword wins:
  - "[Keyword]" position [X] → [Y]

**This Week's Actions:**
• Published: [Post Title]
• Updated: [Post Title]
• Outreach: [X] backlink pitches sent

**Next Week:**
• Publish: [Post Title]
• Promote: [Post Title]
• Update: [Post Title]

[Link to full dashboard]
```

### Monthly Dashboard Report

**Executive Summary Dashboard:**

Create a Google Data Studio report with:

**Page 1: Overview**
- Total users (30 days, with comparison to previous period)
- Total pageviews
- Organic traffic
- Conversions (newsletter + product)
- Line charts showing 12-month trends

**Page 2: Content Performance**
- Table: Top 20 posts by pageviews
- Table: Top 10 posts by conversions
- Bar chart: Pageviews by pillar
- Bar chart: Conversions by pillar

**Page 3: SEO Performance**
- Total organic clicks (Search Console)
- Total impressions
- Average CTR
- Average position
- Line chart: Organic traffic 12-month trend
- Table: Top 20 keywords by clicks
- Table: Biggest ranking improvements

**Page 4: Conversion Funnel**
- Funnel visualization: Pageview → Engagement → Conversion
- Conversion rate by landing page
- Conversion rate by source/medium
- Conversion rate by device

**Page 5: Goals Progress**
- YTD traffic vs. goal
- YTD conversions vs. goal
- Monthly trend toward annual goals

### Key Metrics to Track

**Traffic Metrics:**
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Monthly unique visitors | 50,000 by month 12 | Audience growth |
| Organic traffic % | 60%+ | SEO effectiveness |
| Pages per session | 2.5+ | Content interconnection |
| Avg session duration | 3:00+ | Content engagement |

**SEO Metrics:**
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Keywords in top 10 | 30 by month 6 | Visibility |
| Total ranking keywords | 500 by month 12 | Content breadth |
| Domain authority | 40+ by month 12 | Link equity |
| Total backlinks | 50+ by month 12 | Authority building |

**Engagement Metrics:**
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Scroll depth (75%+) | 40%+ readers | Content quality |
| Internal link CTR | 15%+ | Content discovery |
| Return visitor % | 30%+ | Audience loyalty |
| Avg time on page | 4:00+ | Deep engagement |

**Conversion Metrics:**
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Newsletter signup rate | 3%+ | Lead generation |
| Product signup rate | 0.5%+ | Revenue impact |
| Blog-attributed revenue | $50K+ by month 12 | ROI proof |

### Interpretation Guide

**When traffic drops:**
1. Check for technical issues (site down?)
2. Check Search Console for indexing issues
3. Review Google algorithm updates
4. Compare to seasonal patterns
5. Check traffic sources—which declined?

**When conversions drop:**
1. Verify tracking is still working
2. Check if CTA buttons are visible
3. Review landing page changes
4. Test form functionality
5. Compare conversion rate by source

**When rankings drop:**
1. Check for manual actions in Search Console
2. Review competitor content—did they improve?
3. Check for technical SEO issues
4. Review backlink profile—lost any key links?
5. Audit content—is it still current?

**When engagement drops:**
1. Review recent content—lower quality?
2. Check site speed—slower load times?
3. Review mobile experience
4. Check for intrusive ads/pop-ups
5. Analyze bounce rate by landing page

---

## Troubleshooting Common Issues

### Issue 1: GA4 Not Tracking

**Symptoms:**
- No data in Realtime report
- Zero pageviews

**Fixes:**
1. Check tracking code is installed on all pages
2. Verify Measurement ID is correct
3. Disable ad blockers
4. Check browser console for errors
5. Use Google Tag Assistant extension
6. Verify domain settings (correct property?)

### Issue 2: Custom Events Not Firing

**Symptoms:**
- Events don't appear in **Admin** → **Events**
- Event counts are zero

**Fixes:**
1. Wait 24 hours—events take time to appear
2. Check JavaScript console for errors
3. Verify event code is on the page
4. Test event manually (trigger the action)
5. Use GA4 DebugView to see real-time events
6. Check GTM if using—is tag firing?

### Issue 3: Search Console Not Indexing

**Symptoms:**
- Posts published but not in index
- "Discovered - currently not indexed"

**Fixes:**
1. Check robots.txt—is /blog/ blocked?
2. Check for noindex meta tags
3. Improve content quality (thin content won't index)
4. Build backlinks to post
5. Submit sitemap
6. Request indexing manually
7. Wait—can take 2-4 weeks for new sites

### Issue 4: Conversion Tracking Incorrect

**Symptoms:**
- Conversion counts don't match expected
- Conversions attributed to wrong source

**Fixes:**
1. Verify event code fires before redirect
2. Check event parameters are correct
3. Ensure transaction_id is unique
4. Review attribution model settings
5. Check for form submission delays
6. Verify conversion is marked in GA4

### Issue 5: Backlink Data Missing

**Symptoms:**
- Search Console shows "No data"
- Links disappear from report

**Fixes:**
1. Wait—link data lags by 2-3 days
2. Check if links are nofollow (won't appear)
3. Verify domain is verified in Search Console
4. Check if linking sites are indexed by Google
5. Use third-party tools (Ahrefs) for comprehensive view

---

## Next Steps After Setup

### Week 1:
- ✓ Verify all tracking is working
- ✓ Test custom events manually
- ✓ Set up conversion tracking
- ✓ Create initial dashboard
- ✓ Establish baseline metrics

### Week 2-4:
- ✓ Monitor daily for issues
- ✓ Fine-tune event tracking
- ✓ Set up automated reports
- ✓ Create alert rules
- ✓ Document processes

### Month 2+:
- ✓ Analyze performance trends
- ✓ Optimize underperforming content
- ✓ Scale successful content types
- ✓ Refine conversion funnel
- ✓ Iterate based on data

### Ongoing:
- Weekly: Review dashboard, spot issues
- Monthly: Deep analysis, strategic adjustments
- Quarterly: Comprehensive audit, goal review
- Annually: Full strategy review, set new targets

---

## Resources & Tools

### Free Tools:
- **Google Analytics 4:** analytics.google.com
- **Google Search Console:** search.google.com/search-console
- **Google Tag Manager:** tagmanager.google.com
- **Google Data Studio:** datastudio.google.com
- **Tag Assistant:** Chrome extension
- **Lighthouse:** Chrome DevTools

### Paid Tools (Optional):
- **Ahrefs:** Comprehensive SEO suite ($99+/month)
- **SEMrush:** Keyword research + tracking ($119+/month)
- **Moz:** Domain authority tracking ($99+/month)
- **Hotjar:** Heatmaps + recordings ($39+/month)

### Documentation:
- **GA4 Help:** support.google.com/analytics
- **Search Console Help:** support.google.com/webmasters
- **GTM Help:** support.google.com/tagmanager

---

**Last Updated:** 2025-11-16
**Setup Time:** 2-4 hours initial, 15-30 min/week ongoing
**Difficulty:** Intermediate (step-by-step instructions provided)
