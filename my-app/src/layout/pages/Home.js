import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../style/home.css';
import homevideo from '../../sources/videos/homevideo.mp4';

const Home = () => {
  const visionRef = useRef(null); // Ref for the element where typing effect will be applied

  useEffect(() => {
    const typed = new Typed(visionRef.current, {
      strings: ["Space", "Sphere", "<span style='color: #6200ea;'>Vision</span>"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        if (arrayPos === 2) {
          self.stop(); // Stop typing after the "Vision" string
          stayLonger(); // Run custom function
        }
      }
    });

    // Custom function
    const stayLonger = () => {

      setTimeout(() => {
        typed.start(); // Restart typing after a delay
      }, 5000); // Change delay time as needed
    };

    // Clean up Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={homevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to Astro<span ref={visionRef}></span></h1>
        <p>Explore the wonders of the cosmos</p>
        <button onClick={() => { window.location.href = 'explore.html'; }}>Explore Now</button>
      </div>
    </div>
  );
};

export default Home;
