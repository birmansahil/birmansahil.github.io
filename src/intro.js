import React from "react";
import birmansahil from "./birmansahil.png";

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
            
        </div>
    );
}

export default Intro;