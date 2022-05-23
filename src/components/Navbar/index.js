import React from 'react';
import {Link} from "react-router-dom";
import "./index.css";
const Navbar = () => {
    return (
        <nav className="brand">
            <Link to={"/"}>
                <span className="brand-name">
                    Pokeapi
                </span>
            </Link>
        </nav>
    );
};

export default Navbar;