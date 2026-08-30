# Fluent German Academy — Optimized Codex Specification

This folder is the cleaned project specification and content foundation for the website.

## Important
This is **not** the React application itself. It is the specification/content package to use
when creating the application repository.

## Recommended usage
Copy the contents into the future `fluent-german-academy` repository.

The most important file for Codex is:
- `AGENTS.md`

Then use:
- `docs/roadmap.md` for implementation order.
- `docs/pages.md` for page behavior.
- `docs/architecture.md` for technical decisions.
- `docs/content-schema.md` for adding content.

## Content
Courses already converted from the supplied files:
- `content/courses/a1.json`
- `content/courses/a2.json`
- `content/courses/b1.json`
- `content/courses/b2.json`

Templates:
- `content/courses/_sample.json`
- `content/gallery/_sample.json`
- `content/materials/_sample.json`

## Recommended first Codex task
"Read AGENTS.md and docs/*.md. Initialize the React + TypeScript + Vite project and implement
Phase 0 only. Do not build application pages yet."
