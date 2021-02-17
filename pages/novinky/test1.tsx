import Image from 'next/image'
import SideBar from 'components/Layout/SideBar'

export default function Test1() {
  return (
    <div className="main-wrapper">
      {/* <!-- Start Banner Area --> */}
      <div className="banner banner-single-post post-formate post-standard alignwide">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Start Single Slide  --> */}
              <div className="content-block">
                {/* <!-- Start Post Thumbnail  --> */}
                <div className="post-thumbnail">
                  <img
                    src="/images/post-single/post-single-01.jpg"
                    alt="Post Images"
                  />
                  {/* <Image
              priority
              src="/images/profile.jpg"
              // className={utilStyles.borderCircle}
              // height={144}
              // width={144}
            
              // alt={name} />*/}
                </div>
                {/* <!-- End Post Thumbnail  --> */}
                {/* <!-- Start Post Content  --> */}
                <div className="post-content">
                  <div className="post-cat">
                    <div className="post-cat-list">
                      <a className="hover-flip-item-wrapper" href="#">
                        <span className="hover-flip-item">
                          <span data-text="FEATURED POST">FEATURED POST</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <h1 className="title">
                    Apple honors eight developers with annual Apple Design
                    Awards
                  </h1>
                  {/* <!-- Post Meta  --> */}
                  <div className="post-meta-wrapper">
                    <div className="post-meta">
                      <div className="post-author-avatar border-rounded">
                        <img
                          src="/images/post-images/author/author-image-3.png"
                          alt="Author Images"
                        />
                      </div>
                      <div className="content">
                        <h6 className="post-author-name">
                          <a
                            className="hover-flip-item-wrapper"
                            href="author.html"
                          >
                            <span className="hover-flip-item">
                              <span data-text="Ismat Jahan">Ismat Jahan</span>
                            </span>
                          </a>
                        </h6>
                        <ul className="post-meta-list">
                          <li>Feb 17, 2019</li>
                          <li>300k Views</li>
                        </ul>
                      </div>
                    </div>
                    <ul className="social-share-transparent justify-content-end">
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
                          <i className="fas fa-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End Post Content  --> */}
              </div>
              {/* <!-- End Single Slide  --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Banner Area --> */}
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="axil-post-details">
                <p className="has-medium-font-size">
                  Winners are recognized for outstanding app design, innovation,
                  ingenuity, and technical achievement
                </p>
                <figure className="wp-block-image">
                  <img
                    src="/images/post-single/post-single-02.jpg"
                    alt="Post Images"
                  />
                  <figcaption>
                    The Apple Design Award trophy, created by the Apple Design
                    team, is a symbol of achievement and excellence.
                  </figcaption>
                </figure>
                <p>
                  Apple today named eight app and game developers receiving an
                  Apple Design Award, each one selected for being thoughtful and
                  creative. Apple Design Award winners bring distinctive new
                  ideas to life and demonstrate deep mastery of Apple
                  technology. The apps spring up from developers large and
                  small, in every part of the world, and provide users with new
                  ways of working, creating, and playing.
                </p>
                <p>
                  “Every year, app and game developers demonstrate exceptional
                  craftsmanship and we’re honoring the best of the best,” said
                  Ron Okamoto, Apple’s vice president of Worldwide Developer
                  Relations. “Receiving an Apple Design Award is a special and
                  laudable accomplishment. Past honorees have made some of the
                  most noteworthy apps and games of all time. Through their
                  vision, determination, and exacting standards, the winning
                  developers inspire not only their peers in the Apple developer
                  community, but all of us at Apple, too.”
                </p>
                <h2>Apple Design Award Winners: Apps</h2>
                <p>
                  {' '}
                  Apple today named eight app and game developers receiving an
                  Apple Design Award, each one selected for being thoughtful and
                  creative. Apple Design Award winners bring distinctive new
                  ideas to life and demonstrate deep mastery of Apple
                  technology. The apps spring up from developers large and
                  small, in every part of the world, and provide users with new
                  ways of working, creating, and playing.
                </p>
                <p>
                  “Every year, app and game developers demonstrate exceptional
                  craftsmanship and we’re honoring the best of the best,” said
                  Ron Okamoto, Apple’s vice president of Worldwide Developer
                  Relations. “Receiving an Apple Design Award is a special and
                  laudable accomplishment. Past honorees have made some of the
                  most noteworthy apps and games of all time. Through their
                  vision, determination, and exacting standards, the winning
                  developers inspire not only their peers in the Apple developer
                  community, but all of us at Apple, too.”
                </p>
                <blockquote>
                  <p>
                    “Most of us felt like we could trust each other to be
                    quarantined together, so we didn’t need to wear masks or
                    stay far apart.”
                  </p>
                </blockquote>
                <figure className="wp-block-image">
                  <img
                    src="/images/post-single/post-single-03.jpg"
                    alt="Post Images"
                  />
                  <figcaption>
                    The Apple Design Award trophy, created by the Apple Design
                    team, is a symbol of achievement and excellence.
                  </figcaption>
                </figure>
                <h2>Apple Design Award Winners: Apps</h2>
                <p>
                  <a href="#">Apple today named</a> eight app and game
                  developers receiving an Apple Design Award, each one selected
                  for being thoughtful and creative. Apple Design Award winners
                  bring distinctive new ideas to life and demonstrate deep
                  mastery of Apple technology. The apps spring up from
                  developers large and small, in every part of the world, and
                  provide users with new ways of working, creating, and playing.
                </p>
                <p>
                  “Every year, app and game developers demonstrate exceptional
                  craftsmanship and we’re honoring the best of the best,” said
                  Ron Okamoto, Apple’s vice president of Worldwide Developer
                  Relations. “Receiving an Apple Design Award is a special and
                  laudable accomplishment. Past honorees have made some of the
                  most noteworthy apps and games of all time. Through their
                  vision, determination, and exacting standards, the winning
                  developers inspire not only their peers in the Apple developer
                  community, but all of us at Apple, too.”
                </p>

                <figure className="wp-block-image">
                  <img
                    src="/images/post-single/post-single-04.jpg"
                    alt="Post Images"
                  />
                  <figcaption>
                    The Apple Design Award trophy, created by the Apple Design
                    team, is a symbol of achievement and excellence.
                  </figcaption>
                </figure>
                <h3>Apple Design Award Winners: Apps </h3>
                <p>
                  {' '}
                  <a href="#">Apple today named</a> eight app and game
                  developers receiving an Apple Design Award, each one selected
                  for being thoughtful and creative. Apple Design Award winners
                  bring distinctive new ideas to life and demonstrate deep
                  mastery of Apple technology. The apps spring up from
                  developers large and small, in every part of the world, and
                  provide users with new ways of working, creating, and playing.
                </p>
                <p>
                  “Every year, app and game developers demonstrate exceptional
                  craftsmanship and we’re honoring the best of the best,” said
                  Ron Okamoto, Apple’s vice president of Worldwide Developer
                  Relations. “Receiving an Apple Design Award is a special and
                  laudable accomplishment. Past honorees have made some of the
                  most noteworthy apps and games of all time. Through their
                  vision, determination, and exacting standards, the winning
                  developers inspire not only their peers in the Apple developer
                  community, but all of us at Apple, too.”{' '}
                </p>
                <p>
                  More than 250 developers have been recognized with Apple
                  Design Awards over the past 20 years. The recognition has
                  proven to be an accelerant for developers who are pioneering
                  innovative designs within their individual apps and
                  influencing entire categories. Previous winners such as
                  Pixelmator, djay, Complete Anatomy, HomeCourt, “Florence,” and
                  “Crossy Road” have set the standard in areas such as
                  storytelling, interface design, and use of Apple tools and
                  technologies.
                </p>
                <p>
                  For more information on the apps and games, visit the{' '}
                  <a href="#">App Store</a>.
                </p>

                {/* <div className="tagcloud">
        <a href="#">Design</a>
        <a href="#">Life Style</a>
        <a href="#">Web Design</a>
        <a href="#">Development</a>
        <a href="#">Design</a>
        <a href="#">Life Style</a>
      </div> */}

                <div className="social-share-block">
                  <div className="post-like">
                    <a href="#">
                      <i className="fal fa-thumbs-up"></i>
                      <span>2.2k Like</span>
                    </a>
                  </div>
                  <ul className="social-icon icon-rounded-transparent md-size">
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
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Start Author  --> */}
                <div className="about-author">
                  <div className="media">
                    <div className="thumbnail">
                      {/* <a href="#"> */}
                      <img
                        src="/images/post-images/author/author-b1.png"
                        alt="Author Images"
                      />
                      {/* </a> */}
                    </div>
                    <div className="media-body">
                      <div className="author-info">
                        <h5 className="title">
                          <a className="hover-flip-item-wrapper" href="#">
                            <span className="hover-flip-item">
                              <span data-text="Rahabi Ahmed Khan">
                                Rahabi Ahmed Khan
                              </span>
                            </span>
                          </a>
                        </h5>
                        <span className="b3 subtitle">Sr. UX Designer</span>
                      </div>
                      <div className="content">
                        <p className="b1 description">
                          At 29 years old, my favorite compliment is being told
                          that I look like my mom. Seeing myself in her image,
                          like this daughter up top, makes me so proud of how
                          far I’ve come, and so thankful for where I come from.
                        </p>
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
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Author  --> */}
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  )
}
