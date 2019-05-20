import React from "react";
import {Link} from "react-router-dom";
import logo from '../logo.svg';


const NavBar = (props) => {
    return (
        <div className = "navbar">
            <Link to = "/">
             <img src={logo} className="logo" alt="logo" />
            </Link>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to ="/about">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to ="/projects">Projects</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default NavBar;