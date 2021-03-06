import React from "react";
import { Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import Header from "./Header";
import history from "../history";

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<Header />
				<Route path="/" exact component={StreamList} />
				<Route path="/stream/show" exact component={StreamShow} />
				<Route path="/stream/edit/:id" exact component={StreamEdit} />
				<Route path="/stream/delete" exact component={StreamDelete} />
				<Route path="/stream/create" exact component={StreamCreate} />
			</Router>
		</div>
	);
};

export default App;
