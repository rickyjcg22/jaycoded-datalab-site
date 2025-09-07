import React from 'react';
import './About.css'
import self from "../../assets/self.png"
import theme_pattern from '../../assets/theme-pattern.png'
import star_3 from '../../assets/star3.png'
import star_4 from '../../assets/star4.png'
import star_45 from '../../assets/star4-5.png'

const About = () => {
  return (
    <section id="about" className='section'>
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="about-summary">
                <div>
                    <img src={self} alt="" />
                    <p>"Data professional skilled in analytics, business intelligence, and predictive modeling, with proven experience across academia, manufacturing, and IT. Strong background in research, documentation, and quality systems, combined with expertise in data storytelling and process optimization."</p>
                </div>
                
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <h1>Education</h1>
                    <hr />
                    <div className='about-education'>
                        <div className='education'>
                            <div>Master of Science in Chemical Engineering</div>
                            <p>Mapua University, School of Graduate Studies</p>
                            <p>Specialization: Data Science in Proton Exchange Membrane Fuel Cell Design Optimization</p>
                            <p>Awards and Recognition: DOST-ERDT Scholar</p>
                            <p>GWA: 1.2500</p>
                        </div>
                        <div className='education'>
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
                    <div className="about-skills">
                        <div className='about-skills-top'>
                            <div className='skills'>
                                <img src={star_45} alt="Star Rating" />
                                <div>Scientific Machine Learning</div>
                                <p>Machine Learning, Regression & Classification Analysis, Physics-informed Neural Network, Deep Learning, Predictive Modeling</p>
                                <ul>
                                    <li>Programming Languages: Matlab, Python, R, C++</li>
                                    <li>Libraries/Packages: NumPy, Pandas, SciPy, Scikit-learn, PyTorch, XGBoost, LightGBM, Statsmodels</li>
                                    <li>Software/Others: Git, GitHub, VS Code, Linux, Aspen Hysis, Scilab, Origin Pro, Minitab</li>
                                </ul>
                            </div>
                            <div className='skills'>
                                <img src={star_45} alt="Star Rating" />
                                <div>Data Analytics</div>
                                <p>Exploratory Data Analysis, Data Wrangling & Aggregation, Data Visualization & Storytelling</p>
                                <ul>
                                    <li>Programming Languages: Python, R, SQL, JavaScript</li>
                                    <li>Libraries/Packages: NumPy, Pandas, Matplotlib, Seaborn, Statsmodels</li>
                                    <li>Software/Others: Git, GitHub, VS Code, Linux, MS Excel, Google Workspace & AppScript, VS Code</li>
                                </ul>
                            </div>
                            <div className='skills'>
                                <img src={star_3} alt="Star Rating" />
                                <div>Data Engineering</div>
                                <p>Data Modeling, ETL and ELT</p>
                                <ul>
                                    <li>Programming Languages: SQL, Python</li>
                                    <li>Databases: MySQL, Google BigQuery, Snowflake, Database Design, Data Warehouse & Data Lakes, Star & Snowflake Schema</li>
                                    <li>Software/Others: Git, GitHub, VS Code, Linux</li>
                                </ul>
                            </div>
                        </div>
                        <div className='about-skills-bot'>
                            <div className='skills'>
                                <img src={star_4} alt="Star Rating" />
                                <div>Business Intelligence</div>
                                <p>Data Modeling, Dashboard Development, KPI Monitoring, Reporting, SharePoint Development</p>
                                <ul>
                                    <li>Programming Languages: SQL, Python</li>
                                    <li>Tools: Power BI, Looker Studio, Tableau, SharePoint, Power Apps, Power Automate</li>
                                    <li>Software/Others: Git, GitHub, VS Code, Linux</li>
                                </ul>
                            </div>
                            <div className='skills'>
                                <img src={star_4} alt="Star Rating" />
                                <div>Business Analysis</div>
                                <p>Process Mapping, Process Optimization, Documentation (SOPs, Technical Docs), Communications, Client Engagement, Requirement Gathering</p>
                                <ul>
                                    <li>Software/Others: MS Office 365, Power BI, Power Apps, SharePoint</li>
                                </ul>
                            </div>
                            <div className='skills'>
                                <img src={star_45} alt="Star Rating" />
                                <div>Technical Documentation</div>
                                <p>Research Writing, Publications, SOP Creation, Technical Manuals, Process Mapping, ISO 9001:2015 Documentation</p>
                                <ul>
                                    <li>Software/Others: MS Office 365, Google Workspace, SharePoint</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default About;