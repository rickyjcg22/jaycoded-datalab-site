import React from "react";
import './Work.css'
import theme_pattern from '../../assets/theme-pattern.png'

const Work = () => {
    return(
        <section id="work" className="section">
            <div className="work">
                <div className="work-title">
                    <h1>Work History</h1>
                    <img src={theme_pattern} alt="Theme Pattern" />
                </div>
                <div className="work-sections">

                </div>
            </div>
        </section>
        
    );
};

export default Work;