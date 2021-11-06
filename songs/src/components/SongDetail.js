import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
	if (!song) {
		return <div>select song</div>;
	}
	return (
		<div>
			{song.title}
			<br />
			{song.duration}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		song: state.selectedSong,
	};
};

export default connect(mapStateToProps)(SongDetail);
