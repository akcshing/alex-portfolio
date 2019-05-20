import React from "react";

const AboutDetail = (props) => {

    if (!props.selected) return null;
    return (
        <div className="about-detail-container">
        <h2>{props.selected}</h2>
        <p>blah blah blah</p>
        </div>
    )


}

export default AboutDetail;