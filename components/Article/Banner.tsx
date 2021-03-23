import { ArticleTypes } from 'components/Types/ArticleTypes'
import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import SocShare from 'components/SocShare'
import { formatGhostDataForArticlePost } from 'components/helpers/formatGhostDataForArticlePost'
import styles from './Banner.module.scss'

export default function Banner({
  articleData,
  fromPage,
}: {
  articleData: PostOrPage
  fromPage: string
}) {
  const {
    detailUrl,
    category,
    frontImg,
    author,
    readTime,
    date,
    slug,
    title,
  } = formatGhostDataForArticlePost(articleData)

  const _authorName = () => (
    <>
      {author.profileUrl ? (
        <h6 className="post-author-name text-white">
          <Link href={author.profileUrl}>
            <a style={{color: "white"}}>
              <span className={`text-left`}>
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

  const _authorBox = () => (
    <div className="post-meta m-0">
      {author?.img?.url && (
        <div className="post-author-avatar border-rounded">
          <img
            className={styles.authorImg}
            src={author.img.url}
            alt={author.name}
          />
        </div>
      )}
      <div className="content">
        {_authorName()}
        <ul className="post-meta-list">
          <li>{date}</li>
          {/* <li>300k Views</li> */}
        </ul>
      </div>
    </div>
  )

  const _featuredPost = () => (
    <div className="post-cat">
      <div className="post-cat-list">
        <a className="hover-flip-item-wrapper" href="#">
          <span className="hover-flip-item">
            <span data-text="FEATURED POST">FEATURED POST</span>
          </span>
        </a>
      </div>
    </div>
  )


  return (
    <div className="banner banner-single-post post-formate post-standard alignwide">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- Start Single Slide  --> */}
            <div className="content-block">
              <div className={`post-thumbnail ${styles.frontImg}`}>
                {frontImg?.url && (
                  <img
                    className="w-100"
                    src={frontImg?.url}
                    alt={frontImg.alt}
                  />
                )}
              </div>

              <div className="post-content">
                {/* {_featuredPost()} */}
                <h1 className={`title `}>{title}</h1>
                <div className="post-meta-wrapper">
                  {_authorBox()}
                  <SocShare urlToShare={fromPage + slug} color={"white"}/>
                </div>
              </div>
            </div>
            {/* <!-- End Single Slide  --> */}
          </div>
        </div>
      </div>
    </div>
  )
}