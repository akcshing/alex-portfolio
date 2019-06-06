import React from "react";
import { Link } from "react-router-dom";



const NavBar = (props) => {
	
	return (
		<div className="navbar">
			<Link to="/">
				<a href="/" className="home-link">AKCS</a>
			</Link>
			<div className="toggle-container">
				<span>Light / Dark Mode</span>
				<input className="container_toggle" type="checkbox" id="switch" name="mode" />
				<label htmlFor="switch">Toggle</label>
			</div>
			<ul className="navbar-list">
				{/* <li className="navbar-item">
					<Link to="/about">About</Link>
				</li> */}
				<li className="navbar-item">
					<Link to="/projects">Projects</Link>
				</li>
			</ul>

		</div>
	)
}

export default NavBar;