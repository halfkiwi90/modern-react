import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchBlogAndUser = () => async (dispatch, getState) => {
	await dispatch(fetchBlogs());
	_.chain(getState().blogs)
		.map("userId")
		.uniq()
		.forEach((id) => {
			dispatch(fetchUser(id));
		})
		.value();
};

export const fetchBlogs = () => async (dispatch) => {
	const res = await jsonPlaceholder.get("/posts");

	dispatch({ type: "FETCH_BLOGS", payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const res = await jsonPlaceholder.get(`users/${id}`);

	dispatch({ type: "FETCH_USER", payload: res.data });
};
