import { getPosts, getSinglePost } from 'pages/api/posts'

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
    filter: `id:-${articlePost.id}`,
    include: ['tags', 'authors'],
  })

  return {
    props: { articlePost, moreStories: moreStories || null }, // will be passed to the page component as props
  }
}

export default function Novinka({
  articlePost,
  moreStories,
}: {
  articlePost?: PostOrPage
  moreStories?: PostOrPage[]
}) {
  const articleData = articlePost

  if (!articleData) return null

  return (
    <Article articleData={articleData} moreStories={moreStories}>
      <h1>{articleData.title}</h1>
      {articleData.html && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: articleData.html }}
        ></div>
      )}
    </Article>
  )
}
