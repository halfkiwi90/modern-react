import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
	renderedList() {
		return this.props.songs.map((song) => {
			return (
				<div key={song.title}>
					<div>{song.title}</div>
					<button onClick={() => this.props.selectSong(song)}>select</button>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderedList()}</div>;
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return state;
};

export default connect(mapStateToProps, { selectSong })(SongList);
