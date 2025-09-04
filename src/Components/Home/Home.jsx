import React from "react";
import "./Home.css";
import profile from "../../assets/profile.png";

const Home = () => {
  return (
    <div className="home">
        <img src={profile} alt="Profile Picture" />
        <h1>Hi <span>I'm Jay,</span> Data Scientist based in the Philippines.</h1>
        <p>Driving innovations and delivering smarter decisions with data— blending Machine Learning, Analytics, and Business Intelligence.</p>
        <div className="home-action">
            <div className="home-connect">
                Connect with me
            </div>
            <div className="home-resume">
                View my resume
            </div>
        </div>
    </div>
  );
};

export default Home;