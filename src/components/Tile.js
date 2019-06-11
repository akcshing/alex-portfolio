import React from "react";

const Tile = (props) => (
	
	<div className="tile-container">
		<img alt={props.bgImgAlt} src={props.bgImg}></img>
		<div className="tile-overlay">
			<h4 className="tile-title">{props.title}</h4>
			<h5 className="tile-info">{props.info}</h5>
			{/* <button className="button-learn-more">LEARN MORE</button> */}
		</div>
	</div>
		
)

export default Tile;