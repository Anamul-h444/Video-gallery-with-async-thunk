import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import LikeUnlike from "./LikeUnlike";
import RelatedVideoList from "./relatedVideo/RelatedVideoList";

const Video = () => {
  return (
    <div class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
          <div class="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer />
            <VideoDescription />
            <LikeUnlike />
          </div>
          <RelatedVideoList />
        </div>
      </div>
    </div>
  );
};

export default Video;
