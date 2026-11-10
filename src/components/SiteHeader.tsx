import Link from 'next/link'

export function SiteHeader() {
  return <header className="site-header wrap"><Link className="brand" href="/"><span className="brand-mark">✳</span><span>AURELIA</span></Link><nav aria-label="Main navigation"><Link href="/projects">Projects</Link><Link href="/research">Research</Link><Link className="nav-cta" href="/admin">CMS sign in ↗</Link></nav></header>
}
