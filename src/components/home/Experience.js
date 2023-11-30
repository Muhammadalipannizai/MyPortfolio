import React, {useState} from 'react'

const Experience = () => {
    const [activeExperience, setActiveExperience] = useState(0);

    const activateExperience = (event, index) => {
        setActiveExperience(index);
    }

    const activeExperienceCheck = (index) => {
        if(index === activeExperience)
            return " active";
        
        return "";
    }

    return (
        <section className="home-experience">
            <div className="container">
                <h2>Experiences</h2>
                <span className="dash-top-line"></span>

                <div className="home-experience__experiences">
                    <div className="experience-menu">
                        <ul>
                            <li className={activeExperienceCheck(0)} onClick={(event) => activateExperience(event, 0)}>Wedplanix</li>
                            <li className={activeExperienceCheck(1)} onClick={(event) => activateExperience(event, 1)}>Troon Technologies</li>
                            <li className={activeExperienceCheck(2)} onClick={(event) => activateExperience(event, 2)}>Bachelor's Projects</li>
                        </ul>
                    </div>
                    <div className="experience-boxes">
                        <div className={"experience-box experience-box-1" + activeExperienceCheck(0)}>
                            <h3> Frontend Developer</h3>
                            <span >Wedplanix</span>
                            <p>June 2022 - November 2022</p>
                            <ul>
                                <li>A Swedish based IT company.</li>
                                <li>Worked as a junior frontend developer.</li>
                                <li>Developed frontend for new websites, bug fixing in existing websites, API integration etc.</li>
                                <li>Developed vender´s dashboard.</li>
                            </ul>
                        </div>
                        <div className={"experience-box experience-box-2" + activeExperienceCheck(1)}>
                            <h3>Frontend Developer</h3>
                            <span >Troon Technologies</span>
                            <p>August 2020 - June 2021</p>
                            <ul>
                                <li>1 years of work experience.</li>
                                <li>Designed and developed web applications using React, ensuring intuitive and visually appealing interfaces.</li>
                                <li>Enhance cross-browser compatibility to ensure seamless performance across web browsers.</li>
                                
                                <li>Project ranging from complete website development to bug fixes, speed optimization, adding new features, responsiveness.</li>
                            </ul>
                        </div>
                        <div className={"experience-box experience-box-3" + activeExperienceCheck(2)}>
                            <h3>Final Year Project</h3>
                            <span >Android Application</span>
                            <p>2019 - 2020</p>
                            <ul>
                                <li>Bachelors Final year project.</li>
                                <li>Location based social media application for Android.</li>
                                <li>Application capable of performing all functions like any other
                                    social media application along with core function for providing
                                    users location information on map.</li>
                                <li>Developed using KOTLIN</li>
                            </ul>
                           
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
