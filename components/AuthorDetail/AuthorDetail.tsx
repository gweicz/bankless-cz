import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link'

const AuthorDetail = (props: any) => {
  return (
 <div>
           <div className="axil-author-area axil-author-banner bg-color-grey">
            <div className="container">
                    <div className="col-lg-12">
                        <div className="about-author">
                            <div className="media" style={{margin: "100px 20px 0px 20px"}}>
                                <div className="thumbnail">
                                    <a href={props.web}>
                                        <img src={props.picture} alt="Author's Image"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <div className="author-info">
                                        <h1><a href="#">{props.username}</a></h1>
                                        <span>{props.location}</span>
                                    </div>
                                    <div className="content">
                                        <p className="b1 description">{props.bio}</p>
                                        <ul className="social-share-transparent justify-content-centre">
                                        <li><a href={props.fb}><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
                                        <li><a href={props.twitter}><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
                                        <li><a href={props.web}><FontAwesomeIcon icon="link"/></a></li>
                                      </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default AuthorDetail