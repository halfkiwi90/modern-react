import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchBlogs = () => async (dispatch) => {
	const res = await jsonPlaceholder.get("/posts");

	dispatch({ type: "FETCH_BLOGS", payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const res = await jsonPlaceholder.get(`users/${id}`);

	dispatch({ type: "FETCH_USER", payload: res.data });
};
