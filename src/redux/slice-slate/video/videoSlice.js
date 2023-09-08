import { getVideo } from "./videoAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  errro: "",
};

//async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.errro = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
