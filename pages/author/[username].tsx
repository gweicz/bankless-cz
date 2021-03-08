import { getAuthorInfo, getAuthorPosts } from 'pages/api/authorPosts'

import { Author } from '@tryghost/content-api'
import AuthorDetail from 'components/AuthorDetail/AuthorDetail'
import { GetServerSideProps } from 'next'
import Post from 'components/AuthorDetail/Post'
import SideBar from 'components/Layout/SideBar'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  let username: any = query.username

  const author: any = await getAuthorInfo(username)
  const posts_notFiltered: any = await getAuthorPosts(username)

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

  let posts = posts_notFiltered.filter(function (element: any) {
    let isHashovka = element.primary_tag.slug === 'hashovka'
    if (!isHashovka) {
      isHashovka = element.primary_tag.slug === 'hashovka-important'
    }
    return !isHashovka
  })

  return { props: { author, posts } }
}

const AuthorDetailPage = ({
  author,
  posts,
}: {
  author?: Author
  posts?: string | null | undefined
}) => {
  if (!author) return null
  if (!posts) return null

  return (
    <div>
      <AuthorDetail
        author={author}
        // picture={author.profile_image}
        // bio={author.bio}
        // fb={author.facebook}
        // twitter={author.twitter}
        // web={author.website}
        // location={author.location}
      />

      <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
        <div className="container" style={{ maxWidth: '1280px' }}>
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <Post
                article={posts[0]}
                username={author.name}
                fb={author.facebook}
                twitter={author.twitter}
                web={author.website}
              />
              <Post
                article={posts[1]}
                username={author.name}
                fb={author.facebook}
                twitter={author.twitter}
                web={author.website}
              />
              <Post
                article={posts[2]}
                username={author.name}
                fb={author.facebook}
                twitter={author.twitter}
                web={author.website}
              />
              <Post
                article={posts[3]}
                username={author.name}
                fb={author.facebook}
                twitter={author.twitter}
                web={author.website}
              />
              <Post
                article={posts[4]}
                username={author.name}
                fb={author.facebook}
                twitter={author.twitter}
                web={author.website}
              />
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorDetailPage
