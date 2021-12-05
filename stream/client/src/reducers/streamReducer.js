import _ from "lodash";
import {
	FETCH_STREAMS,
	FETCH_STREAM,
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
} from "../actions/tyeps";

const streamReducer = (streams = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			return { ...streams, ..._.mapKeys(action.payload, "id") };
		case FETCH_STREAM:
			return { ...streams, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...streams, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...streams, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(streams, action.payload);
		default:
			return streams;
	}
};

export default streamReducer;
