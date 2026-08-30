# Page Specification

## Global Layout

### Header
- Academy logo/name
- Primary navigation:
  - Home
  - About
  - Courses
  - Gallery
  - Material
  - Contact
- Strong contact/enquiry CTA
- Mobile menu

### Footer
- Academy name
- Phone numbers
- Navigation
- Copyright
- Address only when the address source is made usable/confirmed

---

## 1. Home `/`

### Goal
Quickly communicate what the academy does and move visitors toward courses/contact.

### Recommended sections
1. Hero
   - Clear German-learning value proposition
   - Short supporting copy
   - Primary CTA: Explore Courses
   - Secondary CTA: Contact Academy
2. Course-level overview
   - A1, A2, B1, B2 cards
3. Why learn with us
   - Use only supported course highlights; do not invent academy claims
4. Learning journey
   - A1 → A2 → B1 → B2
5. Skills covered
   - Speaking, Listening, Reading, Writing
6. Exam preparation
7. Gallery preview
8. Material preview
9. Contact CTA
10. Footer

Avoid making the home page excessively long. Detailed syllabus belongs on course pages.

---

## 2. About `/about`

### Goal
Explain the academy.

### Current data
Only the academy name and contact information are supplied.

### Rule
Do not invent history, trainer profiles, achievements or statistics.

### Recommended structure
- Academy introduction
- Teaching philosophy placeholder
- Learning approach placeholder
- Location/contact CTA

The placeholder sections can be hidden until real content is supplied.

---

## 3. Courses `/courses`

### Goal
Allow quick comparison of A1–B2.

### Requirements
- Render all course cards from `content/courses/*.json`.
- Show level, short description, duration, fee and entry requirement.
- Link each card to its detail page.
- Do not duplicate course information in components.

---

## 4. Course Detail `/courses/:slug`

### Sections
1. Course hero
2. Overview
3. Course highlights
4. Grammar
5. Vocabulary
6. Speaking
7. Writing
8. Listening
9. Reading
10. Exam preparation
11. Duration + fee
12. Who can join
13. Contact/enquiry CTA
14. Related/next level courses

The detail layout should be shared by A1, A2, B1 and B2.

---

## 5. Gallery `/gallery`

### Requirements
- Data-driven.
- Gallery items stored separately from page components.
- Responsive grid.
- Lightbox/modal is optional.
- Images must have alt text/captions when available.

---

## 6. Material `/material`

### Goal
Show useful learning resources supplied by the academy.

### Data-driven
Materials should be defined in `content/materials/`.

Supported initial types:
- PDF
- external link
- video
- image/resource

Do not add fake materials. Empty state is acceptable until real materials are provided.

---

## 7. Contact `/contact`

### Requirements
- Academy name
- Phone numbers as clickable `tel:` links
- Address/location information when confirmed
- Simple enquiry CTA
- Optional map embed only if a reliable address/map source is supplied

Because there is no backend, do not build a form that pretends to submit to a server.
A simple contact/action UI is preferred unless an external form provider is intentionally added later.

---

## Navigation/UX

Primary conversion paths:
- Home → Courses → Course detail → Contact
- Home → Contact
- Courses → Contact

Every major page should have a clear next action.
