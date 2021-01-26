import Head from 'next/head'

import {getPosts} from "./api/posts";
import MainBanner from "components/HomePage/MainBanner";
import PostList from "components/HomePage/PostList/PostList";

import styles from 'styles/Home.module.scss'


export const getStaticProps = async ({ params }) => {

  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
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
        <PostList />
      </main>
    </div>
  )
};

export default Home;
