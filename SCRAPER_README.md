# Landing Page Scraper - Usage Instructions

This tool scrapes and analyzes positioning language from competitor landing pages.

## Quick Start

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Run the Scraper

```bash
python scrape_landing_pages.py
```

The script will:
- Scrape all 24 landing pages (with polite 2-second delays between requests)
- Extract positioning language, headlines, CTAs, and value propositions
- Save raw data to `landing_pages_data.json`
- Generate an analysis report in `positioning_analysis.md`

## What Gets Extracted

For each landing page, the scraper captures:

- **Page Title** - Browser title tag
- **Main Headline** - Primary H1 heading
- **Meta Tags** - SEO description, Open Graph, Twitter cards
- **All Headings** - H1-H6 hierarchy (first 10 of each)
- **CTAs** - Call-to-action buttons and links
- **Value Propositions** - Key benefit statements

## Output Files

### `landing_pages_data.json`
Complete raw data from all scrapes in JSON format. Use this for:
- Programmatic analysis
- Further data processing
- Custom reporting

### `positioning_analysis.md`
Human-readable analysis organized by category:
- DIY Design Tools (Canva, Adobe, Wix)
- Logo/Brand Builders (Looka, TailorBrands, etc.)
- All-in-One Marketing (Simplified, Jasper, etc.)
- Brand Asset Management (Frontify, Brandfolder, Bynder)
- Consulting/Enterprise (Interbrand, McKinsey, etc.)
- AI-Powered Branding (Bera, Brandlight)

## Troubleshooting

### Script fails with 403 errors
Some websites block automated scraping. The script uses browser-like headers to minimize this, but some sites have advanced bot detection.

**Solutions:**
- Use a VPN or different network
- Add longer delays between requests
- Use a service like ScrapingBee or Bright Data

### Missing data for a site
Some modern sites load content via JavaScript, which this script doesn't execute.

**Solutions:**
- Use Selenium or Playwright for JavaScript rendering
- Manually visit the site and copy key content
- Use browser DevTools to inspect the actual content

### Rate limiting
If you get rate limited:
- Increase the `time.sleep()` value in the script
- Run the scraper in smaller batches
- Spread requests over a longer time period

## Customization

### Scrape Additional URLs

Edit the `URLS` list in `scrape_landing_pages.py`:

```python
URLS = [
    "https://canva.com",
    "https://your-new-url.com",  # Add here
    # ...
]
```

### Adjust Extraction Logic

Modify these functions to extract different data:
- `extract_meta_tags()` - SEO and social meta tags
- `extract_headings()` - Heading structure
- `extract_ctas()` - Call-to-action buttons
- `extract_value_props()` - Value proposition statements

### Change Output Format

The `generate_analysis_report()` function creates the markdown file. Customize it to:
- Change categorization
- Add new analysis sections
- Export to different formats (CSV, HTML, etc.)

## Next Steps After Scraping

1. **Review Patterns** - Look for common messaging themes
2. **Identify Gaps** - Find positioning opportunities
3. **Test Messaging** - Use insights to craft unique value props
4. **Competitive Analysis** - Compare your positioning against theirs

## Legal & Ethical Considerations

- ✅ Scraping public web pages for competitive research is generally legal
- ✅ This tool respects robots.txt and adds delays between requests
- ⚠️ Do not republish scraped content verbatim
- ⚠️ Use insights for analysis, not content theft
- ⚠️ Some terms of service may prohibit automated access

## Advanced: JavaScript-Heavy Sites

For sites that load content dynamically with JavaScript, use Selenium:

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless')
driver = webdriver.Chrome(options=options)

driver.get(url)
time.sleep(3)  # Wait for JS to load
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
driver.quit()
```

Install with: `pip install selenium webdriver-manager`
