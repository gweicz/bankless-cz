import React, { useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import PostList from 'components/HomePage/PostList/PostList'
import { PostOrPage } from '@tryghost/content-api'
import SideBar from 'components/Layout/SideBar'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import {getPosts, getSinglePost} from 'pages/api/posts'
import { useMenuData } from 'context/SessionContext'
import google from 'utils/google'
import { useSessionContext } from 'context/SessionContext'
import { POSTS_ON_PAGE_LIMIT } from '../../constants'


// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {

    const hashovky = await getPosts({
        limit: 5,
        page: 1,
        include: ['tags'],
        filter: 'tag:hashovka',
      })

  const menuPosts = await fetchMenuPosts()
  let ArticleSlugsTitles = await fetch('http://localhost:3001/api/ArticleSlugsTitles') //has to change
  ArticleSlugsTitles = await ArticleSlugsTitles.json()

  if (!hashovky) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }


  return {
    props: { hashovky, menuPosts, ArticleSlugsTitles }, // will be passed to the page component as props
  }
}

const Home = ({
  hashovky,
  menuPosts,
  isCoockiesEnabled,
  ArticleSlugsTitles
}: {
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
  isCoockiesEnabled: boolean
  ArticleSlugsTitles?: {ArticleSlugs: string[], ArticleTitles: string[]}
}) => {

  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])
  const { searchSlug } = useSessionContext()
  const [PostsFiltered, setPostsFiltered] = useState<PostOrPage[] | null[]>([])

  const [nextPage, setNextPage] = useState(1) //needs implementation

  useMenuData({ menuPosts })

  useEffect(() => {
    if (!hashovky) return
    setHashovkyState([...hashovkyState, ...hashovky])
  }, [hashovky])

  useEffect(() => {
    let Posts: Promise<PostOrPage | null>[] = []
    if(searchSlug == null) return
    ArticleSlugsTitles!.ArticleTitles.forEach((Title: string, id: number) => {
        if(Title.toLocaleLowerCase().includes(searchSlug.toLowerCase())) {
            Posts.push(getSinglePost(ArticleSlugsTitles!.ArticleSlugs[id]))
        }
    })
    Promise.all(Posts).then((Posts) => {
        setPostsFiltered(Posts)
    })
  }, [searchSlug])

  return (
    <div>
      <Head>
        <title>Bankless | Vzhledávání</title>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <base target="_blank" />
        {google(isCoockiesEnabled)}
      </Head>
      <main>
        <div className="container">
          <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="row">
              <PostList
                posts={PostsFiltered}
                nextPage={nextPage}
                isLastPage={PostsFiltered?.length !== POSTS_ON_PAGE_LIMIT}
              />
              <SideBar hashovky={hashovkyState} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
