import React, { useEffect, useState } from 'react'
import { categories } from '../../utils/youtubeConstants'

const VideoGenreButtons = () => {
    const [videoArray,setVideoArray]= useState([]);

    const getCategories=async ()=>{

        const categoriesSet=await fetch(categories);
        const data=await categoriesSet.json();

        setVideoArray(data.items);

    }
    useEffect(()=>{
        getCategories();
    },[])
  return (
    <div className='p-3 rounded-xl relative overflow-x-auto whitespace-nowrap'>
    <div className='flex space-x-5'>
      {videoArray?.length>0 && videoArray.map((items) => (
        <button key={items.id} className='px-2 py-3 rounded-lg bg-slate-200 h-10'>{items.snippet.title}</button>
      ))}
    </div>
  </div>
  )
}

export default VideoGenreButtons
