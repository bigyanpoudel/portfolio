
import React,{useEffect,useState} from 'react'
import * as Scroll from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons"; 
const Header = () => {
    const navItems = ['Home','About','Skill','Project','Contact'];
    const [active,SetActive]=useState(false);
    const [scroll,SetScroll]= useState(false);
   let Link = Scroll.Link;
   const menuHandler = ()=>{
       SetActive(!active);
   }
   useEffect(()=>{
    const handleScroll = ()=>{
        window.pageYOffset > 80 ? SetScroll(true) : SetScroll(false);
    }
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll)
   },[]);
    return (
        <header className={scroll ? `header header__scroll`:`header`}>
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
                        <Link activeClass="active" to="skill" spy={true} smooth={true}>
                            Skill
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link activeClass="active" to="project" spy={true} smooth={true}>
                            Project
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link activeClass="active" to="blog" spy={true} smooth={true}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link activeClass="active" to="contact" spy={true} smooth={true}>
                            Contact
                        </Link>
                    </li>
                </ul>
           
        </header>
    )
}

export default Header
