import Link from 'next/link'
import Megamenu from 'components/Megamenu/Megamenu'
import Image from 'next/image'
import style from './Header.module.scss'
import CryptoPrices from './CryptoPrices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header: React.FC = () => {
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
      <Link href="/">
        <div className="logo">
          <div style={{cursor: 'pointer', height: '65px', width: '188px'}}>
            <Image
            src="/images/logo/banklessczWhite.svg"
            alt="Bankless logo"
            width={188}
            height={65}
            />            
          </div>
        </div>
      </Link>
    </div>
  )

  const _mobilePopupMenu = () => (
    <div className="popup-mobilemenu-area">
      <div className="inner">
        <div className="mobile-menu-top">
          <div className="logo w-50">
            <Link href="/">
            <Image
            src="/images/logo/banklessczWhite.svg"
            alt="Bankless logo"
            width={188}
            height={65}
            /> 
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

  const _mainMenu = () => (
    <div className="mainmenu-wrapper">
      <nav className="mainmenu-nav">
        <ul className="mainmenu">
          <Megamenu menuTitle="Novinky" menuLink="/" isBegginer={false} />

          <li>
            <Link href="/hashovky/">#Hashovky</Link>
          </li>

          <Megamenu
            menuTitle="Začátečníci"
            menuLink="/zacatecnici/"
            isBegginer={true}
          />
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
                <CryptoPrices isMobile={true} />
                {_hamburgerMenu()}
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <CryptoPrices isMobile={false} />
          </div>
        </div>
      </header>
      {_mobilePopupMenu()}
    </>
  )
}

export default Header
