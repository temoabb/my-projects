import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";

export default combineReducers({
  posts: postsReducer
});
