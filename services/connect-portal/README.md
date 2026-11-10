# AURELIA Connect service

A small, independently deployable integrations portal for the AURELIA Lovable app. This service is intentionally separate from the Lovable application: it links users to the app and helps external MCP clients configure its OAuth-protected server without copying the app's private project data or credentials.

## Connected Lovable app

- App: <https://aurelia-coding-assistant.lovable.app>
- MCP endpoint: <https://aurelia-coding-assistant.lovable.app/mcp>
- Protected-resource metadata: <https://aurelia-coding-assistant.lovable.app/.well-known/oauth-protected-resource>

The MCP server exposes caller-authenticated project tools and shared web search. MCP clients must complete the server's OAuth flow. The portal does not proxy MCP calls, store credentials, claim a live connection, or attempt to scrape search-engine pages itself. Research goes through the connected app's bounded search service and its configured providers.

## Run locally

This is a dependency-free static site. Open `index.html` in a browser, or serve this directory with any static web server. The Lovable app URL and MCP URL are constants near the top of `index.html`; update them if the connected deployment changes.

## Deploy separately

Deploy the `services/connect-portal` directory as its own static site (for example, on any static hosting service). The Lovable app remains independently hosted and is linked through its app and MCP endpoints. This portal can be deployed without changing or republishing the Lovable app.

## Scope and security

- No app secrets, API keys, OAuth tokens, or user project data are stored here.
- The displayed MCP configuration points an MCP client at the existing protected endpoint; it does not bypass OAuth.
- The search-provider names are informational and reflect the connected service's current implementation; provider availability can vary.
