import React from "react";

const AboutDetail = (props) => {

    if (!props.selected) return null;
    return (
        <h2>{props.selected}</h2>
    )


}

export default AboutDetail;