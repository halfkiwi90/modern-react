import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "No Scrubs", duration: "3:30" },
		{ title: "Lazy night", duration: "4:00" },
		{ title: "To you", duration: "2:30" },
		{ title: "Sukisa", duration: "2:39" },
	];
};

const selectedSongReducer = (selectedSong = null, actions) => {
	if (actions.type === "SELECTED_SONG") {
		return actions.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
