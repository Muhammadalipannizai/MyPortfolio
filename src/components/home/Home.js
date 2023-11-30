import React from 'react'
import CoverSection from "./CoverSection";
import Experience from "./Experience";
import ToolsAndTechnologies from "./ToolsAndTechnologies"
import RecentProjects from "./RecentProjects";

const Home = () => {
    return (
        <>
            <CoverSection />
            <ToolsAndTechnologies />
            <Experience />
            <RecentProjects />  
        </>
    )
}

export default Home
