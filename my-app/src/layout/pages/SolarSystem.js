import React, { useEffect } from 'react';
import '../style/solarsystem.css';
import sun from '../../sources/images/planets/sun.png';
import PlanetFact from '../components/PlanetFact';

const SolarSystem = () => {
  useEffect(() => {
    createStars();
  }, []);

  const createStars = () => {
    const container = document.querySelector(".solar-system-container");
    for (let i = 0; i < 500; i++) {
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
    {/* <PlanetFact
        imageUrl={sun}
        title="Planet Name"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />     */}
      </>
  );
};

export default SolarSystem;
