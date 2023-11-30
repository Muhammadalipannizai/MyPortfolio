import React from 'react'
import SocialLinks from './SocialLinks';
import CopyRightIcon from "@material-ui/icons/Copyright"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <SocialLinks />
            <p>CopyRight <CopyRightIcon /> {year} <span>Muhammad Ali</span> All Rights Reserved</p>            
        </footer>
    )
}

export default Footer
