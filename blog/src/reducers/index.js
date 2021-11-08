import { combineReducers } from "redux";
import { blogsReducer } from "./blogsReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
	blogs: blogsReducer,
	user: userReducer,
});
