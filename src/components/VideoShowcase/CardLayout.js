import React from "react";

const CardLayout = (props) => {
  const { item } = props;

  return (
    <div className="flex flex-col p-4">
      <div className="p-2">
        <img alt="thumbnail"
          src={item.snippet?.thumbnails?.maxres?.url}
          className="h-48 rounded-lg"
        ></img>
      </div>
      <div className="flex">
        <div>
          {/* 
          image of the channel
          <img src={}>
              </img> */}
        </div>
        <div>
          <p className="text-xl w-72">{item?.snippet?.localized?.title.substr(0,60)}...</p>
          <p className="font-semibold text-lg">{item.snippet.channelTitle}</p>
          <p>{item.statistics?.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
