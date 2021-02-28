import MoreStoriesPost from './MoreStoriesPost'
import { PostOrPage } from '@tryghost/content-api'
import { formatGhostDataForArticlePost } from 'components/helpers/formatGhostDataForArticlePost'

export default function MoreStories({ articles }: { articles?: PostOrPage[] }) {
  console.log('articles: ', articles)
  if (!articles) return null

  return (
    <>
      <div className="axil-more-stories-area axil-section-gap bg-color-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="title">Další články</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {articles.map((articleData) => {
              const { detailUrl } = formatGhostDataForArticlePost(articleData)

              return (
                <MoreStoriesPost articleData={articleData} key={detailUrl} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
