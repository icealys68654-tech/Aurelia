# AURELIA

AURELIA is a CMS-backed workspace website with a responsive frontend and a Payload CMS backend powered by PostgreSQL.

## Run locally

Requirements: Node.js 20+, npm, and Docker Compose.

1. Copy `.env.example` to `.env` and set `PAYLOAD_SECRET` to a long random value.
2. Start PostgreSQL: `docker compose up -d postgres`.
3. Install dependencies: `npm install`.
4. Start the website and CMS: `npm run dev`.
5. Visit <http://localhost:3000> for the frontend and <http://localhost:3000/admin> to create the first CMS administrator.

Payload creates its database schema on startup. Build for production with `npm run build`, then run `npm start`. The included Dockerfile builds the Next.js application; PostgreSQL should be deployed as a separate managed or containerized service. Set `DATABASE_URL`, `PAYLOAD_SECRET`, and `NEXT_PUBLIC_SERVER_URL` in the deployment environment. Never use the example secret or database password in production.

## Frontend

- Responsive AURELIA visual language: graphite surfaces, subtle borders, and a lime accent based on the provided `#FCapture.PNG` visual reference.
- Homepage, published-project listing and detail pages, and published research listing.
- Content is read directly from Payload's server-side Local API; drafts are not shown to anonymous visitors.

## CMS and backend

- Payload CMS admin at `/admin`, with email/password authentication and first-user bootstrap.
- PostgreSQL persistence using Payload's Postgres adapter.
- CMS collections for Pages, Projects, Research, and Users, plus global Site settings.
- Editors manage titles, slugs, summaries, rich content, status, categories, and source URLs in the CMS.
- Public API reads are limited to published content; writes require an authenticated CMS user.
- Payload REST API is mounted at `/api`.

## Important limits

This delivers a full-stack CMS website, not a reconstruction of private services or a production AI product. There is no model provider, external web search, or user-facing account/project workspace API configured. Admin accounts must be created and protected by the deployer. Configure HTTPS, backups, a strong secret, and database access controls before production deployment.

The repository includes `#FCapture.PNG`; it does not contain a `#FCapture.md` script.
