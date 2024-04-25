import React, { useState, useEffect } from 'react';

import backgroundImage from '../assets/Earth.jpg';

import './Mars.css';

function Mars() {
    const [sol, setSol] = useState('');
    const [camera, setCamera] = useState('');
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [roverManifest, setRoverManifest] = useState(null);

    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY; // Your NASA API key

    useEffect(() => {
        // Fetch mission manifest when component mounts
        fetchMissionManifest();
    }, []);

    const fetchMissionManifest = async () => {
        try {
            const roverName = 'curiosity'; // You can change this to fetch manifests for other rovers dynamically
            const manifestUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${NASA_KEY}`;
            const response = await fetch(manifestUrl);
            const data = await response.json();
            setRoverManifest(data.photo_manifest);
        } catch (error) {
            console.error('Error fetching mission manifest:', error);
            setError('Error loading mission manifest. Please try again later.');
        }
    };

    const fetchPhotos = async () => {
        setLoading(true);
        setError(null);
        const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`;
        const query = `?sol=${sol}${camera ? `&camera=${camera}` : ''}&page=${page}&api_key=${NASA_KEY}`;
        const url = baseUrl + query;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.photos) {
                setPhotos(data.photos);
            } else {
                setPhotos([]);
                setError('No photos found or data structure is unexpected.');
            }
        } catch (error) {
            console.error('Error fetching Mars photos:', error);
            setPhotos([]);
            setError('Error loading photos. Please check your connection and try again.');
        }
        setLoading(false);
    };

    return (
        <div className="container mx-auto p-4">
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
            <h1 className="text-3xl font-bold mb-4">Mars Rover Photos</h1>
            <div className="flex flex-col items-center mb-4">
    <label className="text-white-700 mb-2">Enter Sol (Mars Solar Day):</label>
    <input type="number" value={sol} onChange={e => setSol(e.target.value)} placeholder="Sol (Mars Solar Day)" className="input-style" />
    
    <label className="text-white-700 mt-4 mb-2">Select a Rover Camera:</label>
    <select value={camera} onChange={e => setCamera(e.target.value)} className="input-style">
        <option value="">Select a Rover Camera</option>
        <option value="FHAZ">FHAZ</option>
        <option value="RHAZ">RHAZ</option>
        <option value="MAST">MAST</option>
        <option value="CHEMCAM">CHEMCAM</option>
        <option value="MAHLI">MAHLI</option>
        <option value="MARDI">MARDI</option>
        <option value="NAVCAM">NAVCAM</option>
        <option value="PANCAM">PANCAM</option>
        <option value="MINITES">MINITES</option>
    </select>
    
    <label className="text-white-700 mt-4 mb-2">Enter Page Number:</label>
    <input type="number" value={page} onChange={e => setPage(e.target.value)} placeholder="Page Number" className="input-style" />
    
    <button onClick={fetchPhotos} disabled={loading} className="button-style">
        {loading ? 'Loading...' : 'Fetch Mars Photos'}
    </button>
</div>

            {error ? <p className="text-red-500 mb-4">{error}</p> : null}

            {roverManifest && (
                <div className="bg-black/30 backdrop-blur-md transition-shadow hover:shadow-xl rounded-lg p-6 border border-white/60">
                    <h2 className="text-xl font-bold">Mission Manifest</h2>
                    <p>Rover: {roverManifest.name}</p>
                    <p>Landing Date: {roverManifest.landing_date}</p>
                    <p>Launch Date: {roverManifest.launch_date}</p>
                    <p>Status: {roverManifest.status}</p>
                    <p>Max Sol: {roverManifest.max_sol}</p>
                    <p>Max Date: {roverManifest.max_date}</p>
                    <p>Total Photos: {roverManifest.total_photos}</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                    <div key={index} className="border border-gray-300 rounded-md p-4">
                        <img src={photo.img_src} alt={`Mars Rover on Sol ${sol}`} className="w-full h-auto rounded-md" />
                        <p className="text-white-800 font-bold mt-2">Camera: {photo.camera.full_name}</p>
                        <p className="text-white-600">Date taken: {photo.earth_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mars;
