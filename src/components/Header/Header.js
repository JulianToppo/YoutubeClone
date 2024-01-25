import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between shadow-md'>
        <div className='flex'>
            <img className='h-10 mt-2' src='https://cdn4.iconfinder.com/data/icons/action-states-vol-3-glyph/48/Sed-10-512.png'></img>
            <img className='h-16 -mt-1' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg' alt='youtubelogo'></img>
        </div>
        <div className='p-3 w-10/12'>
            <input type='text' className='bg-slate-200 p-2 rounded-l-xl w-4/6 ml-32'></input>
            <button className='p-2 bg-slate-300 rounded-r-xl'>Search</button>
        </div>
        <div className='p-3'>
            <p className='p-2'>SignIn</p>
        </div>
    </div>
  )
}

export default Header
