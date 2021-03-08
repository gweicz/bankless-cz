import { getPosts, getSinglePost } from 'pages/api/posts'
import { useEffect, useState } from 'react'

import Article from 'components/Article/Article'
import { GetServerSideProps } from 'next'
import { PostOrPage } from '@tryghost/content-api'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  console.log('query: ', query)
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
    props: { articlePost, moreStories: moreStories || null, hashovky }, // will be passed to the page component as props
  }
}

export default function Novinka({
  articlePost,
  moreStories,
  hashovky,
}: {
  articlePost?: PostOrPage
  moreStories?: PostOrPage[]
  hashovky?: PostOrPage[]
}) {
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])
  const articleData = articlePost

  useEffect(() => {
    if (!hashovky) return
    setHashovkyState([...hashovkyState, ...hashovky])
    console.log(hashovky)
  }, [hashovky])

  if (!articleData) return null

  return (
    <Article
      articleData={articleData}
      moreStories={moreStories}
      hashovky={hashovky}
    >
      {articleData.html && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: articleData.html }}
        ></div>
      )}
    </Article>
  )
}
