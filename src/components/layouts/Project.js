import React from 'react'
import GitIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/OpenInNew"

const Project = (props) => {
    const {data, layout} = props;

    return (
        <div className={`recent-project project-${layout}`}>
            <div className="recent-project__image">
                <img src={data.image} alt="Channel Slider"/>
                <span className="background-overlay"></span>
            </div>
            <div className="recent-project__text">
                <span className="project-count">{data.index}</span>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className="project-technologies">
                    <span className="">{data.technologies}</span>
                </div>
                <div className="actions">
                    <a className="git-redirect" href={data.gitLink} rel="noreferrer" target="_blank"><GitIcon/></a>
                    <a className="deploy-redirect" href={data.demoLink} rel="noreferrer" target="_blank"><LinkIcon /></a>
                </div>
            </div>
        </div>    
    )
}

export default Project
