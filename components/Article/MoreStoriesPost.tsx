import { ArticleTypes } from 'components/Types/ArticleTypes'
import Link from 'next/link'
import style from './MoreStoriesPost.module.scss'

export default function MoreStoriesPost({
  articleData,
}: {
  articleData: ArticleTypes
}) {
  const { category, frontImg, title, detailUrl } = articleData || {}
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="post-stories content-block mt--30">
          <div className="post-thumbnail">
            <Link href={detailUrl}>
              <a href="post-details.html">
                <img
                  src={frontImg?.url}
                  alt={frontImg?.alt}
                  className={style.img}
                />
              </a>
            </Link>
          </div>
          <div className="post-content">
            <div className="post-cat">
              <div className="post-cat-list">
                <a className="cursor-default text-dark">{category}</a>
              </div>
            </div>
            <h5 className="title">
              <Link href={detailUrl}>
                <a>{title}</a>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
