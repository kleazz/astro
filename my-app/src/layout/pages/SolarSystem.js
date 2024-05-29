import React, { useEffect } from 'react';
import '../style/solarsystem.css';
import sun from '../../sources/images/planets/sun.png';

const SolarSystem = () => {
  useEffect(() => {
    createStars();
  }, []);

  const createStars = () => {
    const container = document.querySelector(".solar-system-container");
    for (let i = 0; i < 750; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  };

  return (
    <>
      <div className="info-box top-left">
        <h3>Left Top</h3>
        <p>This is a box on the top-left side.</p>
      </div>
      <div className="info-text bottom-left">
        <p>This is just text on the bottom-left side.</p>
      </div>
      <div className="info-text top-right">
        <p>This is just text on the top-right side.</p>
      </div>
      <div className="info-box bottom-right">
        <h3>Right Bottom</h3>
        <p>This is a box on the top-left side.</p>
      </div>
      <div className="solar-system-container planets">
        <div className="sun">
          <img src={sun} alt="sun" />
        </div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth">
          <div className="moon"></div>
        </div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
      </div>
    </>
  );
};

export default SolarSystem;
