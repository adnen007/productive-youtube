import React from "react";

function VideoItem({ video, playVideo }) {
  function onVideoClcik() {
    playVideo(video);
  }
  return (
    <div className="video-item" onClick={onVideoClcik}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="title">
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
}

export default VideoItem;
