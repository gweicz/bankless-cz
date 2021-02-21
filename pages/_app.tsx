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
import { useContext } from 'react'

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SimpleReactLightbox>
      <div id="mobile-menu-show">
        <Header />
        <Component {...pageProps} />
        <Footer />
        <BackToTop />
      </div>
    </SimpleReactLightbox>
  )
}

export default MyApp
