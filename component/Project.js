import React from 'react'
import ProjectComponent from './ProjectComponent';
const Project = () => {
    return (
        <section className="Project" id="project">
             <div className="header__title grey">Projects</div>
            <div className="Project__container">
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
           </div>

        </section>
    )
}

export default Project 
