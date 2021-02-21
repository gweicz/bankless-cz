export interface ArticleTypes {
  detailUrl: string
  frontImg: {
    url: string
    alt: string
  }
  category: string
  title: string
  date: string
  readTime: string
  author: {
    name: string
    img?: {
      url?: string
      alt?: string
    }
    imgSmall?: {
      url?: string
      alt?: string
    }
    description: string
    profileUrl?: string
  }
}
