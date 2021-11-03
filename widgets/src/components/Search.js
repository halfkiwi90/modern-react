import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("dog");
	const [results, setResults] = useState([]);

	const renderedResults = results.map((result) => {
		return (
			<div className="item">
				<div className="content">
					<div className="header">{result.title}</div>
					{result.snippet}
				</div>
			</div>
		);
	});

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					format: "json",
					origin: "*",
					srsearch: term,
				},
			});

			setResults(data.query.search);
		};

		search();
	}, [term]);

	return (
		<div className="ui form">
			<div className="field">
				<label>enter search term</label>
				<input
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					className="input"
				/>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
