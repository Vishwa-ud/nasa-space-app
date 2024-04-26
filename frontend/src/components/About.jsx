import React from 'react';

import backgroundImage from '../assets/BGAbout.jpg';

function About() {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',  // 100% of the viewport width
        height: '100vh', // 100% of the viewport height
        position: 'fixed', // Optional: makes it cover the entire screen at all times
        top: 60,
        left: 0,
        zIndex: -1 // Optional: ensures it stays behind other content
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 py-10" style={{ marginTop: '2vh' }}>
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-600">About This App</h1>
        <p className="text-xl text-center mb-8">
          Explore the wonders of the universe with comprehensive tools providing access to NASA's data and imagery.
        </p>

        <div className="space-y-6">
          <div className="bg-purple/30 backdrop-blur-md transition-shadow hover:shadow-xl rounded-lg p-6 border border-white/60">
            <h2 className="text-3xl font-bold text-blue-600">APOD: Astronomy Picture of the Day</h2>
            <p className="text-white-700 mt-2">
              Discover a new view of the cosmos each day with stunning images and videos of space phenomena, accompanied by insights from professional astronomers.
            </p>
          </div>

          <div className="bg-purple/30 backdrop-blur-md transition-shadow hover:shadow-xl rounded-lg p-6 border border-white/60">
            <h2 className="text-3xl font-bold text-blue-600">EPIC</h2>
            <p className="text-white-700 mt-2">
            NASA's EPIC API (Earth Polychromatic Imaging Camera Application Programming Interface) offers access to a unique collection of breathtaking images of Earth captured by the Deep Space Climate Observatory (DSCOVR) satellite. These images showcase our planet's beauty and dynamic nature from a remarkable vantage point in space, providing valuable resources for scientific research, educational purposes, and public engagement with Earth and space exploration
            </p>
          </div>

          <div className="bg-purple/30 backdrop-blur-md transition-shadow hover:shadow-xl rounded-lg p-6 border border-white/60">
            <h2 className="text-3xl font-bold text-blue-600">Mars</h2>
            <p className="text-white-700 mt-2">
              Explore Mars through NASA's rovers' cameras. Browse sol-specific images and immerse yourself in the Martian landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
