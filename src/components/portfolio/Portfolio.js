import React from 'react'
import RecentProjectsData from "../../data";
import PortfolioItem from '../layouts/PortfolioItem';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
            <div className="portfolio-wrapper">
                {
                    RecentProjectsData.map((data, index) => {
                        return <PortfolioItem data={data} />
                    })
                }
            </div>
                
            </div>
        </section>
    )
}

export default Portfolio
