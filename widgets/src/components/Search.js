import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("dog");
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						className="ui button"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
				</div>
			</div>
		);
	});

	useEffect(() => {
		const prevTimeId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 500);

		return () => {
			clearTimeout(prevTimeId);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					format: "json",
					origin: "*",
					srsearch: debouncedTerm,
				},
			});

			setResults(data.query.search);
		};

		if (debouncedTerm) {
			search();
		}
	}, [debouncedTerm]);

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
