import React from "react";

const AboutTile = (props) => {

    const onClick = () => {
        props.onClick(props.about)
    }

    return(
        <div className="about-tile" onClick = {onClick} >
            <img className="about-icon" src={props.icon}></img>
            <h3 className = "tile-header">{props.about}</h3>
        </div>
    )
}

export default AboutTile;