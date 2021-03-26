import { GhostContentAPIOptions, Params } from 'tryghost__content-api'

import { api } from './init'

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
  try {
    const post = await api.posts.read(
      {
        slug: postSlug,
      },
      { include: ['count.posts', 'authors'] },
    )
    return post;
  } catch (error) {
    console.error('getSinglePost error', error)
    return null;
  }
}
