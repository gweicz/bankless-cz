import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import SocShare from 'components/SocShare'

const MainBanner = ({ data }: { data?: any }) => {
  const { frontImg, detailUrl, category, author, date, title, readTime } =
    data || {}

  const _authorName = () => (
    <>
      {author.profileUrl ? (
        <h6 className="post-author-name">
          <Link href={author.profileUrl}>
            <a className="hover-flip-item-wrapper">
              <span className="hover-flip-item text-left">
                <span data-text={author.name}>{author.name}</span>
              </span>
            </a>
          </Link>
        </h6>
      ) : (
        <h6 className="m-0 text-white">
          <span>{author.name}</span>
        </h6>
      )}
    </>
  )

  const _readBtn = () => (
    <div className="read-more-button cerchio">
      <Link href={detailUrl}>
        <a className="axil-button button-rounded hover-flip-item-wrapper">
          <span className="hover-flip-item">
            <span data-text="Přečíst článek">Přečíst článek</span>
          </span>
        </a>
      </Link>
    </div>
  )

  const _category = () => (
    <div className="post-cat">
      <div className="post-cat-list">
        {/* <a className="hover-flip-item-wrapper" href="#"> */}
        <a className="hover-flip-item-wrapper">
          {/* <span className="hover-flip-item"> */}
          <span className="text-dark cursor-default">
            <span data-text={category}>{category}</span>
          </span>
          {/* </span> */}
        </a>
        {/* </a> */}
      </div>
    </div>
  )

  return (
    <div className="slider-area bg-color-grey">
      <div className="axil-slide slider-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-activation axil-slick-arrow">
                <div className="content-block">
                  <div className="post-thumbnail">
                    <Link href={detailUrl}>
                      <a>
                        <img src={frontImg.url} alt={frontImg.alt} />
                      </a>
                    </Link>
                  </div>

                  <div className="post-content">
                    {_category()}
                    <h2 className="title">
                      <Link href={detailUrl}>
                        <a>{title}</a>
                      </Link>
                    </h2>
                    <div className="post-meta-wrapper with-button ">
                      <div className="post-meta w-100 justify-content-between">
                        <div className="content">
                          {_authorName()}
                          <ul className="post-meta-list">
                            <li>{date}</li>
                            <li>{readTime}</li>
                          </ul>
                        </div>
                        <SocShare urlToShare={detailUrl} />
                      </div>

                      {_readBtn()}
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
