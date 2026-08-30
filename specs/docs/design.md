# Design Specification

## Direction
Create a modern, trustworthy German-learning academy website.

The reference site is only category inspiration. The visual identity should be clearly
different from it.

## Visual Principles
- Clean
- Educational
- Confident
- Warm but professional
- Strong typography
- Generous spacing
- Clear hierarchy
- Course levels easy to scan

## Suggested Visual System
Use a restrained palette inspired by German visual cues without copying the reference site.
Prefer neutral backgrounds with one strong primary accent and a small secondary accent.

Do not hardcode colors throughout components. Define design tokens centrally.

## Typography
Use one primary sans-serif family with:
- strong display heading
- readable body text
- clear numeric/price styling

Use a consistent type scale.

## Components
Build reusable:
- Header
- Mobile navigation
- Footer
- Button
- Section heading
- CourseCard
- CourseLevelBadge
- CourseFeatureList
- SyllabusSection
- SkillSection
- PriceCard
- CTASection
- GalleryGrid
- MaterialCard
- EmptyState

## Course Visual Hierarchy
Each course card should make these immediately visible:
1. Level
2. Course name
3. Short value proposition
4. Duration
5. Fee
6. Entry requirement
7. View course CTA

## Responsive Behavior
Mobile:
- stacked sections
- compact navigation
- full-width primary CTAs where appropriate
- readable syllabus lists

Desktop:
- wider hero composition
- multi-column course grid
- balanced content widths
- generous whitespace

## Accessibility
- semantic headings
- visible focus states
- keyboard-accessible navigation
- alt text for meaningful images
- sufficient text/background contrast
- no information conveyed by color alone
- buttons/links must have clear labels

## Motion
Use subtle motion only:
- hover/focus transitions
- small entrance animations if they improve polish

Do not make animation necessary to understand content.
