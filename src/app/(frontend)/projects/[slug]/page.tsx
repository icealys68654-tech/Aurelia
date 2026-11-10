import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'
type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const payload = await getPayload({ config }); const result = await payload.find({ collection: 'projects', where: { and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }] }, limit: 1 }); const item = result.docs[0]; return { title: item?.title || 'Project', description: item?.summary || undefined } }
export default async function ProjectPage({ params }: Props) { const { slug } = await params; const payload = await getPayload({ config }); const result = await payload.find({ collection: 'projects', where: { and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }] }, limit: 1 }); const project = result.docs[0]; if (!project) notFound(); return <main className="wrap page-main"><a className="quiet-link" href="/projects">← All projects</a><article className="article"><span className="tag">{project.category || 'Workspace'}</span><h1>{project.title}</h1><p className="article-lead">{project.summary}</p><div className="article-body"><p>This project is managed in the AURELIA CMS. Editors can expand this page with additional project content in the admin dashboard.</p></div></article></main> }
