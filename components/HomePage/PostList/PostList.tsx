import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import SideBar from 'components/Layout/SideBar'

// const posts = [
//   {
//     linkTo:
//     img: {
//       url:
//       alt:
//     }
//   }
// ]

const PostList = () => {
  return (
    <div className="col-lg-8 col-xl-8">
      {/*<div className="axil-banner">*/}
      {/*  <div className="thumbnail">*/}
      {/*    <a href="#">*/}
      {/*      <img className="w-100" src="/images/add-banner/banner-01.png" alt="Banner Images"/>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="content-block post-list-view axil-control is-active mt--30">
        <div className="post-thumbnail">
          <Link href="/novinky/test1">
            <a>
              <img
                src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2020/05/coronavirus-vaccine-stocks-bitcoin-markets-gID_1.jpg"
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
                  <span data-text="BLOCKCHAIN">BLOCKCHAIN</span>
                </span>
              </a>
            </div>
          </div>
          <h4 className="title">
            <Link href="/novinky/test1">
              <a>
                Jak Hedera zajišťuje bezpečnost u COVID vakcín pomocí
                blockchainu?
              </a>
            </Link>
          </h4>
          <div className="post-meta-wrapper">
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
            <div className="post-meta">
              <div className="content">
                <h6 className="post-author-name">
                  <a className="hover-flip-item-wrapper" href="author.html">
                    <span className="hover-flip-item">
                      <span data-text="rixcian">rixcian</span>
                    </span>
                  </a>
                </h6>
                <ul className="post-meta-list">
                  <li>Led 26, 2021</li>
                  <li>3 minuty čtení</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="content-block post-list-view axil-control is-active mt--30">
        <div className="post-thumbnail">
          <a href="post-details.html">
            <img
              src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/01/Janet_Yellen_official_Federal_Reserve_portrait-e1611269835508-gID_5.jpg"
              alt="Post Images"
            />
          </a>
        </div>
        <div className="post-content">
          <div className="post-cat">
            <div className="post-cat-list">
              <a className="hover-flip-item-wrapper" href="#">
                <span className="hover-flip-item">
                  <span data-text="OSTATNÍ">OSTATNÍ</span>
                </span>
              </a>
            </div>
          </div>
          <h4 className="title">
            <a href="post-details.html">
              Americký senát potvrdil Janet Yellen jako ministryni financí
            </a>
          </h4>
          <div className="post-meta-wrapper">
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
            <div className="post-meta">
              <div className="content">
                <h6 className="post-author-name">
                  <a className="hover-flip-item-wrapper" href="author.html">
                    <span className="hover-flip-item">
                      <span data-text="rixcian">rixcian</span>
                    </span>
                  </a>
                </h6>
                <ul className="post-meta-list">
                  <li>Led 25, 2021</li>
                  <li>5 minut čtení</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-block post-list-view axil-control is-active mt--30">
        <div className="post-thumbnail">
          <a href="post-details.html">
            <img
              src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/01/defi-growth-gID_1.jpg"
              alt="Post Images"
            />
          </a>
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
          <h4 className="title">
            <a href="post-details.html">
              Tržní kapitalizace DeFi se vyšplahala až na 45 milionů dolarů
            </a>
          </h4>
          <div className="post-meta-wrapper">
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
            <div className="post-meta">
              <div className="content">
                <h6 className="post-author-name">
                  <a className="hover-flip-item-wrapper" href="author.html">
                    <span className="hover-flip-item">
                      <span data-text="rixcian">rixcian</span>
                    </span>
                  </a>
                </h6>
                <ul className="post-meta-list">
                  <li>Led 25, 2021</li>
                  <li>3 minut čtení</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-block post-list-view axil-control is-active mt--30">
        <div className="post-thumbnail">
          <a href="post-details.html">
            <img
              src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2020/12/Hack-1-gID_5.jpg"
              alt="Post Images"
            />
          </a>
        </div>
        <div className="post-content">
          <div className="post-cat">
            <div className="post-cat-list">
              <a className="hover-flip-item-wrapper" href="#">
                <span className="hover-flip-item">
                  <span data-text="BITCOIN">BITCOIN</span>
                </span>
              </a>
            </div>
          </div>
          <h4 className="title">
            <a href="post-details.html">
              Hackeři využili zranitelnost v platformě na ukládání souborů k
              těžení Bitcoinu
            </a>
          </h4>
          <div className="post-meta-wrapper">
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
            <div className="post-meta">
              <div className="content">
                <h6 className="post-author-name">
                  <a className="hover-flip-item-wrapper" href="author.html">
                    <span className="hover-flip-item">
                      <span data-text="rixcian">rixcian</span>
                    </span>
                  </a>
                </h6>
                <ul className="post-meta-list">
                  <li>Led 25, 2021</li>
                  <li>4 minut čtení</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    */}
    </div>
  )
}

export default PostList
