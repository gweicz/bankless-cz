import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faTwitter, faInstagram, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faBars, faAngleUp, faLink, faGlobe } from '@fortawesome/free-solid-svg-icons'

import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import BackToTop from "components/Layout/BackToTop";

import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import 'styles/globals.scss'

import {useState} from "react"

library.add(
  faSearch, faBars, faLink, faAngleUp, faGlobe,
  fab, faFacebookF, faTwitter, faInstagram, faDiscord, faReddit
);

function MyApp({ Component, pageProps }) {

  //coingacko api for prices
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const [btc_price, setBtcPrice] = useState(0);
const [eth_price, setEthPrice] = useState(0);
const [dot_price, setDotPrice] = useState(0);

setInterval(async function() {    
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
}, 1000);

  return (
    <>
      <Header btc_price={btc_price} eth_price={eth_price} dot_price={dot_price}/>
      <Component {...pageProps} />
      <Footer />
      <BackToTop />
    </>
  )
}

export default MyApp
