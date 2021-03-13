import { PostsOrPages } from '@tryghost/content-api'
import { getPosts } from 'pages/api/posts'

type Crypto = 'bitcoin' | 'ethereum' | 'polkadot'
export interface IMenuPosts {
  btcPosts: PostsOrPages | void
  ethPosts: PostsOrPages | void
  dotPosts: PostsOrPages | void
}

const fetchBeginnersCryptoPosts = (crypto: Crypto) =>
  getPosts({
    limit: 5,
    page: 1,
    include: ['tags'],
    filter: `tag:zacatecnici+tag:${crypto}`,
  })

export const fetchMenuPosts = async () => {
  const btcPosts = await fetchBeginnersCryptoPosts('bitcoin')
  const ethPosts = await fetchBeginnersCryptoPosts('ethereum')
  const dotPosts = await fetchBeginnersCryptoPosts('polkadot')

  return {
    btcPosts,
    ethPosts,
    dotPosts,
  }
}
