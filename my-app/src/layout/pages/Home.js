import React from 'react';
import '../style/home.css';

const Home = () => {
  return (
    <body>
    <div className="video-container">
        <video autoplay loop muted>
            <source src="planet_rotation.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className="content">
            <h1>Welcome to AstroVision</h1>
            <p>Explore the wonders of the cosmos</p>
            <button onclick="location.href='explore.html'">Explore Now</button>
        </div>
    </div>
    </body>
  );
};


export default Home;