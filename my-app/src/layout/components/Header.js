import React from 'react';
import '../style/header.css';
import buttonClickSound from '../../sources/audio/roughclick.wav';

const Header = () => {
    const playButtonClickSound = () => {
        const audio = new Audio(buttonClickSound);
        audio.play();
      };
    return (
        <header>
            <div className="container">
                <div className='nav-buttons'>
                <h3>Astro<span style={{ color: '#6200ea' }}>Vision</span></h3>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                </div>
                <div className="auth-buttons">
                    <button className="login-button" onClick={() => { playButtonClickSound();}}>Log in</button>
                    <button className="signup-button" onClick={() => { playButtonClickSound();}}>Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
