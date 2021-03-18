import AboutAuthor from './AboutAuthor'
import Banner from './Banner'
import MoreStories from './MoreStories'
import { PostOrPage } from '@tryghost/content-api'
import { SRLWrapper } from 'simple-react-lightbox'
import SideBar from 'components/Layout/SideBar'
import SocShare from 'components/SocShare'
import SocialShareBlock from './SocialShareBlock'
import { formatGhostDataForArticlePost } from 'components/helpers/formatGhostDataForArticlePost'

export default function Article({
  articleData,
  moreStories,
  children,
  hashovky,
  fromPage,
}: {
  articleData: PostOrPage
  moreStories?: PostOrPage[]
  children: any
  hashovky?: PostOrPage[]
  fromPage: string
}) {
  const { slug, author } = formatGhostDataForArticlePost(articleData)

  return (
    <div className="main-wrapper">
      <Banner articleData={articleData} fromPage={fromPage} />
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="axil-post-details">
                <SRLWrapper>
                  <div className="article-content">{children}</div>
                </SRLWrapper>
                {/* <SocialShareBlock /> */}
                <div className="social-share-block justify-content-end m-t-5">
                  <SocShare urlToShare={fromPage + slug} isRoundedIcons />
                </div>
                <AboutAuthor
                  name={author?.name || ''}
                  description={author?.description || ''}
                  img={{
                    url: author?.img?.url || '',
                    alt: author?.name,
                  }}
                  profileUrl={author.profileUrl}
                />
              </div>
            </div>
            <SideBar hashovky={hashovky} />
          </div>
        </div>
      </div>
      <MoreStories articles={moreStories} />
    </div>
  )
}
