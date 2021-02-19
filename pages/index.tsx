import Head from 'next/head'
import MainBanner from 'components/HomePage/MainBanner'
import PostList from 'components/HomePage/PostList/PostList'
import SideBar from 'components/Layout/SideBar'
import { getPosts } from './api/posts'
import styles from 'styles/Home.module.scss'

// Fetch fresh posts
export const getStaticProps = async ({ params }) => {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
  }
}

const Home = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptohash | Ethereum, Bitcoin a jiné krypto</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <MainBanner />
        <div className="container">
          <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="row">
              <PostList />
              <SideBar />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
