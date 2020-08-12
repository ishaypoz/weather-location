import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	Summer: {
		text: "Let's hit the beach!",
		icon: 'sun'
	},
	Winter: {
		text: "Burr, it's chilly!",
		icon: 'snowflake'
	}
};
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'Summer' : 'Winter';
	} else {
		return lat > 0 ? 'Winter' : 'Summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, icon } = seasonConfig[season]; // text goes to text and icon goes to icon need to use same name or we need to spcify the object
	return (
		// giving the div main elemnt same name as the object we exports
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${icon} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${icon} icon`} />
		</div>
	);
};
export default SeasonDisplay;
