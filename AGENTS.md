# AGENT.md – Single‑Shot Prompt for Codex

> **Purpose**  Provide one consolidated prompt that, when fed to OpenAI Codex (or any capable code‑gen LLM), bootstraps an entire repo for a PLO 5 EV + Progressive Jackpot calculator using **Node 20**, **React 18**, **TypeScript**, **Tailwind CSS**, **Prisma/Postgres**, **Docker**, and full test/CI pipeline.
> The model should reply with every required file, ready to `git init`, `pnpm i`, and `docker compose up`.

---

## 📋 Copy‑&‑Paste Prompt

```text
You are an elite software architect and world champion PLO5 grinder.  Create a complete codebase that meets *all* requirements below.  **Output in the exact format**:

--- <relative/path/to/FILE.ext>
<file contents>
--- end

Repeat for every file & directory needed.  Do **not** include explanations outside file blocks.

### 1 General Architecture
• Monorepo managed by **pnpm workspaces**
• Folders:
  • `apps/api`        – Express + tRPC‑style REST, TypeScript
  • `apps/web`        – Vite + React 18, TypeScript, Tailwind, SWR
  • `packages/poker‑sim` – Pure TS library with PLO5 equity & jackpot maths (shared by FE & API)
  • `infra`             – `docker-compose.yml`, `Dockerfile`s, Prisma migration seeds
  • `tests`             – Jest unit & integration; Cypress e2e

### 2 Functional Requirements
1. **Hand Equity Engine**: Monte‑Carlo simulate ≥100k hands, return hero equity versus up to 4 villain ranges.  Optimised via pre‑computed bitmasks & worker threads; accuracy ±0.5 pp against pokerstove baseline.
2. **Range Builder**: Allow named ranges using PLO5 CSV syntax (`AAxx[ds]`, `random 80%`, etc.).  Persist via Prisma/Postgres.
3. **Jackpot Model**: Configurable jackpot pool, trigger probability & rake contribution.  Jackpot EV = pool × prob / #eligible tables.  Update live via SSE endpoint.
4. **Net EV Output**: UI shows formula: `PotEV = Equity × Pot`, `JackpotEV`, `Rake`, `NetEV`.  Animated bar + numeric.
5. **Admin Panel**: Auth‑protected CRUD for jackpot parameters (Supabase Auth JWT).

### 3 Non‑Functional Requirements
• **Performance**: API p95 < 2 s for 3‑way sim, < 500 ms cached.  FE Lighthouse ≥ 90 mobile.
• **Quality**: ≥ 80 % Jest coverage; ESLint + Prettier pass.
• **CI/CD**: GitHub Actions – lint, test, build, Docker push; Preview envs (Vercel FE, Fly.io API).
• **Security**: Zod validation, helmet, rate‑limit `/equity` 60 req/min/IP.
• **Accessibility**: WCAG AA; Tailwind dark‑mode toggle.

### 4 Deliverables
Generate **all** of the following (feel free to add more if needed):
- `package.json` (workspaces), `pnpm-workspace.yaml`
- root `.editorconfig`, `.prettierrc`, `.eslintrc.cjs`, `tsconfig.base.json`
- `docker-compose.yml`, `infra/Dockerfile.api`, `infra/Dockerfile.web`
- `apps/api/src/index.ts` (+ routes, controllers, prisma client, jest config)
- `apps/web/src` React app with Tailwind config, `HandInput.tsx`, `ResultPanel.tsx`, `AdminPanel.tsx`, SWR hooks
- `packages/poker-sim/src/equity.ts`, `jackpot.ts`, plus tests
- `prisma/schema.prisma`, seed script
- Cypress spec `e2e/ev_flow.cy.ts`
- GitHub Actions workflow `.github/workflows/ci.yml`
- README.md with setup instructions

### 5 Conventions
• Use **TypeScript strict mode** everywhere.  
• State management: local `useState` / `useReducer`; avoid Redux.  
• Styling: Tailwind utility classes only, componentised via Headless UI where needed.  
• Animations: `framer-motion`.

### 6 Testing Guidelines
• Unit test poker‑sim library for accuracy vs expected combos.  
• Integration test API `/equity` happy path & validation error.  
• Cypress: enter hand `AhKhQhJhTh`, pot 100, verify Net EV > 0 with 100 BB jackpot.

### 7 Bonus (if capacity)
• Add service workers for offline calc.  
• Bundled PWA manifest & icon set.

Return only file blocks – no prose.  Begin now.
```

---

## ✅ How to Use

1. Open Codex playground (or GitHub Copilot Chat).
2. Paste the **full prompt** above.
3. Wait for the model to emit every file delineated by `--- path` / `--- end`.
4. Pipe into `bash` to write files, or copy into your repo.
5. `pnpm i && docker compose up --build`

*GG!*

