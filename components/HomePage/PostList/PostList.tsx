import Link from 'next/link'
import { POSTS_ON_PAGE_LIMIT } from 'pages/index'
import Post from './Post'
import { PostOrPage } from '@tryghost/content-api'
import { getPosts } from 'pages/api/posts'
import { useState } from 'react'

const PostList = ({ posts }: { posts: PostOrPage[] }) => {
  const [postsState, setPostsState] = useState<PostOrPage[]>(posts)
  const [nextPage, setNextPage] = useState(2)
  const [showNextBtn, setShowNextBtn] = useState(true)

  const fetchNextPosts = async () => {
    const newPosts = await getPosts({
      limit: POSTS_ON_PAGE_LIMIT,
      page: nextPage,
      include: ['tags', 'authors'],
    })

    if (!newPosts) return
    if (newPosts.length !== POSTS_ON_PAGE_LIMIT) {
      setShowNextBtn(false)
    }
    if (postsState) {
      setPostsState([...postsState, ...newPosts])
      setNextPage(nextPage + 1)
    }
  }

  return (
    <div className="col-lg-8 col-xl-8">
      {(postsState || []).map((postData, index) => (
        <Post data={postData} key={index} />
      ))}

      {showNextBtn && (
        <div className="d-flex justify-content-center">
          <button
            onClick={fetchNextPosts}
            className="w-auto axil-button button-rounded hover-flip-item-wrapper m-t-5"
          >
            Další
          </button>
        </div>
      )}
    </div>
  )
}

export default PostList
