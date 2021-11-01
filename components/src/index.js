import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommetDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author="Sam" timeAgo="Today at 4:00PM" />
			</ApprovalCard>
			<CommentDetail author="Alex" timeAgo="Today at 5:00PM" />
			<CommentDetail author="Jane" timeAgo="Today at 7:00PM" />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
