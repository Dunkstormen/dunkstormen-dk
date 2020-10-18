import React from 'react'
import './Header.css'
import { Twitter, LinkedIn, GitHub } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <div className="header__box">
                <div className="header__headshot"></div>
                <div className="header__intro">
                    <h1>Benjamin Jørgensen</h1>
                    <p>Trained IT supporter with a passion for providing a good customer experience.</p>
                </div>
                <div className="header__social">
                    <a href="https://www.linkedin.com/in/dunkstormen/" aria-label="LinkedIn Profile">
                        <LinkedIn fontSize="large" />
                    </a>
                    <a href="https://twitter.com/dunkstormen" aria-label="Twitter Profile">
                        <Twitter fontSize="large" />
                    </a>
                    <a href="https://github.com/Dunkstormen" aria-label="GitHub Profile">
                        <GitHub fontSize="large" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
