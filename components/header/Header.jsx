import React from 'react';
import "./header.css";
import Logo from "/src/assets/logo.svg";

const Header = () => {
    return (
        <div>
            <header>
                <img className="logo" src={Logo} alt="ClarityUILogo" />
                <nav className="nav-bar">
                    <a className="nav-bar-text" href="#products">Products</a>
                    <a className="nav-bar-text" href="#features">Features</a>
                    <a className="nav-bar-text" href="#pricing">Pricing</a>
                    <a className="nav-bar-text" href="#support">Support</a>
                </nav>
                <button className="button-register">Start free trial</button>
            </header>
        </div>
    );
};

export default Header;
