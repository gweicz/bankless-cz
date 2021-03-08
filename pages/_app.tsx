import 'bootstrap/scss/bootstrap.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'styles/globals.scss'

import {
  faAngleUp,
  faBars,
  faGlobe,
  faLink,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faReddit,
  faTwitter,
  fab,
} from '@fortawesome/free-brands-svg-icons'

import { AppProps } from 'next/app'
import BackToTop from 'components/Layout/BackToTop'
import Footer from 'components/Layout/Footer'
import Header from 'components/Layout/Header'
import SimpleReactLightbox from 'simple-react-lightbox'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react'
import {GetServerSideProps} from "next";
import {getPosts} from "./api/posts";
import {POSTS_ON_PAGE_LIMIT} from "./novinky/polkadot";

library.add(
  faSearch,
  faBars,
  faLink,
  faAngleUp,
  faGlobe,
  fab,
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
  faReddit,
  faTimes,
)

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  const page = Number(query?.page) || 1

  const beginnersBitcoinPosts = await getPosts({
    limit: 5,
    page,
    include: [],
    filter: 'tag:zacatecnici+tag:bitcoin'
  })

  const beginnersEthereumPosts = await getPosts({
    limit: 5,
    page,
    include: [],
    filter: 'tag:zacatecnici+tag:ethereum'
  })

  const beginnersPolkadotPosts = await getPosts({
    limit: 5,
    page,
    include: [],
    filter: 'tag:zacatecnici+tag:polkadot'
  })

  return {
    props: { beginnersBitcoinPosts, beginnersEthereumPosts, beginnersPolkadotPosts }, // will be passed to the page component as props
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  //coingacko api for prices
  const CoinGecko = require('coingecko-api')
  const CoinGeckoClient = new CoinGecko()
  const [btc_price, setBtcPrice] = useState(0)
  const [eth_price, setEthPrice] = useState(0)
  const [dot_price, setDotPrice] = useState(0)

  setInterval(async function () {
    let data = await CoinGeckoClient.simple.price({
      ids: ['bitcoin', 'ethereum', 'polkadot'],
      vs_currencies: ['usd'],
    })
    JSON.stringify(data.data.bitcoin.usd)
    JSON.stringify(data.data.ethereum.usd)
    JSON.stringify(data.data.polkadot.usd)
    setBtcPrice(data.data.bitcoin.usd)
    setEthPrice(data.data.ethereum.usd)
    setDotPrice(data.data.polkadot.usd)
  }, 10000)

  return (
    <SimpleReactLightbox>
      <div id="mobile-menu-show">
        <Header
          btc_price={btc_price}
          eth_price={eth_price}
          dot_price={dot_price}
        />
        <Component {...pageProps} />
        <Footer />
        <BackToTop />
      </div>
    </SimpleReactLightbox>
  )
}

export default MyApp
