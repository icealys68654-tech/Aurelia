import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ResearchWorkbench } from '@/components/ResearchWorkbench'

export const metadata: Metadata = { title: 'Research' }
export const dynamic = 'force-dynamic'

export default async function ResearchPage() {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'research',
    where: { status: { equals: 'published' } },
    limit: 50,
    sort: '-updatedAt',
    depth: 0,
  })

  return (
    <main className="wrap page-main">
      <div className="eyebrow">Explore and collect</div>
      <h1 className="page-title">Research</h1>
      <p className="page-intro">A source-aware research workflow, with published notes curated in the AURELIA content manager.</p>
      <ResearchWorkbench />
      <section className="research-published">
        <div className="section-heading"><div><div className="eyebrow">From the library</div><h2>Published notes</h2></div></div>
        {result.docs.length ? (
          <div className="research-list">
            {result.docs.map((note) => (
              <article className="research-item" key={note.id}>
                <div><span className="tag">{note.topic}</span><h2>{note.title}</h2><p>{note.summary}</p></div>
                {note.sourceUrl ? <a className="quiet-link" href={note.sourceUrl} target="_blank" rel="noreferrer">Source ↗</a> : null}
              </article>
            ))}
          </div>
        ) : <div className="empty-card">No research notes published yet. Editors can add notes in the <a href="/admin">content manager</a>.</div>}
      </section>
    </main>
  )
}
