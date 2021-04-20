import { Author } from '@tryghost/content-api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './AuthorDetail.module.scss'
const AuthorDetail = ({ author }: { author: Author }) => {
  const _profileImg = () => (
    <div className="thumbnail">
      {author.website ? (
        <a href={author.website} target="_blank">
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
  )

  const _socFollow = () => (
    <ul className="social-share-transparent justify-content-centre">
      {author.facebook && (
        <li>
          <a href={'http://facebook.com/' + author.facebook} target="_blank">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
        </li>
      )}
      {author.twitter && (
        <li>
          <a href={'http://twitter.com/' + author.twitter} target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
      )}
    </ul>
  )
  return (
    <div>
      <div className="axil-author-area axil-author-banner bg-color-grey">
        <div className="container">
          <div className="col-lg-12">
            <div className="about-author">
              <div
                className={`media ${styles.aboutAuthorImgNameMobile}`}
                style={{ margin: '100px 0 0 0' }}
              >
                {_profileImg()}

                <div className="media-body">
                  <div className="author-info">
                    <h1 className={styles.authorName}>{author.name}</h1>
                  </div>
                  <div className="content">
                    <p className={`b1 ${styles.authorDescriptionDesktop}`}>
                      {author.bio}
                    </p>
                    {_socFollow()}
                  </div>
                </div>
              </div>
              <p className={`b1 ${styles.authorDescriptionMobile}`}>
                {author.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorDetail
