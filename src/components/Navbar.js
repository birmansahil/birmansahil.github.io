import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(

        <nav className="navbar">
            <ul className="nav-list">
                <li><a className="nav-list-link active">Work</a></li>
                <li><a className="nav-list-link">About</a></li>
                <li><a className="nav-list-link" href="https://www.youtube.com/@birmansahil">YouTube</a></li>
                <li><a className="nav-list-link" href="mailto:contact.birmansahil@gmail.com">Contact</a></li>
            </ul>

        </nav>
    );
}

export default Navbar;