import { GhostContentAPIOptions } from 'tryghost__content-api'
import { api } from './init'
// Create API instance with site credentials

export const getPosts = async () => {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}
