import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./slice-slate/videos/videosSlice";
import tagsReducer from "./slice-slate/tags/tagsSlice";
import videoReducer from "./slice-slate/video/videoSlice";
import relatedVideosReducer from "./slice-slate/relatedVideos/relatedVideosSlice";
import filterReducer from "./slice-slate/filter/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filters: filterReducer,
  },
});
