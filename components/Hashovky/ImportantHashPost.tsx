import moment from "moment"

moment.locale('cs')

type HashInfo = {
  meta_title: string,
  meta_description: string,
  feature_image: string,
  html: string,
  published_at: string
}

const ImportantHashPost = (hashInfo : HashInfo) => {
  return (
    <div className="content-block post-list-view axil-control is-active mt--30 hash-post">
      <div className="post-content">
        <span dangerouslySetInnerHTML={{__html: hashInfo.html}} />
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

export default ImportantHashPost