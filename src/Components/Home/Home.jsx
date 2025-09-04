import React from "react";
import "./Home.css";
import profile from "../../assets/profile.png";

const Home = () => {
  return (
    <div>
        <img src={profile} alt="Profile Picture" />
        <h1>Hi I'm Jay, Data Scientist based in the Philippines.</h1>
    </div>
  );
};

export default Home;