import React, { useEffect, useState } from 'react';

const YouTubeVideoComponent = () => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const vParam = queryParams.get('v');
    if (vParam) {
      setVideoId(vParam);
    }
  }, []);

  return (
    <div>
      {videoId && (
        <iframe
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
  );
};

export default YouTubeVideoComponent;
