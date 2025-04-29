import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../services/postService";
import { useEffect } from "react";

const apiSlice = createSlice({
  name: "apis",
  initialState: [],
  reducers: {
    addApi: (state, action) => {
      const newApi = {
        id: Date.now(),
        title: action.payload.title,
        compleated: false,
      };
      state.push(newApi);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((api) => api.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteApi: (state, action) => {
      return state.filter((api) => api.id !== action.payload.id);
    },
  },
});

export const { addApi, toggleComplete, deleteApi } = apiSlice.actions;
export default apiSlice.reducer;
