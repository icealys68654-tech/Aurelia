# Aurelia

This repository contains the AURELIA website and **AURELIA Connect**, a separate static integrations portal for the existing [AURELIA app](https://aurelia-coding-assistant.lovable.app).

- The static homepage is [`index.html`](index.html).
- The independently deployable integrations portal is in [`services/connect-portal/`](services/connect-portal/). It provides a copyable MCP client configuration, explains the OAuth connection flow, and links to the app's MCP and protected-resource metadata endpoints.

The `#FCapture.PNG` image in the repository is the supplied visual reference. The site uses a matching dark, green-accented visual language while keeping the screenshot asset unchanged.

See the [service README](services/connect-portal/README.md) for run and deployment instructions for the integrations portal. The homepage is a dependency-free static page and can be opened directly or deployed to any static host.
