import { useState } from 'react'

type Props = {
  menuTitle: string,
  menuLink: string,
  tabs?: { [key: string]: { [key: string]: string }[] }
}

const Megamenu = ({ menuTitle, menuLink, tabs }: Props) => {
  tabs = {
    Ethereum: [
      {
        category: 'ethereum',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Co je Ethereum a k čemu lze použít?',
      },
      {
        category: 'ethereum',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Co je Ethereum 2.0 a co nám přinese?',
      },
      {
        category: 'ethereum',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Co jsou Ethereum tokeny (ERC20)?',
      },
      {
        category: 'ethereum',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Co jsou chytré kontrakty a jak fungují?',
      },
    ],
    Bitcoin: [
      {
        category: 'bitcoin',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Co je Bitcoin a kdo je Satoshi Nakamoto?',
      },
      {
        category: 'bitcoin',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Proč dochází k půlení Bitcoinu?',
      },
      {
        category: 'bitcoin',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Čím je Bitcoin krytý a má vnitřní hodnotu?',
      },
      {
        category: 'bitcoin',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Co znamená těžení Bitcoinu a jak funguje?',
      },
    ],
    Polkadot: [
      {
        category: 'polkadot',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Co je Polkadot a je to konkurence Etherea?',
      },
      {
        category: 'polkadot',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Governance na Polkadot',
      },
      {
        category: 'polkadot',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'K čemu je Kusama, testovací síť Polkadot?',
      },
      {
        category: 'polkadot',
        thumbnail: '/images/others/mega-post-02.jpg',
        title: 'Jak funguje stakování na Polkadot?',
      },
    ]
  }

  const [activeTab, setActiveTab] = useState('Ethereum')

  const onTabHover = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, category: string) => {
    // We hide the current tab content
    setActiveTab('')

    // Remove "active" class name from all tab names
    const allTabNames = document.getElementsByClassName('active')
    while (allTabNames[0]) allTabNames[0].classList.remove('active')

    // Add "active" class name to element which user hover over it
    // @ts-ignore
    document
      .getElementById(`nav-item-${category.toLowerCase()}`)
      .classList.add('active')

    // Show content of hovered category
    setActiveTab(category)
  }

  return (
    <li className="menu-item-has-children megamenu-wrapper">
      <a href={menuLink}>{menuTitle}</a>
      <ul className="col-xl-6 megamenu-sub-menu">
        <li className="megamenu-item">
          <div className="axil-vertical-nav">
            <ul className="vertical-nav-menu">
              {Object.keys(tabs).map((category, id) => (
                <li
                  key={category}
                  id={`nav-item-${category.toLowerCase()}`}
                  className={`vertical-nav-item ${id === 0 ? 'active' : ''}`}
                  onMouseEnter={(e) => onTabHover(e, category)}
                >
                  <a className="hover-flip-item-wrapper" href={`#${category}`}>
                    <span className="hover-flip-item">
                      <span data-text={category}>{category}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="axil-vertical-nav-content">
            {Object.keys(tabs).map((category, id) => {
              let categoryPosts = tabs![category]

              return (
                <div
                  key={id}
                  className="axil-vertical-inner tab-content"
                  id={`category-${category.toLowerCase()}`}
                  style={activeTab === category ? { display: 'block' } : {}}
                >
                  <div className="axil-vertical-single">
                    <div className="row">
                      {categoryPosts.map((post, id) => (
                        <div key={id} className="col-lg-3">
                          <div className="content-block image-rounded">
                            <div className="post-thumbnail mb--20">
                              <a
                                href={`/zacatecnici/${category}/${post.title}`}
                              >
                                <img
                                  className="w-100"
                                  src={post.thumbnail}
                                  alt={post.title}
                                />
                              </a>
                            </div>
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text={category.toUpperCase()}>
                                        {category.toUpperCase()}
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h5 className="title">
                                <a
                                  href={`/zacatecnici/${category}/${post.title}`}
                                >
                                  {post.title}
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </li>
      </ul>
    </li>
  )
}

export default Megamenu
