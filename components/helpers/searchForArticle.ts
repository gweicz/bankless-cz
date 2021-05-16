import { PostOrPage } from '@tryghost/content-api'

export default function searchForArticles (SearchWord: string, PostData: PostOrPage[]) {  
    if(SearchWord == "") {return []}

    let FilteredPosts: string[] = [];
    PostData.filter((post)=> {
        if(post.title?.toLocaleLowerCase().includes(SearchWord.toLowerCase())){
            FilteredPosts.push(post.slug)
        }
    })
    return FilteredPosts
}
