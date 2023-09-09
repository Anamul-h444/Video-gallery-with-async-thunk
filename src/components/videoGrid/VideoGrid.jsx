import React, { useEffect } from "react";
import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/slice-slate/videos/videosSlice";
import Loader from "../../utils/Loader";

export default function VideoGrid() {
  const dispatch = useDispatch();
  const { isError, isLoading, error, videos } = useSelector(
    (state) => state.videos
  );

  const { tags, search } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  //Make decision what content is showing
  let content;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && videos?.length === 0)
    content = <div className="col-span-12">"No videos found!"</div>;

  if (!isLoading && !isError && videos?.length > 0)
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));

  return (
    <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
      {content}
    </div>
  );
}
