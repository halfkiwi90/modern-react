import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
	{
		label: "africaan",
		value: "af",
	},
	{
		label: "english",
		value: "en",
	},
	{
		label: "korean",
		value: "ko",
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>enter text</label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>

			<Dropdown
				label="select a language"
				selected={language}
				onSelectChange={setLanguage}
				options={options}
			/>
			<hr />
			<h1> output </h1>
			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;
