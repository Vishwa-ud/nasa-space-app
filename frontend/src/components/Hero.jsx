import React, { useState, useEffect } from 'react';
import { styles } from "./styles";
import backgroundImage from '../assets/background.jpg';
import { grid, reuleaux } from 'ldrs';

import Particle from './Particle';
import Foot from './Foot';

grid.register();
reuleaux.register();

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process, e.g., data fetching or preloading assets
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds (you can adjust based on your actual load time)
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (loading) {
    return (
      <div className="loader-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <l-reuleaux
          size="200"
          stroke="10"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.2" 
          color="#00FF11" 
        ></l-reuleaux>
      </div>
    );
  }

  return (
    <section className={`relative w-full h-screen mx-auto`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Particle />
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className={'flex flex-col justify-center items-center mt-5'} style={{ marginTop: '-35px' }}>
          <div className={'w-5 h-5 rounded-full bg-[#915EFF]'} />
          <div className={'w-1 sm:h-80 h-40 violet-gradient'} />
        </div>
        <div style={{ marginTop: '-50px' }}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, Welcome To <span className='text-[#915EFF]'>Celestial Voyage</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{textShadow: '2px 2px 4px rgba(0,0,0,10)'}}>
          Experience the cosmos like never before with NASA API-powered app! Journey through space, discovering its wonders and unlocking its mysteries. Explore the depths of the universe, where every star holds a story waiting to be told. Join the adventure and embark on a cosmic voyage that will ignite your imagination and expand your horizons.
          </p>
          <l-grid
            size="90"
            speed="1.5" 
            color="#915EFF" 
          ></l-grid>
        </div>
      </div>

      <Foot />
    </section>
  );
};

export default Hero;
