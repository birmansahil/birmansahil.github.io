import React from "react";
import birmansahil from "../birmansahil.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "./Intro.css";

const Intro = () => {
    return (
        <div className="intro-section">
            <div className="intro-image">
                <img src={birmansahil} alt="Birman Sahil" />
            </div>

            <div className="intro-text">
                <h1>Hey! I'm Sahil Birman 👋</h1>
                <p>A <span className="highlighted-text">creatvie designer</span> and <span className="highlighted-text">developer</span> with a passion to create engaging and user experiences. ✨</p>

                <div className="intro-social-links">
                    <a href="https://github.com/birmansahil">GitHub</a> &nbsp; / &nbsp;
                    <a href="https://www.linkedin.com/in/birmansahil/">LinkedIn</a> &nbsp; / &nbsp;
                    <a href="mailto:contact.birmansahil@gmail.com">Mail</a>
                </div>
            </div>
            
            <FontAwesomeIcon className="scroll-down-arrow" icon={faAngleDown} />
        </div>
    );
}

export default Intro;