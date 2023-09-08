import { getRelatedVideos } from "./relatedVideosAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  errro: "",
};

//async thunk
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ id, tags }) => {
    const relatedVideos = await getRelatedVideos({ id, tags });
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.errro = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
