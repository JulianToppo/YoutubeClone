import React, { useEffect, useState } from "react";
import { youtubeVideoReplies } from "../../utils/youtubeConstants";
import Replies from "./Replies";

const Comment = (props) => {
  const { id, snippet } = props.item;
  const [repliesArray, setRepliesArray] = useState([]);
  const [showReplies, setshowReplies] = useState(false)

  const getReplies = async () => {
    const data = await fetch(youtubeVideoReplies(id));
    const json = await data.json();
    console.log("replies", json);
    setRepliesArray(json.items);
  };

  useEffect(()=>{
    getReplies();
  },[])

  const onClickRepliesHandler=(e)=>{
    e.preventDefault();
    setshowReplies(!showReplies)
  }

  return (
    <div className="flex p-1 m-1 mb-5">
      <div className="w-1/12">
        {/* Face */}
        <img
        alt={snippet.topLevelComment?.snippet?.authorProfileImageUrl}
          className="rounded-full p-2 mr-3"
          src={snippet.topLevelComment?.snippet?.authorProfileImageUrl}
        ></img>
      </div>
      <div className="w-5/6">
        {/* Name and comment  */}

        <p className="font-semibold">
          {snippet.topLevelComment?.snippet?.authorDisplayName}
        </p>
        <p>{snippet.topLevelComment?.snippet?.textDisplay}</p>
        <span>
          <p>Like: {snippet.topLevelComment.snippet?.likeCount}</p>
          {snippet.totalReplyCount > 0 && (
            <>
              <p className="p-2 font-semibold text-blue-500" onClick={onClickRepliesHandler}>
                View Comments {snippet.totalReplyCount}
              </p>

              {showReplies && repliesArray.length > 0 &&
                repliesArray.map((item) => {
                  return <Replies key={item.id} item={item} />;
                })}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Comment;
