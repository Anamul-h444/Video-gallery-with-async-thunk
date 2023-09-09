import { getVideos } from "./videosAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  errro: "",
};

//async thunk
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }) => {
    const videos = await getVideos({ tags, search });
    return videos;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.errro = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
