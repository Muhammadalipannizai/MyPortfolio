import React from 'react'
import CoverDescription from './CoverDescription'
import profileImage from '../../images/portfolio.png';

const CoverSection = () => {
    return (
        <section className="home-cover">
            <div className="container">
                <div className="home-cover-content ">
                    <div className="home-cover__left-section">
                        <CoverDescription />
                    </div>
                    <div className="home-cover__right-section">
                        <div className="home-cover__profile-image">
                            <img src={profileImage} className="responsive-image" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-cover-animation">
                <div className="animation-rectangle"></div>
                <div className="animation-rectangle-fill"></div>
                <div className="animation-rectangle"></div>
                <div className="animation-rectangle-fill"></div>
                <div className="animation-rectangle"></div>
                <div className="animation-rectangle-fill"></div>
            </div>
        </section>
    )
}

export default CoverSection;