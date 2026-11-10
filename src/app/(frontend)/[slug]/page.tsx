import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import config from '@payload-config'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: 'Page' }
type Props = { params: Promise<{ slug: string }> }

export default async function ContentPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    where: { and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }] },
    limit: 1,
    depth: 0,
  })
  const page = result.docs[0]
  if (!page) notFound()

  return (
    <main className="wrap page-main">
      <article className="article">
        <div className="eyebrow">AURELIA · JOURNAL</div>
        <h1>{page.title}</h1>
        {page.summary ? <p className="article-lead">{page.summary}</p> : null}
        {page.content ? <div className="richtext"><RichText data={page.content} /></div> : null}
      </article>
    </main>
  )
}
