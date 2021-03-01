import Head from 'next/head'
import {GetServerSideProps} from 'next'
import {useEffect, useState} from "react"
import {PostOrPage} from "@tryghost/content-api"

import {getPosts} from "pages/api/posts"
import HashPost from "components/Hashovky/HashPost"
import ImportantHashPost from "components/Hashovky/ImportantHashPost"


export const POSTS_ON_PAGE_LIMIT = 15

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query} = context

  const page = Number(query?.page) || 1

  const posts = await getPosts({
    limit: POSTS_ON_PAGE_LIMIT,
    page,
    include: ['tags'],
    filter: 'tag:hashovka'
  })

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {posts}, // will be passed to the page component as props
  }
}

const _hashovky = (hashovky?: PostOrPage[]) => (
  <div className="post-medium-block axil-single-widget">
    <h4 className="widget-title">Poslední novinky</h4>
    {hashovky?.map((hashovka, i) => (
      <HashPost
        meta_title={hashovka.meta_title || ''}
        meta_description={hashovka.meta_description || ''}
        feature_image={hashovka.feature_image || ''}
        html={hashovka.html || ''}
        published_at={hashovka.published_at || ''}
      />
    ))}
  </div>
)

const _topHashovky = (hashovky?: PostOrPage[]) => (
  <div className="axil-single-widget widget widget_postlist mb--30">
    <h4 className="widget-title">Nejdůležitější novinky</h4>
    {hashovky
      ? hashovky.map((hashovka, i) => {
        if (hashovka.tags?.map(tag => tag.name).includes("hashovka-important")) {
          return <ImportantHashPost
            key={i}
            meta_title={hashovka.meta_title || ''}
            meta_description={hashovka.meta_description || ''}
            feature_image={hashovka.feature_image || ''}
            html={hashovka.html || ''}
            published_at={hashovka.published_at || ''}
          />
        }
      })
      : <p>Nejsou k dispozici žádné hashovky</p>
    }
  </div>
)

const Hashovky = ({posts}: { posts?: PostOrPage[] }) => {
  const [postsState, setPostsState] = useState<PostOrPage[]>([])
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {
    if (!posts) return
    setPostsState([...postsState, ...posts])
    console.log(posts)
    setNextPage(nextPage + 1)
  }, [posts])

  return (
    <div>
      <Head>
        <title>Cryptohash | Ethereum, Bitcoin a jiné krypto</title>
        <link rel="icon" type="image/png" href="/favicon.png"/>
      </Head>

      <main className="mt--150">
        <div className="container">
          <h1>#Hashovky</h1>
          <p>Krátké novinky ze světa kryptoměn. Buďte o důležitých novinkách informováni jako první.</p>
          <div className="row">
            <div className="col-lg-5 col-xl-5 axil-post-list-area post-listview-visible-color bg-color-white">
              {_hashovky(posts)}
            </div>
            <div className="col-lg-7 col-xl-7 mt_md--40 mt_sm--40">
              <div className="sidebar-inner">
                {_topHashovky(posts)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hashovky