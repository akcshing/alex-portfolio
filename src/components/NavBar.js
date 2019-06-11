import React from "react";
// import { Link } from "react-router-dom";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const NavBar = (props) => {
	return (
		<div className="navbar">

			<Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={props.handleSetActive}>
				AKCS
			</Link>

			<div className="toggle-container">
				<span>Light / Dark Mode</span>
				<input className="container_toggle" type="checkbox" id="switch" name="mode" />
				<label htmlFor="switch">Toggle</label>
			</div>
			
			<ul className="navbar-list">
				<li className="navbar-item">
					<Link activeClass="active" to="projects" spy={true} smooth={true} offset={-96} duration={500} onSetActive={props.handleSetActive}>
						Projects
					</Link>
				</li>
			</ul>

		</div>
	)
}

export default NavBar;