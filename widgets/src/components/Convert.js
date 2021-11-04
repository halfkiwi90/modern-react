import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState("");
	const [debouncedTxt, setDebouncedTxt] = useState(text);

	useEffect(() => {
		const prevTimeId = setTimeout(() => {
			setDebouncedTxt(text);
		}, 500);

		return () => {
			clearTimeout(prevTimeId);
		};
	}, [text]);

	useEffect(() => {
		const doTranslate = async () => {
			const { data } = await axios.post(
				"https://translation.googleapis.com/language/translate/v2",
				{},
				{
					params: {
						q: debouncedTxt,
						target: language.value,
						key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
					},
				}
			);

			setTranslated(data.data.translations[0].translatedText);
		};

		doTranslate();
	}, [language, debouncedTxt]);

	return (
		<div>
			<h1 className="header">{translated}</h1>
		</div>
	);
};

export default Convert;
