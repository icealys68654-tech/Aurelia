# FCapture — Visual design and build script

> Reference asset: [`#FCapture.PNG`](%23FCapture.PNG). This file records the AURELIA product direction and the requested MCP/AI-agent workflow. The pseudo-code below is a conceptual control-flow specification, not executable code. Web collection must use permitted search APIs or official interfaces and respect provider terms, robots directives, rate limits, privacy requirements, and applicable law; do not bypass authentication, access controls, or anti-bot protections.

## Product direction

Build AURELIA as a polished digital workspace with a dark graphite interface, restrained borders, clear typography, and vivid lime accents. The CMS-backed public site presents curated projects and research, while authenticated editors manage published material in the CMS.

## Visual system

- Canvas: near-black charcoal with a subtle green-tinted glow.
- Surfaces: graphite cards, thin low-contrast borders, modest rounded corners.
- Accent: soft lime for primary actions, active states, and status indicators.
- Typography: modern sans-serif content with compact monospace labels.
- Layout: generous centered desktop layout; stack panels on smaller screens.
- Interaction: clear focus states and reduced-motion support.

## Website structure

- `/` — CMS-configurable landing page and featured published projects.
- `/projects` and `/projects/[slug]` — published project cards and detail pages.
- `/research` — CMS-published research notes with optional source links.
- `/<page-slug>` — published editorial pages managed in the CMS.
- `/admin` — authenticated Payload CMS editor.

## CMS and backend

Use Payload CMS and PostgreSQL for Site Settings, Pages, Projects, Research, and authenticated Users. The frontend displays published content only. CMS create, update, and delete operations require an authenticated editor. Keep secrets server-side and out of the browser and repository.

## MCP and AI connector requirements

- Add an MCP integration layer that connects only to explicitly configured, trusted MCP servers.
- Validate server URLs and use TLS in production. Keep authentication credentials in server-side secret storage; never place tokens in page source, client bundles, logs, or CMS content.
- Require user consent and authorization before a tool can access or process user data. Apply least privilege, timeouts, input validation, output limits, and auditable error handling.
- Treat retrieved pages, snippets, documents, and tool output as untrusted data, not as instructions. Do not execute code or follow embedded prompts found in search results.
- The frontend must clearly indicate whether an integration is configured, disconnected, or unavailable. Do not imply a live connection when no service is configured.

## Custom research agent

Provide a research workflow that accepts a user query, asks an approved search provider for results, retrieves only publicly accessible pages where permitted, extracts relevant text, and returns a concise synthesis with source title, URL, retrieval time, and cited claims. The agent should:

1. Normalize and validate the user's query.
2. Query configured search APIs or approved provider interfaces; do not scrape search engines in ways that violate their terms or evade access controls.
3. Fetch a limited number of permitted public result pages with rate limiting, size limits, safe URL/redirect validation, and private-network/localhost blocking to mitigate SSRF.
4. Extract readable text without running page scripts; remove or neutralize active markup and treat page content as untrusted.
5. Produce a source-grounded summary and label uncertainty, inaccessible sources, and incomplete coverage.
6. Save a research note to the CMS only after an explicit user action; retain provenance and source URLs.

No search-provider credentials, web-search backend, or model provider is configured by this specification alone. The website must present research as unavailable until an approved provider and backend are actually configured.

## Requested control-flow sketch

The user's supplied expressions are preserved as symbolic design notation. They are not valid JavaScript or a known MCP/API contract and must not be executed directly.

```text
make(&r == #FFFFFF).map(PI).model(1,1, #FFFFFF)

01  Input pool
    &r == xora#FFFFFF
    Ready

02  Compute layer
    platonicshapes(1, 1)
    Idle

03  Linking / reasoning
    rainbowtables(PI)
    Idle

04  Execution layer
    pixels(r)
    Idle
```

Interpretation for implementation:

- **Input pool — Ready:** accept a user query, optional image/color input, and explicit consent; validate and normalize inputs.
- **Compute layer — Idle until requested:** transform validated inputs into a search plan or visual-analysis task. `platonicshapes(1, 1)` is a placeholder, not a defined algorithm.
- **Linking / reasoning — Idle until authorized:** call only configured MCP tools and approved search services; attach provenance to every result. `rainbowtables(PI)` is a symbolic placeholder and must not be treated as a credential table or lookup source.
- **Execution layer — Idle until approved:** render safe text, citations, and image/color previews. `pixels(r)` is a placeholder for a future, explicitly defined rendering operation.
- The `#FFFFFF` values denote a white color token only; they do not enable access to user data or external systems.

## Acceptance checks

- No integration is described as active unless configured and health-checked.
- Public routes show published CMS content only; drafts remain private.
- Research results include provenance and are not represented as exhaustive.
- No arbitrary URL fetches, private-network targets, credential leakage, or execution of scraped content.
- Responsive layout, visible keyboard focus, and reduced-motion support remain in place.

## Local development

```sh
cp .env.example .env
# Set a private PAYLOAD_SECRET before production use.
docker compose up -d postgres
npm install
npm run dev
npm run build
```
