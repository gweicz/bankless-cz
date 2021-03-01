import Link from 'next/link'
import Post from './Post'
import { PostOrPage } from '@tryghost/content-api'

const PostList = ({
  posts,
  nextPage,
  isLastPage,
}: {
  posts?: PostOrPage[]
  nextPage: number
  isLastPage: boolean
}) => {
  return (
    <div className="col-lg-8 col-xl-8">
      {(posts || []).map((postData, index) => (
        <Post data={postData} key={index} />
      ))}

      {!isLastPage && (
        <div className="d-flex justify-content-center">
          <Link scroll={false} href={`/?page=${nextPage}`} as={'/'}>
            <button
              className="w-auto axil-button button-rounded hover-flip-item-wrapper m-t-5"
              disabled={isLastPage}
            >
              Další
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default PostList
