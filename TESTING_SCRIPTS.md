# Brandora Test Scripts & Expected Results

This document provides detailed, step-by-step test scripts with expected results for all critical user flows. Each script includes preconditions, test data, step-by-step actions, and expected outcomes.

---

## Table of Contents
1. [Authentication Flow Scripts](#1-authentication-flow-scripts)
2. [Payment Flow Scripts](#2-payment-flow-scripts)
3. [Assessment Flow Scripts](#3-assessment-flow-scripts)
4. [Module Access & Progress Scripts](#4-module-access--progress-scripts)
5. [Auto-Save Scripts](#5-auto-save-scripts)
6. [Export Scripts](#6-export-scripts)
7. [Tier Upgrade Scripts](#7-tier-upgrade-scripts)
8. [Email Verification Scripts](#8-email-verification-scripts)

---

## 1. Authentication Flow Scripts

### Script 1.1: New User Signup - Happy Path

**Test ID:** AUTH-SCRIPT-001
**Priority:** Critical
**Estimated Time:** 5 minutes

**Preconditions:**
- Browser: Chrome (latest version)
- Test email not already registered: `test.signup.001@brandora.test`
- Email inbox accessible

**Test Data:**
```
Email: test.signup.001@brandora.test
Password: BrandTest2024!
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to https://brandora.com | Homepage loads in < 3 seconds<br>Hero section visible<br>"Start Free Assessment" CTA present | | ☐ |
| 2 | Click "Start Free Assessment" button | Redirects to /auth/signup<br>Signup form displayed<br>Email and password fields visible | | ☐ |
| 3 | Enter email: test.signup.001@brandora.test | Email field accepts input<br>No validation errors | | ☐ |
| 4 | Enter password: BrandTest2024! | Password field masked (••••)<br>Strength indicator shows "Strong" | | ☐ |
| 5 | Enter confirm password: BrandTest2024! | Confirm field accepts input<br>Checkmark appears (passwords match) | | ☐ |
| 6 | Check "I agree to Terms & Privacy Policy" checkbox | Checkbox checked<br>Submit button enabled | | ☐ |
| 7 | Click "Create Account" button | Loading spinner appears<br>Within 2 seconds: redirect to email confirmation page | | ☐ |
| 8 | Verify confirmation page | Page shows: "Check your email"<br>Email address displayed: test.signup.001@brandora.test<br>"Resend confirmation" link visible | | ☐ |
| 9 | Check email inbox | Welcome email received within 1 minute<br>From: noreply@brandora.com<br>Subject: "Welcome to Brandora 🎉" | | ☐ |
| 10 | Open welcome email | Email renders correctly<br>Contains "Confirm Your Email" button<br>Personalized with email address | | ☐ |
| 11 | Click "Confirm Your Email" button in email | Redirects to brandora.com<br>Success message: "Email confirmed!"<br>Auto-redirect to /assessment page | | ☐ |
| 12 | Verify assessment page loaded | Assessment introduction visible<br>"Start Assessment" button present<br>User logged in (check nav bar for account menu) | | ☐ |

**Expected Final State:**
- User account created in database
- User status: `email_confirmed = true`
- User tier: `Clarity Starter` (Free)
- User redirected to assessment
- Session cookie set (logged in)

**Pass Criteria:** All 12 steps pass without errors

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

**Notes:**
```
[Any issues or observations]
```

---

### Script 1.2: Login - Existing User

**Test ID:** AUTH-SCRIPT-002
**Priority:** Critical
**Estimated Time:** 3 minutes

**Preconditions:**
- User account exists: `test.login.001@brandora.test` (password: `BrandTest2024!`)
- Email confirmed
- User has completed assessment and 2 modules

**Test Data:**
```
Email: test.login.001@brandora.test
Password: BrandTest2024!
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to https://brandora.com/auth/login | Login page loads<br>Email and password fields visible<br>"Forgot password?" link present | | ☐ |
| 2 | Enter email: test.login.001@brandora.test | Email field accepts input | | ☐ |
| 3 | Enter password: BrandTest2024! | Password field masked | | ☐ |
| 4 | Check "Remember me" checkbox | Checkbox checked | | ☐ |
| 5 | Click "Log In" button | Loading spinner appears<br>Within 1 second: redirect to /dashboard | | ☐ |
| 6 | Verify dashboard loads | Dashboard shows:<br>- Welcome message with user email<br>- Progress: 2 of 4 modules complete (50%)<br>- Next recommended module<br>- Tier badge: "Clarity Starter" | | ☐ |
| 7 | Check browser cookies (DevTools > Application > Cookies) | Session cookie present<br>Cookie name: `auth-token` or similar<br>Expiry: 30 days from now (due to "Remember me") | | ☐ |
| 8 | Navigate to /modules/1 | Module 1 loads<br>Previously saved content visible<br>Can edit content | | ☐ |
| 9 | Close browser completely | Browser closed | | ☐ |
| 10 | Reopen browser and navigate to https://brandora.com/dashboard | Still logged in (no login prompt)<br>Dashboard loads immediately<br>Session persisted due to "Remember me" | | ☐ |

**Expected Final State:**
- User logged in
- Dashboard showing correct progress
- Session persists across browser close

**Pass Criteria:** All 10 steps pass

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

### Script 1.3: Login - Invalid Credentials

**Test ID:** AUTH-SCRIPT-003
**Priority:** High
**Estimated Time:** 2 minutes

**Preconditions:**
- None (testing error handling)

**Test Data:**
```
Valid email: test.login.001@brandora.test
Wrong password: WrongPassword123!
Invalid email: nonexistent@brandora.test
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /auth/login | Login page loads | | ☐ |
| 2 | Enter email: test.login.001@brandora.test<br>Enter password: WrongPassword123! | Fields accept input | | ☐ |
| 3 | Click "Log In" | Error message appears:<br>"Invalid email or password"<br>User remains on login page<br>Fields NOT cleared (email persists) | | ☐ |
| 4 | Clear fields<br>Enter email: nonexistent@brandora.test<br>Enter password: BrandTest2024! | Fields accept input | | ☐ |
| 5 | Click "Log In" | Same error message:<br>"Invalid email or password"<br>(No information disclosure about which is wrong) | | ☐ |
| 6 | Repeat wrong password 4 more times (total 6 attempts) | After 5th attempt:<br>Rate limiting kicks in<br>Error: "Too many login attempts. Please try again in 15 minutes."<br>Login button disabled for 15 min | | ☐ |

**Expected Final State:**
- User NOT logged in
- No session created
- Rate limiting active after 5 failed attempts

**Pass Criteria:** Error messages are clear and don't leak information; rate limiting works

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

### Script 1.4: Password Reset Flow

**Test ID:** AUTH-SCRIPT-004
**Priority:** High
**Estimated Time:** 5 minutes

**Preconditions:**
- User account exists: `test.reset.001@brandora.test`
- Email inbox accessible

**Test Data:**
```
Email: test.reset.001@brandora.test
New password: NewBrandPass2024!
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /auth/login | Login page loads | | ☐ |
| 2 | Click "Forgot password?" link | Redirects to /auth/reset-password<br>Email input field shown | | ☐ |
| 3 | Enter email: test.reset.001@brandora.test | Email field accepts input | | ☐ |
| 4 | Click "Send Reset Link" | Success message: "Check your email for reset link"<br>(Shows success even if email doesn't exist - security) | | ☐ |
| 5 | Check email inbox | Password reset email received within 2 minutes<br>Subject: "Reset your Brandora password" | | ☐ |
| 6 | Click "Reset Password" link in email | Redirects to /auth/reset-password/[token]<br>New password form shown<br>Token in URL | | ☐ |
| 7 | Enter new password: NewBrandPass2024! | Password field accepts input<br>Strength indicator shows "Strong" | | ☐ |
| 8 | Enter confirm password: NewBrandPass2024! | Confirm field accepts input<br>Match indicator appears | | ☐ |
| 9 | Click "Reset Password" | Success message: "Password reset successfully"<br>Redirect to /auth/login | | ☐ |
| 10 | Login with OLD password | Error: "Invalid email or password"<br>Login fails | | ☐ |
| 11 | Login with NEW password: NewBrandPass2024! | Login succeeds<br>Redirects to /dashboard | | ☐ |

**Expected Final State:**
- Password changed in database
- Old password no longer works
- New password works
- Reset token invalidated after use

**Pass Criteria:** All steps pass; password successfully reset

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

## 2. Payment Flow Scripts

### Script 2.1: Purchase Market Fit Pro - Successful Payment

**Test ID:** PAY-SCRIPT-001
**Priority:** Critical
**Estimated Time:** 5 minutes

**Preconditions:**
- User logged in as free tier: `test.payment.001@brandora.test`
- User has completed assessment
- Stripe in test mode

**Test Data:**
```
Tier: Market Fit Pro
Price: $147
Card: 4242 4242 4242 4242 (Stripe test card - success)
Expiry: 12/25
CVC: 123
ZIP: 94102
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /dashboard | Dashboard loads<br>Current tier: "Clarity Starter"<br>"Upgrade to Market Fit Pro" CTA visible | | ☐ |
| 2 | Click "Upgrade to Market Fit Pro" button | Redirects to /pricing or Stripe Checkout<br>Pricing shown: $147<br>"Market Fit Pro" tier highlighted | | ☐ |
| 3 | Click "Choose Market Fit Pro - $147" | Stripe Checkout modal opens<br>Amount shown: $147.00<br>Email pre-filled: test.payment.001@brandora.test | | ☐ |
| 4 | Enter card details:<br>Card: 4242 4242 4242 4242<br>Expiry: 12/25<br>CVC: 123<br>ZIP: 94102 | Card details accepted<br>Stripe validates fields (green checkmarks) | | ☐ |
| 5 | Click "Pay $147" | Loading spinner appears<br>Payment processes (2-3 seconds) | | ☐ |
| 6 | Wait for redirect | Redirects to /dashboard or /payment/success<br>Success message: "Welcome to Market Fit Pro!"<br>Confetti animation (optional) | | ☐ |
| 7 | Verify dashboard updates | Tier badge: "Market Fit Pro"<br>Modules 5-8 now unlocked (no lock icon)<br>Progress shows: 0 of 8 modules (if none completed) | | ☐ |
| 8 | Navigate to /modules/5 (previously locked) | Module 5 loads successfully<br>Can edit and save content<br>No "Upgrade to unlock" message | | ☐ |
| 9 | Check email inbox | Payment confirmation email received within 5 minutes<br>Subject: "Payment Confirmed - Market Fit Pro"<br>Receipt with $147 charge | | ☐ |
| 10 | Verify Stripe Dashboard (manual check) | Payment Intent status: `succeeded`<br>Amount: $14700 (cents)<br>Customer email: test.payment.001@brandora.test<br>Metadata: tier = "Market Fit Pro" | | ☐ |
| 11 | Check webhook logs (admin/developer) | Webhook received: `payment_intent.succeeded`<br>Webhook signature verified<br>User tier updated in database<br>HTTP 200 returned to Stripe | | ☐ |

**Expected Final State:**
- Database: `user.tier = "Market Fit Pro"`
- Database: `payment` record created with amount $147
- Stripe: Payment Intent succeeded
- User: Can access Modules 1-8

**Pass Criteria:** Payment succeeds, tier upgraded, modules unlocked, email sent

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

**Notes:**
```
Stripe Payment Intent ID: _________________
[Any issues]
```

---

### Script 2.2: Payment Declined - Card Failure

**Test ID:** PAY-SCRIPT-002
**Priority:** Critical
**Estimated Time:** 3 minutes

**Preconditions:**
- User logged in as free tier: `test.payment.002@brandora.test`
- Stripe in test mode

**Test Data:**
```
Card: 4000 0000 0000 0002 (Stripe test card - declined)
Expiry: 12/25
CVC: 123
ZIP: 94102
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /pricing<br>Click "Choose Market Fit Pro" | Stripe Checkout opens | | ☐ |
| 2 | Enter declined test card: 4000 0000 0000 0002<br>Expiry: 12/25, CVC: 123, ZIP: 94102 | Card details entered | | ☐ |
| 3 | Click "Pay $147" | Payment attempts to process<br>Stripe returns error after 2-3 seconds | | ☐ |
| 4 | Observe error message | Error shown in Stripe Checkout:<br>"Your card was declined."<br>Stays on checkout page<br>Can retry with different card | | ☐ |
| 5 | Check user tier in dashboard | Tier still: "Clarity Starter" (Free)<br>No upgrade occurred | | ☐ |
| 6 | Check Stripe Dashboard | Payment Intent status: `requires_payment_method` or `failed`<br>No charge created | | ☐ |
| 7 | Retry with valid card: 4242 4242 4242 4242 | Payment succeeds on second attempt<br>Tier upgraded | | ☐ |

**Expected Final State:**
- First payment: failed (no charge, no tier upgrade)
- Retry: succeeds (tier upgraded)
- User can retry unlimited times (no lockout)

**Pass Criteria:** Declined card handled gracefully; user can retry; error message clear

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

### Script 2.3: 3D Secure Authentication

**Test ID:** PAY-SCRIPT-003
**Priority:** High
**Estimated Time:** 4 minutes

**Preconditions:**
- User logged in as free tier: `test.payment.003@brandora.test`
- Stripe in test mode

**Test Data:**
```
Card: 4000 0027 6000 3184 (Stripe test card - requires 3D Secure)
Expiry: 12/25
CVC: 123
ZIP: 94102
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /pricing<br>Click "Choose Market Fit Pro" | Stripe Checkout opens | | ☐ |
| 2 | Enter 3DS test card: 4000 0027 6000 3184<br>Expiry: 12/25, CVC: 123, ZIP: 94102 | Card details entered | | ☐ |
| 3 | Click "Pay $147" | 3D Secure modal/iframe appears<br>Shows authentication challenge<br>"Complete" and "Fail" buttons visible (test mode) | | ☐ |
| 4 | Click "Complete" to pass authentication | Authentication succeeds<br>3DS modal closes<br>Payment processes<br>Redirects to success page | | ☐ |
| 5 | Verify tier upgraded | Tier: "Market Fit Pro"<br>Modules 5-8 unlocked<br>Payment confirmation email sent | | ☐ |

**Alternate Path (Failure):**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 3b | Click "Fail" in 3DS modal | Authentication fails<br>Error: "Authentication failed"<br>Payment NOT processed<br>User can retry | | ☐ |

**Expected Final State:**
- 3D Secure authentication required and completed
- Payment succeeds after authentication
- Tier upgraded

**Pass Criteria:** 3DS flow works; payment succeeds after auth; failure handled

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

## 3. Assessment Flow Scripts

### Script 3.1: Complete Assessment - First Time

**Test ID:** ASMT-SCRIPT-001
**Priority:** Critical
**Estimated Time:** 15 minutes

**Preconditions:**
- User logged in: `test.assessment.001@brandora.test`
- User has NOT completed assessment yet
- On assessment page: /assessment

**Test Data:** (Sample answers for medium scores)
```
Q1: Vision clarity = 5
Q2: Mission statement = 6
Q3: Core values = 5
Q4: Elevator pitch = 4
Q5: Target audience = 6
Q6: Unique value = 5
Q7: Competitors = 6
Q8: Positioning = 5
Q9: Pain points = 7
Q10: Customer goals = 6
Q11: Where they hang out = 5
Q12: Their language = 6
Q13: Purchase decision = 5
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Verify assessment introduction page | Title: "Assess Your Brand Strategy"<br>Description of 3 scoring categories<br>"Start Assessment" button | | ☐ |
| 2 | Click "Start Assessment" | Question 1 displays<br>Progress: "1 of 13" shown<br>Answer options visible (1-10 scale or multiple choice) | | ☐ |
| 3 | Answer Q1: Vision clarity = 5 | Answer selected (radio button or slider)<br>"Next" button enabled | | ☐ |
| 4 | Click "Next" | Question 2 displays<br>Progress: "2 of 13"<br>Can click "Back" to return to Q1 | | ☐ |
| 5 | Continue answering Q2-Q12 with test data | Each question accepts answer<br>Progress updates correctly<br>Can navigate back/forward | | ☐ |
| 6 | Answer Q13: Purchase decision = 5 | Last question answered<br>Progress: "13 of 13"<br>"Submit Assessment" button appears (instead of "Next") | | ☐ |
| 7 | Click "Submit Assessment" | Loading spinner appears<br>Processing message: "Calculating your results..."<br>Redirects to /assessment/results within 3 seconds | | ☐ |
| 8 | Verify results page | Page displays:<br>- **Brand Clarity:** 5.0/10 (avg of Q1-4: (5+6+5+4)/4)<br>- **Market Positioning:** 5.5/10 (avg of Q5-8: (6+5+6+5)/4)<br>- **Audience Understanding:** 5.8/10 (avg of Q9-13: (7+6+5+6+5)/5)<br>- **Overall Score:** 5.4/10 (avg of all 3) | | ☐ |
| 9 | Verify score visualizations | Gauge charts or progress bars for each category<br>Overall score prominent<br>Color-coded (red/yellow/green based on score) | | ☐ |
| 10 | Verify recommendations | Personalized text based on score (5.4 = medium):<br>"You have a solid foundation with room to grow."<br>Specific recommendations for improving weak areas<br>CTA: "Start Building Your Brand" | | ☐ |
| 11 | Check email inbox | Assessment results email received within 5 minutes<br>Subject: "Your Brand Assessment Results - Score: 5.4/10"<br>Email contains all 3 scores + overall<br>Link to access full results | | ☐ |
| 12 | Click "Start Building Your Brand" CTA | Redirects to /dashboard or /modules/1<br>Can begin working on modules | | ☐ |
| 13 | Verify database (admin check) | Assessment record created:<br>- user_id: test.assessment.001<br>- 13 answers stored<br>- 3 category scores calculated<br>- overall score: 5.4<br>- completed_at timestamp | | ☐ |

**Expected Final State:**
- Assessment completed and saved
- Scores calculated correctly
- Results displayed
- Email sent
- User can proceed to modules

**Pass Criteria:** All 13 steps pass; scores calculated correctly

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

### Script 3.2: Incomplete Assessment - Browser Close & Resume

**Test ID:** ASMT-SCRIPT-002
**Priority:** High
**Estimated Time:** 8 minutes

**Preconditions:**
- User logged in: `test.assessment.002@brandora.test`
- Assessment not completed
- Auto-save enabled

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Start assessment<br>Answer questions 1-7 | Questions 1-7 answered | | ☐ |
| 2 | Wait 30 seconds (auto-save trigger) | Auto-save indicator shows "Saved"<br>Network tab shows API call to /api/assessment/save | | ☐ |
| 3 | Close browser tab (don't submit assessment) | Browser tab closed<br>Assessment incomplete | | ☐ |
| 4 | Reopen browser and login | Login successful | | ☐ |
| 5 | Navigate to /assessment | Assessment page loads<br>Banner shown: "Resume assessment? You left off at question 7."<br>"Resume" and "Start Over" buttons | | ☐ |
| 6 | Click "Resume" | Question 8 displays (next unanswered)<br>Questions 1-7 already answered (can review by clicking "Back")<br>Progress shows: "7 of 13 complete" | | ☐ |
| 7 | Complete questions 8-13 | All questions answered | | ☐ |
| 8 | Submit assessment | Assessment submits successfully<br>Results calculated and displayed<br>All 13 answers included in score | | ☐ |

**Expected Final State:**
- Auto-saved answers preserved
- User can resume from where they left off
- Complete assessment with all 13 answers

**Pass Criteria:** Auto-save works; resume functionality works; no data loss

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

## 4. Module Access & Progress Scripts

### Script 4.1: Free Tier - Module Access Control

**Test ID:** MOD-SCRIPT-001
**Priority:** Critical
**Estimated Time:** 5 minutes

**Preconditions:**
- User logged in as free tier: `test.module.001@brandora.test`
- Assessment completed
- No modules completed yet

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /dashboard | Dashboard shows:<br>- Modules 1-4 unlocked (Clarity Starter)<br>- Modules 5-12 locked with lock icon<br>- Progress: 0 of 4 modules (0%) | | ☐ |
| 2 | Click Module 1: Vision Statement | Module 1 loads<br>Editable form fields<br>Can enter content | | ☐ |
| 3 | Navigate to /modules/5 directly (URL) | Access denied:<br>Redirects to /upgrade or shows locked modal<br>Message: "Upgrade to Market Fit Pro to unlock this module"<br>"Upgrade Now" CTA button | | ☐ |
| 4 | Check API directly (DevTools Network tab)<br>Try: GET /api/modules/5 | HTTP 403 Forbidden<br>JSON response: {"error": "Upgrade required"} | | ☐ |
| 5 | Return to dashboard<br>Attempt to access Module 4 (last free module) | Module 4 loads successfully<br>Can access all free-tier modules | | ☐ |

**Expected Final State:**
- Free user can only access Modules 1-4
- Modules 5-12 blocked at UI and API level
- Clear upgrade prompts shown

**Pass Criteria:** Access control enforced correctly; cannot bypass via URL

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

### Script 4.2: Complete Module & Track Progress

**Test ID:** MOD-SCRIPT-002
**Priority:** High
**Estimated Time:** 10 minutes

**Preconditions:**
- User logged in (any tier): `test.module.002@brandora.test`
- No modules completed yet

**Test Data:**
```
Module 1 Vision Statement:
"Empower small business owners to build authentic, compelling brands that attract their ideal customers."
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /dashboard | Progress shows: 0 of 4 modules (0%)<br>All modules show "Not Started" status | | ☐ |
| 2 | Click Module 1: Vision Statement | Module 1 page loads<br>Form fields empty<br>Progress indicator: 0%<br>"Save & Continue" button disabled (no content yet) | | ☐ |
| 3 | Enter vision statement (test data above) | Text field accepts input<br>Character counter updates<br>After 30s: "Auto-saved" indicator appears | | ☐ |
| 4 | Click "Mark as Complete" button | Validation checks all required fields filled<br>Modal: "Are you sure? You can always edit later."<br>Confirm button | | ☐ |
| 5 | Confirm completion | Success message: "Module 1 completed! 🎉"<br>Redirect to /dashboard<br>OR show "Next Module" button | | ☐ |
| 6 | Verify dashboard updates | Progress: 1 of 4 modules (25%)<br>Module 1: Green checkmark, "Completed" badge<br>Module 2: "Start" button highlighted (next recommended)<br>Progress bar: 25% filled | | ☐ |
| 7 | Navigate back to Module 1 | Module 1 loads with saved content<br>"Completed" badge visible<br>Can still edit content<br>"Mark as Complete" button shows "Completed ✓" | | ☐ |
| 8 | Edit vision statement (add text) | Can edit<br>Auto-save updates content<br>Still marked as complete<br>"Last updated: [timestamp]" shown | | ☐ |
| 9 | Check database (admin) | Module completion record:<br>- module_id: 1<br>- user_id: test.module.002<br>- completed_at: [timestamp]<br>- Module content saved in separate table | | ☐ |

**Expected Final State:**
- Module 1 marked complete
- Progress tracked correctly (25%)
- Can edit completed modules
- Data persisted

**Pass Criteria:** Module completion works; progress accurate; can edit after complete

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

## 5. Auto-Save Scripts

### Script 5.1: Auto-Save During Module Edit

**Test ID:** SAVE-SCRIPT-001
**Priority:** Critical
**Estimated Time:** 5 minutes

**Preconditions:**
- User logged in: `test.autosave.001@brandora.test`
- Module 1 open and editable
- Network tab open in DevTools

**Test Data:**
```
Vision text: "Transform the wellness industry by making personalized health coaching accessible to everyone."
```

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Open Module 1: Vision Statement | Module loads<br>Text field empty or with previous content<br>Auto-save indicator: "Saved" or no indicator | | ☐ |
| 2 | Start typing vision statement | As typing: Auto-save indicator changes to "Typing..."<br>Submit button disabled during typing (debounce) | | ☐ |
| 3 | Stop typing and wait 30 seconds | After 30s of no input:<br>- Indicator changes to "Saving..."<br>- Network tab shows: POST /api/modules/1/save<br>- Response: 200 OK | | ☐ |
| 4 | Observe indicator after save completes | Indicator changes to "Saved at [time]" (e.g., "Saved at 3:42 PM")<br>Green checkmark icon | | ☐ |
| 5 | Verify API request body (Network > Payload) | JSON payload contains:<br>{<br>  "module_id": 1,<br>  "field": "vision_statement",<br>  "value": "[entered text]"<br>} | | ☐ |
| 6 | Close browser tab (without manual save) | Tab closed | | ☐ |
| 7 | Reopen browser and navigate to Module 1 | Module loads<br>Text field pre-filled with auto-saved content<br>No data loss | | ☐ |
| 8 | Simulate network failure (DevTools > Network > Offline) | Network offline | | ☐ |
| 9 | Edit text and wait 30s | Auto-save attempts to fire<br>Fails due to offline<br>Indicator shows: "Unable to save. Will retry when online."<br>Red warning icon | | ☐ |
| 10 | Re-enable network (Online) | Auto-save retries automatically within 10s<br>Succeeds<br>Indicator: "Saved at [time]" | | ☐ |

**Expected Final State:**
- Auto-save triggers every 30s after typing stops
- Data saved successfully
- Persists across browser close
- Retry on network failure

**Pass Criteria:** Auto-save works reliably; retry on failure; no data loss

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

## 6. Export Scripts

### Script 6.1: Export Module to PDF

**Test ID:** EXPORT-SCRIPT-001
**Priority:** High
**Estimated Time:** 5 minutes

**Preconditions:**
- User logged in (any tier): `test.export.001@brandora.test`
- Module 1 completed with content

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to Module 1 (completed) | Module displays with saved content<br>"Export PDF" button visible | | ☐ |
| 2 | Click "Export PDF" button | Loading spinner appears<br>Message: "Generating PDF..." | | ☐ |
| 3 | Wait for PDF generation | Within 10 seconds:<br>PDF downloads automatically<br>Filename: `Brandora-Module-1-Vision.pdf` | | ☐ |
| 4 | Open PDF in viewer | PDF opens successfully<br>Size: < 1 MB for single module | | ☐ |
| 5 | Verify PDF content | Contains:<br>- Brandora logo/header<br>- Module title: "Module 1: Vision Statement"<br>- User's vision statement content<br>- Date generated<br>- Page numbers (if multi-page) | | ☐ |
| 6 | Verify PDF quality | Text is selectable (not image)<br>Fonts render correctly<br>No truncated content<br>Professional formatting | | ☐ |
| 7 | Test special characters | If content has emojis/special chars:<br>Render correctly in PDF<br>UTF-8 encoding works | | ☐ |

**Expected Final State:**
- PDF generated successfully
- Contains module content
- Professional quality
- Downloadable

**Pass Criteria:** PDF generates within 10s; content accurate; professional format

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

### Script 6.2: Export Complete Strategy PDF (All Modules)

**Test ID:** EXPORT-SCRIPT-002
**Priority:** High
**Estimated Time:** 7 minutes

**Preconditions:**
- User logged in (Market Fit Pro or Design Ready): `test.export.002@brandora.test`
- All accessible modules completed (e.g., Modules 1-8 for Market Fit Pro)

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /dashboard | Dashboard shows 100% progress (all modules complete)<br>"Export Complete Strategy" button visible | | ☐ |
| 2 | Click "Export Complete Strategy" | Modal appears with options:<br>☑ Include all modules<br>☑ Include assessment results<br>☑ Include recommendations<br>"Export PDF" button | | ☐ |
| 3 | Keep all options checked, click "Export PDF" | Loading modal: "Generating your complete brand strategy..."<br>Progress bar (if applicable) | | ☐ |
| 4 | Wait for generation | Within 20 seconds:<br>PDF downloads<br>Filename: `Brandora-Complete-Strategy-[Date].pdf` | | ☐ |
| 5 | Open PDF | PDF opens<br>Size: 2-5 MB (multi-page document) | | ☐ |
| 6 | Verify PDF structure | Page 1: Cover page with user name, date, Brandora branding<br>Page 2: Table of Contents with clickable links<br>Page 3: Assessment results summary<br>Pages 4+: All modules (1-8) with content<br>Last page: Next steps / recommendations | | ☐ |
| 7 | Check table of contents links | Click Module links in TOC<br>PDF jumps to correct page<br>All links functional | | ☐ |
| 8 | Verify all module content included | Each of 8 modules present<br>All user inputs rendered<br>No missing content<br>Proper formatting maintained | | ☐ |
| 9 | Check page numbers and headers/footers | Each page numbered (e.g., "Page 5 of 42")<br>Header: Module name or section<br>Footer: Brandora logo, copyright | | ☐ |
| 10 | Test PDF in different viewers | Open in:<br>- Adobe Acrobat<br>- Browser (Chrome)<br>- Preview (Mac) or equivalent<br>Renders correctly in all | | ☐ |

**Expected Final State:**
- Complete strategy PDF generated
- All modules included
- Professional multi-page document
- Table of contents functional

**Pass Criteria:** PDF contains all completed modules; TOC works; professional quality

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

### Script 6.3: Export Assessment Results to CSV

**Test ID:** EXPORT-SCRIPT-003
**Priority:** Medium
**Estimated Time:** 4 minutes

**Preconditions:**
- User logged in: `test.export.003@brandora.test`
- Assessment completed

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /assessment/results | Results page displays with scores | | ☐ |
| 2 | Click "Export Results (CSV)" button | CSV file downloads immediately (no generation time)<br>Filename: `Brandora-Assessment-Results-[Date].csv` | | ☐ |
| 3 | Open CSV in Excel or Google Sheets | File opens without errors<br>Proper column alignment | | ☐ |
| 4 | Verify CSV structure | Headers:<br>- Question Number<br>- Question Text<br>- Answer<br>- Category<br>- Score<br>13 data rows (one per question) | | ☐ |
| 5 | Verify data accuracy | Row 1: Q1, "How clear is your vision?", [user answer], "Brand Clarity", [score]<br>All 13 rows present<br>Scores match assessment results page | | ☐ |
| 6 | Check special characters | If any questions/answers have commas, quotes, or special chars:<br>Properly escaped (e.g., "Text with, comma")<br>No broken rows | | ☐ |
| 7 | Test UTF-8 encoding | Special characters render correctly<br>Emojis preserved (if any)<br>No mojibake | | ☐ |

**Expected Final State:**
- CSV exports successfully
- Data accurate
- Opens correctly in Excel/Sheets
- Proper encoding

**Pass Criteria:** CSV exports; all data present; proper formatting

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

## 7. Tier Upgrade Scripts

### Script 7.1: Upgrade from Free to Market Fit Pro

**Test ID:** UPGRADE-SCRIPT-001
**Priority:** Critical
**Estimated Time:** 6 minutes

**Preconditions:**
- User logged in as free tier: `test.upgrade.001@brandora.test`
- User has completed Modules 1-4 (free tier)
- Progress: 4 of 4 modules (100% for free tier)

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /dashboard | Dashboard shows:<br>- Tier: "Clarity Starter"<br>- Progress: 4 of 4 (100%)<br>- Modules 5-8 locked<br>- "Upgrade to Market Fit Pro" CTA prominent | | ☐ |
| 2 | Click "Upgrade to Market Fit Pro" | Redirects to /pricing<br>Market Fit Pro tier highlighted<br>Price: $147<br>Shows features: "Unlock Modules 5-8, Positioning, Audience, Messaging" | | ☐ |
| 3 | Click "Choose Market Fit Pro" | Stripe Checkout opens<br>Amount: $147.00<br>Email pre-filled | | ☐ |
| 4 | Complete payment with test card 4242... | Payment succeeds<br>Redirects to /dashboard | | ☐ |
| 5 | Verify dashboard after upgrade | Tier badge: "Market Fit Pro"<br>Modules 5-8 now unlocked (no lock icon)<br>Progress: 4 of 8 modules (50%)<br>Previous progress preserved (Modules 1-4 still marked complete) | | ☐ |
| 6 | Navigate to Module 5 | Module 5 loads successfully<br>Can edit and save<br>No upgrade prompt | | ☐ |
| 7 | Check Module 1 (previously completed) | Module 1 still marked complete<br>Content preserved<br>Can still edit | | ☐ |
| 8 | Verify upgrade email received | Email within 5 minutes:<br>Subject: "Welcome to Market Fit Pro!"<br>Receipt with $147 charge<br>List of newly unlocked modules | | ☐ |
| 9 | Verify database (admin) | user.tier = "Market Fit Pro"<br>payment record: $147<br>module_completions table: Modules 1-4 still marked complete | | ☐ |

**Expected Final State:**
- Tier upgraded to Market Fit Pro
- Modules 5-8 unlocked
- Previous progress preserved
- Payment recorded

**Pass Criteria:** Upgrade succeeds; progress preserved; modules unlocked immediately

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

### Script 7.2: Upgrade from Market Fit Pro to Design Ready

**Test ID:** UPGRADE-SCRIPT-002
**Priority:** High
**Estimated Time:** 5 minutes

**Preconditions:**
- User logged in as Market Fit Pro: `test.upgrade.002@brandora.test`
- Already paid $147 for Market Fit Pro
- Modules 1-8 completed

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to /dashboard | Tier: "Market Fit Pro"<br>Progress: 8 of 8 (100%)<br>Modules 9-12 locked<br>"Upgrade to Design Ready" CTA | | ☐ |
| 2 | Click "Upgrade to Design Ready" | Redirects to /pricing<br>Design Ready tier highlighted<br>**Price shown: $350** (not $497)<br>Note: "You've already paid $147. Pay $350 to upgrade." | | ☐ |
| 3 | Click "Upgrade for $350" | Stripe Checkout opens<br>**Amount: $350.00** (difference)<br>Email pre-filled | | ☐ |
| 4 | Complete payment | Payment succeeds<br>Redirects to /dashboard | | ☐ |
| 5 | Verify dashboard | Tier: "Design Ready"<br>All modules 1-12 unlocked<br>Progress: 8 of 12 (67%)<br>Modules 1-8 still marked complete | | ☐ |
| 6 | Navigate to Module 9 (Visual Identity) | Module 9 loads<br>Can access Design Ready features | | ☐ |
| 7 | Check total payments (admin) | Payment 1: $147 (Market Fit Pro)<br>Payment 2: $350 (Upgrade to Design Ready)<br>**Total: $497** (correct) | | ☐ |

**Expected Final State:**
- Tier: Design Ready
- Total paid: $497 ($147 + $350)
- All 12 modules unlocked
- Progress from Modules 1-8 preserved

**Pass Criteria:** Upgrade price correct ($350); all modules unlocked; progress intact

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

---

## 8. Email Verification Scripts

### Script 8.1: Nurture Email Sequence (Days 3, 7, 14)

**Test ID:** EMAIL-SCRIPT-001
**Priority:** Medium
**Estimated Time:** 15 minutes (spread over 14 days)

**Preconditions:**
- User signed up: `test.nurture.001@brandora.test`
- Completed assessment
- Has NOT upgraded (still free tier)
- Email automation configured

**Steps:**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | User completes assessment on Day 0 | Assessment results email sent immediately | | ☐ |
| 2 | Wait 3 days (Day 3) | Day 3 nurture email sent<br>Subject: "Ready to find your perfect customers?"<br>From: 05-upgrade-day-3.html template<br>Contains social proof, upgrade CTA | | ☐ |
| 3 | User does NOT upgrade | No action | | ☐ |
| 4 | Wait until Day 7 | Day 7 nurture email sent<br>Subject: "See how [Case Study] found their niche in 3 days"<br>From: 06-upgrade-day-7.html template<br>Contains case study, stronger CTA | | ☐ |
| 5 | User still does NOT upgrade | No action | | ☐ |
| 6 | Wait until Day 14 | Day 14 nurture email sent<br>Subject: "Don't build in the dark—light the way to your audience"<br>From: 07-upgrade-day-14.html template<br>Final reminder, urgency | | ☐ |
| 7 | After Day 14 | No more nurture emails sent<br>User remains on occasional engagement emails only | | ☐ |

**Alternate Path: User Upgrades After Day 3 Email**

| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 2b | User upgrades on Day 4 (after Day 3 email) | Upgrade confirmation email sent immediately | | ☐ |
| 4b | Day 7 arrives | NO Day 7 nurture email sent (user already upgraded)<br>Email sequence stopped | | ☐ |
| 6b | Day 14 arrives | NO Day 14 email sent<br>Sequence terminated after upgrade | | ☐ |

**Expected Final State:**
- 3 nurture emails sent to non-upgraded users (Day 3, 7, 14)
- Sequence stops after upgrade
- No emails to upgraded users

**Pass Criteria:** Emails send on correct days; sequence stops after upgrade; templates correct

**Test Result:** ☐ Pass ☐ Fail

**Tester:** _______________ **Date:** _____ **Time Taken:** _____ min

**Notes:**
```
To test quickly, modify date logic in code or use time-travel testing tools.
```

---

## 9. Automation Testing (Optional - For CI/CD)

### Script 9.1: Automated E2E Test Template (Playwright/Cypress)

**Test ID:** AUTO-SCRIPT-001

**Example: Signup Flow (Playwright)**

```javascript
// tests/auth/signup.spec.ts
import { test, expect } from '@playwright/test';

test('User can sign up successfully', async ({ page }) => {
  const testEmail = `test.${Date.now()}@brandora.test`;

  // Navigate to signup
  await page.goto('https://brandora.com');
  await page.click('text=Start Free Assessment');

  // Fill signup form
  await page.fill('input[name="email"]', testEmail);
  await page.fill('input[name="password"]', 'BrandTest2024!');
  await page.fill('input[name="confirmPassword"]', 'BrandTest2024!');
  await page.check('input[name="agreeToTerms"]');

  // Submit
  await page.click('button:has-text("Create Account")');

  // Verify redirect to confirmation page
  await expect(page).toHaveURL(/.*auth\/confirm/);
  await expect(page.locator('text=Check your email')).toBeVisible();

  // Verify email sent (mock or use email testing service)
  // ...
});
```

**Run Command:**
```bash
npx playwright test tests/auth/signup.spec.ts
```

---

## Test Execution Summary Template

Use this template to track test execution:

| Script ID | Test Name | Priority | Status | Tester | Date | Time | Notes |
|-----------|-----------|----------|--------|--------|------|------|-------|
| AUTH-SCRIPT-001 | Signup Happy Path | Critical | ☐ | ___ | ___ | ___min | |
| AUTH-SCRIPT-002 | Login Existing User | Critical | ☐ | ___ | ___ | ___min | |
| PAY-SCRIPT-001 | Purchase Market Fit Pro | Critical | ☐ | ___ | ___ | ___min | |
| ASMT-SCRIPT-001 | Complete Assessment | Critical | ☐ | ___ | ___ | ___min | |
| MOD-SCRIPT-001 | Module Access Control | Critical | ☐ | ___ | ___ | ___min | |
| SAVE-SCRIPT-001 | Auto-Save | Critical | ☐ | ___ | ___ | ___min | |
| EXPORT-SCRIPT-001 | Export Module PDF | High | ☐ | ___ | ___ | ___min | |
| UPGRADE-SCRIPT-001 | Tier Upgrade | Critical | ☐ | ___ | ___ | ___min | |

**Overall Test Pass Rate:** ___ / ___ (__%)

**Ready for Production:** ☐ Yes ☐ No

**Sign-Off:** _______________ **Date:** _____

---

## Appendix: Quick Reference

### Test User Accounts

| Email | Password | Tier | Status |
|-------|----------|------|--------|
| test.signup.001@brandora.test | BrandTest2024! | Free | New signup |
| test.login.001@brandora.test | BrandTest2024! | Free | Existing, 2 modules done |
| test.payment.001@brandora.test | BrandTest2024! | Free | Ready to upgrade |
| test.module.001@brandora.test | BrandTest2024! | Free | Assessment done |
| test.pro.001@brandora.test | BrandTest2024! | Market Fit Pro | Paid user |
| test.design.001@brandora.test | BrandTest2024! | Design Ready | Full access |

### Stripe Test Cards

| Scenario | Card Number | Behavior |
|----------|-------------|----------|
| Success | 4242 4242 4242 4242 | Payment succeeds |
| Declined | 4000 0000 0000 0002 | Card declined |
| 3D Secure | 4000 0027 6000 3184 | Requires authentication |
| Insufficient Funds | 4000 0000 0000 9995 | Declined - insufficient funds |

**Expiry:** Any future date (e.g., 12/25)
**CVC:** Any 3 digits (e.g., 123)
**ZIP:** Any 5 digits (e.g., 94102)

---

**Document Version:** 1.0
**Last Updated:** [Date]
**Next Review:** [Date]
