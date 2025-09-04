import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme-pattern.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="Theme Pattern" />
        </div>
        <div className="about-sections">
            <div className="about-left">

            </div>
            <div className="about-right">
                
            </div>
        </div>
    </div>
  );
};

export default About;