import { getPosts, getSinglePost } from 'pages/api/posts'
import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Article from 'components/Article/Article'
import { GetServerSideProps } from 'next'
import { PostOrPage } from '@tryghost/content-api'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import { useMenuData } from 'context/SessionContext'
import MetaTags from "../../components/MetaTags/MetaTags";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  let postId

  if (Array.isArray(query.id)) {
    postId = query.id[0]
  } else {
    postId = query.id
  }

  const hashovky = await getPosts({
    limit: 5,
    page: 1,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

  const menuPosts = await fetchMenuPosts()

  if (!postId) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }
  const articlePost = await getSinglePost(postId)

  if (!articlePost) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }

  const moreStories = await getPosts({
    limit: 4,
    page: 1,
    filter: `id:-${articlePost.id}+tag:-hashovka`,
    include: ['tags', 'authors'],
  })

  return {
    props: {
      articlePost,
      moreStories: moreStories || null,
      hashovky,
      menuPosts,
    }, // will be passed to the page component as props
  }
}

export default function ZacatecniciArticleDetail({
  articlePost,
  moreStories,
  hashovky,
  menuPosts,
}: {
  articlePost?: PostOrPage
  moreStories?: PostOrPage[]
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
}) {
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])
  const articleData = articlePost

  useMenuData({ menuPosts })

  useEffect(() => {
    if (!hashovky) return
    setHashovkyState([...hashovkyState, ...hashovky])
  }, [hashovky])

  if (!articleData) return null

  return (
  <div>
    <Head>
      <title>Bankless | {articleData.title}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />

      <MetaTags
        meta_title={articlePost?.meta_title}
        meta_description={articlePost?.meta_description}
        og_title={articlePost?.og_title}
        og_image={articlePost?.og_image}
        og_description={articlePost?.og_description}
        twitter_title={articlePost?.twitter_title}
        twitter_image={articlePost?.twitter_image}
        twitter_description={articlePost?.twitter_description}
      />

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
    <Article
      articleData={articleData}
      moreStories={moreStories}
      hashovky={hashovky}
      fromPage={'studium/'}
    >
      {articleData.html && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: articleData.html }}
        ></div>
      )}
    </Article>
  </div>
  )
}
