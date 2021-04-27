import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import MainBanner from '../../../components/HomePage/MainBanner'
import MetaTags from '../../../components/MetaTags/MetaTags'
import PostList from '../../../components/HomePage/PostList/PostList'
import { PostOrPage } from '@tryghost/content-api'
import SideBar from '../../../components/Layout/SideBar'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import { getPosts } from '../../api/posts'
import styles from '../../../styles/Home.module.scss'
import { useMenuData } from 'context/SessionContext'
import {NextSeo} from "next-seo";
import google from 'utils/google'

export const POSTS_ON_PAGE_LIMIT = 15

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  const page = Number(query?.page) || 1

  const posts = await getPosts({
    limit: POSTS_ON_PAGE_LIMIT,
    page,
    include: ['tags', 'authors'],
    filter: 'tag:vzdelani+tag:ostatni,tag:studium+tag:ostatni',
  })

  const hashovky = await getPosts({
    limit: 5,
    page,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

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
    props: { posts, hashovky, menuPosts }, // will be passed to the page component as props
  }
}

const ZacatecniciOstatni = ({
  posts,
  hashovky,
  menuPosts,
  isCoockiesEnabled
}: {
  posts?: PostOrPage[]
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
  isCoockiesEnabled: boolean
}) => {
  const [postsState, setPostsState] = useState<PostOrPage[]>([])
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])

  const [nextPage, setNextPage] = useState(1)

  useMenuData({ menuPosts })

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
        <title>Bankless | kryptoměny pro začátečníky</title>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <base target="_blank" />
        {google(isCoockiesEnabled)}
      </Head>
      <NextSeo
        title="Bankless | Kryptoměny pro začátečníky"
        description="Pochopte teoretické základy kryptoměn s našimi studijními články"
        canonical="https://bankless.cz/studium/ostatni"
        openGraph={{
          url: 'https://bankless.cz/studium/studium/ostatni',
          title: "Bankless | Kryptoměny pro začátečníky",
          description: "Pochopte teoretické základy kryptoměn s našimi studijními články",
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
              <SideBar hashovky={hashovkyState} topTab="studium" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ZacatecniciOstatni
