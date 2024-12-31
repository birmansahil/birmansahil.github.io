import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return(

        <nav className="navbar">
            <ul className="nav-list">
                <li><a className="nav-list-link active">Work</a></li>
                <li><a className="nav-list-link">About</a></li>
                <li><a className="nav-list-link">YouTube</a></li>
                <li><a className="nav-list-link">Contact</a></li>
            </ul>

        </nav>
    );
}

export default Navbar;