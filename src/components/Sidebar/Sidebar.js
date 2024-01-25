import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col absolute min-h-screen border-cyan-300 w-1/5 bg-slate-400  text-red-200 shadow-md z-50">
         <div className='flex bg-white opacity-45 pt-1'>
            <img className='h-10 mt-2' src='https://cdn4.iconfinder.com/data/icons/action-states-vol-3-glyph/48/Sed-10-512.png'></img>
            <img className='h-16 -mt-1' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg' alt='youtubelogo'></img>
        </div>
      <div className="mt-2">
        home
      
      </div>
      <div>Shorts</div>
      <div>Subscriptions</div>
    </div>
  );
};

export default Sidebar;
