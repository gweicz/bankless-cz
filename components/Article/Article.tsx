import AboutAuthor from './AboutAuthor'
import Banner from './Banner'
import SideBar from 'components/Layout/SideBar'
import SocialShareBlock from './SocialShareBlock'

interface ArticleTypes {
  data?: any
  children?: any
}

export default function Article({ data, children }: ArticleTypes) {
  const { bannerImg, author, date, title } = data || {}
  return (
    <div className="main-wrapper">
      <Banner
        img={{
          url: bannerImg.url,
          alt: bannerImg.alt,
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
                <SocialShareBlock />
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
