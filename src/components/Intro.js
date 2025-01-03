import React from "react";
import birmansahil from "../images/birmansahil.png";
import "./Intro.css";

const Intro = () => {
    return (
        <div className="intro-section">
            <div className="intro-image">
                <img src={birmansahil} alt="Birman Sahil" />
            </div>

            <div className="intro-text">
                <h1>Hey! I'm Sahil Birman 👋</h1>
                <p>A <span className="highlighted-text">creatvie designer</span> and <span className="highlighted-text">developer</span> with a passion to create engaging user interfaces and user experiences ✨</p>

                <div>
                    <a href="https://github.com/birmansahil">GitHub</a> &nbsp; / &nbsp;
                    <a href="https://www.linkedin.com/in/birmansahil/">LinkedIn</a> &nbsp; / &nbsp;
                    <a href="mailto:contact.birmansahil@gmail.com">Mail</a>
                </div>
            </div>
        </div>
    );
}

export default Intro;