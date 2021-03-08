import AuthorDetail from 'components/AuthorDetail/AuthorDetail'
import Post from 'components/AuthorDetail/Post'
import SideBar from 'components/Layout/SideBar'
import {getAuthorInfo, getAuthorPosts} from 'pages/api/authorPosts'
import {GetServerSideProps} from 'next'
import {getPosts} from 'pages/api/posts'
import {PostOrPage} from '@tryghost/content-api'
import {useEffect, useState} from 'react'
import PostList from "../../components/HomePage/PostList/PostList";
import {POSTS_ON_PAGE_LIMIT} from "../novinky/polkadot";


export const getServerSideProps: GetServerSideProps = async (context) => {

  const {query} = context
  let username: any = query.username
  const page: number = 1
  const author: any = await getAuthorInfo(username)
  const posts_notFiltered: any = await getAuthorPosts(username)
  const hashovky: any = await getPosts({
    limit: 5,
    page,
    include: ['tags'],
    filter: 'tag:hashovka'
  })

  if (!posts_notFiltered) {
    return {
      notFound: true
    }
  }
  if (!author) {
    return {
      notFound: true
    }
  }

  let posts = posts_notFiltered.filter(function (element: any, index: number, arr: any) {
    let isHashovka = element.primary_tag.slug === 'hashovka'
    if (!isHashovka) {
      isHashovka = element.primary_tag.slug === 'hashovka-important'
    }
    return !isHashovka;
  });

  return {props: {author, posts, hashovky}}
}


const AuthorDetailPage = ({author, posts, hashovky}: { author?: object | null | undefined, posts?: PostOrPage[], hashovky?: PostOrPage[] }) => {
  if (!author) return null
  if (!posts) return null

  const [postsState, setPostsState] = useState<PostOrPage[]>([])
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])
  const [nextPage, setNextPage] = useState(1)

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
      <AuthorDetail
        username={author.name}
        picture={author.profile_image}
        bio={author.bio}
        fb={author.facebook}
        twitter={author.twitter}
        web={author.website}
        location={author.location}
      />

      <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
        <div className="container" style={{maxWidth: "1280px"}}>
          <div className="row">
            <PostList
              posts={postsState}
              nextPage={nextPage}
              isLastPage={posts?.length !== POSTS_ON_PAGE_LIMIT}
            />
            <SideBar hashovky={hashovkyState}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorDetailPage