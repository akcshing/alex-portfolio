import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import NavBar from "../../components/NavBar"
import Home from "../Home/Home"
import About from "../About/About"
import Projects from "../Projects/Projects"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null
		}
		this.handleSetActive = this.handleSetActive.bind(this);
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', function(to, element) {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function(to, element) {
			console.log("end", arguments);
		});
	
		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	handleSetActive(to) {
		console.log(to);
	}

	render() {
		return (
			<Router>
				<header className="page-container">
					<NavBar onSetActive={this.handleSetActive} />
				</header>
				<main className="page-container">
					{/* <Switch> */}
					<Element name="home" className="element">
						<Route exact path = "/" component = {Home}/>
					</Element>
					{/* <Route exact path = "/about" component = {About}/> */}
					<Element name="projects" className="element">
						<Projects />
					</Element>
					{/* </Switch> */}
				</main>
				<footer className="page-container">
					<span>© Alex Shing 2019</span>
				</footer>
			</Router>
		);
	}

}


export default App;
