import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faTwitter, faInstagram, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faBars, faAngleUp, faLink, faGlobe } from '@fortawesome/free-solid-svg-icons'

import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import BackToTop from "components/Layout/BackToTop";

import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import 'styles/globals.scss'


library.add(
  faSearch, faBars, faLink, faAngleUp, faGlobe,
  fab, faFacebookF, faTwitter, faInstagram, faDiscord, faReddit
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <BackToTop />
    </>
  )
}

export default MyApp
