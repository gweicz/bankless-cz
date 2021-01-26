import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const NovinkyEthereum = () => {

  return (
    <div>
      <div className="axil-author-area axil-author-banner bg-color-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-author">
                <div className="media">
                  <div className="thumbnail">
                    <picture>
                      <source srcSet="/images/icons/ethereum.webp" type="image/webp"/>
                      <source srcSet="/images/icons/ethereum.png" type="image/png"/>
                      <img src="/images/icons/ethereum.png" alt="Ethereum"/>
                    </picture>
                  </div>
                  <div className="media-body">
                    <div className="author-info">
                      <h1 className="title"><a href="#">Ethereum Novinky</a></h1>
                    </div>
                    <div className="content">
                      <p className="b1 description">
                        Ethereum is a global, open-source platform for decentralized applications. In other words,
                        the vision is to create a world computer that anyone can build applications in a decentralized manner;
                        while all states and data are distributed and publicly accessible. Ethereum supports smart contracts
                        in which developers can write code in order to program digital value. Examples of decentralized apps (dapps)
                        that are built on Ethereum includes token, non-fungible tokens, decentralized finance apps, lending protocol,
                        decentralized exchanges, and much more.
                      </p>
                      <ul className="social-share-transparent size-md">
                        <li>
                          <a href="https://www.facebook.com/240704689444565" target="_blank">
                            <FontAwesomeIcon icon={["fab", "facebook-f"]}/>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/ethereum" target="_blank">
                            <FontAwesomeIcon icon={["fab", "twitter"]}/>
                          </a>
                        </li>
                        <li>
                          <a href="https://reddit.com/r/ethereum" target="_blank">
                            <FontAwesomeIcon icon={["fab", "reddit"]}/>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ethereum.org/" target="_blank">
                            <FontAwesomeIcon icon={["fab", "globe"]} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default NovinkyEthereum;