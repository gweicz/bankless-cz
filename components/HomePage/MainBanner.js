import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const MainBanner = () => {
  return (
    <div className="slider-area bg-color-grey">
      <div className="axil-slide slider-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-activation axil-slick-arrow">
                <div className="content-block">
                  <div className="post-thumbnail">
                    <Link href="/novinky/test1">
                      <a>
                        <img
                          src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2020/07/ethereum-2-defi-hacks-gID_6.jpg"
                          alt="Post Images"
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="ETHEREUM">ETHEREUM</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h2 className="title">
                      <Link href="/novinky/test1">
                        <a>Co je Ethereum 2.0 a co nám přinese?</a>
                      </Link>
                    </h2>
                    <div className="post-meta-wrapper with-button">
                      <div className="post-meta">
                        <div className="post-author-avatar border-rounded">
                          <img
                            src="/images/post-images/author/author-image-3.png"
                            alt="Author Images"
                          />
                        </div>
                        <div className="content">
                          <h6 className="post-author-name">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="rixcian">rixcian</span>
                              </span>
                            </a>
                          </h6>
                          <ul className="post-meta-list">
                            <li>Led 22, 2021</li>
                            <li>10 minut</li>
                          </ul>
                        </div>
                      </div>
                      <ul className="social-share-transparent justify-content-end">
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon="link" />
                          </a>
                        </li>
                      </ul>
                      <div className="read-more-button cerchio">
                        <Link href="/novinky/test1">
                          <a className="axil-button button-rounded hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text="Přečíst článek">
                                Přečíst článek
                              </span>
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
