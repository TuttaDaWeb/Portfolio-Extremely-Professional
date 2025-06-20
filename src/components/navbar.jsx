import { useState, useEffect } from 'react';
import './navbar.css';

function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenu, setMenu] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    });

    return (
        <div className="wrapper">
            <h1>Arthur</h1>
            <div className="menu" onClick={() => setMenu(!isMenu)}><i class="ri-menu-line"></i></div>
            <div className={`navbar_background ${!isMenu ? '' : 'active'}`}>
                <div className="navbar">
                    <a href="#">Home</a>
                    <a href="#">About Me</a>
                    <a href="#">Projects</a>
                    <a href="https://www.instagram.com/tuttadocs/">Follow me</a>
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
