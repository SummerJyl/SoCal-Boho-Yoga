# SB Yoga — BUGS.md

Bug log for SoCal Boho Yoga landing page. Follows the same format as NutriSight's BUGS.md.

---

## 2026-09-05

### 1. Hero background image not rendering
**Symptom:** Hero section showed flat gray instead of background photo behind "Practice at Home."
**Root cause:** The `.bg` class (which applies the background image + gradient overlay) was defined in `style.css` but never applied to the `.hero` element in `hero.html`.
**Fix:** Added `bg` to the hero wrapper's class list: `<div class="hero bg">`.
**Files:** `hero.html`

---

### 2. Broken images site-wide (benefits, hero, icons, courses, teachers, footer)
**Symptom:** Broken image icons / alt text showing instead of photos across multiple sections.
**Root cause:** Two compounding path errors:
  - Folder name mismatch — code referenced `imgs/` (lowercase, singular), actual folder on disk is `Images` (capital I).
  - Relative path depth — files inside `partials/` and `css/` used `./imgs/...` (same-level reference) instead of `../Images/...` (climb up one level to reach the root-level `Images/` folder).
  - Additionally, `hamburger.svg` and `close.svg` were pointed at `imgs/` when they actually live in the separate `icons/` folder.
**Fix:** Corrected folder name and path depth in:
  - `style.css` — hero bg (`bgBgd.jpeg`), `play.svg`, `hamburger.svg`, `close.svg`
  - `benefit.html` — `p1.png`, `p2.png`, `p3.png`
  - `course-slider.html` — `yoga 1.jpeg`, `yoga 2.jpeg`, `yoga 6.jpeg`
  - `teacher-profiles.html` — `LI pix.jpg`, `yoga 1.jpeg`, `yoga 4.jpeg`
  - `empowerment.html` — `yogaGirl.jpg`
  - `footer.html` — `female-meditation.png`
**Files:** `style.css`, `benefit.html`, `course-slider.html`, `teacher-profiles.html`, `empowerment.html`, `footer.html`
**Note:** Verify image paths after a hard refresh (Cmd+Shift+R) — browser caching made a couple of these look unfixed when the code was actually correct.

---

### 3. Missing closing `</div>` in teacher-profiles.html
**Symptom:** Third teacher photo rendered at massive/uncontained size; page layout below the section was unpredictable.
**Root cause:** The third `.profile-card` block was missing its own closing `</div>`. It was implicitly "borrowing" the closing tag meant for `.teacher-profiles`, so the wrapper never properly closed either. Browsers auto-correct malformed nesting, but the guess doesn't match intended structure.
**Fix:** Added the missing closing `</div>` for the third `.profile-card`, restoring correct nesting.
**Files:** `teacher-profiles.html`

---

### 4. No CSS existed for Courses, Teachers, Empowerment, or Footer sections
**Symptom:** Course cards, teacher profile cards, empowerment section, and footer all rendered unstyled — left-aligned, no sizing constraints, no layout.
**Root cause:** HTML markup existed for all four sections, but no corresponding CSS had ever been written in `style.css`. This wasn't a bug in existing code — the styling simply didn't exist yet.
**Fix:** Wrote new CSS for all four sections:
  - `.course-card`, `.course-content`, `.course-badge`, `.course-price`, `.instructor`, `.duration` — glassmorphism panel (frosted blur + gradient scrim) over background photo
  - `.profile-card`, `.glass-box`, `.teacher-profiles`, `.profile-content-sharp` — centered 3-across grid, circular 140×140px photos, soft glass card
  - `.empowerment`, `.empowerment-container`, `.empowerment-content`, `.empowerment-image`, `.circle-accent`, `.cta-button` — two-column layout, decorative circle accent, button styled to match `.page-btn`
  - `.footer`, `.footer-content`, `.footer-links`, `.copyright` — centered navy footer, logo/links/copyright stacked
**Files:** `style.css`

---

### 5. Benefit cards stacking instead of 3-across
**Symptom:** Member Benefits cards displayed in a single stacked column instead of a 3-column grid (unlike Teachers section, which displayed correctly).
**Root cause:** Class name typo/mismatch — HTML used `class="benefits-cards column"` (plural "benefits"), but the CSS grid rule was written as `.benefit-cards` (singular "benefit"). The selector never matched, so only the generic `.column` class (`display: grid`, no column count) applied, defaulting to single-column stacking.
**Fix:** Renamed CSS selector from `.benefit-cards` to `.benefits-cards` to match the HTML.
**Files:** `style.css`

---

### 6. Swiper "next" arrow rendering center-left instead of far right
**Symptom:** Challenge slider's next/prev arrows both appeared clustered near the left/center of the slider instead of prev-left / next-right.
**Root cause:** Copy-paste bug — `.swiper-button-next` was styled with `left: 0` (identical to `.swiper-button-prev`) instead of `right: 0`.
**Fix:** Changed `.swiper-button-next` to use `right: 0` instead of `left: 0`.
**Files:** `style.css`
**Fixed by:** Jylian (manual edit, confirmed working)

---

## Content updates (not bugs, tracked for reference)
- Replaced Lorem Ipsum placeholder copy in `benefit.html` with final text for all three benefit cards (World-class Teachers, Stay Inspired, Everywhere You Are).

---

## Known scope gaps (from SB_Yoga.pdf mockup comparison — not yet built)
- Nav links (Articles/Classes/Courses/Teachers/About) are meant to be dropdown menus per original mockup; current TODO scoped them as flat anchor links only.
- "At Home, On Vacation" section (with inline-playing video on arrow click) shown in mockup does not exist in current codebase.
- Footer in mockup shows four link columns (Articles/Classes/Courses/About) plus social media icons; current `footer.html` has a simplified 3-link version (Privacy/Terms/Contact).