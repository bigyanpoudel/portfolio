
import React from 'react'
import * as Scroll from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons"; 
const Header = () => {
    const navItems = ['Home','About','Skill','Project','Contact'];
    const [active,SetActive]=React.useState(false);
   let Link = Scroll.Link;
   const menuHandler = ()=>{
       SetActive(!active);
   }
    return (
        <header className="header">
            <div className="header__logo">BP</div>
            <div className="mobile__menu" onClick={menuHandler}>
                <FontAwesomeIcon icon={active ? faTimes : faBars}/>
            </div>
                <ul className={active ? 'header__navbar active__menu':'header__navbar' }>
                    <li className="nav-link">
                        <Link activeClass="active" to="home" spy={true} smooth={true}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link activeClass="active" to="profile" spy={true} smooth={true}>
                            Profile
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link activeClass="active" to="home" spy={true} smooth={true}>
                            Skill
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link activeClass="active" to="profile" spy={true} smooth={true}>
                            Project
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link activeClass="active" to="profile" spy={true} smooth={true}>
                            Contact
                        </Link>
                    </li>
                </ul>
           
        </header>
    )
}

export default Header
