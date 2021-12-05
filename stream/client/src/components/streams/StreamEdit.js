import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

const StreamEdit = ({ fetchStream, editStream, stream, match }) => {
	useEffect(() => {
		fetchStream(match.params.id);
	}, []);

	const onSubmit = (formValues) => {
		return editStream(formValues, match.params.id);
	};

	return (
		<div>
			<h3>Edit a stream</h3>
			<StreamForm
				initialValues={_.pick(stream, "title", "description")}
				onSubmit={onSubmit}
			/>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
	StreamEdit
);
