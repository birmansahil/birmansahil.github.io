import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li><a className="nav-list-link">Work</a></li>
                <li><a className="nav-list-link">About</a></li>
                <li><a className="nav-list-link">Contact</a></li>
                <li><a className="nav-list-link">Work</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;