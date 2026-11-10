# FCapture — Visual design and build script

> Reference asset: [`#FCapture.PNG`](%23FCapture.PNG). This Markdown file records the visual direction used to implement the AURELIA frontend. The repository tooling exposes the PNG as a binary asset but does not provide pixel inspection, so treat exact measurements and colors below as implementation guidance rather than color-sampled values.

## Product direction

Build AURELIA as a polished, quiet digital workspace: dark graphite surfaces, restrained borders, clear typographic hierarchy, and a vivid lime-green accent. The experience should feel focused and premium rather than like a generic admin template. The CMS is the publishing backend; the public site remains a user-facing, multi-page experience.

## Visual system

- **Canvas:** near-black charcoal background with a subtle green-tinted radial glow near the top.
- **Surfaces:** slightly lighter charcoal cards and panels, thin low-contrast borders, modest rounded corners.
- **Accent:** bright soft lime for primary actions, active states, status dots, and small icon details; use dark text on lime buttons.
- **Text:** warm off-white for headings and primary copy; muted gray-green for helper text and metadata.
- **Typography:** modern system sans-serif for content; compact monospace uppercase labels for section eyebrows and technical metadata.
- **Spacing:** generous horizontal whitespace, a centered content width, and consistent card gaps. On narrow screens, stack columns and keep navigation usable.
- **Motion:** subtle hover feedback only; respect `prefers-reduced-motion`.

## Homepage composition

1. A compact header with the AURELIA mark, links to Projects and Research, and a CMS sign-in action.
2. A two-column hero: editorial headline and concise description on the left; abstract circular/orbit motif in a bordered dark panel on the right.
3. Three feature cards describing projects, focused thinking, and organized research.
4. A featured-project section driven by published CMS entries.
5. A final call-to-action panel and understated footer.

## Multi-page experience

- `/` — CMS-configurable home page and published featured projects.
- `/projects` and `/projects/[slug]` — published project cards and detail pages.
- `/research` — published research notes with optional source links.
- `/<page-slug>` — published CMS-managed editorial pages.
- `/admin` — authenticated Payload CMS editor; drafts stay private.

## CMS content model

Use Payload CMS with PostgreSQL for Site Settings, Pages, Projects, Research, and authenticated Users. Editors manage titles, slugs, summaries, rich text, publication status, categories, and source URLs. The public frontend reads published content only. Admin write operations require authentication.

## Acceptance checks

- Frontend and CMS routes have valid Next.js root layouts.
- `npm run build` completes with a configured PostgreSQL database and environment variables.
- Draft entries are not rendered publicly; published entries appear in their corresponding listing/detail pages.
- Layout remains readable at mobile widths; focus styles are visible and motion is reduced when requested.
- No external application or hosted service is implied as connected unless explicitly configured.

## Local build

```sh
cp .env.example .env
# Set a private PAYLOAD_SECRET before production use.
docker compose up -d postgres
npm install
npm run dev
npm run build
```
