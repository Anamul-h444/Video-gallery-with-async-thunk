import React from "react";
import Tags from "../components/tags/Tags";
import VideoGrid from "../components/videoGrid/VideoGrid";
import Pagination from "../components/pagination/Pagination";

const Home = () => {
  return (
    <div>
      <Tags />
      <VideoGrid />
      <Pagination />
    </div>
  );
};

export default Home;
