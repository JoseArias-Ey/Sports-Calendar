import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "Champions League",
      completed: true,
    },
    {
      id: 2,
      title: "NBA Playoffs",
      completed: false,
    },
    {
      id: 3,
      title: "NFL Draft",
      completed: true,
    },
    {
      id: 4,
      title: "Soccer match with friends",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newPost = {
        id: Date.now(),
        title: action.payload.title,
        compleated: false,
      };
      state.push(newPost);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((post) => post.id !== action.payload.id);
    },
    editTodo: (state, action) => {},
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
