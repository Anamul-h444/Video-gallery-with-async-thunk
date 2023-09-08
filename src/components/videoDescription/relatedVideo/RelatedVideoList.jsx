import React, { useEffect } from "react";
import RelatedVideoItem from "./RelatedVideoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../../redux/slice-slate/relatedVideos/relatedVideosSlice";
import Loader from "../../../utils/Loader";
const RelatedVideoList = ({ id, tags }) => {
  const dispatch = useDispatch();

  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ id, tags }));
  }, [dispatch, id, tags]);

  //decide what to render
  let content = null;
  if (isLoading) content = <Loader />;

  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }

  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div>No video found!</div>;
  }

  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
