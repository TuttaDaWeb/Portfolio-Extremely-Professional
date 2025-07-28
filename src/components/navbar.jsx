import { useState, useEffect } from 'react';
import './navbar.css';
import Projects from './secundary/projects/Projects';

function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenu, setMenu] = useState(false)

    const towardPartOfWebsite = (e, name)=>{
        e.preventDefault()
        const menu = document.querySelector('.container')
        const aboutme = document.querySelector('.container_about')
        const projects = document.querySelector('.container_projects')
        if(name === 'menu'){
            menu.scrollIntoView({behavior: 'smooth'})
        }
        if(name === 'aboutme'){
            aboutme.scrollIntoView({behavior: 'smooth'})
        }
        if(name === 'projects'){
            projects.scrollIntoView({behavior: 'smooth'})
        }
    }
    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    });

    return (
        <div className="wrapper">
            <h1>Arthur</h1>
            <div className="menu" onClick={() => setMenu(!isMenu)}><i class="ri-menu-line"></i></div>
            <div className={`navbar_background ${!isMenu ? '' : 'active'}`}>
                <div className="navbar_close">
                    <div className="navbar">
                        <a href="#" onClick={(e)=>towardPartOfWebsite(e, 'menu')}>Home</a>
                        <a href="#" onClick={(e)=>towardPartOfWebsite(e, 'aboutme')}>About Me</a>
                        <a href="#" onClick={(e)=>towardPartOfWebsite(e, 'projects')}>Projects</a>
                        <a href="https://www.instagram.com/tuttadocs/">Follow me</a>
                    </div>
                    <div className="close" onClick={()=> setMenu(!isMenu)}><i class="ri-close-line"></i></div>
                </div>
            </div>
            <div className="dark_light_mode">
                <div className="mode" onClick={() => setIsDarkMode(prev => !prev)}>
                    <i className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'}`}></i>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
