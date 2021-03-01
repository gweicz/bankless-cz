import Link from 'next/link'

type Props = {
  img?: {
    url: string
    alt?: string
  }
  name: string
  description?: string
  job?: string
  profileUrl?: string
}

export default function AboutAuthor({
  name,
  description,
  img,
  job,
  profileUrl,
}: Props) {
  const _socFollow = () => (
    <ul className="social-share-transparent size-md">
      <li>
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="far fa-envelope"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
    </ul>
  )

  const _name = () => (
    <>
      {profileUrl ? (
        <h5 className="title">
          <Link href={profileUrl}>
            <a className="hover-flip-item-wrapper">
              <span className="hover-flip-item text-left">
                <span data-text={name}>{name}</span>
              </span>
            </a>
          </Link>
        </h5>
      ) : (
        <h5 className="title text-right">
          <span>{name}</span>
        </h5>
      )}
    </>
  )

  const _profileImg = () =>
    img?.url && (
      <div className="thumbnail">
        {profileUrl ? (
          <Link href={profileUrl}>
            <a href="#">
              <img src={img?.url} alt={img?.alt} />
            </a>
          </Link>
        ) : (
          <a>
            <img src={img.url} alt={img.alt} />
          </a>
        )}
      </div>
    )

  return (
    <div className="about-author">
      <div className="media">
        {_profileImg()}

        <div className="media-body">
          <div className="author-info">
            {_name()}
            <span className="b3 subtitle">{job}</span>
          </div>
          <div className="content">
            <p className="b1 description">{description}</p>
            {_socFollow()}
          </div>
        </div>
      </div>
    </div>
  )
}
