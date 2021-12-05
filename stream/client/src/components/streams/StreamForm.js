import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		return (
			<div className="field">
				<label>{label}</label>
				<input {...input} autoComplete="off"></input>
				<div>{this.renderError(meta)}</div>
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field name="title" component={this.renderInput} label="Title"></Field>
				<Field
					name="description"
					component={this.renderInput}
					label="Description"
				></Field>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const error = {};
	if (!formValues.title) {
		error.title = "enter title";
	}

	if (!formValues.description) {
		error.description = "enter desc";
	}

	return error;
};

export default reduxForm({ form: "streamForm", validate: validate })(
	StreamForm
);
