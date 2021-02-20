import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Megamenu from 'components/Megamenu/Megamenu'

const Header = () => {
  return (
    <header className="header axil-header  header-light header-sticky ">
      <div className="header-wrap">
        <div className="row justify-content-between align-items-center">
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

          <div className="col-xl-6 d-none d-xl-block">
            <div className="mainmenu-wrapper">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li>
                    <Link href="/">
                      <a>Novinky</a>
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#">#Hashovky</a>
                  </li>

                  <Megamenu menuTitle="Začátečníci" /> */}

                  {/* <li>
                    <a href="home-lifestyle-blog.html">Grafy</a>
                  </li>
                  <li>
                    <a href="home-tech-blog.html">Podcast</a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
            <div className="header-search text-right d-flex align-items-center">
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
              <div className="hamburger-menu d-block d-xl-none">
                <div className="hamburger-inner">
                  <div className="icon">
                    <FontAwesomeIcon icon="bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header