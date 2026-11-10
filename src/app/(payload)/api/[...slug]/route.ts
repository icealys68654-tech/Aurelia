import config from '@payload-config'
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import type { REST_ARGS } from '@payloadcms/next/routes'

export const GET = (args: REST_ARGS) => REST_GET(config)(args)
export const POST = (args: REST_ARGS) => REST_POST(config)(args)
export const DELETE = (args: REST_ARGS) => REST_DELETE(config)(args)
export const PATCH = (args: REST_ARGS) => REST_PATCH(config)(args)
export const PUT = (args: REST_ARGS) => REST_PUT(config)(args)
export const OPTIONS = (args: REST_ARGS) => REST_OPTIONS(config)(args)
