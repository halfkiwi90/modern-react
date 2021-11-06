import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchBlogs = () => async (dispatch) => {
	const res = await jsonPlaceholder.get("/posts");

	dispatch({ type: "FETCH_BLOGS", payload: res });
};
