import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import SocInvite from 'components/SocInvite'

const SideBar = () => {
  const _instagram = () => (
    <div className="axil-single-widget widget widget_instagram mb--30">
      <h5 className="widget-title">Instagram</h5>
      <ul className="instagram-post-list-wrapper">
        <li className="instagram-post-list">
          <a href="#">
            <img
              src="/images/small-images/instagram-01.jpg"
              alt="Instagram Images"
            />
          </a>
        </li>
        <li className="instagram-post-list">
          <a href="#">
            <img
              src="/images/small-images/instagram-02.jpg"
              alt="Instagram Images"
            />
          </a>
        </li>
        <li className="instagram-post-list">
          <a href="#">
            <img
              src="/images/small-images/instagram-03.jpg"
              alt="Instagram Images"
            />
          </a>
        </li>
        <li className="instagram-post-list">
          <a href="#">
            <img
              src="/images/small-images/instagram-04.jpg"
              alt="Instagram Images"
            />
          </a>
        </li>
        <li className="instagram-post-list">
          <a href="#">
            <img
              src="/images/small-images/instagram-05.jpg"
              alt="Instagram Images"
            />
          </a>
        </li>
        <li className="instagram-post-list">
          <a href="#">
            <img
              src="/images/small-images/instagram-06.jpg"
              alt="Instagram Images"
            />
          </a>
        </li>
      </ul>
    </div>
  )

  const _cryptoType = () => (
    <div className="axil-single-widget widget widget_categories mb--30">
      <ul>
        <li className="cat-item">
          <Link href="/novinky/ethereum">
            <a className="inner">
              <div className="thumbnail">
                <picture>
                  <source
                    srcSet="/images/icons/ethereum.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/images/icons/ethereum.png"
                    type="image/png"
                  />
                  <img src="/images/icons/ethereum.png" alt="Ethereum" />
                </picture>
              </div>
              <div className="content">
                <h5 className="title">Ethereum</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className="cat-item">
          <Link href="/novinky/bitcoin">
            <a className="inner">
              <div className="thumbnail">
                <picture>
                  <source
                    srcSet="/images/icons/bitcoin.webp"
                    type="image/webp"
                  />
                  <source srcSet="/images/icons/bitcoin.png" type="image/png" />
                  <img src="/images/icons/bitcoin.png" alt="Bitcoin" />
                </picture>
              </div>
              <div className="content">
                <h5 className="title">Bitcoin</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className="cat-item">
          <Link href="/novinky/polkadot">
            <a className="inner">
              <div className="thumbnail">
                <picture>
                  <source
                    srcSet="/images/icons/polkadot.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/images/icons/polkadot.jpg"
                    type="image/jpeg"
                  />
                  <img src="/images/icons/polkadot.jpg" alt="Polkadot" />
                </picture>
              </div>
              <div className="content">
                <h5 className="title">Polkadot</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className="cat-item">
          <Link href="/novinky/other">
            <a className="inner">
              <div className="thumbnail">
                <img
                  src="/images/logo/logo_hash_64.png"
                  alt="Ostatní"
                  style={{ width: '28px' }}
                />
              </div>
              <div className="content">
                <h5 className="title">Ostatní</h5>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )

  const _hashovky = () => (
    <div className="axil-single-widget widget widget_postlist mb--30">
      <h4 className="widget-title">#Hashovky</h4>
      <div className="post-medium-block">
        <div className="content-block post-medium mb--20">
          <div className="post-content hash-news">
            <p className="hash-content">
              Metamask: "Pokud máte problém s odesíláním transakcí v naší
              mobilní aplikaci, zkuste se přepnout na jinou síť a po té zase
              zpět".
              <a href="https://twitter.com/metamask_io/status/1353118291959529472?s=20">
                Zdroj
              </a>
            </p>
            <div className="post-meta hash-meta">
              <ul className="post-meta-list">
                <li>10:07</li>
                <li>Led 24, 2021</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-block post-medium mb--20">
          <div className="post-content hash-news">
            <p className="hash-content">
              Podle Coingecko tržní kapitalizace DeFi narostla mezi roky 2020 a
              2021 o 41 miliard dolarů.
              <a href="https://twitter.com/coingecko/status/1353206035763392512?s=20">
                Více info
              </a>
            </p>
            <div className="post-meta hash-meta">
              <ul className="post-meta-list">
                <li>10:07</li>
                <li>Led 24, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const _socFollow = () => (
    <div className="axil-single-widget widget widget_social mb--30">
      <h5 className="widget-title">Sledujte nás</h5>
      <SocInvite />
    </div>
  )

  return (
    <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
      <div className="sidebar-inner">
        {_cryptoType()}

        {_hashovky()}

        {_socFollow()}

        {_instagram()}
      </div>
    </div>
  )
}

export default SideBar
