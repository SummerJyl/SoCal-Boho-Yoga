# 🛠️ SoCal Boho Yoga - Refactoring Checklist

## 🎨 Phase 1: Content & Copy Updates
- [ ] **Member Benefits:** Replace placeholder Lorem Ipsum text in `./partials/benefits.html`
  * **World-class Teachers:** *"Learn from globally certified instructors specializing in Vinyasa, Hatha, and holistic mindfulness practices."*
  * **Stay Inspired:** *"New classes, curated courses, and insightful articles added weekly to keep your daily ritual fresh."*
  * **Everywhere you are:** *"Stream seamlessly on your phone, tablet, laptop, or TV. Your studio travels wherever life takes you."*
- [ ] **Meet Our Teachers:** Update image asset references and teacher rosters in `./partials/teachers.html`
  * [ ] Add updated portrait image paths for Jylian Summers, Rachel S., and Emma C.
  * [ ] Verify bio subtitles (e.g., Vinyasa, Ashtanga, Power Yoga specialties).

## 💻 Phase 2: UI & Code Refactoring
- [ ] **Upper Navigation Bar Fix:** Turn static list items into real links in `./partials/nav.html`
  * [ ] Point `Articles` to `#articles` or a dynamic route
  * [ ] Point `Classes` to `#classes`
  * [ ] Point `Courses` to `#courses`
  * [ ] Point `Teachers` to `#teachers`
- [ ] **Courses Section Glassmorphism Update:** Audit `style.css` styles for the course layout block
  * [ ] Tweak background opacity (e.g., change `background: rgba(255, 255, 255, 0.15)` to a softer level)
  * [ ] Add a cleaner backdrop filter effect: `backdrop-filter: blur(8px);`
  * [ ] Soften contrast against the underlying background images