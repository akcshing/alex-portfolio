import React from "react";

const AboutDetail = (props) => {

	if (!props.selected) return null;
	return (
		<div className="about-detail-container">
			<h2>{props.selected}</h2>
			<p>{props.sentence}</p>
		</div>
	)


}

export default AboutDetail;