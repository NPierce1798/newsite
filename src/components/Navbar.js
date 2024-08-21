import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to={'/'} style={{textDecoration: 'none', color: 'rgb(255,255,255)'}}>Nicolas.</Link>
            </div>
            <div 
                className="navbar__button" 
                onMouseEnter={() => handleMouseEnter('menu1')} 
                onMouseLeave={handleMouseLeave}
            >
                Portfolio
                {activeDropdown === 'menu1' && (
                    <div className="dropdown">
                        <ul>
                            <Link to={"/portfolio/ai-game"}><li>AI Game</li></Link>
                            <a href='https://www.justask.codes/' className='nav_a'><li>JustAsk Technologies</li></a>
                            <a href='https://thebravoburrito.com/' className='nav_a'><li>Bravo Burrito</li></a>
                        </ul>
                    </div>
                )}
            </div>
            <div 
                className="navbar__button" 
                onMouseEnter={() => handleMouseEnter('menu2')} 
                onMouseLeave={handleMouseLeave}
            >
                Learn
                {activeDropdown === 'menu2' && (
                    <div className="dropdown">
                        <ul>
                            <a href='https://medium.com/@npierce1798/protocols-of-the-internet-d0c98200198b' className='nav_a'><li>Internet Protocols</li></a>
                            <a href='https://medium.com/@npierce1798/how-does-google-process-a-request-c92191602d9f' className='nav_a'><li>Google Requests</li></a>
                            
                        </ul>
                    </div>
                )}
            </div>
            <div 
                className="navbar__button" 
                onMouseEnter={() => handleMouseEnter('menu3')} 
                onMouseLeave={handleMouseLeave}
            >
                Contact & More
                {activeDropdown === 'menu3' && (
                    <div className="dropdown">
                        <ul>
                            <Link to={'/login'}><li>Login</li></Link>
                            <a href='www.linkedin.com/in/nicolas-pierce' className='nav_a'><li>LinkedIn</li></a>
                            <a href='https://medium.com/@npierce1798' className='nav_a'><li>Medium</li></a>
                            <a href='https://www.justask.codes/' className='nav_a'><li>JustAsk</li></a>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
