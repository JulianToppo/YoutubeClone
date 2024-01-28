import React, { useEffect, useState } from "react";
import { listofvideos } from "../../utils/youtubeConstants";
import CardLayout from "./CardLayout";
import { Link } from "react-router-dom";

const VideoCards = () => {
  const [videoArray, setVideoArray] = useState([]);
  const getVideos = async () => {
    const videoSet = await fetch(listofvideos);
    const data = await videoSet.json();
    console.log(data);
    setVideoArray(data.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {videoArray.length &&
        videoArray.map((item) => {
           return <Link to={'/watch?v='+item.id}> <CardLayout key={item.id} item={item}/> </Link>;
        })}
    </div>
  );
};

export default VideoCards;
