import { Author, PostOrPage } from '@tryghost/content-api'
import React, { useEffect, useState } from 'react'
import { getAuthorInfo, getAuthorPosts } from 'pages/api/authorPosts'

import AuthorDetail from 'components/AuthorDetail/AuthorDetail'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import MetaTags from '../../components/MetaTags/MetaTags'
import { NextSeo } from 'next-seo'
import { POSTS_ON_PAGE_LIMIT } from '../../constants'
import PostList from '../../components/HomePage/PostList/PostList'
import SideBar from 'components/Layout/SideBar'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import { getPosts } from 'pages/api/posts'
import { useMenuData } from 'context/SessionContext'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  let username: any = query.username
  const page = Number(query?.page) || 1
  const author = await getAuthorInfo(username)

  const author_posts = await getPosts({
    limit: POSTS_ON_PAGE_LIMIT,
    page,
    include: ['tags', 'authors'],
    filter: `primary_author:${username}+tag:-hashovka`,
  })

  const hashovky = await getPosts({
    limit: 5,
    page,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

  const menuPosts = await fetchMenuPosts()

  if (!author_posts) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }
  if (!author) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }

  const posts = author_posts
  const postsPagination = posts.meta.pagination

  return { props: { author, posts, hashovky, menuPosts, postsPagination } }
}

const AuthorDetailPage = ({
  author,
  posts,
  hashovky,
  menuPosts,
  postsPagination,
}: {
  author?: Author
  posts?: PostOrPage[]
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
  postsPagination?: { [key: string]: number | null }
}) => {
  if (!author) return null
  if (!posts) return null

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
    <div>
      <Head>
        <title>Bankless | @{author.name}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <base target="_blank" />
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
        title={`Bankless | @${author.name}`}
        description={`Bankless | @${author.name} autor na webu bankless.cz`}
        canonical={`https://bankless.cz/authors/${author.name}`}
        openGraph={{
          url: `https://bankless.cz/authors/${author.name}`,
          title: `Bankless | @${author.name}`,
          description: `Bankless | @${author.name} autor na webu bankless.cz`,
          images: [
            {
              url: author.profile_image || 'https://bankless.cz/thumbnail.png',
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

      <AuthorDetail author={author} />

      <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
        <div className="container" style={{ maxWidth: '1280px' }}>
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
    </div>
  )
}

export default AuthorDetailPage
