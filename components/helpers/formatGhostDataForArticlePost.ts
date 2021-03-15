import { PostOrPage, Tag } from '@tryghost/content-api'
import { formatDate } from './formatDate'

export const formatGhostDataForArticlePost = (data: PostOrPage) => {
  const {
    slug,
    feature_image,
    tags,
    title,
    primary_author,
    published_at,
    reading_time,
  } = data || {}

  // const detailUrl = slug ? `novinky/${slug}` : '/'
  let detailUrl = () => {
    if (slug && tags) {
      const tagSlugs = tags.map(tag => tag.slug)
      if (tagSlugs.includes('vzdelani')) {
        return `vzdelani/${slug}`
      } else {
        return `novinky/${slug}`
      }
    } else {
      return '/'
    }
  }
  const category = tags && tags[0].name
  const frontImg = {
    url: feature_image,
    alt: '',
  }
  const author = {
    name: primary_author?.name,
    profileUrl: primary_author?.slug ? `/authors/${primary_author?.slug}` : '/',
    img: {
      url: primary_author?.profile_image,
    },
    description: primary_author?.bio,
    slug: primary_author?.slug,
  }
  const readTime = `${reading_time} minut`
  const date = published_at && formatDate(published_at)

  const formatedGhostData = {
    detailUrl: detailUrl(),
    category,
    frontImg,
    author,
    readTime,
    date,
    title,
    slug,
  }

  return formatedGhostData
}
