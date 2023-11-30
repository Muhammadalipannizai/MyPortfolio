import React from 'react'
import {Link} from "react-router-dom";

const NavbarMenuItems = () => {
    return (
        <div className="navbar__menu-items">
            <Link to={'/'}>Home</Link>
            <Link to={'/about-me'}>About</Link>
            <Link to={'/portfolio'}>Portfolio</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    )
}

export default NavbarMenuItems
