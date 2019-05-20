import React, { Component } from "react";
import AboutDetail from "../components/AboutDetail";
import AboutTile from "../components/AboutTile";
import aboutme from "../images/aboutme.png";
import design from "../images/design.png";
import sushi from "../images/sushi.png";
import coding from "../images/coding.png";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
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
        //     document.documentElement.classList.add('transition');
        //     window.setTimeout(() => {
        //         document.documentElement.classList.remove('transition');
        //     }, 1000)
        // }
    }

    handleClick = (chosen) => {
        this.setState(
            {
                selected: chosen
            }
        )
    }

    render() {
        return (
            <main className="page-container">
                <div className="welcome-container" >
                    <h1 className="title">Alex Shing Portfolio</h1>
                </div>

                <div className="about-container" >
                    <AboutTile about="About Me" icon={aboutme} onClick={this.handleClick} />
                    <AboutTile about="Product Design" icon={design} onClick={this.handleClick} />
                    <AboutTile about="Sushi" icon={sushi} onClick={this.handleClick} />
                    <AboutTile about="CodeClan" icon={coding} onClick={this.handleClick} />
                </div>

                <AboutDetail selected={this.state.selected} />
            </main>
        )
    }

}

export default HomeContainer;