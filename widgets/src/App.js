import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
	{
		title: "what is React",
		content: "react is a front end javascript framework",
	},
	{
		title: "why use react",
		content: "react is a favorite JS library",
	},
	{
		title: "How do you use React",
		content: "You use React by creating components",
	},
];

const App = () => {
	return <Search />;
};

export default App;
