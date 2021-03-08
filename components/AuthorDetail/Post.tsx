import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { formatDate } from 'components/helpers/formatDate'

const Post = (props: any) => {
    if(props.article === undefined){
        return null
    }

    const date = props.article.published_at && formatDate(props.article.published_at)
    const twitterUrl = `https://twitter.com/${props.twitter}`
    const fbUrl = `https://www.facebook.com/${props.fb}`
    const PostDetailUrl = `/novinky/${props.article.slug}`


    return (
      <div className="content-block post-list-view axil-control is-active mt--30">
      <div className="post-thumbnail">
      <Link href={PostDetailUrl}>
        <a>
          <img src={props.article.feature_image} alt="Post Images"/>
        </a>
        </Link>
      </div>
      <div className="post-content">
        <div className="post-cat">
          <div className="post-cat-list">
          <Link href={`/novinky/${props.article.primary_tag.slug}`}>
            <a className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                  <span data-text={props.article.primary_tag.name}>{props.article.primary_tag.name}</span>
              </span>
            </a>
            </Link>
          </div>
        </div>
        <h4 className="title">
          <Link href={PostDetailUrl}>
          <a>{props.article.title}</a>
          </Link>
        </h4>
        <div className="post-meta-wrapper">
          <ul className="social-share-transparent justify-content-end">
            <li><a href={fbUrl}><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
            <li><a href={twitterUrl}><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
            <li><a href={props.web}><FontAwesomeIcon icon="link"/></a></li>
          </ul>
          <div className="post-meta">
            <div className="content">
              <h6 className="post-author-name">
              <a className="hover-flip-item-wrapper">
                <span className="hover-flip-item text-right">
                  <span data-text={props.username}>{props.username}</span>
                </span>
              </a>
              </h6>
              <ul className="post-meta-list">
                <li>{date}</li>
                <li>{props.article.reading_time} minut</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Post