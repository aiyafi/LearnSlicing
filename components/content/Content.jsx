import React from 'react';
import "./content.css";
import NoImage from "/src/assets/nomedia.svg";

export const Content = () => {
    return (
        <div className="content">
            <div className="text-container">
                <h1>Meet the New Landingfolio Kit</h1>
                <p>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
                <button className='button-start'>Start using LandingFolio</button>
            </div>
            <div className="image-container">
                <img className="no-media" src={NoImage} alt="NoImage" />
            </div>
        </div>
    );
};
