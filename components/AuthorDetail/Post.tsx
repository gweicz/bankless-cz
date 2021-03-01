import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link'


const Post = (props: any) => {
    if(props.article === undefined){
        return null
    }
    return (
      <div className="content-block post-list-view axil-control is-active mt--30">
      <div className="post-thumbnail">
        <a href="post-details.html">
          <img src={props.article.feature_image} alt="Post Images"/>
        </a>
      </div>
      <div className="post-content">
        <div className="post-cat">
          <div className="post-cat-list">
            <a className="hover-flip-item-wrapper" href="#">
              <span className="hover-flip-item">
                  <span data-text={props.article.primary_tag.name}>{props.article.primary_tag.name}</span>
              </span>
            </a>
          </div>
        </div>
        <h4 className="title">
          <a href="post-details.html">{props.article.title}</a>
        </h4>
        <div className="post-meta-wrapper">
          <ul className="social-share-transparent justify-content-end">
            <li><a href={props.fb}><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
            <li><a href={props.twitter}><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
            <li><a href={props.web}><FontAwesomeIcon icon="link"/></a></li>
          </ul>
          <div className="post-meta">
            <div className="content">
              <h6 className="post-author-name">
                <a className="hover-flip-item-wrapper" href="author.html">
                  <span className="hover-flip-item">
                      <span data-text={props.username}>{props.username}</span>
                  </span>
                </a>
              </h6>
              <ul className="post-meta-list">
                <li>{props.article.published_at}</li>
                <li>{props.article.reading_time} min</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Post