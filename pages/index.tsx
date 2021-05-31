import React, { useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import MainBanner from 'components/HomePage/MainBanner'
import { NextSeo } from 'next-seo'
import { POSTS_ON_PAGE_LIMIT } from '../constants'
import PostList from 'components/HomePage/PostList/PostList'
import { PostOrPage } from '@tryghost/content-api'
import SideBar from 'components/Layout/SideBar'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import { getPosts } from './api/posts'
import google from 'utils/google'
import styles from 'styles/Home.module.scss'
import { useMenuData } from 'context/SessionContext'

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  const page = Number(query?.page) || 1

  const posts = await getPosts({
    limit: POSTS_ON_PAGE_LIMIT,
    page,
    include: ['tags', 'authors'],
    filter: 'tag:-hashovka',
  })

  const hashovky = await getPosts({
    limit: 5,
    page,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

  const menuPosts = await fetchMenuPosts()

  if (!posts) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }

  const postsPagination = posts.meta.pagination

  return {
    props: { posts, hashovky, menuPosts, postsPagination }, // will be passed to the page component as props
  }
}

const Home = ({
  posts,
  hashovky,
  menuPosts,
  postsPagination,
  isCoockiesEnabled,
}: {
  posts?: PostOrPage[] | any
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
  postsPagination?: { [key: string]: number | null }
  isCoockiesEnabled: boolean
}) => {
  const [postsState, setPostsState] = useState<PostOrPage[]>([])
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])

  const [nextPage, setNextPage] = useState(1)

  useMenuData({ menuPosts })

  useEffect(() => {
    if (!posts) return
    setPostsState([...postsState, ...posts])
    setNextPage(nextPage + 1)
  }, [posts])

  useEffect(() => {
    if (!hashovky) return
    setHashovkyState([...hashovkyState, ...hashovky])
  }, [hashovky])

  useEffect(() => {
    const main_blogger = document.createElement('script')
    main_blogger.src = '/static/main_blogger.js'
    main_blogger.async = true
    document.body.appendChild(main_blogger)

    return () => {
      document.body.removeChild(main_blogger)
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Bankless | Novinkový a vzdělávací web o kryptoměnách</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <script type="text/javascript" src="/static/jquery.js"></script>
          <script type="text/javascript" src="/static/slick.min.js"></script>
          <base target="_blank" />
          {google(isCoockiesEnabled)}
        </Head>
        <NextSeo
          title="Bankless | Novinkový a vzdělávací web o kryptoměnách"
          description="Novinkový a vzdělávací web o kryptoměnách, který vám každý den přináší zajímavosti z krypto světa."
          canonical="https://bankless.cz"
          openGraph={{
            url: 'https://bankless.cz',
            title: 'Bankless | Novinkový a vzdělávací web o kryptoměnách',
            description:
              'Novinkový a vzdělávací web o kryptoměnách, který vám každý den přináší zajímavosti z krypto světa.',
            images: [
              {
                url: 'https://bankless.cz/thumbnail.png',
                width: 960,
                height: 540,
                alt: 'BanklessCZ',
              },
            ],
            site_name: 'Bankless',
          }}
          twitter={{
            handle: '@banklesscz',
            site: '@banklesscz',
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            { property: 'twitter:domain', content: 'bankless.cz' },
            { property: 'twitter:url', content: 'https://bankless.cz/' },
            {
              name: 'twitter:title',
              content: 'Bankless | Novinkový a vzdělávací web o kryptoměnách',
            },
            {
              name: 'twitter:description',
              content:
                'Novinkový a vzdělávací web o kryptoměnách, který vám každý den přináší zajímavosti z krypto světa.',
            },
            {
              name: 'twitter:image',
              content: 'https://bankless.cz/thumbnail.png',
            },
          ]}
        />
        <main className={styles.main}>
          {postsState && <MainBanner data={postsState?.slice(0, 3) || []} />}
          <div className="container">
            <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
              <div className="row">
                <PostList
                  posts={postsState}
                  nextPage={nextPage}
                  isLastPage={postsState?.length === postsPagination?.total}
                />

                <SideBar hashovky={hashovkyState} />
              </div>
            </div>
          </div>
        </main>

        {/* <!-- Start Tab Area  --> */}
        <div className="axil-tab-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">Innovation &#38; Tech</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* <!-- Start Tab Content Wrapper  --> */}
                <div className="tab-content" id="axilTabContent">
                  <div
                    className="single-tab-content tab-pane fade show active"
                    id="tabone"
                    role="tabpanel"
                    aria-labelledby="tab-one"
                  >
                    <div className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">
                      {/* <!-- Start Single Post  --> */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="ACCESSIBILITY">
                                      ACCESSIBILITY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title">
                              <a href="post-details.html">
                                Lightweight, grippable, and ready to go.
                              </a>
                            </h4>
                          </div>
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              {/* <!--<img
                              src="assets/images/post-images/post-column-01.jpg"
                              alt="Post Images"
                            />--> */}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Single Post  --> */}

                      {/* <!-- Start Single Post  --> */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="APPLE DESIGN">
                                      APPLE DESIGN
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title">
                              <a href="post-details.html">
                                Bold new experience. Same Mac magic.
                              </a>
                            </h4>
                          </div>
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              <img
                                src="/images/others/maintenence.png"
                                alt="Post Images"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Single Post  --> */}

                      {/* <!-- Start Single Post  --> */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="GADGETS">GADGETS</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title">
                              <a href="post-details.html">
                                Creative Game With The New DJI Mavic Air 2
                              </a>
                            </h4>
                          </div>
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              {/* <!-- <img
                              src="assets/images/post-images/post-column-05.jpg"
                              alt="Post Images"
                            />--> */}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Single Post  --> */}

                      {/* <!-- Start Single Post  --> */}
                      <div className="slick-single-layout">
                        <div className="content-block modern-post-style text-center content-block-column">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="ACCESSIBILITY">
                                      ACCESSIBILITY
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <h4 className="title">
                              <a href="post-details.html">
                                Lightweight, grippable, and ready to go.
                              </a>
                            </h4>
                          </div>
                          <div className="post-thumbnail">
                            <a href="post-details.html">
                              {/* <!-- <img
                              src="assets/images/post-images/post-column-06.jpg"
                              alt="Post Images"
                            /> --> */}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Single Post  --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- End Tab Content Wrapper  --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Tab Area  --> */}
      </div>
    </>
  )
}

export default Home
