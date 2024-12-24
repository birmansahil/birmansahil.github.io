import React from "react";
import budgetTracker from "../images/budget-tracker.png";
import "./Projects.css";

const Projects = () => {
    return(
        <div className="projects-section">
            <h2>Crafted with love</h2>
            <p>These are the selection of my recent projects. Hover over any project to learn more!</p>
            
            <div className="projects-container">
                <div className="projects-container-first-row">
                    <div className="project">
                        <h3>Budget App</h3>
                        <img src={budgetTracker} alt="budget tracker" />
                    </div>

                    <div className="project">
                        <h3>Budget App</h3>
                        <img src={budgetTracker} alt="budget tracker" />
                    </div>
                </div>

                <div className="projects-container-second-row">
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
        </div>
    );
}

export default Projects;