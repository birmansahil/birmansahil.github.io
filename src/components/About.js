import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return(
        <div className="about-section">
            <h2>About Me</h2>
            <p>Hello again! I am Sahil Birman a designer and developer based in Toronto, Canada. Currently I am pursuing a Computer Programmer course at Humber College. I am in my third semester, expanding my knowledge of latest technologies. While my primary focus is web development, I am also exploring Go to broaden my skill set.</p>
            <p>I am always eager to discuss innovative projects and connect with like-minded individuals. Whether it's web development or even a game of chess, I'd love to hear from you. Feel free to reach out. Let's connect!</p>

            <div>
                <h2>Tech Stack</h2>
                <div>
                <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    );
}

export default About;