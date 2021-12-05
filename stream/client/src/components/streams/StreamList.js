import React, { useEffect } from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StreamList = ({ isSignedIn, fetchStreams, streams, currentUserId }) => {
	useEffect(() => {
		fetchStreams();
	}, [fetchStreams]);

	const renderAdmin = (stream) => {
		if (stream.userId === currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/stream/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
					<button className="ui button negative">Delete</button>
				</div>
			);
		}
	};

	const renderList = () => {
		return streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{renderAdmin(stream)}
					<i className="large middle aligned icon camera"></i>
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};
	const renderCreate = () => {
		if (isSignedIn) {
			return (
				<div style={{ textAlign: "right" }}>
					<Link to="/stream/create" className="ui button primary">
						Create
					</Link>
				</div>
			);
		}
	};
	return (
		<div>
			<h2>Streams</h2>
			<div className="ui celled list">{renderList()}</div>
			{renderCreate()}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
