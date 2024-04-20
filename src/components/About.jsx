import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">About This App</h1>
      <p className="text-lg text-center mb-6">
        This application provides access to a variety of NASA's data and imagery through interactive features. Explore the wonders of the universe with our comprehensive tools.
      </p>

      <div className="space-y-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold text-primary">APOD: Astronomy Picture of the Day</h2>
          <p className="text-gray-600">
            Discover a new view of the cosmos each day. APOD offers stunning images and videos of space phenomena with insightful descriptions by professional astronomers.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold text-primary">Earth</h2>
          <p className="text-gray-600">
            Visualize Earth from space with satellite imagery. Adjust parameters like date, location, and cloud score to see different views and learn more about our planet.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold text-primary">Mars</h2>
          <p className="text-gray-600">
            Explore the surface of Mars through the lenses of NASA's rovers. Browse images taken from various cameras and sols, and experience the Martian landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
