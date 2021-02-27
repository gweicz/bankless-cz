import { useEffect, useState } from 'react'

import Article from 'components/Article/Article'
import { GetServerSideProps } from 'next'
import { getSinglePost } from 'pages/api/posts'
import { useRouter } from 'next/router'

export default function Novinka() {
  const [articleData, setArticleData] = useState<any>()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!id || Array.isArray(id)) return
    ;(async function () {
      const articlePost = await getSinglePost(id)
      setArticleData(articlePost)
    })()
  }, [id])

  if (!articleData) return null

  return (
    <Article articleData={articleData}>
      <h1>{articleData.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: articleData.html }}
      ></div>
    </Article>
  )
}
