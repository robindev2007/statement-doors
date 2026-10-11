## Project Rules

- Use Bun for package management and scripts.
- Use TypeScript.
- Do not use npm, yarn, or pnpm.
- Follow the existing project architecture.
- Reuse existing utilities and components.
- Do not add dependencies unless necessary.
- Do not modify unrelated files.
- Do not use `any` unless absolutely necessary.
- Never use divider/banner block comments (e.g. `/* -------------------- */`). Use simple comments (e.g. `// Desktop Navigation`).

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Use existing UI components before creating new ones.
- Follow the existing routing structure.
- Keep server/client component boundaries intentional.

## API

- Use the existing API client.
- Follow the existing API response format.
- Reuse existing authentication and error handling.
- Do not duplicate API utilities.
- Keep the api tags small letter

## Before Completing a Task

- Run TypeScript checks.
- Run lint.
- Run the relevant tests.
- Run the build when appropriate.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
