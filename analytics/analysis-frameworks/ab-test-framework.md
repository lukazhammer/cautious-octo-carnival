# A/B Test Framework

## Test Design Template

### 1. Hypothesis
**Format:** "If we [CHANGE], then [METRIC] will [IMPROVE] because [REASON]"

**Example:** "If we change the CTA button from 'Start Free' to 'Build Your Brand', then signup conversion will increase by 10% because it better communicates value."

### 2. Success Metrics

**Primary Metric:** The main metric to measure success
**Secondary Metrics:** Supporting metrics
**Guardrail Metrics:** Metrics that should NOT decrease

### 3. Sample Size Calculation

```python
from scipy.stats import norm
import numpy as np

def calculate_sample_size(baseline_rate, mde, alpha=0.05, power=0.80):
    """
    Calculate required sample size per variant
    
    Args:
        baseline_rate: Current conversion rate (e.g., 0.05 for 5%)
        mde: Minimum detectable effect (e.g., 0.10 for 10% relative improvement)
        alpha: Significance level (default 0.05 for 95% confidence)
        power: Statistical power (default 0.80 for 80%)
    """
    # Z-scores
    z_alpha = norm.ppf(1 - alpha/2)
    z_beta = norm.ppf(power)
    
    # Expected variant rate
    variant_rate = baseline_rate * (1 + mde)
    
    # Pooled standard deviation
    p_avg = (baseline_rate + variant_rate) / 2
    
    # Sample size per variant
    n = ((z_alpha + z_beta)**2 * 2 * p_avg * (1 - p_avg)) / ((variant_rate - baseline_rate)**2)
    
    return int(np.ceil(n))

# Example
baseline = 0.05  # 5% conversion
mde = 0.20  # 20% improvement (to 6%)
sample_size = calculate_sample_size(baseline, mde)
print(f"Required sample size per variant: {sample_size}")
```

### 4. Statistical Significance Test

```python
from scipy.stats import chi2_contingency

def ab_test_significance(control_conversions, control_total, variant_conversions, variant_total):
    """
    Test statistical significance of A/B test
    
    Returns p-value and whether result is significant
    """
    # Create contingency table
    obs = np.array([
        [control_conversions, control_total - control_conversions],
        [variant_conversions, variant_total - variant_conversions]
    ])
    
    # Chi-square test
    chi2, p_value, dof, expected = chi2_contingency(obs)
    
    # Calculate conversion rates
    control_rate = control_conversions / control_total
    variant_rate = variant_conversions / variant_total
    lift = (variant_rate - control_rate) / control_rate
    
    return {
        'control_rate': control_rate,
        'variant_rate': variant_rate,
        'lift': lift,
        'p_value': p_value,
        'significant': p_value < 0.05
    }

# Example
result = ab_test_significance(
    control_conversions=50,
    control_total=1000,
    variant_conversions=65,
    variant_total=1000
)
print(result)
```

## Test Ideas Library (50 tests)

### Signup Optimization
1. CTA button text variation
2. Social proof placement
3. Signup form length
4. Value proposition headline

### Pricing Page
5. Tier positioning
6. Annual vs monthly prominence
7. Feature comparison layout
8. Money-back guarantee badge

### Onboarding
9. Steps count (7 vs 4)
10. Skip option availability
11. Progress bar style
12. Welcome video

[... 38 more test ideas]

