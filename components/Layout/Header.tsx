import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Megamenu from 'components/Megamenu/Megamenu'
import style from './Header.module.scss'

const Header = (props: any) => {
  const hamburgerOnClick = () => {
    const mobilePopupMenu = document.getElementById('mobile-menu-show')
    mobilePopupMenu?.classList.toggle('popup-mobile-menu-show')
  }

  const closeMobileMenu = () => {
    const mobilePopupMenu = document.getElementById('mobile-menu-show')
    mobilePopupMenu?.classList.toggle('popup-mobile-menu-show')
  }

  const _logo = () => (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
      <div className="logo">
        <Link href="/">
          <a>
            <img
              className="dark-logo"
              src="/images/logo/logo_black_final.png"
              alt="Cryptohash logo"
            />
            <img
              className="light-logo"
              src="/images/logo/logo_white_final.png"
              alt="Cryptohash logo"
            />
          </a>
        </Link>
      </div>
    </div>
  )

  const _mobilePopupMenu = () => (
    <div className="popup-mobilemenu-area">
      <div className="inner">
        <div className="mobile-menu-top">
          <div className="logo w-50">
            <Link href="/">
              <a>
                <img
                  className="dark-logo"
                  src="/images/logo/logo_black_final.png"
                  alt="Cryptohash logo"
                />
                <img
                  className="light-logo"
                  src="/images/logo/logo_white_final.png"
                  alt="Cryptohash logo"
                />
              </a>
            </Link>
          </div>
          <div className="mobile-close" onClick={closeMobileMenu}>
            <FontAwesomeIcon icon="times" />
          </div>
        </div>
        <ul className="mainmenu list-unstyled">
          <Link href="/">
            <li onClick={closeMobileMenu}>
              <a>Novinky</a>
            </li>
          </Link>
          <Link href="/hashovky/">
            <li onClick={closeMobileMenu}>
              <a>#Hashovky</a>
            </li>
          </Link>

          <Link href="#">
            <li onClick={closeMobileMenu}>
              <a>Začátečníci</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className={style.closeMobileMenu} onClick={closeMobileMenu} />
    </div>
  )

  const _hamburgerMenu = () => (
    <div
      onClick={hamburgerOnClick}
      className="hamburger-menu d-block d-xl-none"
    >
      <div className="hamburger-inner">
        <div className="icon">
          <FontAwesomeIcon icon="bars" />
        </div>
      </div>
    </div>
  )

  const _cryptoPrices = () => (
    <div className="col-xl-12 d-none d-xl-block crypto-prices">
      <div className="mainmenu-wrapper">
        <nav className="mainmenu-nav">
          <ul className="mainmenu">
            <img id="bitcoin-price-logo" src="/images/icons/bitcoin.webp" />
            <li>${props.btc_price}</li>

            <img id="ethereum-price-logo" src="/images/icons/ethereum.webp" />
            <li>${props.eth_price}</li>

            <img id="polkadot-price-logo" src="/images/icons/polkadot.webp" />
            <li>${props.dot_price}</li>
          </ul>
        </nav>
      </div>
    </div>
  )

  const _mobileCryptoPrices = () => (
    <div className="mobile-crypto-prices">
      <div className="mainmenu-wrapper">
        <nav className="mainmenu-nav">
          <ul className="mainmenu">
            <img id="bitcoin-price-logo" src="/images/icons/bitcoin.webp" />
            <li>${props.btc_price}</li>

            <img id="ethereum-price-logo" src="/images/icons/ethereum.webp" />
            <li>${props.eth_price}</li>

            <img id="polkadot-price-logo" src="/images/icons/polkadot.webp" />
            <li>${props.dot_price}</li>
          </ul>
        </nav>
      </div>
    </div>
  )

  const _mainMenu = () => (
    <div className="mainmenu-wrapper">
      <nav className="mainmenu-nav">
        <ul className="mainmenu">
          <li>
            <Link href="/">
              <a>Novinky</a>
            </Link>
          </li>
          <li>
            <Link href="/hashovky/">#Hashovky</Link>
          </li>

          <Megamenu menuTitle="Začátečníci" />
        </ul>
      </nav>
    </div>
  )

  return (
    <>
      <header className="header axil-header  header-light header-sticky ">
        <div className="header-wrap">
          <div className="row justify-content-between align-items-center">
            {_logo()}

            <div className="col-xl-6 d-none d-xl-block">{_mainMenu()}</div>

            <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
              <div className="header-search text-right d-flex align-items-center justify-content-end">
                {_mobileCryptoPrices()}
                {_hamburgerMenu()}
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            {_cryptoPrices()}
          </div>
        </div>
      </header>
      {_mobilePopupMenu()}
    </>
  )
}

export default Header
