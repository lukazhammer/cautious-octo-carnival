#!/usr/bin/env python3
"""
Landing Page Scraper and Positioning Analysis Tool

This script scrapes landing pages and extracts positioning language,
value propositions, and key messaging elements.
"""

import requests
from bs4 import BeautifulSoup
import json
import time
from typing import Dict, List, Optional
from urllib.parse import urlparse
import re

# List of URLs to scrape
URLS = [
    "https://canva.com",
    "https://adobe.com/express",
    "https://looka.com",
    "https://tailorbrands.com",
    "https://wix.com",
    "https://brandcrowd.com",
    "https://simplified.com",
    "https://frontify.com",
    "https://brandfolder.com",
    "https://bynder.com",
    "https://jasper.ai",
    "https://storychief.io",
    "https://semrush.com",
    "https://interbrand.com",
    "https://prophet.com",
    "https://landor.com",
    "https://siegelgale.com",
    "https://futurebrand.com",
    "https://accenture.com/us-en/services/creative",
    "https://deloittedigital.com",
    "https://mckinsey.com/our-practices/marketing-sales",
    "https://bera.ai",
    "https://sat.brandlight.ai",
    "https://ubrand.com",
]

def get_headers() -> Dict[str, str]:
    """Return headers that mimic a real browser."""
    return {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'max-age=0',
    }

def clean_text(text: str) -> str:
    """Clean and normalize text."""
    if not text:
        return ""
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_meta_tags(soup: BeautifulSoup) -> Dict[str, str]:
    """Extract meta tags for SEO and social media."""
    meta_data = {}

    # Standard meta tags
    description = soup.find('meta', attrs={'name': 'description'})
    if description:
        meta_data['meta_description'] = description.get('content', '')

    # Open Graph tags
    og_title = soup.find('meta', property='og:title')
    og_description = soup.find('meta', property='og:description')

    if og_title:
        meta_data['og_title'] = og_title.get('content', '')
    if og_description:
        meta_data['og_description'] = og_description.get('content', '')

    # Twitter tags
    twitter_title = soup.find('meta', attrs={'name': 'twitter:title'})
    twitter_description = soup.find('meta', attrs={'name': 'twitter:description'})

    if twitter_title:
        meta_data['twitter_title'] = twitter_title.get('content', '')
    if twitter_description:
        meta_data['twitter_description'] = twitter_description.get('content', '')

    return meta_data

def extract_headings(soup: BeautifulSoup) -> Dict[str, List[str]]:
    """Extract all heading tags."""
    headings = {}

    for level in range(1, 7):
        tag = f'h{level}'
        found = soup.find_all(tag)
        if found:
            headings[tag] = [clean_text(h.get_text()) for h in found[:10]]  # Limit to first 10

    return headings

def extract_ctas(soup: BeautifulSoup) -> List[str]:
    """Extract call-to-action buttons and links."""
    ctas = []

    # Look for buttons
    buttons = soup.find_all(['button', 'a'], class_=re.compile(r'btn|button|cta', re.I))
    for btn in buttons[:15]:  # Limit to first 15
        text = clean_text(btn.get_text())
        if text and len(text) < 100:  # Reasonable length for CTA
            ctas.append(text)

    return list(set(ctas))  # Remove duplicates

def extract_value_props(soup: BeautifulSoup) -> List[str]:
    """Try to identify value proposition statements."""
    value_props = []

    # Look for common value prop containers
    selectors = [
        {'class': re.compile(r'hero|value|benefit|feature', re.I)},
        {'id': re.compile(r'hero|value|benefit', re.I)},
    ]

    for selector in selectors:
        elements = soup.find_all(['div', 'section', 'p'], **selector)
        for elem in elements[:5]:
            text = clean_text(elem.get_text())
            # Filter for reasonable length (likely to be value props)
            if 20 < len(text) < 300:
                value_props.append(text)

    return value_props[:10]  # Limit results

def scrape_landing_page(url: str) -> Dict:
    """Scrape a landing page and extract positioning information."""
    print(f"Scraping {url}...")

    result = {
        'url': url,
        'domain': urlparse(url).netloc,
        'success': False,
        'error': None,
    }

    try:
        response = requests.get(url, headers=get_headers(), timeout=15)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')

        # Extract title
        title_tag = soup.find('title')
        result['title'] = clean_text(title_tag.get_text()) if title_tag else ''

        # Extract meta tags
        result['meta_tags'] = extract_meta_tags(soup)

        # Extract headings
        result['headings'] = extract_headings(soup)

        # Extract CTAs
        result['ctas'] = extract_ctas(soup)

        # Extract potential value propositions
        result['value_propositions'] = extract_value_props(soup)

        # Get main headline (usually H1)
        h1s = soup.find_all('h1')
        if h1s:
            result['main_headline'] = clean_text(h1s[0].get_text())

        result['success'] = True
        print(f"✓ Successfully scraped {url}")

    except requests.exceptions.RequestException as e:
        result['error'] = str(e)
        print(f"✗ Failed to scrape {url}: {e}")
    except Exception as e:
        result['error'] = f"Parsing error: {str(e)}"
        print(f"✗ Error parsing {url}: {e}")

    return result

def main():
    """Main execution function."""
    print("=" * 60)
    print("Landing Page Scraper - Positioning Analysis")
    print("=" * 60)
    print(f"\nScraping {len(URLS)} landing pages...\n")

    results = []

    for i, url in enumerate(URLS, 1):
        print(f"[{i}/{len(URLS)}] ", end='')
        result = scrape_landing_page(url)
        results.append(result)

        # Be respectful - add delay between requests
        if i < len(URLS):
            time.sleep(2)

    # Save results to JSON
    output_file = 'landing_pages_data.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    # Print summary
    print("\n" + "=" * 60)
    print("SCRAPING SUMMARY")
    print("=" * 60)
    successful = sum(1 for r in results if r['success'])
    failed = len(results) - successful
    print(f"✓ Successful: {successful}")
    print(f"✗ Failed: {failed}")
    print(f"\nResults saved to: {output_file}")

    # Generate analysis report
    generate_analysis_report(results)

    return results

def generate_analysis_report(results: List[Dict]):
    """Generate a markdown analysis report."""
    report_file = 'positioning_analysis.md'

    with open(report_file, 'w', encoding='utf-8') as f:
        f.write("# Landing Page Positioning Analysis\n\n")
        f.write(f"Analysis of {len(results)} brand and design tool landing pages\n\n")
        f.write("---\n\n")

        # Categorize companies
        categories = {
            'DIY Design Tools': ['canva.com', 'adobe.com', 'wix.com'],
            'Logo/Brand Builders': ['looka.com', 'tailorbrands.com', 'brandcrowd.com', 'ubrand.com'],
            'All-in-One Marketing': ['simplified.com', 'jasper.ai', 'storychief.io', 'semrush.com'],
            'Brand Asset Management': ['frontify.com', 'brandfolder.com', 'bynder.com'],
            'Consulting/Enterprise': ['interbrand.com', 'prophet.com', 'landor.com', 'siegelgale.com',
                                     'futurebrand.com', 'accenture.com', 'deloittedigital.com', 'mckinsey.com'],
            'AI-Powered Branding': ['bera.ai', 'sat.brandlight.ai']
        }

        for category, domains in categories.items():
            f.write(f"## {category}\n\n")

            for result in results:
                if any(domain in result['domain'] for domain in domains):
                    if result['success']:
                        f.write(f"### {result['domain']}\n\n")
                        f.write(f"**URL:** {result['url']}\n\n")

                        if result.get('title'):
                            f.write(f"**Title:** {result['title']}\n\n")

                        if result.get('main_headline'):
                            f.write(f"**Main Headline:** {result['main_headline']}\n\n")

                        meta = result.get('meta_tags', {})
                        if meta.get('meta_description'):
                            f.write(f"**Meta Description:** {meta['meta_description']}\n\n")

                        if result.get('ctas'):
                            f.write(f"**Key CTAs:**\n")
                            for cta in result['ctas'][:5]:
                                f.write(f"- {cta}\n")
                            f.write("\n")

                        if result.get('value_propositions'):
                            f.write(f"**Value Propositions:**\n")
                            for vp in result['value_propositions'][:3]:
                                f.write(f"- {vp}\n")
                            f.write("\n")

                        f.write("---\n\n")
                    else:
                        f.write(f"### {result['domain']} ❌\n\n")
                        f.write(f"Failed to scrape: {result.get('error', 'Unknown error')}\n\n")
                        f.write("---\n\n")

        # Add insights section
        f.write("\n## Key Insights & Patterns\n\n")
        f.write("### Common Positioning Patterns:\n\n")

        # Analyze successful scrapes
        successful_results = [r for r in results if r['success']]

        # Count common words in headlines
        all_headlines = []
        for r in successful_results:
            if r.get('main_headline'):
                all_headlines.append(r['main_headline'].lower())

        f.write(f"- Successfully analyzed {len(successful_results)} pages\n")
        f.write(f"- Failed to access {len(results) - len(successful_results)} pages\n\n")

        f.write("### Next Steps:\n\n")
        f.write("1. Review the detailed positioning language for each competitor\n")
        f.write("2. Identify gaps and opportunities in the market\n")
        f.write("3. Develop unique value propositions that differentiate from competitors\n")
        f.write("4. Test messaging variations based on successful patterns\n\n")

    print(f"Analysis report saved to: {report_file}")

if __name__ == "__main__":
    main()
