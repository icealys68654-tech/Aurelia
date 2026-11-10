import type { CollectionConfig } from 'payload'

const publishedOrAuthenticated = ({ req }: { req: any }) => {
  if (req.user) return true
  return { status: { equals: 'published' } }
}

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'category', 'status', 'updatedAt'] },
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
    { name: 'category', type: 'text', defaultValue: 'Workspace' },
    { name: 'summary', type: 'textarea', required: true },
    { name: 'content', type: 'richText' },
    { name: 'status', type: 'select', required: true, defaultValue: 'draft', options: [{ label: 'Draft', value: 'draft' }, { label: 'Published', value: 'published' }] },
  ],
}
