import React from "react";
import { streamCreate } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.streamCreate(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { streams: state.streams };
};

export default connect(mapStateToProps, { streamCreate })(StreamCreate);
