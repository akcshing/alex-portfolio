import React, { Component } from "react";
import AboutDetail from "../components/AboutDetail";
import AboutTile from "../components/AboutTile";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }


    componentDidMount() {

    }

    render() {
        return (
            <main className="page-container">
                <div className="welcome-container" >
                    <h1 className="title">Alex Shing Portfolio</h1>
                </div>
                <AboutDetail selected = {this.state.selected} />
                <div className="about-container" >
                    <AboutTile about="my life" />
                    <AboutTile about="product design engineering" />
                    <AboutTile about="sushi" />
                    <AboutTile about="codeclan" />
                </div>
            </main>
        )
    }

}

export default HomeContainer;