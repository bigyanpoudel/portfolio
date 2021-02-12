import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import PraticleComponent from './particle';
const home = () => {
    return (
        <div className="Home">
            <PraticleComponent/>
            <div className="Home__intro">
                <div className="heading">
                    <span className="heading__primary">Hello, I'm <span className="heading__primary-color">Bigyan Poudel</span></span>
                    <span className="heading__ternary">I'm a web developer</span>
                    <button className="btn">
                        view profile <FontAwesomeIcon icon={faArrowRight} className="btn__icon"/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default home
