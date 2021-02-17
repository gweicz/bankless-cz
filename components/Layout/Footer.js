import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 d-flex align-items-center">
              <div className="logo">
                <a href="index.html">
                  <img
                    className="dark-logo"
                    src="/images/logo/logo_black_final.png"
                    alt="Cryptohash logo"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                <h5 className="follow-title mb--0 mr--20">Sledujte nás</h5>
                <ul className="social-icon color-tertiary md-size justify-content-start">
                  {/* <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li> */}
                  {/* <li><a href="#"><FontAwesomeIcon icon={["fab", "instagram"]}/></a></li> */}
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={['fab', 'discord']} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8">
              <div className="copyright-left">
                <ul className="mainmenu justify-content-start">
                  <li>
                    <a className="hover-flip-item-wrapper" href="#">
                      <span className="hover-flip-item">
                        <span data-text="redakce@cryptohash.cz">
                          redakce@cryptohash.cz
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="copyright-right text-left text-md-right mt_sm--20">
                <p className="b3">
                  Všechna práva vyhrazena © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
