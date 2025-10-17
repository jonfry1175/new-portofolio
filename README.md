## repo: new-portofolio — quick agent guide

This file gives AI coding agents the minimal, actionable knowledge to be productive in this TypeScript + React + Vite portfolio project.

- Project layout (important files)

  - `src/` — app code. Key files: `main.tsx`, `App.tsx`, `index.css`, and `components/`.
  - `src/components/` — UI is split into small functional components (e.g. `NavBar.tsx`, `Hero.tsx`, `Projects.tsx`, `ProjectDetails.tsx`, `LazyImage.tsx`).
  - `src/constants/index.ts` — canonical data shapes (Project, Experience) and the `PROJECTS` array used by `Projects.tsx`.
  - `src/assets/projects/*` — static images are imported and referenced directly in `constants/index.ts`.
  - `vite.config.ts` — Vite + PWA config and chunking hints (see `manualChunks: { vendor, animations }`).

- Big picture / architecture

  - Single-page React app built with Vite and TypeScript. React components are function components using React 18.
  - Code-splitting: many pages/components are lazy-loaded via `React.lazy` + `Suspense` in `App.tsx` (About, Technologies, Experience, Projects, Contact). Keep dynamic import paths relative to `src/components`.
  - UI styling: Tailwind CSS utility classes in components and `index.css`.
  - PWA: `vite-plugin-pwa` is configured in `vite.config.ts` (manifest and caching rules). Public PWA assets live in `public/`.

- Project-specific conventions and patterns

  - Type-first: strict TypeScript settings (`tsconfig.json` has `strict`, `noUnusedLocals`, `noUnusedParameters`). Use the `Project` interface in `src/constants/index.ts` when creating or editing project entries.
  - Asset workflow: add new project images under `src/assets/projects/<project>/`, import them at the top of `src/constants/index.ts`, and add entries to the `PROJECTS` array. The UI expects `detailImages: string[]` and `isMobileImage: boolean` flags.
  - Lazy images & galleries: `LazyImage.tsx` is used across the app; `Projects.tsx` conditionally opens `ProjectDetails` via lazy import when `detailImages.length > 0`.
  - Framer Motion: animated components use `Variants` objects (see `Projects.tsx`), follow the pattern `initial`, `whileInView`, `variants` — keep animation props consistent with other components.
  - Private projects: `isPrivate: true` is supported in `PROJECTS` and renders a disabled badge in the UI — preserve this flag semantics.

- How to run / dev commands

  - Install dependencies: prefer pnpm (this repo has `pnpm-lock.yaml`) but npm/yarn also work.
    - pnpm: `pnpm install`
    - npm: `npm install`
  - Run dev server: `pnpm dev` or `npm run dev` (runs `vite`).
  - Build: `pnpm build` or `npm run build`. Note the build script runs type-check first (`npx tsc`) then `vite build`.
  - Typecheck only: `pnpm type-check` or `npm run type-check`. Watch mode: `type-check:watch`.
  - Lint: `pnpm lint` or `npm run lint` (uses ESLint). See `eslint.config.js` for rules.

- Code change tips / examples

  - Adding a new page component: create `src/components/MyPage.tsx`, export a default React.FC, then lazy-load it in `App.tsx` with `const MyPage = lazy(() => import('./components/MyPage'));` and wrap with `<Suspense>`.
  - Adding project images: put images in `src/assets/projects/<name>/`, import them in `src/constants/index.ts` and add a `Project` entry. Example fields to include: `title`, `description`, `image`, `detailImages`, `technologies`, `isMobileImage`, `isPrivate`.
  - Preserve SEO components: `StructuredData.tsx` and `PersonSchema.tsx` are mounted at the top of `App.tsx`. If you modify metadata, update those files.

- Integration points & gotchas

  - Static import of images is required (Vite bundling). Avoid runtime string paths for `src` in `<img>` unless you intentionally want external URLs.
  - `tsconfig.json` sets `noEmit: true`. The `build` script runs `npx tsc` as a type-check gate (it won't emit). Keep type errors fixed to allow builds.
  - PWA caching rules target Google Fonts and common assets — changing manifest/icons requires updating both `vite.config.ts` and files in `public/`.

- Tests
  - There are no automated tests in the repository. Do not add tests without proposing where to run them and what framework to use.

If anything above is unclear or you need patterns for a specific file (e.g., `Projects.tsx` or `constants/index.ts`), tell me which file to expand with examples and I'll iterate.
