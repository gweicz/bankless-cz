import Head from 'next/head'
import { GetServerSideProps } from 'next'
import HashPost from "components/Hashovky/HashPost";

// Fetch fresh posts
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { query } = context
//
//   const page = Number(query?.page) || 1
//
//   const posts = await getPosts({
//     limit: 15,
//     page,
//   })
//
//   if (!posts) {
//     return {
//       notFound: true,
//     }
//   }
//
//   return {
//     props: { posts }, // will be passed to the page component as props
//   }
// }

const _topHashovky = () => (
  <div className="axil-single-widget widget widget_postlist mb--30">
    <h4 className="widget-title">Nejdůležitější novinky</h4>
    {[1, 2, 3].map((i) => (
      <HashPost key={i}/>
    ))}
  </div>
)

const Home = ({ posts }: { posts?: any }) => {
  return (
    <div>
      <Head>
        <title>Cryptohash | Ethereum, Bitcoin a jiné krypto</title>
        <link rel="icon" type="image/png" href="/favicon.png"/>
      </Head>

      <main className="mt--150">
        <div className="container">
          <h1>#Hashovky</h1>
          <p>Krátké novinky ze světa kryptoměn. Buďte o důležitých novinkách informování hned.</p>
          <div className="row">
            <div className="col-lg-5 col-xl-5 axil-post-list-area post-listview-visible-color bg-color-white">
              <div className="post-medium-block axil-single-widget">
                <h4 className="widget-title">Poslední novinky</h4>
                <div className="content-block post-medium mb--20">
                  <div className="post-content hash-news">
                    <p className="hash-content">
                      Metamask: "Pokud máte problém s odesíláním transakcí v naší
                      mobilní aplikaci, zkuste se přepnout na jinou síť a po té zase
                      zpět".
                      <a href="https://twitter.com/metamask_io/status/1353118291959529472?s=20">
                        Zdroj
                      </a>
                    </p>
                    <div className="post-meta hash-meta">
                      <ul className="post-meta-list">
                        <li>10:07</li>
                        <li>Led 24, 2021</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content-block post-medium mb--20">
                  <div className="post-content hash-news">
                    <p className="hash-content">
                      Podle Coingecko tržní kapitalizace DeFi narostla mezi roky 2020 a
                      2021 o 41 miliard dolarů.
                      <a href="https://twitter.com/coingecko/status/1353206035763392512?s=20">
                        Zdroj
                      </a>
                    </p>
                    <div className="post-meta hash-meta">
                      <ul className="post-meta-list">
                        <li>10:07</li>
                        <li>Led 24, 2021</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7 mt_md--40 mt_sm--40">
              <div className="sidebar-inner">
                {_topHashovky()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home