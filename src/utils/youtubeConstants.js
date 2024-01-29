
const YOUR_API_KEY='AIzaSyB8QIzqJhDf--Zs5_PWxfVIXx5f_rvsqLM'

export const liveVideos="https://youtube.googleapis.com/youtube/v3/liveBroadcasts?key="+YOUR_API_KEY

export const categories='https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=IN&key='+YOUR_API_KEY

export const listofvideos='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+YOUR_API_KEY

export const youtubeSearchBarSuggestions="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const youtubeVideoComments=(videoId)=>{

    return `https://www.googleapis.com/youtube/v3/commentThreads?key=${YOUR_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&order=relevance&maxResults=100`
}

export const youtubeVideoReplies=(commentID)=>{

    return `https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=${commentID}&key=${YOUR_API_KEY}`

}

export const defaultProfilePic="https://static.thenounproject.com/png/5034901-200.png"