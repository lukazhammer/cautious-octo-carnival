# Predictive Analytics Models

## 1. Churn Prediction Model

### Input Features
- Days since last login
- Session frequency (30d)
- Feature usage count
- NPS score
- Support ticket count
- Module completion rate
- Health score trend

### Model Type
Random Forest Classifier

### Output
- Churn probability (0-1)
- Risk level: Low (<20%), Medium (20-50%), High (>50%)

### Training Code
```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Features
X = df[['days_since_last_login', 'session_frequency', 'feature_usage', 
        'nps_score', 'support_tickets', 'completion_rate', 'health_score_trend']]
# Target (churned in next 30 days)
y = df['churned']

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Predict
churn_prob = model.predict_proba(X_test)[:, 1]
```

## 2. LTV Prediction

Predict customer lifetime value based on early behavior.

## 3. Upgrade Propensity

Score likelihood of free→paid or tier upgrade.

## 4. Feature Adoption Likelihood

Predict which features a user is likely to adopt next.
