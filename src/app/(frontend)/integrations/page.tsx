import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Integrations' }

export default function IntegrationsPage() {
  return (
    <main className="wrap page-main">
      <div className="eyebrow">MCP · AI connector</div>
      <h1 className="page-title">Integrations</h1>
      <p className="page-intro">Connect only services you control or trust. No MCP server, model provider, or search API is configured by default.</p>
      <section className="integration-status">
        <div className="integration-icon" aria-hidden="true">⇄</div>
        <div><span className="connection-state"><i /> Disconnected</span><h2>No services connected</h2><p>AURELIA will not make external requests until an administrator configures a trusted MCP server and an approved research provider in the server environment.</p></div>
      </section>
      <div className="integration-grid">
        <section className="feature-card integration-card"><div className="eyebrow">01 · MCP server</div><h2>Connect a trusted tool server</h2><p>Configure a server-side <code>MCP_SERVER_URL</code> and provider-specific authentication in your secret manager. Require TLS in production, least-privilege scopes, and user consent.</p><div className="integration-callout">Never put access tokens or private keys in browser code, CMS content, or a public configuration snippet.</div></section>
        <section className="feature-card integration-card"><div className="eyebrow">02 · AI connector</div><h2>Choose an approved model</h2><p>Set up a model provider on the server. Keep its credentials private and disclose which service processes a request before enabling user-facing generation.</p><div className="integration-callout">No model provider is currently configured. The site does not claim that AI generation is active.</div></section>
        <section className="feature-card integration-card"><div className="eyebrow">03 · Research provider</div><h2>Use permitted search interfaces</h2><p>Integrate a provider's approved search API or other authorized interface. Respect terms, rate limits, privacy requirements, and robots directives; do not evade access controls.</p><div className="integration-callout">Research remains unavailable until a provider and a secure backend are implemented and configured.</div></section>
      </div>
      <section className="integration-steps"><div className="eyebrow">Before enabling a connection</div><h2>Security checklist</h2><ul><li>Allowlist trusted provider hosts and validate redirects and DNS results.</li><li>Block localhost, private-network, and link-local destinations to prevent SSRF.</li><li>Use request timeouts, response-size limits, rate limits, and minimal data retention.</li><li>Treat fetched pages and tool output as untrusted content; never execute embedded scripts or instructions.</li><li>Show users when a provider is unconfigured, unavailable, or not health-checked.</li></ul></section>
    </main>
  )
}
