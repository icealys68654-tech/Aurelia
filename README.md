# AURELIA

AURELIA is a standalone static workspace prototype with an integrated local-preview interface for projects, an assistant demo, research notes, and settings.

## Run the website

Open [`index.html`](index.html) directly in a modern browser or serve the repository root with any static web server. The site has no build step or external runtime dependencies.

## Included experiences

- **Overview:** workspace summary and recent projects.
- **Projects:** create and remove projects stored in the current browser's local storage.
- **AI assistant:** an explicitly local sample conversation; no AI service is called.
- **Research:** save topic notes locally; no web search is performed.
- **Integrations:** [`services/connect-portal/`](services/connect-portal/) prepares an MCP client configuration for an endpoint the user supplies. It does not host or connect to a server.

This is a frontend digital-twin preview, not a production backend. Sign-in, remote data sync, live model generation, and web search are not configured. Local workspace data remains in the browser until cleared in Settings.

## Visual reference

The repository includes [`#FCapture.PNG`](%23FCapture.PNG), which is used as the available visual reference. There is no `#FCapture.md` file in the repository at this revision.
