import Post from './Post'
import { article1Data } from 'pages/novinky/article1'
import { article2Data } from 'pages/novinky/article2'
import { article3Data } from 'pages/novinky/article3'
import { article4Data } from 'pages/novinky/article4'

const posts = [article1Data, article2Data, article3Data, article4Data]

const PostList = () => {
  return (
    <div className="col-lg-8 col-xl-8">
      {posts.map((postData) => (
        <Post data={postData} />
      ))}
    </div>
  )
}

export default PostList
