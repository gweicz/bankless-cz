import React, { useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import MainBanner from 'components/HomePage/MainBanner'
import MetaTags from '../../components/MetaTags/MetaTags'
import { NextSeo } from 'next-seo'
import { POSTS_ON_PAGE_LIMIT } from '../../constants'
import PostList from 'components/HomePage/PostList/PostList'
import { PostOrPage } from '@tryghost/content-api'
import SideBar from 'components/Layout/SideBar'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import { getPosts, getSearchPost } from 'pages/api/posts'
import styles from 'styles/Home.module.scss'
import { useMenuData } from 'context/SessionContext'

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  const page = Number(query?.page) || 1

  const posts = await getPosts({
    limit: POSTS_ON_PAGE_LIMIT,
    page,
    include: ['tags', 'authors'],
    filter: 'tag:novinka',
  })

  const hashovky = await getPosts({
    limit: 5,
    page,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

  const menuPosts = await fetchMenuPosts()
  const searchPosts = await getSearchPost()

  if (!posts) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }

  const postsPagination = posts.meta.pagination

  return {
    props: { posts, hashovky, menuPosts, postsPagination, searchPosts }, // will be passed to the page component as props
  }
}

const NovinkyPolkadot = ({
  posts,
  hashovky,
  menuPosts,
  postsPagination,
  searchPosts
}: {
  posts?: PostOrPage[]
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
  postsPagination?: { [key: string]: number | null }
  searchPosts?: PostOrPage[]
}) => {
  const [postsState, setPostsState] = useState<PostOrPage[]>([])
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])

  const [nextPage, setNextPage] = useState(1)

  useMenuData({menuPosts, searchPosts})

  useEffect(() => {
    if (!posts) return
    setPostsState([...postsState, ...posts])
    setNextPage(nextPage + 1)
  }, [posts])

  useEffect(() => {
    if (!hashovky) return
    setHashovkyState([...hashovkyState, ...hashovky])
  }, [hashovky])

  return (
    <div className={styles.container}>
      <Head>
        <title>Bankless | Novinky</title>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`}
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_KEY}');`,
          }}
        />
      </Head>
      <NextSeo
        title="Bankless | Novinky"
        description="Novinky ze světa kryptoměn!"
        canonical="https://bankless.cz"
        openGraph={{
          url: 'https://bankless.cz',
          title: 'Bankless | Novinky',
          description: 'Novinky ze světa kryptoměn!',
          images: [
            {
              url: 'https://bankless.cz/thumbnail.png',
              width: 960,
              height: 540,
              alt: 'BanklessCZ',
            },
          ],
          site_name: 'Bankless',
        }}
        twitter={{
          handle: '@banklesscz',
          site: '@banklesscz',
          cardType: 'summary_large_image',
        }}
      />
      <main className={styles.main}>
        {postsState.length > 0 && (
          <MainBanner data={postsState?.slice(0, 3) || []} />
        )}
        <div className="container">
          <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="row">
              <PostList
                posts={postsState}
                nextPage={nextPage}
                isLastPage={postsState?.length === postsPagination?.total}
              />
              <SideBar hashovky={hashovkyState} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NovinkyPolkadot
