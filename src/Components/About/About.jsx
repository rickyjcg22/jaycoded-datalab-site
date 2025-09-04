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
        <div className="about-summary">
            <p>"Data professional skilled in analytics, business intelligence, and predictive modeling, with proven experience across academia, manufacturing, and IT. Strong background in research, documentation, and quality systems, combined with expertise in data storytelling and process optimization."</p>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <h1>Education</h1>
                <hr />
                <div className='about-education'>
                    <div>
                        <div>Master of Science in Chemical Engineering</div>
                        <p>Mapua University, School of Graduate Studies</p>
                        <p>Specialization: Data Science in Proton Exchange Membrane Fuel Cell Design Optimization</p>
                        <p>Awards and Recognition: DOST-ERDT Scholar</p>
                        <p>GWA: 1.2500</p>
                    </div>
                    <div>
                        <div>Bachelor of Science in Chemical Engineering</div>
                        <p>Mapua University, School of Graduate Studies</p>
                        <p>Specialization: Sustainable Engineering Technologies and Environmental Engineering</p>
                        <p>Awards and Recognition: Mapua Academic Scholar</p>
                        <p>GWA: 2.3659</p>
                    </div>
                </div>
                
            </div>
            <div className="about-right">
                <h1>Skills</h1>
                <hr />
            </div>
        </div>
    </div>
  );
};

export default About;