import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import LikeUnlike from "./LikeUnlike";
import RelatedVideoList from "./relatedVideo/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../redux/slice-slate/video/videoSlice";
import { useParams } from "react-router-dom";
import Loader from "../../utils/Loader";

const Video = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { video, isError, isLoading, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);

  let content;
  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isError && !isLoading && !video?.id)
    content = <div>"Video not found!"</div>;

  if (!isError && !isLoading && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer video={video} />
          <VideoDescription video={video} />
          <LikeUnlike video={video} />
        </div>
        <RelatedVideoList id={id} tags={video.tags} />
      </div>
    );
  }

  return (
    <div className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </div>
  );
};

export default Video;
