import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="header axil-header  header-light header-sticky ">
      <div className="header-wrap">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
            <div className="logo">
              <a href="/">
                <img className="dark-logo" src="/images/logo/logo-black.png" alt="Blogar logo"/>
                <img className="light-logo" src="/images/logo/logo-white2.png" alt="Blogar logo"/>
              </a>
            </div>
          </div>

          <div className="col-xl-6 d-none d-xl-block">
            <div className="mainmenu-wrapper">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li className="menu-item-has-children">
                    <a href="#">Novinky</a>
                  </li>

                  <li className="menu-item-has-children megamenu-wrapper"><a href="#">Začátečníci</a>
                    <ul className="col-xl-6 megamenu-sub-menu">
                      <li className="megamenu-item">

                        <div className="axil-vertical-nav">
                          <ul className="vertical-nav-menu">
                            <li className="vertical-nav-item active">
                              <a className="hover-flip-item-wrapper" href="#tab1">
                                                                <span className="hover-flip-item">
                                    <span data-text="Ethereum">Ethereum</span>
                                                                </span>
                              </a>
                            </li>
                            <li className="vertical-nav-item">
                              <a className="hover-flip-item-wrapper" href="#tab2">
                                                                <span className="hover-flip-item">
                                    <span data-text="Bitcoin">Bitcoin</span>
                                                                </span>
                              </a>
                            </li>
                            <li className="vertical-nav-item">
                              <a className="hover-flip-item-wrapper" href="#tab3">
                                                                <span className="hover-flip-item">
                                    <span data-text="Polkadot">Polkadot</span>
                                                                </span>
                              </a>
                            </li>
                            <li className="vertical-nav-item">
                              <a className="hover-flip-item-wrapper" href="#tab4">
                                                                <span className="hover-flip-item">
                                    <span data-text="Ostatní">Ostatní</span>
                                                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="axil-vertical-nav-content">
                          <div className="axil-vertical-inner tab-content" id="tab1" style={{display: "block"}}>
                            <div className="axil-vertical-single">
                              <div className="row">

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img className="w-100" src="/images/others/mega-post-02.jpg"
                                             alt="Post Images"/>
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span
                                                                                          className="hover-flip-item">
                                                            <span data-text="ETHEREUM">ETHEREUM</span>
                                                                                        </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title"><a href="post-details.html">Co je Ethereum a k čemu lze použít?</a></h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img className="w-100" src="/images/others/mega-post-02.jpg"
                                             alt="Post Images"/>
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span
                                                                                          className="hover-flip-item">
                                                            <span data-text="ETHEREUM">ETHEREUM</span>
                                                                                        </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title"><a href="post-details.html">Co je Ethereum 2.0 a co přinese?</a></h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img className="w-100" src="/images/others/mega-post-03.jpg"
                                             alt="Post Images"/>
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span
                                                                                          className="hover-flip-item">
                                                            <span data-text="ETHEREUM">ETHEREUM</span>
                                                                                        </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title"><a href="post-details.html">Co jsou Ethereum tokeny (ERC20)?</a></h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img className="w-100" src="/images/others/mega-post-04.jpg"
                                             alt="Post Images"/>
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span
                                                                                          className="hover-flip-item">
                                                            <span data-text="ETHEREUM">ETHEREUM</span>
                                                                                        </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title"><a href="post-details.html">Co jsou chytré kontrakty a jak fungují?</a></h5>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li><a href="home-lifestyle-blog.html">Grafy</a></li>
                  <li><a href="home-tech-blog.html">Podcast</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
            <div className="header-search text-right d-flex align-items-center">
              <form className="header-search-form">
                <div className="axil-search form-group">
                  <button type="submit" className="search-button"><FontAwesomeIcon icon="search" /></button>
                  <input type="text" className="form-control" placeholder="Hledat"/>
                </div>
              </form>
              <div className="hamburger-menu d-block d-xl-none">
                <div className="hamburger-inner">
                  <div className="icon"><FontAwesomeIcon icon="bars" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;