import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import SocShare from 'components/SocShare'
import { formatGhostDataForArticlePost } from 'components/helpers/formatGhostDataForArticlePost'

export default function Post({ data }: { data: PostOrPage }) {
  const {
    detailUrl,
    category,
    frontImg,
    author,
    readTime,
    date,
    title,
  } = formatGhostDataForArticlePost(data)

  const _authorName = (author: any) => {
    return (
      <>
        {author.profileUrl ? (
          <h6 className="post-author-name">
            <Link href={author.profileUrl}>
              <a className="hover-flip-item-wrapper">
                <span className="hover-flip-item text-right">
                  <span data-text={author.name}>{author.name}</span>
                </span>
              </a>
            </Link>
          </h6>
        ) : (
          <h6 className="m-0 text-right">
            <span>{author.name}</span>
          </h6>
        )}
      </>
    )
  }

  const _socShare = () => (
    <ul className="social-share-transparent justify-content-end">
      <li>
        <a href="#">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
      </li>
      <li>
        {/* <a href="#"> */}
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          // className="twitter-share-button"
          data-related="@gweicz"
          target="_blank"
          data-show-count="false"
        >
          {/* Tweet */}
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
        {/* <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script> */}
        {/* </a> */}
      </li>
      {/* <li>
        <a href="#">
          <FontAwesomeIcon icon="link" />
        </a>
      </li> */}
    </ul>
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

  const _postImg = () => (
    <div className="post-thumbnail">
      <Link href={detailUrl}>
        <a>{frontImg?.url && <img src={frontImg.url} alt={frontImg?.alt} />}</a>
      </Link>
    </div>
  )

  return (
    <div className="content-block post-list-view axil-control is-active mt--30">
      {_postImg()}
      <div className="post-content">
        {_category()}

        <h4 className="title">
          <Link href={detailUrl}>
            <a>{title}</a>
          </Link>
        </h4>
        <div className="post-meta-wrapper d-flex">
          <SocShare urlToShare={detailUrl} />
          <div className="post-meta">
            <div className="content">
              {_authorName(author)}

              <ul className="post-meta-list">
                <li>{date}</li>
                <li>{readTime}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
