import React, { useState, useEffect } from 'react';

function Mars() {
    const [sol, setSol] = useState();
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
            <h1 className="text-3xl font-bold mb-4">Mars Rover Photos</h1>
            <div className="flex items-center justify-center space-x-4 mb-4">
                <label htmlFor="sol" className="text-white-700">Enter Sol (Mars Solar Day):</label>
                <input type="number" value={sol} onChange={e => setSol(e.target.value)} placeholder="Sol (Mars Solar Day)" className="border border-gray-300 rounded-md py-2 px-4" />
                
                <select value={camera} onChange={e => setCamera(e.target.value)} className="border border-gray-300 rounded-md py-2 px-4">
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
                
                <label htmlFor="page" className="text-white-700">Enter Page Number:</label>
                <input type="number" value={page} onChange={e => setPage(e.target.value)} placeholder="Page Number" className="border border-gray-300 rounded-md py-2 px-4" />
                
                <button onClick={fetchPhotos} disabled={loading} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    {loading ? 'Loading...' : 'Fetch Mars Photos'}
                </button>
            </div>

            {error ? <p className="text-red-500 mb-4">{error}</p> : null}

            {roverManifest && (
                <div className="mb-4">
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
