import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowSidebar } from '../../utils/appSlice';
import { youtubeSearchBarSuggestions } from '../../utils/youtubeConstants';
import { addRecommendations } from '../../utils/youtubeSlice';

const Header = () => {

  const [searchQuery,setSearchQuery]= useState('')
  const [showSuggestions,setShowSuggestions]= useState(false)
  const [recommendation,setRecommendations]=useState([])
  const appSlice=useSelector((store)=>store.appSlice);
  const youtubeSlice=useSelector((store)=>store.youtube);
  const dispatch= useDispatch();
  
  console.log(searchQuery)
  const onClickSidebarSettingHandler=(e)=>{
    e.preventDefault();
    dispatch(toggleShowSidebar());
  }

  const findSuggestions=async()=>{
    const data= await fetch(youtubeSearchBarSuggestions+searchQuery);
    const json=await data.json();
    console.log(json)
    setRecommendations(json[1]);
    dispatch(addRecommendations({
      [searchQuery]:json[1]
    }))
  }

  useEffect(()=>{
    let callQuery;
    console.log("useEffect Called",searchQuery)
    
    if(searchQuery && (Object.keys(youtubeSlice.recommendations).length > 0) && youtubeSlice.recommendations[searchQuery])
    {
      console.log("useEffect Called 1")
      setRecommendations(youtubeSlice.recommendations[searchQuery]);
      
    }else{
      console.log("useEffect Called 2")
      callQuery=setTimeout(()=>{
        searchQuery && findSuggestions();
    },500)
    }
    

    return ()=>{
      clearInterval(callQuery)
    }
   
  },[searchQuery])

  return (
    <div className='flex relative w-full justify-between shadow-md bg-white z-10'>
        <div className='flex'>
          
            <img className='h-10 mt-2' onClick={onClickSidebarSettingHandler} alt="sidebar-setting" src='https://cdn4.iconfinder.com/data/icons/action-states-vol-3-glyph/48/Sed-10-512.png'></img>
            <img className='h-16 -mt-1' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg' alt='youtubelogo'></img>
        </div>
        <div className='p-3 w-10/12'>
            <input type='text' className='bg-slate-200 p-2 rounded-l-xl w-4/6 ml-32' onBlur={(e)=>setShowSuggestions(false)} onFocus={(e)=>setShowSuggestions(true)} onChange={(e)=>setSearchQuery(e.target.value)}></input>
            <button className='p-2 bg-slate-300 rounded-r-xl'>Search</button>
            {
            showSuggestions && <div className='w-3/6 ml-32 absolute bg-white rounded-lg shadow-xl'>
              {
                recommendation.map((item,index)=>{
                  return <p className='hover:bg-slate-200 p-2'>{item}</p>
                })
              }
              </div>
            }
        </div>
        <div className='p-3'>
            <p className='p-2'>SignIn</p>
        </div>
    </div>
  )
  
}

export default Header
