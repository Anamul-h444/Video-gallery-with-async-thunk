import React from "react";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
      <VideoGridItem />
      {/* error section
                    <div class="col-span-12">some error happened</div> */}
    </div>
  );
}
