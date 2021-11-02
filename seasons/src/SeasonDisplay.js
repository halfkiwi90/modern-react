import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
	summer: {
		text: "덥다",
		iconName: "sun",
	},
	winter: {
		text: "춥다",
		iconName: "snowflake",
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = ({ lat }) => {
	const season = getSeason(lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`massive ${iconName} icon`}></i>
			<h1>{text}</h1>
		</div>
	);
};

export default SeasonDisplay;
