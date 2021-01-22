import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {getPosts} from "./api/posts";

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
        <title>Cryptohash.cz | Magazín o kryptoměnách</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {posts.map(post => (
          <li key={post.id}>{post.title} ({post.published_at})</li>
        ))}
      </main>
    </div>
  )
};

export default Home;
