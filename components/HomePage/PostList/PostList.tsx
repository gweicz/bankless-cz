import Post from './Post'
import { article1Data } from 'pages/novinky/article1'
import { article2Data } from 'pages/novinky/article2'
import { article3Data } from 'pages/novinky/article3'
import { article4Data } from 'pages/novinky/article4'
import { useState } from 'react'

const posts = [
  article1Data,
  article2Data,
  article3Data,
  article4Data,
  article1Data,
  article2Data,
  article3Data,
  article4Data,
  article1Data,
  article2Data,
  article3Data,
  article4Data,
  article1Data,
  article2Data,
  article3Data,
  article4Data,
  article1Data,
  article2Data,
  article3Data,
  article4Data,
  article1Data,
  article2Data,
  article3Data,
  article4Data,
]

const PostList = () => {
  const [toIndex, setToindex] = useState(10)
  const postsToMap = posts.slice(0, toIndex)
  return (
    <div className="col-lg-8 col-xl-8">
      {postsToMap.map((postData, index) => (
        <Post data={postData} key={index} />
      ))}
      {posts.length > toIndex && (
        <div className="d-flex justify-content-center">
          <button
            className="w-auto axil-button button-rounded hover-flip-item-wrapper m-t-5"
            onClick={() => setToindex(toIndex + 10)}
          >
            Další
          </button>
        </div>
      )}
    </div>
  )
}

export default PostList
