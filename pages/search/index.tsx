import {useEffect, useState } from 'react'

import {GetServerSideProps} from 'next'
import Head from 'next/head'
import {PostOrPage} from '@tryghost/content-api'
import React from 'react'
import {fetchMenuPosts} from 'utils/fetchMenuPosts'
import {useMenuData} from 'context/SessionContext'
import SideBar from 'components/Layout/SideBar'
import google from 'utils/google'
import { useSessionContext } from 'context/SessionContext'
import { POSTS_ON_PAGE_LIMIT } from '../../constants'
import style from './search.module.scss'
import {getPosts, getSinglePost} from 'pages/api/posts'
import PostList from 'components/HomePage/PostList/PostList'

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const hashovky = await getPosts({
    limit: 5,
    page: 1,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

  const menuPosts = await fetchMenuPosts()  
  let ArticleSlugsTitles = await fetch('http://localhost:3001/api/ArticleSlugsTitles')
  ArticleSlugsTitles = await ArticleSlugsTitles.json()

  return {
    props: {
      hashovky,
      menuPosts,
      ArticleSlugsTitles
    }, // will be passed to the page component as props
  }
}

export default function Search({
    hashovky,
    menuPosts,
    ArticleSlugsTitles = [],
    isCoockiesEnabled
}: {
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
  ArticleSlugsTitles?: any
  isCoockiesEnabled: boolean
}) {
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])
  const [nextPage, setNextPage] = useState(0)   //todo implement next page feature
  const [PostsFiltered, setPostsFiltered] = useState<PostOrPage[]>([])
  const { searchSlug } = useSessionContext()

  useMenuData({menuPosts})

  useEffect(() => {
    if (!hashovky) return
    setHashovkyState([...hashovkyState, ...hashovky])
  }, [hashovky])

  useEffect(() => {
    let Posts: any[] = []
    const getSearchPosts = async () => {
      if(searchSlug == null) {return}    
      ArticleSlugsTitles.ArticleTitles.forEach( async (Title: string, id: number) => {
        if(Title.toLocaleLowerCase().includes(searchSlug.toLowerCase())) {
            Posts.push(await getSinglePost(ArticleSlugsTitles.ArticleSlugs[id]))
        }
      })
    }

    getSearchPosts().then(() => {
      setPostsFiltered(Posts)
    })
  }, [searchSlug])

  return (
    <div>
      <Head>
        <title>Bankless | Vyhledávání</title>
        <link rel="icon" type="image/png" href="/favicon.png"/>

        <base target="_blank"/>
        {google(isCoockiesEnabled)}
      </Head>
      <div className='container'>
      <h1 className={style.textMain}>Výsledky vyhledávání</h1>
      <div className="axil-post-list-area post-listview-visible-color bg-color-white">
        <div className="row">
          <PostList
            posts={PostsFiltered}
            nextPage={nextPage}
            isLastPage={PostsFiltered?.length !== POSTS_ON_PAGE_LIMIT}
          />
          <SideBar hashovky={hashovkyState}/>
        </div>
  </div>
  </div>
  </div>
  )
}
