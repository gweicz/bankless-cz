import GhostContentAPI from '@tryghost/content-api'
import { GhostContentAPIOptions } from 'tryghost__content-api'

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: process.env.GHOST_URL || '',
  key: process.env.GHOST_CONTENT_API_KEY || '',
  version: process.env.GHOST_API_VERSION as GhostContentAPIOptions['version'],
})
