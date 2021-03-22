import { getPosts, getSinglePost } from 'pages/api/posts'
import { useEffect, useState } from 'react'

import Article from 'components/Article/Article'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { PostOrPage } from '@tryghost/content-api'
import React from 'react'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import { useMenuData } from 'context/SessionContext'

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
      notFound: true,
    }
  }
  const articlePost = await getSinglePost(postId)

  if (!articlePost) {
    return {
      notFound: true,
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

export default function Novinka({
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
      </Head>
      <Article
        articleData={articleData}
        moreStories={moreStories}
        hashovky={hashovky}
        fromPage={'novinky/'}
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
