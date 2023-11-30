import React from 'react'
import FirebaseIcon from "../../icons/FirebaseIcon"
import NetbeansIcon from "../../icons/NetbeansIcon"
import SublimeIcon from "../../icons/SublimeIcon"

const ToolsAndTechnologies = () => {
    return (
        <section className="tools-and-technologies">
            <div className="container">

                <h2>Languages & Frameworks</h2>
                <span className="dash-top-line"></span>
                <div className="tools-and-technologies__icons">
                    <div className="skill">
                        <i className="devicon-react-plain"></i>
                        <h4>React</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-typescript-plain colored"></i>
                        <h4>TypeScript</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-redux-plain"></i>
                        <h4>Redux</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-nodejs-plain"></i>
                        <h4>NodeJs</h4>
                    </div>
                    {/* <div className="skill">
                        <i className="devicon-express-original"></i>
                        <h4>Express</h4>
                    </div> */}
                    <div className="skill">
                        <i className="devicon-javascript-plain"></i>
                        <h4>JavaScript</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-jquery-plain"></i>
                        <h4>jQuery</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-css3-plain"></i>
                        <h4>CSS</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-sass-plain"></i>
                        <h4>SCSS</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-bootstrap-plain"></i>
                        <h4>Bootstrap</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-html5-plain"></i>
                        <h4>HTML 5</h4>
                    </div>
                    <div className="skill">
                        
                        <i class="devicon-tailwindcss-plain colored"></i>
          
                        <h4>Tailwind CSS</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-azure-plain colored"></i>
                        <h4>Azure</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-mysql-plain"></i>
                        <h4>SQL</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-python-plain colored"></i>
                        <h4>Python</h4>
                    </div>
                </div>

                <h2>Databases</h2>
                <span className="dash-top-line"></span>
                <div className="tools-and-technologies__icons">
                <div className="skill">
                        <i className="devicon-mongodb-plain"></i>
                        <h4>MongoDB</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-mysql-plain"></i>
                        <h4>MySQL</h4>
                    </div>
                    <div className="skill">
                        <FirebaseIcon />
                        <h4>Firebase Realtime</h4>
                    </div>
                </div>

                <h2>Project Management</h2>
                <span className="dash-top-line"></span>
                <div className="tools-and-technologies__icons">
                <div className="skill">
                        <i className="devicon-git-plain"></i>
                        <h4>Git</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-github-plain"></i>
                        <h4>Github</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-slack-plain"></i>
                        <h4>Slack</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-jira-plain colored"></i>
                        <h4>Jira</h4>
                    </div>
                </div>

                <h2>IDEs</h2>
                <span className="dash-top-line"></span>
                <div className="tools-and-technologies__icons">
                <div className="skill">
                        <i className="devicon-visualstudio-plain"></i>
                        <h4>VS Code</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-android-plain"></i>
                        <h4>Android Studio</h4>
                    </div>
                    <div className="skill">
                        <NetbeansIcon />
                        <h4>Netbeans</h4>
                    </div>
                    <div className="skill">
                        <SublimeIcon />
                        <h4>Sublime Text 3</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-atom-plain"></i>
                        <h4>Atom</h4>
                    </div>
                </div>

                {/* <h2>Extra Skills</h2>
                <span className="dash-top-line"></span> */}
                {/* <div className="tools-and-technologies__icons">
                    <div className="skill">
                        <i className="devicon-amazonwebservices-plain"></i>
                        <h4>AWS</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-photoshop-plain"></i>
                        <h4>Photoshop</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-woocommerce-plain"></i>
                        <h4>WooCommerce</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-facebook-plain"></i>
                        <h4>Facebook Graph Api</h4>
                    </div>
                    <div className="skill">
                        <i className="devicon-linkedin-plain"></i>
                        <h4>LinkedIn API</h4>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default ToolsAndTechnologies
