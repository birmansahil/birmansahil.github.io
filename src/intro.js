import React from "react";
import birmansahil from "./birmansahil.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    return (
        <div className="container intro-container">
            <div className="intro-text">
                <h1>Hey! I'm Sahil Birman 👋</h1>
                <p>A <span className="highlighted-text">creatvie designer</span> and <span className="highlighted-text">developer</span> with a passion to create engaging and user experiences. ✨</p>
            </div> 

            <div className="intro-image">
                <img src={birmansahil} alt="Birman Sahil" />
            </div>
            
            <FontAwesomeIcon className="down-arrow" icon={faAngleDown} />
        </div>
    );
}

export default Intro;