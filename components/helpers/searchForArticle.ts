import { PostOrPage } from '@tryghost/content-api'

export default function searchForArticles (SearchWord: string, PostData: PostOrPage[]) {  
    if(SearchWord == "") {return null}
    //have to add check for enabled cookies
    let FilteredPosts: string[] = [];
    PostData.filter((post)=> {
        if(post.title?.toLocaleLowerCase().includes(SearchWord.toLowerCase())){
            FilteredPosts.push(post.slug)
        }
    })
    return FilteredPosts
}
