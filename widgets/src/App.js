import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
	{
		label: "the color red",
		value: "red",
	},
	{
		label: "the color blue",
		value: "blue",
	},
	{
		label: "the color green",
		value: "green",
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			<Route path="/search">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="select a color"
					selected={selected}
					onSelectChange={setSelected}
					options={options}
				/>
			</Route>
		</div>
	);
};

export default App;
