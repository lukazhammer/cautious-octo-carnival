# Motion Design Guidelines

## Overview

Motion at Brandora should:
- Enhance usability, not distract
- Feel professional and intentional
- Guide user attention
- Provide feedback
- Reinforce brand personality (confident, clear, helpful)

**Motion principles:**
- **Purposeful:** Every animation serves a function
- **Subtle:** Refined, not flashy
- **Quick:** Fast enough to feel responsive
- **Natural:** Follows physics (easing, momentum)
- **Consistent:** Same patterns throughout product

---

## Animation Principles

### Timing & Duration

**General guidelines:**
- **Micro-interactions:** 100-200ms
- **UI transitions:** 200-300ms
- **Page transitions:** 300-500ms
- **Complex animations:** 500-800ms
- **Maximum duration:** 1000ms (anything longer feels slow)

**Speed by use case:**
- **Immediate feedback:** 100-150ms (button press, toggle)
- **Element appear/disappear:** 200-300ms (modal, dropdown)
- **Layout changes:** 300-400ms (expand/collapse, filter)
- **Page transitions:** 400-500ms (route changes)

---

### Easing Functions

**Standard easing:**
- **Ease-out:** Most common, decelerates at end (elements entering)
- **Ease-in:** Accelerates at start (elements exiting)
- **Ease-in-out:** Both ends eased (general transitions)
- **Linear:** Constant speed (loading indicators, progress)

**Custom curves:**
- **Brandora Standard:** cubic-bezier(0.4, 0.0, 0.2, 1)
- **Brandora Emphasized:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Brandora Decelerate:** cubic-bezier(0.0, 0.0, 0.2, 1)
- **Brandora Accelerate:** cubic-bezier(0.4, 0.0, 1, 1)

**When to use:**
- **Ease-out (decelerate):** Entering elements, appearing content
- **Ease-in (accelerate):** Exiting elements, dismissing content
- **Ease-in-out:** Moving elements, repositioning
- **Linear:** Continuous processes (loading, video playback)

---

## Transition Types

### 1. Fade
**Use:** Appearing/disappearing content, subtle changes

**Properties:**
- Opacity: 0 → 1 (fade in) or 1 → 0 (fade out)
- Duration: 200-300ms
- Easing: Ease-in-out

**Examples:**
- Modal overlays
- Tooltip appearance
- Success messages
- Image loading

**CSS:**
```css
.fade-in {
  animation: fadeIn 250ms ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

### 2. Slide
**Use:** Panels, menus, drawers, sheets

**Variations:**
- **Slide in from right:** Side panels, navigation drawers
- **Slide in from left:** Back navigation
- **Slide in from top:** Notifications, banners
- **Slide in from bottom:** Bottom sheets, mobile actions

**Properties:**
- Transform: translateX() or translateY()
- Duration: 300ms
- Easing: Ease-out (entering), Ease-in (exiting)

**Examples:**
- Mobile navigation menu
- Filter panel
- Notification toasts
- Sheet modals

**CSS:**
```css
.slide-in-right {
  animation: slideInRight 300ms ease-out;
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
```

---

### 3. Scale
**Use:** Modals, popovers, emphasis

**Properties:**
- Transform: scale(0.95) → scale(1) (grow in)
- Often combined with fade
- Duration: 200-250ms
- Easing: Ease-out

**Examples:**
- Modal dialogs
- Dropdown menus
- Zoom effects
- Card interactions

**CSS:**
```css
.scale-in {
  animation: scaleIn 200ms ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

### 4. Expand/Collapse
**Use:** Accordions, expandable sections, details

**Properties:**
- Max-height or height transition
- Duration: 300-400ms
- Easing: Ease-in-out
- Often includes rotation of chevron icon

**Examples:**
- FAQ accordions
- Expandable content sections
- Nested navigation
- Show more/less

**CSS:**
```css
.expand {
  max-height: 0;
  overflow: hidden;
  transition: max-height 350ms ease-in-out;
}

.expand.is-open {
  max-height: 1000px; /* Larger than needed */
}
```

---

### 5. Blur & Focus
**Use:** Background when modal opens, focus effects

**Properties:**
- Backdrop-filter: blur()
- Duration: 200ms
- Easing: Ease-in-out

**Examples:**
- Modal background blur
- Image loading (blur to sharp)
- Focus/unfocus effects

---

## Micro-Interactions

### Button Press
**Effect:** Slight scale down on press, return on release
**Duration:** 100ms
**Easing:** Ease-out

**CSS:**
```css
button:active {
  transform: scale(0.98);
  transition: transform 100ms ease-out;
}
```

---

### Button Hover
**Effect:** Color change, slight lift (shadow increase)
**Duration:** 150-200ms
**Easing:** Ease-out

**CSS:**
```css
button {
  transition: all 200ms ease-out;
}

button:hover {
  background: #5A7AE8; /* Darker blue */
  box-shadow: 0 4px 12px rgba(111, 138, 236, 0.3);
}
```

---

### Toggle Switch
**Effect:** Handle slides, background color changes
**Duration:** 200ms
**Easing:** Ease-in-out

**CSS:**
```css
.toggle-handle {
  transition: transform 200ms ease-in-out;
}

.toggle.is-on .toggle-handle {
  transform: translateX(20px);
}

.toggle {
  transition: background-color 200ms ease-in-out;
}
```

---

### Input Focus
**Effect:** Border color change, subtle glow
**Duration:** 150ms
**Easing:** Ease-out

**CSS:**
```css
input {
  border: 2px solid #CBD5E1;
  transition: border-color 150ms ease-out, box-shadow 150ms ease-out;
}

input:focus {
  border-color: #6F8AEC;
  box-shadow: 0 0 0 3px rgba(111, 138, 236, 0.1);
}
```

---

### Checkbox/Radio Check
**Effect:** Checkmark appears with scale animation
**Duration:** 150ms
**Easing:** Ease-out

---

### Link Underline
**Effect:** Underline expands on hover
**Duration:** 200ms
**Easing:** Ease-out

**CSS:**
```css
a {
  position: relative;
  text-decoration: none;
}

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #6F8AEC;
  transition: width 200ms ease-out;
}

a:hover::after {
  width: 100%;
}
```

---

## Loading States

### Spinner
**Design:**
- Circular spinner
- Blue #6F8AEC color
- 2-3px stroke width
- Smooth rotation

**Animation:**
- Infinite rotation
- 1000ms duration
- Linear easing

**Sizes:**
- Small: 16px (inline)
- Medium: 32px (buttons)
- Large: 48px (page loading)

**CSS:**
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1000ms linear infinite;
}
```

---

### Progress Bar
**Design:**
- Background: Neutral 200 #E5E7EB
- Fill: Blue #6F8AEC
- Height: 4-8px
- Border radius: 4px

**Animation:**
- Width increases based on progress
- Smooth transition
- 300ms ease-out

**Indeterminate (unknown duration):**
- Animated gradient moving left to right
- Or pulsing opacity

---

### Skeleton Screens
**Design:**
- Gray placeholders mimicking content layout
- Subtle shimmer/wave animation
- Blue-gray gradient (#E5E7EB to #CBD5E1)

**Animation:**
- Shimmer moves left to right
- 1500ms duration
- Ease-in-out
- Infinite loop

**CSS:**
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #E5E7EB 0%,
    #CBD5E1 50%,
    #E5E7EB 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 1500ms ease-in-out infinite;
}
```

---

### Pulsing Dots
**Design:**
- 3 dots
- Blue #6F8AEC
- 8px diameter each
- 4px spacing

**Animation:**
- Each dot scales and fades in sequence
- 600ms per cycle
- Staggered delay (0ms, 200ms, 400ms)

---

## Page Transitions

### Route Changes (SPA)
**Effect:** Fade out current page, fade in new page
**Duration:** 300ms each (600ms total with stagger)
**Easing:** Ease-in (out), Ease-out (in)

**Alternative:** Slide transitions for hierarchical navigation
- Forward: Slide in from right
- Back: Slide in from left

---

### Scroll Animations
**Use:** Elements appear as user scrolls

**Effects:**
- Fade in from below (opacity + translateY)
- Scale in
- Slide in from side

**Timing:**
- Trigger when 20% of element visible
- Duration: 400-600ms
- Easing: Ease-out
- Stagger multiple elements (50-100ms delay between)

**CSS (with Intersection Observer):**
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Modal & Overlay Animations

### Modal Appearance
**Overlay (backdrop):**
- Fade in: 0 → 0.5 opacity
- Duration: 200ms
- Easing: Ease-out

**Modal content:**
- Scale + fade: scale(0.95) + opacity 0 → scale(1) + opacity 1
- Duration: 250ms
- Easing: Ease-out
- Slight delay after overlay (50ms)

**Dismissal:**
- Reverse animation
- Faster: 200ms
- Easing: Ease-in

---

### Dropdown Menus
**Effect:** Scale + fade from top
**Duration:** 150ms
**Easing:** Ease-out
**Origin:** Top (for dropdowns from header) or specific trigger point

---

### Toast Notifications
**Entry:** Slide in from top or bottom edge
**Duration:** 300ms
**Easing:** Ease-out
**Stay:** 4-6 seconds
**Exit:** Fade out + slide out (200ms)

---

## Success & Error States

### Success Checkmark
**Animation:**
1. Circle draws (stroke animation)
2. Checkmark appears (draw path)
3. Optional: Bounce or scale effect

**Duration:** 500-600ms total
**Colors:** Green #10B981

---

### Error Shake
**Animation:**
- Horizontal shake (translateX)
- Amplitude: ±10px
- 3-4 oscillations
- Duration: 400ms

**Use:** Form validation errors, failed actions

**CSS:**
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.error-shake {
  animation: shake 400ms ease-in-out;
}
```

---

## Hover & Focus Effects

### Card Hover
**Effect:**
- Slight lift (translateY: -4px)
- Shadow increase
- Border color change (optional)

**Duration:** 200ms
**Easing:** Ease-out

**CSS:**
```css
.card {
  transition: transform 200ms ease-out, box-shadow 200ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
```

---

### Image Zoom (on hover)
**Effect:** Slight scale increase (1.05-1.1)
**Duration:** 300ms
**Easing:** Ease-out
**Container:** overflow: hidden

---

## Chart & Data Animations

### Chart Loading
**Bars:** Grow from bottom to top
**Lines:** Draw from left to right
**Pie/Donut:** Expand from center
**Duration:** 600-800ms
**Easing:** Ease-out
**Stagger:** 50ms between elements

---

### Data Updates
**Effect:** Smooth transition to new values
**Duration:** 400ms
**Easing:** Ease-in-out
**Highlight:** Brief color flash on changed values

---

## Video & Media

### Video Player Controls
**Show/Hide:** Fade in/out on hover or tap
**Duration:** 200ms
**Easing:** Ease-in-out

---

### Image Loading
**Progressive:**
1. Blur placeholder (instant)
2. Full image loads underneath
3. Transition from blur to sharp (300ms)

---

## Accessibility Considerations

### Reduced Motion
**Respect user preference:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Alternative approaches:**
- Instant state changes (no animation)
- Simple fades only (no complex motion)
- Crossfade instead of slide/scale

---

### Focus Indicators
**Always visible:** Never animate focus ring opacity to 0
**Clear motion:** Smooth, obvious focus transitions

---

## Performance Guidelines

### Use Transform & Opacity
**Preferred properties (GPU-accelerated):**
- `transform` (translate, scale, rotate)
- `opacity`

**Avoid animating:**
- `width`, `height` (causes reflow)
- `margin`, `padding` (causes reflow)
- `top`, `left` (use `transform` instead)

---

### Will-Change
**Use sparingly:**
```css
.animated-element {
  will-change: transform, opacity;
}
```

**Remove after animation:**
```javascript
element.addEventListener('animationend', () => {
  element.style.willChange = 'auto';
});
```

---

### 60 FPS Target
- Keep animations under 16.67ms per frame
- Test on lower-end devices
- Profile with browser DevTools
- Simplify complex animations on mobile

---

## Animation Don'ts

### Avoid:
✗ Animations over 1 second (feels slow)
✗ Animating during scroll (jank)
✗ Too many simultaneous animations
✗ Animations that block interaction
✗ Animations for the sake of delight with no purpose
✗ Excessive bouncing or elastic effects (unprofessional)
✗ Flashy or distracting motion
✗ Ignoring prefers-reduced-motion
✗ Animations on low-end devices that cause lag

---

## Tools & Libraries

### CSS Animations
- Native CSS transitions
- CSS keyframe animations
- Best for simple interactions

### JavaScript Libraries
- **GSAP:** Complex animations, high performance
- **Framer Motion:** React animations
- **React Spring:** Physics-based animations
- **Lottie:** Vector animations (from After Effects)

### Animation Software
- **After Effects:** Create Lottie animations
- **Figma:** Smart Animate for prototypes
- **Principle:** Interaction design

---

## Testing Checklist

Before deploying animations:
- [ ] Animations serve a purpose
- [ ] Duration feels right (not too slow/fast)
- [ ] Easing is natural
- [ ] Works on mobile devices
- [ ] Respects prefers-reduced-motion
- [ ] No performance issues (60 FPS)
- [ ] Doesn't block user interaction
- [ ] Consistent with other animations
- [ ] Accessible (focus indicators visible)
- [ ] Tested on slower devices

---

This motion design system ensures all Brandora animations are purposeful, performant, and enhance the user experience while maintaining our professional brand personality.
