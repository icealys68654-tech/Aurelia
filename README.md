# AURELIA

AURELIA is a CMS-backed workspace website with a responsive Next.js frontend and Payload CMS/PostgreSQL backend.

## Run locally

Requirements: Node.js 20+, npm, and Docker Compose.

1. Copy `.env.example` to `.env` and set a private `PAYLOAD_SECRET`.
2. Start PostgreSQL: `docker compose up -d postgres`.
3. Install dependencies: `npm install`.
4. Run `npm run dev`.
5. Visit <http://localhost:3000>; create the first CMS administrator at <http://localhost:3000/admin>.
6. Run `npm run build` for a production compile with PostgreSQL and environment variables configured.

## Routes

- `/` — CMS-configurable landing page and featured published projects.
- `/projects` and `/projects/[slug]` — published projects and their detail pages.
- `/research` — research workflow preview and CMS-published research notes.
- `/integrations` — MCP, AI, and search-provider setup guidance and disconnected status.
- `/<page-slug>` — published CMS editorial pages.
- `/admin` — authenticated Payload CMS editor.

## MCP and research-agent status

The frontend follows `#FCapture.MD` and presents the four-stage research control flow (Input pool, Compute layer, Linking/reasoning, Execution layer). The research form is intentionally a local preview: it does not send queries anywhere. The integrations page makes clear that no MCP server, model provider, or search API is configured. No external service is represented as live.

To implement a real provider, add a server-side integration with explicit trusted-provider configuration, secret storage, user consent, bounded requests, TLS, strict URL/redirect and private-network validation, rate and response-size limits, source provenance, and safe handling of untrusted fetched content. Use approved search APIs or authorized interfaces; do not bypass authentication, access controls, or provider restrictions. Do not expose credentials to browser code or CMS entries.

## CMS and database

Payload manages Pages, Projects, Research, Users, and Site Settings in PostgreSQL. Public pages query published entries; CMS mutations require an authenticated editor. The Payload REST API is mounted at `/api`.

## Visual reference and production

The visual system uses dark graphite surfaces, lime accents, restrained borders, and responsive spacing informed by [`#FCapture.PNG`](%23FCapture.PNG). The full product/control-flow specification is in [`#FCapture.MD`](%23FCapture.MD).

Build with `npm run build` and serve with `npm start` or the included Dockerfile. Configure `DATABASE_URL`, a strong `PAYLOAD_SECRET`, HTTPS, database backups, and access controls before production deployment. AI generation, web search, and MCP calls remain unavailable until a reviewed backend is implemented and explicitly configured.
