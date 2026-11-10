import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const [settings, projects] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings', depth: 0 }),
    payload.find({ collection: 'projects', where: { status: { equals: 'published' } }, limit: 3, sort: '-updatedAt', depth: 0 }),
  ])
  const title = settings.homeHeadline || 'Make room for better thinking.'
  return <main className="wrap">
    <section className="hero">
      <div className="hero-copy"><div className="eyebrow"><span className="pulse" />A thoughtful digital workspace</div><h1>{title.split(' ').slice(0, -2).join(' ')} <span>{title.split(' ').slice(-2).join(' ')}</span></h1><p>{settings.homeDescription}</p><div className="hero-actions"><Link className="button primary" href="/projects">{settings.primaryAction || 'Explore the workspace'} <span>→</span></Link><Link className="button" href="/research">Explore research</Link></div></div>
      <aside className="visual" aria-label="AURELIA workspace illustration"><div className="visual-top">A SPACE FOR YOUR IDEAS <span>✳</span></div><div className="visual-orbit"><div className="orbit-core">✳</div><i className="orbit-dot" /></div><div className="visual-bottom"><span>PROJECTS · IDEAS · RESEARCH</span><span>01 / 03</span></div></aside>
    </section>
    <section className="section"><div className="section-heading"><div><div className="eyebrow">A clearer way to work</div><h2>Everything in its place.</h2></div><p>Keep projects, ideas, and research close—inside one calm, focused workspace.</p></div><div className="feature-grid"><article className="feature-card"><span className="feature-icon">▦</span><h3>Projects with purpose</h3><p>Give each idea a home, and keep the context and details easy to find.</p></article><article className="feature-card"><span className="feature-icon">✳</span><h3>A space to think</h3><p>Bring your notes and plans together in a considered, distraction-light interface.</p></article><article className="feature-card"><span className="feature-icon">⌕</span><h3>Research that stays organized</h3><p>Publish useful research notes and keep sources connected to their topics.</p></article></div></section>
    <section className="section published"><div className="section-heading"><div><div className="eyebrow">From the workspace</div><h2>Featured projects</h2></div><Link className="quiet-link" href="/projects">View all projects →</Link></div>{projects.docs.length ? <div className="project-grid">{projects.docs.map((project) => <Link className="project-card" href={`/projects/${project.slug}`} key={project.id}><span className="tag">{project.category || 'Workspace'}</span><h3>{project.title}</h3><p>{project.summary}</p><span className="quiet-link">Read project →</span></Link>)}</div> : <div className="empty-card">No projects published yet. Add and publish projects in the <Link href="/admin">content manager</Link>.</div>}</section>
    <section className="callout"><div><h2>Make your next idea tangible.</h2><p>Browse projects and research curated in the AURELIA content manager.</p></div><Link className="button primary" href="/projects">Visit the workspace ↗</Link></section>
  </main>
}
