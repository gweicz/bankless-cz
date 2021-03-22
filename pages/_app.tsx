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
import { useEffect, useState } from 'react'

import { AppProps } from 'next/dist/next-server/lib/router/router'
import BackToTop from 'components/Layout/BackToTop'
import Footer from 'components/Layout/Footer'
import Header from 'components/Layout/Header'
import { SessionContextProvider } from 'context/SessionContext'
import SimpleReactLightbox from 'simple-react-lightbox'
import { library } from '@fortawesome/fontawesome-svg-core'

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

export interface ICryptoPrices {
  btcPrice: number
  ethPrice: number
  dotPrice: number
}

function MyApp({ Component, pageProps }: AppProps) {
  // Coingecko API for fetching crypto prices
  const CoinGecko = require('coingecko-api')
  const CoinGeckoClient = new CoinGecko()

  const [cryptoPrices, setCryptoPrices] = useState<ICryptoPrices>({
    btcPrice: 0,
    ethPrice: 0,
    dotPrice: 0,
  })

  const fetchCryptoPrices = async () => {
    let { data } = await CoinGeckoClient.simple.price({
      ids: ['bitcoin', 'ethereum', 'polkadot'],
      vs_currencies: ['usd'],
    })

    setCryptoPrices({
      btcPrice: data.bitcoin.usd,
      ethPrice: data.ethereum.usd,
      dotPrice: data.polkadot.usd,
    })
  }

  useEffect(() => {
    fetchCryptoPrices()
  })

  return (
    <SessionContextProvider>
      <SimpleReactLightbox>
        <div id="mobile-menu-show">
          <Header cryptoPrices={cryptoPrices} />
          <Component {...pageProps} />
          <Footer />
          <BackToTop />
        </div>
      </SimpleReactLightbox>
    </SessionContextProvider>
  )
}

export default MyApp
