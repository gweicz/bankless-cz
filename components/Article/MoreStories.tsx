import { ArticleTypes } from 'components/Types/ArticleTypes'
import MoreStoriesPost from './MoreStoriesPost'

export default function MoreStories({
  articles,
}: {
  articles: ArticleTypes[]
}) {
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
            {articles.map((item) => (
              <MoreStoriesPost articleData={item} key={item.detailUrl} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
