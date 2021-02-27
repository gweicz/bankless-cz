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

export const POSTS_ON_PAGE_LIMIT = 15

// Fetch posts
export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts({
    limit: POSTS_ON_PAGE_LIMIT,
    page: 1,
    include: ['tags', 'authors'],
  })

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }, // will be passed to the this page component as props
  }
}

const Home = ({ posts }: { posts?: PostOrPage[] }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptohash | Ethereum, Bitcoin a jiné krypto</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        {posts && <MainBanner data={posts?.slice(0, 3) || []} />}
        <div className="container">
          <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="row">
              {posts && <PostList posts={posts.slice(3)} />}
              <SideBar />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
