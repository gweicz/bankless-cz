import AboutAuthor from './AboutAuthor'
import Banner from './Banner'
import SideBar from 'components/Layout/SideBar'
import SocShare from 'components/SocShare'
import SocialShareBlock from './SocialShareBlock'

interface ArticleTypes {
  data?: any
  children?: any
}

export default function Article({ data, children }: ArticleTypes) {
  const { frontImg, author, date, title, detailUrl } = data || {}
  return (
    <div className="main-wrapper">
      <Banner
        detailUrl={detailUrl}
        img={{
          url: frontImg.url,
          alt: frontImg.alt,
        }}
        title={title}
        date={date}
        author={{
          name: author.name,
          img: {
            url: author.imgSmall.url,
            alt: author.imgSmall.alt,
          },
          profileUrl: author.profileUrl,
        }}
      />
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="axil-post-details">
                {children}
                {/* <SocialShareBlock /> */}
                <div className="social-share-block justify-content-end p-b-2">
                  <SocShare urlToShare={detailUrl} />
                </div>
                <AboutAuthor
                  name={author.name}
                  description={author.description}
                  img={{
                    url: author.img.url,
                    alt: author.img.url,
                  }}
                  profileUrl={author.profileUrl}
                />
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  )
}
