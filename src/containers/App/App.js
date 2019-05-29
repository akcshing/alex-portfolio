import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../../components/NavBar"
import Home from "../Home/Home"
import About from "../About/About"
import Projects from "../Projects/Projects"

const App = () => {
	return (
		<Router>
			<header className="page-container">
				<NavBar />
			</header>
			<main className="page-container">
				<Switch>
					<Route exact path = "/" component = {Home}/>
					<Route exact path = "/about" component = {About}/>
					<Route exact path = "/projects" component = {Projects}/>
				</Switch>
			</main>
			<footer className="page-container">
				<span>© Alex Shing 2019</span>
			</footer>
		</Router>
	);
}

export default App;
