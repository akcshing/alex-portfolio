import React, { Component } from "react";

class AboutTile extends Component {
	onClick = () => {
		this.props.onClick(this.props.about, this.props.sentence)
	}

	render() {
		return (
			<div className="about-tile" onClick={this.onClick} >
				<img className="about-icon" src={this.props.icon} alt={this.props.about}></img>
				<h3 className = "tile-header">{this.props.about}</h3>
			</div>
		);
	}
}

export default AboutTile;