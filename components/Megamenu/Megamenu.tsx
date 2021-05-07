import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import style from './MegaMenu.module.scss'
import { useSessionContext } from 'context/SessionContext'
import { useState } from 'react'

type MegaMenuProps = {
  menuTitle: string,
  categoryLink: string,
  categoryName: string,
  isBeginner: boolean,
}

const Megamenu = ({ menuTitle, categoryLink, categoryName, isBeginner }: MegaMenuProps) => {
  const { apiPostsData } = useSessionContext()

  let tabs: { [key: string]: { [key: string]: string }[] }
  if (isBeginner) {
    tabs = {
      Ethereum: (apiPostsData?.menuPosts.ethPostsBegginer.slice(0,4) || []).map(
        (post: PostOrPage) => ({
          category: 'ethereum',
          thumbnail: post.feature_image,
          title: post.title,
          slug: post.slug,
        }),
      ),
      Bitcoin: (apiPostsData?.menuPosts.btcPostsBegginer.slice(0,4) || []).map(
        (post: PostOrPage) => ({
          category: 'bitcoin',
          thumbnail: post.feature_image,
          title: post.title,
          slug: post.slug,
        }),
      ),
      Polkadot: (apiPostsData?.menuPosts.dotPostsBegginer.slice(0,4) || []).map(
        (post: PostOrPage) => ({
          category: 'polkadot',
          thumbnail: post.feature_image,
          title: post.title,
          slug: post.slug,
        }),
      ),
      Ostatní: (apiPostsData?.menuPosts.ostatniPostsBegginer.slice(0,4) || []).map(
        (post: PostOrPage) => ({
          category: 'ostatni',
          thumbnail: post.feature_image,
          title: post.title,
          slug: post.slug,
        }),
      ),
    }
  } else {
    tabs = {
      Ethereum: (apiPostsData?.menuPosts.ethPosts.slice(0,4) || []).map((post: PostOrPage) => ({
        category: 'ethereum',
        thumbnail: post.feature_image,
        title: post.title,
        slug: post.slug,
      })),
      Bitcoin: (apiPostsData?.menuPosts.btcPosts.slice(0,4) || []).map((post: PostOrPage) => ({
        category: 'bitcoin',
        thumbnail: post.feature_image,
        title: post.title,
        slug: post.slug,
      })),
      Polkadot: (apiPostsData?.menuPosts.dotPosts.slice(0,4) || []).map((post: PostOrPage) => ({
        category: 'polkadot',
        thumbnail: post.feature_image,
        title: post.title,
        slug: post.slug,
        })),
      Ostatní: (apiPostsData?.menuPosts.ostatniPosts.slice(0,4) || []).map((post: PostOrPage) => ({
        category: 'ostatni',
        thumbnail: post.feature_image,
        title: post.title,
        slug: post.slug,
        })),
    }
  }

  const [activeTab, setActiveTab] = useState('Ethereum')

  const onTabHover = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    category: string,
  ) => {
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
      <Link href={categoryLink}>
        <a>{menuTitle}</a>
      </Link>
      <ul className="col-xl-6 megamenu-sub-menu">
        <li className="megamenu-item">
          <div className="height">
            <div className="axil-vertical-nav">
              <ul className="vertical-nav-menu">
                {Object.keys(tabs).map((category, id) => (
                  <li
                    key={category}
                    id={`nav-item-${category.toLowerCase()}`}
                    className={`vertical-nav-item ${id === 0 ? 'active' : ''}`}
                    onMouseEnter={(e) => onTabHover(e, category)}
                  >
                    <Link href={`/${categoryName}/${category.toLowerCase()}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={category}>{category}</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
                              <Link href={`/${categoryName}/${post.slug}`}>
                                <a>
                                  <img
                                    className={`w-100 ${style.previewImg}`}
                                    src={post.thumbnail}
                                    alt={post.title}
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a className="cursor-default text-dark">
                                    {category?.toUpperCase()}
                                  </a>
                                </div>
                              </div>
                              <h5 className="title">
                                <Link href={`/${categoryName}/${post.slug}`}>
                                  <a>{post.title}</a>
                                </Link>
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
