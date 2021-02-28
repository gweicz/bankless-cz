import { getPosts, getSinglePost } from 'pages/api/posts'

import Article from 'components/Article/Article'
import { GetServerSideProps } from 'next'
import { PostOrPage } from '@tryghost/content-api'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  let postId

  if (Array.isArray(query?.id)) {
    postId = query?.id[0]
  } else {
    postId = query?.id
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

  return {
    props: { articlePost }, // will be passed to the page component as props
  }
}

export default function Novinka({ articlePost }: { articlePost?: PostOrPage }) {
  const articleData = articlePost

  if (!articleData) return null

  return (
    <Article articleData={articleData}>
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
