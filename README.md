# Fluent German Academy Hisar

A static React + TypeScript + Vite marketing site for Fluent German Academy Hisar.

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build` and preview the output with `npm run preview`.

## SEO configuration

Set `VITE_SITE_URL` to the canonical HTTPS origin before a production build. Vercel's
`VERCEL_URL` is used automatically when `VITE_SITE_URL` is not set, while local builds use
`http://localhost:5173`. The build emits `sitemap.xml` and `robots.txt` with the resolved origin.

## Content

Course content is imported from the supplied `specs/content` JSON files.
The UI is data-driven: course cards and detail pages are rendered from those files, and a new
course can be added without changing page components. Gallery and material pages intentionally
show empty states until approved academy content is supplied.
