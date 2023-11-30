import React from 'react'
import LinkIcon from "@material-ui/icons/OpenInNew"
import GitIcon from "@material-ui/icons/GitHub";

const PortfolioItem = (props) => {
    const {data} = props;

    return (
        <div className="portfolio-item">
            <div className="portfolio-image">
                <img src={data.alternativeImage} />
            </div>
            <div className="redirect">
                <a className="demo-redirect" href={data.demoLink} rel="noreferrer" target="_blank">
                    <LinkIcon/>
                </a>
            </div>
            <div className="portfolio-text">
                <h2>{data.title}</h2>
                <span className="">{data.technologies}</span>
            </div>
            <div className="portfolio-footer">
                <GitIcon />
                <a className="git-redirect" href={data.gitLink} rel="noreferrer" target="_blank">
                    Source Code
                </a>
            </div>
        </div>
    )
}

export default PortfolioItem
