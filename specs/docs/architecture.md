# Technical Architecture

## Recommended Stack
- React
- TypeScript
- Vite
- Static build
- CSS/design tokens

This stays close to the requested React stack while keeping the project lightweight.

## Rendering Model
Static client-side application.

No:
- backend
- database
- authentication
- server API

## Suggested Structure

src/
├── app/
│   ├── App.tsx
│   └── routes.tsx
├── components/
│   ├── layout/
│   ├── common/
│   ├── courses/
│   ├── gallery/
│   └── materials/
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Courses/
│   ├── CourseDetail/
│   ├── Gallery/
│   ├── Material/
│   └── Contact/
├── content/
│   ├── loaders/
│   └── types/
├── styles/
│   ├── tokens.css
│   └── globals.css
└── main.tsx

content/
├── courses/
├── gallery/
├── materials/
└── site/

public/
├── images/
└── documents/

## Content Loading
Use a predictable local-content convention.

Recommended:
- JSON for structured data.
- Images/PDFs in `public/`.
- Each content item references its asset path.

For a small static site, importing JSON at build time is preferable to adding a CMS.

## Routing
Use a lightweight React routing solution only if needed for multiple pages.
Course detail routes should be generated from course slugs.

Example:
`/courses/a1`
`/courses/a2`
`/courses/b1`
`/courses/b2`

## Type Safety
Define TypeScript types for:
- Course
- GalleryItem
- Material
- SiteInfo

Validate required fields in development/build where practical.

## Important Maintainability Rule
A new course should require:
1. Copy `content/courses/_sample.json`.
2. Rename it.
3. Fill in the content.
4. Add referenced images/documents if needed.

No React component should need modification.

The same principle applies to gallery and material entries.

## Error Handling
- Unknown course slug → friendly not-found page.
- Missing optional image → fallback presentation.
- Empty gallery/material → intentional empty state.
- Missing required content → development warning/build error where practical.
