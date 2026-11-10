import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata: Metadata = { title: 'Research' }
export const dynamic = 'force-dynamic'
export default async function ResearchPage() { const payload = await getPayload({ config }); const result = await payload.find({ collection: 'research', where: { status: { equals: 'published' } }, limit: 50, sort: '-updatedAt', depth: 0 }); return <main className="wrap page-main"><div className="eyebrow">Explore and collect</div><h1 className="page-title">Research</h1><p className="page-intro">Notes and topics curated in the AURELIA content manager.</p>{result.docs.length ? <div className="research-list">{result.docs.map((note) => <article className="research-item" key={note.id}><div><span className="tag">{note.topic}</span><h2>{note.title}</h2><p>{note.summary}</p></div>{note.sourceUrl ? <a className="quiet-link" href={note.sourceUrl} target="_blank" rel="noreferrer">Source ↗</a> : null}</article>)}</div> : <div className="empty-card">No research notes published yet. Editors can add notes in the <Link href="/admin">CMS dashboard</Link>.</div>}</main> }
