import React, { Component } from "react";
import Tile from "../../components/Tile";
import transactions from "../../images/transactions.png";
import newtransaction from "../../images/newtransaction.png";

const projects = [
	{
		title: "Spending Tracker",
		bgImg: transactions,
		bgImgAlt: "Spending Tracker",
		info: "Ruby | Sinatra | PostgreSQL"
	},
	{
		title: "CO2 Footprint Tracker",
		bgImg: newtransaction,
		bgImgAlt: "CO2 Footprint Tracker",
		info: "JS | NodeJS | MongoDB"
	},
	{
		title: "CO2 Footprint Tracker",
		bgImg: newtransaction,
		bgImgAlt: "CO2 Footprint Tracker",
		info: "JS | NodeJS | MongoDB"
	}
]

const projectTiles = projects.map((project) => {
	console.log(project)
	return <Tile key={project.title} bgImg={project.bgImg} bgImgAlt={project.bgImgAlt} title={project.title} info={project.info} />
});

console.log(projectTiles)

class ProjectTiles extends Component {
	render() {
		return (
			<div className="project-tiles-container">
				{projectTiles}
			</div>
		)
	}
}

export default ProjectTiles;