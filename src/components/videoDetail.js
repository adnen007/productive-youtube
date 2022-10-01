import React from "react";

function VideoDetail({ video }) {
  return (
    <div className="video-detail">
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/${video.id?.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="information">
        <h3 className="title">{video.snippet?.title}</h3>
        <p className="desciription">{video.snippet?.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
