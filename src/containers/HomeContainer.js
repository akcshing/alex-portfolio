import React, { Component } from "react";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

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

                <div className="welcome-container" >
                    <div>my life</div>
                    <div>product design engineering</div>
                    <div>sushi</div>
                    <div>codeclan</div>
                </div>

                <div className="welcome-container" >
                    
                </div>

            </main>
        )
    }

}

export default HomeContainer;