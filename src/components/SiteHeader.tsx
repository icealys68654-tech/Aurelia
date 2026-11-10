import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="site-header wrap">
      <Link className="brand" href="/" aria-label="AURELIA home"><span className="brand-mark" aria-hidden="true">✳</span><span>AURELIA</span></Link>
      <nav aria-label="Main navigation"><Link href="/projects">Projects</Link><Link href="/research">Research</Link><Link href="/integrations">Integrations</Link><Link className="nav-cta" href="/admin">CMS sign in ↗</Link></nav>
    </header>
  )
}
