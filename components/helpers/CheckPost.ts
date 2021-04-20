export default function CheckPost(tags: any, feature_image: any): boolean{
    try{
        let category = tags
        if(feature_image == undefined){
            return false
          }else{
            return true
          }
      }catch{
        return false
      }
}