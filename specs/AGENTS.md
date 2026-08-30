# Fluent German Academy — Codex Instructions

## 1. Project Goal
Build a polished, responsive, static advertisement website for **Fluent German Academy Hisar**.
The site promotes German-language courses and makes it easy for prospective students to understand
the academy, explore courses/materials/gallery, and contact the academy.

## 2. Source of Truth
Use these files as the canonical project specification:
- `docs/product.md` — product goals and scope
- `docs/content.md` — approved source content and content rules
- `docs/pages.md` — page/section requirements
- `docs/design.md` — visual direction
- `docs/architecture.md` — technical architecture
- `docs/content-schema.md` — content-driven data structure
- `docs/roadmap.md` — implementation sequence

Do not invent factual academy information. If information is missing, use a clearly marked
placeholder or ask for clarification rather than making up claims.

## 3. Technical Direction
Recommended baseline:
- React
- TypeScript
- Vite
- Static client-side rendering
- CSS with reusable design tokens/components
- No backend
- No database
- No unnecessary state-management library

The project must build and run as a static site.

## 4. Core Architectural Rule
The UI must be **content-driven**.

Do NOT hardcode course cards, course details, gallery items, or material items directly inside page
components when they can be represented as data.

Examples:
- Add a course by adding/editing a JSON file in `content/courses/`.
- Add a gallery item by adding/editing a JSON file in `content/gallery/`.
- Add a material by adding/editing a JSON file in `content/materials/`.

A sample/template file must exist for each content type.

## 5. Component Rules
- Prefer small reusable components.
- Avoid duplicated markup.
- Keep content/data separate from presentation.
- Keep route/page components thin.
- Reuse one course-card component for all course levels.
- Reuse one course-detail layout for all courses.
- Use semantic HTML.
- Make interactive controls keyboard accessible.
- Do not add a library for a problem that can be solved simply with existing platform features.

## 6. Responsive Requirements
The site must work well on:
- mobile
- tablet
- desktop

Do not design desktop first and leave mobile as an afterthought.

## 7. Content Rules
Preserve the supplied course information accurately:
- A1, A2, B1, B2 course details come from the provided source files.
- Do not silently change fees, duration, syllabus, eligibility, or claims.
- Avoid unsupported claims such as "best", "100% success", "guaranteed", or "certified"
  unless the academy provides evidence and explicitly approves them.

## 8. Contact Rules
Use the supplied academy name and phone numbers.
Do not invent email addresses, social profiles, business hours, instructor names, reviews,
student counts, certifications, or success statistics.

## 9. Quality Gate
Before considering a feature complete:
1. Verify the page works on mobile and desktop.
2. Verify links/routes work.
3. Verify no course content is duplicated in JSX/TSX.
4. Verify images have useful alt text.
5. Verify buttons and links have accessible labels.
6. Run the production build.
7. Check for console errors.
8. Keep the implementation consistent with the docs.

## 10. Working Method
Implement in roadmap order.
For each task:
1. Read only the relevant docs.
2. Inspect the existing implementation.
3. Make the smallest coherent change.
4. Test/build.
5. Update the roadmap checkbox.
6. Do not refactor unrelated code unless necessary.

## 11. Design Constraint
The supplied reference website is inspiration only. Do not copy its layout, text, branding,
visual identity, or distinctive composition. Create a distinct Fluent German Academy identity.
