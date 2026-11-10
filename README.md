# AURELIA

AURELIA is a CMS-backed workspace website with a responsive Next.js frontend and a Payload CMS backend powered by PostgreSQL.

## Run locally

Requirements: Node.js 20+, npm, and Docker Compose.

1. Copy `.env.example` to `.env` and set `PAYLOAD_SECRET` to a long random value.
2. Start PostgreSQL: `docker compose up -d postgres`.
3. Install dependencies: `npm install`.
4. Start the website and CMS: `npm run dev`.
5. Visit <http://localhost:3000> for the frontend and <http://localhost:3000/admin> to create the first CMS administrator.
6. Run `npm run build` to compile the Next.js production website after configuring PostgreSQL and the environment variables.

## Website routes

- `/` — CMS-configurable homepage with featured published projects.
- `/projects` and `/projects/[slug]` — published project listing and detail pages.
- `/research` — published research entries.
- `/<page-slug>` — published editorial pages managed in the CMS.
- `/admin` — Payload CMS dashboard for authenticated editors.

## CMS and backend

Payload CMS stores Pages, Projects, Research, Users, and global Site Settings in PostgreSQL. Editors manage content, drafts, publishing status, and site copy from the CMS dashboard. Public routes only query published documents; CMS write actions require an authenticated editor. The Payload REST API is mounted at `/api`.

## Visual reference

[`#FCapture.PNG`](%23FCapture.PNG) is the supplied image reference. Its implementation notes and build checklist are recorded in [`#FCapture.MD`](%23FCapture.MD). The PNG is binary; the repository toolchain cannot extract image pixels, so the Markdown captures the design direction and should be refined against a direct visual review.

## Production deployment

Build with `npm run build` and serve with `npm start`, or use the included Dockerfile. PostgreSQL may be deployed separately. Set `DATABASE_URL`, `PAYLOAD_SECRET`, and `NEXT_PUBLIC_SERVER_URL` in the deployment environment. Never use example credentials or secrets in production. Configure HTTPS, database backups, and appropriate network access.

This is a CMS-backed website, not a reconstruction of private services. AI generation, external web search, and user-facing account sync are not configured.
