import { getVideos } from "./videosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  errro: "",
};

//async thunk
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await getVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});
