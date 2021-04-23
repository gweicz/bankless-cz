import { useState } from 'react'
import Link from 'next/link'
import SocInvite from 'components/SocInvite'
import useCopyToClipboard from 'components/helpers/useCopyToClipboard'
import Image from 'next/image'
import style from './Footer.module.scss'

const Footer = () => {
  const redactionEmailAdsress = 'redakce@bankless.cz'
  let [EmailText, setEmailText] = useState(redactionEmailAdsress)

  const { copyLink, isCopiedTooltip } = useCopyToClipboard()

  return (
    <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="container">
        <div className="footer-top" style={{paddingTop: '15px', paddingBottom: '15px'}}>
          <div className="row">
            <div className="col-lg-4 col-md-4 d-flex align-items-center">
                <Link href="/">
                  <div style={{cursor: 'pointer', height: '65px'}}>
                  <Image
                    src="/images/logo/banklessczWhite.svg"
                    alt="Bankless logo"
                    width={188}
                    height={65}
                  />  
                  </div>
                </Link> 
          </div>
            <div className="col-lg-8 col-md-8" style={{paddingTop: '10px'}}>
              <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                <h5 className="follow-title mb--0 mr--20">Sledujte nás</h5>
                <SocInvite />
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
                <ul className="mainmenu justify-content-right">
                  <li>
                    <Link href="/kodex">
                      <a
                        className="hover-text-black"
                        style={{fontSize: "15px"}}
                      >
                        {"Náš kodex"}
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className="mainmenu justify-content-start">
                  <li>
                    <a
                      className="hover-text-black cursor-copy"
                      onClick={(event) => {
                        copyLink({ event, textToCopy: redactionEmailAdsress });
                        setEmailText("")
                        setTimeout(function () {
                          setEmailText(redactionEmailAdsress)
                        }, 3000)
                      }}
                    >
                      {isCopiedTooltip()}
                      {EmailText}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.CopyrightText}>
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

//// origin from template
// <a className="hover-flip-item-wrapper" href="#">
//   <span className="hover-flip-item">
//     <span data-text="redakce@cryptohash.cz">
//       redakce@cryptohash.cz
//     </span>
//     </span>
//     </a>
