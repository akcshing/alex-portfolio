import React from "react";
import transactions from "../../images/transactions.png";
import newtransaction from "../../images/newtransaction.png";

const Projects = (props) => (
	<div className="content-container">
		<h1>PROJECTS</h1>
		<div className="project-container">
			<div className="project-images">
				<img alt="transactions" src={transactions}></img>
				<img alt="new-transactions" src={newtransaction}></img>
			</div>
			<div className="project-title">
				<h2>Spending Tracker</h2>
				<h3>A Full-Stack Web App.</h3>
			</div>
			<div className="project-info">
				<div className="project-info-p">
					<p>This was my first project at CodeClan. A solo project that lasted a week with a presentation at the end. We were allowed to choose from a number of briefs which specified what was required, but the fundamental spec was to create an app with <span>CRUD</span> functionality and <span>RESTful</span> routes. Another requirement was to make use of SQL table relationships.</p>
					<p>This app allows the user to enter monetary transactions they wish to log. The transactions require a 'merchant' and a 'tag', all of which the user can create, edit and delete. The app makes use One-To-Many relationships to display relevant transaction data for each class. During this solo project, I practiced planning from the <span>UX</span> perspective, creating user stories and journeys.</p>
				</div>
				<div className="project-info-ul">
					<h3>Stack</h3>
					<ul>
						<li>Ruby</li>
						<li>Sinatra</li>
						<li>PostgreSQL</li>
						<li>TDD</li>
						<li>RESTful API</li>
					</ul>
					<a href="https://github.com/akcshing/Spending_tracker_project">Check out the project on <span className="github-link">Github</span></a>
				</div>
			</div>
		</div>
	</div>
);

export default Projects;