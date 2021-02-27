import { GhostContentAPIOptions, Params } from 'tryghost__content-api'

import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL || '',
  key: process.env.GHOST_CONTENT_API_KEY || '',
  version: process.env.GHOST_API_VERSION as GhostContentAPIOptions['version'],
})

export const getPosts = async ({
  include,
  limit,
  page,
  fields,
  formats,
  filter,
  order = 'published_at DESC',
}: Params) => {
  return await api.posts
    .browse({
      include,
      fields,
      formats,
      filter,
      limit,
      page,
      order,
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      { include: 'count.posts' },
    )
    .catch((err) => {
      console.error(err)
    })
}
