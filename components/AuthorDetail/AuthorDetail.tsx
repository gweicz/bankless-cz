import { Author } from '@tryghost/content-api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AuthorDetail = ({ author }: { author: Author }) => {
  return (
    <div>
      <div className="axil-author-area axil-author-banner bg-color-grey">
        <div className="container">
          <div className="col-lg-12">
            <div className="about-author">
              <div className="media" style={{ margin: '100px 20px 0px 20px' }}>
                <div className="thumbnail">
                  {author.website ? (
                    <a href={author.website}>
                      {author.profile_image && (
                        <img src={author.profile_image} alt="Author's Image" />
                      )}
                    </a>
                  ) : (
                    <a href="#" className="cursor-default">
                      {author.profile_image && (
                        <img src={author.profile_image} alt="Author's Image" />
                      )}
                    </a>
                  )}
                </div>
                <div className="media-body">
                  <div className="author-info">
                    <h1>{author.name}</h1>
                  </div>
                  <div className="content">
                    <p className="b1 description">{author.bio}</p>
                    <ul className="social-share-transparent justify-content-centre">
                      {author.facebook && (
                        <li>
                          <a href={author.facebook}>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                          </a>
                        </li>
                      )}
                      {author.twitter && (
                        <li>
                          <a href={author.twitter}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorDetail
