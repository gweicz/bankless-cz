import { PostsOrPages } from '@tryghost/content-api'
import { getPosts } from 'pages/api/posts'

type Crypto = 'bitcoin' | 'ethereum' | 'polkadot' | 'ostatni'
export interface IMenuPosts {
  btcPostsBegginer: PostsOrPages | void
  ethPostsBegginer: PostsOrPages | void
  dotPostsBegginer: PostsOrPages | void
  ostatniPostsBegginer: PostsOrPages | void

  btcPosts: PostsOrPages | void
  ethPosts: PostsOrPages | void
  dotPosts: PostsOrPages | void
  ostatniPosts: PostsOrPages | void
}

const fetchBeginnersCryptoPosts = (crypto: Crypto) =>
  getPosts({
    limit: 5,
    page: 1,
    include: ['tags'],
    filter: `tag:vzdelani+tag:${crypto},tag:studium+tag:${crypto}`,
  })

const fetchCryptoPosts = (crypto: Crypto) =>
  getPosts({
    limit: 5,
    page: 1,
    include: ['tags'],
    filter: `tag:${crypto}`,
  })

export const fetchMenuPosts = async () => {
  const btcPostsBegginer = await fetchBeginnersCryptoPosts('bitcoin')
  const ethPostsBegginer = await fetchBeginnersCryptoPosts('ethereum')
  const dotPostsBegginer = await fetchBeginnersCryptoPosts('polkadot')
  const ostatniPostsBegginer = await fetchBeginnersCryptoPosts('ostatni')

  const btcPosts = await fetchCryptoPosts('bitcoin')
  const ethPosts = await fetchCryptoPosts('ethereum')
  const dotPosts = await fetchCryptoPosts('polkadot')
  const ostatniPosts = await fetchCryptoPosts('ostatni')
  return {
    btcPosts,
    ethPosts,
    dotPosts,
    ostatniPosts,
    btcPostsBegginer,
    ethPostsBegginer,
    dotPostsBegginer,
    ostatniPostsBegginer,
  }
}
