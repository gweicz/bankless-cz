import AboutAuthor from './AboutAuthor'
import { ArticleTypes } from 'components/Types/ArticleTypes'
import Banner from './Banner'
import MoreStories from './MoreStories'
import SideBar from 'components/Layout/SideBar'
import SocShare from 'components/SocShare'
import SocialShareBlock from './SocialShareBlock'
import { article1Data } from 'pages/novinky/article1'
import { article2Data } from 'pages/novinky/article2'
import { article3Data } from 'pages/novinky/article3'
import { article4Data } from 'pages/novinky/article4'

export default function Article({
  articleData,
  children,
}: {
  articleData: ArticleTypes
  children: any
}) {
  const { frontImg, author, date, title, detailUrl } = articleData || {}
  return (
    <div className="main-wrapper">
      <Banner articleData={articleData} />
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="axil-post-details">
                {children}
                {/* <SocialShareBlock /> */}
                <div className="social-share-block justify-content-end">
                  <SocShare urlToShare={detailUrl} isRoundedIcons />
                </div>
                <AboutAuthor
                  name={author.name}
                  description={author.description}
                  img={{
                    url: author.img?.url || '',
                    alt: author.img?.alt,
                  }}
                  profileUrl={author.profileUrl}
                />
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      <MoreStories
        articles={[article1Data, article2Data, article3Data, article4Data]}
      />
    </div>
  )
}
