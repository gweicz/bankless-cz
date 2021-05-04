import React, {useEffect, useState} from 'react'

import {GetServerSideProps} from 'next'
import Head from 'next/head'
import MainBanner from 'components/HomePage/MainBanner'
import PostList from 'components/HomePage/PostList/PostList'
import {PostOrPage} from '@tryghost/content-api'
import SideBar from 'components/Layout/SideBar'
import {fetchMenuPosts} from 'utils/fetchMenuPosts'
import {getPosts, getSearchPost} from './api/posts'
import styles from 'styles/Home.module.scss'
import {useMenuData} from 'context/SessionContext'
import MetaTags from "../components/MetaTags/MetaTags";
import { NextSeo } from 'next-seo';

export const POSTS_ON_PAGE_LIMIT = 15

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query} = context

  const page = Number(query?.page) || 1

  const posts = await getPosts({
    limit: POSTS_ON_PAGE_LIMIT,
    page,
    include: ['tags', 'authors'],
    filter: 'tag:-hashovka',
  })

  const hashovky = await getPosts({
    limit: 5,
    page,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

  const searchPosts = await getSearchPost()

  const menuPosts = await fetchMenuPosts()

  if (!posts) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }

  return {
    props: {posts, hashovky, menuPosts, searchPosts}, // will be passed to the page component as props
  }
}

const Home = ({
                posts,
                hashovky,
                menuPosts,
                searchPosts
              }: {
  posts?: PostOrPage[]
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
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
        <title>Bankless | Novinkový a vzdělávací web o kryptoměnách</title>
        <link rel="icon" type="image/png" href="/favicon.png"/>

        <base target="_blank"/>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`}></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_KEY}');`
          }}
        />
      </Head>
      <NextSeo
        title="Bankless | Novinkový a vzdělávací web o kryptoměnách"
        description="Novinkový a vzdělávací web o kryptoměnách, který vám každý den přináší zajímavosti z krypto světa."
        canonical="https://bankless.cz"
        openGraph={{
          url: 'https://bankless.cz',
          title: "Bankless | Novinkový a vzdělávací web o kryptoměnách",
          description: "Novinkový a vzdělávací web o kryptoměnách, který vám každý den přináší zajímavosti z krypto světa.",
          images: [
            {
              url: "https://bankless.cz/thumbnail.png",
              width: 960,
              height: 540,
              alt: 'BanklessCZ',
            }
          ],
          site_name: 'Bankless',
        }}
        twitter={{
          handle: '@banklesscz',
          site: '@banklesscz',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          { property: 'twitter:domain', content: 'bankless.cz' },
          { property: 'twitter:url', content: 'https://bankless.cz/' },
          { name: 'twitter:title', content: 'Bankless | Novinkový a vzdělávací web o kryptoměnách' },
          { name: 'twitter:description', content: 'Novinkový a vzdělávací web o kryptoměnách, který vám každý den přináší zajímavosti z krypto světa.' },
          { name: 'twitter:image', content: 'https://bankless.cz/thumbnail.png' }
        ]}
      />
      <main className={styles.main}>
        {postsState && <MainBanner data={postsState?.slice(0, 3) || []} />}
        <div className="container">
          <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="row">
              <PostList
                posts={postsState}
                nextPage={nextPage}
                isLastPage={posts?.length !== POSTS_ON_PAGE_LIMIT}
              />
              <SideBar hashovky={hashovkyState}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
