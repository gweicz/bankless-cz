import { ArticleTypes } from 'components/Types/ArticleTypes'
import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import { formatGhostDataForArticlePost } from 'components/helpers/formatGhostDataForArticlePost'
import style from './MoreStoriesPost.module.scss'

export default function MoreStoriesPost({
  articleData,
}: {
  articleData: PostOrPage
}) {
  const { category, frontImg, title, slug } = formatGhostDataForArticlePost(
    articleData,
  )

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="post-stories content-block mt--30">
          <div className="post-thumbnail">
            <Link href={slug}>
              <a href="post-details.html">
                {frontImg?.url && (
                  <img
                    src={frontImg?.url}
                    alt={frontImg?.alt}
                    className={style.img}
                  />
                )}
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
              <Link href={slug}>
                <a>{title}</a>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
