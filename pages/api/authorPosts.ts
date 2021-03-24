import { api } from './init'

export const getAuthorInfo = async (username: string) => {
  try {
    const author = await api.authors.read({ slug: username })
    return author
  } catch (error) {
    console.error('getAuthorPosts error', error)
    return null
  }
}

export const getAuthorPosts = async (username: string) => {
  try {
    const authorPosts = await api.posts.browse({
      filter: 'primary_author:' + username,
      include: 'tags',
    })
    return authorPosts
  } catch (error) {
    console.error('getAuthorPosts error', error)
    return null
  }
}
