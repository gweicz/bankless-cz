import {getPosts, getSearchPost} from 'pages/api/posts'
import {useEffect, useState} from 'react'

import {GetServerSideProps} from 'next'
import Head from 'next/head'
import {PostOrPage} from '@tryghost/content-api'
import React from 'react'
import {fetchMenuPosts} from 'utils/fetchMenuPosts'
import {useMenuData} from 'context/SessionContext'
import PostList from 'components/HomePage/PostList/PostList'
import SideBar from 'components/Layout/SideBar'
import google from 'utils/google'
import { useSessionContext } from 'context/SessionContext'
import { POSTS_ON_PAGE_LIMIT } from '../../constants'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query} = context
  const hashovky = await getPosts({
    limit: 5,
    page: 1,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

  const menuPosts = await fetchMenuPosts()
  const searchPosts = await getSearchPost()

  return {
    props: {
      hashovky,
      menuPosts,
      searchPosts
    }, // will be passed to the page component as props
  }
}

export default function Search({
    hashovky,
    menuPosts,
    searchPosts,
    isCoockiesEnabled
}: {
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
  searchPosts?: PostOrPage[]
  isCoockiesEnabled: boolean
}) {
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])
  const [nextPage, setNextPage] = useState(1)
  const [postsState, setPostsState] = useState<PostOrPage[]>([])

  const { searchSlugs, setSearchSlugs } = useSessionContext()

  useMenuData({menuPosts, searchPosts})

  useEffect(() => {
    if (!hashovky) return
    setHashovkyState([...hashovkyState, ...hashovky])
  }, [hashovky])

  useEffect(() => {
    if (!searchPosts) return
    setPostsState([...postsState, ...searchPosts])
    setNextPage(nextPage + 1)
  }, [searchPosts])

  let PostsFiltered: PostOrPage[] = [];
  if(!(searchSlugs == 'null' || undefined)) { 
    postsState.forEach((post)=> {
      searchSlugs.forEach((slug: string) => {
        if(slug == post.slug) {
          PostsFiltered.push(post)
        }
     })
   })}

  return (
    <div>
      <Head>
        <title>Bankless | Vyhledávání</title>
        <link rel="icon" type="image/png" href="/favicon.png"/>

        <base target="_blank"/>
        {google(isCoockiesEnabled)}
      </Head>
      <div className='container'>
      <h1>Výsledky vyhledávání</h1>
      <div className="axil-post-list-area post-listview-visible-color bg-color-white">
            <div className="row">
          <PostList
          posts={PostsFiltered}
          nextPage={nextPage}
          isLastPage={searchPosts?.length !== POSTS_ON_PAGE_LIMIT}
          />
          <SideBar hashovky={hashovkyState}/>
    </div>
  </div>
  </div>
  </div>
  )
}
