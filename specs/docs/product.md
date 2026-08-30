# Product Specification

## Product
**Fluent German Academy Hisar**

## Purpose
A static marketing/advertisement website for a German-language academy in Hisar.

The website should help a visitor:
1. Understand what the academy offers.
2. Explore German courses from A1 to B2.
3. Understand what is taught at each level.
4. See the academy's gallery/materials.
5. Contact the academy for admission and batch information.

## Scope
### Included
- Home
- About
- Courses
- Individual course detail pages
- Gallery
- Material
- Contact
- Responsive navigation/footer
- Content-driven course/gallery/material rendering
- Static SEO metadata
- Accessible UI
- Mobile-friendly layout

### Explicitly excluded
- Backend
- Database
- User accounts
- Online payments
- Student dashboard
- Course enrollment workflow
- Admin panel
- CMS

## Content Model
The website is a presentation layer over local content files.
The UI should not depend on a backend to display course information.

## Business Information From Source
- Academy: Fluent German Academy Hisar
- Phone: 9992620426
- Phone: 8708410499
- Address source: supplied Google share link in `zero.txt`

Do not invent additional business information.

## Reference
The supplied reference website is `https://www.wkdch.com/`.
It is useful for understanding the category and common information architecture, but the new
site must have a distinct visual identity and composition.

## Success Criteria
A visitor should be able to reach a relevant course and contact action within a few clicks.
A non-developer should be able to add a course by copying the provided sample JSON and adding
content without modifying React components.
