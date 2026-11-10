import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'
import { Pages } from './src/collections/Pages'
import { Projects } from './src/collections/Projects'
import { Research } from './src/collections/Research'
import { Users } from './src/collections/Users'
import { SiteSettings } from './src/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: { baseDir: dirname },
  },
  collections: [Users, Pages, Projects, Research],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'replace-this-development-secret-before-deploying-please',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgres://aurelia:aurelia@localhost:5432/aurelia',
    },
  }),
  typescript: { outputFile: path.resolve(dirname, 'src/payload-types.ts') },
})
