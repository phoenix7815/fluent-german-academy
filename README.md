# Fluent German Academy Hisar

A static React + TypeScript + Vite marketing site for Fluent German Academy Hisar.

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build` and preview the output with `npm run preview`.

## Content

Course content is imported from the supplied `specs/content` JSON files.
The UI is data-driven: course cards and detail pages are rendered from those files, and a new
course can be added without changing page components. Gallery and material pages intentionally
show empty states until approved academy content is supplied.
