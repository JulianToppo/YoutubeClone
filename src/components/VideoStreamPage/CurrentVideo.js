import React, { useEffect, useState } from "react";
import { defaultProfilePic, youtubeVideoComments } from "../../utils/youtubeConstants";
import Comment from "./Comment";
import { chatMessages, getRandomMessage } from "../../utils/chatbox";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChat } from "../../utils/livechatSlice";

const YouTubeVideoComponent = () => {
  const [videoId, setVideoId] = useState("");
  const [commentsArray, setcommentsArray] = useState([]);
  const liveChatSlice = useSelector((store) => store.liveChat);
  const dispatch= useDispatch();  

  const [userComment, setuserComment] = useState("")

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const vParam = queryParams.get("v");
    console.log(vParam);
    if (vParam) {
      setVideoId(vParam);
      getComments(vParam);
    }
  }, []);

  const getComments = async (vParam) => {
    const data = await fetch(youtubeVideoComments(vParam));
    const json = await data.json();
    console.log("comments ", json);
    setcommentsArray(json.items);
  };

  const onSubmitHandler=(e)=>{
    e.preventDefault(); 
    const userMessage={
      sender:'Default User',
      message:userComment,
      imageLink:defaultProfilePic
    }

    dispatch(addLiveChat(userMessage))
    setuserComment("")
  }

  useEffect(() => {
    let getLivechat = setInterval(() => {
      const message = getRandomMessage(chatMessages);
      dispatch(addLiveChat(message));
    }, 10000);

    return () => clearInterval(getLivechat);
  }, []);

  return (
    <div className="p-5 rounded-b-3xl">
      <div className="flex flex-row w-full space-x-4 ">
        <div className="w-3/4 h-96">
          {videoId && (
            <iframe
              className="w-full rounded-xl"
              width="950"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="w-1/4 p-2 border-black h-full bg-slate-200 rounded-xl   h-96">
          <div>
            <p className="font-semibold text-2xl text-center">Live chat</p>
            <div className="overflow-y-scroll h-80 text-sm p-2">
              
              {liveChatSlice.liveChatArray.map((item, index) => {
                return (
                  <div className="flex space-x-3 pb-4">
                    <img className="h-5 rounded-xl" alt={liveChatSlice.liveChatArray[liveChatSlice.liveChatArray.length - 1 - index].imageLink+index}
                    src={liveChatSlice.liveChatArray[liveChatSlice.liveChatArray.length - 1 - index].imageLink}>
                    </img>
                    <p className="inline font-extralight">
                      {liveChatSlice.liveChatArray[liveChatSlice.liveChatArray.length - 1 - index].sender}:
                    </p>
                    <p className="inline">
                      {liveChatSlice.liveChatArray[liveChatSlice.liveChatArray.length - 1 - index].message}
                    </p>

                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-2 p-2 flex justify-evenly bg-black rounded-lg">
            <form onSubmit={onSubmitHandler}>
              <input value={userComment} onChange={(e)=> setuserComment(e.target.value)} type="text"></input>
              <button type="submit" className="pr-1 rounded-lg bg-orange-700">Comment</button>
            </form>
          </div>
        </div>
      </div>

      {commentsArray && (
        <div>
          <h1 className="p-2 font-bold">Comments:</h1>
          {commentsArray.map((item) => {
            return <Comment key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default YouTubeVideoComponent;
