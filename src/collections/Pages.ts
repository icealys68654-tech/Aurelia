import type { CollectionConfig } from 'payload'

const publishedOrAuthenticated = ({ req }: { req: any }) => {
  if (req.user) return true
  return { status: { equals: 'published' } }
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'slug', 'status', 'updatedAt'] },
  access: {
    read: publishedOrAuthenticated,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'summary', type: 'textarea' },
    { name: 'content', type: 'richText' },
    { name: 'status', type: 'select', required: true, defaultValue: 'draft', options: [{ label: 'Draft', value: 'draft' }, { label: 'Published', value: 'published' }] },
  ],
}
