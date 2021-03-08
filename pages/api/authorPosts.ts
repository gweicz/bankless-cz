import { api } from './init'

export const getAuthorInfo = async (username: string) => {
    return await api.authors
      .read(
          {slug: username
        })
  }

export const getAuthorPosts = async (username: string) => {
    return await api.posts
      .browse(
          {filter: 'primary_author:' + username,
          include: 'tags'
        })
  }