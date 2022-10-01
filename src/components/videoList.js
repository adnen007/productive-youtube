import React from "react";
import VideoItem from "./videoItem";
export default function VideoList({ playVideo, items }) {
  return (
    <div className="video-list">
      {items.map((item) => (
        <VideoItem key={item.id.videoId} playVideo={playVideo} video={item} />
      ))}
    </div>
  );
}
