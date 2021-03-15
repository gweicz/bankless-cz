import { Author, PostOrPage } from '@tryghost/content-api'
import { getAuthorInfo, getAuthorPosts } from 'pages/api/authorPosts'
import { useEffect, useState } from 'react'

import AuthorDetail from 'components/AuthorDetail/AuthorDetail'
import { GetServerSideProps } from 'next'
import { POSTS_ON_PAGE_LIMIT } from '../novinky/polkadot'
import Post from 'components/AuthorDetail/Post'
import PostList from '../../components/HomePage/PostList/PostList'
import SideBar from 'components/Layout/SideBar'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import { getPosts } from 'pages/api/posts'
import { useMenuData } from 'context/SessionContext'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  let username: any = query.username
  const page: number = 1
  const author: any = await getAuthorInfo(username)
  const posts_notFiltered: any = await getAuthorPosts(username)
  const hashovky: any = await getPosts({
    limit: 5,
    page,
    include: ['tags'],
    filter: 'tag:hashovka',
  })

  const menuPosts = await fetchMenuPosts()

  if (!posts_notFiltered) {
    return {
      notFound: true,
    }
  }
  if (!author) {
    return {
      notFound: true,
    }
  }

  let posts = posts_notFiltered.filter(function (
    element: any,
    index: number,
    arr: any,
  ) {
    let isHashovka = element.primary_tag.slug === 'hashovka'
    if (!isHashovka) {
      isHashovka = element.primary_tag.slug === 'hashovka-important'
    }
    return !isHashovka
  })

  return { props: { author, posts, hashovky, menuPosts } }
}

const AuthorDetailPage = ({
  author,
  posts,
  hashovky,
  menuPosts,
}: {
  author?: Author
  posts?: PostOrPage[]
  hashovky?: PostOrPage[]
  menuPosts?: PostOrPage[]
}) => {
  if (!author) return null
  if (!posts) return null

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

  return (
    <div>
      <AuthorDetail author={author} />

      <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
        <div className="container" style={{ maxWidth: '1280px' }}>
          <div className="row">
            <PostList
              posts={postsState}
              nextPage={nextPage}
              isLastPage={posts?.length !== POSTS_ON_PAGE_LIMIT}
            />
            <SideBar hashovky={hashovkyState} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorDetailPage