import React, { Component } from "react";
import AboutDetail from "../../components/AboutDetail";
import AboutTile from "../../components/AboutTile";
import aboutme from "../../images/aboutme.png";
import design from "../../images/design.png";
import sushi from "../../images/sushi.png";
import coding from "../../images/coding.png";

const aboutContent = {
	'About Me': `I'm a Codeclan graduate from Edinburgh looking to start my career as a software developer. I love coding and learning about different and new technologies. When I'm not working, I enjoy gaming, cooking, playing table tennis and some beers in good company.`,

	'Product Design': `I studied Product Design Engineering at Edinburgh Napier University. It helped hone my sense of design and eye for detail. My favourite module was Computer Aided Design, where we learned to build digital models and 3D print them.`,

	'Sushi': `I worked as a Sushi Chef in Edinburgh for 3 years, starting as a kitchen porter and progressing to team leader in the kitchen. I'm proud to say that I'm able to prepare sashimi from a whole salmon, but my favourite part was definitely all the free sushi I could eat!`,

	'CodeClan': `I graduated from Codeclan's Professional Software Development course in May. Along with the abundant number of new skills I've picked up, I feel the experience developed me as a person, giving me more confidence in myself. My favourite take away from Codeclan is definitely all the amazing people I've met and the great friendships I've made.`,
}

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null
		}
		this.scrollToMyRef = this.scrollToMyRef.bind(this)
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		let checkbox = document.querySelector('input[name=mode]');

		checkbox.addEventListener('change', function () {
			if (this.checked) {
				// trans()
				document.documentElement.setAttribute('data-theme', 'dark')
			} else {
				// trans()
				document.documentElement.setAttribute('data-theme', 'light')
			}
		})

		// let trans = () => {
		//	 document.documentElement.classList.add('transition');
		//	 window.setTimeout(() => {
		//		 document.documentElement.classList.remove('transition');
		//	 }, 1000)
		// }
	}

	scrollToMyRef = () => window.scrollTo(0, 1000)

	handleClick = (chosen) => {
		this.setState(
			{
				selected: chosen,
			}
			, () => {
				this.scrollToMyRef();
			}
		)
	}

	render() {
		return (
			<>
				<div className="welcome-container" >
					<h1 className="title">Alex Shing Portfolio</h1>
				</div>

				<div className="about-container" >
					<AboutTile about="About Me" icon={aboutme} onClick={this.handleClick} />
					<AboutTile about="Product Design" icon={design} onClick={this.handleClick} />
					<AboutTile about="Sushi" icon={sushi} onClick={this.handleClick} />
					<AboutTile about="CodeClan" icon={coding} onClick={this.handleClick} />
				</div>

				<AboutDetail selected={this.state.selected} sentence={aboutContent[this.state.selected]} />
			</>
		)
	}

}

export default HomeContainer;