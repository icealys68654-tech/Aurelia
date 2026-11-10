import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata: Metadata = { title: 'Projects' }
export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const payload = await getPayload({ config })
  const result = await payload.find({ collection: 'projects', where: { status: { equals: 'published' } }, limit: 60, sort: '-updatedAt', depth: 0 })
  return <main className="wrap page-main"><div className="eyebrow">Your work</div><h1 className="page-title">Projects</h1><p className="page-intro">A collection of ideas, experiments, and work in progress.</p>{result.docs.length ? <div className="project-grid">{result.docs.map((project) => <Link className="project-card" href={`/projects/${project.slug}`} key={project.id}><span className="tag">{project.category || 'Workspace'}</span><h2>{project.title}</h2><p>{project.summary}</p><span className="quiet-link">Explore project →</span></Link>)}</div> : <div className="empty-card">There are no published projects yet. Editors can publish a project from the <Link href="/admin">CMS dashboard</Link>.</div>}</main>
}
