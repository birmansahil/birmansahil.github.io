import React from "react";
import budgetTracker from "../images/budget-tracker.png";
import "./Projects.css";

const Projects = () => {
    return(
        <div className="projects-section">
            <h2>Projects I've Built 👨‍💻</h2>
            <p>Explore my latest creations blending <span className="highlighted-text">innovation</span> and <span className="highlighted-text">design</span></p>
            
            <div className="projects-grid">
                <div className="project">
                    <h3>Budget App</h3>
                    <img src={budgetTracker} alt="budget tracker" />
                </div>

                <div className="project">
                    <h3>Budget App</h3>
                    <img src={budgetTracker} alt="budget tracker" />
                </div>

                <div className="project">
                    <h3>Budget App</h3>
                    <img src={budgetTracker} alt="budget tracker" />
                </div>

                <div className="project">
                    <h3>Budget App</h3>
                    <img src={budgetTracker} alt="budget tracker" />
                </div>

                <div className="project">
                    <h3>Budget App</h3>
                    <img src={budgetTracker} alt="budget tracker" />
                </div>

                <div className="project">
                    <h3>Budget App</h3>
                    <img src={budgetTracker} alt="budget tracker" />
                </div>
            </div>
        </div>
    );
}

export default Projects;