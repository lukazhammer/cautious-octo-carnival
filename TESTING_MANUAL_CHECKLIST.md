# Brandora Manual Testing Checklist

This document provides a comprehensive manual testing checklist for all Brandora features. Test each item and mark as ✅ Pass or ❌ Fail.

---

## 1. Authentication Flow Testing

### 1.1 Signup Flow

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| AUTH-001 | New user signup with valid email | 1. Navigate to /auth/signup<br>2. Enter valid email (e.g., test@example.com)<br>3. Enter strong password (8+ chars, 1 uppercase, 1 number)<br>4. Click "Sign Up" | - User created in database<br>- Confirmation email sent via Brevo<br>- User redirected to "Check your email" page<br>- Email contains magic link | ⬜ |
| AUTH-002 | Signup with existing email | 1. Try to signup with already registered email | - Error message: "Email already registered"<br>- No duplicate user created | ⬜ |
| AUTH-003 | Signup with invalid email format | 1. Enter invalid email (e.g., "notanemail")<br>2. Try to submit | - Client-side validation prevents submission<br>- Error: "Please enter a valid email" | ⬜ |
| AUTH-004 | Signup with weak password | 1. Enter password < 8 chars or missing requirements | - Validation error shown<br>- Requirements displayed (8+ chars, 1 uppercase, 1 number, 1 special char) | ⬜ |
| AUTH-005 | Password confirmation mismatch | 1. Enter password in first field<br>2. Enter different password in confirm field | - Error: "Passwords do not match"<br>- Submit button disabled | ⬜ |

### 1.2 Email Confirmation

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| AUTH-006 | Click confirmation link from email | 1. Open welcome email from Brevo<br>2. Click "Confirm Email" button | - User account activated<br>- Redirected to /assessment (or /dashboard if returning user)<br>- Success message: "Email confirmed!" | ⬜ |
| AUTH-007 | Expired confirmation link | 1. Use confirmation link older than 24 hours | - Error page: "This link has expired"<br>- Option to resend confirmation email | ⬜ |
| AUTH-008 | Already confirmed email | 1. Click confirmation link for already confirmed account | - Redirect to login page<br>- Message: "Email already confirmed. Please log in." | ⬜ |
| AUTH-009 | Resend confirmation email | 1. Click "Resend confirmation" on signup success page | - New confirmation email sent<br>- Previous link invalidated<br>- Confirmation toast shown | ⬜ |

### 1.3 Login Flow

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| AUTH-010 | Login with valid credentials | 1. Navigate to /auth/login<br>2. Enter registered email<br>3. Enter correct password<br>4. Click "Log In" | - User authenticated<br>- Session cookie created<br>- Redirected to /dashboard<br>- User data loaded | ⬜ |
| AUTH-011 | Login with incorrect password | 1. Enter valid email<br>2. Enter wrong password | - Error: "Invalid email or password"<br>- No information disclosure about which is wrong<br>- User remains on login page | ⬜ |
| AUTH-012 | Login with unregistered email | 1. Enter email not in system | - Same error as AUTH-011: "Invalid email or password"<br>- No information disclosure | ⬜ |
| AUTH-013 | Login with unconfirmed email | 1. Try to login before confirming email | - Error: "Please confirm your email first"<br>- Link to resend confirmation email | ⬜ |
| AUTH-014 | "Remember me" functionality | 1. Check "Remember me" box during login<br>2. Close browser<br>3. Reopen and visit site | - User still logged in<br>- Session persists for 30 days | ⬜ |
| AUTH-015 | Logout | 1. Click "Logout" button in dashboard<br>2. Try to access protected routes | - Session cleared<br>- Cookies removed<br>- Redirected to home page<br>- Cannot access /dashboard without re-login | ⬜ |

### 1.4 Password Reset

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| AUTH-016 | Request password reset | 1. Click "Forgot Password?" on login page<br>2. Enter registered email<br>3. Submit | - Password reset email sent via Brevo<br>- Message: "Check your email for reset link"<br>- Email contains reset link with token | ⬜ |
| AUTH-017 | Reset password with valid token | 1. Click reset link from email<br>2. Enter new password (meeting requirements)<br>3. Confirm new password<br>4. Submit | - Password updated in database<br>- Old password no longer works<br>- Redirected to login with success message | ⬜ |
| AUTH-018 | Expired password reset token | 1. Use reset link older than 1 hour | - Error: "This reset link has expired"<br>- Option to request new reset link | ⬜ |
| AUTH-019 | Reset with same password as old | 1. Enter current password as new password | - Warning (optional): "New password should be different"<br>- Allow it but log for security monitoring | ⬜ |

---

## 2. Payment Flow Testing

### 2.1 Stripe Checkout - All Tiers

**Test Cards (Stripe Test Mode):**
- **Success:** 4242 4242 4242 4242
- **Decline:** 4000 0000 0000 0002
- **Requires 3D Secure:** 4000 0027 6000 3184
- **Insufficient funds:** 4000 0000 0000 9995
- **Expired card:** 4000 0000 0000 0069

### 2.2 Clarity Starter (Free Tier)

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| PAY-001 | Access free tier after signup | 1. Complete signup and email confirmation<br>2. Complete assessment | - Immediate access to free modules<br>- No payment required<br>- Dashboard shows "Clarity Starter" badge | ⬜ |
| PAY-002 | Free tier module access | 1. Navigate to modules section | - Can access: Vision, Mission, Values, Elevator Pitch<br>- Other modules show "Upgrade to unlock" | ⬜ |

### 2.3 Market Fit Pro ($147)

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| PAY-003 | Successful payment for Market Fit Pro | 1. Click "Upgrade to Market Fit Pro"<br>2. Fill billing details<br>3. Use test card 4242...<br>4. Complete Stripe checkout | - Stripe payment succeeded (event: payment_intent.succeeded)<br>- User tier upgraded in database<br>- Payment confirmation email sent<br>- Redirected to /dashboard with success message<br>- Access granted to Modules 1-8 | ⬜ |
| PAY-004 | Declined card payment | 1. Use declined test card 4000 0000 0000 0002<br>2. Submit payment | - Stripe returns error<br>- User shown: "Your card was declined"<br>- No tier upgrade<br>- User can retry with different card | ⬜ |
| PAY-005 | 3D Secure authentication | 1. Use 3DS card 4000 0027 6000 3184<br>2. Submit payment | - 3D Secure modal appears<br>- Complete authentication<br>- Payment succeeds after auth<br>- Tier upgraded | ⬜ |
| PAY-006 | Insufficient funds | 1. Use card 4000 0000 0000 9995 | - Error: "Your card has insufficient funds"<br>- User can try different payment method | ⬜ |
| PAY-007 | Payment session timeout | 1. Open Stripe checkout<br>2. Wait 30+ minutes<br>3. Try to complete payment | - Error: "This session has expired"<br>- Link to start new checkout session | ⬜ |

### 2.4 Design Ready ($497)

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| PAY-008 | Successful payment for Design Ready | 1. Click "Upgrade to Design Ready"<br>2. Complete Stripe checkout with valid card | - Payment succeeded<br>- Tier: "Design Ready" in database<br>- Access to all modules (1-12+)<br>- Visual identity tools unlocked<br>- Designer brief templates available | ⬜ |
| PAY-009 | Direct upgrade from Free to Design Ready | 1. Skip Market Fit Pro<br>2. Purchase Design Ready directly | - Tier set to "Design Ready"<br>- Access to all features<br>- No intermediate tier required | ⬜ |

### 2.5 Stripe Webhooks

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| PAY-010 | Webhook: payment_intent.succeeded | 1. Trigger successful payment<br>2. Check webhook handler logs | - Webhook received at /api/webhooks/stripe<br>- Signature verified<br>- User tier updated<br>- Confirmation email queued<br>- HTTP 200 returned to Stripe | ⬜ |
| PAY-011 | Webhook: payment_intent.payment_failed | 1. Trigger failed payment<br>2. Check logs | - Webhook received and logged<br>- User tier NOT changed<br>- Failure notification email sent<br>- Payment marked as failed in database | ⬜ |
| PAY-012 | Webhook signature verification | 1. Send webhook with invalid signature | - Request rejected with 401<br>- Error logged: "Invalid webhook signature"<br>- No processing occurs | ⬜ |
| PAY-013 | Duplicate webhook handling | 1. Send same webhook twice (same event ID) | - First webhook processed<br>- Second webhook detected as duplicate<br>- No duplicate tier upgrade<br>- Idempotency key prevents double-processing | ⬜ |

### 2.6 Tier Upgrades

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| PAY-014 | Upgrade from Free to Market Fit Pro | 1. Login as free user<br>2. Complete payment for Market Fit Pro | - Tier updated to "Market Fit Pro"<br>- Upgrade email sent (06-upgrade-confirmation)<br>- Additional modules unlocked<br>- Previous progress preserved | ⬜ |
| PAY-015 | Upgrade from Market Fit Pro to Design Ready | 1. Login as Market Fit Pro user<br>2. Purchase Design Ready | - Tier updated to "Design Ready"<br>- Price difference charged ($350)<br>- All modules unlocked<br>- Designer tools accessible | ⬜ |
| PAY-016 | Prevent downgrade | 1. Try to "purchase" lower tier than current | - Error: "You already have access to this tier"<br>- No payment processed<br>- Suggest contacting support for refunds | ⬜ |

---

## 3. Assessment Completion Testing

### 3.1 Assessment Form (13 Questions)

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| ASMT-001 | Complete full assessment (13 questions) | 1. Navigate to /assessment<br>2. Answer all 13 questions<br>3. Click "Submit Assessment" | - All answers saved to database<br>- Scores calculated:<br>  - Brand Clarity (0-10)<br>  - Market Positioning (0-10)<br>  - Audience Understanding (0-10)<br>- Overall score computed<br>- Redirected to /assessment/results | ⬜ |
| ASMT-002 | Assessment results page | 1. View results after submission | - Display three category scores<br>- Show overall score (average)<br>- Show personalized recommendations<br>- Display score visualization (chart/gauge)<br>- "Start Your Strategy" CTA button | ⬜ |
| ASMT-003 | Assessment results email | 1. Check email after assessment completion | - Email sent within 5 minutes<br>- Contains all three scores<br>- Includes personalized next steps<br>- Has CTA to access modules<br>- Matches template: 02-assessment-results.html | ⬜ |
| ASMT-004 | Partial assessment submission | 1. Answer only 8 out of 13 questions<br>2. Try to submit | - Client-side validation prevents submission<br>- Error: "Please answer all questions"<br>- Unanswered questions highlighted in red | ⬜ |
| ASMT-005 | Skip assessment validation | 1. Try to access /assessment/results without completing | - Redirected to /assessment<br>- Message: "Please complete the assessment first" | ⬜ |
| ASMT-006 | Retake assessment | 1. Complete assessment<br>2. Click "Retake Assessment" | - Previous answers cleared OR pre-filled<br>- Can submit new responses<br>- New scores calculated<br>- Previous results archived (not deleted) | ⬜ |

### 3.2 Assessment Scoring Logic

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| ASMT-007 | Low score scenario (0-4 avg) | 1. Answer questions to get low scores | - Results show: "Foundational work needed"<br>- Recommendations focus on basics<br>- Suggest starting with free tier modules | ⬜ |
| ASMT-008 | Medium score scenario (5-7 avg) | 1. Answer for medium scores | - Results show: "Good foundation, room to grow"<br>- Recommend Market Fit Pro upgrade<br>- Highlight specific gaps | ⬜ |
| ASMT-009 | High score scenario (8-10 avg) | 1. Answer for high scores | - Results show: "Strong brand strategy"<br>- Recommend Design Ready for execution<br>- Focus on visual identity and templates | ⬜ |

---

## 4. Module Access Testing (Tier-Based)

### 4.1 Clarity Starter (Free) Module Access

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| MOD-001 | Access allowed modules (Free tier) | 1. Login as free user<br>2. Navigate to modules | - ✅ Can access:<br>  - Module 1: Vision Statement<br>  - Module 2: Mission Statement<br>  - Module 3: Core Values<br>  - Module 4: Elevator Pitch | ⬜ |
| MOD-002 | Blocked module access (Free tier) | 1. Try to access Module 5+ directly via URL | - Redirected to upgrade page<br>- Message: "Upgrade to Market Fit Pro to access this module"<br>- Show pricing comparison | ⬜ |
| MOD-003 | Module completion tracking (Free) | 1. Complete Module 1<br>2. Check dashboard | - Module 1 marked as complete<br>- Progress: 25% (1 of 4 modules)<br>- Next module suggested | ⬜ |

### 4.2 Market Fit Pro Module Access

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| MOD-004 | Access allowed modules (Market Fit Pro) | 1. Login as Market Fit Pro user | - ✅ Can access Modules 1-4 (Free tier)<br>- ✅ Can access Modules 5-8:<br>  - Module 5: Target Audience<br>  - Module 6: Positioning Statement<br>  - Module 7: Key Messages<br>  - Module 8: Content Strategy | ⬜ |
| MOD-005 | Blocked module access (Market Fit Pro) | 1. Try to access Module 9+ (Design Ready only) | - Upgrade prompt shown<br>- "Unlock with Design Ready - $350 upgrade" | ⬜ |
| MOD-006 | Module completion tracking (Market Fit Pro) | 1. Complete all 8 modules<br>2. Check dashboard | - Progress: 100% for Market Fit Pro tier<br>- Completion email sent (03-module-completion)<br>- Certificate/badge awarded<br>- Prompt to upgrade to Design Ready | ⬜ |

### 4.3 Design Ready (Full Access)

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| MOD-007 | Access all modules (Design Ready) | 1. Login as Design Ready user | - ✅ Access to all modules 1-12+:<br>  - Modules 1-8 (as above)<br>  - Module 9: Visual Identity<br>  - Module 10: Color & Typography<br>  - Module 11: Designer Brief Templates<br>  - Module 12: Brand Guidelines | ⬜ |
| MOD-008 | Expert review request (Design Ready) | 1. Complete all modules<br>2. Click "Request Expert Review" | - Form appears to submit brand strategy<br>- Expert notified via email<br>- Status: "Review requested" shown<br>- Expected turnaround: 3-5 business days | ⬜ |
| MOD-009 | Module completion tracking (Design Ready) | 1. Complete all 12 modules | - Progress: 100%<br>- Completion certificate generated<br>- All downloads unlocked (PDFs, templates)<br>- "Share your success" social buttons | ⬜ |

---

## 5. Auto-Save Functionality Testing

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| SAVE-001 | Auto-save while filling module form | 1. Start filling Module 1 form<br>2. Enter text in vision statement field<br>3. Wait 30 seconds<br>4. Check network tab | - Auto-save triggered after 30s of no typing<br>- API call to /api/modules/[id]/save<br>- Success indicator shown (e.g., "Saved" checkmark)<br>- Data persisted to database | ⬜ |
| SAVE-002 | Resume from auto-saved state | 1. Fill module partially<br>2. Wait for auto-save<br>3. Close browser<br>4. Return and login | - Form pre-filled with auto-saved data<br>- User can continue where they left off<br>- Timestamp shown: "Last saved at 2:34 PM" | ⬜ |
| SAVE-003 | Auto-save conflict resolution | 1. Open same module in two browser tabs<br>2. Edit in both<br>3. Let auto-save trigger | - Last save wins (simple conflict resolution)<br>- OR: Show warning "Editing in another tab"<br>- Prevent data loss | ⬜ |
| SAVE-004 | Manual save button | 1. Make changes<br>2. Click "Save" button before auto-save | - Immediate save triggered<br>- Success message shown<br>- Auto-save timer reset | ⬜ |
| SAVE-005 | Auto-save during network interruption | 1. Fill form<br>2. Disconnect internet<br>3. Wait for auto-save trigger | - Failed save detected<br>- Error message: "Could not save. Will retry when online."<br>- Data cached locally<br>- Retry when connection restored | ⬜ |
| SAVE-006 | Auto-save indicator states | 1. Type in form<br>2. Observe save indicator | - States:<br>  - "Typing..." (while typing)<br>  - "Saving..." (during API call)<br>  - "Saved" (success)<br>  - "Save failed" (error) | ⬜ |

---

## 6. Progress Tracking Testing

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| PROG-001 | Dashboard progress overview | 1. Login to dashboard | - Display overall progress percentage<br>- Show completed vs total modules<br>- Visual progress bar<br>- Next recommended module | ⬜ |
| PROG-002 | Module-level progress | 1. Open module<br>2. Check progress indicator | - Show completion status:<br>  - Not started (0%)<br>  - In progress (1-99%)<br>  - Completed (100%)<br>- Section-by-section progress | ⬜ |
| PROG-003 | Module completion state | 1. Fill all required fields in module<br>2. Click "Mark as Complete" | - Module status → Completed<br>- Dashboard progress updated<br>- Completion timestamp saved<br>- Badge/checkmark shown | ⬜ |
| PROG-004 | Incomplete module warning | 1. Try to mark module complete with empty required fields | - Validation error shown<br>- Highlighted missing fields<br>- Message: "Please complete all required fields" | ⬜ |
| PROG-005 | Edit completed module | 1. Complete a module<br>2. Go back and edit it | - Can edit previously completed module<br>- Stays marked as "Complete"<br>- Changes auto-saved<br>- "Last updated" timestamp refreshed | ⬜ |
| PROG-006 | Tier-based progress tracking | 1. View dashboard with different tiers | - Free tier: Progress out of 4 modules<br>- Market Fit Pro: Progress out of 8 modules<br>- Design Ready: Progress out of 12 modules<br>- Locked modules not counted in total | ⬜ |
| PROG-007 | Time tracking per module | 1. Spend time in modules<br>2. Check analytics | - Track time spent in each module<br>- Display on dashboard (optional)<br>- Show total hours invested in brand strategy | ⬜ |

---

## 7. Tier Upgrade Testing

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| UPGR-001 | Upgrade path visibility (Free → Market Fit Pro) | 1. Login as free user<br>2. View dashboard | - Upgrade CTA visible<br>- Shows locked modules<br>- Displays pricing: $147<br>- "Upgrade now" button | ⬜ |
| UPGR-002 | Upgrade path visibility (Market Fit Pro → Design Ready) | 1. Login as Market Fit Pro user | - Upgrade CTA shows: "Upgrade for $350"<br>- Shows additional modules included<br>- Highlights expert review benefit | ⬜ |
| UPGR-003 | Successful upgrade unlocks modules | 1. Free user upgrades to Market Fit Pro<br>2. Payment completes<br>3. Check dashboard | - Previously locked modules now accessible<br>- Dashboard updates immediately (or after refresh)<br>- Upgrade confirmation shown | ⬜ |
| UPGR-004 | Progress preserved after upgrade | 1. Complete 3 modules as free user<br>2. Upgrade to Market Fit Pro<br>3. Check module completion status | - All 3 completed modules still marked complete<br>- New modules available to start<br>- No data loss | ⬜ |
| UPGR-005 | Nurture email sequence (Day 3) | 1. Complete assessment as free user<br>2. Don't upgrade<br>3. Wait 3 days | - Day 3 upgrade email sent (05-upgrade-day-3.html)<br>- Contains social proof<br>- Limited-time incentive (optional)<br>- CTA to upgrade | ⬜ |
| UPGR-006 | Nurture email sequence (Day 7) | 1. Still not upgraded<br>2. Wait 7 days from assessment | - Day 7 email sent (06-upgrade-day-7.html)<br>- Case study or success story<br>- Different angle than day 3<br>- Stronger CTA | ⬜ |
| UPGR-007 | Nurture email sequence (Day 14) | 1. Still not upgraded<br>2. Wait 14 days from assessment | - Day 14 email sent (07-upgrade-day-14.html)<br>- Final reminder<br>- Urgency element (if applicable)<br>- Last chance messaging | ⬜ |
| UPGR-008 | Stop nurture emails after upgrade | 1. Receive Day 3 email<br>2. Upgrade before Day 7<br>3. Check email on Day 7 & 14 | - No additional upgrade emails received<br>- User tagged as "upgraded" in email system<br>- Receives engagement emails instead | ⬜ |

---

## 8. Export Functionality Testing

### 8.1 PDF Exports

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| EXPORT-001 | Export single module to PDF | 1. Complete Module 1<br>2. Click "Export as PDF" | - PDF generated with module content<br>- Includes: Module title, user inputs, recommendations<br>- Brandora branding/header<br>- File name: "Brandora-Module-1-Vision.pdf"<br>- Download starts automatically | ⬜ |
| EXPORT-002 | Export complete brand strategy (all completed modules) | 1. Complete multiple modules<br>2. Click "Export Complete Strategy" | - Single PDF with all completed modules<br>- Table of contents<br>- Page numbers<br>- Professional formatting<br>- File name: "Brandora-Complete-Strategy-[Date].pdf" | ⬜ |
| EXPORT-003 | PDF export with no completed modules | 1. Try to export without completing any modules | - Warning: "No completed modules to export"<br>- Suggest completing at least one module | ⬜ |
| EXPORT-004 | PDF export quality check | 1. Export module to PDF<br>2. Open and inspect | - Text is selectable (not image)<br>- Proper formatting preserved<br>- Images/charts rendered correctly<br>- No truncated content<br>- Mobile-responsive layout | ⬜ |

### 8.2 CSV Exports

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| EXPORT-005 | Export assessment results to CSV | 1. Complete assessment<br>2. Click "Export Results (CSV)" | - CSV file downloaded<br>- Contains: Question, Answer, Category, Score<br>- File name: "Brandora-Assessment-Results-[Date].csv"<br>- Opens correctly in Excel/Google Sheets | ⬜ |
| EXPORT-006 | Export module data to CSV | 1. Complete modules<br>2. Click "Export Module Data (CSV)" | - CSV with columns:<br>  - Module Name, Section, Field, User Input, Completed Date<br>- All completed modules included<br>- Proper escaping of commas/quotes in content | ⬜ |
| EXPORT-007 | CSV export character encoding | 1. Enter special characters (é, ñ, 中)<br>2. Export to CSV | - UTF-8 encoding used<br>- Special characters preserved<br>- No mojibake/corruption | ⬜ |

### 8.3 Export Access Control

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| EXPORT-008 | Free tier export limits | 1. Login as free user<br>2. Try to export | - Can export only free tier modules (1-4)<br>- Designer brief templates not available<br>- Upgrade prompt shown for premium exports | ⬜ |
| EXPORT-009 | Design Ready exclusive exports | 1. Login as Design Ready user<br>2. Access export options | - Can export:<br>  - Complete brand strategy PDF<br>  - Designer brief templates (ZIP)<br>  - Brand guidelines document<br>  - All CSV exports | ⬜ |

---

## Testing Sign-Off

### Test Environment
- [ ] Development environment tested
- [ ] Staging environment tested
- [ ] Production environment tested (pre-launch)

### Test Completion
- [ ] All critical tests passed (AUTH, PAY, ASMT)
- [ ] All high-priority tests passed (MOD, SAVE, PROG)
- [ ] All medium-priority tests passed (EXPORT, UPGR)
- [ ] All blockers resolved
- [ ] All critical bugs fixed

### Tester Information
- **Tester Name:** ___________________
- **Date Completed:** ___________________
- **Build Version:** ___________________
- **Sign-Off:** ___________________

---

## Notes and Issues

Use this section to document any issues found during testing:

| Issue ID | Severity | Description | Steps to Reproduce | Status |
|----------|----------|-------------|-------------------|--------|
| | | | | |
| | | | | |

**Severity Levels:**
- **Critical:** Blocker, prevents core functionality
- **High:** Major issue, significant impact
- **Medium:** Moderate issue, workaround available
- **Low:** Minor issue, cosmetic or edge case
