import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import NavbarMenuItems from "./NavbarMenuItems"
import CloseIcon from "@material-ui/icons/Close";
import SocialLinks from "../SocialLinks";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
    const [onTop, setOnTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(window.scrollY > 0)
                setOnTop(false)
            else
                setOnTop(true)
        })
    }, [onTop])

    const menuToggle = () => {
        setIsMobileMenu(prevState => {
            return !prevState;
        })
    }

    return (
        <>
            <nav className={ onTop ? 'nav-top' : 'nav-scroll' }>
                <div className="navbar container">
                    <div className="navbar__main-logo">
                        <Link to="/">
                            <span>Muhammad</span>
                            <span>Ali</span>
                        </Link>
                    </div>
                    <NavbarMenuItems />
                    <div className="navbar__social-items">
                        <SocialLinks />
                    </div>
                    <div className="navbar__mobile-toggle" onClick={() => menuToggle()}>
                        <MenuIcon />
                    </div>
                </div>
            </nav>
            <div className={`mobile-menu ${isMobileMenuOpen ? "show" : "hide"}`} onClick={() => menuToggle()}>
                <div className="mobile-menu__wrapper">
                    <NavbarMenuItems />
                    <SocialLinks />
                    <div className="close-menu">
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;