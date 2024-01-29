import React from 'react'

const Replies = (props) => {
    const {snippet}=props.item;
  return (
    <div className="flex p-1 ml-5 mb-5">
      <div className="w-1/12">
        {/* Face */}
        <img
        alt={snippet?.authorProfileImageUrl}
          className="rounded-full p-2 mr-3"
          src={snippet?.authorProfileImageUrl}
        ></img>
      </div>
      <div className="w-5/6">
        {/* Name and comment  */}

        <p className="font-semibold">
          {snippet?.authorDisplayName}
        </p>
        <p>{snippet?.textDisplay}</p>
      
      </div>
    </div>
  )
}

export default Replies
