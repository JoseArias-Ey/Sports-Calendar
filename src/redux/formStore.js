import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (
  window.devToolsExtension
    ? window.devToolsExtension()(configureStore)
    : configureStore
)(reducer);

export default store;
