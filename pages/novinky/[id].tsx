import Article from 'components/Article/Article'
import { GetServerSideProps } from 'next'
import { PostOrPage } from '@tryghost/content-api'
import { getSinglePost } from 'pages/api/posts'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  let postId

  if (Array.isArray(query?.postId)) {
    postId = query?.postId[0]
  } else {
    postId = query?.postId
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
