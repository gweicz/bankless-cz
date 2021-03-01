import moment from "moment"

moment.locale('cs')

type HashInfo = {
  meta_title: string,
  meta_description: string,
  feature_image: string,
  html: string,
  published_at: string
}

const HashPost = (hashInfo : HashInfo) => {
  return (
    <div className="content-block post-medium mb--20">
      <div className="post-content hash-news">
        <span className="hash-content" dangerouslySetInnerHTML={{__html: hashInfo.html}} />
        <div className="post-meta-wrapper d-flex">
          <div className="post-meta">
            <div className="content">
              <ul className="post-meta-list">
                <li>{moment(hashInfo.published_at).format('HH:mm')}</li>
                <li>{moment(hashInfo.published_at).format('MMM DD, YYYY')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HashPost;