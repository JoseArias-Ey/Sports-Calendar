import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { getTodos } from "../services/postService";

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
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    getTodos: (state, action) => {
      const todo = {
        id: getTodos().id,
        title: getTodos().title,
        completed: getTodos().completed,
      };
      state.push(todo);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
