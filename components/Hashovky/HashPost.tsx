const HashPost = () => {
  return (
    <div className="content-block post-list-view axil-control is-active mt--30 hash-post">
      <div className="post-content">
        <p>
          Metamask: "Pokud máte problém s odesíláním transakcí v naší mobilní aplikaci, zkuste se přepnout na jinou síť a po té zase zpět".
          <a href="https://twitter.com/metamask_io/status/1353118291959529472?s=20">
            Zdroj
          </a>
        </p>
        <div className="post-meta-wrapper d-flex">
          <ul className="social-share-transparent justify-content-end">
            <li><a href="https://www.facebook.com/sharer.php?u=https://cryptohash.vercel.app/novinky/article1"
                   target="_blank">

            </a></li>
            <li><a
              href="https://twitter.com/share?url=https://cryptohash.vercel.app/novinky/article1&amp;text=Cryptohash%20%7C%20Ethereum,%20Bitcoin%20a%20jin%C3%A9%20krypto"
              data-related="@gweicz" target="_blank" data-show-count="false">
            </a></li>
            <li><a href="#">
            </a></li>
          </ul>
          <div className="post-meta">
            <div className="content">
              <ul className="post-meta-list">
                <li>11:24</li>
                <li>Led 17, 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HashPost