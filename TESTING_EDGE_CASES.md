# Brandora Edge Cases & Error Scenarios Testing

This document covers edge cases, error conditions, and unusual scenarios that must be tested to ensure Brandora is robust and production-ready.

---

## 1. Payment Failures and Retries

### 1.1 Card Declined Scenarios

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-PAY-001 | Generic card decline | 1. Use card: 4000 0000 0000 0002<br>2. Attempt payment | - Stripe returns decline<br>- Error shown: "Your card was declined. Please try a different payment method."<br>- User remains on checkout page<br>- No tier upgrade<br>- Payment marked as "failed" in database | ⬜ |
| EDGE-PAY-002 | Insufficient funds | 1. Use card: 4000 0000 0000 9995<br>2. Attempt payment | - Specific error: "Your card has insufficient funds"<br>- Suggest trying different card<br>- Allow immediate retry<br>- No tier change | ⬜ |
| EDGE-PAY-003 | Expired card | 1. Use card: 4000 0000 0000 0069<br>2. Attempt payment | - Error: "Your card has expired"<br>- Prompt to update expiration date<br>- Payment not processed | ⬜ |
| EDGE-PAY-004 | Incorrect CVC | 1. Use card: 4000 0000 0000 0127<br>2. Attempt payment | - Error: "Your card's security code is incorrect"<br>- Highlight CVC field<br>- Allow retry without re-entering card number | ⬜ |
| EDGE-PAY-005 | Fraudulent card (simulated) | 1. Use card: 4100 0000 0000 0019<br>2. Attempt payment | - Stripe fraud detection triggered<br>- Payment blocked<br>- User shown: "Unable to process payment. Please contact support."<br>- Alert sent to admin<br>- User account flagged for review | ⬜ |

### 1.2 3D Secure (SCA) Scenarios

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-PAY-006 | 3D Secure successful authentication | 1. Use card: 4000 0027 6000 3184<br>2. Complete 3DS challenge | - 3D Secure modal appears<br>- User completes authentication<br>- Payment succeeds after auth<br>- Tier upgraded<br>- Confirmation email sent | ⬜ |
| EDGE-PAY-007 | 3D Secure failed authentication | 1. Use card: 4000 0027 6000 3184<br>2. Fail 3DS challenge (click "Fail") | - Authentication failed<br>- Payment declined<br>- Error: "Authentication failed. Please try again."<br>- No tier upgrade<br>- Allow retry | ⬜ |
| EDGE-PAY-008 | 3D Secure timeout | 1. Trigger 3DS modal<br>2. Wait 5+ minutes without completing | - Modal times out<br>- Payment cancelled<br>- Error: "Authentication timed out"<br>- User returned to checkout<br>- Can start new payment | ⬜ |
| EDGE-PAY-009 | User closes 3DS modal | 1. Open 3DS modal<br>2. Close browser tab/window | - Payment intent cancelled<br>- User can retry when they return<br>- No orphaned payment intents<br>- Proper cleanup | ⬜ |

### 1.3 Payment Retry Scenarios

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-PAY-010 | Retry after decline | 1. First attempt: declined card<br>2. Second attempt: valid card | - First payment fails gracefully<br>- Can immediately retry<br>- Second payment succeeds<br>- Only charged once<br>- Tier upgraded after second attempt | ⬜ |
| EDGE-PAY-011 | Multiple rapid retry attempts | 1. Decline card<br>2. Retry 5 times within 1 minute | - Each attempt processed independently<br>- No rate limiting issues<br>- No duplicate charges<br>- Clear error on each failure | ⬜ |
| EDGE-PAY-012 | Retry with different tier | 1. Attempt Market Fit Pro (decline)<br>2. Try Design Ready instead | - First payment fails<br>- Can select different tier<br>- Second payment processes correctly<br>- Upgraded to correct tier (Design Ready, not Market Fit Pro) | ⬜ |
| EDGE-PAY-013 | Abandoned payment retry after 24 hours | 1. Start payment, abandon<br>2. Return 24+ hours later<br>3. Try to complete original session | - Original session expired<br>- Must create new checkout session<br>- New payment succeeds<br>- No duplicate sessions | ⬜ |

### 1.4 Webhook Edge Cases

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-PAY-014 | Webhook arrives before payment confirmation | 1. Trigger payment<br>2. Webhook arrives before Stripe redirect | - Webhook processes tier upgrade<br>- User redirected to success page<br>- No race condition<br>- User sees updated tier immediately | ⬜ |
| EDGE-PAY-015 | Webhook retry (Stripe retries on 5xx) | 1. Configure webhook endpoint to return 500 first time<br>2. Return 200 on retry | - First webhook: 500 error returned<br>- Stripe retries webhook<br>- Second attempt: 200 success<br>- Tier upgraded on retry<br>- Idempotency prevents duplicate upgrade | ⬜ |
| EDGE-PAY-016 | Duplicate webhook events | 1. Send same webhook twice with same event ID | - First webhook processes normally<br>- Second webhook detected as duplicate (same event ID)<br>- Returns 200 to Stripe (acknowledge)<br>- No duplicate processing<br>- User only upgraded once | ⬜ |
| EDGE-PAY-017 | Out-of-order webhooks | 1. Send payment_intent.succeeded<br>2. Send payment_intent.created (out of order) | - Both webhooks processed<br>- Order doesn't matter due to idempotency<br>- Final state correct (tier upgraded)<br>- No errors | ⬜ |
| EDGE-PAY-018 | Webhook for non-existent user | 1. Send webhook with email not in database | - Webhook processed<br>- Error logged: "User not found"<br>- Return 200 to Stripe (acknowledge)<br>- Alert sent to admin<br>- No crash | ⬜ |

### 1.5 Refund Scenarios

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-PAY-019 | Full refund within 30 days | 1. User requests refund<br>2. Admin processes refund via Stripe | - Refund webhook received<br>- User tier downgraded to free<br>- Completed modules remain accessible (view-only)<br>- Cannot edit or complete new modules<br>- Refund confirmation email sent | ⬜ |
| EDGE-PAY-020 | Partial refund | 1. Admin refunds $50 of $147 payment | - Webhook received<br>- User tier NOT changed (partial refund)<br>- Logged for accounting<br>- No functional changes | ⬜ |
| EDGE-PAY-021 | Refund after upgrade | 1. User pays for Market Fit Pro ($147)<br>2. Upgrades to Design Ready (+$350)<br>3. Requests refund | - Admin must decide: refund both or just last?<br>- System handles either scenario<br>- Tier downgraded appropriately<br>- All refund webhooks processed | ⬜ |

---

## 2. Email Delivery Issues

### 2.1 Email Bounces (Hard Bounce)

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-EMAIL-001 | Signup with invalid email domain | 1. Signup with: user@fakeinvaliddomainthatdoesnotexist.com<br>2. Brevo attempts to send welcome email | - Email hard bounces<br>- Brevo webhook notifies app<br>- User marked as "bounced" in database<br>- Warning in dashboard: "Email delivery failed. Update your email."<br>- Allow email address change | ⬜ |
| EDGE-EMAIL-002 | Email bounces after signup | 1. Valid email initially<br>2. Email account deleted/expired<br>3. Assessment results email bounces | - Bounce detected via Brevo webhook<br>- User notified in-app: "We couldn't reach you at [email]. Please update."<br>- Email change option provided<br>- No further emails sent to bounced address | ⬜ |
| EDGE-EMAIL-003 | Multiple bounce types | 1. Trigger: Mailbox full (soft bounce)<br>2. Later: Invalid mailbox (hard bounce) | - Soft bounce: retry up to 3 times over 24 hours<br>- Hard bounce: stop immediately<br>- User account flagged<br>- Admin alert if paid user | ⬜ |

### 2.2 Email Spam/Complaint

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-EMAIL-004 | User marks email as spam | 1. Receive Brandora email<br>2. Click "Report Spam" in Gmail | - Brevo receives spam complaint webhook<br>- User immediately unsubscribed from all marketing emails<br>- Transactional emails only (login, payment confirmations)<br>- User can re-enable in settings<br>- Spam rate monitored (must stay < 0.1%) | ⬜ |
| EDGE-EMAIL-005 | User unsubscribes from nurture emails | 1. Receive Day 3 upgrade email<br>2. Click "Unsubscribe" link | - User unsubscribed from nurture sequence<br>- No Day 7 or Day 14 emails sent<br>- Still receive transactional emails<br>- Preference saved in database<br>- Can re-subscribe in account settings | ⬜ |

### 2.3 Email Delivery Delays

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-EMAIL-006 | Brevo API rate limit hit | 1. Send 100 emails simultaneously (bulk import users) | - Brevo rate limit: 60 emails/minute<br>- Remaining emails queued<br>- Retry with exponential backoff<br>- All emails eventually sent<br>- No failures logged | ⬜ |
| EDGE-EMAIL-007 | Brevo service outage | 1. Simulate Brevo API down (500 error)<br>2. Trigger email send (e.g., assessment results) | - Initial send fails<br>- Error caught and logged<br>- Email queued for retry<br>- Retry: 1 min, 5 min, 15 min, 1 hour<br>- User notified in-app if persistent failure<br>- Email eventually sent when Brevo recovers | ⬜ |
| EDGE-EMAIL-008 | Email template rendering error | 1. Corrupt email template data<br>2. Trigger email send | - Template error caught<br>- Fallback to plain text email<br>- Error logged with details<br>- User still receives essential info<br>- Admin alerted to template issue | ⬜ |

### 2.4 Email Content Edge Cases

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-EMAIL-009 | User with very long name | 1. Signup with name: "Christopher Alexander Montgomery-Worthington III"<br>2. Receive welcome email | - Email greeting: "Hi Christopher!" (truncate gracefully)<br>- OR use full name if template allows<br>- No overflow/broken layout<br>- Subject line not broken | ⬜ |
| EDGE-EMAIL-010 | Special characters in name | 1. Name: "José Müller-Øberg"<br>2. Receive emails | - UTF-8 encoding correct<br>- Special characters render properly<br>- No mojibake (�)<br>- Works in all email clients | ⬜ |
| EDGE-EMAIL-011 | Missing assessment score data | 1. Corrupt assessment data in DB<br>2. Trigger assessment results email | - Detect missing data<br>- Send email with fallback message: "View your results at..."<br>- Don't send broken email with "[SCORE]" placeholders<br>- Log error for investigation | ⬜ |

---

## 3. Incomplete Assessments

### 3.1 Partial Completion

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-ASMT-001 | Close browser mid-assessment | 1. Answer 7 out of 13 questions<br>2. Close browser<br>3. Return and login | - Auto-save has saved first 7 answers<br>- Resume from question 8<br>- Or show "Resume Assessment" button<br>- No data loss | ⬜ |
| EDGE-ASMT-002 | Session timeout during assessment | 1. Start assessment<br>2. Go idle for 2 hours<br>3. Try to submit | - Session expired<br>- Redirect to login<br>- After login: return to assessment<br>- Answers preserved (if auto-saved)<br>- Can complete assessment | ⬜ |
| EDGE-ASMT-003 | Multiple assessment attempts | 1. Complete assessment (Score: 6/10)<br>2. Retake assessment<br>3. Complete again (Score: 8/10) | - Both attempts saved in database<br>- Latest score shown in dashboard<br>- Can view history: "Retaken 1 time"<br>- Both results exportable | ⬜ |
| EDGE-ASMT-004 | Skip questions and submit | 1. Answer 12 out of 13 questions<br>2. Click "Submit" | - Client-side validation catches it<br>- Error: "Please answer question 7"<br>- Scroll to unanswered question<br>- Highlight in red<br>- Cannot submit until all answered | ⬜ |
| EDGE-ASMT-005 | Invalid answer format | 1. Assessment expects 1-10, user hacks HTML to submit "999" | - Server-side validation catches it<br>- Error: "Invalid answer format"<br>- Rejects submission<br>- Log potential tampering attempt | ⬜ |

### 3.2 Assessment Data Issues

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-ASMT-006 | All answers lowest score (1/10) | 1. Answer all questions with lowest option | - Calculation works: All categories = 1.0/10<br>- Results show: "Let's build your foundation"<br>- Constructive messaging (not discouraging)<br>- Suggest starting with Module 1 | ⬜ |
| EDGE-ASMT-007 | All answers highest score (10/10) | 1. Answer all questions with highest option | - Calculation works: All categories = 10.0/10<br>- Results show: "Excellent brand strategy!"<br>- Suggest Design Ready to execute<br>- Offer to export current strategy | ⬜ |
| EDGE-ASMT-008 | Exactly tied scores | 1. Rig answers so all 3 categories = 5.0/10 exactly | - Scores displayed correctly<br>- No division errors<br>- Recommendations balanced<br>- No category prioritization issues | ⬜ |
| EDGE-ASMT-009 | Assessment database corruption | 1. Manually corrupt assessment record<br>2. Try to view results | - Detect corrupted data<br>- Show error: "Unable to load results. Please retake assessment."<br>- Offer to retake<br>- Log error for admin | ⬜ |

---

## 4. Session Timeouts

### 4.1 Idle Session Expiration

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-SESS-001 | Session expires while editing module | 1. Start editing Module 5<br>2. Go idle for 2 hours<br>3. Try to save | - Auto-save likely already saved<br>- If not: API returns 401 Unauthorized<br>- Frontend detects expired session<br>- Modal: "Your session expired. Please log in."<br>- After re-login: return to Module 5 with data intact | ⬜ |
| EDGE-SESS-002 | Session expires during payment | 1. Open Stripe checkout<br>2. Session expires<br>3. Complete payment | - Stripe session has own timeout (separate)<br>- Payment still processes if Stripe session valid<br>- Webhook upgrades tier<br>- User redirected to login after payment<br>- After login: sees success message + upgraded tier | ⬜ |
| EDGE-SESS-003 | "Remember Me" extends session | 1. Login with "Remember Me" checked<br>2. Return after 7 days | - Session still valid (30-day token)<br>- No re-login required<br>- Can immediately access dashboard<br>- Session refreshed on activity | ⬜ |
| EDGE-SESS-004 | Concurrent sessions (same user, 2 devices) | 1. Login on laptop<br>2. Login on phone<br>3. Edit module on both | - Both sessions valid<br>- Auto-save on both devices<br>- Last save wins (eventual consistency)<br>- Optional: show "Editing on another device" warning | ⬜ |
| EDGE-SESS-005 | Force logout (admin action) | 1. Admin forces logout for user<br>2. User is mid-edit on module | - Session invalidated<br>- Next API call returns 401<br>- User logged out<br>- Message: "You've been logged out. Please log in again."<br>- Auto-saved data preserved | ⬜ |

### 4.2 Session Security

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-SESS-006 | Session token stolen (simulated) | 1. Copy session cookie<br>2. Use in different browser/device | - Token validates (expected)<br>- BUT: Track IP address<br>- If IP changes drastically (different country): trigger re-auth<br>- Security alert email sent | ⬜ |
| EDGE-SESS-007 | Expired JWT token reuse attempt | 1. Capture expired JWT<br>2. Try to reuse it | - Token signature validates but exp claim expired<br>- Rejected with 401<br>- Must obtain new token via login<br>- Logged as suspicious activity | ⬜ |
| EDGE-SESS-008 | Session fixation attack (simulated) | 1. Attacker provides session ID<br>2. User logs in with that ID | - New session created after login<br>- Old session ID invalidated<br>- Session fixation prevented<br>- Secure session management | ⬜ |

---

## 5. Concurrent Edits / Data Conflicts

### 5.1 Multi-Tab Editing

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-CONC-001 | Edit same module in 2 tabs | 1. Open Module 3 in Tab A<br>2. Open Module 3 in Tab B<br>3. Edit in both tabs<br>4. Auto-save triggers in both | - Both auto-saves attempt to save<br>- Last write wins (simple conflict resolution)<br>- OR: Lock editing to one tab<br>- OR: Show warning: "Editing in another tab" | ⬜ |
| EDGE-CONC-002 | Edit different fields in same module (2 tabs) | 1. Tab A: edit "Vision" field<br>2. Tab B: edit "Mission" field | - Both fields can be edited independently<br>- Auto-saves merge changes (if granular)<br>- OR: Last full save wins<br>- No data loss if saved in sequence | ⬜ |
| EDGE-CONC-003 | Tab A saves, Tab B overwrites | 1. Tab A: "Vision: Empower people"<br>2. Tab A auto-saves<br>3. Tab B: "Vision: Different text"<br>4. Tab B auto-saves | - Tab B overwrites Tab A<br>- Last save wins (expected behavior)<br>- Optional: Show conflict warning<br>- Timestamp tracking can help resolve | ⬜ |

### 5.2 Multi-Device Concurrent Access

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-CONC-004 | User edits on laptop, then phone | 1. Laptop: edit Module 1<br>2. Auto-save on laptop<br>3. Phone: open Module 1 | - Phone loads latest data from auto-save<br>- No stale data shown<br>- Real-time or near real-time sync | ⬜ |
| EDGE-CONC-005 | Simultaneous edits (laptop + phone) | 1. Laptop: type in Module 1<br>2. Phone: type different content same time | - Both auto-saves triggered<br>- Race condition possible<br>- Last save wins<br>- Optional: WebSocket for real-time conflict detection | ⬜ |
| EDGE-CONC-006 | Offline edit on mobile, then sync | 1. Phone goes offline<br>2. Edit Module 2 (saved locally)<br>3. Phone back online<br>4. Auto-save syncs | - Local changes cached (service worker or localStorage)<br>- When online: auto-save to server<br>- Conflict detection if server version changed<br>- Merge or show conflict resolution UI | ⬜ |

### 5.3 Database-Level Concurrency

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-CONC-007 | Two payment webhooks arrive simultaneously | 1. Webhook 1: Upgrade to Market Fit Pro<br>2. Webhook 2: Same user, same payment (duplicate) | - Database transaction locks user record<br>- First webhook processes<br>- Second webhook detected as duplicate (idempotency)<br>- User upgraded only once<br>- No race condition | ⬜ |
| EDGE-CONC-008 | User upgrades while auto-save is processing | 1. Auto-save in progress for Module 5<br>2. Payment webhook upgrades tier to unlock Module 5 | - Both operations succeed<br>- Auto-save completes for Module 5<br>- Tier upgrade processes<br>- Module 5 data preserved<br>- No deadlock | ⬜ |

---

## 6. Browser & Network Edge Cases

### 6.1 Network Interruptions

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-NET-001 | Network drops during auto-save | 1. Edit module<br>2. Disconnect WiFi<br>3. Auto-save triggers | - Save fails (network error)<br>- Error shown: "Connection lost. Changes saved locally."<br>- Data cached in localStorage<br>- Retry when connection restored<br>- Success message when synced | ⬜ |
| EDGE-NET-002 | Network drops during payment | 1. Start Stripe payment<br>2. Disconnect network mid-transaction | - Stripe handles network failures<br>- Payment may complete on Stripe side<br>- Webhook still received when network restored<br>- User tier upgraded via webhook<br>- User may see error, but payment succeeds | ⬜ |
| EDGE-NET-003 | Slow network (< 100 kbps) | 1. Throttle network to 2G speeds<br>2. Load dashboard and modules | - Page loads (even if slow)<br>- Loading indicators shown<br>- Timeout prevents infinite wait (60s max)<br>- Graceful degradation (minimal images, etc.) | ⬜ |
| EDGE-NET-004 | Network restored after offline period | 1. Go offline for 10 minutes<br>2. Make local changes<br>3. Go online | - Detect network restoration<br>- Auto-sync cached changes<br>- Show: "Syncing..." then "Synced"<br>- All changes saved to server | ⬜ |

### 6.2 Browser Compatibility

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-BROW-001 | Outdated browser (IE 11, if supported) | 1. Access Brandora from IE 11 | - Show banner: "Please upgrade to a modern browser"<br>- Basic functionality may work<br>- OR: Completely unsupported, redirect to upgrade page | ⬜ |
| EDGE-BROW-002 | JavaScript disabled | 1. Disable JavaScript<br>2. Try to access site | - Show message: "JavaScript is required"<br>- Cannot use app (Next.js requires JS)<br>- Provide troubleshooting link | ⬜ |
| EDGE-BROW-003 | Cookies disabled | 1. Disable cookies<br>2. Try to login | - Cannot maintain session<br>- Error: "Cookies must be enabled to use Brandora"<br>- Provide instructions to enable cookies | ⬜ |
| EDGE-BROW-004 | Ad blocker blocks tracking scripts | 1. Enable aggressive ad blocker<br>2. Use site | - Core functionality still works<br>- Analytics may not track (acceptable)<br>- No broken features<br>- Stripe checkout works (not blocked) | ⬜ |

### 6.3 Browser Storage Issues

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-STOR-001 | localStorage full | 1. Fill localStorage to limit<br>2. Try to cache auto-save data | - Detect quota exceeded error<br>- Clear old cached data<br>- Retry save<br>- OR: Save to server immediately (no cache) | ⬜ |
| EDGE-STOR-002 | localStorage cleared by user | 1. User clears browser data<br>2. Return to site | - Session cookie also cleared → logged out<br>- After login: all data intact on server<br>- No data loss (server is source of truth) | ⬜ |
| EDGE-STOR-003 | Private/Incognito mode | 1. Open site in incognito mode<br>2. Complete module, close window, reopen | - Session not persisted after close<br>- Must login again<br>- Data saved to server<br>- Can continue after re-login | ⬜ |

---

## 7. Input Validation Edge Cases

### 7.1 Extreme Input Values

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-INPUT-001 | Very long text input (> 10,000 chars) | 1. Paste 15,000 character text into vision field | - Client-side limit: 10,000 characters<br>- Counter shows: "10,000 / 10,000"<br>- Cannot exceed<br>- OR: Server validates and truncates<br>- Error: "Maximum 10,000 characters" | ⬜ |
| EDGE-INPUT-002 | Empty required field | 1. Leave required field blank<br>2. Try to mark module complete | - Validation error: "This field is required"<br>- Cannot mark complete<br>- Field highlighted in red | ⬜ |
| EDGE-INPUT-003 | Only whitespace in field | 1. Enter "    " (spaces only)<br>2. Try to save | - Validation: trim whitespace<br>- Error: "Field cannot be empty"<br>- OR: Auto-trim on save | ⬜ |
| EDGE-INPUT-004 | SQL injection attempt | 1. Enter: `'; DROP TABLE users; --` | - Input sanitized/escaped<br>- Saved as literal text (harmless)<br>- Parameterized queries prevent SQL injection<br>- Log suspicious input | ⬜ |
| EDGE-INPUT-005 | XSS attack attempt | 1. Enter: `<script>alert('XSS')</script>` | - Input escaped on save<br>- Rendered as text (not executed)<br>- React escapes by default<br>- No alert shown, script not run | ⬜ |
| EDGE-INPUT-006 | HTML injection | 1. Enter: `<img src=x onerror=alert('xss')>` | - HTML tags stripped or escaped<br>- Rendered as plain text<br>- No image loads, no alert<br>- Sanitization library used | ⬜ |

### 7.2 Special Characters & Encoding

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-INPUT-007 | Unicode emoji in text | 1. Enter: "Empower people 🚀💪🌟" | - Emojis saved correctly (UTF-8)<br>- Display correctly in UI<br>- Export to PDF correctly<br>- No mojibake | ⬜ |
| EDGE-INPUT-008 | Right-to-left languages (Arabic, Hebrew) | 1. Enter RTL text: "مرحبا بك" | - Text direction detected<br>- Rendered RTL correctly<br>- Saved as UTF-8<br>- Export preserves RTL | ⬜ |
| EDGE-INPUT-009 | Mixed RTL and LTR | 1. Enter: "Welcome مرحبا 2024" | - Unicode bidirectional algorithm applied<br>- Renders correctly<br>- Saved and exported correctly | ⬜ |
| EDGE-INPUT-010 | Zero-width characters | 1. Enter text with zero-width spaces (​) | - Characters preserved or stripped (decide)<br>- No layout breaking<br>- Validation may flag as suspicious | ⬜ |

---

## 8. API Rate Limiting & Abuse Prevention

### 8.1 Rate Limiting

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-RATE-001 | Excessive auto-save calls (DOS attempt) | 1. Script triggers 100 auto-saves per second | - Rate limiting applied: max 10/minute per user<br>- Status 429: Too Many Requests<br>- Retry-After header provided<br>- User account flagged if persistent | ⬜ |
| EDGE-RATE-002 | Rapid login attempts (brute force) | 1. Attempt 20 logins in 1 minute | - Rate limit: 5 attempts per 15 minutes<br>- After 5 failed: "Too many attempts. Try again in 15 minutes."<br>- IP-based rate limiting<br>- Optional: CAPTCHA after 3 attempts | ⬜ |
| EDGE-RATE-003 | Excessive PDF export requests | 1. Request 50 PDF exports in 1 minute | - Rate limit: 5 exports per hour<br>- After limit: "Export limit reached. Try again in X minutes."<br>- Prevent resource exhaustion | ⬜ |

### 8.2 Data Integrity Attacks

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-ABUSE-001 | CSRF attack attempt | 1. Craft malicious form on external site<br>2. Submit to Brandora API | - CSRF token required<br>- Request without valid token rejected<br>- 403 Forbidden<br>- No state change | ⬜ |
| EDGE-ABUSE-002 | Tier manipulation via API | 1. User with free tier<br>2. Manually calls API: `PATCH /api/user/tier` with `tier: "Design Ready"` | - Authorization check fails<br>- 403 Forbidden<br>- Tier NOT changed<br>- Log attempted abuse | ⬜ |
| EDGE-ABUSE-003 | Access another user's data | 1. User A gets their module ID<br>2. User B tries to access User A's module | - Authorization: check user ID matches resource owner<br>- 403 Forbidden<br>- Data not leaked | ⬜ |

---

## 9. Third-Party Service Failures

### 9.1 Supabase Outage

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-DB-001 | Supabase database unreachable | 1. Simulate Supabase outage<br>2. User tries to login | - Connection timeout (5s)<br>- Error page: "Service temporarily unavailable"<br>- Retry logic: 3 attempts<br>- Graceful error messaging<br>- Status page link provided | ⬜ |
| EDGE-DB-002 | Supabase slow response (> 5s) | 1. Inject latency into DB queries<br>2. Load dashboard | - Request timeout after 10s<br>- Show loading spinner<br>- Error: "Taking longer than expected. Please refresh."<br>- Don't hang indefinitely | ⬜ |

### 9.2 Stripe Outage

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-STRIPE-001 | Stripe API down during checkout | 1. User clicks "Upgrade"<br>2. Stripe API returns 500 | - Error caught<br>- Message: "Payment system temporarily unavailable. Please try again."<br>- User can retry<br>- No payment charged | ⬜ |
| EDGE-STRIPE-002 | Stripe webhook delivery delayed | 1. Payment succeeds<br>2. Webhook delayed by 1 hour | - User redirected after payment with "Processing..."<br>- Frontend polls payment status<br>- When webhook arrives: tier upgraded<br>- User sees upgrade without manual intervention | ⬜ |

### 9.3 Brevo Outage

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-BREVO-001 | Brevo API down during email send | 1. User completes assessment<br>2. Results email fails (Brevo 500) | - Error caught and logged<br>- Email queued for retry<br>- User shown in-app: "Results ready!" (not dependent on email)<br>- Email sent when Brevo recovers | ⬜ |

---

## 10. Data Migration & Import Edge Cases

### 10.1 User Data Import (Future Feature)

| Test ID | Edge Case | Test Steps | Expected Behavior | Status |
|---------|-----------|------------|-------------------|--------|
| EDGE-IMPORT-001 | Import CSV with missing columns | 1. Upload CSV missing "email" column | - Validation error: "Required column 'email' missing"<br>- Import rejected<br>- Show expected format | ⬜ |
| EDGE-IMPORT-002 | Import with duplicate emails | 1. CSV has same email twice | - Detect duplicates<br>- Error: "Row 5 and Row 12 have duplicate emails"<br>- Reject import OR deduplicate | ⬜ |

---

## Edge Case Testing Summary

### Critical Edge Cases (Must Test Before Launch)
- [ ] Payment failures and retries
- [ ] 3D Secure authentication
- [ ] Webhook duplicate handling
- [ ] Email bounces
- [ ] Session timeouts during edits
- [ ] Concurrent multi-device editing
- [ ] Network interruptions during auto-save
- [ ] XSS/SQL injection prevention

### High Priority Edge Cases
- [ ] Refund handling
- [ ] Email spam complaints
- [ ] Assessment partial completion
- [ ] Browser compatibility (Chrome, Safari, Firefox, Edge)
- [ ] Third-party service outages
- [ ] Rate limiting

### Medium Priority Edge Cases
- [ ] Unicode/emoji handling
- [ ] Extremely long inputs
- [ ] Multiple concurrent tabs
- [ ] Offline mode
- [ ] Private/incognito browsing

---

## Edge Case Sign-Off

**Tested By:** ___________________
**Date:** ___________________
**Critical Edge Cases Passed:** ___ / ___
**Sign-Off:** ___________________

---

## Reporting Edge Case Bugs

When an edge case fails, report with:
1. **Test ID** (e.g., EDGE-PAY-001)
2. **Severity**: Critical / High / Medium / Low
3. **Steps to Reproduce**
4. **Expected vs Actual Behavior**
5. **Screenshots/Logs**
6. **Environment**: Dev / Staging / Prod
7. **Browser/Device**

Use this template for bug reports:

```
**Bug:** [Test ID] - [Short Description]
**Severity:** Critical
**Steps:**
1. ...
2. ...
**Expected:** ...
**Actual:** ...
**Environment:** Staging, Chrome 120, macOS
**Logs:** [attach]
```
