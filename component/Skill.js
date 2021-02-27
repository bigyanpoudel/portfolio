import React from 'react'
import ProgressBars from './ProgressBar';
const Skill = () => {
    return (
        <section className="Skill" id="skill">
            <div className="header__title white">Skills</div>
            <div className="Skill__bar">
                <ProgressBars skill="css" value={70}/>
                <ProgressBars skill="html" value={70}/>
                <ProgressBars skill="javascript" value={55}/>
                <ProgressBars skill="Node.js" value={50}/>
                <ProgressBars skill="React" value={65}/>
                <ProgressBars skill="Express.js" value={45}/>
                <ProgressBars skill="Mongodb" value={55}/>
                <ProgressBars skill="Next.js" value={35}/>
            </div>
        </section>
    )
}

export default Skill
 