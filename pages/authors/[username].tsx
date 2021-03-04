import AuthorDetail from 'components/AuthorDetail/AuthorDetail'
import Post from 'components/AuthorDetail/Post'
import SideBar from 'components/Layout/SideBar'
import { getAuthorInfo, getAuthorPosts } from 'pages/api/authorPosts'
import { GetServerSideProps } from 'next'
import { getPosts } from 'pages/api/posts'
import { PostOrPage } from '@tryghost/content-api'
import { useEffect, useState } from 'react'

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { query } = context
  let username: any = query.username
  const page:number = 1
  const author: any = await getAuthorInfo(username)
  const posts_notFiltered: any = await getAuthorPosts(username)
  const hashovky:any = await getPosts({
    limit: 5,
    page,
    include: ['tags'],
    filter: 'tag:hashovka'
  })

  if(!posts_notFiltered) { return {
    notFound: true
  } }
  if(!author) { return {
    notFound: true
  } }

  let posts = posts_notFiltered.filter(function(element: any, index: number, arr: any){
    let isHashovka = element.primary_tag.slug === 'hashovka'
    if(!isHashovka){
      isHashovka = element.primary_tag.slug === 'hashovka-important'
    }
    return !isHashovka;
  });
  
  return { props: {author, posts, hashovky} }
}


const AuthorDetailPage = ({author, posts, hashovky}: {author?: string | null | undefined, posts?: string | null | undefined, hashovky?: PostOrPage[]}) => {
  if(!author) return null
  if(!posts) return null

  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])
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
      fb={`https://www.facebook.com/${author.facebook}`}
      twitter={`https://twitter.com/${author.twitter}`}
      web={author.website}
      location={author.location}
      />

      <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
        <div className="container" style={{maxWidth: "1280px"}}>
          <div className="row">
           <div className="col-lg-8 col-xl-8">
              <Post article={posts[0]} username={author.name} fb={author.facebook} twitter={author.twitter} web={author.website}/>
              <Post article={posts[1]} username={author.name} fb={author.facebook} twitter={author.twitter} web={author.website}/>
              <Post article={posts[2]} username={author.name} fb={author.facebook} twitter={author.twitter} web={author.website}/>
              <Post article={posts[3]} username={author.name} fb={author.facebook} twitter={author.twitter} web={author.website}/>
              <Post article={posts[4]} username={author.name} fb={author.facebook} twitter={author.twitter} web={author.website}/>               
      </div>
      <SideBar hashovky={hashovkyState}/>
        </div>
          </div>
            </div>         
</div>
  )
}

export default AuthorDetailPage