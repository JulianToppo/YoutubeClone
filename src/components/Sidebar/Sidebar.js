import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSidebar } from "../../utils/appSlice";

const Sidebar = () => {

  const [showSidebar, setshowSidebar] = useState()
  const appSlice=useSelector((store)=>store.appSlice);
  const dispatch= useDispatch();
  
  const onClickSidebarSettingHandler=(e)=>{
    e.preventDefault();
    dispatch(toggleShowSidebar());

    console.log("caled",appSlice.showSidebar)
  }

useEffect(()=>{
  setshowSidebar(appSlice.showSidebar)
},[appSlice.showSidebar])

  return (
    
    showSidebar===true && (
    <div className="flex flex-col fixed top-0 shadow-xl min-h-screen border-cyan-300 w-1/5 bg-black shadow-xl bg-opacity-95   text-red-200  z-50">
      <div className="flex  bg-white">
        <img onClick={onClickSidebarSettingHandler}
          className="h-10 mt-2 cursor-pointer"
          alt="sidebar-setting-overlay"
          src="https://cdn4.iconfinder.com/data/icons/action-states-vol-3-glyph/48/Sed-10-512.png"
        ></img>
        <img
          className="h-16 -mt-1"
       
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="youtubelogo-overlay"
        ></img>
      </div>
      <div className="mt-2">Home</div>
      <div>Shorts</div>
      <div>Live</div>
      <div>Subscriptions</div>
    </div>
    
  )

  );
};

export default Sidebar;
