import { useEffect, useState } from 'react'

export interface ICryptoPrices {
  btcPrice: number
  ethPrice: number
  dotPrice: number
}

export default function CryptoPrices({
  isMobile = true,
}: {
  isMobile: boolean
}) {
  // Coingecko API for fetching crypto prices
  const CoinGecko = require('coingecko-api')
  const CoinGeckoClient = new CoinGecko()

  const [cryptoPrices, setCryptoPrices] = useState<ICryptoPrices>({
    btcPrice: 0,
    ethPrice: 0,
    dotPrice: 0,
  })

  useEffect(() => {
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
    setInterval(() => {
      fetchCryptoPrices()
    }, 30000)

    fetchCryptoPrices()
  }, [])

  const { btcPrice, ethPrice, dotPrice } = cryptoPrices

  const _mobileCryptoPrices = () => (
    <div className="mobile-crypto-prices">
      <div className="mainmenu-wrapper">
        <nav className="mainmenu-nav">
          <ul className="mainmenu">
            <div className="d-flex">
              <img id="bitcoin-price-logo" src="/images/icons/bitcoin.webp" />
              <li>${btcPrice}</li>
            </div>
            <div className="d-flex">
              <img id="ethereum-price-logo" src="/images/icons/ethereum.webp" />
              <li>${ethPrice}</li>
            </div>
            <div className="d-flex">
              <img id="polkadot-price-logo" src="/images/icons/polkadot.webp" />
              <li>${dotPrice}</li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )

  const _cryptoPricesDesktop = () => (
    <div className="col-xl-12 d-none d-xl-block crypto-prices">
      <div className="mainmenu-wrapper">
        <nav className="mainmenu-nav">
          <ul className="mainmenu">
            <img id="bitcoin-price-logo" src="/images/icons/bitcoin.webp" />
            <li>${btcPrice}</li>

            <img id="ethereum-price-logo" src="/images/icons/ethereum.webp" />
            <li>${ethPrice}</li>

            <img id="polkadot-price-logo" src="/images/icons/polkadot.webp" />
            <li>${dotPrice}</li>
          </ul>
        </nav>
      </div>
    </div>
  )

  if (isMobile) {
    return _mobileCryptoPrices()
  } else {
    return _cryptoPricesDesktop()
  }
}
