import { GetServerSideProps, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import MainBanner from 'components/HomePage/MainBanner'
import PostList from 'components/HomePage/PostList/PostList'
import { PostOrPage } from '@tryghost/content-api'
import SideBar from 'components/Layout/SideBar'
import { getPosts } from './api/posts'
import styles from 'styles/Home.module.scss'

const PAGE_LIMIT = 5

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  console.log('query: ', query)
  const page = Number(query?.page) || 1
  console.log('page: ', page)

  const posts = await getPosts({
    limit: PAGE_LIMIT,
    page,
    include: ['tags', 'authors'],
  })

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }, // will be passed to the page component as props
  }
}

// export const getStaticProps = async (context: any) => {
//   console.log('context: ', context)
//   const posts = await getPosts({
//     limit: 3,
//     page: 1,
//     include: ['tags', 'authors'],
//   })

//   if (!posts) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { posts },
//   }
// }

const Home = ({ posts }: { posts?: PostOrPage[] }) => {
  const [postsState, setPostsState] = useState<PostOrPage[]>([])
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {
    if (!posts) return
    setPostsState([...postsState, ...posts])
    setNextPage(nextPage + 1)
  }, [posts])

  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptohash | Ethereum, Bitcoin a jiné krypto</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        {postsState && <MainBanner data={postsState?.slice(0, 3) || []} />}
        <div className="container">
          <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="row">
              <PostList
                posts={postsState}
                nextPage={nextPage}
                isLastPage={posts?.length !== PAGE_LIMIT}
              />
              <SideBar />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
