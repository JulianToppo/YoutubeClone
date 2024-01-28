
const YOUR_API_KEY='AIzaSyBMDjntKppNvg5QBIqdE5rd2ETOxEi1d8M'
export const categories='https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=IN&key='+YOUR_API_KEY

export const listofvideos='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+YOUR_API_KEY

export const youtubeSearchBarSuggestions="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="