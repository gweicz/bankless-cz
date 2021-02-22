import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Megamenu from 'components/Megamenu/Megamenu'
import style from './Header.module.scss'

const Header = (props: any) => {
  const hamburgerOnClick = () => {
    const mobilePopupMenu = document.getElementById('mobile-menu-show')
    mobilePopupMenu?.classList.toggle('popup-mobile-menu-show')
    console.log('mobilePopupMenu: ', mobilePopupMenu)
  }

  const closeMobileMenu = () => {
    console.log('closeMobileMenu: ')
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
            {/* <div className="icon">
            <i className="fal fa-times"></i>
          </div> */}
          </div>
        </div>
        <ul className="mainmenu list-unstyled">
          <Link href="/">
            <li onClick={closeMobileMenu}>
              <a>Novinky</a>
            </li>
          </Link>
          <Link href="#">
            <li onClick={closeMobileMenu}>
              <a>#Hashovky</a>
            </li>
          </Link>

          <Link href="#">
            <li onClick={closeMobileMenu}>
              <a>Začátečníci</a>
            </li>
          </Link>

          {/* <Megamenu menuTitle="Začátečníci" /> */}
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

  const _search = () => (
    <form className="header-search-form">
      {/* <div className="axil-search form-group">
                  <button type="submit" className="search-button">
                    <FontAwesomeIcon icon="search" />
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hledat"
                  />
                </div> */}
    </form>
  )

  const _cryptoPrices = () => (
    <div className="col-xl-12 d-none d-xl-block">
      <div className="mainmenu-wrapper">
        <nav className="mainmenu-nav">
          <ul className="mainmenu" style={{ marginBottom: '10px' }}>
            <img
              src="/images/icons/bitcoin.webp"
              style={{ maxWidth: '30px', maxHeight: '30px' }}
            />
            <li style={{ color: '#878787', fontSize: '20px' }}>
              ${props.btc_price}
            </li>
            <img
              src="/images/icons/ethereum.webp"
              style={{ maxWidth: '30px', maxHeight: '30px' }}
            />
            <li style={{ color: '#878787', fontSize: '20px' }}>
              ${props.eth_price}
            </li>
            <img
              src="/images/icons/polkadot.webp"
              style={{ maxWidth: '30px', maxHeight: '30px' }}
            />
            <li style={{ color: '#878787', fontSize: '20px' }}>
              ${props.dot_price}
            </li>
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
            <a href="#">#Hashovky</a>
          </li>

          <Megamenu menuTitle="Začátečníci" />

          {/* <li>
            <a href="home-lifestyle-blog.html">Grafy</a>
          </li>
          <li>
            <a href="home-tech-blog.html">Podcast</a>
          </li> */}
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
              <div className="header-search text-right d-flex align-items-center">
                {_search()}
                {_hamburgerMenu()}
              </div>
            </div>

            {_cryptoPrices()}
          </div>
        </div>
      </header>
      {_mobilePopupMenu()}
    </>
  )
}

export default Header
