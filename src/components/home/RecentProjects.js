import React from 'react'
import Project from "../layouts/Project"

import RecentProjectsData from "../../data";

const RecentProjects = () => {
    return (
        <section className="recent-projects">
            <div className="container">
                <h2>Recent Projects</h2>
                <span className="dash-top-line"></span>   

                <div className="recent-projects__list">
                    {
                        RecentProjectsData.map((data, index) => {
                            return <Project key={index} layout={index % 2 === 0 ? 'right' : 'left'} data={data}/>
                        })
                    }
                </div>     
            </div>
        </section>
    )
}

export default RecentProjects
